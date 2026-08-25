import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const realisations = [
  {
    pill: "Marseille",
    title: "Centre médical — 70 kWc",
    meta: "2024 · Production & revente",
    image: "/img/chantier.png",
  },
  {
    pill: "Fos-sur-Mer",
    title: "Entrepôt logistique — 100 kWc",
    meta: "2024 · Sécurisation énergétique",
    image: "/img/entrepot-logistique.jpg",
  },
  {
    pill: "Pertuis",
    title: "Domaine de la Myrtille — 997 kWc",
    meta: "2025 · Mini-centrale solaire",
    image: "/img/renfort.jpg",
  },
];

const RealisationsPreview = () => (
  <section className="section" style={{ background: "var(--grey-light)" }}>
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Nos chantiers</span>
        <h2 className="section-title">Nos dernières réalisations</h2>
      </Reveal>
      <div className="cards3">
        {realisations.map((r, i) => (
          <Reveal key={r.title} delay={i * 100} className="projcard">
            <Image src={r.image} alt={r.title} fill sizes="400px" />
            <span className="pill blue">{r.pill}</span>
            <h3>{r.title}</h3>
            <div className="meta">{r.meta}</div>
            <Link href="/nos-realisations" className="more">
              En savoir plus →
            </Link>
          </Reveal>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "var(--spacing-xl)" }}>
        <Link href="/nos-realisations" className="cta cta--secondary">
          Voir toutes nos réalisations <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default RealisationsPreview;
