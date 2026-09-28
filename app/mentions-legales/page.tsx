import MiniHero from "@/components/ui/MiniHero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - Electrotech",
  description: "Mentions légales du site Electrotech - Solaire photovoltaïque",
  alternates: { canonical: "/mentions-legales/" },
};

export default function MentionsLegales() {
  return (
    <>
      <MiniHero
        title="Mentions légales"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />
      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container container--medium">
          <div className="formcard clay" style={{ padding: "var(--spacing-l)" }}>
            <section style={{ marginBottom: "2rem" }}>
              <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>
                1. Éditeur du site
              </h2>
              <p>
                Le site <strong>electrotechenr.fr</strong> est édité par :
              </p>
              <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem", listStyle: "disc" }}>
                <li><strong>Raison sociale :</strong> ELECTROTECH</li>
                <li><strong>Adresse :</strong> 58 Trav. des Marronniers, 13012 Marseille, France</li>
                <li><strong>SIRET :</strong> À compléter (validation client)</li>
                <li><strong>RCS :</strong> À compléter (validation client)</li>
                <li><strong>Téléphone :</strong> 04 91 87 11 08</li>
                <li><strong>Email :</strong> contact@electrotech13.fr (à valider avec le client)</li>
              </ul>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>
                2. Directeur de publication
              </h2>
              <p>
                Directeur de publication : à compléter (nom du représentant légal
                ELECTROTECH — validation client).
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par <strong>Hostinger</strong> —
                Hostinger Operations, UAB, Švitrigailos g. 34, LT-03230 Vilnius,
                Lituanie.
              </p>
            </section>

            <section>
              <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>
                4. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site est protégé par le droit d&apos;auteur.
                Toute reproduction est interdite sans autorisation préalable.
              </p>
            </section>

            <p style={{ marginTop: "2rem" }}>
              <Link href="/" className="cta cta--tertiary">
                Retour à l&apos;accueil <span className="arrow">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
