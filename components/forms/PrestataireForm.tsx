"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const prestataireSchema = z.object({
  entreprise: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères").max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères"),
  typeProjet: z.string().min(2, "Le type de projet est requis").max(100, "Le type de projet ne peut pas dépasser 100 caractères"),
  localisation: z.string().min(2, "La localisation est requise").max(200, "La localisation ne peut pas dépasser 200 caractères"),
  volumeEstime: z.string().min(1, "Le volume estimé est requis").max(100, "Le volume estimé ne peut pas dépasser 100 caractères"),
  delais: z.string().min(1, "Les délais sont requis").max(100, "Les délais ne peuvent pas dépasser 100 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  fonction: z.string().min(2, "La fonction est requise").max(100, "La fonction ne peut pas dépasser 100 caractères"),
  email: z.string().email("Adresse email invalide").max(150, "L'email ne peut pas dépasser 150 caractères"),
  phone: z.string()
    .regex(/^(\+33|0)[1-9](\d{2}){4}$/, "Format de téléphone invalide (ex: 0612345678 ou +33612345678)")
    .min(10, "Le numéro de téléphone est requis"),
  message: z.string().max(500, "Le message ne peut pas dépasser 500 caractères").optional(),
});

type PrestataireFormData = z.infer<typeof prestataireSchema>;

const PrestataireForm = () => {
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
  } = useForm<PrestataireFormData>({
    resolver: zodResolver(prestataireSchema),
  });

  const onSubmit = async (data: PrestataireFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Utiliser l'API PHP sur Hostinger (fallback sur /api/contact-prestataire en dev)
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? "/api/contact-prestataire.php" 
        : "/api/contact-prestataire";
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type: "prestataire" }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Votre demande a été envoyée avec succès !",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Une erreur est survenue. Veuillez réessayer.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="entreprise" className="block text-sm font-semibold text-gray-700 mb-2">
            Nom de l'entreprise *
          </label>
          <input
            {...register("entreprise")}
            type="text"
            id="entreprise"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.entreprise && (
            <p className="mt-1 text-sm text-red-600">{errors.entreprise.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="typeProjet" className="block text-sm font-semibold text-gray-700 mb-2">
            Type de projet *
          </label>
          <input
            {...register("typeProjet")}
            type="text"
            id="typeProjet"
            placeholder="Ex: Installation, Maintenance, Délégation..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.typeProjet && (
            <p className="mt-1 text-sm text-red-600">{errors.typeProjet.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="localisation" className="block text-sm font-semibold text-gray-700 mb-2">
            Localisation *
          </label>
          <input
            {...register("localisation")}
            type="text"
            id="localisation"
            placeholder="Ex: Région, Département, Ville..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.localisation && (
            <p className="mt-1 text-sm text-red-600">{errors.localisation.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="volumeEstime" className="block text-sm font-semibold text-gray-700 mb-2">
            Volume estimé *
          </label>
          <input
            {...register("volumeEstime")}
            type="text"
            id="volumeEstime"
            placeholder="Ex: Nombre de sites, kWc, Budget..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.volumeEstime && (
            <p className="mt-1 text-sm text-red-600">{errors.volumeEstime.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="delais" className="block text-sm font-semibold text-gray-700 mb-2">
          Délais souhaités *
        </label>
        <input
          {...register("delais")}
          type="text"
          id="delais"
          placeholder="Ex: Urgent, 3 mois, 6 mois..."
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
        />
        {errors.delais && (
          <p className="mt-1 text-sm text-red-600">{errors.delais.message}</p>
        )}
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact décisionnaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
              Nom complet *
            </label>
            <input
              {...register("nom")}
              type="text"
              id="nom"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            />
            {errors.nom && (
              <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="fonction" className="block text-sm font-semibold text-gray-700 mb-2">
              Fonction *
            </label>
            <input
              {...register("fonction")}
              type="text"
              id="fonction"
              placeholder="Ex: Directeur, Responsable Projet..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            />
            {errors.fonction && (
              <p className="mt-1 text-sm text-red-600">{errors.fonction.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message (optionnel)
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-vertical"
            placeholder="Précisez votre besoin, vos contraintes..."
          />
        </div>
      </div>

      {submitStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer la demande de prestation
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">* Champs obligatoires</p>
    </form>
  );
};

export default PrestataireForm;
