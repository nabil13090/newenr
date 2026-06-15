import type { City } from "../types";
import type { CityPageContent } from "./types";
import { CITY_PAGES_13_A } from "./content-13a";
import { CITY_PAGES_13_B } from "./content-13b";
import { CITY_PAGES_13_C } from "./content-13c";
import { CITY_PAGES_84_83_06_04 } from "./content-84-83-06-04";
import { CITY_PAGES_84_REST } from "./content-84-rest";
import { CITY_PAGES_VAR } from "./content-var";
import { CITY_PAGES_06_04_05 } from "./content-06-04-05";
import { CITY_PAGES_REMAINING } from "./content-remaining";
import { CITIES } from "../cities";

const ALL_PAGES: Record<string, CityPageContent> = {
  ...CITY_PAGES_REMAINING,
  ...CITY_PAGES_13_A,
  ...CITY_PAGES_13_B,
  ...CITY_PAGES_13_C,
  ...CITY_PAGES_84_83_06_04,
  ...CITY_PAGES_84_REST,
  ...CITY_PAGES_VAR,
  ...CITY_PAGES_06_04_05,
};

export function getCityPageContent(slug: string): CityPageContent | undefined {
  return ALL_PAGES[slug];
}

export function requireCityPageContent(
  city: City
): CityPageContent {
  const content = getCityPageContent(city.slug);
  if (!content) {
    throw new Error(`Contenu SEO unique manquant pour: ${city.slug}`);
  }
  return content;
}

export function countCityPageWords(content: CityPageContent): number {
  const text = [
    content.h1,
    content.heroDescription,
    ...content.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
  ].join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export { ALL_PAGES };

for (const city of CITIES) {
  const content = getCityPageContent(city.slug);
  if (!content) {
    throw new Error(
      `[SEO] Contenu unique manquant pour ${city.name} (${city.slug})`
    );
  }
  const words = countCityPageWords(content);
  if (words < 550) {
    throw new Error(
      `[SEO] ${city.slug} : ${words} mots seulement (minimum 550)`
    );
  }
  if (content.metaDescription.length > 160) {
    throw new Error(
      `[SEO] Meta trop longue pour ${city.slug} (${content.metaDescription.length} car.)`
    );
  }
}

if (Object.keys(ALL_PAGES).length !== CITIES.length) {
  const missing = CITIES.filter((c) => !ALL_PAGES[c.slug]).map((c) => c.slug);
  throw new Error(`[SEO] Pages manquantes: ${missing.join(", ")}`);
}
