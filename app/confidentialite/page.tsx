import { Metadata } from "next";
import Link from "next/link";
import MiniHero from "@/components/ui/MiniHero";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Electrotech",
  description: "Politique de confidentialité et protection des données personnelles",
};

export default function Confidentialite() {
  return (
    <>
      <MiniHero
        title="Politique de confidentialité"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Confidentialité" }]}
      />
      <section className="section" style={{ background: "var(--grey-light)" }}>
      <div className="container container--medium">
        <div className="formcard clay" style={{ padding: "var(--spacing-l)" }}>
          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>1. Collecte des données</h2>
            <p className="leading-relaxed mb-4">
              Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :
            </p>
            <ul style={{ paddingLeft: "1.25rem", listStyle: "disc", marginTop: "0.5rem" }}>
              <li>Remplissez notre formulaire de contact</li>
              <li>Demandez un devis</li>
              <li>Nous contactez par email ou téléphone</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Les données collectées incluent : nom, prénom, adresse email, numéro de téléphone, adresse postale, et tout autre information que vous choisissez de nous communiquer.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>2. Utilisation des données</h2>
            <p className="leading-relaxed mb-4">
              Vos données personnelles sont utilisées pour :
            </p>
            <ul style={{ paddingLeft: "1.25rem", listStyle: "disc", marginTop: "0.5rem" }}>
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Vous fournir les services demandés</li>
              <li>Améliorer nos services</li>
              <li>Vous envoyer des informations relatives à nos services (avec votre consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>3. Protection des données</h2>
            <p className="leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>4. Partage des données</h2>
            <p className="leading-relaxed">
              Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. Vos données peuvent être partagées uniquement avec nos prestataires de services qui nous aident à exploiter notre site web et à mener nos activités, sous réserve qu'ils acceptent de garder ces informations confidentielles.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>5. Vos droits (RGPD)</h2>
            <p className="leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul style={{ paddingLeft: "1.25rem", listStyle: "disc", marginTop: "0.5rem" }}>
              <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@electrotech13.fr" style={{ color: "var(--primary)" }}>contact@electrotech13.fr</a>
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>6. Cookies</h2>
            <p className="leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez accepter ou refuser les cookies via la bannière qui s'affiche lors de votre première visite.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>7. Modifications</h2>
            <p className="leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page.
            </p>
          </section>

          <section>
            <h2 className="section-title" style={{ fontSize: "var(--font-size-3)", marginBottom: "1rem" }}>8. Contact</h2>
            <p className="leading-relaxed">
              Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
            </p>
            <ul style={{ marginTop: "1rem", listStyle: "none" }}>
              <li><strong>Email :</strong> <a href="mailto:contact@electrotech13.fr" style={{ color: "var(--primary)" }}>contact@electrotech13.fr</a></li>
              <li><strong>Téléphone :</strong> <a href="tel:+33491871108" style={{ color: "var(--primary)" }}>04 91 87 11 08</a></li>
              <li><strong>Adresse :</strong> 58 Trav. des Marronniers, 13012 Marseille, France</li>
            </ul>
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
