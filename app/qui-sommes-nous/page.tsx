"use client";

import Image from "next/image";
import Link from "next/link";
import HeroReusable from "@/components/sections/HeroReusable";
import Reveal from "@/components/ui/Reveal";
import About from "@/components/sections/About";
import { SectionHead } from "@/components/ui/PageBlocks";

const values = [
  { title: "Expertise reconnue", description: "Un savoir-faire maîtrisé et une réputation solide, portés par un bureau d'études reconnu pour son sérieux et son esprit d'innovation." },
  { title: "Proximité client", description: "Une relation de confiance et un accompagnement personnalisé, de l'étude à la réalisation de vos projets." },
  { title: "Qualité garantie", description: "Des installations conformes aux normes, avec une maîtrise totale de la qualité, des performances et des délais." },
  { title: "Solutions durables", description: "Des solutions performantes et durables, adaptées aux enjeux énergétiques de demain." },
];

export default function QuiSommesNous() {
  return (
    <>
      <HeroReusable
        title="Qui sommes-nous"
        label="Electrotech Marseille"
        customDescription="Expert en installations photovoltaïques depuis plus de 25 ans."
        showScrollIndicator={false}
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Qui sommes-nous" }]}
      />

      <section className="history">
        <div className="history__bg hidden-mobile">
          <Image src="/img/electrotech.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="history__veil" />
        </div>
        <div className="container history__inner">
          <div className="history__grid">
            <Reveal className="history__col">
              <h2>Notre histoire</h2>
              <p>Depuis sa création en 2002, Electrotech est née d&apos;une passion pour l&apos;électricité et un engagement envers l&apos;innovation, la qualité et la satisfaction de ses clients.</p>
              <p>Avec plus de 25 ans d&apos;expérience, Electrotech s&apos;est imposé comme une référence, porté par un bureau d&apos;études reconnu pour son sérieux et son esprit d&apos;innovation.</p>
              <p>En 2022, l&apos;arrivée des fils du fondateur — Bilel, ingénieur aéronautique, et Rayan, conducteur de travaux — marque un tournant vers le solaire photovoltaïque.</p>
              <p>Electrotech prend en charge toute la chaîne de valeur, de l&apos;étude à la réalisation, avec toutes les études techniques réalisées en interne.</p>
              <p>Ambition : devenir un acteur majeur du photovoltaïque, reconnu pour le stockage d&apos;énergie et l&apos;agrivoltaïsme.</p>
            </Reveal>
            <Reveal className="history__col" delay={100}>
              <h2>Un héritage solide, une vision tournée vers l&apos;avenir</h2>
              <p>Chaque projet porte cette double signature : fiabilité, rigueur et professionnalisme ; innovation nourrie par de nouvelles expertises et technologies de pointe.</p>
              <p>De la planification initiale à l&apos;exécution finale, chaque étape est pensée avec le même souci d&apos;excellence.</p>
              <p>Aujourd&apos;hui, Electrotech accompagne la transition énergétique et contribue à façonner un avenir durable, performant et résilient.</p>
              <p>Nous serons ravis de vous accompagner dans vos projets électriques et photovoltaïques.</p>
              <Link href="/contact" className="cta cta--primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
                Contactez-nous <span className="arrow">→</span>
              </Link>
              <p style={{ marginTop: "1rem", fontWeight: 600, color: "#fff" }}>L&apos;équipe ELECTROTECH</p>
            </Reveal>
          </div>
        </div>
      </section>

      <About compact />

      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container">
          <SectionHead
            label="Nos engagements"
            title="Nos valeurs et engagements"
            description="Les principes qui guident notre action au quotidien."
          />
          <div className="valuegrid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="valuecard">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
