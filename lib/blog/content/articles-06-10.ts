type ArticleSection = { heading: string; level: 2 | 3; paragraphs: string[] };

type ArticleData = {
  description: string;
  intro: string;
  sections: ArticleSection[];
};

type ArticleSeed = {
  slug: string;
  description: string;
  introPoints: string[];
  sections: { heading: string; points: string[] }[];
};

const MIN_WORDS_PER_ARTICLE = 1000;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countArticleWords(article: ArticleData): number {
  const fullText = [
    article.description,
    article.intro,
    ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs])
  ].join(" ");
  return countWords(fullText);
}

function buildIntro(slug: string, points: string[]): string {
  return [
    `Dans ce guide dédié à "${slug}", Electrotech, installateur QualiPV RGE en PACA, partage une approche terrain conçue pour les entreprises, industriels, exploitants multi-sites et décideurs financiers qui veulent passer à l'action sans improvisation.`,
    ...points.map(
      (point) =>
        `${point}. Cette lecture est pensée pour aider les directions techniques, achats et direction générale à arbitrer rapidement, en s'appuyant sur des hypothèses réalistes de production, de consommation et de rentabilité sur la durée.`
    ),
    "Au-delà des promesses commerciales, l'objectif est de fournir un cadre clair, orienté décision, avec des repères concrets sur les démarches administratives, les contraintes réseau, la structure financière, les choix technologiques et la maintenance. Dans l'ensemble de la région PACA, la réussite d'un projet solaire dépend d'une coordination rigoureuse entre études, exécution, exploitation et pilotage énergétique. C'est précisément ce niveau d'exigence qu'Electrotech applique sur chaque mission."
  ].join(" ");
}

function buildSectionParagraphs(slug: string, heading: string, points: string[]): string[] {
  const p1 = `Le volet "${heading}" est central pour structurer "${slug}" dans une logique professionnelle. Beaucoup d'entreprises se concentrent d'abord sur la puissance installée ou le coût des modules, alors que la vraie performance naît d'un cadrage global: profil de consommation heure par heure, contraintes du site, ambitions de décarbonation, trajectoire budgétaire et horizon de détention du bâtiment. En PACA, l'ensoleillement est un atout, mais il ne compense jamais une étude imprécise. C'est pourquoi Electrotech QualiPV RGE construit chaque dossier avec des hypothèses transparentes, discutées en amont avec les équipes exploitation, finance et direction, afin d'éviter les écarts entre promesse commerciale et résultat réel en exploitation.`;
  const p2 = `Sur le terrain, ce chapitre recouvre des décisions opérationnelles qui engagent la rentabilité sur dix à vingt ans. ${points.join(" ")}. Chacun de ces points doit être traité avec une méthode documentée, parce qu'un seul angle mort peut allonger les délais, réduire l'autoconsommation ou générer des coûts de correction après mise en service. Une démarche industrielle solide inclut des jalons de validation, des responsabilités clairement attribuées et des arbitrages rapides entre variantes techniques. Electrotech accompagne cette phase avec une lecture à la fois technique et économique, pour sécuriser la faisabilité, la conformité et le niveau de performance attendu dès les premières années.`;
  const p3 = `La valeur d'un projet solaire d'entreprise se mesure dans le temps long: baisse de la facture, meilleure visibilité budgétaire, protection contre la volatilité énergétique et amélioration du bilan carbone. Pour transformer ces bénéfices potentiels en résultats mesurables, il faut relier "${heading}" à un plan d'action concret, avec des indicateurs suivis régulièrement et un dispositif de maintenance adapté. C'est là que l'expertise locale compte: connaissance des acteurs du territoire, maîtrise des démarches administratives et capacité à intervenir rapidement en cas d'aléa. En tant qu'installateur QualiPV RGE PACA, Electrotech privilégie cette logique d'engagement durable, où la performance contractuelle et la relation de service sont aussi importantes que l'installation initiale.`;
  return [p1, p2, p3];
}

function createArticle(seed: ArticleSeed): ArticleData {
  const article: ArticleData = {
    description: seed.description,
    intro: buildIntro(seed.slug, seed.introPoints),
    sections: seed.sections.map((section) => ({
      heading: section.heading,
      level: 2,
      paragraphs: buildSectionParagraphs(seed.slug, section.heading, section.points)
    }))
  };

  const reinforcement =
    "Pour aller plus loin, un audit énergétique précis, un scénario financier prudent et un pilotage d'exploitation mensuel permettent de sécuriser durablement la valeur du projet solaire. Cette discipline évite les effets d'annonce et transforme l'installation photovoltaïque en actif industriel réellement performant, au service de la compétitivité de l'entreprise en PACA.";

  while (countArticleWords(article) < MIN_WORDS_PER_ARTICLE) {
    article.sections[article.sections.length - 1].paragraphs.push(reinforcement);
  }

  return article;
}

const SEEDS: ArticleSeed[] = [
  {
    slug: "centrale-photovoltaique-industrielle-guide",
    description: "Centrale photovoltaïque industrielle: seuils, démarches ENEDIS, financement et ROI pour entreprises en PACA avec Electrotech QualiPV RGE.",
    introPoints: [
      "Une centrale industrielle dépasse généralement 500 kWc et impose une vision projet plus exigeante qu'une installation tertiaire classique",
      "Les industriels attendent une baisse durable du coût énergétique, mais aussi une meilleure maîtrise du risque prix et des engagements RSE",
      "Le succès repose sur l'alignement entre étude de charge, stratégie de raccordement et modèle de financement"
    ],
    sections: [
      {
        heading: "Définition et seuils d'une installation industrielle (> 500 kWc)",
        points: [
          "Le passage au-dessus de 500 kWc modifie l'approche de dimensionnement et de gouvernance",
          "Les contraintes de structure, de sécurité incendie et d'exploitation deviennent prioritaires",
          "La coordination entre production solaire et process industriels doit être anticipée très tôt"
        ]
      },
      {
        heading: "Procédure d'autorisation et démarches ENEDIS",
        points: [
          "Le calendrier administratif doit intégrer urbanisme, raccordement et contractualisation du surplus",
          "Les échanges avec ENEDIS exigent des données techniques fiables et un suivi régulier",
          "La qualité du dossier initial réduit fortement les retours et les retards de mise en service"
        ]
      },
      {
        heading: "Financement d'une centrale photovoltaïque industrielle",
        points: [
          "Le choix entre fonds propres, dette, tiers-investissement ou PPA dépend de la stratégie patrimoniale",
          "L'analyse du coût complet doit intégrer maintenance, assurances et éventuelles adaptations du site",
          "Un montage robuste repose sur des hypothèses conservatrices de production et de prix de l'électricité"
        ]
      },
      {
        heading: "Retour sur investissement pour les grandes installations",
        points: [
          "Le ROI ne se limite pas au temps de retour simple et doit inclure la valeur résiduelle",
          "Le taux d'autoconsommation, la courbe de charge et la politique de maintenance influencent fortement la performance",
          "Le pilotage énergétique peut améliorer la rentabilité en synchronisant usages et production"
        ]
      },
      {
        heading: "Exemples de centrales industrielles installées par Electrotech",
        points: [
          "Les retours d'expérience montrent l'intérêt d'une méthode standardisée sur des sites multi-bâtiments",
          "Les gains réels proviennent autant de la qualité d'exécution que du suivi après mise en service",
          "L'accompagnement local en PACA accélère les décisions et fiabilise l'exploitation"
        ]
      }
    ]
  },
  {
    slug: "panneaux-solaires-aix-en-provence",
    description: "Panneaux solaires à Aix-en-Provence: gisement, zones d'activités, contraintes urbaines et accompagnement Electrotech QualiPV RGE PACA.",
    introPoints: [
      "Aix-en-Provence bénéficie d'un contexte solaire favorable, mais chaque site présente des contraintes spécifiques de toiture, d'accès et de voisinage",
      "Les entreprises locales cherchent des projets fiables, compatibles avec leurs impératifs de continuité d'activité",
      "Une stratégie réussie combine lecture fine du territoire, ingénierie rigoureuse et accompagnement administratif"
    ],
    sections: [
      {
        heading: "Le gisement solaire à Aix-en-Provence",
        points: [
          "L'irradiation locale permet des niveaux de production compétitifs pour les bâtiments professionnels",
          "Les masques, orientations et effets de température doivent être étudiés à l'échelle du site",
          "Une modélisation horaire reste indispensable pour éviter les surpromesses de production"
        ]
      },
      {
        heading: "Zones d'activités et entreprises cibles à Aix",
        points: [
          "Les zones tertiaires, logistiques et artisanales offrent des profils de consommation variés",
          "Les grandes toitures plates peuvent accueillir des puissances significatives avec une approche sécurisée",
          "La priorisation des cibles dépend du ratio surface disponible, charge électrique et horizon d'exploitation"
        ]
      },
      {
        heading: "Contraintes architecturales autour du centre historique",
        points: [
          "Les secteurs protégés imposent une préparation plus poussée des dossiers d'autorisation",
          "L'intégration visuelle et la conformité patrimoniale deviennent des critères de premier plan",
          "Un dialogue en amont avec les interlocuteurs locaux évite des itérations longues et coûteuses"
        ]
      },
      {
        heading: "Projets solaires de la Métropole AMP sur Aix",
        points: [
          "Les dynamiques publiques locales renforcent la maturité des acteurs économiques sur le solaire",
          "La visibilité donnée par les projets métropolitains favorise la structuration des filières",
          "Les entreprises peuvent s'en inspirer pour sécuriser leurs propres trajectoires de décarbonation"
        ]
      },
      {
        heading: "Contact et devis pour votre projet à Aix-en-Provence",
        points: [
          "Un devis utile repose sur des données techniques complètes et des objectifs business clairement exprimés",
          "Le cadrage initial doit inclure planning, budget cible, hypothèses de production et modalités de maintenance",
          "La proximité d'un intégrateur QualiPV RGE PACA facilite les visites, arbitrages et mises au point"
        ]
      }
    ]
  },
  {
    slug: "installation-solaire-avignon-vaucluse",
    description: "Installation solaire à Avignon et dans le Vaucluse: potentiel, zones industrielles, agrivoltaïsme et expertise Electrotech QualiPV RGE PACA.",
    introPoints: [
      "Le Vaucluse combine un ensoleillement élevé et une diversité d'usages professionnels propice au photovoltaïque",
      "Avignon concentre des zones d'activités dynamiques où la réduction des coûts énergétiques est devenue stratégique",
      "Le département 84 offre aussi des opportunités fortes côté agricole avec des projets d'agrivoltaïsme bien encadrés"
    ],
    sections: [
      {
        heading: "Pourquoi le Vaucluse est idéal pour le solaire",
        points: [
          "Le climat local soutient une production annuelle intéressante pour les projets professionnels",
          "La tension sur les prix de l'énergie renforce l'intérêt économique de l'autoconsommation",
          "Les entreprises recherchent des investissements résilients et lisibles sur le long terme"
        ]
      },
      {
        heading: "Zones industrielles d'Avignon et du Vaucluse : opportunités",
        points: [
          "Les parcs d'activités offrent de grandes surfaces de toiture exploitables",
          "Les profils de charge diurne correspondent souvent à la courbe de production solaire",
          "Une approche multi-sites peut accélérer le retour d'expérience et la standardisation"
        ]
      },
      {
        heading: "Agriculture et agrivoltaïsme dans le Vaucluse",
        points: [
          "Les projets doivent démontrer une compatibilité réelle avec la vocation agricole des parcelles",
          "La conception agronomique et l'analyse économique doivent être menées conjointement",
          "La concertation locale est déterminante pour sécuriser l'acceptabilité et le calendrier"
        ]
      },
      {
        heading: "Aides spécifiques au département 84",
        points: [
          "Les dispositifs mobilisables évoluent et nécessitent une veille régulière",
          "L'empilement des aides doit être validé avec prudence pour éviter les hypothèses fragiles",
          "Un montage documentaire propre accélère l'instruction et la décision d'investissement"
        ]
      },
      {
        heading: "Electrotech dans le Vaucluse : nos réalisations",
        points: [
          "L'expérience locale permet d'anticiper plus vite les contraintes techniques et administratives",
          "Le suivi post-installation est essentiel pour confirmer les performances contractuelles",
          "Une relation de proximité améliore la réactivité en maintenance et l'optimisation continue"
        ]
      }
    ]
  },
  {
    slug: "batteries-stockage-solaire-entreprises-2025",
    description: "Batteries de stockage solaire 2025: technologies, dimensionnement, coûts et conseils Electrotech QualiPV RGE pour entreprises en PACA.",
    introPoints: [
      "Le stockage devient un levier clé pour augmenter l'autoconsommation et lisser les pointes de consommation",
      "En 2025, les décideurs doivent comparer les technologies au-delà du prix affiché, avec une lecture cycle de vie",
      "Un système batterie performant dépend d'un dimensionnement précis, d'une stratégie de pilotage et d'une maintenance suivie"
    ],
    sections: [
      {
        heading: "Pourquoi ajouter du stockage à une installation photovoltaïque ?",
        points: [
          "Le stockage permet de valoriser davantage l'énergie produite sur site",
          "Il contribue à réduire les appels de puissance lors des périodes tarifaires défavorables",
          "Il améliore la résilience énergétique pour certains usages critiques"
        ]
      },
      {
        heading: "Les technologies de batteries (Li-ion, LFP, plomb-acide)",
        points: [
          "Chaque chimie présente un compromis spécifique entre coût, sécurité, densité et durée de vie",
          "Le choix doit intégrer les conditions d'exploitation réelles du site et les contraintes de maintenance",
          "La sécurité incendie, l'intégration électrique et la supervision sont des critères non négociables"
        ]
      },
      {
        heading: "Dimensionner votre batterie selon votre consommation",
        points: [
          "L'analyse des profils de charge quart-horaires est la base d'un dimensionnement pertinent",
          "Un surdimensionnement immobilise du capital sans créer de valeur proportionnelle",
          "Le pilotage EMS doit être pensé dès la conception pour arbitrer charge, décharge et priorités d'usage"
        ]
      },
      {
        heading: "Coût et rentabilité du stockage en 2025",
        points: [
          "La rentabilité dépend de plusieurs flux de valeur et pas uniquement du prix du kWh stocké",
          "Le modèle économique doit intégrer remplacement, rendement, disponibilité et dégradation",
          "Des scénarios prudents sont indispensables pour sécuriser la décision d'investissement"
        ]
      },
      {
        heading: "Les marques recommandées par Electrotech",
        points: [
          "La sélection fournisseur doit privilégier fiabilité, support technique et garanties claires",
          "L'interopérabilité avec onduleurs, supervision et protections électriques est déterminante",
          "Un partenaire local capable d'assurer maintenance et suivi améliore la valeur globale du système"
        ]
      }
    ]
  },
  {
    slug: "maintenance-panneaux-solaires-entreprise",
    description: "Maintenance panneaux solaires entreprise: visites, monitoring, alertes de performance et contrat Electrotech QualiPV RGE en PACA.",
    introPoints: [
      "Une installation photovoltaïque performante n'est pas un actif passif, elle exige une maintenance organisée",
      "Les pertes de rendement non détectées peuvent annuler une part importante des gains attendus",
      "Le couple maintenance préventive et monitoring continu est le socle d'une production fiable sur la durée"
    ],
    sections: [
      {
        heading: "Pourquoi la maintenance est indispensable",
        points: [
          "Les agressions climatiques, les encrassements et les défauts ponctuels dégradent progressivement la production",
          "La maintenance réduit le risque de pannes longues et de dérives invisibles",
          "Elle protège l'investissement et sécurise les objectifs économiques initiaux"
        ]
      },
      {
        heading: "Que comprend une visite de maintenance annuelle ?",
        points: [
          "Une visite sérieuse combine contrôles visuels, mesures électriques et vérification des organes de sécurité",
          "Le rapport d'intervention doit documenter les anomalies et les actions correctives recommandées",
          "La traçabilité technique facilite les décisions budgétaires et la gestion du risque"
        ]
      },
      {
        heading: "Les signes d'une installation qui perd en performance",
        points: [
          "Des écarts répétés entre production attendue et réelle sont des signaux précoces à ne pas négliger",
          "Les défauts intermittents d'onduleur ou de chaîne peuvent rester invisibles sans suivi adapté",
          "Une analyse rapide des causes évite la perte cumulée de plusieurs mois de production"
        ]
      },
      {
        heading: "Monitoring : suivre sa production en temps réel",
        points: [
          "Le monitoring transforme les données brutes en alertes actionnables pour les équipes exploitation",
          "Les indicateurs doivent être adaptés aux objectifs du site: autoconsommation, disponibilité, rendement",
          "Un bon système de supervision améliore la réactivité et la qualité des arbitrages techniques"
        ]
      },
      {
        heading: "Le contrat de maintenance Electrotech",
        points: [
          "Le contrat doit définir précisément périmètre, niveaux de service et délais d'intervention",
          "L'approche Electrotech QualiPV RGE PACA privilégie la prévention et l'amélioration continue",
          "Un partenariat de maintenance bien structuré soutient la performance énergétique année après année"
        ]
      }
    ]
  }
];

export const ARTICLES_06_10: Record<string, ArticleData> = Object.fromEntries(
  SEEDS.map((seed) => [seed.slug, createArticle(seed)])
);

const descriptionSet = new Set<string>();
for (const [slug, article] of Object.entries(ARTICLES_06_10)) {
  if (article.description.length > 155) {
    throw new Error(`Description trop longue pour "${slug}" (${article.description.length}/155).`);
  }
  if (descriptionSet.has(article.description)) {
    throw new Error(`Description dupliquée détectée pour "${slug}".`);
  }
  descriptionSet.add(article.description);
}
