import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroReusable from "@/components/sections/HeroReusable";
import JsonLd from "@/components/seo/JsonLd";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog/posts";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/seo/site";
import { PageCTA } from "@/components/ui/PageBlocks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const canonical = `/blog/articles/${post.slug}/`;
  return {
    title: `${post.title} | Electrotech`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}${canonical}`,
      type: "article",
      locale: "fr_FR",
      siteName: "Electrotech",
      publishedTime: post.publishedAt,
      images: [{ url: "/img/toit.jpg", alt: post.title }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const canonical = `${SITE_URL}/blog/articles/${post.slug}/`;
  const dateLabel = new Date(post.publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: "Accueil", url: `${SITE_URL}/` },
            { name: "Blog", url: `${SITE_URL}/blog/` },
            { name: post.title, url: canonical },
          ]),
        ]}
      />

      <HeroReusable
        title={post.title}
        label="Article"
        imageSrc="/img/champs.jpg"
        customDescription={post.description}
        showScrollIndicator={false}
        titleMaxLines={3}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: post.title },
        ]}
      />

      <article className="section seo-content blog-article">
        <div className="container seo-content__inner">
          <p className="blog-article__meta">
            Publié le {dateLabel} · Mot-clé : {post.keyword}
          </p>

          <div className="seo-content__main">
            <p className="blog-article__intro">{post.intro}</p>

            {post.sections.map((section) => {
              const Tag = section.level === 3 ? "h3" : "h2";
              return (
                <section key={section.heading}>
                  <Tag>{section.heading}</Tag>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </section>
              );
            })}

            <div className="seo-content__links">
              <p>
                <Link href="/blog/">← Retour au blog</Link> ·{" "}
                <Link href="/faq/">FAQ</Link> ·{" "}
                <Link href="/contact/">Contact</Link> ·{" "}
                <a href="tel:0491871108">04 91 87 11 08</a>
              </p>
            </div>
          </div>
        </div>
      </article>

      <PageCTA
        title="Un projet solaire en PACA ?"
        description="Electrotech, installateur QualiPV RGE à Marseille, vous accompagne de l'étude à la maintenance."
        primaryLabel="Demander un devis gratuit"
        primaryHref="/contact/"
      />
    </>
  );
}
