"use client";

import Image from "next/image";
import Link from "next/link";
import HeroReusable from "@/components/sections/HeroReusable";
import Reveal from "@/components/ui/Reveal";
import { PageCTA, SectionHead } from "@/components/ui/PageBlocks";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const realisations = [
  {
    pill: "Marseille · 70 kWc",
    title: "Centre médical",
    meta: "Production et revente d'électricité",
    image: "/img/chantier.png",
    objectif: "Production et revente d'électricité",
    resultat: "Valorisation de la surface et production d'énergie renouvelable",
    particularites: "Installation optimisée selon l'orientation et l'inclinaison de la toiture",
  },
  {
    pill: "Fos-sur-Mer · 100 kWc",
    title: "Entrepôt logistique",
    meta: "Sécurisation énergétique",
    image: "/img/entrepot-logistique.jpg",
    objectif: "Sécurisation énergétique",
    resultat: "Production d'électricité durable pour le site",
    particularites: "Dimensionnement adapté aux besoins énergétiques du site",
  },
  {
    pill: "Marseille · 50 kWc",
    title: "Plateau de bureaux",
    meta: "Revente totale d'électricité",
    image: "/img/batiment-professionnel.jpg",
    objectif: "Revente totale d'électricité",
    resultat: "Génération de revenus via la revente d'électricité",
    particularites: "Optimisation de la surface disponible pour maximiser la production",
  },
  {
    pill: "Pertuis · 997 kWc",
    title: "Domaine de la Myrtille",
    meta: "Mini-centrale en cours",
    image: "/img/renfort.jpg",
    objectif: "Projet mini sol en cours de réalisation",
    resultat: "Production d'énergie renouvelable pour le domaine",
    particularites: "Installation de grande puissance sur terrain du domaine",
  },
];

const allImages = [
  { src: "/img/batiment-professionnel.jpg", name: "Bâtiment professionnel" },
  { src: "/img/Siteindustriel.jpg", name: "Site industriel" },
  { src: "/img/entrepot-logistique.jpg", name: "Entrepôt logistique" },
  { src: "/img/Champs2.jpg", name: "Champs" },
  { src: "/img/chantier.png", name: "Chantier" },
  { src: "/img/detail.png", name: "Détail" },
  { src: "/img/champs.jpg", name: "Champs" },
  { src: "/img/champs3.jpg", name: "Champs" },
  { src: "/img/renfort.jpg", name: "Renfort" },
];

export default function NosRealisations() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <HeroReusable
        title="Nos projets photovoltaïques professionnels"
        label="Réalisations"
        customDescription="Chaque projet comprend une étude personnalisée, une solution adaptée et une exécution rigoureuse."
        showScrollIndicator={false}
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Réalisations" }]}
      />

      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container">
          <SectionHead title="Exemples de chantiers réalisés" />
          <div className="cards3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {realisations.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="projcard">
                <Image src={p.image} alt={p.title} fill sizes="400px" />
                <span className="pill blue">{p.pill}</span>
                <h3>{p.title}</h3>
                <div className="meta">{p.meta}</div>
                <p className="more" style={{ opacity: 1, maxHeight: "none", color: "rgba(255,255,255,0.85)", fontSize: "var(--font-size-1)", fontWeight: 400 }}>
                  {p.objectif}. {p.resultat}
                </p>
                <Link href="/panneaux-solaires/stockage-autoconsommation#formulaire" className="more">
                  En savoir plus →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            label="Expertise"
            title="Une expertise appliquée à chaque projet"
            description="Chaque chantier est mené avec le même niveau d'exigence, en tenant compte des contraintes techniques, de l'environnement du site et des objectifs du client."
          />
          <div className="featgrid">
            {["Des contraintes techniques", "De l'environnement du site", "Des objectifs du client"].map((t, i) => (
              <Reveal key={t} delay={i * 80} className="featcard">
                <h3>{t}</h3>
                <p>Chaque projet est étudié avec sérieux et expertise, quelles que soient sa taille et sa complexité.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sky)" }}>
        <div className="container">
          <SectionHead title="Galerie de nos réalisations" />
          <Reveal>
            <div className="relative aspect-video clay overflow-hidden mb-4">
              <Image
                src={allImages[currentImageIndex].src}
                alt={allImages[currentImageIndex].name}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <button
                onClick={() => setCurrentImageIndex((p) => (p - 1 + allImages.length) % allImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 cta cta--white"
                style={{ width: "3rem", height: "3rem", padding: 0 }}
                aria-label="Précédent"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => setCurrentImageIndex((p) => (p + 1) % allImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cta cta--white"
                style={{ width: "3rem", height: "3rem", padding: 0 }}
                aria-label="Suivant"
              >
                <ChevronRight />
              </button>
            </div>
            <div className="mosaic">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className="mosaic__item"
                  onClick={() => setCurrentImageIndex(i)}
                  style={{ outline: i === currentImageIndex ? "3px solid var(--primary)" : "none" }}
                >
                  <Image src={img.src} alt={img.name} fill sizes="150px" className="object-cover" />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA
        title="Vous avez un projet solaire ?"
        description="Vous souhaitez équiper votre site ou confier un projet photovoltaïque à un professionnel expérimenté ?"
        primaryLabel="Discuter de mon projet"
        primaryHref="/panneaux-solaires/stockage-autoconsommation#formulaire"
        secondaryLabel="Voir si mon site est éligible"
        secondaryHref="/panneaux-solaires/stockage-autoconsommation"
      />
    </>
  );
}
