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
    
    const rateLimitResult = await rateLimit(`contact:${ip}`, 5, 60000); // 5 requêtes par minute
    
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
    if (contentLength && parseInt(contentLength) > 2000) {
      return NextResponse.json(
        { error: "Payload trop volumineux" },
        { status: 413 }
      );
    }

    const body = await request.json();
    
    // Vérifier la taille après parsing
    if (JSON.stringify(body).length > 2000) {
      return NextResponse.json(
        { error: "Payload trop volumineux" },
        { status: 413 }
      );
    }

    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
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
      // Return success even if email is not configured (for development)
      return NextResponse.json(
        { message: "Message reçu (email non configuré)" },
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

    // Map subjects
    const subjectMap: Record<string, string> = {
      devis: "Demande de devis",
      etude: "Étude de faisabilité",
      info: "Demande d'information",
      autre: "Autre demande",
    };

    const subjectText = subjectMap[subject] || "Nouvelle demande de contact";

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
          .message-box { background: white; padding: 15px; border-left: 4px solid #00a86b; margin-top: 15px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Nouveau message de contact</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Nom:</span> ${sanitizeHtml(name)}
            </div>
            <div class="field">
              <span class="label">Email:</span> <a href="mailto:${email}">${sanitizeHtml(email)}</a>
            </div>
            ${phone ? `<div class="field"><span class="label">Téléphone:</span> ${sanitizeHtml(phone)}</div>` : ""}
            <div class="field">
              <span class="label">Sujet:</span> ${sanitizeHtml(subjectText)}
            </div>
            <div class="message-box">
              <div class="label">Message:</div>
              <p>${sanitizeHtml(message).replace(/\n/g, "<br/>")}</p>
            </div>
          </div>
          <div class="footer">
            <p>Ce message a été envoyé depuis le formulaire de contact du site Electrotech</p>
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
      subject: `Electrotech - Contact - ${sanitizeText(subjectText)}`,
      html: emailHtml,
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Email timeout")), 8000);
    });

    try {
      await Promise.race([emailPromise, timeoutPromise]);
    } catch (error) {
      if (error instanceof Error && error.message === "Email timeout") {
        console.error("[CONTACT] Email sending timeout");
        // On continue quand même, l'email peut être envoyé en arrière-plan
      } else {
        throw error;
      }
    }

    // Send confirmation email to client (non bloquant)
    transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@electrotech13.fr",
      to: email,
      subject: "Confirmation de votre message - Electrotech",
      html: `
        <h2>Merci pour votre message !</h2>
        <p>Bonjour ${sanitizeHtml(name)},</p>
        <p>Nous avons bien reçu votre message concernant : <strong>${sanitizeHtml(subjectText)}</strong></p>
        <p>Notre équipe vous répondra dans les plus brefs délais.</p>
        <p>Cordialement,<br/>L'équipe Electrotech</p>
      `,
    }).catch((err) => {
      console.error("Error sending confirmation email:", err);
      // Ne pas bloquer la réponse si l'email de confirmation échoue
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès !" },
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
    console.error("[CONTACT ERROR]", {
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    });
    
    // Ne pas exposer les détails de l'erreur
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
