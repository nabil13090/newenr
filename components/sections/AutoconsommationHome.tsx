import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const steps = [
  "L'installation solaire photovoltaïque capte l'énergie du soleil",
  "L'électricité est transformée pour alimenter vos équipements",
  "L'énergie non consommée peut être stockée dans les batteries, puis consommée hors des heures d'ensoleillement",
  "Suivi et monitoring de votre production pour optimiser votre consommation",
];

const AutoconsommationHome = () => (
  <section className="section autocons-block" id="autoconsommation">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label blue">Autoconsommation</span>
        <h2 className="section-title">Autoconsommation solaire</h2>
      </Reveal>

      <div className="autocons-grid">
        <div>
          <Reveal>
            <h3 className="subsection-title">Comment fonctionne l&apos;autoconsommation ?</h3>
            <div className="stepgrid">
              {steps.map((step, i) => (
                <div key={i} className="stepcard">
                  <span className="stepcard__n">{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="subsection-title" style={{ marginTop: "2rem" }}>
              Autoconsommation totale ou avec revente du surplus ?
            </h3>
            <div className="twocol">
              <div className="infocard sky clay">
                <h3>Avec revente du surplus</h3>
                <ul className="checklist">
                  <li>Vous consommez votre électricité</li>
                  <li>Le surplus est revendu</li>
                  <li>Solution équilibrée et rentable</li>
                </ul>
              </div>
              <div className="infocard peach clay">
                <h3>Autoconsommation totale</h3>
                <ul className="checklist">
                  <li>Consommation sur place</li>
                  <li>Gestion optimisée</li>
                  <li>Indépendance maximale</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="split__media" delay={100}>
          <Image
            src="/img/entrepot-logistique.jpg"
            alt="Autoconsommation solaire professionnelle"
            width={800}
            height={900}
            className="w-full h-full object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>
      </div>

      <div style={{ textAlign: "center", marginTop: "var(--spacing-xl)" }}>
        <Link href="/panneaux-solaires/stockage-autoconsommation" className="cta cta--primary">
          Stockage et autoconsommation <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default AutoconsommationHome;
