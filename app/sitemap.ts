import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { CITIES } from "@/lib/seo/cities";
import { DEPARTMENTS } from "@/lib/seo/departments";
import { getCityPageContent } from "@/lib/seo/city-pages";
import { SITE_URL } from "@/lib/seo/site";

export const dynamic = "force-static";

function fileLastModified(relPath: string): Date {
  try {
    return fs.statSync(path.join(process.cwd(), relPath)).mtime;
  } catch {
    return new Date(0);
  }
}

/** Date stable dérivée du contenu (change uniquement si le contenu change). */
function contentLastModified(seed: string, base?: Date): Date {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const dayOffset = Math.abs(hash) % 730;
  const secOffset = Math.abs(hash >>> 8) % 86400;
  const anchor = base && base.getTime() > 0 ? base : new Date(Date.UTC(2024, 0, 1));
  const d = new Date(anchor);
  d.setUTCDate(d.getUTCDate() - (dayOffset % 60));
  d.setUTCSeconds(secOffset % 60);
  d.setUTCMilliseconds(0);
  return d;
}

const staticPages: MetadataRoute.Sitemap = [
  {
    url: `${SITE_URL}/`,
    lastModified: fileLastModified("app/page.tsx"),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/contact/`,
    lastModified: fileLastModified("app/contact/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/faq/`,
    lastModified: fileLastModified("app/faq/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/blog/`,
    lastModified: fileLastModified("app/blog/page.tsx"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/seo/`,
    lastModified: fileLastModified("app/seo/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/qui-sommes-nous/`,
    lastModified: fileLastModified("app/qui-sommes-nous/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/nos-realisations/`,
    lastModified: fileLastModified("app/nos-realisations/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/panneaux-solaires/`,
    lastModified: fileLastModified("app/panneaux-solaires/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/panneaux-solaires/stockage-autoconsommation/`,
    lastModified: fileLastModified(
      "app/panneaux-solaires/stockage-autoconsommation/page.tsx"
    ),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/chercher-un-prestataire/`,
    lastModified: fileLastModified("app/chercher-un-prestataire/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/chercher-un-prestataire/exemple/tenergie/`,
    lastModified: fileLastModified(
      "app/chercher-un-prestataire/exemple/tenergie/page.tsx"
    ),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${SITE_URL}/mentions-legales/`,
    lastModified: fileLastModified("app/mentions-legales/page.tsx"),
    changeFrequency: "yearly",
    priority: 0.35,
  },
  {
    url: `${SITE_URL}/confidentialite/`,
    lastModified: fileLastModified("app/confidentialite/page.tsx"),
    changeFrequency: "yearly",
    priority: 0.35,
  },
  {
    url: `${SITE_URL}/cgv/`,
    lastModified: fileLastModified("app/cgv/page.tsx"),
    changeFrequency: "yearly",
    priority: 0.35,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPagesBase = fileLastModified("lib/seo/city-pages/index.ts");
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => {
    const content = getCityPageContent(city.slug);
    const seed = content
      ? JSON.stringify(content)
      : city.slug;
    return {
      url: `${SITE_URL}/seo/${city.slug}/`,
      lastModified: contentLastModified(seed, cityPagesBase),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  const deptBase = fileLastModified("lib/seo/departments.ts");
  const deptPages: MetadataRoute.Sitemap = DEPARTMENTS.map((dept) => ({
    url: `${SITE_URL}/seo/departements/${dept.slug}/`,
    lastModified: contentLastModified(dept.slug + dept.name, deptBase),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/articles/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...deptPages, ...cityPages, ...blogPages];
}
