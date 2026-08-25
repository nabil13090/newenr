"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

const PANELS = {
  equiper: {
    title: "Stockage et Autoconsommation",
    text: "Nous accompagnons les entreprises dans l'équipement de leurs toitures, hangars et bâtiments industriels en solaire photovoltaïque. De l'étude à l'installation en passant par l'accompagnement à la revente d'électricité, nous transformons vos surfaces inutilisées en source de revenus tout en stabilisant vos coûts énergétiques.",
    href: "/panneaux-solaires/stockage-autoconsommation",
    image: "/img/entrepot-logistique.jpg",
    alt: "Stockage et Autoconsommation",
  },
  prestataire: {
    title: "Développeur, Trouvez votre prestataire",
    text: "Vous êtes maître d'ouvrage ou donneur d'ordre et recherchez un prestataire solaire fiable ? Nous intervenons en délégation, réalisation de chantiers photovoltaïques et renfort opérationnel. Nous nous adaptons aux exigences des industriels et grands comptes avec une approche structurée et orientée résultats.",
    href: "/chercher-un-prestataire",
    image: "/img/batiment-professionnel.jpg",
    alt: "Développeur, Trouvez votre prestataire",
  },
} as const;

type PanelKey = keyof typeof PANELS;

const SplitHero = () => {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const [open, setOpen] = useState<PanelKey | null>(null);

  const openPanel = (key: PanelKey) => setOpen(key);

  return (
    <section className="split-hero" aria-label="Nos deux solutions">
      {/* Gauche — image + titre au survol */}
      <button
        type="button"
        className="split-hero__half"
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => openPanel("equiper")}
        aria-expanded={open === "equiper"}
      >
        <Image
          src={PANELS.equiper.image}
          alt={PANELS.equiper.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="split-hero__img"
          priority
        />
        <div className="split-hero__overlay" />
        <motion.h2
          className="split-hero__title"
          animate={{ opacity: hovered === "left" || open === null ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        >
          Stockage et Autoconsommation
        </motion.h2>
      </button>

      {/* Droite — image + titre au survol */}
      <button
        type="button"
        className="split-hero__half"
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => openPanel("prestataire")}
        aria-expanded={open === "prestataire"}
      >
        <Image
          src={PANELS.prestataire.image}
          alt={PANELS.prestataire.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="split-hero__img"
          priority
        />
        <div className="split-hero__overlay" />
        <motion.h2
          className="split-hero__title"
          animate={{ opacity: hovered === "right" || open === null ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        >
          Développeur, Trouvez votre prestataire
        </motion.h2>
      </button>

      {/* Panneau texte — glisse depuis le côté cliqué */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            className={`split-hero__panel ${open === "equiper" ? "split-hero__panel--left" : "split-hero__panel--right"}`}
            initial={{
              x: open === "equiper" ? "-100%" : "100%",
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: open === "equiper" ? "-100%" : "100%",
              opacity: 0,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              type="button"
              className="split-hero__close"
              onClick={() => setOpen(null)}
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
            <h3>{PANELS[open].title}</h3>
            <p>{PANELS[open].text}</p>
            <Link href={PANELS[open].href} className="cta cta--primary">
              Voir la page <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SplitHero;
