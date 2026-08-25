"use client";

import Image from "next/image";
import Link from "next/link";
import { FileCheck, Shield, Clock, Users, CheckCircle, Award } from "lucide-react";
import PrestataireForm from "@/components/forms/PrestataireForm";
import HeroReusable from "@/components/sections/HeroReusable";
import Reveal from "@/components/ui/Reveal";
import { CertificationsRow, SectionHead } from "@/components/ui/PageBlocks";

const serviceCards = [
  {
    image: "/img/etudebureau.png",
    title: "Bureau d'Études interne – Assistance à la réalisation",
    description:
      "Le bureau d'études interne accompagne et assiste les équipes de pose tout au long du projet, depuis la phase de préparation jusqu'à la mise en service de l'installation photovoltaïque. Il garantit la conformité technique, la sécurité, et le respect des normes en vigueur, tout en assurant un lien permanent entre l'étude et le terrain.",
    expandable: true,
    expandableTitle: "Documents et études réalisés par le Bureau d'Études",
    expandableList: [
      { title: "Plan de calepinage", items: ["Implantation détaillée des modules photovoltaïques", "Optimisation de l'espace disponible (toiture ou sol)", "Respect des contraintes mécaniques et architecturales"] },
      { title: "Plan de câblage", items: ["Schéma de raccordement DC et AC", "Repérage des onduleurs, coffrets et chemins de câbles", "Conformité aux normes électriques en vigueur"] },
      { title: "Plan de mise à la terre (MALT)", items: ["Schéma de mise à la terre des structures et équipements", "Sécurisation de l'installation contre les défauts électriques", "Respect des exigences de protection des personnes et des biens"] },
      { title: "Notes de calcul", items: ["Calculs AC et DC", "Dimensionnement des câbles, protections et onduleurs", "Vérification des chutes de tension et courants admissibles"] },
      { title: "Calcul de productible", items: ["Estimation de la production annuelle d'énergie", "Prise en compte de l'orientation, inclinaison et ombrages", "Justification de la performance de l'installation"] },
      { title: "DOE – Dossier des Ouvrages Exécutés", items: ["Plans définitifs tels que réalisés", "Fiches techniques et notices fabricants", "Schémas électriques finaux", "Documents nécessaires à l'exploitation et à la maintenance"] },
    ],
  },
  {
    image: "/img/chantier.png",
    title: "Réalisation de chantiers",
    description:
      "Nous assurons la réalisation complète de vos installations solaires professionnelles, de la préparation à la mise en service. Nos équipes qualifiées interviennent avec rigueur, dans le strict respect des normes en vigueur et des règles de sécurité. Chaque chantier est mené avec exigence afin de garantir performance, fiabilité et durabilité des installations.",
    expandable: false,
  },
  {
    image: "/img/renfort.jpg",
    title: "Renfort opérationnel",
    description:
      "Nous intervenons en appui sur vos projets photovoltaïques existants pour renforcer vos équipes sur le terrain. Nos techniciens expérimentés s'intègrent rapidement à votre organisation et s'adaptent aux contraintes du chantier. Réactivité, flexibilité et efficacité pour sécuriser les délais et la qualité d'exécution.",
    expandable: false,
  },
];

const engagements = [
  { icon: FileCheck, title: "Respect strict des normes", description: "Conformité totale aux réglementations et normes en vigueur" },
  { icon: Shield, title: "Sécurité des équipes", description: "Sécurité optimale des équipes et des installations sur tous les chantiers" },
  { icon: Clock, title: "Respect des délais", description: "Respect des délais et des engagements contractuels" },
  { icon: Users, title: "Communication transparente", description: "Communication claire et transparente tout au long du projet" },
  { icon: CheckCircle, title: "Suivi et reporting", description: "Suivi régulier et reporting détaillé des chantiers" },
  { icon: Award, title: "Partenariat durable", description: "Chaque mission est menée avec sérieux, dans une logique de partenariat durable" },
];

const galleryImages = [
  "/img/batiment-professionnel.jpg",
  "/img/chantier.png",
  "/img/detail.png",
  "/img/Siteindustriel.jpg",
  "/img/champs.jpg",
  "/img/Champs2.jpg",
  "/img/champs3.jpg",
  "/img/renfort.jpg",
];

export default function ChercherUnPrestataire() {
  return (
    <>
      <HeroReusable
        title="Développeur, Trouvez votre prestataire"
        label="Prestataire photovoltaïque"
        showScrollIndicator={false}
        videoSrc="/img/pretatairev2.mp4"
        customDescription="Electrotech intervient sur tout type de projet de construction : hangar agricole, bâtiment industriel, central au sol. Sur le lot électrique."
        titleMaxLines={2}
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Prestataire" }]}
      />

      <section className="section section--compact">
        <div className="container">
          <SectionHead title="Nos garanties" />
          <CertificationsRow />
        </div>
      </section>

      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container">
          <SectionHead
            title="Un prestataire engagé aux côtés de vos projets"
            description="Nous intervenons sur des missions de délégation, de réalisation et d'exécution de chantiers solaires, avec une approche structurée et orientée résultats."
          />
          <div className="cards3">
            {serviceCards.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className={`matcard${item.expandable ? " matcard--tall" : ""}`}>
                <Image src={item.image} alt={item.title} fill sizes="400px" />
                <span className="badge blue">Service {i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.expandable && item.expandableList && (
                  <details className="matcard__details">
                    <summary>{item.expandableTitle}</summary>
                    <ul>
                      {item.expandableList.map((s) => (
                        <li key={s.title}>
                          <strong>{s.title}</strong>
                          <ul>
                            {s.items.map((it) => (
                              <li key={it}>{it}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
                <Link href="#formulaire" className="more">
                  En savoir plus →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="engagements" className="section">
        <div className="container">
          <SectionHead
            title="Nos engagements professionnels"
            description="Nous plaçons la qualité et la fiabilité au cœur de chaque intervention."
          />
          <div className="featgrid">
            {engagements.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="featcard">
                <item.icon size={36} color="var(--primary)" style={{ marginBottom: "0.75rem" }} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sky)" }}>
        <div className="container">
          <SectionHead
            title="Certifications, savoir-faire et expérience terrain"
            description="Notre expertise repose sur des équipes formées, des certifications à jour et une solide expérience terrain."
          />
          <div className="twocol">
            <Reveal className="featcard">
              <h3>Nos atouts</h3>
              <ul className="checklist">
                {["Équipes formées et qualifiées", "Certifications et habilitations à jour", "Solide expérience terrain", "Parfaite connaissance des contraintes techniques et réglementaires"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="featcard" delay={80}>
              <h3>Notre approche</h3>
              <p>Nous intervenons avec la même exigence, quelle que soit la taille ou la complexité du projet.</p>
              <p>Chaque mission est traitée avec professionnalisme et rigueur, dans le respect des standards de qualité les plus élevés.</p>
            </Reveal>
          </div>
          <div className="certrow" style={{ marginTop: "2rem" }}>
            {[
              { src: "/img/logo-qualiPV-RGE_chabanat-1024x707.avif", alt: "QualiPV RGE" },
              { src: "/img/certif.avif", alt: "Certification" },
              { src: "/img/9001certif.avif", alt: "ISO 9001" },
            ].map((c) => (
              <div key={c.alt} className="relative h-28 w-44">
                <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="180px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container">
          <SectionHead
            label="Référence client"
            title="Exemple de prestataire — Tenergie"
            description="Découvrez notre intervention complète sur un hangar agricole neuf à Belmont de la Loire : pose, raccordement et mise en service pour Tenergie."
          />
          <Reveal className="prestataire-example-card clay">
            <div className="prestataire-example-card__media">
              <Image
                src="/img/prestataires/tenergie/equipe-chantier-belmont.jpg"
                alt="Chantier Tenergie — équipe Electrotech à Belmont de la Loire"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
            </div>
            <div className="prestataire-example-card__body">
              <span className="pill blue">Belmont de la Loire · Hangar agricole neuf</span>
              <h3>Installation photovoltaïque complète pour Tenergie</h3>
              <p>
                Pose des panneaux sur hangar neuf, raccordements électriques et mise en service — un exemple concret de
                notre savoir-faire en délégation pour les développeurs solaires.
              </p>
              <Link href="/chercher-un-prestataire/exemple/tenergie" className="cta cta--primary">
                Voir l&apos;exemple Tenergie <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            title="Chantiers et actions menées"
            description="Découvrez quelques exemples de chantiers réalisés et d'actions menées sur différents projets photovoltaïques professionnels."
          />
          <p style={{ textAlign: "center", fontWeight: 600, marginBottom: "1.5rem" }}>
            Des équipes formées, expérimentées et engagées sur le terrain.
          </p>
          <div className="mosaic">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 40} className="mosaic__item">
                <Image src={img} alt={`Chantier photovoltaïque ${i + 1}`} fill sizes="200px" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="formulaire" className="section" style={{ background: "var(--dark)" }}>
        <div className="container" style={{ maxWidth: "48rem" }}>
          <Reveal className="formcard clay">
            <h2>Confiez-nous votre projet ou votre mission</h2>
            <p>Vous recherchez un prestataire photovoltaïque fiable pour vos projets ?</p>
            <p style={{ fontWeight: 600, color: "var(--primary)", marginBottom: "1.5rem" }}>
              Présentez-nous votre besoin via le formulaire dédié. Nous vous répondrons rapidement.
            </p>
            <PrestataireForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
