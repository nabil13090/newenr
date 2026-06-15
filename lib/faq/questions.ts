export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "q1",
    category: "Photovoltaïque",
    question: "Qu'est-ce que l'énergie solaire photovoltaïque ?",
    answer:
      "Les panneaux solaires photovoltaïques convertissent la lumière du soleil en électricité grâce à l'effet photovoltaïque. Chaque module est composé de cellules en silicium qui produisent un courant continu (DC), transformé en courant alternatif (AC) par un onduleur pour alimenter vos équipements professionnels. En PACA, où l'irradiation dépasse souvent 1 600 kWh/m²/an, une installation bien orientée au sud produit entre 1 200 et 1 450 kWh par kWc installé. Electrotech dimensionne chaque centrale en fonction de votre courbe de consommation réelle, afin de maximiser l'autoconsommation et la rentabilité de votre site.",
  },
  {
    id: "q2",
    category: "Photovoltaïque",
    question:
      "Quelle est la différence entre le solaire thermique et le photovoltaïque ?",
    answer:
      "Le solaire thermique capte la chaleur du soleil pour chauffer de l'eau ou de l'air (chauffage, eau chaude sanitaire, piscines). Le photovoltaïque, lui, produit directement de l'électricité utilisable par vos machines, éclairages, climatisations et process industriels. Pour une entreprise, le photovoltaïque est généralement le levier le plus rentable car il agit sur le poste électricité, souvent le plus lourd de la facture énergétique. Electrotech est spécialisé exclusivement dans le photovoltaïque B2B : centrales en toiture, ombrières de parking et autoconsommation collective pour entrepôts, ateliers et bâtiments tertiaires.",
  },
  {
    id: "q3",
    category: "Photovoltaïque",
    question: "Combien d'heures d'ensoleillement par an en PACA ?",
    answer:
      "La région PACA bénéficie de 2 700 à 3 000 heures d'ensoleillement annuel selon les stations Météo-France : Marseille-Marignane affiche environ 2 900 h, la plaine de Crau et Valensole dépassent 3 000 h, tandis que Gap ou Digne restent autour de 2 400–2 600 h en moyenne montagne. C'est l'une des régions les plus favorables de France métropolitaine, loin devant la moyenne nationale de 1 800 h. Cet avantage climatique se traduit par un productible supérieur de 20 à 40 % par rapport au nord de la France, ce qui raccourcit le retour sur investissement des installations professionnelles.",
  },
  {
    id: "q4",
    category: "Photovoltaïque",
    question: "Quelle puissance de panneaux solaires pour mon entreprise ?",
    answer:
      "La puissance idéale dépend de votre consommation annuelle (kWh), de la surface de toiture disponible, de l'orientation et de votre stratégie (autoconsommation totale, partielle ou revente de surplus). En règle générale, 100 kWc couvrent une bonne partie des besoins d'un entrepôt logistique moyen consommant 150 à 250 MWh/an en journée. Electrotech analyse vos factures sur 12 mois, modélise le productible local et propose un dimensionnement au plus juste. L'objectif n'est pas d'installer le maximum possible, mais la puissance qui maximise votre taux d'autoconsommation et votre retour sur investissement.",
  },
  {
    id: "q5",
    category: "Photovoltaïque",
    question: "Quelle est la durée de vie des panneaux solaires ?",
    answer:
      "Les panneaux photovoltaïques modernes ont une durée de vie de 25 à 30 ans. Les fabricants garantissent généralement 90 % du rendement nominal à 10 ans et 80 à 84 % à 25 ans. Les onduleurs centraux sont garantis 5 à 10 ans, les micro-onduleurs 20 à 25 ans selon les marques. Avec un entretien préventif régulier (nettoyage, contrôle électrique, vérification des fixations), une installation bien conçue en PACA maintient des performances stables sur toute sa durée de vie. Electrotech intègre ces hypothèses de dégradation dans chaque étude économique pour des projections financières réalistes.",
  },
  {
    id: "q6",
    category: "Coût et ROI",
    question:
      "Quel est le coût d'une installation photovoltaïque professionnelle ?",
    answer:
      "En 2025, le coût d'une installation professionnelle se situe entre 800 et 1 200 € HT par kWc installé, selon la complexité du chantier, le type de toiture (bac acier, terrasse, tuile), la hauteur du bâtiment et les équipements choisis. À titre indicatif, une centrale de 100 kWc pour une PME représente un investissement de 80 000 à 120 000 € HT. Les ombrières de parking coûtent davantage (1 200 à 1 800 €/kWc) mais combinent production solaire et protection des véhicules. Electrotech fournit un devis détaillé poste par poste, incluant étude, fourniture, pose, raccordement et mise en service.",
  },
  {
    id: "q7",
    category: "Coût et ROI",
    question:
      "Quel est le retour sur investissement (ROI) d'une installation solaire ?",
    answer:
      "En PACA, le retour sur investissement d'une installation professionnelle se situe généralement entre 6 et 10 ans, selon le prix de l'électricité achetée (0,18 à 0,22 €/kWh en tarif professionnel), le taux d'autoconsommation (60 à 90 %) et les aides obtenues (CEE, subventions). Au-delà de cette période, l'électricité autoconsommée est quasi gratuite pendant 15 à 20 ans supplémentaires. Sur une installation de 100 kWc produisant 130 MWh/an avec 80 % d'autoconsommation, l'économie annuelle peut atteindre 15 000 à 20 000 €. Electrotech chiffre chaque scénario avec des hypothèses prudentes et vérifiables.",
  },
  {
    id: "q8",
    category: "Coût et ROI",
    question: "Quelles aides financières pour les entreprises en 2025 ?",
    answer:
      "Plusieurs dispositifs sont mobilisables en 2025 : les Certificats d'Économies d'Énergie (CEE), les subventions ADEME pour la rénovation énergétique des bâtiments tertiaires, les aides régionales Sud Provence-Alpes-Côte d'Azur, le crédit-bail ou leasing photovoltaïque, et la TVA à 10 % sur certains équipements en autoconsommation. L'éligibilité aux CEE exige impérativement un installateur QualiPV RGE comme Electrotech. Le montant des aides varie selon la puissance, le type de bâtiment et la zone géographique. Nous identifions les dispositifs compatibles avec votre projet et vous accompagnons dans le montage des dossiers.",
  },
  {
    id: "q9",
    category: "Coût et ROI",
    question: "Peut-on financer une installation solaire sans apport ?",
    answer:
      "Oui, plusieurs solutions permettent de financer une installation sans apport initial. Le tiers-investissement : un investisseur finance et possède l'installation, vous achetez l'électricité produite à un tarif inférieur au réseau. Le leasing ou crédit-bail solaire : vous louez l'installation sur 7 à 15 ans, avec une option d'achat en fin de contrat. Les prêts bancaires verts (Éco-PTZ pro, prêts BPI) offrent des taux avantageux pour la transition énergétique. Electrotech vous oriente vers la solution la mieux adaptée à votre trésorerie, votre fiscalité et votre horizon patrimonial.",
  },
  {
    id: "q10",
    category: "Coût et ROI",
    question:
      "Comment calculer l'économie réalisée sur ma facture d'électricité ?",
    answer:
      "La formule de base est : Production annuelle (kWh) × taux d'autoconsommation × prix du kWh acheté au réseau. Exemple concret : 100 000 kWh produits × 80 % autoconsommés × 0,20 €/kWh = 16 000 € d'économie par an. Le surplus injecté sur le réseau est racheté par EDF OA à environ 0,04 à 0,10 €/kWh selon la puissance (arrêté tarifaire 2025). Il faut aussi soustraire les coûts d'exploitation (maintenance, assurance, taxe foncière sur les panneaux). Electrotech modélise ces paramètres sur 25 ans pour vous donner une vision claire du gain net et du temps de retour.",
  },
  {
    id: "q11",
    category: "Installation",
    question:
      "Quelle surface de toiture faut-il pour installer des panneaux solaires ?",
    answer:
      "Un panneau standard de 400 à 450 Wc occupe environ 1,8 à 2 m² de surface utile. Pour une installation de 100 kWc (250 panneaux), comptez 450 à 500 m² de toiture exploitable, en tenant compte des espacements, des cheminements de maintenance et des obstacles (extracteurs, antennes, lucarnes). L'orientation sud avec une inclinaison de 15 à 35° est optimale en PACA, mais l'est et l'ouest restent viables avec un rendement réduit de 10 à 15 %. Electrotech réalise une étude de faisabilité incluant relevé laser, analyse d'ombrage et vérification de la structure porteuse avant toute proposition.",
  },
  {
    id: "q12",
    category: "Installation",
    question: "Mon bâtiment est-il adapté aux panneaux solaires ?",
    answer:
      "La grande majorité des toitures professionnelles sont compatibles : bac acier (le cas le plus fréquent sur les entrepôts), béton terrasse, tuile mécanique, ardoise ou membrane EPDM. Electrotech vérifie la capacité portante de la charpente, l'état de l'étanchéité et l'absence de désordres structurels avant toute installation. Si la toiture est indisponible (réfection imminente, contraintes ABF, toiture végétalisée), les ombrières de parking constituent une alternative performante, désormais encouragée par la loi APER pour les parkings de plus de 1 500 m². Nous proposons la solution la plus adaptée à votre actif immobilier.",
  },
  {
    id: "q13",
    category: "Installation",
    question:
      "Quelle est la durée d'une installation photovoltaïque professionnelle ?",
    answer:
      "La durée de pose varie selon la puissance et la complexité du site. Comptez 2 à 5 jours pour une installation standard de 50 à 200 kWc sur bac acier. Pour des centrales industrielles de 500 kWc à 1 MWc, prévoyez 2 à 4 semaines de travaux, souvent phasés pour ne pas interrompre l'activité. Electrotech planifie les interventions en dehors des périodes de forte activité et coordonne les accès avec vos équipes HSE. Le délai global entre signature et mise en service inclut aussi l'instruction administrative (2 à 8 semaines) et le raccordement ENEDIS (4 à 12 semaines selon les secteurs).",
  },
  {
    id: "q14",
    category: "Installation",
    question:
      "Faut-il des travaux spéciaux pour raccorder les panneaux au réseau ?",
    answer:
      "Oui, tout raccordement au réseau public nécessite une demande auprès d'ENEDis, même en autoconsommation totale sans revente. Electrotech prépare le dossier de raccordement (CRD ou CARD-I selon la puissance), coordonne la pose du compteur bidirectionnel Linky et obtient l'attestation CONSUEL obligatoire avant mise en service. Pour les installations supérieures à 500 kWc, une étude de raccordement approfondie et parfois des travaux sur le poste source peuvent être nécessaires. En zone industrielle de l'Étang de Berre ou sur l'Aéropôle de Vitrolles, les délais sont généralement plus courts grâce à la densité du réseau HTA.",
  },
  {
    id: "q15",
    category: "Installation",
    question:
      "Quelles démarches administratives pour installer des panneaux solaires ?",
    answer:
      "Les démarches dépendent de la puissance et de la localisation. En dessous de 3 kWc sur bâtiment existant : déclaration préalable en mairie. Au-delà, ou pour les ombrières : permis de construire ou déclaration préalable selon le PLU local. En secteur protégé (ABF, sites classés), un avis de l'Architecte des Bâtiments de France est requis. Côté réseau : demande de raccordement ENEDIS, attestation CONSUEL, et convention d'achat EDF OA si revente de surplus. Electrotech prend en charge l'intégralité de ces démarches, de la constitution du dossier à la réception du raccordement, pour que vous restiez concentré sur votre activité.",
  },
  {
    id: "q16",
    category: "Autoconsommation",
    question: "Qu'est-ce que l'autoconsommation solaire ?",
    answer:
      "L'autoconsommation consiste à utiliser directement l'électricité produite par vos panneaux solaires pour alimenter vos équipements professionnels, au moment où le soleil brille. Contrairement à la revente totale, vous réduisez immédiatement votre facture en évitant d'acheter cette électricité au réseau. Le surplus non consommé peut être injecté sur le réseau (rachat EDF OA) ou stocké en batterie pour un usage ultérieur. Pour les entreprises dont l'activité est concentrée en journée — entrepôts, ateliers, bureaux, industries — le taux d'autoconsommation naturel dépasse souvent 70 à 85 % sans stockage.",
  },
  {
    id: "q17",
    category: "Autoconsommation",
    question:
      "Vaut-il mieux autoconsommer ou revendre toute sa production ?",
    answer:
      "En 2025, l'autoconsommation avec vente du surplus est presque toujours plus rentable que la revente totale. Le tarif de rachat EDF OA pour le surplus se situe entre 0,04 et 0,10 €/kWh selon la puissance, tandis que l'électricité achetée au réseau coûte 0,18 à 0,22 €/kWh en tarif professionnel (voire plus en heures de pointe). Chaque kWh autoconsommé vaut donc deux à quatre fois plus qu'un kWh revendu. La revente totale ne se justifie que si vous ne consommez rien en journée et disposez d'un grand terrain en plein champ. Electrotech modélise les deux scénarios pour chaque site.",
  },
  {
    id: "q18",
    category: "Autoconsommation",
    question: "Comment fonctionne la revente du surplus ?",
    answer:
      "Lorsque votre production dépasse votre consommation instantanée, le surplus est automatiquement injecté sur le réseau public. Un compteur Linky bidirectionnel mesure les flux d'injection et de soutirage. EDF Obligation d'Achat (OA) rachète ce surplus à un tarif fixé par arrêté ministériel : environ 0,10 €/kWh pour les installations inférieures à 100 kWc, 0,06 €/kWh entre 100 et 500 kWc, et 0,04 €/kWh au-delà (tarifs indicatifs 2025). La convention d'achat est conclue pour 20 ans. Electrotech gère la souscription EDF OA et le paramétrage du comptage pour un suivi transparent de vos flux énergétiques.",
  },
  {
    id: "q19",
    category: "Autoconsommation",
    question: "Les batteries de stockage valent-elles l'investissement ?",
    answer:
      "Les batteries de stockage deviennent pertinentes pour les entreprises avec des horaires décalés (2×8, 3×8), une tarification heures pleines/heures creuses ou un besoin de secours en cas de coupure réseau. Le coût au kWh stocké a chuté de 80 % en dix ans et se situe autour de 400 à 600 €/kWh installé en 2025. Elles permettent d'atteindre 85 à 95 % d'autoconsommation effective contre 60 à 80 % sans stockage. Pour un entrepôt frigorifique ou un site industriel fonctionnant aussi la nuit, le stockage peut améliorer significativement la rentabilité. Electrotech évalue le surcoût et le gain associé pour chaque profil de consommation.",
  },
  {
    id: "q20",
    category: "Autoconsommation",
    question: "Comment est suivi le fonctionnement de mon installation ?",
    answer:
      "Electrotech installe un système de monitoring connecté qui remonte en temps réel la production de chaque chaîne ou micro-onduleur, la consommation du site et le surplus injecté. Vous accédez à ces données via une application web ou mobile, avec des tableaux de bord personnalisables et des rapports mensuels automatiques. Des alertes par e-mail ou SMS signalent toute anomalie : baisse de production, panne d'onduleur, défaut de communication. Ce suivi permet de détecter rapidement un encrassement, un ombrage nouveau ou une dérive technique, et d'optimiser votre taux d'autoconsommation dans la durée.",
  },
  {
    id: "q21",
    category: "Electrotech",
    question: "Qu'est-ce que la certification QualiPV RGE ?",
    answer:
      "QualiPV RGE (Reconnu Garant de l'Environnement) est la qualification professionnelle de référence pour les installateurs photovoltaïques en France. Délivrée par Qualit'EnR après audit, elle atteste de la compétence technique, de la formation continue et de la qualité des installations. Elle est obligatoire pour que vos travaux soient éligibles aux Certificats d'Économies d'Énergie (CEE), aux subventions ADEME et aux dispositifs publics de financement. Choisir un installateur non RGE vous prive de plusieurs milliers d'euros d'aides potentielles. Electrotech est certifié QualiPV RGE et renouvelle chaque année ses qualifications.",
  },
  {
    id: "q22",
    category: "Electrotech",
    question: "Electrotech intervient-il dans toute la région PACA ?",
    answer:
      "Oui, Electrotech intervient sur l'ensemble de la région Provence-Alpes-Côte d'Azur : Bouches-du-Rhône (13), Vaucluse (84), Var (83), Alpes-de-Haute-Provence (04), Hautes-Alpes (05) et Alpes-Maritimes (06). Basés à Marseille (13012), nos équipes couvrent les zones industrielles de l'Étang de Berre, les parcs d'activités d'Aix et Avignon, le littoral varois et azuréen, ainsi que les bassins de Manosque, Gap et Digne. Nous connaissons les spécificités locales de chaque territoire : Mistral, corrosion marine, contraintes ABF, délais ENEDIS. Contactez-nous au 04 91 87 11 08 pour une étude sur site.",
  },
  {
    id: "q23",
    category: "Electrotech",
    question: "Proposez-vous un contrat de maintenance ?",
    answer:
      "Oui, Electrotech propose des contrats de maintenance annuels adaptés aux installations professionnelles. Ils comprennent une visite de contrôle sur site, le nettoyage des modules si nécessaire, la vérification électrique (serrage des connexions, test d'isolement, contrôle des protections), l'analyse des données de production et un rapport de performance détaillé. En environnement littoral (Martigues, Fos, La Ciotat) ou industriel, nous recommandons un contrôle semestriel en raison de l'accumulation de poussières, d'embruns ou de pollutions. Un entretien régulier maintient le rendement au-dessus de 95 % de la production théorique et prolonge la durée de vie de l'installation.",
  },
  {
    id: "q24",
    category: "Electrotech",
    question: "Quel délai entre le devis et la mise en service ?",
    answer:
      "Comptez en moyenne 4 à 8 semaines entre la signature du devis et la mise en service, selon la complexité du projet. Le découpage type : visite et étude (1 semaine), instruction mairie (1 à 2 mois si permis), commande matériel (2 à 4 semaines), travaux (2 à 5 jours), raccordement ENEDIS (4 à 12 semaines selon les secteurs). En zone bien maillée comme Vitrolles, Istres ou la Valentine, les délais ENEDIS sont souvent plus courts (4 à 6 semaines). Electrotech coordonne toutes les étapes en parallèle pour optimiser le calendrier et vous tenir informé à chaque jalon.",
  },
  {
    id: "q25",
    category: "Electrotech",
    question: "Comment obtenir un devis pour mon entreprise ?",
    answer:
      "Contactez Electrotech au 04 91 87 11 08 ou via le formulaire sur electrotechenr.fr/contact/. Un chargé d'affaires vous rappelle sous 24 heures ouvrées pour comprendre votre projet : type de bâtiment, consommation électrique, surface disponible, objectifs (autoconsommation, ombrière, extension). Nous planifions ensuite une visite sur site gratuite pour relever la toiture, analyser la structure et collecter vos factures d'électricité. Vous recevez un devis détaillé incluant dimensionnement, simulation économique sur 25 ans, planning prévisionnel et liste des aides mobilisables. L'étude initiale est sans engagement.",
  },
  {
    id: "q26",
    category: "Technique",
    question:
      "Quelle est la différence entre onduleur central et micro-onduleurs ?",
    answer:
      "L'onduleur central convertit la production de l'ensemble des panneaux en une seule unité. Il est moins coûteux à l'achat et plus simple à entretenir (un seul équipement à remplacer), mais un ombrage sur un panneau affecte toute la chaîne. Les micro-onduleurs sont installés sous chaque panneau : chaque module produit indépendamment, ce qui optimise le rendement en cas d'ombrage partiel, d'orientations mixtes ou de toitures complexes. Ils facilitent aussi le monitoring panneau par panneau. Electrotech recommande la solution adaptée à votre configuration : central pour les grandes toitures bac acier homogènes, micro-onduleurs pour les toitures terrasse avec obstacles.",
  },
  {
    id: "q27",
    category: "Technique",
    question: "Les panneaux solaires fonctionnent-ils par temps nuageux ?",
    answer:
      "Oui, les panneaux photovoltaïques produisent même par ciel couvert, bien qu'à puissance réduite. Par temps nuageux, la production atteint environ 10 à 30 % de la capacité maximale, selon l'épaisseur des nuages. En PACA, les journées ensoleillées compensent largement les jours couverts : le productible annuel reste excellent grâce aux 2 700 à 3 000 heures de soleil. Les panneaux modernes captent aussi la lumière diffuse. Le Mistral, fréquent en Provence, a un effet positif secondaire : il nettoie naturellement les modules de la poussière et améliore le refroidissement, ce qui augmente légèrement le rendement par temps chaud.",
  },
  {
    id: "q28",
    category: "Technique",
    question: "Comment sont entretenues les panneaux solaires ?",
    answer:
      "Un entretien annuel est recommandé pour maintenir les performances optimales. Il comprend le nettoyage des modules (poussière, pollen, fientes, pollution), la vérification des fixations et des connexions électriques, le contrôle de l'étanchéité au niveau des percements et l'analyse des courbes de production. En PACA, les panneaux en zone rurale ou de plaine s'encrassent moins qu'en zone industrielle dense ou littorale. Sur le littoral (Martigues, Port-de-Bouc, Toulon), le dépôt salin nécessite un rinçage à l'eau douce régulier. Electrotech intègre ce service dans ses contrats de maintenance avec des interventions planifiées hors période de production maximale.",
  },
  {
    id: "q29",
    category: "Technique",
    question: "Que se passe-t-il en cas de panne de courant réseau ?",
    answer:
      "Par défaut, une installation photovoltaïque en autoconsommation sans stockage s'arrête automatiquement lors d'une coupure réseau. C'est une mesure de sécurité obligatoire (anti-îlotage) pour protéger les techniciens ENEDIS intervenant sur les lignes. Sans batterie, vous n'avez pas d'électricité solaire pendant la coupure. Avec un système de stockage et un onduleur hybride ou un dispositif d'îlotage, vous pouvez alimenter des circuits prioritaires (serveurs, froid, éclairage de sécurité) en cas de blackout. Electrotech dimensionne ces solutions de secours selon vos besoins de continuité d'activité et votre budget.",
  },
  {
    id: "q30",
    category: "Technique",
    question: "Peut-on ajouter des panneaux à une installation existante ?",
    answer:
      "Oui, l'extension d'une centrale existante est possible sous réserve de compatibilité technique et administrative. Il faut vérifier que l'onduleur ou les micro-onduleurs acceptent la puissance supplémentaire, que le câblage et le tableau électrique sont dimensionnés en conséquence, et que le compteur ENEDIS autorise la nouvelle puissance. Une nouvelle demande de raccordement ou un avenant à la convention EDF OA peut être nécessaire. Electrotech réalise un audit complet de l'installation existante (état des modules, onduleur, protections) avant toute extension, pour garantir la cohérence et la sécurité de l'ensemble.",
  },
];
