import type { Metadata } from "next";
import Link from "next/link";
import HeroReusable from "@/components/sections/HeroReusable";
import { DEPARTMENTS } from "@/lib/seo/departments";
import { getCitiesByDepartment } from "@/lib/seo/cities";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Installation Solaire PACA par Ville | Electrotech",
  description:
    "Trouvez votre page locale Electrotech : installateur panneaux solaires photovoltaïques en PACA. 75 villes, 6 départements. Devis gratuit ☎ 04 91 87 11 08",
  alternates: { canonical: "/seo/" },
  openGraph: {
    title: "Pages locales solaire PACA | Electrotech",
    url: `${SITE_URL}/seo/`,
    type: "website",
    locale: "fr_FR",
    siteName: "Electrotech",
  },
};

export default function SeoHubPage() {
  return (
    <>
      <HeroReusable
        title="Solaire photovoltaïque en PACA"
        label="Pages locales"
        imageSrc="/img/Siteindustriel.jpg"
        customDescription="Electrotech intervient dans toute la région PACA. Retrouvez notre expertise près de chez vous."
        showScrollIndicator={false}
        titleAs="p"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Zones PACA" }]}
      />

      <section className="section">
        <div className="container">
          <h1 className="seo-content__h1">
            Installateur panneaux solaires en région PACA
          </h1>
          <p className="section-head__desc">
            Pages dédiées par département et par ville pour les entreprises,
            industries et collectivités. QualiPV RGE — devis gratuit au{" "}
            <a href="tel:0491871108">04 91 87 11 08</a>.
          </p>

          {DEPARTMENTS.map((dept) => {
            const cities = getCitiesByDepartment(dept.slug);
            return (
              <div key={dept.slug} className="seo-hub-dept">
                <h2 className="section-title">
                  <Link href={`/seo/departements/${dept.slug}/`}>
                    {dept.name} ({dept.code})
                  </Link>
                </h2>
                <p className="section-head__desc">{dept.description}</p>
                <div className="seo-citygrid">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/seo/${city.slug}/`}
                      className="seo-citycard"
                    >
                      <span className="seo-citycard__name">{city.name}</span>
                      <span className="seo-citycard__meta">{city.postalCode}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="seo-content__links" style={{ marginTop: "2rem" }}>
            <Link href="/faq/">FAQ</Link> · <Link href="/blog/">Blog</Link> ·{" "}
            <Link href="/contact/">Contact</Link>
          </p>
        </div>
      </section>
    </>
  );
}
