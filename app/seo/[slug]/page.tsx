import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroReusable from "@/components/sections/HeroReusable";
import JsonLd from "@/components/seo/JsonLd";
import { PageCTA } from "@/components/ui/PageBlocks";
import { CITIES, getCityBySlug } from "@/lib/seo/cities";
import {
  requireCityPageContent,
} from "@/lib/seo/city-pages";
import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
} from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/seo/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  const content = requireCityPageContent(city);
  const canonical = `/seo/${city.slug}/`;
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${SITE_URL}${canonical}`,
      type: "website",
      locale: "fr_FR",
      siteName: "Electrotech",
      images: [
        {
          url: "/img/toit.jpg",
          alt: `Panneaux solaires ${city.name}`,
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function SeoCityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const content = requireCityPageContent(city);
  const canonical = `${SITE_URL}/seo/${city.slug}/`;
  const deptUrl = `${SITE_URL}/seo/departements/${city.departmentSlug}/`;

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Accueil", url: `${SITE_URL}/` },
    { name: "Panneaux solaires", url: `${SITE_URL}/seo/` },
    { name: city.name, url: canonical },
  ]);

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(city),
          serviceJsonLd(city),
          breadcrumbs,
        ]}
      />

      <HeroReusable
        title={`Panneaux solaires ${city.name}`}
        label={`${city.departmentName} (${city.departmentCode})`}
        imageSrc="/img/toit.jpg"
        customDescription={content.heroDescription}
        showScrollIndicator={false}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Panneaux solaires", href: "/seo/" },
          {
            label: city.departmentName,
            href: `/seo/departements/${city.departmentSlug}/`,
          },
          { label: city.name },
        ]}
      />

      <article className="section seo-content">
        <div className="container seo-content__inner">
          <h1 className="seo-content__h1">{content.h1}</h1>

          <div className="seo-content__grid">
            <div className="seo-content__main">
              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 50)}>{p}</p>
                  ))}
                </section>
              ))}

              <div className="seo-content__links">
                <p>
                  <strong>À lire aussi :</strong>
                </p>
                <ul>
                  <li>
                    <Link href={`/seo/departements/${city.departmentSlug}/`}>
                      Solaire dans les {city.departmentName}
                    </Link>
                  </li>
                  {content.neighborLinks.map((n) => (
                    <li key={n.slug}>
                      <Link href={`/seo/${n.slug}/`}>
                        Panneaux solaires {n.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/faq/">FAQ photovoltaïque professionnel</Link>
                  </li>
                  <li>
                    <Link href={`/blog/articles/${content.relatedBlogSlug}/`}>
                      Article solaire PACA
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/">Demander un devis gratuit</Link>
                  </li>
                </ul>
              </div>
            </div>

            <aside className="seo-content__aside">
              <div className="infocard blue clay">
                <h3>Votre projet solaire à {city.name}</h3>
                <p>
                  Code postal : {city.postalCode}
                  <br />
                  Département : {city.departmentName}
                </p>
                <a href="tel:0491871108" className="cta cta--white">
                  04 91 87 11 08
                </a>
                <Link
                  href="/contact/"
                  className="cta cta--outline"
                  style={{ marginTop: "0.75rem" }}
                >
                  Formulaire de contact
                </Link>
              </div>
              <div className="seo-content__img">
                <Image
                  src="/img/chantier.png"
                  alt={`Installation photovoltaïque professionnelle à ${city.name}`}
                  width={480}
                  height={320}
                  className="seo-content__photo"
                />
              </div>
            </aside>
          </div>
        </div>
      </article>

      <PageCTA
        title={`Votre projet solaire à ${city.name} — Devis gratuit`}
        description="Étude de faisabilité gratuite, installation QualiPV RGE et accompagnement complet."
        primaryLabel="Demander un devis"
        primaryHref="/contact/"
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/nos-realisations/"
      />
    </>
  );
}
