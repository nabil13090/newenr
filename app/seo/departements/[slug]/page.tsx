import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroReusable from "@/components/sections/HeroReusable";
import JsonLd from "@/components/seo/JsonLd";
import { PageCTA } from "@/components/ui/PageBlocks";
import { getCitiesByDepartment } from "@/lib/seo/cities";
import { DEPARTMENTS, getDepartmentBySlug } from "@/lib/seo/departments";
import { breadcrumbJsonLd } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/seo/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const dept = getDepartmentBySlug(params.slug);
  if (!dept) return {};
  const title = `Panneaux Solaires ${dept.name} (${dept.code}) | Electrotech PACA`;
  const description = `Installation photovoltaïque professionnelle dans les ${dept.name} : entreprises, industries et collectivités. QualiPV RGE — devis gratuit ☎ 04 91 87 11 08`;
  const canonical = `/seo/departements/${dept.slug}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonical}`,
      type: "website",
      locale: "fr_FR",
      siteName: "Electrotech",
    },
  };
}

export default function DepartmentSeoPage({ params }: Props) {
  const dept = getDepartmentBySlug(params.slug);
  if (!dept) notFound();

  const cities = getCitiesByDepartment(dept.slug);
  const canonical = `${SITE_URL}/seo/departements/${dept.slug}/`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: `${SITE_URL}/` },
          { name: `Solaire ${dept.name}`, url: canonical },
        ])}
      />

      <HeroReusable
        title={`Panneaux solaires ${dept.name}`}
        label={`Département ${dept.code}`}
        imageSrc="/img/Siteindustriel.jpg"
        customDescription={dept.description}
        showScrollIndicator={false}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: dept.name },
        ]}
      />

      <section className="section seo-content">
        <div className="container">
          <h1 className="seo-content__h1">
            Installateur panneaux solaires dans les {dept.name} ({dept.code})
          </h1>
          <p className="section-head__desc" style={{ maxWidth: "48rem" }}>
            {dept.description} Electrotech, basé à Marseille, déploie ses
            équipes sur l&apos;ensemble du département pour des projets
            d&apos;autoconsommation, de stockage et de revente de surplus.
          </p>

          <h2 className="section-title" style={{ marginTop: "2rem" }}>
            Villes couvertes dans les {dept.name}
          </h2>
          <div className="seo-citygrid">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/seo/${city.slug}/`}
                className="seo-citycard"
              >
                <span className="seo-citycard__name">{city.name}</span>
                <span className="seo-citycard__meta">
                  {city.postalCode} · {city.departmentCode}
                </span>
              </Link>
            ))}
          </div>

          <div className="seo-content__links" style={{ marginTop: "2rem" }}>
            <p>
              <Link href="/faq/">Consulter la FAQ</Link> ·{" "}
              <Link href={`/blog/articles/${dept.relatedBlogSlug}/`}>
                Lire notre guide solaire
              </Link> ·{" "}
              <Link href="/contact/">Demander un devis</Link>
            </p>
          </div>
        </div>
      </section>

      <PageCTA
        title={`Projet solaire dans les ${dept.name}`}
        description="QualiPV RGE, bureau d'études intégré et intervention rapide en PACA."
        primaryLabel="Contactez Electrotech"
        primaryHref="/contact/"
      />
    </>
  );
}
