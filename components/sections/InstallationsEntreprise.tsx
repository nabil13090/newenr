"use client";

import Image from "next/image";
import Link from "next/link";

const InstallationsEntreprise = () => (
  <section className="section entreprise-block" id="installations-entreprise">
    <div className="container">
      <div className="entreprise-card">
        <div className="entreprise-card__text">
          <span className="section-label entreprise-card__label">Entreprises &amp; industriels</span>
          <h2>Nos installations solaires pour entreprises</h2>
          <p>
            <strong>Electrotech</strong> est un expert en <strong>solaire photovoltaïque</strong> qui conçoit et installe des solutions innovantes à destination des <strong>entreprises, industriels, artisans, commerces et collectivités</strong>.
          </p>
          <p>
            Nous proposons un <strong>projet clés en main</strong> : notre bureau d&apos;études intégré étudie et maîtrise toutes les étapes du projet. Vous bénéficiez d&apos;un <strong>interlocuteur unique</strong> car, chez Electrotech, nous intervenons à la construction de vos centrales photovoltaïque.
          </p>
          <p>
            Au fil des années, nous avons accompagné de <strong>nombreuses entreprises</strong> dans leur projet solaire photovoltaïque. Nos solutions sont conçues pour <strong>valoriser vos surfaces de toiture</strong>, <strong>réduire vos coûts énergétiques</strong> et <strong>générer des revenus durables</strong>.
          </p>
        </div>

        <div className="entreprise-card__media">
          <Image
            src="/img/batiment-professionnel.jpg"
            alt="Bâtiment professionnel — installation solaire photovoltaïque Electrotech"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <Link
            href="/panneaux-solaires/stockage-autoconsommation#formulaire"
            className="cta cta--white entreprise-card__cta"
          >
            Contactez-nous <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default InstallationsEntreprise;
