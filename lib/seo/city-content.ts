import type { City } from "./types";

export function cityMetaTitle(city: City) {
  return `Panneaux Solaires ${city.name} (${city.departmentCode}) | Electrotech — Installation Photovoltaïque`;
}

export function cityMetaDescription(city: City) {
  return `Electrotech installe vos panneaux solaires photovoltaïques à ${city.name}. Expert RGE QualiPV pour entreprises et professionnels. Devis gratuit ☎ 04 91 87 11 08`;
}

export function buildCitySections(city: City) {
  const { name, departmentName, departmentCode, localHook, neighborNames } =
    city;
  const neighborsText =
    neighborNames.length > 0
      ? neighborNames.join(", ")
      : `les communes voisines des ${departmentName}`;

  const deptSolarContext: Record<string, string> = {
    "13":
      "Les Bouches-du-Rhône concentrent ports, zones logistiques et industries lourdes : un gisement solaire majeur pour l'autoconsommation à grande échelle.",
    "84":
      "Le Vaucluse combine agriculture, agroalimentaire et zones d'activités en plaine : le photovoltaïque y est particulièrement rentable grâce à un ensoleillement record.",
    "83":
      "Le Var mêle littoral et arrière-pays industriel : les toitures de zones commerciales et entrepôts offrent d'excellentes surfaces pour le B2B solaire.",
    "06":
      "Les Alpes-Maritimes voient la demande tertiaire et hôtelière croître : le solaire sécurise les charges énergétiques des bâtiments professionnels.",
    "04":
      "Les Alpes-de-Haute-Provence accueillent industries, exploitations agricoles et bâtiments publics où l'agrivoltaïsme et l'autoconsommation prennent de l'ampleur.",
    "05":
      "Les Hautes-Alpes bénéficient d'un ensoleillement estival marqué malgré l'altitude : les toitures de commerces, stations et équipements publics sont des candidats pertinents.",
  };

  const deptExtra = deptSolarContext[city.departmentCode] ?? "";

  return {
    intro: [
      `Vous recherchez un installateur de panneaux solaires photovoltaïques à ${name} ? Electrotech, entreprise marseillaise certifiée QualiPV RGE, accompagne les professionnels, industriels, artisans et collectivités de ${name} et des ${departmentName} (${departmentCode}) dans leurs projets d'autoconsommation, de stockage et de revente de surplus.`,
      `${localHook} Dans ce contexte économique local, le photovoltaïque permet de sécuriser vos coûts énergétiques, d'améliorer votre bilan carbone et de valoriser vos actifs immobiliers.`,
      `Depuis plus de 25 ans, Electrotech assure l'étude, l'installation clés en main et le suivi de centrales solaires sur toiture, ombrières de parking et bâtiments industriels. Notre bureau d'études interne dimensionne chaque projet selon votre consommation réelle et vos objectifs financiers.`,
    ],
    whySolar: [
      `La région PACA bénéficie de 2 700 à 3 000 heures d'ensoleillement par an, parmi les niveaux les plus élevés de France métropolitaine. À ${name}, cette ressource solaire se traduit par une production électrique régulière et prévisible, idéale pour les entreprises aux horaires diurnes.`,
      deptExtra,
      `Pour une PME ou un site industriel à ${name}, l'autoconsommation solaire peut réduire la facture d'électricité de 40 % à 70 % selon le profil de consommation, le dimensionnement et le recours éventuel au stockage batterie. À l'heure où les tarifs réseau dépassent souvent 0,18 €/kWh, produire sa propre électricité devient un levier stratégique.`,
      `Le cadre réglementaire encourage la transition : obligations CEE, dispositifs ADEME, co-financements régionaux et éligibilité aux aides pour les travaux réalisés par un installateur RGE. Parallèlement, un bâtiment équipé en photovoltaïque gagne en attractivité locative et en valeur patrimoniale.`,
      `Enfin, intégrer le solaire dans votre stratégie RSE renforce votre image auprès de vos clients, partenaires et donneurs d'ordre, de plus en plus attentifs à la performance environnementale de leurs prestataires.`,
    ],
    services: [
      {
        title: "Étude de faisabilité gratuite",
        text: `Analyse de vos factures, visite technique sur site à ${name}, étude d'ensoleillement, vérification de la charpente et proposition de scénarios autoconsommation / revente.`,
      },
      {
        title: "Installation clés en main",
        text: "Pose sur toiture plate ou inclinée (bac acier, membrane, tuile), structures adaptées au vent et aux normes DTU. Coordination des équipes pour limiter l'impact sur votre activité.",
      },
      {
        title: "Ombrières de parking photovoltaïques",
        text: "Solution idéale pour les surfaces imperméabilisées : production d'électricité, ombrage des véhicules et conformité progressive avec les obligations de la loi APER.",
      },
      {
        title: "Autoconsommation et stockage batterie",
        text: "Optimisation du taux d'autoconsommation grâce aux batteries lithium (LFP). Idéal pour les horaires décalés ou la valorisation des heures creuses.",
      },
      {
        title: "Raccordement et revente surplus EDF OA",
        text: "Gestion des démarches ENEDIS, CONSUEL et convention d'achat pour la revente du surplus non autoconsommé.",
      },
      {
        title: "Maintenance et monitoring",
        text: "Suivi de production en temps réel, alertes automatiques, contrats de maintenance annuels avec nettoyage et contrôle électrique.",
      },
    ],
    whyElectrotech: [
      `Electrotech cumule plus de 25 ans d'expérience en installations électriques et photovoltaïques en région PACA. La certification QualiPV RGE est indispensable pour bénéficier des aides CEE et des subventions publiques : nous la détenons et la renouvelons régulièrement.`,
      `Notre bureau d'études interne assure la cohérence technique du projet, du dimensionnement à la mise en service. Vous disposez d'un interlocuteur unique pour le devis, le chantier, le raccordement et le suivi post-installation.`,
      `Nous intervenons rapidement à ${name} et dans les ${departmentName}, avec des équipes habituées aux contraintes des sites industriels, entrepôts, commerces et bâtiments publics. Chaque installation est pensée pour maximiser le retour sur investissement sur 20 à 25 ans.`,
    ],
    zone: [
      `Electrotech couvre ${name} et son agglomération, ainsi que les communes limitrophes : ${neighborsText}. Nous assurons également les interventions dans l'ensemble des ${departmentName} et de la région PACA.`,
      `Que votre site soit en zone industrielle, sur une zone commerciale ou au cœur d'une zone d'activités, nos techniciens se déplacent pour un diagnostic gratuit et un devis personnalisé sous 24 à 48 heures.`,
    ],
  };
}
