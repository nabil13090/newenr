"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const entrepriseSchema = z.object({
  entreprise: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères").max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères"),
  secteur: z.string().min(2, "Le secteur d'activité est requis").max(100, "Le secteur ne peut pas dépasser 100 caractères"),
  surface: z.string().min(1, "La surface approximative est requise").max(50, "La surface ne peut pas dépasser 50 caractères"),
  objectif: z.enum(["revente", "autoconsommation", "les-deux"], {
    required_error: "Veuillez sélectionner un objectif",
  }),
  ville: z.string().min(2, "La ville est requise").max(100, "La ville ne peut pas dépasser 100 caractères"),
  departement: z.string().min(2, "Le département est requis").max(10, "Le département ne peut pas dépasser 10 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().email("Adresse email invalide").max(150, "L'email ne peut pas dépasser 150 caractères"),
  phone: z.string()
    .regex(/^(\+33|0)[1-9](\d{2}){4}$/, "Format de téléphone invalide (ex: 0612345678 ou +33612345678)")
    .min(10, "Le numéro de téléphone est requis"),
  message: z.string().max(500, "Le message ne peut pas dépasser 500 caractères").optional(),
});

type EntrepriseFormData = z.infer<typeof entrepriseSchema>;

const EntrepriseForm = () => {
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
  } = useForm<EntrepriseFormData>({
    resolver: zodResolver(entrepriseSchema),
  });

  const onSubmit = async (data: EntrepriseFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Utiliser l'API PHP sur Hostinger (fallback sur /api/contact-entreprise en dev)
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? "/api/contact-entreprise.php" 
        : "/api/contact-entreprise";
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type: "entreprise" }),
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
          <label htmlFor="secteur" className="block text-sm font-semibold text-gray-700 mb-2">
            Secteur d'activité *
          </label>
          <input
            {...register("secteur")}
            type="text"
            id="secteur"
            placeholder="Ex: Industrie, Commerce, Artisanat..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.secteur && (
            <p className="mt-1 text-sm text-red-600">{errors.secteur.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="surface" className="block text-sm font-semibold text-gray-700 mb-2">
            Surface approximative de toiture *
          </label>
          <input
            {...register("surface")}
            type="text"
            id="surface"
            placeholder="Ex: 500 m², 1000 m²..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.surface && (
            <p className="mt-1 text-sm text-red-600">{errors.surface.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="objectif" className="block text-sm font-semibold text-gray-700 mb-2">
            Objectif du projet *
          </label>
          <select
            {...register("objectif")}
            id="objectif"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          >
            <option value="">Sélectionnez un objectif</option>
            <option value="revente">Revente totale</option>
            <option value="autoconsommation">Autoconsommation</option>
            <option value="les-deux">Revente et autoconsommation</option>
          </select>
          {errors.objectif && (
            <p className="mt-1 text-sm text-red-600">{errors.objectif.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="ville" className="block text-sm font-semibold text-gray-700 mb-2">
            Ville *
          </label>
          <input
            {...register("ville")}
            type="text"
            id="ville"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.ville && (
            <p className="mt-1 text-sm text-red-600">{errors.ville.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="departement" className="block text-sm font-semibold text-gray-700 mb-2">
            Département *
          </label>
          <input
            {...register("departement")}
            type="text"
            id="departement"
            placeholder="Ex: 13, 83, 84..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          />
          {errors.departement && (
            <p className="mt-1 text-sm text-red-600">{errors.departement.message}</p>
          )}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Vos coordonnées</h3>
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
        </div>

        <div className="mt-6">
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

        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message (optionnel)
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-vertical"
            placeholder="Précisez votre projet, vos questions..."
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
            Demander une étude personnalisée
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">* Champs obligatoires</p>
    </form>
  );
};

export default EntrepriseForm;
