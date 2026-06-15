import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    variant: "sky" as const,
    pill: "Entreprise",
    pillStyle: { background: "var(--blue)", color: "#fff" },
    text: "Installation photovoltaïque sur notre entrepôt réalisée dans les délais. L'équipe Electrotech a su nous accompagner de l'étude à la mise en service avec professionnalisme.",
    name: "Marc L.",
    location: "Fos-sur-Mer (13)",
  },
  {
    variant: "dark" as const,
    pill: "Industriel",
    pillStyle: { background: "#1f2630", color: "#fff" },
    text: "Projet de 70 kWc sur notre centre médical. Dimensionnement adapté, suivi rigoureux et conformité QualiPV RGE. Nous recommandons vivement.",
    name: "Dr. Sophie M.",
    location: "Marseille (13)",
  },
  {
    variant: "peach" as const,
    pill: "Délégation",
    pillStyle: {},
    text: "En tant que maître d'ouvrage, nous avons fait appel à Electrotech en délégation. Approche structurée, résultats au rendez-vous.",
    name: "Karim B.",
    location: "Pertuis (84)",
  },
];

const Testimonials = () => (
  <section className="section">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Ils nous font confiance</span>
        <h2 className="section-title">Avis de nos clients</h2>
      </Reveal>
      <div className="testi">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className={`tcard ${t.variant}`}>
            <span
              className={`pill${t.variant === "peach" ? " blue" : ""}`}
              style={{ alignSelf: "flex-start", ...t.pillStyle }}
            >
              {t.pill}
            </span>
            <div className="quote">&rdquo;</div>
            <p>{t.text}</p>
            <div className="who">
              {t.name}
              <small>{t.location}</small>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
