"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  MapPin,
  Shield,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import HeroReusable from "@/components/sections/HeroReusable";
import Reveal from "@/components/ui/Reveal";
import { PageCTA, SectionHead } from "@/components/ui/PageBlocks";

const projectSpecs = [
  { icon: MapPin, label: "Adresse", value: "176 Chemin de Chaurion, 42670 Belmont de la Loire" },
  { icon: Building2, label: "Type de bâtiment", value: "Hangar agricole neuf" },
  { icon: Sun, label: "Prestation", value: "Installation photovoltaïque en toiture" },
  { icon: Zap, label: "Livrable", value: "Mise en service complète et conforme" },
];

const phases = [
  {
    step: "01",
    title: "Préparation & coordination",
    text: "Prise en charge du lot photovoltaïque en lien avec Tenergie : planning de pose, sécurisation du chantier et préparation de la toiture du hangar neuf.",
  },
  {
    step: "02",
    title: "Pose des panneaux",
    text: "Installation des modules sur l'ensemble de la couverture, avec fixation adaptée au bâtiment agricole et respect strict des règles de sécurité en hauteur.",
  },
  {
    step: "03",
    title: "Raccordements électriques",
    text: "Câblage DC/AC, protections, onduleurs et chemins de câbles réalisés selon les normes en vigueur, en coordination avec le bureau d'études.",
  },
  {
    step: "04",
    title: "Mise en service",
    text: "Tests, vérifications, contrôles de conformité et remise d'un dossier exploitable pour le suivi et la maintenance de l'installation.",
  },
];

const highlights = [
  "Équipes qualifiées et habilitées sur toiture",
  "Chantier agricole neuf maîtrisé de bout en bout",
  "Respect des délais et des exigences du donneur d'ordre",
  "Qualité d'exécution conforme aux standards Electrotech",
];

export default function TenergieExemplePage() {
  return (
    <>
      <HeroReusable
        title="Hangar agricole — Belmont de la Loire"
        label="Exemple de prestataire · Tenergie"
        showScrollIndicator={false}
        videoSrc="/img/pretatairev2.mp4"
        customDescription="Installation photovoltaïque complète sur un hangar agricole neuf : pose, raccordement et mise en service réalisés par nos équipes pour Tenergie."
        titleMaxLines={2}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Prestataire", href: "/chercher-un-prestataire" },
          { label: "Exemple Tenergie" },
        ]}
      />

      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container">
          <Reveal className="partner-team-row">
            <div className="partner-team-row__media clay">
              <Image
                src="/img/prestataires/tenergie/equipe-chantier-belmont.jpg"
                alt="Équipe Electrotech sur le chantier photovoltaïque Tenergie à Belmont de la Loire"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
                priority
              />
            </div>
            <div className="partner-team-row__text">
              <span className="section-label">Équipe professionnelle</span>
              <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.5rem" }}>
                Des installateurs expérimentés sur le terrain
              </h2>
              <p>
                Nos équipes posent, raccordent et contrôlent chaque installation avec la même exigence, sur les
                chantiers agricoles comme industriels.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            label="Le projet"
            title="Un hangar agricole neuf équipé en photovoltaïque"
            description="Sur ce site de Belmont de la Loire, l'objectif était de valoriser la toiture du hangar neuf par une centrale solaire fiable, prête à produire dès la mise en service."
          />
          <div className="project-specs">
            {projectSpecs.map((item, i) => (
              <Reveal key={item.label} delay={i * 60} className="project-specs__item featcard">
                <item.icon size={28} color="var(--primary)" aria-hidden />
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="partner-story" delay={120}>
            <p>
              Sur la commune de <strong>Belmont de la Loire</strong>, ce hangar agricole neuf offrait une surface de
              toiture idéale pour accueillir une installation photovoltaïque performante. Electrotech a pris en charge
              l&apos;ensemble du lot : préparation du chantier, pose des panneaux sur la couverture, raccordements
              électriques et batteries de tests avant remise en service.
            </p>
            <p>
              Chaque étape a été menée avec une logique claire : sécuriser le site, garantir la conformité technique et
              livrer une installation prête à produire. C&apos;est cette rigueur qui permet à des développeurs et
              intégrateurs comme <strong>Tenergie</strong> de s&apos;appuyer sur un prestataire fiable pour exécuter
              leurs projets solaires en toute sérénité.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sky)" }}>
        <div className="container">
          <SectionHead
            label="Notre intervention"
            title="Un travail complet, de la pose à la mise en service"
          />
          <div className="services-layout__cards" style={{ maxWidth: "52rem", marginInline: "auto" }}>
            {phases.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 70} className="service-item">
                <span className="service-item__num">{phase.step}</span>
                <div className="service-item__body">
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="twocol">
            <Reveal className="featcard">
              <h3>
                <Wrench size={24} color="var(--primary)" style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                Points forts du chantier
              </h3>
              <ul className="checklist">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="featcard" delay={80}>
              <h3>
                <Shield size={24} color="var(--primary)" style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                Pourquoi ce projet compte
              </h3>
              <p>
                Ce chantier illustre notre capacité à intervenir en délégation pour des acteurs comme Tenergie, sur des
                bâtiments agricoles neufs, avec une exécution complète et une mise en service maîtrisée.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ verticalAlign: "middle", marginRight: "0.35rem" }} />
                Pose · Raccordement · Tests · Mise en service
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section partner-trust">
        <div className="container">
          <Reveal className="partner-trust__card">
            <span className="section-label">Ils nous ont fait confiance</span>
            <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.5rem" }}>
              Tenergie
            </h2>
            <p>
              Tenergie nous a confié la réalisation du lot photovoltaïque sur ce hangar agricole neuf en Loire. De la
              pose des modules à la mise en service, nos équipes ont assuré une exécution rigoureuse, dans le respect
              des délais et des standards de qualité attendus sur ce type de chantier.
            </p>
            <Link
              href="https://tenergie.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-trust__logo-link"
              aria-label="Tenergie — tenergie.fr"
            >
              <Image
                src="/img/prestataires/tenergie/tenergie-logo.png"
                alt="Tenergie"
                width={560}
                height={176}
                className="partner-trust__logo"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <PageCTA
        title="Un projet similaire ?"
        description="Vous êtes développeur, intégrateur ou maître d'ouvrage et recherchez un prestataire photovoltaïque fiable pour vos chantiers ?"
        primaryLabel="Confier un projet"
        primaryHref="/chercher-un-prestataire#formulaire"
        secondaryLabel="Retour prestataire"
        secondaryHref="/chercher-un-prestataire"
      />
    </>
  );
}
