"use client";

import Image from "next/image";
import Link from "next/link";
import HeroReusable from "@/components/sections/HeroReusable";
import Reveal from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/PageBlocks";

const solutions = [
  {
    image: "/img/entrepot-logistique.jpg",
    title: "Stockage et Autoconsommation",
    description:
      "Produisez, stockez et consommez votre électricité verte. Transformez votre toiture en source de revenus avec une installation photovoltaïque professionnelle.",
    link: "/panneaux-solaires/stockage-autoconsommation",
    badge: "Autoconsommation",
  },
  {
    image: "/img/chantier.png",
    title: "Développeur, Trouvez votre prestataire",
    description:
      "Vous êtes maître d'ouvrage ou donneur d'ordre ? Nous intervenons en délégation, réalisation de chantiers photovoltaïques et renfort opérationnel.",
    link: "/chercher-un-prestataire",
    badge: "Prestataire",
  },
];

export default function PanneauxSolaires() {
  return (
    <>
      <HeroReusable
        title="Solaire photovoltaïque"
        subtitle="Solutions professionnelles"
        showScrollIndicator={false}
        titleAs="p"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Panneaux solaires" },
        ]}
      />

      <section className="section seo-content">
        <div className="container">
          <h1 className="seo-content__h1">
            Panneaux solaires pour entreprises et professionnels
          </h1>
          <p className="section-head__desc" style={{ maxWidth: "48rem" }}>
            Electrotech conçoit et installe des centrales photovoltaïques pour
            les entreprises, industriels, commerces et collectivités en région
            PACA. Notre bureau d&apos;études intégré dimensionne chaque projet
            sur vos consommations réelles, la structure de toiture et vos
            objectifs de rentabilité. Qualification QualiPV RGE, interlocuteur
            unique et suivi de performance : un projet clés en main, de
            l&apos;étude à la mise en service.
          </p>

          <h2 className="section-title" style={{ marginTop: "2rem" }}>
            Pourquoi équiper votre site en photovoltaïque ?
          </h2>
          <p style={{ maxWidth: "48rem", marginBottom: "1rem" }}>
            Une installation solaire professionnelle réduit durablement votre
            facture d&apos;électricité, sécurise une partie de votre
            approvisionnement énergétique et renforce votre trajectoire RSE.
            En autoconsommation, l&apos;énergie produite en journée alimente
            directement vos process, bureaux ou équipements de froid. Le surplus
            peut être stocké en batterie ou injecté sur le réseau selon le
            scénario retenu.
          </p>
          <p style={{ maxWidth: "48rem", marginBottom: "1rem" }}>
            Electrotech intervient sur toitures industrielles, entrepôts,
            bâtiments tertiaires et ombrières de parking. Nous gérons le
            dimensionnement, le dossier de raccordement Enedis, la pose et la
            maintenance. Chaque centrale est conçue pour rester exploitable,
            assurable et évolutive sur dix à vingt ans.
          </p>
          <p style={{ maxWidth: "48rem" }}>
            Que vous soyez donneur d&apos;ordre, propriétaire exploitant ou
            développeur de projet, nous adaptons le mode d&apos;intervention :
            installation complète pour votre compte, ou prestation en
            délégation pour les maîtres d&apos;ouvrage. Contactez-nous au{" "}
            <a href="tel:0491871108">04 91 87 11 08</a> pour une étude gratuite.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container">
          <SectionHead
            title="Nos solutions photovoltaïques"
            description="Choisissez la solution qui correspond à vos objectifs : équiper votre entreprise, autoconsommer ou collaborer en délégation."
          />
          <div
            className="cards3"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              maxWidth: "56rem",
              margin: "0 auto",
            }}
          >
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="matcard">
                <Image src={s.image} alt={s.title} fill sizes="500px" />
                <span className="badge blue">{s.badge}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link href={s.link} className="more">
                  En savoir plus →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
