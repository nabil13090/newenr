"use client";

import Image from "next/image";
import Link from "next/link";
import HeroReusable from "@/components/sections/HeroReusable";
import Reveal from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/PageBlocks";

const solutions = [
  {
    image: "/img/Entrepôtlogistique.jpg",
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
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Panneaux solaires" },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            title="Nos solutions photovoltaïques"
            description="Choisissez la solution qui correspond à vos objectifs : équiper votre entreprise, autoconsommer ou revendre votre électricité."
          />
          <div className="cards3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", maxWidth: "56rem", margin: "0 auto" }}>
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
