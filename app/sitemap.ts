import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { CITIES } from "@/lib/seo/cities";
import { DEPARTMENTS } from "@/lib/seo/departments";
import { SITE_URL } from "@/lib/seo/site";

const now = new Date();

const staticPages: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/seo/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/qui-sommes-nous/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/nos-realisations/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/panneaux-solaires/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  {
    url: `${SITE_URL}/panneaux-solaires/stockage-autoconsommation/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  { url: `${SITE_URL}/chercher-un-prestataire/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/mentions-legales/`, lastModified: now, changeFrequency: "yearly", priority: 0.35 },
  { url: `${SITE_URL}/confidentialite/`, lastModified: now, changeFrequency: "yearly", priority: 0.35 },
  { url: `${SITE_URL}/cgv/`, lastModified: now, changeFrequency: "yearly", priority: 0.35 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${SITE_URL}/seo/${city.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const deptPages: MetadataRoute.Sitemap = DEPARTMENTS.map((dept) => ({
    url: `${SITE_URL}/seo/departements/${dept.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/articles/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticPages, ...deptPages, ...cityPages, ...blogPages];
}
