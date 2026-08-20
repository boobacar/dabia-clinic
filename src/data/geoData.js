// ------------------------------------------------------------------
//  src/data/geoData.js — Usine à pages géographiques (Clinique DABIA)
//
//  Génère ~560 pages : compétence × pays (352), filière × pays (192),
//  16 hubs pays — toutes au service de l'angle VÉRIDIQUE :
//  « soins dentaires à Dakar pour les patients venant de [pays] »
//  (tourisme dentaire médical + diaspora + patients des régions).
//
//  IMPORTANT (hygiène de bundle) : ce module ne doit être importé que
//  par les outils node (generate-sitemap.mjs, generate-seo-shells.mjs)
//  et par la page lazy GeoPage.jsx. NE PAS l'importer depuis seoData.js
//  ou un composant global (il gonflerait le bundle principal).
// ------------------------------------------------------------------

// ---------------------------------------------------------------
//  PAYS
// ---------------------------------------------------------------
export const GEO_COUNTRIES = [
  {
    slug: "senegal",
    name: "Sénégal",
    prep: "au",
    gen: "du",
    capital: "Dakar",
    flag: "🇸🇳",
    volInfo:
      "Depuis les régions (Thiès, Saint-Louis, Touba, Kaolack, Ziguinchor…), Dakar est accessible par la route, le train express régional ou un vol intérieur.",
    hubExtra:
      "Vous venez de Thiès, Saint-Louis, Touba, Kaolack, Ziguinchor ou d'une autre région ? La Clinique DABIA, située à Sicap Foire (Liberté 6), vous accueille pour vos soins dentaires à Dakar avec devis clair et rendez-vous rapide.",
  },
  {
    slug: "cote-d-ivoire",
    name: "Côte d'Ivoire",
    prep: "en",
    gen: "de",
    capital: "Abidjan",
    flag: "🇨🇮",
    volInfo:
      "Vol direct Abidjan – Dakar (environ 2 h 30). De nombreux vols quotidiens sont assurés par Air Côte d'Ivoire et Air Sénégal.",
    hubExtra:
      "La Clinique DABIA accueille régulièrement des patients ivoiriens à Dakar : soins planifiés à l'avance, devis détaillé avant le voyage et suivi à distance après le retour à Abidjan.",
  },
  {
    slug: "mali",
    name: "Mali",
    prep: "au",
    gen: "du",
    capital: "Bamako",
    flag: "🇲🇱",
    volInfo:
      "Vol direct Bamako – Dakar (environ 2 h). Air Sénégal et Air Mali relient les deux capitales plusieurs fois par semaine.",
    hubExtra:
      "De nombreux patients maliens choisissent la Clinique DABIA à Dakar pour leurs soins dentaires : prise de rendez-vous à distance, devis clair et organisation du séjour facilitée.",
  },
  {
    slug: "guinee",
    name: "Guinée",
    prep: "en",
    gen: "de",
    capital: "Conakry",
    flag: "🇬🇳",
    volInfo:
      "Vol direct Conakry – Dakar (environ 2 h 15). La liaison est assurée plusieurs fois par semaine.",
    hubExtra:
      "La Clinique DABIA reçoit des patients guinéens pour des soins planifiés à Dakar : bilan, implantologie, orthodontie et esthétique avec un accompagnement complet avant et après le séjour.",
  },
  {
    slug: "mauritanie",
    name: "Mauritanie",
    prep: "en",
    gen: "de",
    capital: "Nouakchott",
    flag: "🇲🇷",
    volInfo:
      "Vol direct Nouakchott – Dakar (environ 1 h 10) ou liaison par la route via Rosso. Le trajet aérien est le plus confortable pour un séjour de soins.",
    hubExtra:
      "Proche de Dakar, la Mauritanie est l'une des premières provenances de patients de la Clinique DABIA : soins, urgences et esthétique avec un accueil en français et en arabe.",
  },
  {
    slug: "burkina-faso",
    name: "Burkina Faso",
    prep: "au",
    gen: "du",
    capital: "Ouagadougou",
    flag: "🇧🇫",
    volInfo:
      "Vol Ouagadougou – Dakar (environ 3 h, souvent avec une escale). Prévoyez une journée de déplacement.",
    hubExtra:
      "Les patients burkinabè viennent à la Clinique DABIA à Dakar pour des soins de qualité avec devis transparent : implantologie, prothèses, orthodontie et urgences.",
  },
  {
    slug: "niger",
    name: "Niger",
    prep: "au",
    gen: "du",
    capital: "Niamey",
    flag: "🇳🇪",
    volInfo:
      "Vol Niamey – Dakar (environ 3 h 30, souvent avec une escale à Ouagadougou ou Abidjan).",
    hubExtra:
      "La Clinique DABIA accompagne les patients nigériens dans l'organisation de leur séjour de soins à Dakar : devis avant le départ, planning de soins et suivi post-traitement.",
  },
  {
    slug: "benin",
    name: "Bénin",
    prep: "au",
    gen: "du",
    capital: "Cotonou",
    flag: "🇧🇯",
    volInfo:
      "Vol Cotonou – Dakar (environ 3 h 30, souvent avec une escale à Abidjan).",
    hubExtra:
      "Les patients béninois de la Clinique DABIA bénéficient d'une prise en charge complète à Dakar : bilan, soins, implantologie et esthétique avec suivi à distance.",
  },
  {
    slug: "togo",
    name: "Togo",
    prep: "au",
    gen: "du",
    capital: "Lomé",
    flag: "🇹🇬",
    volInfo:
      "Vol Lomé – Dakar (environ 3 h 30, souvent avec une escale à Abidjan ou Accra).",
    hubExtra:
      "La Clinique DABIA reçoit des patients togolais pour des soins dentaires planifiés à Dakar : devis clair, planning adapté au séjour et suivi après le retour à Lomé.",
  },
  {
    slug: "gambie",
    name: "Gambie",
    prep: "en",
    gen: "de",
    capital: "Banjul",
    flag: "🇬🇲",
    volInfo:
      "Vol direct Banjul – Dakar (environ 50 min) ou liaison routière de 5 à 6 heures.",
    hubExtra:
      "Voisine du Sénégal, la Gambie envoie de nombreux patients à la Clinique DABIA à Dakar : accueil en français et en anglais, soins complets et urgences.",
  },
  {
    slug: "guinee-bissau",
    name: "Guinée-Bissau",
    prep: "en",
    gen: "de",
    capital: "Bissau",
    flag: "🇬🇼",
    volInfo:
      "Vol Bissau – Dakar (environ 1 h 30) ou liaison routière par Ziguinchor.",
    hubExtra:
      "La Clinique DABIA accueille les patients de Guinée-Bissau pour leurs soins dentaires à Dakar : prise en charge complète, devis transparent et accompagnement multilingue.",
  },
  {
    slug: "cap-vert",
    name: "Cap-Vert",
    prep: "au",
    gen: "du",
    capital: "Praia",
    flag: "🇨🇻",
    volInfo:
      "Vol direct Praia – Dakar (environ 1 h 20), assuré plusieurs fois par semaine.",
    hubExtra:
      "Les patients capverdiens choisissent la Clinique DABIA à Dakar pour des soins dentaires de qualité : implantologie, prothèses et esthétique avec un accueil en français, anglais et portugais.",
  },
  {
    slug: "cameroun",
    name: "Cameroun",
    prep: "au",
    gen: "du",
    capital: "Douala",
    flag: "🇨🇲",
    volInfo:
      "Vol Douala ou Yaoundé – Dakar (environ 3 h 45, souvent avec une escale).",
    hubExtra:
      "La Clinique DABIA reçoit des patients camerounais à Dakar : soins planifiés, devis avant le voyage et organisation du séjour pour les traitements longs.",
  },
  {
    slug: "gabon",
    name: "Gabon",
    prep: "au",
    gen: "du",
    capital: "Libreville",
    flag: "🇬🇦",
    volInfo:
      "Vol Libreville – Dakar (environ 4 h 15, souvent avec une escale à Abidjan ou Casablanca).",
    hubExtra:
      "Les patients gabonais viennent à la Clinique DABIA à Dakar pour des réhabilitations complètes : implants, All-on-4 et prothèses avec un planning de séjour adapté.",
  },
  {
    slug: "rdc",
    name: "République démocratique du Congo",
    nameShort: "RDC",
    prep: "en",
    gen: "de la",
    capital: "Kinshasa",
    flag: "🇨🇩",
    volInfo:
      "Vol Kinshasa – Dakar (environ 6 h 30, souvent avec une escale à Addis-Abeba ou Casablanca). Prévoyez une journée complète de déplacement.",
    hubExtra:
      "La Clinique DABIA accueille des patients de la RDC pour des soins dentaires de qualité à Dakar : planification à distance, devis détaillé et suivi post-séjour.",
  },
  {
    slug: "france",
    name: "France",
    prep: "en",
    gen: "de",
    capital: "Paris",
    flag: "🇫🇷",
    volInfo:
      "Vol direct Paris – Dakar (environ 5 h 45), assuré quotidiennement par Air France et Air Sénégal. De nombreuses autres villes françaises sont reliées en saison.",
    hubExtra:
      "La diaspora française est l'une des premières provenances de la Clinique DABIA : soins complets à des tarifs clairs, devis en FCFA avant le voyage et suivi à distance après le retour.",
  },
];

// ---------------------------------------------------------------
//  COMPÉTENCES (soins)
// ---------------------------------------------------------------
export const GEO_COMPETENCES = [
  {
    slug: "implant-dentaire",
    titre: "Implant dentaire",
    duree: "7 à 10 jours pour la pose ; la couronne définitive est posée lors d'un second séjour après 3 à 6 mois d'intégration",
    pointsForts: [
      "Remplacement d'une ou plusieurs dents manquantes par des racines artificielles en titane.",
      "Bilan préalable avec radiographie ou CBCT pour vérifier la quantité d'os.",
      "Solution fixe, durable et esthétique qui préserve l'os de la mâchoire.",
      "Devis détaillé avant le voyage et suivi post-opératoire organisé.",
    ],
    deroule: [
      "Consultation et bilan d'imagerie (radio panoramique ou CBCT 3D).",
      "Pose de l'implant sous anesthésie locale, en une séance.",
      "Période d'intégration osseuse de 3 à 6 mois.",
      "Pose de la couronne définitive lors du second séjour.",
    ],
    faqSoin: [
      {
        q: "L'implant dentaire est-il douloureux ?",
        a: "La pose se fait sous anesthésie locale : l'intervention est indolore. Des antalgiques simples suffisent généralement les jours suivants.",
      },
      {
        q: "Combien de temps dure un implant dentaire ?",
        a: "Avec une bonne hygiène et un suivi régulier, un implant dentaire peut durer 20 ans ou plus. La Clinique DABIA organise un suivi post-traitement.",
      },
    ],
  },
  {
    slug: "esthetique-dentaire",
    titre: "Esthétique dentaire",
    duree: "3 à 5 jours selon les traitements (blanchiment, facettes, alignement)",
    pointsForts: [
      "Harmonisation de la teinte, de la forme et de l'alignement des dents.",
      "Bilan esthétique personnalisé avec analyse du sourire.",
      "Approche progressive : solutions conservatrices avant les options plus invasives.",
      "Résultat naturel, adapté au visage et à l'expression de chaque patient.",
    ],
    deroule: [
      "Bilan esthétique avec photos et analyse du sourire.",
      "Choix du plan de traitement (blanchiment, facettes, alignement, restaurations).",
      "Réalisation des soins selon un calendrier adapté au séjour.",
      "Contrôle final et conseils pour maintenir le résultat.",
    ],
    faqSoin: [
      {
        q: "Comment choisir entre blanchiment et facettes ?",
        a: "Tout dépend de la teinte de départ, de la forme des dents et de vos objectifs. Le bilan esthétique permet de déterminer l'option la plus adaptée.",
      },
      {
        q: "Les résultats esthétiques sont-ils durables ?",
        a: "Oui, avec une bonne hygiène, des contrôles réguliers et des habitudes adaptées, les résultats peuvent être maintenus durablement.",
      },
    ],
  },
  {
    slug: "orthodontie",
    titre: "Orthodontie",
    duree: "une consultation de bilan puis un suivi à distance ; les contrôles peuvent être espacés pour les patients de passage",
    pointsForts: [
      "Correction des malpositions dentaires et des mâchoires.",
      "Aligneurs transparents (type Invisalign) ou brackets selon le cas.",
      "Traitement adapté aux adultes comme aux enfants.",
      "Suivi à distance possible pour les patients qui voyagent depuis leur pays.",
    ],
    deroule: [
      "Bilan orthodontique complet (photos, moulages, radiographie).",
      "Choix du dispositif : aligneurs transparents ou brackets.",
      "Mise en place du traitement et premiers contrôles.",
      "Suivi régulier, parfois espacé pour les patients internationaux.",
    ],
    faqSoin: [
      {
        q: "L'orthodontie est-elle possible à l'âge adulte ?",
        a: "Oui, l'orthodontie adulte est très courante, notamment avec les aligneurs transparents qui sont discrets et confortables.",
      },
      {
        q: "Peut-on suivre un traitement orthodontique à distance ?",
        a: "Oui, la Clinique DABIA organise des contrôles espacés et un suivi à distance pour les patients qui repartent dans leur pays en cours de traitement.",
      },
    ],
  },
  {
    slug: "facettes-dentaires",
    titre: "Facettes dentaires",
    duree: "5 à 7 jours entre la préparation et la pose définitive",
    pointsForts: [
      "Fines pellicules en céramique collées sur la face visible des dents.",
      "Correction de la couleur, de la forme et de petits défauts d'alignement.",
      "Résultat naturel et durable, personnalisé pour chaque sourire.",
      "Préparation minimale des dents naturelles.",
    ],
    deroule: [
      "Consultation esthétique et simulation du résultat.",
      "Préparation des dents et prise d'empreintes numériques.",
      "Essayage des facettes provisoires puis des facettes définitives.",
      "Collage définitif et contrôle esthétique.",
    ],
    faqSoin: [
      {
        q: "Les facettes abîment-elles les dents ?",
        a: "La préparation est minimale et réalisée dans le respect de la structure dentaire. C'est l'un des traitements esthétiques les plus conservateurs.",
      },
      {
        q: "Combien de temps durent des facettes ?",
        a: "Avec un entretien adapté, les facettes en céramique durent en moyenne 10 à 15 ans.",
      },
    ],
  },
  {
    slug: "blanchiment-dentaire",
    titre: "Blanchiment dentaire",
    duree: "1 à 2 jours (une à deux séances en clinique)",
    pointsForts: [
      "Éclaircissement visible de la teinte des dents.",
      "Gels à base de peroxyde appliqués sous contrôle professionnel.",
      "Protection des gencives et suivi de la sensibilité.",
      "Solution rapide et non invasive, idéale pendant un court séjour.",
    ],
    deroule: [
      "Examen des dents et des gencives, détermination de la teinte de départ.",
      "Séance de blanchiment en fauteuil avec protection des gencives.",
      "Application de gel reminéralisant pour limiter la sensibilité.",
      "Conseils d'entretien et contrôle de la teinte finale.",
    ],
    faqSoin: [
      {
        q: "Le blanchiment est-il dangereux pour l'émail ?",
        a: "Réalisé par un professionnel, le blanchiment respecte l'émail. Les protocoles utilisés en clinique sont contrôlés et sécurisés.",
      },
      {
        q: "Le résultat est-il immédiat ?",
        a: "Oui, l'éclaircissement est visible dès la fin de la séance et se stabilise dans les jours suivants.",
      },
    ],
  },
  {
    slug: "parodontologie",
    titre: "Parodontologie",
    duree: "2 à 4 jours pour le bilan et la phase thérapeutique initiale",
    pointsForts: [
      "Diagnostic et traitement des maladies des gencives (gingivite, parodontite).",
      "Détection des saignements, poches parodontales et mobilité.",
      "Traitement ciblé : détartrage, surfaçage, protocole d'hygiène.",
      "Programme de maintenance pour stabiliser durablement la santé gingivale.",
    ],
    deroule: [
      "Bilan parodontal complet et évaluation du risque.",
      "Phase thérapeutique pour réduire l'inflammation.",
      "Réévaluation clinique et adaptation du plan de soins.",
      "Suivi périodique pour prévenir les récidives.",
    ],
    faqSoin: [
      {
        q: "Pourquoi mes gencives saignent-elles au brossage ?",
        a: "Le saignement est souvent un signe d'inflammation gingivale. Un bilan permet d'identifier la cause et de traiter avant aggravation.",
      },
      {
        q: "La parodontite peut-elle être stabilisée ?",
        a: "Oui, dans de nombreux cas. Avec un traitement adapté et un suivi régulier, on peut contrôler l'évolution de la maladie.",
      },
    ],
  },
  {
    slug: "endodontie",
    titre: "Endodontie (traitement de canal)",
    duree: "1 à 3 jours selon la complexité du traitement",
    pointsForts: [
      "Traitement de l'intérieur de la dent (nerf et pulpe) en cas d'infection.",
      "Nettoyage, désinfection et obturation des canaux.",
      "Soulagement rapide de la douleur et sauvetage de la dent.",
      "Réalisation sous microscope ou loupes pour plus de précision.",
    ],
    deroule: [
      "Diagnostic par radiographie et tests de vitalité.",
      "Ouverture de la dent et nettoyage des canaux.",
      "Désinfection et obturation étanche des canaux.",
      "Reconstruction de la dent (couronne ou composite).",
    ],
    faqSoin: [
      {
        q: "Le traitement de canal est-il douloureux ?",
        a: "Sous anesthésie locale, le traitement est indolore. Il soulage au contraire la douleur causée par l'infection.",
      },
      {
        q: "Peut-on éviter l'extraction grâce à l'endodontie ?",
        a: "Oui, le traitement canalaire permet de conserver une dent infectée qui serait autrement condamnée à l'extraction.",
      },
    ],
  },
  {
    slug: "couronnes-dentaires",
    titre: "Couronnes dentaires",
    duree: "4 à 6 jours entre la préparation et la pose",
    pointsForts: [
      "Reconstruction d'une dent abîmée ou fragilisée.",
      "Couronnes céramique, zircone ou céramo-métallique selon le cas.",
      "Restitution de la fonction et de l'esthétique de la dent.",
      "Devis détaillé par matériau avant le début du traitement.",
    ],
    deroule: [
      "Examen et radiographie de la dent concernée.",
      "Préparation de la dent et empreintes numériques.",
      "Pose d'une couronne provisoire pendant la fabrication.",
      "Essayage et scellement de la couronne définitive.",
    ],
    faqSoin: [
      {
        q: "Quelle couronne choisir : zircone ou céramo-métallique ?",
        a: "La zircone est plus esthétique et sans métal ; la céramo-métallique est plus économique. Le choix dépend de la dent et de vos priorités, avec devis comparatif.",
      },
      {
        q: "Une couronne dure-t-elle longtemps ?",
        a: "Avec une bonne hygiène, une couronne dure en moyenne 10 à 15 ans.",
      },
    ],
  },
  {
    slug: "prothese-dentaire",
    titre: "Prothèse dentaire",
    duree: "5 à 10 jours pour une prothèse amovible ; 7 à 14 jours pour une prothèse fixe",
    pointsForts: [
      "Remplacement des dents manquantes : dentier, stellite, prothèse fixe.",
      "Restitution de la mastication et de l'esthétique du sourire.",
      "Prothèses complètes ou partielles, sur mesure.",
      "Essais progressifs pour un confort et une stabilité optimaux.",
    ],
    deroule: [
      "Bilan et prise d'empreintes numériques.",
      "Plan de traitement et devis détaillé.",
      "Essais des prothèses provisoires puis définitives.",
      "Ajustements finaux et conseils d'entretien.",
    ],
    faqSoin: [
      {
        q: "Quelle est la différence entre prothèse amovible et fixe ?",
        a: "La prothèse amovible (dentier, stellite) se retire pour l'entretien ; la prothèse fixe (couronnes, bridges, implants) est scellée ou vissée en bouche.",
      },
      {
        q: "Faut-il plusieurs séjours pour une prothèse ?",
        a: "Les essais s'étalent sur une à deux semaines. Pour les patients de passage, le planning est organisé avant le voyage afin de tenir dans un seul séjour.",
      },
    ],
  },
  {
    slug: "bridges-dentaires",
    titre: "Bridges dentaires",
    duree: "5 à 8 jours entre la préparation et la pose",
    pointsForts: [
      "Remplacement d'une ou plusieurs dents manquantes sans implant.",
      "Appui sur les dents voisines pour une solution fixe.",
      "Restitution rapide de la mastication et de l'esthétique.",
      "Alternative fiable à l'implant selon la situation clinique.",
    ],
    deroule: [
      "Examen et radiographie des dents supports.",
      "Préparation des dents piliers et empreintes.",
      "Pose d'un bridge provisoire pendant la fabrication.",
      "Scellement du bridge définitif.",
    ],
    faqSoin: [
      {
        q: "Bridge ou implant : que choisir ?",
        a: "L'implant ne touche pas aux dents voisines mais nécessite une chirurgie et un délai ; le bridge est plus rapide mais taille les dents supports. Le choix se fait lors de la consultation.",
      },
      {
        q: "Un bridge est-il confortable ?",
        a: "Oui, un bridge bien réalisé se comporte comme des dents naturelles pour manger et parler.",
      },
    ],
  },
  {
    slug: "all-on-4",
    titre: "Réhabilitation All-on-4",
    duree: "10 à 14 jours pour le premier séjour (pose des implants et de la prothèse provisoire)",
    pointsForts: [
      "Réhabilitation complète d'une mâchoire avec 4 implants.",
      "Prothèse fixe du jour ou mise en charge différée selon le cas.",
      "Solution adaptée aux patients édentés complets ou quasi complets.",
      "Planning de séjour organisé pour les patients internationaux.",
    ],
    deroule: [
      "Bilan d'imagerie 3D et planification chirurgicale.",
      "Pose des 4 implants et de la prothèse provisoire.",
      "Période de cicatrisation de quelques mois.",
      "Pose de la prothèse définitive lors du second séjour.",
    ],
    faqSoin: [
      {
        q: "All-on-4 : est-ce une solution définitive ?",
        a: "Oui, la prothèse définitive est conçue pour durer de nombreuses années, avec un entretien simple et un suivi régulier.",
      },
      {
        q: "Peut-on manger normalement avec un All-on-4 ?",
        a: "Oui, après la cicatrisation, la prothèse fixe sur implants restaure une mastication proche de celle des dents naturelles.",
      },
    ],
  },
  {
    slug: "greffe-osseuse",
    titre: "Greffe osseuse",
    duree: "3 à 7 jours pour l'intervention ; la pose des implants a lieu 4 à 6 mois plus tard",
    pointsForts: [
      "Reconstruction de l'os de la mâchoire quand il est insuffisant.",
      "Os autogène, xénogreffe ou matériau de substitution selon le cas.",
      "Condition indispensable pour une pose d'implant stable.",
      "Suivi de la cicatrisation organisé avec le patient.",
    ],
    deroule: [
      "Bilan d'imagerie 3D pour évaluer le volume osseux.",
      "Intervention de greffe sous anesthésie locale ou sédation.",
      "Période de cicatrisation de 4 à 6 mois.",
      "Pose des implants une fois l'os reconstruit.",
    ],
    faqSoin: [
      {
        q: "D'où vient l'os utilisé pour la greffe ?",
        a: "Il peut provenir du patient lui-même (prélèvement local), d'un donneur ou d'un matériau de substitution. Le choix est expliqué lors de la consultation.",
      },
      {
        q: "La greffe osseuse est-elle douloureuse ?",
        a: "L'intervention se déroule sous anesthésie ; les suites sont comparables à celles d'une extraction, avec des antalgiques simples.",
      },
    ],
  },
  {
    slug: "chirurgie-dentaire",
    titre: "Chirurgie dentaire",
    duree: "2 à 5 jours selon l'intervention (extraction, dents de sagesse, kyste…)",
    pointsForts: [
      "Extractions simples ou chirurgicales, dents de sagesse incluses.",
      "Chirurgie pré-implantaire et exérèse de lésions.",
      "Anesthésie locale ou sédation pour les patients anxieux.",
      "Suivi post-opératoire et ordonnance adaptée.",
    ],
    deroule: [
      "Consultation pré-opératoire et radiographie.",
      "Intervention sous anesthésie locale ou sédation.",
      "Prescription d'antalgiques et consignes post-opératoires.",
      "Contrôle de cicatrisation avant le retour.",
    ],
    faqSoin: [
      {
        q: "Faut-il retirer les dents de sagesse ?",
        a: "Lorsqu'elles sont incluses, douloureuses ou à risque pour les dents voisines, leur extraction est recommandée. L'indication est posée après examen et radiographie.",
      },
      {
        q: "Combien de temps dure la cicatrisation ?",
        a: "La cicatrisation initiale prend une à deux semaines ; les suites immédiates (gonflement, gêne) durent 2 à 4 jours.",
      },
    ],
  },
  {
    slug: "detartrage-airflow",
    titre: "Détartrage & Airflow",
    duree: "1 jour (une séance d'environ 45 minutes)",
    pointsForts: [
      "Élimination du tartre et des taches de surface.",
      "Technologie Airflow pour un nettoyage en profondeur.",
      "Prévention des caries, gingivites et mauvaise haleine.",
      "Séance rapide, idéale pendant un court séjour.",
    ],
    deroule: [
      "Examen des dents et des gencives.",
      "Détartrage ultrasonore des dépôts de tartre.",
      "Polissage Airflow pour lisser et éclaircir les surfaces.",
      "Conseils d'hygiène personnalisés.",
    ],
    faqSoin: [
      {
        q: "À quelle fréquence faut-il faire un détartrage ?",
        a: "Une à deux fois par an selon le terrain et les habitudes. La Clinique DABIA vous conseille un rythme personnalisé.",
      },
      {
        q: "Le détartrage est-il douloureux ?",
        a: "Non, il est généralement indolore. Une sensibilité passagère peut survenir les jours suivants.",
      },
    ],
  },
  {
    slug: "urgences-dentaires",
    titre: "Urgences dentaires",
    duree: "24 à 48 heures pour une prise en charge urgente",
    pointsForts: [
      "Prise en charge rapide de la douleur, abcès, dent cassée.",
      "Orientation par téléphone ou WhatsApp avant le déplacement.",
      "Traitement d'urgence puis plan de soins complet.",
      "Accueil des patients de passage même sans rendez-vous préalable.",
    ],
    deroule: [
      "Contact par téléphone ou WhatsApp pour évaluer l'urgence.",
      "Consultation rapide et radiographie si nécessaire.",
      "Traitement d'urgence : antalgie, soin, extraction ou drainage.",
      "Plan de soins de suivi adapté à la durée du séjour.",
    ],
    faqSoin: [
      {
        q: "Que faire en cas de rage de dents à Dakar ?",
        a: "Contactez la Clinique DABIA par téléphone ou WhatsApp : un rendez-vous urgent est organisé, souvent le jour même.",
      },
      {
        q: "Une urgence dentaire peut-elle être traitée en un seul rendez-vous ?",
        a: "Le traitement d'urgence (soulagement, drainage, soin provisoire) est réalisé dès la première consultation ; le traitement complet est planifié ensuite.",
      },
    ],
  },
  {
    slug: "pedodontie",
    titre: "Pédodontie (soins enfants)",
    duree: "1 à 3 jours pour un bilan et les soins",
    pointsForts: [
      "Soins dentaires adaptés aux enfants dès le plus jeune âge.",
      "Prévention : scellants de sillons, fluor, conseils alimentaires.",
      "Accompagnement doux pour dédramatiser les soins.",
      "Suivi de la croissance et de l'éruption dentaire.",
    ],
    deroule: [
      "Première visite en douceur et bilan de santé bucco-dentaire.",
      "Soins conservateurs des dents de lait si nécessaire.",
      "Application de fluor ou scellants de sillons.",
      "Conseils aux parents et planning de suivi.",
    ],
    faqSoin: [
      {
        q: "À quel âge emmener son enfant chez le dentiste ?",
        a: "La première visite est recommandée dès l'apparition des premières dents, vers 1 an, puis une fois par an.",
      },
      {
        q: "Comment préparer un enfant à sa première visite ?",
        a: "Parlez-en simplement, sans mots effrayants. L'équipe de la Clinique DABIA est formée à l'accueil des enfants.",
      },
    ],
  },
  {
    slug: "dentisterie-generale",
    titre: "Dentisterie générale",
    duree: "1 à 3 jours pour un bilan et les soins courants",
    pointsForts: [
      "Bilan complet : caries, couronnes, inlays-onlays, composites.",
      "Soins conservateurs pour préserver les dents naturelles.",
      "Dépistage précoce des problèmes avant qu'ils ne s'aggravent.",
      "Devis clair avant tout soin, sans surprise.",
    ],
    deroule: [
      "Bilan complet avec examen clinique et radiographies.",
      "Plan de traitement priorisé et devis détaillé.",
      "Réalisation des soins (obturations, restaurations).",
      "Contrôle final et conseils de prévention.",
    ],
    faqSoin: [
      {
        q: "Combien coûte un bilan dentaire complet ?",
        a: "Le tarif du bilan est annoncé clairement avant l'examen, et chaque soin fait l'objet d'un devis détaillé avant sa réalisation.",
      },
      {
        q: "Peut-on faire tous ses soins en un seul séjour ?",
        a: "Selon l'étendue des soins, oui. Le planning est organisé avant le voyage pour tenir dans la durée du séjour.",
      },
    ],
  },
  {
    slug: "sedation-consciente",
    titre: "Sédation consciente",
    duree: "1 à 2 jours (séance sous sédation, avec accompagnement)",
    pointsForts: [
      "Soins dentaires sans anxiété grâce à la sédation consciente.",
      "Patient détendu mais conscient et en sécurité.",
      "Adapté aux phobies dentaires et aux interventions longues.",
      "Protocole médical sécurisé avec surveillance continue.",
    ],
    deroule: [
      "Consultation préalable pour évaluer l'anxiété et les antécédents.",
      "Séance sous sédation consciente avec surveillance.",
      "Soins réalisés dans des conditions de confort optimales.",
      "Repos accompagné après la séance.",
    ],
    faqSoin: [
      {
        q: "La sédation consciente est-elle sûre ?",
        a: "Oui, elle est pratiquée par des professionnels formés avec surveillance continue des constantes vitales.",
      },
      {
        q: "Puis-je rentrer seul après une séance sous sédation ?",
        a: "Non, il est recommandé d'être accompagné. La Clinique DABIA vous oriente sur les précautions à prendre.",
      },
    ],
  },
  {
    slug: "bruxisme-gouttiere",
    titre: "Bruxisme & gouttières",
    duree: "2 à 3 jours pour la prise d'empreinte et la livraison de la gouttière",
    pointsForts: [
      "Prise en charge du grincement et du serrement des dents.",
      "Gouttières sur mesure pour protéger l'émail et l'articulation.",
      "Réduction des douleurs musculaires et des maux de tête.",
      "Gouttière fabriquée en clinique, ajustée et confortable.",
    ],
    deroule: [
      "Examen de l'usure dentaire et de l'articulation.",
      "Prise d'empreintes numériques.",
      "Fabrication de la gouttière sur mesure.",
      "Essayage, ajustements et conseils d'utilisation.",
    ],
    faqSoin: [
      {
        q: "Comment savoir si je grince des dents la nuit ?",
        a: "Des signes comme l'usure des dents, les douleurs au réveil ou les maux de tête orientent le diagnostic, confirmé lors de l'examen.",
      },
      {
        q: "La gouttière soigne-t-elle le bruxisme ?",
        a: "Elle protège les dents et l'articulation des effets du grincement. Elle ne supprime pas le bruxisme mais évite ses conséquences.",
      },
    ],
  },
  {
    slug: "ronflement-apnee",
    titre: "Ronflement & apnée du sommeil",
    duree: "2 à 3 jours pour le bilan et la gouttière d'avancée mandibulaire",
    pointsForts: [
      "Prise en charge du ronflement et des apnées légères à modérées.",
      "Gouttière d'avancée mandibulaire sur mesure.",
      "Amélioration du sommeil et de l'énergie au quotidien.",
      "Alternative ou complément à la PPC selon le cas.",
    ],
    deroule: [
      "Bilan du sommeil et examen de la bouche et des voies aériennes.",
      "Prise d'empreintes pour la gouttière d'avancée mandibulaire.",
      "Livraison et réglage progressif de la gouttière.",
      "Suivi d'efficacité avec le patient.",
    ],
    faqSoin: [
      {
        q: "La gouttière est-elle efficace contre le ronflement ?",
        a: "Oui, l'avancée mandibulaire réduit significativement le ronflement chez la plupart des patients.",
      },
      {
        q: "Faut-il d'abord consulter un médecin du sommeil ?",
        a: "Pour les apnées, un diagnostic médical est recommandé. La Clinique DABIA vous oriente si nécessaire.",
      },
    ],
  },
  {
    slug: "traumatologie-sport",
    titre: "Traumatologie dentaire du sport",
    duree: "1 à 3 jours selon le traumatisme ; protège-dents sur mesure en 2 jours",
    pointsForts: [
      "Prise en charge rapide des chocs et fractures dentaires.",
      "Protège-dents sur mesure pour les sportifs.",
      "Récupération et repositionnement des dents déplacées.",
      "Suivi de cicatrisation et reconstruction esthétique.",
    ],
    deroule: [
      "Examen du traumatisme et radiographie.",
      "Soins d'urgence : repositionnement, attelle, reconstruction.",
      "Fabrication d'un protège-dents sur mesure si nécessaire.",
      "Contrôles de suivi pour surveiller la vitalité de la dent.",
    ],
    faqSoin: [
      {
        q: "Que faire en cas de dent cassée pendant le sport ?",
        a: "Conservez le fragment dans du lait ou une solution saline, et consultez rapidement. La Clinique DABIA prend en charge les urgences traumatiques.",
      },
      {
        q: "Le protège-dents sur mesure est-il vraiment utile ?",
        a: "Oui, il absorbe les chocs et protège dents, gencives et articulations. Il est recommandé pour tous les sports de contact.",
      },
    ],
  },
  {
    slug: "radio-3d-cbct",
    titre: "Radiologie 3D (CBCT)",
    duree: "1 jour (l'examen dure quelques minutes)",
    pointsForts: [
      "Scanner 3D dentaire pour un diagnostic précis.",
      "Planification des implants et des chirurgies en toute sécurité.",
      "Visualisation des racines, nerfs et sinus.",
      "Examen rapide, à faible dose, réalisé en clinique.",
    ],
    deroule: [
      "Prescription de l'examen après la consultation.",
      "Acquisition CBCT en quelques minutes.",
      "Analyse des images par le praticien.",
      "Planification du traitement adapté.",
    ],
    faqSoin: [
      {
        q: "Le CBCT est-il obligatoire avant un implant ?",
        a: "Il est fortement recommandé pour évaluer le volume osseux et éviter les structures nerveuses. Il sécurise la pose de l'implant.",
      },
      {
        q: "Le scanner 3D est-il dangereux ?",
        a: "Non, la dose est très faible, comparable à quelques radiographies dentaires classiques.",
      },
    ],
  },
];

// ---------------------------------------------------------------
//  FILIÈRES (parcours de soins)
// ---------------------------------------------------------------
export const GEO_FILIERES = [
  {
    slug: "soins-enfants",
    titre: "Soins dentaires pour enfants",
    duree: "1 à 3 jours pour un bilan et les soins",
    pointsForts: [
      "Bilan dentaire complet dès le plus jeune âge.",
      "Prévention : scellants, fluor, hygiène et alimentation.",
      "Accompagnement doux pour des soins sans stress.",
      "Suivi de croissance adapté à chaque âge.",
    ],
    deroule: [
      "Première visite en douceur et découverte du cabinet.",
      "Bilan et soins conservateurs si nécessaire.",
      "Application de fluor ou scellants de sillons.",
      "Conseils aux parents et planning de suivi.",
    ],
    faqSoin: [
      {
        q: "À partir de quel âge consulter pour son enfant ?",
        a: "Dès l'apparition des premières dents (vers 1 an) pour un premier bilan, puis une fois par an.",
      },
      {
        q: "Les dents de lait ont-elles besoin de soins ?",
        a: "Oui, elles guident l'éruption des dents définitives. Une carie sur dent de lait doit être traitée.",
      },
    ],
  },
  {
    slug: "femmes-enceintes",
    titre: "Soins dentaires pendant la grossesse",
    duree: "1 à 2 jours pour un bilan et les soins indispensables",
    pointsForts: [
      "Bilan de santé bucco-dentaire pendant la grossesse.",
      "Soins autorisés et sécurisés au 2e trimestre.",
      "Prévention des gingivites de la grossesse.",
      "Conseils sur l'hygiène et l'alimentation.",
    ],
    deroule: [
      "Consultation avec un questionnaire de santé complet.",
      "Bilan et soins d'urgence si nécessaire.",
      "Détartrage et conseils de prévention.",
      "Plan de soins différés pour la période post-grossesse.",
    ],
    faqSoin: [
      {
        q: "Peut-on faire des soins dentaires enceinte ?",
        a: "Oui, la plupart des soins sont possibles, idéalement au 2e trimestre, avec les précautions adaptées.",
      },
      {
        q: "Les gingivites sont-elles fréquentes pendant la grossesse ?",
        a: "Oui, les changements hormonaux augmentent l'inflammation gingivale. Un détartrage et une bonne hygiène suffisent souvent.",
      },
    ],
  },
  {
    slug: "patients-diabetiques",
    titre: "Soins dentaires pour les diabétiques",
    duree: "2 à 4 jours pour le bilan et la phase initiale",
    pointsForts: [
      "Lien étroit entre diabète et santé bucco-dentaire.",
      "Dépistage et prise en charge des infections parodontales.",
      "Soins planifiés en tenant compte de l'équilibre glycémique.",
      "Programme de maintenance adapté aux patients diabétiques.",
    ],
    deroule: [
      "Questionnaire médical et évaluation de l'équilibre glycémique.",
      "Bilan parodontal et dentaire complet.",
      "Traitement des infections et phase de stabilisation.",
      "Suivi régulier et conseils personnalisés.",
    ],
    faqSoin: [
      {
        q: "Le diabète affecte-t-il les gencives ?",
        a: "Oui, le diabète augmente le risque de gingivite et de parodontite. Un contrôle régulier est essentiel.",
      },
      {
        q: "Faut-il des précautions particulières pour les soins ?",
        a: "Oui : informez le praticien de votre traitement, et privilégiez des soins courts en période de glycémie équilibrée.",
      },
    ],
  },
  {
    slug: "patients-anxieux",
    titre: "Soins dentaires sans douleur",
    duree: "1 à 2 jours selon le traitement",
    pointsForts: [
      "Prise en charge des patients anxieux et phobiques.",
      "Sédation consciente pour des soins détendus.",
      "Explications rassurantes à chaque étape.",
      "Protocole d'anesthésie douce et efficace.",
    ],
    deroule: [
      "Premier échange pour comprendre les craintes.",
      "Choix du protocole de confort (sédation, anesthésie adaptée).",
      "Réalisation des soins à votre rythme.",
      "Suivi bienveillant après la séance.",
    ],
    faqSoin: [
      {
        q: "J'ai très peur du dentiste, que faire ?",
        a: "Parlez-en dès la prise de rendez-vous : l'équipe adapte l'accueil et propose la sédation consciente si nécessaire.",
      },
      {
        q: "La sédation consciente endort-elle complètement ?",
        a: "Non, vous restez conscient et en contrôle, mais détendu et sans anxiété pendant les soins.",
      },
    ],
  },
  {
    slug: "seniors",
    titre: "Prothèses et soins pour les seniors",
    duree: "5 à 14 jours selon le type de prothèse",
    pointsForts: [
      "Solutions adaptées à l'édentement complet ou partiel.",
      "Prothèses amovibles confortables ou fixes sur implants.",
      "Réhabilitation All-on-4 pour une mâchoire complète.",
      "Accompagnement et suivi régulier après la pose.",
    ],
    deroule: [
      "Bilan complet : dents restantes, gencives, os.",
      "Choix de la solution prothétique avec devis détaillé.",
      "Réalisation et essais des prothèses.",
      "Ajustements finaux et conseils d'entretien.",
    ],
    faqSoin: [
      {
        q: "Quelle solution pour des dents qui bougent ou manquent ?",
        a: "Selon l'état des dents et de l'os, une prothèse amovible, des bridges ou des implants sont possibles. Le bilan permet de choisir.",
      },
      {
        q: "Les prothèses sur implants sont-elles réservées aux jeunes ?",
        a: "Non, l'âge n'est pas un obstacle : la décision dépend de l'état de santé général et de l'os disponible.",
      },
    ],
  },
  {
    slug: "sportifs",
    titre: "Protège-dents & dentisterie du sport",
    duree: "2 jours pour un protège-dents sur mesure",
    pointsForts: [
      "Protège-dents sur mesure pour tous les sports de contact.",
      "Prise en charge rapide des traumatismes dentaires.",
      "Prévention des fractures et déplacements dentaires.",
      "Confort de port et liberté de parole et de respiration.",
    ],
    deroule: [
      "Examen et prise d'empreintes numériques.",
      "Fabrication du protège-dents sur mesure.",
      "Essayage et ajustements.",
      "Conseils d'entretien et de remplacement.",
    ],
    faqSoin: [
      {
        q: "Quels sports nécessitent un protège-dents ?",
        a: "Boxe, rugby, basket, football, arts martiaux, lutte… tous les sports avec risque de choc.",
      },
      {
        q: "Le protège-dents du commerce suffit-il ?",
        a: "Non, un protège-dents sur mesure offre une protection et un confort bien supérieurs à ceux du commerce.",
      },
    ],
  },
  {
    slug: "expatries",
    titre: "Soins dentaires pour les expatriés",
    duree: "1 à 3 jours pour un bilan et les soins courants",
    pointsForts: [
      "Accueil en français et en anglais.",
      "Bilan complet et devis clair avant tout soin.",
      "Prise en charge des urgences rapidement.",
      "Devis et documents adaptés aux demandes d'assurance.",
    ],
    deroule: [
      "Prise de rendez-vous par téléphone, WhatsApp ou formulaire.",
      "Bilan complet avec radiographies si nécessaire.",
      "Plan de soins et devis détaillé.",
      "Soins réalisés avec un compte-rendu pour l'assurance.",
    ],
    faqSoin: [
      {
        q: "La clinique accueille-t-elle les expatriés anglophones ?",
        a: "Oui, l'équipe accueille en français et en anglais, et une page dédiée existe sur le site (dental clinic in Dakar).",
      },
      {
        q: "Fournissez-vous des documents pour l'assurance ?",
        a: "Oui, chaque soin donne lieu à un devis puis à une facture détaillée acceptée par la plupart des assurances internationales.",
      },
    ],
  },
  {
    slug: "tourisme-dentaire",
    titre: "Tourisme dentaire",
    duree: "de 1 jour (blanchiment) à 14 jours (All-on-4)",
    pointsForts: [
      "Soins dentaires de qualité à des tarifs compétitifs.",
      "Devis détaillé avant le voyage, zéro mauvaise surprise.",
      "Planning de soins organisé dans la durée du séjour.",
      "Suivi à distance après le retour dans votre pays.",
    ],
    deroule: [
      "Contact à distance : bilan décrit par téléphone ou WhatsApp.",
      "Envoi du devis et organisation du séjour.",
      "Soins réalisés selon le planning convenu.",
      "Compte-rendu et suivi post-traitement à distance.",
    ],
    faqSoin: [
      {
        q: "Comment obtenir un devis avant de venir ?",
        a: "Décrivez vos besoins par téléphone ou WhatsApp : la clinique vous transmet un devis indicatif avant votre départ.",
      },
      {
        q: "Le tourisme dentaire à Dakar est-il fiable ?",
        a: "La Clinique DABIA applique des protocoles modernes et un suivi rigoureux. Les patients internationaux sont accompagnés à chaque étape.",
      },
    ],
  },
  {
    slug: "entreprises",
    titre: "Conventions entreprises & mutuelles",
    duree: "1 jour pour une première prise en charge",
    pointsForts: [
      "Conventions avec entreprises et institutions.",
      "Facilitation des démarches IPM et mutuelles.",
      "Devis et factures détaillés pour les remboursements.",
      "Accueil prioritaire pour les salariés conventionnés.",
    ],
    deroule: [
      "Présentation de la convention ou de la carte d'assuré.",
      "Vérification de la prise en charge.",
      "Soins réalisés avec devis et facture adaptés.",
      "Suivi administratif pour le remboursement.",
    ],
    faqSoin: [
      {
        q: "Quelles IPM et mutuelles sont acceptées ?",
        a: "La plupart des IPM et mutuelles sénégalaises. La clinique vous remet les documents nécessaires à votre prise en charge.",
      },
      {
        q: "Comment établir une convention avec la clinique ?",
        a: "Contactez la clinique : un dossier de convention est établi avec l'entreprise ou l'institution.",
      },
    ],
  },
  {
    slug: "urgence-sejour",
    titre: "Urgence dentaire pendant un séjour",
    duree: "24 à 48 heures pour une prise en charge",
    pointsForts: [
      "Prise en charge rapide pendant votre séjour à Dakar.",
      "Contact téléphonique ou WhatsApp avant le déplacement.",
      "Traitement d'urgence immédiat.",
      "Plan de soins adapté si vous devez repartir.",
    ],
    deroule: [
      "Contact urgent par téléphone ou WhatsApp.",
      "Consultation rapide et radiographie si besoin.",
      "Traitement d'urgence : antalgie, soin, extraction, drainage.",
      "Ordonnance et conseils pour la suite du séjour.",
    ],
    faqSoin: [
      {
        q: "Comment joindre la clinique en urgence ?",
        a: "Par téléphone ou WhatsApp : la clinique organise un rendez-vous urgent, souvent le jour même.",
      },
      {
        q: "Je repars bientôt, un traitement complet est-il possible ?",
        a: "Selon l'urgence et le temps restant, un traitement complet ou une solution provisoire sécurisée est mis en place.",
      },
    ],
  },
  {
    slug: "ramadan",
    titre: "Soins dentaires pendant le Ramadan",
    duree: "1 à 2 jours pour les soins courants",
    pointsForts: [
      "Soins dentaires possibles pendant le jeûne.",
      "Conseils sur les soins compatibles avec le Ramadan.",
      "Organisation des rendez-vous aux horaires adaptés.",
      "Réponses claires sur les idées reçues (brossage, soins…).",
    ],
    deroule: [
      "Consultation et explication des soins compatibles avec le jeûne.",
      "Soins réalisés sans rompre le jeûne.",
      "Conseils d'hygiène bucco-dentaire pendant le Ramadan.",
      "Planification des soins plus lourds après l'Aïd si besoin.",
    ],
    faqSoin: [
      {
        q: "Le brossage des dents est-il autorisé pendant le jeûne ?",
        a: "Oui, le brossage est autorisé à condition de ne pas avaler d'eau ou de dentifrice. Des articles du blog de la clinique détaillent ces conseils.",
      },
      {
        q: "Peut-on faire un détartrage pendant le Ramadan ?",
        a: "Oui, les soins courants comme le détartrage sont compatibles avec le jeûne.",
      },
    ],
  },
  {
    slug: "design-sourire",
    titre: "Design du sourire (Hollywood smile)",
    duree: "5 à 10 jours selon le nombre de facettes",
    pointsForts: [
      "Conception numérique du sourire avant traitement.",
      "Facettes céramique ou composite selon le budget.",
      "Harmonie du sourire avec le visage et la teinte de peau.",
      "Résultat spectaculaire en un seul séjour.",
    ],
    deroule: [
      "Analyse esthétique et conception du sourire (photos, simulation).",
      "Choix des matériaux et devis détaillé.",
      "Préparation et pose des facettes.",
      "Contrôle esthétique final et conseils d'entretien.",
    ],
    faqSoin: [
      {
        q: "Combien de facettes faut-il pour un Hollywood smile ?",
        a: "Généralement 8 à 12 facettes sur les dents visibles quand on sourit. Le projet est simulé avant la décision.",
      },
      {
        q: "Le résultat est-il naturel ?",
        a: "Oui, le design du sourire vise un résultat harmonieux et personnalisé, pas un blanc artificiel.",
      },
    ],
  },
];

// ---------------------------------------------------------------
//  Helpers de remplissage
// ---------------------------------------------------------------
const fill = (template = "", vars) =>
  String(template).replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] !== undefined ? vars[key] : `{${key}}`
  );

const deCapital = (country) => {
  const c = country.capital || "";
  return /^[aeiouhAEIOUH]/.test(c) ? `d'${c}` : `de ${c}`;
};

const paysVars = (pays) => ({
  pays: pays.name,
  paysShort: pays.nameShort || pays.name,
  prepPays: pays.prep,
  genPays: pays.gen,
  capital: pays.capital,
  deCapital: deCapital(pays),
  aCapital: `à ${pays.capital}`,
  flag: pays.flag,
  volInfo: pays.volInfo || "",
  hubExtra: pays.hubExtra || "",
});

// ---------------------------------------------------------------
//  Builders
// ---------------------------------------------------------------
const buildCompetencePage = (comp, pays) => {
  const v = { ...paysVars(pays), titre: comp.titre, duree: comp.duree };
  const path = `/soins/${comp.slug}-${pays.slug}`;
  const titre = `${comp.titre} à Dakar pour les patients ${pays.gen} ${v.paysShort}`;
  return {
    path,
    family: "competence",
    pays,
    comp,
    title: `${titre} | DABIA`,
    description: `${titre} : devis clair, planning de soins adapté au séjour et suivi après le retour ${v.aCapital}.`,
    h1: `${comp.titre} à Dakar pour les patients ${pays.gen} ${pays.name}`,
    intro: fill(
      `Vous venez {prepPays} {pays} ? La Clinique Dentaire DABIA, située à Dakar (Sicap Foire, Liberté 6), accueille les patients internationaux pour {titre} : devis détaillé avant le voyage, planning de soins organisé dans la durée de votre séjour et suivi à distance après votre retour.`,
      v
    ),
    quickAnswer: fill(
      `{titre} à Dakar pour les patients {genPays} {pays} : la Clinique DABIA (Liberté 6) propose un devis clair avant le voyage, un planning de soins organisé selon la durée du séjour et un suivi après le retour {aCapital}. Contact par téléphone ou WhatsApp dès la prise de rendez-vous.`,
      v
    ),
    pointsForts: comp.pointsForts,
    deroule: comp.deroule,
    faq: [
      ...comp.faqSoin,
      {
        q: fill(
          `Pourquoi venir à Dakar pour {titre} quand on vit {prepPays} {pays} ?`,
          v
        ),
        a: fill(
          `La Clinique DABIA réunit un plateau technique moderne (imagerie 3D), des praticiens expérimentés et des tarifs clairs en FCFA. Le devis est envoyé avant le voyage et le planning de soins est organisé pour tenir dans la durée du séjour.`,
          v
        ),
      },
      {
        q: fill(
          `Comment organiser un séjour de soins depuis {capital} ?`,
          v
        ),
        a: fill(
          `Contactez la clinique par téléphone ou WhatsApp : {volInfo} Le devis et le planning de soins sont confirmés avant votre départ, et l'équipe vous accueille dès votre arrivée à Dakar.`,
          v
        ),
      },
      {
        q: fill(`Quels moyens de paiement sont acceptés ?`, v),
        a: "Les paiements s'effectuent en FCFA : espèces, carte bancaire, virement international et mobile money (Orange Money, Wave, MTN MoMo).",
      },
    ],
    relatedArticle: {
      slug: "tourisme-dentaire-dakar-planifier-sejour",
      path: "/blog/tourisme-dentaire-dakar-planifier-sejour",
      titre: "Tourisme dentaire à Dakar : planifier son séjour",
    },
  };
};

const buildFilierePage = (fil, pays) => {
  const v = { ...paysVars(pays), titre: fil.titre, duree: fil.duree };
  const path = `/parcours/${fil.slug}-${pays.slug}`;
  const titre = `${fil.titre} à Dakar pour les patients ${pays.gen} ${v.paysShort}`;
  return {
    path,
    family: "filiere",
    pays,
    fil,
    title: `${titre} | DABIA`,
    description: `${titre} : parcours organisé, devis clair et suivi après le séjour ${v.aCapital}.`,
    h1: `${fil.titre} à Dakar pour les patients ${pays.gen} ${pays.name}`,
    intro: fill(
      `Patients {genPays} {pays}, la Clinique Dentaire DABIA à Dakar (Sicap Foire, Liberté 6) organise votre parcours de {titre} : bilan à l'arrivée, devis détaillé, soins planifiés selon votre séjour et suivi après votre retour {aCapital}.`,
      v
    ),
    quickAnswer: fill(
      `{titre} à Dakar pour les patients {genPays} {pays} : la Clinique DABIA structure le parcours (bilan, soins, suivi) avec un devis clair avant le voyage. Durée indicative : {duree}. Prise de contact par téléphone ou WhatsApp.`,
      v
    ),
    pointsForts: fil.pointsForts,
    deroule: fil.deroule,
    faq: [
      ...fil.faqSoin,
      {
        q: fill(
          `Comment se passe la prise en charge des patients venant {genPays} {pays} ?`,
          v
        ),
        a: fill(
          `La prise de rendez-vous se fait par téléphone ou WhatsApp. Le devis est confirmé avant le départ, le planning de soins est calé sur votre séjour, et un compte-rendu vous est remis pour votre retour {aCapital}.`,
          v
        ),
      },
      {
        q: fill(`Combien de temps prévoir pour ce parcours à Dakar ?`, v),
        a: fill(
          `Comptez {duree}. Le planning est validé avec vous avant le voyage pour optimiser la durée du séjour depuis {capital}.`,
          v
        ),
      },
      {
        q: fill(`Peut-on être suivi après le retour {aCapital} ?`, v),
        a: fill(
          `Oui, la clinique assure un suivi à distance (téléphone, WhatsApp) après votre retour {aCapital}, et coordonne avec un praticien local si nécessaire.`,
          v
        ),
      },
    ],
    relatedArticle: {
      slug: "tourisme-dentaire-dakar-planifier-sejour",
      path: "/blog/tourisme-dentaire-dakar-planifier-sejour",
      titre: "Tourisme dentaire à Dakar : planifier son séjour",
    },
  };
};

const buildCountryHub = (pays) => {
  const v = paysVars(pays);
  const path = `/pays/${pays.slug}`;
  const titre = `Soins dentaires à Dakar pour les patients ${pays.gen} ${v.paysShort}`;
  return {
    path,
    family: "pays",
    pays,
    title: `${titre} | DABIA`,
    description: `${titre} : implants, orthodontie, prothèses, esthétique. Devis clair, planning de séjour et suivi après le retour ${v.aCapital}.`,
    h1: `Soins dentaires à Dakar pour les patients ${pays.gen} ${pays.name}`,
    intro: fill(
      `Vous habitez {prepPays} {pays} et vous envisagez des soins dentaires à Dakar ? La Clinique Dentaire DABIA (Sicap Foire, Liberté 6) vous accueille : devis détaillé avant le voyage, soins organisés selon la durée de votre séjour et suivi à distance après votre retour {aCapital}. ${pays.hubExtra}`,
      v
    ),
    quickAnswer: fill(
      `La Clinique DABIA à Dakar accueille les patients {genPays} {pays} pour tous les soins dentaires : implants, orthodontie, prothèses, esthétique et urgences. Devis clair en FCFA avant le voyage, planning adapté au séjour, suivi après le retour {aCapital}. Contact par téléphone ou WhatsApp.`,
      v
    ),
    faq: [
      {
        q: fill(`Comment venir à Dakar depuis {capital} ?`, v),
        a: fill(
          `{volInfo} La clinique vous aide à organiser votre séjour : adresse, accès et hébergement proche (Liberté 6, Sicap Foire).`,
          v
        ),
      },
      {
        q: fill(
          `Peut-on obtenir un devis avant de quitter {pays} ?`,
          v
        ),
        a: fill(
          `Oui : décrivez vos besoins par téléphone ou WhatsApp, et la clinique vous transmet un devis indicatif détaillé avant votre départ {deCapital}.`,
          v
        ),
      },
      {
        q: `Quels soins sont disponibles à la Clinique DABIA ?`,
        a: "Tous les soins dentaires : bilan, détartrage, caries, couronnes, implants, All-on-4, orthodontie, facettes, blanchiment, prothèses, urgences, pédodontie et prise en charge des patients anxieux (sédation).",
      },
      {
        q: fill(`Y a-t-il un suivi après le retour {aCapital} ?`, v),
        a: fill(
          `Oui, la clinique assure un suivi à distance après votre retour {aCapital} et peut coordonner avec un praticien local si un contrôle s'impose.`,
          v
        ),
      },
      {
        q: `Quels moyens de paiement sont acceptés ?`,
        a: "Espèces, carte bancaire, virement international et mobile money (Orange Money, Wave, MTN MoMo). Le devis est établi en FCFA.",
      },
    ],
    relatedArticle: {
      slug: "tourisme-dentaire-dakar-planifier-sejour",
      path: "/blog/tourisme-dentaire-dakar-planifier-sejour",
      titre: "Tourisme dentaire à Dakar : planifier son séjour",
    },
  };
};

// ---------------------------------------------------------------
//  API publique
// ---------------------------------------------------------------
export const GEO_TITLE_OVERRIDES = {
  // Réécritures ponctuelles de titres/définitions par page (boucle GSC hebdo).
  // Clé = chemin généré. Champs facultatifs : title, description, h1.
  // Exemple :
  // "/soins/implant-dentaire-france": { title: "…", description: "…" },
};

export function getAllGeoPages() {
  const pages = [];
  for (const pays of GEO_COUNTRIES) {
    for (const comp of GEO_COMPETENCES) {
      pages.push(buildCompetencePage(comp, pays));
    }
  }
  for (const pays of GEO_COUNTRIES) {
    for (const fil of GEO_FILIERES) {
      pages.push(buildFilierePage(fil, pays));
    }
  }
  for (const pays of GEO_COUNTRIES) {
    pages.push(buildCountryHub(pays));
  }
  // Overrides GSC (titres individuels) appliqués APRÈS construction
  for (const page of pages) {
    const override = GEO_TITLE_OVERRIDES[page.path];
    if (!override) continue;
    if (override.title) page.title = override.title;
    if (override.description) page.description = override.description;
    if (override.h1) page.h1 = override.h1;
  }
  return pages;
}

const _pageByPath = null;
let _cache = null;
export function getGeoPageByPath(path) {
  if (!_cache) _cache = new Map(getAllGeoPages().map((p) => [p.path, p]));
  return _cache.get(path) || null;
}

export function geoSeoForPath(path) {
  const page = getGeoPageByPath(path);
  if (!page) return null;
  return {
    title: page.title,
    description: page.description,
    canonicalUrl: `https://www.cliniquedentairedabia.com${page.path}`,
    canonicalPath: page.path,
    type: "website",
    priority: page.family === "pays" ? 0.8 : 0.7,
    changefreq: "weekly",
  };
}

export const GEO_PAYS_BY_SLUG = Object.fromEntries(
  GEO_COUNTRIES.map((c) => [c.slug, c])
);

export const GEO_COMPETENCES_BY_SLUG = Object.fromEntries(
  GEO_COMPETENCES.map((c) => [c.slug, c])
);

export const GEO_FILIERES_BY_SLUG = Object.fromEntries(
  GEO_FILIERES.map((c) => [c.slug, c])
);
