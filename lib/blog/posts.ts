import { ARTICLES_01_05 } from "./content/articles-01-05";
import { ARTICLES_06_10 } from "./content/articles-06-10";
import { ARTICLES_11_15 } from "./content/articles-11-15";
import { ARTICLES_16_20 } from "./content/articles-16-20";

export type BlogSection = {
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  publishedAt: string;
  sections: BlogSection[];
  intro: string;
};

const POST_SEEDS = [
  {
    slug: "panneaux-solaires-entreprises-paca-2025",
    title: "Panneaux solaires entreprises PACA : guide 2025",
    keyword: "panneaux solaires entreprises PACA",
    publishedAt: "2025-01-15",
  },
  {
    slug: "autoconsommation-solaire-reduire-facture-electricite",
    title: "Autoconsommation solaire : baisser sa facture jusqu'à 70%",
    keyword: "autoconsommation solaire entreprise",
    publishedAt: "2025-01-23",
  },
  {
    slug: "installation-photovoltaique-marseille-professionnels",
    title: "Installation photovoltaïque Marseille pour pros",
    keyword: "installation photovoltaïque Marseille",
    publishedAt: "2025-01-31",
  },
  {
    slug: "ombrieres-photovoltaiques-parking-entreprise",
    title: "Ombrières photovoltaïques parking : rentabilité",
    keyword: "ombrières photovoltaïques parking",
    publishedAt: "2025-02-08",
  },
  {
    slug: "aides-subventions-panneaux-solaires-entreprises-2025",
    title: "Aides panneaux solaires entreprises 2025",
    keyword: "aides panneaux solaires entreprises 2025",
    publishedAt: "2025-02-16",
  },
  {
    slug: "centrale-photovoltaique-industrielle-guide",
    title: "Centrale photovoltaïque industrielle : le guide",
    keyword: "centrale photovoltaïque industrielle",
    publishedAt: "2025-02-24",
  },
  {
    slug: "panneaux-solaires-aix-en-provence",
    title: "Panneaux solaires à Aix-en-Provence",
    keyword: "panneaux solaires Aix-en-Provence",
    publishedAt: "2025-03-02",
  },
  {
    slug: "installation-solaire-avignon-vaucluse",
    title: "Installation solaire Avignon et Vaucluse",
    keyword: "installation solaire Avignon Vaucluse",
    publishedAt: "2025-03-10",
  },
  {
    slug: "batteries-stockage-solaire-entreprises-2025",
    title: "Batteries stockage solaire entreprises 2025",
    keyword: "batteries stockage solaire entreprise",
    publishedAt: "2025-03-18",
  },
  {
    slug: "maintenance-panneaux-solaires-entreprise",
    title: "Maintenance panneaux solaires entreprise",
    keyword: "maintenance panneaux solaires",
    publishedAt: "2025-03-25",
  },
  {
    slug: "revente-electricite-solaire-tarifs-edf-oa-2025",
    title: "Revente électricité solaire : tarifs EDF OA 2025",
    keyword: "revente électricité solaire EDF OA",
    publishedAt: "2025-04-01",
  },
  {
    slug: "agrivoltaisme-paca-agriculture-solaire",
    title: "Agrivoltaïsme en PACA : agriculture et solaire",
    keyword: "agrivoltaïsme PACA",
    publishedAt: "2025-04-08",
  },
  {
    slug: "qualipv-rge-installateur-certifie-2025",
    title: "QualiPV RGE : installateur certifié en 2025",
    keyword: "installateur QualiPV RGE",
    publishedAt: "2025-04-15",
  },
  {
    slug: "panneaux-solaires-collectivites-batiments-publics-paca",
    title: "Panneaux solaires collectivités en PACA",
    keyword: "panneaux solaires collectivités PACA",
    publishedAt: "2025-04-22",
  },
  {
    slug: "transition-energetique-pme-solaire-2025",
    title: "Transition énergétique PME : le solaire en 2025",
    keyword: "transition énergétique PME solaire",
    publishedAt: "2025-04-29",
  },
  {
    slug: "installation-solaire-toulon-var",
    title: "Installation solaire Toulon et Var",
    keyword: "installation solaire Toulon Var",
    publishedAt: "2025-05-06",
  },
  {
    slug: "panneaux-solaires-entrepots-logistiques-industrie",
    title: "Panneaux solaires entrepôts et industrie",
    keyword: "panneaux solaires entrepôt logistique",
    publishedAt: "2025-05-13",
  },
  {
    slug: "prix-panneaux-solaires-professionnels-2025",
    title: "Prix panneaux solaires professionnels 2025",
    keyword: "prix panneaux solaires professionnels 2025",
    publishedAt: "2025-05-20",
  },
  {
    slug: "loi-aper-obligation-solaire-parkings-entreprises",
    title: "Loi APER : obligation solaire parkings",
    keyword: "loi APER obligation solaire parking",
    publishedAt: "2025-05-27",
  },
  {
    slug: "solaire-photovoltaique-valorisation-immobilier-professionnel",
    title: "Solaire et immobilier professionnel",
    keyword: "solaire photovoltaïque valorisation immobilier",
    publishedAt: "2025-06-01",
  },
] as const;

const ARTICLE_CONTENT = {
  ...ARTICLES_01_05,
  ...ARTICLES_06_10,
  ...ARTICLES_11_15,
  ...ARTICLES_16_20,
};

export const BLOG_POSTS: BlogPost[] = POST_SEEDS.map((seed) => {
  const content = ARTICLE_CONTENT[seed.slug];
  if (!content) {
    throw new Error(`Contenu manquant pour l'article: ${seed.slug}`);
  }
  return {
    slug: seed.slug,
    title: seed.title,
    keyword: seed.keyword,
    description: content.description,
    publishedAt: seed.publishedAt,
    intro: content.intro,
    sections: content.sections,
  };
});

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function countWords(post: BlogPost): number {
  const fullText = [
    post.title,
    post.intro,
    ...post.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
    ]),
  ].join(" ");
  return fullText.trim().split(/\s+/).filter(Boolean).length;
}

if (BLOG_POSTS.length !== 20) {
  throw new Error(
    `BLOG_POSTS doit contenir exactement 20 articles, trouvé: ${BLOG_POSTS.length}.`
  );
}

for (const post of BLOG_POSTS) {
  const words = countWords(post);
  if (words < 1000) {
    throw new Error(
      `Le post "${post.slug}" contient ${words} mots, minimum requis: 1000.`
    );
  }
  if (post.description.length > 155) {
    throw new Error(
      `La meta description du post "${post.slug}" dépasse 155 caractères (${post.description.length}).`
    );
  }
}

const descriptions = new Set(BLOG_POSTS.map((post) => post.description));
if (descriptions.size !== BLOG_POSTS.length) {
  throw new Error("Chaque article doit avoir une meta description unique.");
}
