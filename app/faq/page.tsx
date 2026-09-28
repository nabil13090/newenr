import type { Metadata } from "next";
import Link from "next/link";
import HeroReusable from "@/components/sections/HeroReusable";
import JsonLd from "@/components/seo/JsonLd";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { FAQ_ITEMS } from "@/lib/faq/questions";
import { faqPageJsonLd } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/seo/site";
import { PageCTA } from "@/components/ui/PageBlocks";

export const metadata: Metadata = {
  title: "FAQ Panneaux Solaires Professionnels | Electrotech PACA",
  description:
    "30 réponses d'expert sur le photovoltaïque professionnel : coût, autoconsommation, aides 2025, installation et QualiPV RGE. Electrotech Marseille.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "FAQ Photovoltaïque Professionnel | Electrotech",
    description:
      "Toutes les réponses sur l'installation solaire pour entreprises en PACA.",
    url: `${SITE_URL}/faq/`,
    type: "website",
    locale: "fr_FR",
    siteName: "Electrotech",
  },
};

const categories = [...new Set(FAQ_ITEMS.map((f) => f.category))];

export default function FaqPage() {
  const jsonLd = faqPageJsonLd(
    FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroReusable
        title="FAQ Photovoltaïque"
        label="Questions fréquentes"
        imageSrc="/img/autocons.png"
        customDescription="Réponses d'expert sur l'installation solaire pour entreprises, l'autoconsommation, les aides et la maintenance en PACA."
        showScrollIndicator={false}
        titleAs="p"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
      />

      <section className="section seo-content">
        <div className="container">
          <h1 className="seo-content__h1">
            FAQ — Panneaux solaires et photovoltaïque professionnel
          </h1>
          <p className="section-head__desc">
            Retrouvez les réponses aux questions les plus fréquentes sur le
            photovoltaïque B2B, les aides financières, l&apos;autoconsommation et
            les services Electrotech.{" "}
            <Link href="/contact/">Contactez-nous</Link> au{" "}
            <a href="tel:0491871108">04 91 87 11 08</a> pour un conseil
            personnalisé.
          </p>

          <div className="faq-nav">
            {categories.map((cat) => (
              <a key={cat} href={`#faq-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                {cat}
              </a>
            ))}
          </div>

          {categories.map((cat) => (
            <div
              key={cat}
              id={`faq-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="faq-category"
            >
              <h2 className="section-title">{cat}</h2>
              <FaqAccordion items={FAQ_ITEMS.filter((f) => f.category === cat)} />
            </div>
          ))}

          <div className="seo-content__links" style={{ marginTop: "2rem" }}>
            <p>
              <Link href="/blog/">Blog actualités solaire</Link> ·{" "}
              <Link href="/seo/marseille/">Solaire à Marseille</Link> ·{" "}
              <Link href="/panneaux-solaires/stockage-autoconsommation/">
                Autoconsommation
              </Link>
            </p>
          </div>
        </div>
      </section>

      <PageCTA
        title="Une question sur votre projet ?"
        description="Nos chargés d'affaires vous rappellent sous 24 h pour une étude personnalisée."
        primaryLabel="Demander un devis"
        primaryHref="/contact/"
      />
    </>
  );
}
