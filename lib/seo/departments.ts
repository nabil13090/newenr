import type { Department } from "./types";

export const DEPARTMENTS: Department[] = [
  {
    slug: "bouches-du-rhone",
    name: "Bouches-du-Rhône",
    code: "13",
    description:
      "Département le plus peuplé de PACA, fort potentiel solaire sur les zones portuaires, entrepôts logistiques, industries et toitures tertiaires de la métropole marseillaise et de son arrière-pays.",
    relatedBlogSlug: "installation-photovoltaique-marseille-professionnels",
  },
  {
    slug: "vaucluse",
    name: "Vaucluse",
    code: "84",
    description:
      "Ensoleillement exceptionnel dans la plaine du Comtat, zones agroalimentaires, MIN d'Avignon et industries du Grand Avignon : un territoire idéal pour l'autoconsommation professionnelle.",
    relatedBlogSlug: "installation-solaire-avignon-vaucluse",
  },
  {
    slug: "var",
    name: "Var",
    code: "83",
    description:
      "Du littoral toulonnais aux plateformes logistiques de l'intérieur, le Var cumule fort ensoleillement et surfaces de toiture industrielles exploitables en photovoltaïque.",
    relatedBlogSlug: "installation-solaire-toulon-var",
  },
  {
    slug: "alpes-maritimes",
    name: "Alpes-Maritimes",
    code: "06",
    description:
      "Métropole Nice Côte d'Azur, zones commerciales et tertiaires : le 06 offre un gisement solaire croissant pour les entreprises engagées dans la transition énergétique.",
    relatedBlogSlug: "panneaux-solaires-entreprises-paca-2025",
  },
  {
    slug: "alpes-de-haute-provence",
    name: "Alpes-de-Haute-Provence",
    code: "04",
    description:
      "Entre Manosque, Digne et Sisteron, les entreprises industrielles et agricoles du 04 bénéficient d'un ensoleillement élevé et de surfaces de bâtiments adaptées au photovoltaïque.",
    relatedBlogSlug: "agrivoltaisme-paca-agriculture-solaire",
  },
  {
    slug: "hautes-alpes",
    name: "Hautes-Alpes",
    code: "05",
    description:
      "Gap, Embrun et Briançon : malgré l'altitude, le département cumule un fort ensoleillement estival et des toitures professionnelles exploitables pour l'autoconsommation.",
    relatedBlogSlug: "panneaux-solaires-entreprises-paca-2025",
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.slug === slug);
}
