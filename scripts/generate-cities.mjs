import fs from "fs";

const cities = [
  ["Marseille", "marseille", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13001–13016"],
  ["Aix-en-Provence", "aix-en-provence", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13100"],
  ["Arles", "arles", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13200"],
  ["Aubagne", "aubagne", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13400"],
  ["Martigues", "martigues", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13500"],
  ["Istres", "istres", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13800"],
  ["Salon-de-Provence", "salon-de-provence", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13300"],
  ["La Ciotat", "la-ciotat", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13600"],
  ["Vitrolles", "vitrolles", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13127"],
  ["Fos-sur-Mer", "fos-sur-mer", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13270"],
  ["Miramas", "miramas", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13140"],
  ["Gardanne", "gardanne", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13120"],
  ["Lambesc", "lambesc", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13410"],
  ["Trets", "trets", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13530"],
  ["Roquevaire", "roquevaire", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13360"],
  ["Châteauneuf-les-Martigues", "chateauneuf-les-martigues", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13220"],
  ["Berre-l'Étang", "berre-l-etang", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13130"],
  ["Port-de-Bouc", "port-de-bouc", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13110"],
  ["Gignac-la-Nerthe", "gignac-la-nerthe", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13180"],
  ["Bouc-Bel-Air", "bouc-bel-air", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13320"],
  ["Peynier", "peynier", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13790"],
  ["Peyrolles-en-Provence", "peyrolles-en-provence", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13860"],
  ["Saint-Cannat", "saint-cannat", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13760"],
  ["Rognac", "rognac", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13340"],
  ["Lançon-Provence", "lancon-provence", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13680"],
  ["Velaux", "velaux", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13880"],
  ["Pennes-Mirabeau", "pennes-mirabeau", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13170"],
  ["Plan-de-Cuques", "plan-de-cuques", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13380"],
  ["Allauch", "allauch", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13190"],
  ["Cassis", "cassis", "13", "bouches-du-rhone", "Bouches-du-Rhône", "13260"],
  ["Avignon", "avignon", "84", "vaucluse", "Vaucluse", "84000"],
  ["Carpentras", "carpentras", "84", "vaucluse", "Vaucluse", "84200"],
  ["Orange", "orange", "84", "vaucluse", "Vaucluse", "84100"],
  ["Cavaillon", "cavaillon", "84", "vaucluse", "Vaucluse", "84300"],
  ["Apt", "apt", "84", "vaucluse", "Vaucluse", "84400"],
  ["Pertuis", "pertuis", "84", "vaucluse", "Vaucluse", "84120"],
  ["Sorgues", "sorgues", "84", "vaucluse", "Vaucluse", "84700"],
  ["Vedène", "vedene", "84", "vaucluse", "Vaucluse", "84270"],
  ["Le Pontet", "le-pontet", "84", "vaucluse", "Vaucluse", "84130"],
  ["Monteux", "monteux", "84", "vaucluse", "Vaucluse", "84170"],
  ["Courthézon", "courthezon", "84", "vaucluse", "Vaucluse", "84350"],
  ["Pernes-les-Fontaines", "pernes-les-fontaines", "84", "vaucluse", "Vaucluse", "84210"],
  ["L'Isle-sur-la-Sorgue", "l-isle-sur-la-sorgue", "84", "vaucluse", "Vaucluse", "84800"],
  ["Bollène", "bollene", "84", "vaucluse", "Vaucluse", "84500"],
  ["Valréas", "valreas", "84", "vaucluse", "Vaucluse", "84600"],
  ["Vaison-la-Romaine", "vaison-la-romaine", "84", "vaucluse", "Vaucluse", "84110"],
  ["Gordes", "gordes", "84", "vaucluse", "Vaucluse", "84220"],
  ["Cheval-Blanc", "cheval-blanc", "84", "vaucluse", "Vaucluse", "84460"],
  ["Cadenet", "cadenet", "84", "vaucluse", "Vaucluse", "84160"],
  ["Lourmarin", "lourmarin", "84", "vaucluse", "Vaucluse", "84160"],
  ["Toulon", "toulon", "83", "var", "Var", "83000"],
  ["Fréjus", "frejus", "83", "var", "Var", "83600"],
  ["La Seyne-sur-Mer", "la-seyne-sur-mer", "83", "var", "Var", "83500"],
  ["Brignoles", "brignoles", "83", "var", "Var", "83170"],
  ["Draguignan", "draguignan", "83", "var", "Var", "83300"],
  ["Hyères", "hyeres", "83", "var", "Var", "83400"],
  ["Saint-Raphaël", "saint-raphael", "83", "var", "Var", "83700"],
  ["Ollioules", "ollioules", "83", "var", "Var", "83190"],
  ["La Garde", "la-garde", "83", "var", "Var", "83130"],
  ["Six-Fours-les-Plages", "six-fours-les-plages", "83", "var", "Var", "83140"],
  ["Nice", "nice", "06", "alpes-maritimes", "Alpes-Maritimes", "06000"],
  ["Antibes", "antibes", "06", "alpes-maritimes", "Alpes-Maritimes", "06600"],
  ["Cannes", "cannes", "06", "alpes-maritimes", "Alpes-Maritimes", "06400"],
  ["Grasse", "grasse", "06", "alpes-maritimes", "Alpes-Maritimes", "06130"],
  ["Menton", "menton", "06", "alpes-maritimes", "Alpes-Maritimes", "06500"],
  ["Manosque", "manosque", "04", "alpes-de-haute-provence", "Alpes-de-Haute-Provence", "04100"],
  ["Digne-les-Bains", "digne-les-bains", "04", "alpes-de-haute-provence", "Alpes-de-Haute-Provence", "04000"],
  ["Sisteron", "sisteron", "04", "alpes-de-haute-provence", "Alpes-de-Haute-Provence", "04200"],
  ["Forcalquier", "forcalquier", "04", "alpes-de-haute-provence", "Alpes-de-Haute-Provence", "04300"],
  ["Volx", "volx", "04", "alpes-de-haute-provence", "Alpes-de-Haute-Provence", "04130"],
  ["Gap", "gap", "05", "hautes-alpes", "Hautes-Alpes", "05000"],
  ["Briançon", "briancon", "05", "hautes-alpes", "Hautes-Alpes", "05100"],
  ["Embrun", "embrun", "05", "hautes-alpes", "Hautes-Alpes", "05200"],
  ["Laragne-Montéglin", "laragne-monteglin", "05", "hautes-alpes", "Hautes-Alpes", "05300"],
  ["Veynes", "veynes", "05", "hautes-alpes", "Hautes-Alpes", "05400"],
];

const hooks = {
  marseille:
    "Premier port de Méditerranée, zones portuaires, entrepôts logistiques et tissu industriel des quartiers Est.",
  "aix-en-provence":
    "Technopôle de l'Arbois, zones Activités de Rousset et bassin d'emploi tertiaire en forte croissance.",
  arles: "Parc industriel de Trigance, agroalimentaire et logistique sur l'axe Rhône-Saint-Gilles.",
  aubagne: "Pôle Garlaban, industries manufacturières et zones d'activités le long de l'A50.",
  martigues: "Raffinerie, pétrochimie et zones industrielles de Lavéra et Croix-Sainte.",
  istres: "Base aéronautique, industries de défense et zones d'activités de L'Estaque et Rassuen.",
  "fos-sur-mer":
    "Grand port maritime, sidérurgie et vastes surfaces de toitures industrielles.",
  avignon: "MIN d'Avignon, zones Agroparc et tissu agroalimentaire du Grand Avignon.",
  toulon: "Base navale, chantiers navals et zones industrielles de La Seyne et Ollioules.",
  nice: "Aéroport Nice Côte d'Azur, technopoles et zones commerciales de la métropole.",
  pertuis: "Zone industrielle de Pertuis et lien économique entre Luberon et département du Var.",
  "aix-en-provence": "Technopôle de l'Arbois, zones Activités de Rousset et bassin tertiaire.",
  gap: "Préfecture des Hautes-Alpes, industries alpines, tourisme et équipements publics à fort potentiel solaire.",
  briancon: "Vallée de la Durance, activités touristiques et bâtiments tertiaires en altitude.",
};

const blogs = [
  "panneaux-solaires-entreprises-paca-2025",
  "autoconsommation-solaire-reduire-facture-electricite",
  "installation-photovoltaique-marseille-professionnels",
  "ombrieres-photovoltaiques-parking-entreprise",
  "aides-subventions-panneaux-solaires-entreprises-2025",
  "installation-solaire-avignon-vaucluse",
  "installation-solaire-toulon-var",
  "panneaux-solaires-aix-en-provence",
];

function neighborsFor(slug, deptSlug) {
  const same = cities
    .filter((c) => c[3] === deptSlug && c[1] !== slug)
    .map((c) => c[1]);
  const idx = cities.findIndex((c) => c[1] === slug);
  const picked = [];
  for (let o = 1; o <= 4 && picked.length < 3; o++) {
    const n = cities[(idx + o) % cities.length];
    if (n[3] === deptSlug && !picked.includes(n[1])) picked.push(n[1]);
  }
  while (picked.length < 2 && same.length) {
    const s = same[picked.length % same.length];
    if (!picked.includes(s)) picked.push(s);
  }
  return picked;
}

const entries = cities.map((c, i) => {
  const [name, slug, code, deptSlug, deptName, postal] = c;
  const hook =
    hooks[slug] ||
    `Entreprises, artisans, entrepôts et bâtiments tertiaires de ${name} et de son bassin d'emploi dans les ${deptName}.`;
  const neighborSlugs = neighborsFor(slug, deptSlug);
  const neighborNames = neighborSlugs.map(
    (s) => cities.find((x) => x[1] === s)[0]
  );
  return `  {
    name: ${JSON.stringify(name)},
    slug: ${JSON.stringify(slug)},
    departmentCode: ${JSON.stringify(code)},
    departmentSlug: ${JSON.stringify(deptSlug)},
    departmentName: ${JSON.stringify(deptName)},
    postalCode: ${JSON.stringify(postal)},
    localHook: ${JSON.stringify(hook)},
    relatedBlogSlug: ${JSON.stringify(blogs[i % blogs.length])},
    neighborSlugs: ${JSON.stringify(neighborSlugs)},
    neighborNames: ${JSON.stringify(neighborNames)},
  }`;
});

const out = `import type { City } from "./types";

export const CITIES: City[] = [
${entries.join(",\n")}
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getCitiesByDepartment(deptSlug: string): City[] {
  return CITIES.filter((c) => c.departmentSlug === deptSlug);
}
`;

fs.writeFileSync(new URL("../lib/seo/cities.ts", import.meta.url), out);
console.log("Generated", cities.length, "cities");
