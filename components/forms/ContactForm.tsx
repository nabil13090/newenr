"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().email("Adresse email invalide").max(150, "L'email ne peut pas dépasser 150 caractères"),
  phone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{2}){4}$/, "Format de téléphone invalide")
    .optional()
    .or(z.literal("")),
  subject: z.enum(["devis", "etude", "info", "autre"], {
    required_error: "Veuillez sélectionner un sujet",
  }),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(500, "Le message ne peut pas dépasser 500 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const apiUrl =
        process.env.NODE_ENV === "production" ? "/api/contact.php" : "/api/contact";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message envoyé avec succès !",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Une erreur est survenue. Veuillez réessayer.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (hasError: boolean) => `field${hasError ? " err" : ""}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitStatus.type === "success" && (
        <div className="success show">✓ {submitStatus.message}</div>
      )}
      {submitStatus.type === "error" && (
        <div
          className="success show"
          style={{ background: "var(--sky)", borderColor: "var(--primary)", color: "var(--primary-dark)" }}
        >
          {submitStatus.message}
        </div>
      )}

      <div className={fieldClass(!!errors.name)}>
        <label htmlFor="name">Nom complet *</label>
        <input {...register("name")} type="text" id="name" />
        <span className="msg">{errors.name?.message}</span>
      </div>

      <div className="frow">
        <div className={fieldClass(!!errors.email)}>
          <label htmlFor="email">Email *</label>
          <input {...register("email")} type="email" id="email" />
          <span className="msg">{errors.email?.message}</span>
        </div>
        <div className={fieldClass(!!errors.phone)}>
          <label htmlFor="phone">Téléphone</label>
          <input {...register("phone")} type="tel" id="phone" />
          <span className="msg">{errors.phone?.message}</span>
        </div>
      </div>

      <div className={fieldClass(!!errors.subject)}>
        <label htmlFor="subject">Sujet *</label>
        <select {...register("subject")} id="subject">
          <option value="">Sélectionnez un sujet</option>
          <option value="devis">Demande de devis</option>
          <option value="etude">Étude de faisabilité</option>
          <option value="info">Demande d&apos;information</option>
          <option value="autre">Autre</option>
        </select>
        <span className="msg">{errors.subject?.message}</span>
      </div>

      <div className={fieldClass(!!errors.message)}>
        <label htmlFor="message">Message *</label>
        <textarea {...register("message")} id="message" rows={5} />
        <span className="msg">{errors.message?.message}</span>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="cta cta--primary"
        style={{ width: "100%", marginTop: "0.5rem", opacity: isSubmitting ? 0.7 : 1 }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
