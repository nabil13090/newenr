import type { Metadata } from "next";
import Link from "next/link";
import HeroReusable from "@/components/sections/HeroReusable";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Blog Solaire & Actualités Photovoltaïque | Electrotech PACA",
  description:
    "Guides, conseils et actualités sur le photovoltaïque professionnel en PACA : autoconsommation, aides, maintenance et installation B2B.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog Electrotech — Solaire professionnel PACA",
    url: `${SITE_URL}/blog/`,
    type: "website",
    locale: "fr_FR",
    siteName: "Electrotech",
  },
};

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <HeroReusable
        title="Blog & actualités solaire"
        label="Ressources"
        imageSrc="/img/stockage.png"
        customDescription="Guides pratiques, analyses et conseils d'experts pour vos projets photovoltaïques professionnels en région PACA."
        showScrollIndicator={false}
        titleAs="p"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
      />

      <section className="section">
        <div className="container">
          <h1 className="seo-content__h1">
            Actualités et guides photovoltaïque professionnel
          </h1>
          <p className="section-head__desc">
            Electrotech partage son expertise sur l&apos;installation solaire B2B,
            l&apos;autoconsommation, les aides financières et la maintenance en
            PACA.
          </p>

          <div className="blog-grid">
            {sorted.map((post) => (
              <article key={post.slug} className="blog-card">
                <span className="blog-card__date">
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <h2 className="blog-card__title">
                  <Link href={`/blog/articles/${post.slug}/`}>{post.title}</Link>
                </h2>
                <p className="blog-card__excerpt">{post.description}</p>
                <Link
                  href={`/blog/articles/${post.slug}/`}
                  className="cta cta--tertiary blue"
                >
                  Lire l&apos;article <span className="arrow">→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="seo-content__links" style={{ marginTop: "2rem" }}>
            <Link href="/faq/">FAQ photovoltaïque</Link> ·{" "}
            <Link href="/seo/marseille/">Solaire à Marseille</Link> ·{" "}
            <Link href="/contact/">Demander un devis</Link>
          </p>
        </div>
      </section>
    </>
  );
}
