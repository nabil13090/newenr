import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/ratelimit";
import { sanitizeHtml, sanitizeText } from "@/lib/sanitize";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "127.0.0.1";
    
    const rateLimitResult = await rateLimit(`entreprise:${ip}`, 5, 60000);
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer dans quelques instants." },
        { 
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitResult.reset.toString(),
          },
        }
      );
    }

    // Vérifier la taille du payload
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 3000) {
      return NextResponse.json(
        { error: "Payload trop volumineux" },
        { status: 413 }
      );
    }

    const body = await request.json();
    
    if (JSON.stringify(body).length > 3000) {
      return NextResponse.json(
        { error: "Payload trop volumineux" },
        { status: 413 }
      );
    }

    const { entreprise, secteur, surface, objectif, ville, departement, nom, email, phone, message } = body;

    // Validate required fields
    if (!entreprise || !secteur || !surface || !objectif || !ville || !departement || !nom || !email || !phone) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Configure email transporter
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials not configured. Email sending disabled.");
      return NextResponse.json(
        { message: "Demande reçue (email non configuré)" },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const objectifMap: Record<string, string> = {
      revente: "Revente totale",
      autoconsommation: "Autoconsommation",
      "les-deux": "Revente et autoconsommation",
    };

    const objectifText = objectifMap[objectif] || objectif;

    // Prepare email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #00a86b; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #00a86b; }
          .section { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #00a86b; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Nouvelle demande - Projet solaire entreprise</h2>
          </div>
          <div class="content">
            <div class="section">
              <h3 style="color: #00a86b; margin-bottom: 15px;">Informations entreprise</h3>
              <div class="field">
                <span class="label">Entreprise:</span> ${sanitizeHtml(entreprise)}
              </div>
              <div class="field">
                <span class="label">Secteur d'activité:</span> ${sanitizeHtml(secteur)}
              </div>
              <div class="field">
                <span class="label">Surface toiture:</span> ${sanitizeHtml(surface)}
              </div>
              <div class="field">
                <span class="label">Objectif:</span> ${sanitizeHtml(objectifText)}
              </div>
              <div class="field">
                <span class="label">Localisation:</span> ${sanitizeHtml(ville)}, ${sanitizeHtml(departement)}
              </div>
            </div>
            <div class="section">
              <h3 style="color: #00a86b; margin-bottom: 15px;">Contact</h3>
              <div class="field">
                <span class="label">Nom:</span> ${sanitizeHtml(nom)}
              </div>
              <div class="field">
                <span class="label">Email:</span> <a href="mailto:${email}">${sanitizeHtml(email)}</a>
              </div>
              <div class="field">
                <span class="label">Téléphone:</span> ${sanitizeHtml(phone)}
              </div>
              ${message ? `<div class="field"><span class="label">Message:</span> ${sanitizeHtml(message).replace(/\n/g, "<br/>")}</div>` : ""}
            </div>
          </div>
          <div class="footer">
            <p>Ce message a été envoyé depuis le formulaire "Équiper mon entreprise"</p>
            <p>IP: ${request.headers.get("x-forwarded-for") || "N/A"} | Date: ${new Date().toLocaleString("fr-FR")}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email with timeout
    const emailPromise = transporter.sendMail({
      from: process.env.SMTP_FROM || email,
      to: process.env.CONTACT_EMAIL || "contact@electrotech13.fr",
      replyTo: email,
      subject: `Electrotech - Demande projet solaire entreprise - ${sanitizeText(entreprise)}`,
      html: emailHtml,
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Email timeout")), 8000);
    });

    try {
      await Promise.race([emailPromise, timeoutPromise]);
    } catch (error) {
      if (error instanceof Error && error.message === "Email timeout") {
        console.error("[ENTREPRISE] Email sending timeout");
      } else {
        throw error;
      }
    }

    // Send confirmation email to client (non bloquant)
    transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@electrotech13.fr",
      to: email,
      subject: "Confirmation de votre demande - Electrotech",
      html: `
        <h2>Merci pour votre demande !</h2>
        <p>Bonjour ${sanitizeHtml(nom)},</p>
        <p>Nous avons bien reçu votre demande d'étude pour équiper <strong>${sanitizeHtml(entreprise)}</strong> en panneaux solaires.</p>
        <p>Notre équipe va étudier votre projet et vous contactera dans les plus brefs délais.</p>
        <p>Cordialement,<br/>L'équipe Electrotech</p>
      `,
    }).catch((err) => {
      console.error("Error sending confirmation email:", err);
    });

    return NextResponse.json(
      { message: "Votre demande a été envoyée avec succès !" },
      { 
        status: 200,
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": rateLimitResult.reset.toString(),
        },
      }
    );
  } catch (error) {
    console.error("[ENTREPRISE ERROR]", {
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    });
    
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
