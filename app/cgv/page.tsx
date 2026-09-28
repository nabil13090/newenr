import { Metadata } from "next";
import Link from "next/link";
import MiniHero from "@/components/ui/MiniHero";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente - Electrotech",
  description: "Conditions générales de vente des services Electrotech",
  alternates: { canonical: "/cgv/" },
};

export default function CGV() {
  return (
    <>
      <MiniHero
        title="Conditions Générales de Vente"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "CGV" }]}
      />
      <section className="section" style={{ background: "var(--grey-light)" }}>
      <div className="container container--medium">
        <div className="formcard clay" style={{ padding: "var(--spacing-l)" }}>
          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>1. Objet</h2>
            <p className="leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre ELECTROTECH et ses clients concernant la vente et l'installation de panneaux solaires photovoltaïques.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>2. Devis</h2>
            <p className="leading-relaxed mb-4">
              Tout devis établi par ELECTROTECH est gratuit et sans engagement. Il est valable pour une durée de 30 jours à compter de sa date d'émission.
            </p>
            <p className="leading-relaxed">
              Le devis détaille les prestations proposées, les équipements, les prix, les délais d'exécution et les conditions de paiement.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>3. Commande</h2>
            <p className="leading-relaxed">
              La commande devient ferme et définitive après signature du devis par le client et réception d'un acompte si prévu. La commande implique l'acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>4. Exécution des prestations</h2>
            <p className="leading-relaxed mb-4">
              ELECTROTECH s'engage à réaliser les prestations conformément aux normes en vigueur et aux règles de l'art. Les délais d'exécution sont donnés à titre indicatif et ne sauraient engager la responsabilité d'ELECTROTECH en cas de retard dû à des circonstances indépendantes de sa volonté.
            </p>
            <p className="leading-relaxed">
              Toute modification des prestations demandée par le client après la signature du devis pourra faire l'objet d'un avenant et d'une facturation complémentaire.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>5. Prix</h2>
            <p className="leading-relaxed">
              Les prix sont indiqués en euros, toutes taxes comprises (TTC). Ils sont valables pour la durée de validité du devis. Les prix peuvent être révisés en cas de modification des prestations ou de circonstances indépendantes de la volonté d'ELECTROTECH.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>6. Paiement</h2>
            <p className="leading-relaxed mb-4">
              Les modalités de paiement sont précisées dans le devis. Le paiement peut s'effectuer :
            </p>
            <ul style={{ paddingLeft: "1.25rem", listStyle: "disc", marginTop: "0.5rem" }}>
              <li>Par chèque</li>
              <li>Par virement bancaire</li>
              <li>Par carte bancaire</li>
            </ul>
            <p className="leading-relaxed mt-4">
              En cas de retard de paiement, des pénalités de retard au taux légal en vigueur pourront être appliquées, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 €.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>7. Garantie</h2>
            <p className="leading-relaxed">
              ELECTROTECH garantit la conformité des prestations aux normes en vigueur. Les équipements installés bénéficient des garanties constructeur. Une garantie de bon fonctionnement est également assurée selon les conditions précisées dans le devis.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>8. Responsabilité</h2>
            <p className="leading-relaxed">
              ELECTROTECH est couvert par une assurance responsabilité civile professionnelle. La responsabilité d'ELECTROTECH ne saurait être engagée en cas de dommages résultant d'un usage non conforme des équipements installés ou d'une intervention effectuée par un tiers.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>9. Droit de rétractation</h2>
            <p className="leading-relaxed">
              Conformément à la législation en vigueur, le client dispose d'un droit de rétractation de 14 jours à compter de la signature du contrat, sauf si les travaux ont commencé avec son accord exprès avant l'expiration de ce délai.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>10. Litiges</h2>
            <p className="leading-relaxed">
              Tout litige relatif à l'interprétation ou à l'exécution des présentes CGV sera soumis aux tribunaux compétents du ressort du siège social d'ELECTROTECH, après tentative de résolution amiable.
            </p>
          </section>

          <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--grey-light)" }}>
            <Link href="/" className="cta cta--tertiary">
              Retour à l&apos;accueil <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
