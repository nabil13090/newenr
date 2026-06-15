import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    badge: "blue",
    badgeLabel: "Étude",
    title: "Étude de faisabilité",
    description: "Analyse personnalisée de votre consommation, orientation et surface disponible.",
    image: "/img/etude.jpg",
    href: "/contact",
  },
  {
    badge: "blue",
    badgeLabel: "Installation",
    title: "Installation photovoltaïque",
    description: "Pose professionnelle avec équipements fiables et éprouvés pour durer.",
    image: "/img/Siteindustriel.jpg",
    href: "/panneaux-solaires",
  },
  {
    badge: "green",
    badgeLabel: "Stockage",
    title: "Autoconsommation",
    description: "Stockage Huawei et optimisation de votre consommation énergétique.",
    image: "/img/Entrepôtlogistique.jpg",
    href: "/panneaux-solaires/stockage-autoconsommation",
  },
  {
    badge: "dark",
    badgeLabel: "Délégation",
    title: "Prestataire solaire",
    description: "Intervention en délégation pour maîtres d'ouvrage et grands comptes.",
    image: "/img/chantier.png",
    href: "/chercher-un-prestataire",
  },
  {
    badge: "steel",
    badgeLabel: "Maintenance",
    title: "Suivi de performance",
    description: "Maintenance préventive et monitoring de votre production solaire.",
    image: "/img/detail.png",
    href: "/contact",
  },
  {
    badge: "blue",
    badgeLabel: "Revente",
    title: "Revente d'électricité",
    description: "Valorisation du surplus et accompagnement à la revente.",
    image: "/img/champs.jpg",
    href: "/panneaux-solaires/stockage-autoconsommation",
  },
];

const Services = () => (
  <section className="section" id="services" style={{ background: "var(--grey-light)" }}>
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Nos prestations</span>
        <h2 className="section-title">Solutions solaires photovoltaïques</h2>
      </Reveal>
      <div className="matrow">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} className="matcard">
            <Image src={s.image} alt={s.title} fill sizes="300px" />
            <span className={`badge ${s.badge}`}>{s.badgeLabel}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <Link href={s.href} className="more">
              En savoir plus →
            </Link>
          </Reveal>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "var(--spacing-xl)" }}>
        <Link href="/panneaux-solaires" className="cta cta--primary">
          Voir toutes nos solutions <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Services;
