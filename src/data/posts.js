// src/data/posts.js

import saoAvatar from "../assets/sao.webp";

// Couvertures d’articles (tes fichiers)
import urgenceCover from "../assets/blog/urgence.webp";
import blanchimentCover from "../assets/technologie/tech-led.webp";
import implantCover from "../assets/blog/implant.webp";
import orthodontieCover from "../assets/blog/orthodontie.webp";
import gingiviteCover from "../assets/blog/gingivite.webp";
import nuitCover from "../assets/blog/malnuit.webp";
import enfantCover from "../assets/blog/enfant.webp";
import prixCover from "../assets/blog/prix.webp";
import endoCover from "../assets/blog/canal.webp"; // Traitement canalaire
import facettesCover from "../assets/blog/facette.webp"; // Facettes dentaires
import airflowCover from "../assets/blog/Airflow.webp"; // Détartrage vs AirFlow
import halitoseCover from "../assets/blog/halitose.webp"; // Mauvaise haleine
import carieCover from "../assets/blog/carie.webp";
import sagesseCover from "../assets/blog/sagesse.webp";
import protheseCover from "../assets/blog/prothese.webp";
import urgenceNuitCover from "../assets/blog/urgence-nuit.webp";
import blanchimentVsFacettesCover from "../assets/blog/facette-blanchiment.webp";
import grossesseCover from "../assets/blog/grossesse.webp";
import fluorCover from "../assets/blog/fluor.webp";
import sedationCover from "../assets/blog/sedation.webp";
import invisalignCover from "../assets/blog/invisalign.webp";
import bridgeImplantCover from "../assets/blog/bridge-vs-implant.webp";
import onlayCover from "../assets/blog/onlay.webp";
import cbctCover from "../assets/technologie/tech-cbct.webp";
import traumaEnfantCover from "../assets/blog/trauma-enfant.webp";
import diabeteCover from "../assets/blog/diabete.webp";
import detartragePrixCover from "../assets/blog/detartrage_prix.avif";
import protheseAmovibleCover from "../assets/blog/prothese_amovible.avif";
import radioPanoramiqueCover from "../assets/blog/radio_panoramique_prix.avif";
import devisDentaireCover from "../assets/blog/devis_dentaire.avif";
import soinCariePrixCover from "../assets/blog/soin_carie_prix.avif";

// Nouveaux imports pour les 10 articles ajoutés
import prixSoinsCover from "../assets/blog/prix_soins_dentaires_dakar.avif";
import urgenceActionCover from "../assets/blog/urgence_dentaire_action.avif";
// TODO: Restore correct paths after manually copying images
import choisirDentisteCover from "../assets/blog/choisir_bon_dentiste_dakar.avif";
import blanchimentEfficaceCover from "../assets/blog/blanchiment_efficace_senegal.avif";
import implantSourireCover from "../assets/blog/implant_retrouver_sourire.avif";
import remedeRageCover from "../assets/blog/remede_rage_dent.avif";
import gingiviteTraitementCover from "../assets/blog/gingivite_traitement.avif";
import orthoAdulteCover from "../assets/blog/orthodontie_adulte_choix.avif";
import santeEnfantCover from "../assets/blog/sante_dentaire_enfants_senegal.avif";
import detartragePreventifCover from "../assets/blog/detartrage_preventif.avif";

// Nouveaux imports pour les articles GSC (Jan 2026)
import guideTarifsCover from "../assets/blog/guide_tarifs_2025.avif";
import appareilPrixCover from "../assets/blog/appareil_dentaire_prix.avif";
import implantCoutCover from "../assets/blog/implant_dentaire_cout.avif";
import blanchimentEclatCover from "../assets/blog/blanchiment_dentaire_eclat.avif";
// import cliniqueDabiaCover from "../assets/blog/clinique_dabia_expertise.avif"; // Replaced by existing asset
import cliniqueDabiaCover from "../assets/dabia.avif";

// Nouveaux imports pour les articles pédiatriques existants
import scellantsCover from "../assets/blog/scellants_sillons_enfant.avif";
import premierRdvCover from "../assets/blog/dentiste_enfant_premier_rdv.avif";

// Nouveaux imports pour la stratégie SEO "Dentiste Dakar" (Jan 2026 - V2)
import protheseFixeAmovibleCover from "../assets/blog/prothese_fixe_vs_amovible.avif";
import appareilGuideCover from "../assets/blog/appareil_dentaire_guide.avif";
import cliniqueExpertCover from "../assets/blog/clinique_dabia_expert.avif";

// Nouveaux imports pour les articles Ramadan (2026)
import ramadanSoinsCover from "../assets/blog/ramadan_soins.avif";
import ramadanHaleineCover from "../assets/blog/ramadan_haleine.avif";
import ramadanBrossageCover from "../assets/blog/ramadan_brossage.avif";
import ramadanRdvCover from "../assets/blog/ramadan_rdv.avif";
import ramadanUrgenceCover from "../assets/blog/ramadan_urgence.avif";

// Nouveaux imports pour les 5 articles SEO (Avril 2026)
import couronneDentaireCover from "../assets/blog/blanchiment_dentaire_eclat.avif";
import dentsSensiblesCover from "../assets/blog/soin_carie_prix.avif";
import tartrePlaqueCover from "../assets/blog/detartrage_prix.avif";
import dentCasseeCover from "../assets/blog/urgence_dentaire_action.avif";
import parodontiteCover from "../assets/blog/gingivite_traitement.avif";

export const AUTHORS = {
  sao: {
    name: "Dr Fatoumata SAO",
    title: "Chirurgienne-dentiste en chef",
    avatar: saoAvatar,
  },
};

export const CATEGORIES = [
  "Urgences",
  "Prévention",
  "Esthétique",
  "Implantologie",
  "Orthodontie",
  "Technologie",
  "Pédiatrie",
  "Conseils",
];

export const TAGS = [
  "dentiste dakar",
  "clinique dentaire dakar",
  "urgence dentaire",
  "blanchiment des dents",
  "implant dentaire",
  "orthodontie",
  "détartrage",
  "douleur dentaire",
  "caries",
  "gingivite",
  "prix",
  "prix appareil dentaire dakar",
  "prix prothese dentaire dakar",
  "prix urgence dentaire dakar",
  "tarif dentiste dakar",
  "tarif implant dentaire dakar",
  "détartrage dentaire dakar prix",
  "cabinet dentaire dakar",
  "liberté 6",
  "parcelles assainies",
  "dentiste dakar 24/24",
  "dentiste pour enfant dakar",
  "dentiste pediatrique dakar",
  "assurance dentaire senegal",
  "mutuelle dentaire dakar",
  "ipm dentaire dakar",
  "attaya dents",
  "taches dents cafe",
  "prothèse dentaire fixe",
  "prix appareil dentaire sénégal",
  "meilleur dentiste dakar",
];

export const POSTS = [
  {
    slug: "dentiste-dakar-pres-de-moi-comment-choisir-2026",
    title:
      "Dentiste Dakar près de moi : comment choisir le bon cabinet en 2026",
    description:
      "Vous cherchez un dentiste à Dakar proche de Liberté 6, Sicap Foire, Parcelles ou VDN ? Critères concrets pour choisir rapidement un cabinet fiable.",
    date: "2026-05-06",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "cabinet dentaire dakar",
      "meilleur dentiste dakar",
      "liberté 6",
      "parcelles assainies",
    ],
    author: AUTHORS.sao,
    cover: choisirDentisteCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Quel dentiste choisir à Dakar si j’ai une urgence ?",
        a: "Choisissez un cabinet joignable rapidement, avec une adresse claire et une page dédiée aux urgences. Appelez avant de vous déplacer pour être orienté selon vos symptômes.",
      },
      {
        q: "La proximité suffit-elle pour choisir un dentiste ?",
        a: "Non. La proximité aide, mais il faut aussi regarder l’expérience, les avis récents, le plateau technique, la transparence du devis et le suivi après le soin.",
      },
      {
        q: "Où se situe la Clinique Dentaire DABIA à Dakar ?",
        a: "La clinique est située à Sicap Foire, sur les 2 voies Liberté 6, à proximité de la VDN et des Parcelles Assainies.",
      },
    ],
  },
  {
    slug: "douleur-machoire-atm-bruxisme-dakar-causes-traitements-2026",
    title:
      "Douleur de la mâchoire à Dakar : ATM, bruxisme ou dent ? Comment faire la différence",
    description:
      "Mâchoire douloureuse, craquements, maux de tête au réveil : guide complet pour identifier l’origine (ATM, bruxisme, dent) et choisir le bon traitement à Dakar.",
    date: "2026-04-19",
    category: "Conseils",
    tags: [
      "douleur machoire",
      "atm",
      "bruxisme",
      "dentiste dakar",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: cbctCover,
    pinned: true,
    readingMinutes: 11,
    content: `""`,
    faq: [
      {
        q: "Comment savoir si je grince des dents la nuit ?",
        a: "Les signes fréquents sont les douleurs matinales de mâchoire, les céphalées temporales et l’usure des dents. L’examen clinique permet de confirmer.",
      },
      {
        q: "Une douleur ATM peut-elle disparaître seule ?",
        a: "Parfois oui, mais les récidives sont fréquentes sans correction des facteurs déclenchants. Une évaluation précoce réduit le risque de chronicité.",
      },
      {
        q: "Faut-il une radio systématique en cas de douleur de mâchoire ?",
        a: "Pas toujours. L’imagerie est demandée selon l’examen clinique et la suspicion diagnostique.",
      },
    ],
  },
  {
    slug: "saignement-gencives-brossage-dakar-causes-plan-action-2026",
    title:
      "Saignement des gencives au brossage à Dakar : 9 causes fréquentes et plan d’action",
    description:
      "Vos gencives saignent quand vous vous brossez les dents ? Causes les plus fréquentes, erreurs à corriger et protocole concret sur 30 jours pour stabiliser vos gencives.",
    date: "2026-04-19",
    category: "Prévention",
    tags: [
      "gingivite",
      "saignement gencives",
      "détartrage",
      "dentiste dakar",
      "prévention",
    ],
    author: AUTHORS.sao,
    cover: gingiviteTraitementCover,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "Mes gencives saignent seulement quand je passe le fil, est-ce grave ?",
        a: "C’est souvent un signe d’inflammation locale. Une technique adaptée et un contrôle clinique permettent d’éviter l’aggravation.",
      },
      {
        q: "Le bain de bouche suffit-il à arrêter le saignement ?",
        a: "Non. Il peut aider temporairement, mais le fond du problème reste la plaque/tartre et la technique d’hygiène.",
      },
      {
        q: "À quelle fréquence faire un détartrage si mes gencives sont fragiles ?",
        a: "Selon votre risque, souvent tous les 3 à 6 mois au début, puis espacement progressif après stabilisation.",
      },
    ],
  },
  {
    slug: "couronne-ceramique-zircone-dakar-differences-prix-2026",
    title:
      "Couronne céramique ou zircone à Dakar : différences, durée de vie et prix en 2026",
    description:
      "Quelle couronne choisir à Dakar : céramique, zircone ou métal-céramique ? Comparatif clair sur l’esthétique, la solidité, les indications cliniques et le budget réel.",
    date: "2026-04-19",
    category: "Conseils",
    tags: [
      "couronne dentaire",
      "zircone",
      "prothèse fixe",
      "prix",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: protheseCover,
    readingMinutes: 10,
    content: `""`,
    faq: [
      {
        q: "La zircone est-elle toujours meilleure que la céramique ?",
        a: "Pas systématiquement. Elle est souvent plus résistante, mais le choix dépend surtout de la localisation et des contraintes occlusales.",
      },
      {
        q: "Une couronne peut-elle être posée en une seule séance ?",
        a: "Selon la technique et le cas clinique, il faut généralement au moins une séance de préparation puis une pose finale.",
      },
      {
        q: "Puis-je manger normalement avec une couronne ?",
        a: "Oui, après adaptation. Il faut cependant éviter les habitudes traumatiques (croquer objets durs, bruxisme non protégé).",
      },
    ],
  },
  {
    slug: "appareil-dentaire-enfant-dakar-age-ideal-options-cout-2026",
    title:
      "Appareil dentaire enfant à Dakar : âge idéal, options et coût réel en 2026",
    description:
      "À quel âge commencer l’orthodontie chez l’enfant à Dakar ? Appareils interceptifs, bagues, aligneurs et facteurs de coût expliqués simplement pour les parents.",
    date: "2026-04-19",
    category: "Pédiatrie",
    tags: [
      "dentiste enfant dakar",
      "orthodontie enfant",
      "appareil dentaire",
      "prix appareil dentaire dakar",
      "dentiste pediatrique dakar",
    ],
    author: AUTHORS.sao,
    cover: premierRdvCover,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "Mon enfant est jeune, faut-il déjà consulter en orthodontie ?",
        a: "Oui, un bilan précoce permet surtout de dépister. Il ne signifie pas qu’un appareil sera posé tout de suite.",
      },
      {
        q: "Les bagues sont-elles plus efficaces que les aligneurs chez l’enfant ?",
        a: "Cela dépend du cas. Certaines malocclusions répondent mieux aux bagues, d’autres peuvent être traitées avec aligneurs si l’observance est bonne.",
      },
      {
        q: "Combien de fois faut-il venir en contrôle ?",
        a: "En général toutes les 4 à 8 semaines selon la phase de traitement.",
      },
    ],
  },
  {
    slug: "implant-dentaire-fumeur-dakar-risques-conditions-succes-2026",
    title:
      "Implant dentaire chez le fumeur à Dakar : risques, conditions de succès et alternatives",
    description:
      "Peut-on poser un implant dentaire quand on fume ? Risques réels, protocole de sécurisation et solutions alternatives expliqués clairement pour les patients à Dakar.",
    date: "2026-04-19",
    category: "Implantologie",
    tags: [
      "implant dentaire",
      "fumeur",
      "chirurgie orale",
      "dentiste dakar",
      "devis dentaire",
    ],
    author: AUTHORS.sao,
    cover: implantCover,
    readingMinutes: 11,
    content: `""`,
    faq: [
      {
        q: "Dois-je arrêter totalement de fumer pour poser un implant ?",
        a: "L’arrêt complet est idéal, mais une réduction encadrée avant/après chirurgie améliore déjà le pronostic. La décision dépend de votre profil clinique.",
      },
      {
        q: "Le risque d’échec est-il immédiat ou tardif ?",
        a: "Les deux existent : échec précoce d’ostéo-intégration et complications tardives (péri-implantite). D’où l’importance du suivi.",
      },
      {
        q: "Existe-t-il une alternative moins risquée si je fume beaucoup ?",
        a: "Oui, selon le cas : bridge, solution amovible ou traitement différé après stabilisation parodontale.",
      },
    ],
  },
  {
    slug: "dentiste-dakar-prix-consultation-que-comprend-votre-premiere-visite-2026",
    title: "Dentiste à Dakar : prix consultation et ce que comprend votre 1re visite",
    description:
      "Consultation, radio, plan de traitement : ce que couvre réellement une première visite chez le dentiste à Dakar et comment éviter les mauvaises surprises.",
    date: "2026-04-13",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "prix consultation dentiste",
      "tarif dentiste dakar",
      "clinique dentaire dakar",
      "devis dentaire",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      { q: "Le prix inclut-il toujours la radio ?", a: "Pas forcément. L’imagerie est souvent facturée selon le type d’examen nécessaire." },
      { q: "Peut-on repartir avec un devis détaillé ?", a: "Oui, c’est recommandé pour comparer et planifier sereinement les soins." },
    ],
  },
  {
    slug: "urgence-dentaire-dakar-abces-ou-rage-de-dent-quoi-faire-avant-consulter-2026",
    title: "Urgence dentaire à Dakar : abcès ou rage de dent, que faire avant de consulter ?",
    description:
      "Douleur intense, gonflement, fièvre : les gestes utiles immédiatement à Dakar en cas d’urgence dentaire et les erreurs à éviter.",
    date: "2026-04-13",
    category: "Urgences",
    tags: [
      "urgence dentaire",
      "dentiste dakar 24/24",
      "abcès dentaire",
      "douleur dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: urgenceNuitCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      { q: "Une douleur qui baisse peut-elle cacher un problème grave ?", a: "Oui. L’infection peut continuer malgré une accalmie temporaire." },
      { q: "Dois-je aller aux urgences générales ?", a: "En cas de fièvre élevée, malaise ou gonflement important, oui. Sinon un cabinet dentaire urgent est prioritaire." },
    ],
  },
  {
    slug: "detartrage-dentaire-dakar-prix-frequence-et-qui-en-a-vraiment-besoin-2026",
    title: "Détartrage dentaire à Dakar : prix, fréquence et qui en a vraiment besoin",
    description:
      "Tous les 6 mois, 9 mois ou 12 mois ? Guide pratique pour choisir la bonne fréquence de détartrage à Dakar selon votre profil.",
    date: "2026-04-13",
    category: "Prévention",
    tags: [
      "détartrage",
      "détartrage dentaire dakar prix",
      "gingivite",
      "prévention",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: detartragePreventifCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      { q: "Le détartrage abîme-t-il les dents ?", a: "Non, réalisé correctement, il retire le tartre sans endommager l’émail." },
      { q: "Faut-il attendre d’avoir mal ?", a: "Non, le détartrage est un soin préventif, pas un soin de crise." },
    ],
  },
  {
    slug: "prix-implant-dentaire-dakar-comment-eviter-les-mauvaises-surprises-2026",
    title: "Prix implant dentaire à Dakar : comment éviter les mauvaises surprises",
    description:
      "Ce qui fait vraiment le coût d’un implant dentaire à Dakar : bilan 3D, chirurgie, couronne et suivi. Guide simple pour comparer les devis.",
    date: "2026-04-13",
    category: "Implantologie",
    tags: [
      "implant dentaire",
      "tarif implant dentaire dakar",
      "devis dentaire",
      "dentiste dakar",
      "cbct dakar",
    ],
    author: AUTHORS.sao,
    cover: implantCoutCover,
    readingMinutes: 9,
    content: `""`,
    faq: [
      { q: "Peut-on poser un implant à tout le monde ?", a: "Non. Un bilan osseux et médical est indispensable avant décision." },
      { q: "Combien de temps dure le traitement complet ?", a: "Selon le cas, de quelques semaines à plusieurs mois." },
    ],
  },
  {
    slug: "dentiste-enfant-dakar-quand-consulter-et-comment-eviter-les-caries-2026",
    title: "Dentiste enfant à Dakar : quand consulter et comment éviter les caries",
    description:
      "Première visite, fréquence de contrôle et gestes concrets pour réduire le risque de carie chez l’enfant à Dakar.",
    date: "2026-04-13",
    category: "Pédiatrie",
    tags: [
      "dentiste enfant dakar",
      "dentiste pediatrique dakar",
      "caries enfant",
      "prévention",
      "santé dentaire enfants",
    ],
    author: AUTHORS.sao,
    cover: enfantCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      { q: "Les dents de lait doivent-elles être soignées ?", a: "Oui, elles guident les dents définitives et évitent douleur/infection." },
      { q: "Mon enfant n’a pas mal, faut-il quand même consulter ?", a: "Oui, beaucoup de caries débutent sans douleur visible." },
    ],
  },
  {
    slug: "dentiste-dakar-prix-consultation-soins-guide-2026",
    title: "Dentiste à Dakar : prix consultation et soins (guide complet 2026)",
    description:
      "Tarifs consultation, détartrage, carie, extraction et prothèse à Dakar : un guide clair pour anticiper votre budget dentaire en 2026.",
    date: "2026-04-10",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "tarif dentiste dakar",
      "prix",
      "clinique dentaire dakar",
      "consultation dentaire",
    ],
    author: AUTHORS.sao,
    cover: guideTarifsCover,
    pinned: true,
    readingMinutes: 9,
    content: `""`,
    faq: [
      { q: "Un devis est-il obligatoire ?", a: "Oui pour les plans de soins importants, il est fortement recommandé d’avoir un devis écrit et expliqué." },
      { q: "Une urgence coûte-t-elle plus cher ?", a: "Souvent oui, car elle nécessite des actes immédiats et parfois plus complexes qu’un soin précoce." },
    ],
  },
  {
    slug: "saignement-gencives-dakar-causes-traitements-2026",
    title: "Saignement des gencives à Dakar : causes, traitement et prévention",
    description:
      "Gencives qui saignent au brossage ? Découvrez les causes fréquentes, les traitements efficaces et les habitudes qui protègent vos dents durablement.",
    date: "2026-04-10",
    category: "Prévention",
    tags: [
      "gingivite",
      "saignement gencives",
      "dentiste dakar",
      "détartrage",
      "prévention",
    ],
    author: AUTHORS.sao,
    cover: gingiviteCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      { q: "Le saignement peut-il disparaître seul ?", a: "Parfois temporairement, mais la cause persiste souvent sans traitement professionnel." },
      { q: "Le détartrage fait-il mal ?", a: "Il est généralement bien toléré. Une légère sensibilité transitoire peut apparaître." },
    ],
  },
  {
    slug: "appareil-dentaire-dakar-adulte-options-prix-2026",
    title: "Appareil dentaire à Dakar chez l’adulte : options, délais et prix 2026",
    description:
      "Bagues, aligneurs, durée de traitement, budget : tout ce qu’un adulte doit savoir avant de commencer une orthodontie à Dakar.",
    date: "2026-04-10",
    category: "Orthodontie",
    tags: [
      "orthodontie",
      "prix appareil dentaire dakar",
      "appareil dentaire",
      "dentiste dakar",
      "aligneurs",
    ],
    author: AUTHORS.sao,
    cover: appareilPrixCover,
    readingMinutes: 9,
    content: `""`,
    faq: [
      { q: "Un adulte peut-il obtenir un bon résultat ?", a: "Oui, avec un diagnostic précis et une bonne observance, les résultats sont excellents." },
      { q: "Les aligneurs sont-ils toujours possibles ?", a: "Non, certains cas complexes nécessitent des bagues classiques." },
    ],
  },
  {
    slug: "implant-dentaire-dakar-etapes-risques-reussite-2026",
    title: "Implant dentaire à Dakar : étapes, risques et taux de réussite",
    description:
      "Bilan osseux, pose, cicatrisation, prothèse finale : un guide pratique pour comprendre la pose d’implant dentaire à Dakar en 2026.",
    date: "2026-04-10",
    category: "Implantologie",
    tags: [
      "implant dentaire",
      "tarif implant dentaire dakar",
      "dentiste dakar",
      "prothèse dentaire fixe",
      "cbct dakar",
    ],
    author: AUTHORS.sao,
    cover: implantCoutCover,
    readingMinutes: 10,
    content: `""`,
    faq: [
      { q: "La pose d’implant est-elle douloureuse ?", a: "L’intervention se fait sous anesthésie locale et est généralement bien tolérée." },
      { q: "Combien de temps dure le traitement complet ?", a: "Selon les cas, de quelques semaines à plusieurs mois." },
    ],
  },
  {
    slug: "urgence-dentaire-dakar-weekend-nuit-bons-reflexes-2026",
    title: "Urgence dentaire à Dakar le week-end ou la nuit : les bons réflexes",
    description:
      "Douleur intense, dent cassée, abcès : que faire immédiatement à Dakar en cas d’urgence dentaire la nuit ou le week-end.",
    date: "2026-04-10",
    category: "Urgences",
    tags: [
      "urgence dentaire",
      "dentiste dakar 24/24",
      "douleur dentaire",
      "abcès dentaire",
      "cabinet dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: urgenceNuitCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      { q: "Dois-je aller aux urgences générales ?", a: "Si fièvre élevée, gonflement important ou malaise, oui. Sinon, un cabinet dentaire urgent est prioritaire." },
      { q: "Un abcès peut-il attendre 2-3 jours ?", a: "Non recommandé : l’infection peut progresser rapidement." },
    ],
  },
  {
    slug: "douleur-dent-sagesse-infectee-dakar-que-faire-2026",
    title: "Dent de sagesse infectée à Dakar : que faire tout de suite ?",
    description:
      "Douleur au fond de la mâchoire, gonflement, difficulté à ouvrir la bouche : les bons réflexes et le traitement adapté pour une dent de sagesse infectée à Dakar.",
    date: "2026-03-31",
    category: "Urgences",
    tags: [
      "dent de sagesse",
      "urgence dentaire",
      "dentiste dakar",
      "douleur dentaire",
      "infection dentaire",
    ],
    author: AUTHORS.sao,
    cover: urgenceActionCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      { q: "L’extraction est-elle systématique ?", a: "Non. Elle dépend de la position de la dent, de la fréquence des infections et de votre bilan clinique." },
      { q: "Puis-je attendre que la douleur passe ?", a: "Ce n’est pas recommandé. L’infection peut récidiver ou s’aggraver." },
    ],
  },
  {
    slug: "prix-blanchiment-dentaire-dakar-combien-coute-2026",
    title: "Prix du blanchiment dentaire à Dakar : combien prévoir en 2026 ?",
    description:
      "Cabinet, gouttières, retouches : ce qui fait varier le prix d’un blanchiment dentaire à Dakar et comment obtenir un résultat naturel sans abîmer l’émail.",
    date: "2026-03-31",
    category: "Esthétique",
    tags: [
      "blanchiment dentaire dakar",
      "prix",
      "esthétique dentaire",
      "dentiste dakar",
      "sourire",
    ],
    author: AUTHORS.sao,
    cover: blanchimentEclatCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      { q: "Le blanchiment fait-il mal ?", a: "Une sensibilité transitoire est possible, généralement courte et contrôlable." },
      { q: "Le résultat dure combien de temps ?", a: "Souvent 1 à 3 ans selon vos habitudes (café, thé, tabac) et l’entretien." },
    ],
  },
  {
    slug: "radio-cbct-dentaire-dakar-quand-la-faire-2026",
    title: "Radio CBCT dentaire à Dakar : dans quels cas la faire ?",
    description:
      "Implant, dent incluse, douleur persistante : comprendre quand une radio 3D CBCT est utile et pourquoi elle améliore la sécurité du traitement.",
    date: "2026-03-31",
    category: "Technologie",
    tags: [
      "cbct dakar",
      "radio 3d dentaire",
      "implant dentaire",
      "dentiste dakar",
      "diagnostic",
    ],
    author: AUTHORS.sao,
    cover: cbctCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      { q: "Le CBCT remplace-t-il la radio panoramique ?", a: "Pas toujours. La panoramique suffit dans de nombreux cas simples." },
      { q: "L’examen est-il long ?", a: "Non, il est rapide et généralement réalisé en quelques minutes." },
    ],
  },
  {
    slug: "prothese-fixe-sur-implant-dakar-avantages-2026",
    title: "Prothèse fixe sur implant à Dakar : pour qui et pourquoi ?",
    description:
      "Confort, stabilité, mastication : ce qu’il faut savoir sur la prothèse fixe sur implant à Dakar et les critères pour savoir si vous êtes un bon candidat.",
    date: "2026-03-31",
    category: "Implantologie",
    tags: [
      "prothèse fixe",
      "implant dentaire",
      "dentiste dakar",
      "prix prothese dentaire dakar",
      "confort mastication",
    ],
    author: AUTHORS.sao,
    cover: protheseFixeAmovibleCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      { q: "Peut-on poser une prothèse fixe rapidement ?", a: "Le délai dépend du cas, surtout du temps de cicatrisation implantaire." },
      { q: "L’entretien est-il compliqué ?", a: "Non, mais il doit être rigoureux avec brossage et contrôles réguliers." },
    ],
  },
  {
    slug: "carie-enfant-dakar-signes-prevention-parents-2026",
    title: "Caries chez l’enfant à Dakar : 8 signes que les parents doivent surveiller",
    description:
      "Douleur, taches, haleine, refus de manger : les signaux précoces de carie chez l’enfant et les bonnes actions pour éviter les urgences dentaires.",
    date: "2026-03-31",
    category: "Pédiatrie",
    tags: [
      "dentiste enfant dakar",
      "caries enfant",
      "prévention",
      "dentiste pediatrique dakar",
      "santé dentaire enfants",
    ],
    author: AUTHORS.sao,
    cover: santeEnfantCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      { q: "À partir de quel âge consulter ?", a: "Idéalement dès la première année ou dès l’apparition des premières dents." },
      { q: "Une dent de lait cariée doit-elle être soignée ?", a: "Oui, pour éviter douleur, infection et impact sur les dents définitives." },
    ],
  },

  {
    slug: "prix-implants-dentaires-dakar-guide-complet-2026",
    title: "Prix des implants dentaires à Dakar (2026) : guide complet avant de vous lancer",
    description:
      "Combien coûte un implant dentaire à Dakar en 2026 ? Les vrais facteurs de prix, les étapes du traitement et comment éviter les mauvaises surprises.",
    date: "2026-03-19",
    category: "Implantologie",
    tags: [
      "implant dentaire",
      "tarif implant dentaire dakar",
      "dentiste dakar",
      "devis dentaire",
      "prix",
    ],
    author: AUTHORS.sao,
    cover: implantCoutCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Un implant dentaire est-il douloureux ?",
        a: "La pose se fait sous anesthésie locale. La gêne post-opératoire est généralement modérée et bien contrôlée avec les conseils du dentiste.",
      },
      {
        q: "Combien de temps dure un implant ?",
        a: "Avec une bonne hygiène et des contrôles réguliers, un implant peut durer de nombreuses années.",
      },
    ],
  },
  {
    slug: "radio-panoramique-dentaire-dakar-pourquoi-quand-2026",
    title: "Radio panoramique dentaire à Dakar : pourquoi elle change le diagnostic",
    description:
      "À quoi sert une radio panoramique dentaire, quand la faire et quel est son intérêt avant extraction, implant ou traitement orthodontique à Dakar.",
    date: "2026-03-19",
    category: "Technologie",
    tags: [
      "radio panoramique prix",
      "dentiste dakar",
      "implant dentaire",
      "orthodontie",
      "diagnostic dentaire",
    ],
    author: AUTHORS.sao,
    cover: radioPanoramiqueCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "La radio panoramique remplace-t-elle toutes les autres radios ?",
        a: "Non. Elle offre une vue d’ensemble, mais d’autres clichés peuvent être nécessaires pour des détails précis.",
      },
      {
        q: "Faut-il faire une radio à chaque visite ?",
        a: "Non. Le dentiste la prescrit seulement quand elle est utile au diagnostic ou au suivi.",
      },
    ],
  },
  {
    slug: "parodontite-dakar-signes-alerte-traitement-precoce",
    title: "Parodontite à Dakar : 7 signes d’alerte à ne jamais ignorer",
    description:
      "Saignements, déchaussement, mauvaise haleine persistante : comment reconnaître une parodontite débutante et la traiter tôt pour sauver ses dents.",
    date: "2026-03-19",
    category: "Prévention",
    tags: [
      "gingivite",
      "parodontite",
      "dentiste dakar",
      "détartrage",
      "mauvaise haleine",
    ],
    author: AUTHORS.sao,
    cover: gingiviteTraitementCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "La parodontite se guérit-elle totalement ?",
        a: "On peut la stabiliser très efficacement avec un traitement adapté et une maintenance régulière.",
      },
      {
        q: "Le détartrage seul suffit-il ?",
        a: "Pas toujours. En cas de parodontite, un traitement plus profond et un suivi structuré sont souvent nécessaires.",
      },
    ],
  },
  {
    slug: "appareil-dentaire-adulte-dakar-options-delais-budget-2026",
    title: "Appareil dentaire adulte à Dakar : options, délais et budget réaliste",
    description:
      "Bagues métalliques, céramiques ou aligneurs transparents : quel appareil dentaire choisir à l’âge adulte à Dakar selon vos objectifs et votre budget.",
    date: "2026-03-19",
    category: "Orthodontie",
    tags: [
      "prix appareil dentaire dakar",
      "orthodontie",
      "invisalign",
      "dentiste dakar",
      "appareil dentaire guide",
    ],
    author: AUTHORS.sao,
    cover: appareilGuideCover,
    readingMinutes: 9,
    content: `""`,
    faq: [
      {
        q: "Peut-on poser un appareil à 30 ou 40 ans ?",
        a: "Oui. L’orthodontie adulte est fréquente et donne d’excellents résultats avec un bon suivi.",
      },
      {
        q: "Les aligneurs sont-ils toujours plus rapides ?",
        a: "Pas systématiquement. La durée dépend surtout de la complexité du cas et de l’assiduité du patient.",
      },
    ],
  },
  {
    slug: "facettes-dentaires-dakar-indications-limites-prix-2026",
    title: "Facettes dentaires à Dakar : indications, limites et budget à prévoir",
    description:
      "Les facettes sont-elles faites pour vous ? Découvrez les bons candidats, les alternatives et les éléments qui influencent le prix à Dakar.",
    date: "2026-03-19",
    category: "Esthétique",
    tags: [
      "facettes dentaires",
      "blanchiment des dents",
      "dentiste dakar",
      "esthétique dentaire",
      "prix",
    ],
    author: AUTHORS.sao,
    cover: blanchimentVsFacettesCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Les facettes abîment-elles les dents ?",
        a: "Posées avec la bonne indication et une technique rigoureuse, elles préservent la structure dentaire au maximum.",
      },
      {
        q: "Combien de temps durent des facettes ?",
        a: "Avec une bonne hygiène et des contrôles réguliers, elles peuvent durer de nombreuses années.",
      },
    ],
  },
  {
    slug: "detartrage-dakar-frequence-gencives-senegal-2026",
    title:
      "Détartrage chez le dentiste à Dakar : à quelle fréquence le faire pour protéger vos gencives ?",
    description:
      "Tous les 6 mois, tous les ans ou plus souvent ? Guide pratique au Sénégal pour choisir la bonne fréquence de détartrage selon votre profil et éviter la gingivite.",
    date: "2026-03-16",
    category: "Prévention",
    tags: [
      "détartrage",
      "dentiste dakar",
      "gingivite",
      "santé des gencives",
      "sénégal",
    ],
    author: AUTHORS.sao,
    cover: detartragePreventifCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Un détartrage abîme-t-il l’émail ?",
        a: "Non. Réalisé correctement par un professionnel, il retire le tartre sans endommager l’émail.",
      },
      {
        q: "Dois-je attendre d’avoir mal pour faire un détartrage ?",
        a: "Non. Le détartrage est un soin préventif : attendre la douleur signifie souvent que l’inflammation est déjà plus avancée.",
      },
    ],
  },

  {
    slug: "abces-dentaire-dakar-symptomes-traitement-urgence",
    title: "Abcès dentaire à Dakar : symptômes, risques et traitement en urgence",
    description:
      "Gonflement, douleur pulsatile, fièvre : comment reconnaître un abcès dentaire, quoi faire immédiatement à Dakar et pourquoi il faut consulter vite.",
    date: "2026-03-15",
    category: "Urgences",
    tags: [
      "abcès dentaire",
      "urgence dentaire",
      "dentiste dakar",
      "douleur dentaire",
      "gonflement joue dent",
    ],
    author: AUTHORS.sao,
    cover: urgenceActionCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Un abcès dentaire peut-il disparaître tout seul ?",
        a: "Non. La douleur peut parfois diminuer temporairement, mais l’infection persiste et peut s’aggraver sans traitement adapté.",
      },
      {
        q: "Faut-il prendre des antibiotiques automatiquement ?",
        a: "Pas systématiquement. Le dentiste décide selon votre état clinique. Le traitement local de la cause reste essentiel.",
      },
    ],
  },

  {
    slug: "dent-cassee-que-faire-dakar-guide-urgence",
    title: "Dent cassée à Dakar : que faire dans l’heure qui suit ?",
    description:
      "Choc, accident, morsure sur aliment dur : les bons réflexes en cas de dent cassée, les erreurs à éviter et les options de réparation à Dakar.",
    date: "2026-03-15",
    category: "Urgences",
    tags: [
      "dent cassée",
      "urgence dentaire",
      "dentiste dakar",
      "traumatisme dentaire",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: traumaEnfantCover,
    pinned: false,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Puis-je attendre quelques jours si je n’ai pas mal ?",
        a: "Ce n’est pas conseillé. Certaines fractures sont peu douloureuses au départ mais s’aggravent ensuite.",
      },
      {
        q: "Une dent cassée peut-elle être reconstruite esthétiquement ?",
        a: "Oui, dans beaucoup de cas. La technique dépend de l’ampleur de la fracture et de l’état de la dent.",
      },
    ],
  },

  {
    slug: "couronne-dentaire-dakar-prix-indications-guide",
    title: "Couronne dentaire à Dakar : indications, durée et budget à prévoir",
    description:
      "Quand faut-il poser une couronne dentaire ? Matériaux, durée de vie, étapes du traitement et facteurs qui influencent le prix à Dakar.",
    date: "2026-03-15",
    category: "Conseils",
    tags: [
      "couronne dentaire",
      "prix",
      "dentiste dakar",
      "prothèse fixe",
      "devis dentaire",
    ],
    author: AUTHORS.sao,
    cover: protheseCover,
    pinned: false,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Une couronne dentaire est-elle douloureuse ?",
        a: "Le soin est réalisé sous anesthésie locale. Une sensibilité légère peut apparaître quelques jours après la pose.",
      },
      {
        q: "Combien de temps dure une couronne ?",
        a: "Souvent 10 ans ou plus avec une bonne hygiène, des contrôles réguliers et l’absence de parafonctions non traitées.",
      },
    ],
  },

  {
    slug: "detartrage-dentaire-frequence-dakar-prevention",
    title: "Détartrage dentaire à Dakar : à quelle fréquence le faire ?",
    description:
      "Tous les 6 mois, tous les ans ou plus souvent ? Découvrez la bonne fréquence de détartrage selon votre profil et comment éviter gingivite et mauvaise haleine.",
    date: "2026-03-15",
    category: "Prévention",
    tags: [
      "détartrage",
      "prévention",
      "gingivite",
      "dentiste dakar",
      "mauvaise haleine",
    ],
    author: AUTHORS.sao,
    cover: detartragePreventifCover,
    pinned: false,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Un détartrage abîme-t-il l’émail ?",
        a: "Non, lorsqu’il est réalisé correctement par un professionnel. Il élimine le tartre sans détériorer l’émail.",
      },
      {
        q: "Pourquoi mes gencives saignent-elles après un détartrage ?",
        a: "Une légère sensibilité transitoire est possible. Si le saignement persiste, il faut reconsulter pour contrôle.",
      },
    ],
  },

  {
    slug: "prothese-fixe-vs-amovible-dakar-comment-choisir",
    title: "Prothèse dentaire fixe ou amovible à Dakar : comment choisir ?",
    description:
      "Bridge, couronne sur implant ou appareil amovible : comparatif simple pour choisir la meilleure prothèse selon confort, budget et durabilité.",
    date: "2026-03-15",
    category: "Conseils",
    tags: [
      "prothèse dentaire fixe",
      "prix prothese dentaire dakar",
      "dentiste dakar",
      "bridge",
      "implant dentaire",
    ],
    author: AUTHORS.sao,
    cover: protheseFixeAmovibleCover,
    pinned: false,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Une prothèse amovible est-elle forcément inconfortable ?",
        a: "Pas forcément. Une bonne adaptation et des réglages précis améliorent nettement le confort.",
      },
      {
        q: "La solution fixe est-elle toujours plus chère ?",
        a: "Souvent le coût initial est plus élevé, mais il faut comparer la durabilité et le confort sur le moyen/long terme.",
      },
    ],
  },

  {
    slug: "prix-consultation-dentiste-dakar-combien-prevoir-2026",
    title: "Prix consultation dentiste à Dakar : combien prévoir en 2026 ?",
    description:
      "Consultation simple, bilan complet, radio : ce qui influence le tarif d’une consultation dentaire à Dakar et comment éviter les mauvaises surprises.",
    date: "2026-03-15",
    category: "Conseils",
    tags: [
      "prix consultation dentiste",
      "tarif dentiste dakar",
      "dentiste dakar",
      "devis dentaire",
      "radio panoramique prix",
    ],
    author: AUTHORS.sao,
    cover: devisDentaireCover,
    pinned: false,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Le prix de consultation inclut-il toujours la radio ?",
        a: "Pas forcément. La radio est souvent facturée séparément selon le type d’examen requis.",
      },
      {
        q: "Puis-je avoir un plan de traitement chiffré après la consultation ?",
        a: "Oui, c’est recommandé pour comparer les options et planifier les étapes sereinement.",
      },
    ],
  },

  {
    slug: "prix-extraction-dentaire-dakar-simple-ou-complexe",
    title: "Extraction dentaire à Dakar : prix, déroulement et suites",
    description:
      "Extraction simple ou dent incluse : découvrez les facteurs qui influencent le prix à Dakar, le déroulement de l’acte et les conseils post-opératoires.",
    date: "2026-03-15",
    category: "Urgences",
    tags: [
      "extraction dentaire",
      "prix",
      "urgence dentaire",
      "dentiste dakar",
      "dent de sagesse",
    ],
    author: AUTHORS.sao,
    cover: sagesseCover,
    pinned: false,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Le prix est-il le même pour une dent de sagesse ?",
        a: "Non. Les dents de sagesse incluses ou semi-incluses nécessitent souvent une intervention plus complexe.",
      },
      {
        q: "Puis-je reprendre le travail le jour même ?",
        a: "Cela dépend de la complexité. Après une extraction simple, c’est parfois possible; après chirurgie, un repos est souvent conseillé.",
      },
    ],
  },

  {
    slug: "prix-devitalisation-dakar-traitement-canalaire-guide",
    title: "Dévitalisation à Dakar : prix du traitement canalaire et étapes",
    description:
      "Douleur profonde, nerf atteint : combien coûte une dévitalisation à Dakar, combien de séances prévoir et pourquoi une couronne peut être nécessaire.",
    date: "2026-03-15",
    category: "Urgences",
    tags: [
      "traitement canalaire",
      "devitalisation",
      "prix",
      "douleur dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: endoCover,
    pinned: false,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Une dévitalisation fait-elle mal ?",
        a: "Le soin est réalisé sous anesthésie locale. L’objectif est justement de supprimer la douleur liée à l’infection pulpaire.",
      },
      {
        q: "Pourquoi parle-t-on de couronne après dévitalisation ?",
        a: "Parce que la dent peut devenir plus fragile. Une couronne améliore sa résistance à long terme, surtout sur les molaires.",
      },
    ],
  },

  {
    slug: "dentiste-liberte6-parcelles-choisir-dentiste-proche",
    title: "Dentiste proche Liberté 6 / Parcelles : 6 critères pour bien choisir",
    description:
      "Vous habitez Liberté 6 ou Parcelles Assainies ? Voici comment choisir un dentiste proche selon l’accessibilité, les horaires, l’expertise et le suivi.",
    date: "2026-03-15",
    category: "Conseils",
    tags: [
      "liberté 6",
      "parcelles assainies",
      "cabinet dentaire dakar",
      "dentiste dakar",
      "urgence dentaire",
    ],
    author: AUTHORS.sao,
    cover: cliniqueDabiaCover,
    pinned: false,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "La proximité doit-elle être mon premier critère ?",
        a: "Elle est importante, surtout en urgence, mais la qualité des soins et le suivi restent prioritaires.",
      },
      {
        q: "Comment comparer deux cabinets rapidement ?",
        a: "Comparez les horaires, la clarté des devis, les services proposés et les retours patients récents.",
      },
    ],
  },

  {
    slug: "ipm-mutuelle-soins-dentaires-dakar-comment-etre-rembourse",
    title: "IPM / mutuelle et soins dentaires à Dakar : comment bien se faire rembourser",
    description:
      "Consultation, radio, prothèse : comprendre la prise en charge IPM/mutuelle à Dakar, les documents utiles et les erreurs qui bloquent le remboursement.",
    date: "2026-03-15",
    category: "Conseils",
    tags: [
      "assurance dentaire senegal",
      "mutuelle dentaire dakar",
      "ipm dentaire dakar",
      "devis dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: prixCover,
    pinned: false,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Tous les soins dentaires sont-ils remboursés ?",
        a: "Non. La couverture dépend de votre contrat, des plafonds annuels et des actes concernés.",
      },
      {
        q: "Faut-il toujours une entente préalable ?",
        a: "Pas pour tous les actes, mais elle est fréquente pour les traitements coûteux (prothèses, actes spécialisés).",
      },
    ],
  },

  {
    slug: "prix-soins-dentaires-dakar-senegal-guide-2026",
    title: "Dentiste à Dakar : prix des soins dentaires au Sénégal (guide 2026)",
    description:
      "Combien coûte un soin dentaire à Dakar en 2026 ? Découvrez les fourchettes de prix, les facteurs qui influencent le coût et comment planifier votre budget sereinement.",
    date: "2026-03-06",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "prix",
      "tarif dentiste dakar",
      "prix soins dentaires dakar",
      "devis dentaire",
    ],
    author: AUTHORS.sao,
    cover: guideTarifsCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Pourquoi deux patients paient-ils des montants différents pour un même type de soin ?",
        a: "Parce que la complexité clinique, le nombre de dents concernées et les matériaux peuvent varier d’un cas à l’autre.",
      },
      {
        q: "Peut-on obtenir un devis avant de commencer ?",
        a: "Oui, c’est recommandé. Un devis détaillé vous permet de comprendre les étapes et d’organiser votre budget.",
      },
    ],
  },

  {
    slug: "comment-choisir-dentiste-dakar-criteres-2026",
    title: "Comment choisir un bon dentiste à Dakar : 7 critères essentiels",
    description:
      "Vous cherchez un dentiste à Dakar ? Découvrez 7 critères concrets pour choisir un cabinet fiable : expertise, hygiène, avis, transparence et gestion des urgences.",
    date: "2026-03-02",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "cabinet dentaire dakar",
      "meilleur dentiste dakar",
      "conseils dentiste",
      "urgence dentaire",
    ],
    author: AUTHORS.sao,
    cover: choisirDentisteCover,
    pinned: true,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Comment savoir si un cabinet dentaire est fiable à Dakar ?",
        a: "Vérifiez les avis récents, l’hygiène observée sur place, la clarté du devis et la qualité des explications données par le praticien.",
      },
      {
        q: "Faut-il choisir le dentiste le moins cher ?",
        a: "Pas forcément. Le meilleur choix est celui qui combine qualité des soins, diagnostic précis, transparence et suivi.",
      },
    ],
  },

  {
    slug: "dentiste-urgence-nuit-weekend-dakar-2026",
    title: "Dentiste urgence nuit/week-end à Dakar : où aller et quoi faire ? (2026)",
    description:
      "Rage de dent la nuit ou le week-end à Dakar ? Les bons réflexes avant consultation, signes d’alerte et prise en charge rapide en urgence.",
    date: "2026-02-28",
    category: "Urgences",
    tags: [
      "dentiste dakar 24/24",
      "urgence dentaire dakar",
      "dentiste nuit dakar",
      "dentiste weekend dakar",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: urgenceNuitCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Puis-je attendre le lendemain si la douleur baisse ?",
        a: "Mieux vaut consulter vite : l’accalmie peut être temporaire et l’infection progresser.",
      },
      {
        q: "Le froid remplace-t-il le traitement ?",
        a: "Non, il soulage temporairement seulement. La cause doit être traitée au cabinet.",
      },
    ],
  },

  {
    slug: "invisalign-dakar-prix-adulte-aligneurs-2026",
    title: "Invisalign à Dakar : prix adulte, durée et résultats des aligneurs (2026)",
    description:
      "Combien coûte Invisalign à Dakar en 2026 ? Durée du traitement, indications et conseils pour adultes qui veulent un appareil discret.",
    date: "2026-02-28",
    category: "Orthodontie",
    tags: [
      "invisalign dakar",
      "appareil dentaire prix dakar",
      "orthodontie adulte",
      "aligneurs transparents",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: invisalignCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Invisalign est-il toujours plus cher que les bagues ?",
        a: "Souvent oui, mais le tarif dépend surtout de la complexité clinique.",
      },
      {
        q: "Est-ce adapté aux adultes actifs ?",
        a: "Oui, c’est l’un des principaux avantages des aligneurs transparents.",
      },
    ],
  },

  {
    slug: "extraction-dent-sagesse-prix-dakar-2026",
    title: "Extraction dent de sagesse à Dakar : prix, douleur et cicatrisation (2026)",
    description:
      "Combien coûte l’extraction d’une dent de sagesse à Dakar ? Types d’intervention, douleur post-opératoire et conseils pour cicatriser vite.",
    date: "2026-02-28",
    category: "Urgences",
    tags: [
      "dent de sagesse",
      "extraction dent de sagesse dakar",
      "prix extraction dentaire",
      "urgence dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: sagesseCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "L’extraction est-elle douloureuse ?",
        a: "Non pendant l’acte (anesthésie locale). Une gêne post-op est possible mais contrôlable.",
      },
      {
        q: "Combien de jours pour récupérer ?",
        a: "La plupart des patients se sentent mieux en quelques jours, selon la complexité du cas.",
      },
    ],
  },

  {
    slug: "mal-de-dent-dakar-que-faire-urgence-2026",
    title: "Mal de dent à Dakar : que faire immédiatement avant de consulter ? (2026)",
    description:
      "Douleur dentaire soudaine à Dakar ? Les bons réflexes pour soulager rapidement, éviter les erreurs fréquentes et savoir quand consulter en urgence.",
    date: "2026-02-28",
    category: "Urgences",
    tags: [
      "dentiste dakar",
      "douleur dentaire",
      "urgence dentaire",
      "dentiste dakar 24/24",
      "clinique dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: urgenceCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Dois-je attendre que la douleur passe toute seule ?",
        a: "Mieux vaut consulter rapidement : une douleur dentaire peut cacher une infection qui s’aggrave.",
      },
      {
        q: "Le froid aide-t-il vraiment ?",
        a: "Oui, temporairement. Il réduit l’inflammation locale en attendant la consultation.",
      },
    ],
  },

  {
    slug: "dentiste-enfant-dakar-premiere-visite-conseils-2026",
    title: "Dentiste enfant à Dakar : à quel âge faire la première visite ?",
    description:
      "À quel âge consulter un dentiste pour enfant à Dakar ? Guide pratique pour parents : première visite, prévention des caries et bons réflexes au quotidien.",
    date: "2026-02-28",
    category: "Pédiatrie",
    tags: [
      "dentiste pour enfant dakar",
      "dentiste pediatrique dakar",
      "caries enfant",
      "prévention",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: enfantCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Mon enfant n’a pas mal, faut-il quand même consulter ?",
        a: "Oui. Beaucoup de problèmes débutent sans douleur visible.",
      },
      {
        q: "Les dents de lait sont-elles vraiment importantes ?",
        a: "Oui, elles guident les dents définitives et influencent mastication et langage.",
      },
    ],
  },

  {
    slug: "gencives-qui-saignent-dakar-causes-solutions-2026",
    title: "Gencives qui saignent à Dakar : causes fréquentes et solutions efficaces",
    description:
      "Pourquoi les gencives saignent-elles au brossage ? Découvrez les causes les plus fréquentes, les soins recommandés et quand consulter à Dakar.",
    date: "2026-02-28",
    category: "Prévention",
    tags: [
      "gingivite",
      "parodontite",
      "détartrage",
      "dentiste dakar",
      "clinique dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: gingiviteCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Le saignement disparaît parfois, est-ce grave ?",
        a: "Même intermittent, il reste un signal d’inflammation à faire évaluer.",
      },
      {
        q: "Un simple détartrage peut-il suffire ?",
        a: "Oui dans beaucoup de cas précoces, avec une bonne hygiène quotidienne.",
      },
    ],
  },

  {
    slug: "couronne-dentaire-prix-dakar-2026-guide",
    title: "Couronne dentaire à Dakar : prix, types et durée de vie (Guide 2026)",
    description:
      "Quel est le prix d’une couronne dentaire à Dakar en 2026 ? Différences entre zircone et céramo-métal, étapes du soin et conseils budget.",
    date: "2026-02-28",
    category: "Conseils",
    tags: [
      "couronne dentaire",
      "prix",
      "dentiste dakar",
      "prothèse dentaire",
      "tarif dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: onlayCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "La zircone est-elle meilleure que la céramo-métal ?",
        a: "Elle est souvent plus esthétique, mais l’indication dépend de la dent, de l’occlusion et du budget.",
      },
      {
        q: "Peut-on connaître le prix exact sans consultation ?",
        a: "Un ordre de grandeur est possible, mais le prix exact nécessite un examen clinique.",
      },
    ],
  },

  {
    slug: "tarifs-dentaires-dakar-2026-detartrage-carie-extraction",
    title: "Tarifs dentaires à Dakar en 2026 : détartrage, carie, extraction",
    description:
      "Découvrez les prix indicatifs 2026 à Dakar pour un détartrage, un soin de carie et une extraction : fourchettes FCFA, facteurs de coût et conseils budget.",
    date: "2026-02-27",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "tarif dentiste dakar",
      "détartrage dentaire dakar prix",
      "soin carie prix",
      "extraction dentaire dakar",
      "prix",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Peut-on connaître le prix exact par téléphone ?",
        a: "Un repère est possible, mais un prix exact demande un examen clinique et parfois une radio.",
      },
      {
        q: "Le détartrage est-il toujours le même prix ?",
        a: "Non. Le tarif varie selon la quantité de tartre, l’état gingival et le temps nécessaire.",
      },
      {
        q: "Une extraction est-elle forcément chère ?",
        a: "Pas toujours. Une extraction simple reste souvent accessible ; les cas chirurgicaux demandent un devis spécifique.",
      },
    ],
  },

  {
    slug: "dentiste-mermoz-prix-consultation-soins-2026",
    title: "Dentiste à Mermoz (Dakar) : prix consultation, soins prioritaires et RDV rapide",
    description:
      "Vous cherchez un dentiste à Mermoz ? Voici les soins les plus fréquents, les prix indicatifs à Dakar et la meilleure façon d’obtenir un RDV rapidement.",
    date: "2026-02-27",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "clinique dentaire dakar",
      "prix",
      "mermoz",
      "tarif dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Quel est le prix d’une consultation dentaire à Mermoz ?",
        a: "Le tarif dépend de votre situation clinique et des examens nécessaires. L’important est d’obtenir un devis détaillé et transparent.",
      },
      {
        q: "Peut-on avoir un RDV rapidement ?",
        a: "Oui. Par appel ou WhatsApp, vous pouvez présenter votre besoin et être orienté rapidement selon l’urgence.",
      },
      {
        q: "Est-ce utile de consulter même si la douleur est supportable ?",
        a: "Oui. Une douleur légère peut cacher un problème qui évolue. Une consultation précoce évite souvent des soins plus lourds.",
      },
    ],
  },

  {
    slug: "dentiste-point-e-prix-consultation-soins-2026",
    title: "Dentiste à Point E (Dakar) : prix consultation, soins courants et prise de RDV rapide",
    description:
      "Besoin d’un dentiste à Point E ? Découvrez les soins les plus demandés, les prix indicatifs à Dakar et comment obtenir un RDV rapidement.",
    date: "2026-02-27",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "clinique dentaire dakar",
      "prix",
      "point e",
      "tarif dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Quel est le prix d’une consultation dentaire à Point E ?",
        a: "Le tarif dépend du besoin clinique et des examens éventuels. Le plus important est d’obtenir un devis détaillé et compréhensible avant traitement.",
      },
      {
        q: "Peut-on obtenir un rendez-vous rapide ?",
        a: "Oui. En appel ou WhatsApp, vous pouvez décrire votre situation et être orienté selon le degré d’urgence.",
      },
      {
        q: "Dois-je attendre que la douleur devienne forte ?",
        a: "Non. Une consultation précoce permet généralement un soin plus simple, moins coûteux et plus confortable.",
      },
    ],
  },

  {
    slug: "dentiste-parcelles-assainies-prix-consultation-soins-2026",
    title: "Dentiste aux Parcelles Assainies (Dakar) : prix consultation, soins fréquents et prise de RDV rapide",
    description:
      "Vous cherchez un dentiste aux Parcelles Assainies ? Découvrez les soins les plus demandés, les tarifs indicatifs à Dakar et comment prendre un RDV rapidement.",
    date: "2026-02-27",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "clinique dentaire dakar",
      "parcelles assainies",
      "prix",
      "tarif dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Quel est le tarif d’une consultation dentiste aux Parcelles Assainies ?",
        a: "Le tarif varie selon votre besoin réel et les examens nécessaires. Le plus important est d’avoir un diagnostic clair et un devis détaillé avant traitement.",
      },
      {
        q: "Puis-je obtenir un RDV rapidement ?",
        a: "Oui. En appel ou WhatsApp, vous pouvez décrire vos symptômes et être orienté rapidement selon le degré d’urgence.",
      },
      {
        q: "Que faire si la douleur augmente la nuit ?",
        a: "Ne tardez pas : consultez rapidement pour traiter la cause. Évitez de masquer la douleur plusieurs jours sans examen dentaire.",
      },
    ],
  },

  {
    slug: "dentiste-liberte-6-prix-consultation-soins-2026",
    title: "Dentiste à Liberté 6 (Dakar) : prix consultation, soins fréquents et comment prendre RDV rapidement",
    description:
      "Vous cherchez un dentiste à Liberté 6 ? Tarifs indicatifs à Dakar, soins les plus demandés, délais de RDV, et conseils pour éviter les mauvaises surprises.",
    date: "2026-02-26",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "clinique dentaire dakar",
      "prix",
      "liberté 6",
      "tarif dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Quel est le prix d’une consultation dentiste à Dakar ?",
        a: "Le tarif dépend du motif de consultation et des examens nécessaires. L’essentiel est d’obtenir un plan de traitement clair et un devis détaillé avant les actes importants.",
      },
      {
        q: "Peut-on prendre RDV rapidement depuis Liberté 6 ?",
        a: "Oui, en appel ou WhatsApp, vous pouvez transmettre vos symptômes et obtenir une orientation rapide selon l’urgence.",
      },
      {
        q: "Que faire en cas de douleur dentaire soudaine ?",
        a: "Consultez rapidement. Évitez l’automédication prolongée et demandez une évaluation clinique pour traiter la cause, pas seulement la douleur.",
      },
    ],
  },

  {
    slug: "detartrage-dakar-frequence-senegal-dents-saines-2026",
    title: "Détartrage à Dakar : à quelle fréquence le faire au Sénégal pour garder des dents saines ?",
    description:
      "Tous les combien faire un détartrage à Dakar ? Fréquence recommandée selon votre profil, prix indicatif, signes d’alerte et conseils pratiques au Sénégal.",
    date: "2026-02-23",
    category: "Prévention",
    tags: [
      "détartrage",
      "dentiste dakar",
      "détartrage dentaire dakar prix",
      "gingivite",
      "prévention",
    ],
    author: AUTHORS.sao,
    cover: detartragePreventifCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Le détartrage abîme-t-il les dents ?",
        a: "Non. Réalisé correctement, il n’abîme pas l’émail. Il retire le tartre qui entretient l’inflammation gingivale.",
      },
      {
        q: "Est-ce douloureux ?",
        a: "La plupart du temps non, ou avec une gêne légère. En cas de sensibilité importante, le praticien adapte le protocole pour votre confort.",
      },
      {
        q: "Puis-je attendre d’avoir mal avant de faire un détartrage ?",
        a: "Mieux vaut éviter. Le détartrage est préventif : attendre la douleur signifie souvent que l’inflammation est déjà plus avancée.",
      },
    ],
  },

  {
    slug: "urgence-dentaire-ramadan-dakar-premiers-gestes-2026",
    title: "Urgence dentaire pendant le Ramadan à Dakar : les premiers gestes qui soulagent",
    description:
      "Rage de dent, gonflement, dent cassée pendant le jeûne : que faire immédiatement à Dakar, quoi éviter, et quand consulter en urgence.",
    date: "2026-02-23",
    category: "Urgences",
    tags: [
      "urgence dentaire",
      "dentiste dakar",
      "ramadan",
      "douleur dentaire",
      "jeûne",
    ],
    author: AUTHORS.sao,
    cover: ramadanUrgenceCover,
    pinned: true,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Dois-je attendre la rupture du jeûne avant de consulter ?",
        a: "Pas forcément. En cas de douleur intense, gonflement ou fièvre, il faut consulter sans tarder pour éviter une aggravation.",
      },
      {
        q: "Le froid aide-t-il vraiment en attendant le rendez-vous ?",
        a: "Oui, appliqué sur la joue par courtes sessions, il peut diminuer douleur et inflammation de manière temporaire.",
      },
      {
        q: "Une dent cassée sans douleur est-elle une urgence ?",
        a: "Oui, il faut tout de même consulter rapidement pour prévenir infection, sensibilité ou complications ultérieures.",
      },
    ],
  },

  {
    slug: "dentiste-pendant-ramadan-dakar-soins-faq-2026",
    title: "Dentiste pendant le Ramadan à Dakar : Soins possibles, précautions et FAQ (2026)",
    description:
      "Peut-on consulter un dentiste à Dakar sans rompre son jeûne ? Soins autorisés, cas d'urgence, horaires conseillés et réponses aux questions fréquentes.",
    date: "2026-02-22",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "ramadan",
      "jeûne",
      "soins dentaires",
      "urgence dentaire",
    ],
    author: AUTHORS.sao,
    cover: ramadanSoinsCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "L'anesthésie locale annule-t-elle le jeûne ?",
        a: "Non, l'anesthésie locale n'est pas nutritive. L'important est d'éviter d'avaler volontairement liquides ou débris pendant le soin.",
      },
      {
        q: "Dois-je reporter une rage de dent après Ramadan ?",
        a: "Non. Une urgence dentaire doit être traitée rapidement pour éviter infection, abcès ou aggravation de la douleur.",
      },
      {
        q: "Quel est le meilleur moment pour un rendez-vous ?",
        a: "Pour beaucoup de patients, le matin ou juste avant/juste après le ftour est le plus confortable. La clinique peut proposer un créneau adapté.",
      },
    ],
  },

  {
    slug: "dentiste-plateau-dakar-prix-rdv-local",
    title: "Dentiste à Dakar Plateau : prix, accès rapide et RDV local",
    description:
      "Vous êtes au Plateau (Dakar) et cherchez un dentiste proche ? Guide local avec repères de prix, accès, urgences et prise de rendez-vous rapide.",
    date: "2026-02-20",
    category: "Conseils",
    tags: [
      "dentiste plateau dakar",
      "cabinet dentaire plateau",
      "dentiste dakar",
      "urgence dentaire dakar",
      "tarif dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Je suis au Plateau, puis-je avoir un RDV en fin de journée ?",
        a: "Oui, des créneaux sont proposés selon disponibilité. Le plus simple est de réserver via /rendez-vous.",
      },
      {
        q: "En cas de rage de dent au bureau, que faire ?",
        a: "Contactez la clinique rapidement pour un créneau prioritaire et consultez la page urgence dentaire pour les premiers gestes.",
      },
    ],
  },

  {
    slug: "ramadan-dentiste-dakar-jeune-horaires-2026",
    title: "Ramadan et Dentiste à Dakar : Horaires, Jeûne et Soins (2026)",
    description:
      "Peut-on aller chez le dentiste pendant le Ramadan au Sénégal ? Horaires recommandés, soins possibles en jeûnant, et quand consulter en urgence.",
    date: "2026-02-18",
    category: "Conseils",
    tags: [
      "ramadan",
      "dentiste dakar",
      "jeûne",
      "soins dentaires",
      "urgence dentaire",
    ],
    author: AUTHORS.sao,
    cover: ramadanRdvCover,
    pinned: true,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Une consultation dentaire annule-t-elle le jeûne ?",
        a: "La consultation en elle-même n'annule pas le jeûne. Le praticien adapte les gestes et vous explique les précautions.",
      },
      {
        q: "Dois-je reporter une urgence dentaire après Ramadan ?",
        a: "Non. Une urgence dentaire doit être traitée rapidement pour éviter les complications.",
      },
    ],
  },
  {
    slug: "dentiste-dakar-prix-consultation-2026",
    title: "Prix consultation dentiste à Dakar (2026) : guide clair + conseils budget",
    description:
      "Prix consultation dentiste à Dakar : repères 2026 pour détartrage, carie, urgence et devis. Comprendre les tarifs et réserver le bon soin au bon moment.",
    date: "2026-02-18",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "tarif dentiste dakar",
      "prix consultation dentiste dakar",
      "clinique dentaire dakar",
      "détartrage dentaire dakar prix",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Combien coûte une consultation dentiste à Dakar ?",
        a: "Le tarif dépend du bilan nécessaire. Un devis détaillé est remis après examen clinique.",
      },
      {
        q: "Peut-on obtenir un plan de soins progressif ?",
        a: "Oui, selon le diagnostic, les soins peuvent être phasés pour mieux gérer le budget.",
      },
    ],
  },
  {
    slug: "clinique-dentaire-dakar-comment-choisir",
    title: "Clinique Dentaire Dakar : Comment choisir la bonne clinique ?",
    description:
      "Découvrez les critères concrets pour choisir une clinique dentaire à Dakar: expertise, technologie, hygiène, clarté des devis et qualité du suivi.",
    date: "2026-02-18",
    category: "Conseils",
    tags: [
      "clinique dentaire dakar",
      "dentiste dakar",
      "meilleur dentiste dakar",
      "cabinet dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: cliniqueExpertCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Comment savoir si une clinique est fiable ?",
        a: "Regardez la qualité du diagnostic, la stérilisation, la transparence du devis et le suivi proposé.",
      },
      {
        q: "Faut-il choisir la clinique la moins chère ?",
        a: "Pas forcément. Le coût initial peut être plus bas, mais la durabilité et la qualité du traitement comptent davantage.",
      },
    ],
  },
  {
    slug: "urgence-dentiste-dakar-24h-que-faire",
    title: "Urgence Dentiste Dakar 24h : Que faire immédiatement ?",
    description:
      "Rage de dent, gonflement, dent cassée: les bons réflexes avant de consulter en urgence à Dakar, et les signes qui imposent une prise en charge rapide.",
    date: "2026-02-18",
    category: "Urgences",
    tags: [
      "urgence dentiste 24h",
      "urgence dentaire 24 24 dakar",
      "dentiste dakar",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: urgenceActionCover,
    pinned: true,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Une rage de dent est-elle une urgence ?",
        a: "Oui, surtout si la douleur est intense ou persistante. Une prise en charge précoce limite les complications.",
      },
      {
        q: "Que faire si la douleur commence la nuit ?",
        a: "Soulagez la douleur avec les mesures adaptées et contactez la clinique dès l'ouverture pour un rendez-vous prioritaire.",
      },
    ],
  },
  {
    slug: "prothese-dentaire-fixe-prix-senegal-amovible",
    title: "Prothèse Dentaire Fixe vs Amovible au Sénégal : Prix et Solutions",
    description:
      "Comprendre la différence entre couronne, bridge et dentier. Quel budget prévoir au Sénégal ? Avantages et inconvénients pour remplacer vos dents manquantes.",
    date: "2026-01-30",
    category: "Conseils",
    tags: [
      "prothèse dentaire fixe prix sénégal",
      "prix prothese dentaire dakar",
      "dentier prix dakar",
      "fausse dent prix",
      "clinique dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: protheseFixeAmovibleCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Quelle est la prothèse la moins chère ?",
        a: "La prothèse amovible en résine est la solution la plus économique au départ.",
      },
      {
        q: "Est-ce que la prothèse fixe fait mal ?",
        a: "Non, une fois posée, elle se fait oublier comme une vraie dent. La pose se fait sous anesthésie et est indolore.",
      },
    ],
  },
  {
    slug: "appareil-dentaire-prix-dakar-guide-complet",
    title: "Appareil Dentaire Prix Dakar : Le Guide Complet (2026)",
    description:
      "Quel est le prix d'un appareil dentaire à Dakar ? Bagues, aligneurs ou dentiers : tout savoir sur les tarifs et les options d'orthodontie et de prothèse.",
    date: "2026-01-29",
    category: "Orthodontie",
    tags: [
      "appareil dentaire prix dakar",
      "prix appareil dentaire au sénégal",
      "appareil dentaire",
      "orthodontie dakar",
      "dentier",
    ],
    author: AUTHORS.sao,
    cover: appareilGuideCover,
    pinned: true,
    readingMinutes: 10,
    content: `""`,
    faq: [
      {
        q: "Est-ce remboursé par les assurances ?",
        a: "Les appareils de prothèse (dentiers) sont souvent partiellement couverts. L'orthodontie est parfois couverte pour les enfants, rarement pour les adultes.",
      },
      {
        q: "Peut-on payer petit à petit ?",
        a: "Pour l'orthodontie, oui, le paiement est toujours échelonné sur la durée du traitement (par mois ou trimestre).",
      },
    ],
  },
  {
    slug: "clinique-dentaire-dabia-dakar-expert-tarifs",
    title:
      "Clinique Dentaire DABIA : Votre Expert Dentiste à Dakar (Avis & Tarifs)",
    description:
      "Pourquoi choisir la Clinique DABIA pour vos soins ? Expertise, technologies modernes et transparence des tarifs. Découvrez l'avis de nos patients.",
    date: "2026-01-28",
    category: "Conseils",
    tags: [
      "clinique dabia",
      "clinique dentaire dabia",
      "dentiste dakar",
      "tarif dentiste dakar",
      "avis dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: cliniqueExpertCover,
    pinned: true,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Où se trouve la clinique ?",
        a: "Nous sommes situés dans une zone calme et accessible, avec un stationnement facile. Appelez-nous pour le plan exact.",
      },
      {
        q: "Acceptez-vous les nouveaux patients ?",
        a: "Oui, nous sommes ravis d'accueillir de nouveaux sourires dans la famille DABIA.",
      },
    ],
  },
  {
    slug: "guide-tarifs-dentiste-dakar-2025",
    title:
      "Guide Complet des Tarifs Dentaires à Dakar (2026) – Prix Mis à Jour et Conseils",
    description:
      "Découvrez les tarifs réels pour un détartrage, une extraction ou une consultation à Dakar. Notre guide mis à jour vous aide à planifier votre budget santé et à économiser.",
    date: "2026-01-21",
    category: "Conseils",
    tags: [
      "tarif dentiste dakar",
      "détartrage dentaire dakar prix",
      "prix consultation dentiste",
      "soins dentaires pas cher",
      "clinique dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: guideTarifsCover,
    pinned: true,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Le devis est-il payant ?",
        a: "Le devis est généralement établi lors de la consultation de bilan. La consultation est payante, mais le devis en lui-même est un document administratif remis gratuitement à l'issue de l'examen.",
      },
      {
        q: "Acceptez-vous les prises en charge IPM ?",
        a: "Nous travaillons avec plusieurs IPM et assurances. Merci de nous contacter avec le nom de votre IPM pour vérifier votre couverture.",
      },
    ],
  },
  {
    slug: "prix-appareil-dentaire-dakar-senegal",
    title:
      "Prix des Appareils Dentaires à Dakar : Tout Savoir (Bagues vs Invisalign)",
    description:
      "Quel budget pour un appareil dentaire à Dakar ? Comparatif des prix entre bagues métalliques, céramiques et aligneurs invisibles au Sénégal.",
    date: "2026-01-21",
    category: "Orthodontie",
    tags: [
      "appareil dentaire prix dakar",
      "prix appareil dentaire au sénégal",
      "orthodontie dakar",
      "bagues dentaires prix",
      "invisalign dakar tarif",
    ],
    author: AUTHORS.sao,
    cover: appareilPrixCover,
    pinned: true,
    readingMinutes: 10,
    content: `""`,
    faq: [
      {
        q: "Combien de temps dure le traitement ?",
        a: "En moyenne entre 12 et 24 mois selon la complexité du décalage dentaire.",
      },
      {
        q: "Est-ce douloureux ?",
        a: "On ressent une tension pendant 2-3 jours après chaque réglage, mais ce n'est pas une douleur aiguë. C'est le signe que les dents bougent !",
      },
    ],
  },
  {
    slug: "tarif-implant-dentaire-dakar-deroulement",
    title: "Implants Dentaires à Dakar : Coût, Déroulement et Avantages",
    description:
      "Tout sur l'implantologie à Dakar : tarif moyen d'un implant dentaire complet, étapes de la pose et pourquoi c'est la meilleure solution pour remplacer une dent.",
    date: "2026-01-20",
    category: "Implantologie",
    tags: [
      "tarif implant dentaire à dakar",
      "implant dentaire dakar",
      "prix fausse dent dakar",
      "chirurgie dentaire dakar",
      "clinique dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: implantCoutCover,
    pinned: true,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "Est-ce que ça fait mal ?",
        a: "C'est l'une des questions les plus fréquentes ! Étonnamment, les suites opératoires sont souvent moins douloureuses qu'une extraction dentaire. Avec des antalgiques simples, cela passe très bien.",
      },
      {
        q: "Quelle est la durée de vie d'un implant ?",
        a: "Avec une bonne hygiène (brossage + détartrage annuel), un implant peut durer toute la vie.",
      },
    ],
  },
  {
    slug: "blanchiment-dentaire-dakar-prix-efficacite",
    title: "Blanchiment Dentaire à Dakar : Retrouvez l'Éclat de votre Sourire",
    description:
      "Le blanchiment dentaire fait fureur à Dakar. Découvrez les techniques sûres au cabinet vs les risques des produits maison. Prix et résultats.",
    date: "2026-01-20",
    category: "Esthétique",
    tags: [
      "blanchiment dentaire dakar",
      "dents blanches sénégal",
      "prix blanchiment dentaire",
      "esthétique dentaire dakar",
      "clinique dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: blanchimentEclatCover,
    pinned: true,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Est-ce que ça abîme l'émail ?",
        a: "Non, si le protocole est respecté par un professionnel. Il peut y avoir une sensibilité passagère au froid pendant 24h, mais l'émail reste intact.",
      },
      {
        q: "Combien de temps ça dure ?",
        a: "Les résultats durent entre 1 et 3 ans selon votre consommation de café/thé/tabac.",
      },
    ],
  },
  {
    slug: "clinique-dentaire-dabia-dakar-avis",
    title:
      "Pourquoi choisir la Clinique Dentaire DABIA pour vos soins à Dakar ?",
    description:
      "Expertise, plateau technique moderne et approche humaine. Découvrez pourquoi la Clinique DABIA est recommandée pour vos soins dentaires à Dakar.",
    date: "2026-01-19",
    category: "Conseils",
    tags: [
      "clinique dentaire dabia",
      "clinique dabia",
      "meilleur dentiste dakar",
      "avis dentiste dakar",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: cliniqueDabiaCover,
    pinned: true,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Où êtes-vous situés ?",
        a: "Nous sommes situés à Dakar, facilement accessibles. Contactez-nous pour l'adresse exacte et le plan d'accès.",
      },
      {
        q: "Prenez-vous les urgences ?",
        a: "Oui, nous réservons des créneaux quotidiens pour soulager les douleurs aiguës (rage de dent, abcès, traumatisme).",
      },
    ],
  },
  {
    slug: "dentiste-dakar-liberte-6-parcelles-sicap-foire",
    title:
      "Dentiste à Dakar (Liberté 6, Parcelles, Sicap Foire) : horaires, urgences, équipements",
    description:
      "Trouver un cabinet dentaire à Liberté 6, Parcelles Assainies ou Sicap Foire : urgences, implants, blanchiment, orthodontie et pédiatrie à la Clinique DABIA.",
    date: "2026-01-18",
    category: "Conseils",
    tags: [
      "dentiste dakar",
      "cabinet dentaire dakar",
      "dentiste liberte 6",
      "dentiste parcelles assainies",
      "clinique dentaire sicap foire",
    ],
    author: AUTHORS.sao,
    cover: prixCover,
    pinned: true,
    readingMinutes: 14,
    content: `""`,
    faq: [
      {
        q: "Le cabinet de Liberté 6 prend-il les urgences dentaires ?",
        a: "Oui, des créneaux d’urgence sont réservés pour la douleur, l’abcès ou la dent cassée. Appelez avant de venir pour être orienté sur le prochain horaire disponible.",
      },
      {
        q: "Puis-je obtenir un devis pour un implant ou un blanchiment ?",
        a: "Un devis personnalisé est remis après examen clinique, photos et imagerie adaptée (panoramique ou CBCT si nécessaire).",
      },
      {
        q: "La clinique est-elle accessible depuis les Parcelles Assainies ?",
        a: "Oui, l’accès est direct via la VDN ou les axes secondaires ; le quartier **Liberté 6 / Sicap Foire** est central pour les patients venant des Parcelles.",
      },
    ],
  },

  {
    slug: "urgence-dentiste-dakar-24-24-nuit-weekend",
    title: "Urgence dentaire à Dakar la nuit ou le week-end : que faire ?",
    description:
      "Douleur pulsatile, gonflement ou dent cassée : les gestes immédiats, les signes d’alerte et comment contacter la Clinique DABIA dès que possible.",
    date: "2026-01-15",
    category: "Urgences",
    tags: [
      "urgence dentaire dakar",
      "urgence dentaire nuit dakar",
      "dentiste nuit dakar",
      "dentiste weekend dakar",
    ],
    author: AUTHORS.sao,
    cover: urgenceNuitCover,
    pinned: true,
    readingMinutes: 13,
    content: `""`,
    faq: [
      {
        q: "Puis-je venir sans rendez-vous pour une douleur aiguë ?",
        a: "Appelez d’abord : cela permet de réserver le prochain créneau d’urgence, de préparer l’équipe et de gagner du temps sur place.",
      },
      {
        q: "Que faire si j’ai un vol tôt et une douleur la veille ?",
        a: "Contactez la clinique dès les premiers symptômes : un geste de soulagement (drainage, ouverture de la dent, pansement calmant) est priorisé pour voyager sereinement.",
      },
      {
        q: "Les urgences du week-end sont-elles plus chères ?",
        a: "Selon les horaires, des honoraires spécifiques peuvent s’appliquer. Ils sont annoncés avant l’acte avec un devis clair.",
      },
    ],
  },

  {
    slug: "dentiste-pas-cher-dakar-tarifs-devis",
    title:
      "Dentiste pas cher à Dakar : tarifs, devis et plan de traitement en plusieurs étapes",
    description:
      "Contrôle, détartrage, caries, implant ou facettes : comment obtenir un plan de soins clair, prioriser et mieux gérer le budget chez un dentiste à Dakar.",
    date: "2026-01-12",
    category: "Conseils",
    tags: [
      "dentiste pas cher dakar",
      "tarif dentiste dakar",
      "prix dentiste senegal",
      "cabinet dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: prixCover,
    pinned: true,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "Peut-on obtenir un devis sans se déplacer ?",
        a: "Un chiffrage fiable nécessite un examen. Des photos peuvent aider à préparer la visite, mais le devis final se fait après un contrôle clinique et radiographique.",
      },
      {
        q: "Les IPM et mutuelles prennent-elles en charge les soins ?",
        a: "Souvent oui pour les soins courants ; prothèses/implants dépendent du contrat. Un devis signé est fourni pour vos démarches.",
      },
      {
        q: "Existe-t-il des options plus économiques que l’implant ?",
        a: "Selon le cas, un **bridge** ou une **prothèse amovible** peut être proposé. L’indication dépend du volume osseux, des dents voisines et de votre projet.",
      },
    ],
  },

  {
    slug: "dentiste-expatries-dakar-urgences-assurances",
    title: "Dentiste à Dakar pour expatriés : urgences, devis et assurances",
    description:
      "Consultation pour expatriés et voyageurs à Dakar, devis pour assurances internationales, urgences dentaires et soins esthétiques.",
    date: "2026-01-09",
    category: "Conseils",
    tags: [
      "dentiste expatrie dakar",
      "dentiste voyageur dakar",
      "cabinet dentaire dakar",
      "assurance internationale dentaire",
    ],
    author: AUTHORS.sao,
    cover: implantCover,
    readingMinutes: 11,
    content: `""`,
    faq: [
      {
        q: "Acceptez-vous les assurances internationales ?",
        a: "Nous remettons factures et rapports détaillés pour vos demandes de remboursement. Les modalités de prise en charge directe dépendent du contrat.",
      },
      {
        q: "Puis-je finaliser un traitement en deux séjours ?",
        a: "Oui, c’est fréquent : une phase de soins ou de chirurgie, puis la prothèse/esthétique lors du séjour suivant.",
      },
      {
        q: "Faut-il un CBCT pour un implant ?",
        a: "Un bilan 3D (CBCT) est souvent recommandé pour planifier l’implantologie en toute sécurité, surtout si le timing est serré.",
      },
    ],
  },

  {
    slug: "bilan-dentaire-complet-dakar-radio-3d-scanner",
    title:
      "Bilan dentaire complet à Dakar : radio 3D, scanner intra-oral et plan personnalisé",
    description:
      "Check-up complet avec panoramique ou CBCT, photos, scanner intra-oral et plan de traitement détaillé à la Clinique DABIA à Dakar.",
    date: "2026-01-06",
    category: "Technologie",
    tags: [
      "bilan dentaire dakar",
      "cbct dakar",
      "scanner intraoral dakar",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: cbctCover,
    readingMinutes: 13,
    content: `""`,
    faq: [
      {
        q: "Combien de temps dure un check-up complet ?",
        a: "Prévoyez environ 45 à 60 minutes selon le nombre d’examens (photos, radios, scanner intra-oral).",
      },
      {
        q: "Le CBCT est-il systématique ?",
        a: "Non, il est réservé aux situations où une image 3D apporte une réelle valeur (implant, dent de sagesse incluse, endodontie complexe).",
      },
      {
        q: "Repart-on avec un devis ?",
        a: "Oui, un **plan de traitement** et un **devis** sont remis après l’examen pour prioriser les soins et anticiper le budget.",
      },
    ],
  },

  {
    slug: "parodontite-dakar-surfacage-plan-traitement",
    title: "Parodontite à Dakar : symptômes, surfaçage et plan de traitement",
    description:
      "Saignement, mauvaise haleine, mobilité dentaire : comment diagnostiquer et traiter une parodontite avec un surfaçage radiculaire à Dakar.",
    date: "2025-12-03",
    category: "Prévention",
    tags: [
      "parodontite dakar",
      "surfaçage radiculaire",
      "gencives qui saignent",
    ],
    author: AUTHORS.sao,
    cover: gingiviteCover,
    pinned: true,
    readingMinutes: 14,
    content: `""`,
    faq: [
      {
        q: "Le surfaçage radiculaire est-il douloureux ?",
        a: "Il se déroule sous anesthésie locale, comme un soin classique. Après la séance, une légère sensibilité peut durer 24 à 48 h et se gère avec du paracétamol.",
      },
      {
        q: "La parodontite peut-elle revenir ?",
        a: "Oui si l’hygiène, le tabac ou certaines maladies ne sont pas maîtrisés. Des contrôles réguliers (3–4 mois) sont indispensables pour garder des gencives stables.",
      },
    ],
  },

  {
    slug: "ronflement-apnee-gouttiere-mandibulaire-dakar",
    title: "Ronflement et apnée légère : la gouttière mandibulaire à Dakar",
    description:
      "Orthèse d’avancée mandibulaire (OAM), bilan sommeil, prix indicatifs et entretien à la Clinique DABIA.",
    date: "2025-12-10",
    category: "Conseils",
    tags: ["ronflement", "apnée du sommeil", "orthèse d'avancée mandibulaire"],
    author: AUTHORS.sao,
    cover: nuitCover,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "Une orthèse remplace-t-elle le CPAP ?",
        a: "Elle est indiquée pour les ronflements isolés ou les apnées légères à modérées. Pour un syndrome sévère, la pression positive (CPAP) reste le traitement de référence.",
      },
      {
        q: "Combien de temps dure une OAM ?",
        a: "Avec un entretien correct et des contrôles annuels, une orthèse mandibulaire dure en moyenne 3 à 5 ans avant d’être renouvelée.",
      },
    ],
  },

  {
    slug: "orthodontie-interceptive-enfant-dakar-appareils",
    title:
      "Orthodontie interceptive : quand poser un appareil chez l’enfant à Dakar ?",
    description:
      "Âge idéal, appareils d’expansion, habitudes à corriger et déroulé du traitement pour les enfants de 6 à 10 ans.",
    date: "2025-12-17",
    category: "Pédiatrie",
    tags: [
      "orthodontie enfant dakar",
      "appareil interceptif",
      "dentiste pediatrique dakar",
    ],
    author: AUTHORS.sao,
    cover: enfantCover,
    readingMinutes: 13,
    content: `""`,
    faq: [
      {
        q: "Un appareil interceptif fait-il mal ?",
        a: "L’enfant ressent parfois une légère pression les premiers jours, mais l’inconfort disparaît vite. Les activations sont progressives pour rester confortables.",
      },
      {
        q: "Quelle est la durée d’un traitement interceptif ?",
        a: "Selon l’objectif (expansion, correction d’une habitude), il dure 6 à 18 mois, suivis d’un contrôle régulier jusqu’à l’éruption complète des dents définitives.",
      },
    ],
  },

  {
    slug: "recession-gingivale-causes-soins-greffe-dakar",
    title:
      "Récession gingivale : causes, traitements et greffe de gencive à Dakar",
    description:
      "Brossage trop appuyé, parodontite ou piercings : comment stopper une récession gingivale et quand envisager une greffe conjonctive à Dakar.",
    date: "2025-12-24",
    category: "Prévention",
    tags: ["récession gingivale", "greffe gencive", "parodontologie dakar"],
    author: AUTHORS.sao,
    cover: fluorCover,
    readingMinutes: 11,
    content: `""`,
    faq: [
      {
        q: "Une greffe gingivale est-elle obligatoire ?",
        a: "Non. Si la récession est légère et asymptomatique, un changement d’habitudes peut suffire. On propose une greffe quand la racine est exposée ou que la gencive kératinisée manque.",
      },
      {
        q: "La greffe gingivale est-elle prise en charge ?",
        a: "Certaines mutuelles ou assurances dentaires remboursent partiellement l’acte après devis. Un document détaillé est remis pour toute demande auprès de l’IPM.",
      },
    ],
  },

  {
    slug: "ramadan-jeune-soins-dentaires-dakar",
    title:
      "Ramadan et soins dentaires à Dakar : haleine, douleur, quand consulter",
    description:
      "Jeûne, haleine, douleurs nocturnes : ce qui est compatible avec le jeûne et comment planifier les soins en soirée.",
    date: "2025-11-25",
    category: "Prévention",
    tags: ["ramadan", "jeûne", "haleine", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: halitoseCover,
    pinned: true,
    readingMinutes: 10,
    content: `""`,
  },

  {
    slug: "tourisme-dentaire-dakar-planifier-sejour",
    title: "Tourisme dentaire à Dakar : organiser ses soins en 7–10 jours",
    description:
      "Checklist pour patients de la diaspora : devis avant de voyager, étapes implant/facette et rythme des rendez-vous.",
    date: "2025-11-01",
    category: "Conseils",
    tags: [
      "tourisme dentaire senegal",
      "devis dentaire dakar",
      "implant dentaire",
      "facettes",
    ],
    author: AUTHORS.sao,
    cover: prixCover,
    pinned: true,
    readingMinutes: 11,
    content: `""`,
  },

  {
    slug: "carie-biberon-enfant-senegal-prevention",
    title: "Carie du biberon au Sénégal : signes, prévention et soins précoces",
    description:
      "Biberon sucré, attaya ou jus chez les tout-petits : comment éviter la carie précoce et quand consulter un dentiste pédiatrique.",
    date: "2025-10-01",
    category: "Pédiatrie",
    tags: [
      "carie biberon",
      "dentiste pediatrique dakar",
      "prévention",
      "enfant",
    ],
    author: AUTHORS.sao,
    cover: enfantCover,
    pinned: true,
    readingMinutes: 9,
    content: `""`,
  },

  {
    slug: "blanchiment-maison-risques-dents-senegal",
    title:
      "Charbon, citron, poudre de brique : les risques du blanchiment maison au Sénégal",
    description:
      "Produits maison ou réseaux sociaux : ce que ça fait vraiment sur l’émail, comment éclaircir sans abîmer vos dents à Dakar.",
    date: "2025-10-08",
    category: "Esthétique",
    tags: [
      "blanchiment des dents",
      "charbon dents",
      "citron dents",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: blanchimentCover,
    pinned: true,
    readingMinutes: 10,
    content: `""`,
  },

  {
    slug: "urgence-dentaire-dakar-que-faire",
    title: "Urgence dentaire à Dakar : que faire immédiatement ?",
    description:
      "Douleur aiguë, dent cassée, abcès… Les bons réflexes avant d’arriver à la Clinique Dentaire DABIA à Dakar et comment se déroule la prise en charge.",
    date: "2025-09-26",
    category: "Urgences",
    tags: ["urgence dentaire", "dentiste dakar", "douleur dentaire"],
    author: AUTHORS.sao,
    cover: urgenceCover,
    readingMinutes: 11,
    content: `""`,
  },

  // NOUVEAUX ARTICLES
  {
    slug: "scellants-sillons-enfants-dakar",
    title: "Scellants des sillons chez l’enfant : quand et pourquoi ?",
    description:
      "Prévenir les caries des molaires définitives avec les sealants : indications, déroulé et durée.",
    date: "2025-09-23",
    category: "Pédiatrie",
    tags: ["scellants", "prévention caries", "enfant"],
    author: AUTHORS.sao,
    cover: scellantsCover,
    readingMinutes: 8,
    content: `""`,
  },

  {
    slug: "dentiste-enfants-senegal-premiere-visite-prevention",
    title:
      "Dentiste pour enfants au Sénégal : première visite, caries, prévention et conseils pour les parents",
    description:
      "À quel âge consulter, comment se déroule une première visite dentaire pour enfant à Dakar et comment prévenir les caries au quotidien.",
    date: "2025-09-20",
    category: "Pédiatrie",
    tags: [
      "dentiste pour enfant dakar",
      "dentiste pediatrique dakar",
      "caries enfant",
      "prevention dentaire enfant",
    ],
    author: AUTHORS.sao,
    cover: premierRdvCover,
    readingMinutes: 12,
    pinned: true,
    content: `""`,
    faq: [
      {
        q: "À partir de quel âge un enfant doit-il voir un dentiste ?",
        a: "Idéalement dès 1 an ou à l’apparition des premières molaires de lait, puis au plus tard vers 2–3 ans pour un bilan de prévention.",
      },
      {
        q: "Faut-il soigner une dent de lait qui ne fait pas mal ?",
        a: "Oui, les dents de lait servent à manger, parler et garder la place des futures dents définitives. Une carie non traitée peut s’infecter et toucher la dent permanente.",
      },
      {
        q: "Comment rassurer un enfant qui a peur du dentiste ?",
        a: "Parlez d’une visite de contrôle plutôt que de piqûre ou de douleur, évitez de transmettre votre propre peur et laissez l’équipe expliquer avec des mots simples adaptés à son âge.",
      },
      {
        q: "Les soins dentaires sont-ils dangereux pour les enfants ?",
        a: "Les soins sont adaptés au poids, à l’âge et à l’état général de l’enfant. Les produits et doses sont sécurisés, avec des précautions particulières en cas de maladie chronique.",
      },
    ],
  },

  {
    slug: "bruxisme-gouttiere-protection-dakar",
    title: "Bruxisme : symptômes, causes et gouttière de protection",
    description:
      "Serrage/grincement la nuit, douleurs musculaires, usure des dents : comment diagnostiquer et soulager.",
    date: "2025-09-17",
    category: "Prévention",
    tags: ["bruxisme", "gouttière", "douleur nocturne"],
    author: AUTHORS.sao,
    cover: nuitCover,
    readingMinutes: 9,
    content: `""`,
  },

  {
    slug: "all-on-4-prothese-implants-dakar",
    title: "All‑on‑4 / Prothèse complète sur implants : pour qui ?",
    description:
      "Arcade complète fixée sur 4 implants : indications, étapes, confort et entretien.",
    date: "2025-09-14",
    category: "Implantologie",
    tags: ["all-on-4", "prothèse sur implants", "edentement total"],
    author: AUTHORS.sao,
    cover: implantCover,
    readingMinutes: 11,
    content: `""`,
  },

  {
    slug: "sensibilite-dentaire-causes-solutions-dakar",
    title: "Sensibilité dentaire : causes et solutions efficaces",
    description:
      "Dents sensibles au froid/chaud : causes fréquentes et traitements possibles.",
    date: "2025-09-11",
    category: "Prévention",
    tags: ["sensibilité", "émail", "collet"],
    author: AUTHORS.sao,
    cover: fluorCover,
    readingMinutes: 8,
    content: `""`,
  },
  {
    slug: "tarif-implant-dentaire-dakar-facteurs-devis",
    title:
      "Tarif implant dentaire à Dakar : facteurs, étapes et devis personnalisé",
    description:
      "Ce qui fait varier le coût d’un implant à Dakar : imagerie 3D, greffe éventuelle, marque, couronne. Parcours type et demandes de devis.",
    date: "2025-09-08",
    category: "Implantologie",
    pinned: true,
    tags: ["tarif implant dentaire dakar", "implant dentaire", "prix"],
    author: AUTHORS.sao,
    cover: implantCover,
    readingMinutes: 12,
    content: `""`,
  },

  {
    slug: "detartrage-dentaire-dakar-prix-frequence-airflow",
    title:
      "Détartrage dentaire à Dakar : prix, fréquence, AirFlow et résultats",
    description:
      "Pourquoi le détartrage est essentiel, quand privilégier l’AirFlow et de quoi dépend le tarif à Dakar.",
    date: "2025-09-05",
    category: "Prévention",
    pinned: true,
    tags: ["détartrage dentaire dakar prix", "prévention", "parodontologie"],
    author: AUTHORS.sao,
    cover: airflowCover,
    readingMinutes: 10,
    content: `""`,
  },

  {
    slug: "blanchiment-dents-prix-conseils-dakar",
    title:
      "Blanchiment des dents à Dakar : méthodes, indications, prix et conseils",
    description:
      "Cabinet vs domicile, contre-indications, déroulé, entretien du résultat et fourchettes de prix indicatives.",
    date: "2025-08-30",
    category: "Esthétique",
    tags: ["blanchiment des dents", "prix", "clinique dentaire dakar"],
    author: AUTHORS.sao,
    cover: blanchimentCover,
    readingMinutes: 12,
    content: `""`,
  },

  {
    slug: "combien-coute-implant-dentaire-dakar-guide",
    title:
      "Implant dentaire à Dakar : étapes, durée, confort et coût — Guide complet",
    description:
      "Du bilan 3D à la couronne, explications claires sur la pose d’implant, la cicatrisation, les alternatives et les budgets.",
    date: "2025-08-27",
    category: "Implantologie",
    tags: ["implant dentaire", "prix", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: implantCover,
    readingMinutes: 14,
    content: `""`,
  },

  {
    slug: "orthodontie-adulte-enfant-dakar-aligneurs-brackets",
    title:
      "Orthodontie à Dakar : aligneurs transparents ou brackets — comment choisir ?",
    description:
      "Indications, différences pratiques, durée du traitement et hygiène — pour l’enfant, l’ado et l’adulte.",
    date: "2025-08-24",
    category: "Orthodontie",
    tags: ["orthodontie", "aligneurs", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: orthodontieCover,
    readingMinutes: 11,
    content: `""`,
  },

  // --- Nouveaux articles orientés "prix" ---
  {
    slug: "prix-couronne-dentaire-dakar-materiaux-devis",
    title: "Prix d’une couronne dentaire à Dakar : matériaux, étapes et devis",
    description:
      "Céramique, zircone, métal-céramique : ce qui influence le coût d’une couronne à Dakar, comment se déroule la pose et quand la préférer à un onlay.",
    date: "2025-08-21",
    category: "Conseils",
    tags: ["couronne dentaire", "prix", "prothèse dentaire", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: onlayCover,
    pinned: true,
    readingMinutes: 13,
    content: `""`,
    faq: [
      {
        q: "Couronne ou onlay : que choisir ?",
        a: "L’onlay renforce une dent encore largement préservée. La couronne s’impose lorsque la dent est très fragilisée (après dévitalisation, fractures, perte de substance importante).",
      },
      {
        q: "Zircone ou céramique stratifiée ?",
        a: "La zircone monolithique privilégie la résistance (molaires). La céramique stratifiée apporte un rendu très naturel pour les dents visibles. Le choix dépend de la zone et des objectifs esthétiques.",
      },
      {
        q: "Combien de rendez‑vous ?",
        a: "Généralement deux à trois : préparation + empreinte/scan, puis essayage/pose. Une couronne provisoire protège la dent entre les séances.",
      },
      {
        q: "Quel ordre de prix ?",
        a: "Le tarif dépend du matériau, du travail de laboratoire et de la complexité clinique. Un devis précis est remis après l’examen clinique.",
      },
    ],
  },
  {
    slug: "devitalisation-traitement-canalaire-prix-dakar",
    title:
      "Dévitalisation (traitement canalaire) à Dakar : déroulé, indications et prix",
    description:
      "Douleur, abcès, dent fissurée : quand dévitaliser ? Étapes, radios, durée et facteurs qui influencent le tarif à Dakar.",
    date: "2025-08-18",
    category: "Urgences",
    tags: [
      "traitement canalaire",
      "dé-vitalisation",
      "prix",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: endoCover,
    pinned: true,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "Est‑ce douloureux ?",
        a: "Non, l’acte se fait sous anesthésie locale. Une sensibilité passagère est possible et contrôlée par antalgiques.",
      },
      {
        q: "Combien de séances ?",
        a: "1 à 2 séances pour une dent antérieure, 1 à 3 pour une molaire selon le nombre de canaux et la complexité.",
      },
      {
        q: "Quel prix selon la dent ?",
        a: "Le coût dépend du nombre de canaux (incisive ⟶ molaire), de la reprise éventuelle d’un ancien traitement et du temps opératoire. Un devis est remis après examen.",
      },
      {
        q: "Faut‑il poser une couronne après ?",
        a: "Souvent oui : une dent dévitalisée est plus fragile. La couronne protège durablement contre la fracture.",
      },
    ],
  },

  {
    slug: "prix-appareil-dentaire-orthodontie-dakar-enfant-adulte",
    title:
      "Prix d’un appareil dentaire à Dakar : enfant, ado, adulte — ce qui fait varier le devis",
    description:
      "Aligneurs transparents, bagues métalliques ou esthétiques : explications claires sur les facteurs de prix en orthodontie à Dakar et le déroulé du traitement.",
    date: "2025-08-15",
    category: "Orthodontie",
    tags: [
      "prix appareil dentaire dakar",
      "orthodontie",
      "Invisalign Dakar",
      "bagues dentaires",
    ],
    author: AUTHORS.sao,
    cover: orthodontieCover,
    pinned: true,
    readingMinutes: 13,
    content: `""`,
  },

  {
    slug: "prix-urgence-dentaire-dakar-jour-nuit",
    title: "Prix d’une urgence dentaire à Dakar : consultation, actes et nuit",
    description:
      "Douleur aiguë, abcès, traumatisme : ce qui influence le tarif d’une urgence dentaire à Dakar, en journée ou la nuit.",
    date: "2025-08-12",
    category: "Urgences",
    tags: [
      "prix urgence dentaire dakar",
      "urgence dentaire",
      "dentiste dakar 24/24",
    ],
    author: AUTHORS.sao,
    cover: urgenceNuitCover,
    pinned: true,
    readingMinutes: 11,
    content: `""`,
  },

  {
    slug: "prix-prothese-dentaire-dakar-partielle-complete",
    title:
      "Prix d’une prothèse dentaire à Dakar : partielle, complète, sur implants",
    description:
      "Prothèse amovible, bridge, prothèse complète ou sur implants : types, indications et facteurs qui influencent le coût à Dakar.",
    date: "2025-08-09",
    category: "Conseils",
    tags: [
      "prothèse dentaire",
      "prix prothese dentaire dakar",
      "dentier complet",
    ],
    author: AUTHORS.sao,
    cover: protheseCover,
    pinned: true,
    readingMinutes: 13,
    content: `""`,
  },

  {
    slug: "detartrage-profondeur-gingivite-saignement-conseils",
    title:
      "Saignement des gencives : simple gingivite ou besoin d’un détartrage en profondeur ?",
    description:
      "Signes d’alerte, différence entre détartrage simple et surfaçage radiculaire, habitudes d’hygiène qui changent tout.",
    date: "2025-08-06",
    category: "Prévention",
    tags: ["gingivite", "détartrage", "douleur dentaire"],
    author: AUTHORS.sao,
    cover: gingiviteCover,
    readingMinutes: 10,
    content: `""`,
  },

  {
    slug: "preparer-enfant-premiere-visite-dentiste-dakar",
    title:
      "Première visite chez le dentiste : comment préparer son enfant sereinement",
    description:
      "Âge idéal, astuces concrètes, déroulé à la clinique et prévention des caries chez l’enfant.",
    date: "2025-08-03",
    category: "Pédiatrie",
    tags: ["enfant", "première visite", "prévention"],
    author: AUTHORS.sao,
    cover: enfantCover,
    readingMinutes: 10,
    content: `""`,
  },

  {
    slug: "mal-de-dents-la-nuit-causes-et-que-faire",
    title:
      "Mal de dents la nuit : causes fréquentes et que faire jusqu’au rendez-vous",
    description:
      "Pulpites, carie profonde, bruxisme, hypersensibilités — gestes utiles, ce qu’il faut éviter et quand consulter.",
    date: "2025-07-31",
    category: "Urgences",
    tags: ["douleur dentaire", "urgence dentaire", "caries"],
    author: AUTHORS.sao,
    cover: nuitCover,
    readingMinutes: 9,
    content: `""`,
  },

  {
    slug: "guide-prix-dentiste-dakar-consultation-soins",
    title:
      "Combien coûte un dentiste à Dakar ? Le guide des prix (indications générales)",
    description:
      "De la consultation au détartrage, composite, extraction et soins esthétiques : à quoi s’attendre chez un dentiste à Dakar et ce qui fait varier les tarifs en clinique dentaire.",
    date: "2025-07-28",
    category: "Conseils",
    tags: ["prix", "dentiste dakar", "clinique dentaire dakar"],
    author: AUTHORS.sao,
    cover: prixCover,
    readingMinutes: 12,
    content: `""`,
  },

  {
    slug: "traitement-canalaire-devitalisation-etapes-douleur-dakar",
    title:
      "Dévitalisation (traitement canalaire) : étapes, douleur, suites – Dakar",
    description:
      "Pourquoi dévitaliser une dent ? Étapes du traitement canalaire, douleur, antibiotiques, couronne après traitement à la Clinique DABIA.",
    date: "2025-07-25",
    category: "Urgences",
    tags: ["traitement canalaire", "douleur dentaire", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: endoCover,
    readingMinutes: 13,
    content: `""`,
  },
  {
    slug: "facettes-dentaires-dakar-indications-etapes-prix",
    title:
      "Facettes dentaires à Dakar : indications, étapes, matériaux et prix",
    description:
      "Corriger couleur, forme, alignement léger : ce qu’il faut savoir sur les facettes céramiques/composites à la Clinique Dentaire DABIA à Dakar.",
    date: "2025-07-22",
    category: "Esthétique",
    tags: ["facettes", "esthétique", "clinique dentaire dakar"],
    author: AUTHORS.sao,
    cover: facettesCover,
    readingMinutes: 14,
    content: `""`,
  },
  {
    slug: "detartrage-vs-airflow-difference-prophylaxie-dakar",
    title: "AirFlow dentaire : taches, plaque, tartre et détartrage",
    description:
      "AirFlow dentaire à Dakar : découvrez son action sur les taches et la plaque, ses différences avec le détartrage et quand associer les deux soins.",
    date: "2025-07-19",
    category: "Prévention",
    tags: ["détartrage", "hygiène", "prévention"],
    author: AUTHORS.sao,
    cover: airflowCover,
    readingMinutes: 12,
    content: `""`,
  },
  {
    slug: "halitose-mauvaise-haleine-causes-bilan-traitements-dakar",
    title:
      "Mauvaise haleine (halitose) : causes, bilan et traitements efficaces",
    description:
      "D’où vient l’odeur ? Langue, gencives, dents, nez-gorge… Les solutions qui fonctionnent vraiment et le parcours à la Clinique DABIA.",
    date: "2025-07-16",
    category: "Conseils",
    tags: ["halitose", "mauvaise haleine", "prévention"],
    author: AUTHORS.sao,
    cover: halitoseCover,
    readingMinutes: 11,
    content: `""`,
  },
  {
    slug: "carie-dentaire-symptomes-traitement-prevention-dakar",
    title: "Carie dentaire : symptômes, traitement et prévention à Dakar",
    description:
      "Reconnaître une carie tôt, éviter la douleur et protéger ses dents grâce aux soins de la Clinique DABIA.",
    date: "2025-07-13",
    category: "Prévention",
    tags: [
      "carie dentaire",
      "traitement carie",
      "prévention",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: carieCover,
    readingMinutes: 12,
    content: `""`,
  },

  {
    slug: "dent-de-sagesse-douleur-extraction-dakar",
    title: "Douleur des dents de sagesse : quand faut-il extraire ?",
    description:
      "Tout savoir sur la douleur, les infections et l’extraction des dents de sagesse à la Clinique DABIA.",
    date: "2025-07-10",
    category: "Urgences",
    tags: [
      "dent de sagesse",
      "extraction",
      "urgence dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: sagesseCover,
    readingMinutes: 11,
    content: `""`,
  },

  {
    slug: "prothese-dentaire-complete-partielle-ou-sur-implant-dakar",
    title: "Prothèse dentaire à Dakar : complète, partielle ou sur implant ?",
    description:
      "Les solutions modernes pour retrouver fonction et esthétique à Dakar : quelle prothèse pour quel cas et pour quel budget en clinique dentaire ?",
    date: "2025-07-07",
    category: "Conseils",
    tags: [
      "prothèse dentaire",
      "dentier",
      "implant dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: protheseCover,
    readingMinutes: 13,
    content: `""`,
  },

  {
    slug: "urgence-dentaire-nuit-weekend-dakar",
    title: "Urgence dentaire la nuit ou le week-end à Dakar : que faire ?",
    description:
      "Gestes qui soulagent, erreurs à éviter et comment organiser une prise en charge rapide.",
    date: "2025-07-04",
    category: "Urgences",
    tags: ["urgence dentaire", "nuit", "week-end", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: urgenceNuitCover,
    readingMinutes: 9,
    content: `""`,
  },

  {
    slug: "blanchiment-vs-facettes-esthetique-dents-dakar",
    title:
      "Blanchiment ou facettes : quelle solution esthétique choisir à Dakar ?",
    description:
      "Comparatif clair entre éclaircissement de la teinte et relooking du sourire par facettes dans une clinique dentaire à Dakar.",
    date: "2025-07-01",
    category: "Esthétique",
    tags: ["blanchiment", "facettes", "esthétique", "clinique dentaire dakar"],
    author: AUTHORS.sao,
    cover: blanchimentVsFacettesCover,
    readingMinutes: 11,
    content: `""`,
  },
  {
    slug: "grossesse-et-dents-soins-conseils-dakar",
    title: "Grossesse et santé des dents : soins et conseils à Dakar",
    description:
      "Quels soins dentaires pendant la grossesse ? Traitements possibles, précautions, prévention des gingivites et érosion acide liées aux nausées.",
    date: "2025-06-28",
    category: "Conseils",
    tags: ["grossesse et dents", "gingivite grossesse", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: grossesseCover,
    readingMinutes: 15,
    content: `""`,
  },
  {
    slug: "fluoration-vernis-fluore-enfant-adulte-dakar",
    title:
      "Vernis fluoré et fluoration : protéger les dents des enfants et adultes",
    description:
      "Indications, efficacité, fréquence et sécurité des vernis fluorés en cabinet et au quotidien.",
    date: "2025-06-25",
    category: "Pédiatrie",
    tags: ["vernis fluoré", "prévention caries", "enfant dakar"],
    author: AUTHORS.sao,
    cover: fluorCover,
    readingMinutes: 14,
    content: `""`,
  },
  {
    slug: "sedation-dentaire-peur-du-dentiste-dakar",
    title: "Peur du dentiste : quelles options de sédation à Dakar ?",
    description:
      "Du MEOPA à la sédation légère : comment soigner sereinement les patients anxieux, adultes et enfants.",
    date: "2025-06-22",
    category: "Conseils",
    tags: ["peur du dentiste", "sédation dentaire", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: sedationCover,
    readingMinutes: 15,
    content: `""`,
  },
  {
    slug: "invisalign-aligneurs-prix-duree-entretien-dakar",
    title:
      "Aligneurs transparents (type Invisalign) : prix, durée et entretien à Dakar",
    description:
      "Qui est éligible ? Combien de temps ? Coût indicatif, hygiène, cas simples vs complexes et contention après traitement.",
    date: "2025-06-19",
    category: "Orthodontie",
    tags: ["Invisalign Dakar", "aligneurs transparents", "orthodontie adulte"],
    author: AUTHORS.sao,
    cover: invisalignCover,
    readingMinutes: 16,
    content: `""`,
  },
  {
    slug: "bridge-ou-implant-que-choisir-dakar",
    title: "Bridge ou implant : que choisir pour remplacer une dent ?",
    description:
      "Comparatif clair : durée, coût, préservation de l’os et des dents voisines, entretien et indications.",
    date: "2025-06-16",
    category: "Implantologie",
    tags: ["bridge vs implant", "remplacement dent", "implant dentaire dakar"],
    author: AUTHORS.sao,
    cover: bridgeImplantCover,
    readingMinutes: 15,
    content: `""`,
  },
  {
    slug: "couronne-ou-onlay-difference-prix-dakar",
    title: "Couronne ou onlay : quelles différences et quand les poser ?",
    description:
      "Restaurations indirectes : indications, matériaux, étapes au cabinet et ordre de prix.",
    date: "2025-06-13",
    category: "Conseils",
    tags: ["couronne dentaire", "onlay", "prix dents dakar"],
    author: AUTHORS.sao,
    cover: onlayCover,
    readingMinutes: 14,
    content: `""`,
  },
  {
    slug: "cbct-radio-3d-dentaire-a-quoi-sert-dakar",
    title: "CBCT dentaire à Dakar : prix, indications et scanner 3D",
    seoTitle: "CBCT dentaire : c'est quoi, prix et RDV scanner 3D à Dakar | DABIA",
    description:
      "CBCT dentaire à Dakar : indications, déroulement, sécurité et prix sur devis. Diagnostic 3D à la Clinique DABIA Liberté 6, rendez-vous rapide.",
    date: "2025-06-10",
    category: "Technologie",
    tags: ["CBCT Dakar", "radio 3D dentaire", "technologie cabinet"],
    author: AUTHORS.sao,
    cover: cbctCover,
    readingMinutes: 13,
    content: `""`,
    faq: [
      {
        q: "Est-ce douloureux de faire un CBCT dentaire ?",
        a: "Non, l'examen est indolore et rapide : environ 20 secondes de rotation autour de la tête, sans injection ni geste invasif.",
      },
      {
        q: "Est-ce que le CBCT est remboursé ?",
        a: "La prise en charge dépend de votre IPM ou de votre assurance et des indications médicales. La clinique vous remet les documents nécessaires à votre dossier.",
      },
      {
        q: "Puis-je faire un CBCT enceinte ?",
        a: "Le CBCT est déconseillé pendant la grossesse sauf urgence. Signalez votre situation avant l'examen pour adapter la prise en charge.",
      },
    ],
  },
  {
    slug: "urgence-traumatisme-dentaire-enfant-dakar",
    title: "Traumatisme dentaire chez l’enfant : que faire immédiatement ?",
    description:
      "Chute, dent cassée ou expulsée : gestes d’urgence, conservation du fragment et prise en charge en cabinet.",
    date: "2025-06-07",
    category: "Pédiatrie",
    tags: ["traumatisme dentaire enfant", "urgence dentaire", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: traumaEnfantCover,
    readingMinutes: 14,
    content: `""`,
  },
  {
    slug: "diabete-et-sante-buccale-risques-prevention-dakar",
    title: "Diabète et santé bucco-dentaire : risques et prévention",
    description:
      "Lien parodonte–diabète, cicatrisation, infections : protocole de prévention et suivi en cabinet.",
    date: "2025-06-04",
    category: "Prévention",
    tags: ["diabète et dents", "parodontite diabétique", "prévention dakar"],
    author: AUTHORS.sao,
    cover: diabeteCover,
    readingMinutes: 15,
    content: `""`,
  },

  {
    slug: "assurance-dentaire-mutuelle-ipm-senegal",
    title:
      "Assurance dentaire au Sénégal : mutuelle, IPM et prise en charge chez le dentiste",
    description:
      "Comment fonctionnent les mutuelles, IPM et assurances santé pour les soins dentaires au Sénégal, et comment préparer sa visite à la Clinique DABIA.",
    date: "2025-06-01",
    category: "Conseils",
    tags: [
      "assurance dentaire senegal",
      "mutuelle dentaire dakar",
      "ipm dentaire dakar",
      "prix dentiste senegal",
    ],
    author: AUTHORS.sao,
    cover: prixCover,
    readingMinutes: 13,
    pinned: true,
    content: `""`,
  },

  {
    slug: "attaya-cafe-kola-effets-sur-les-dents",
    title: "Attaya, café, kola : quels effets sur vos dents et votre sourire ?",
    description:
      "Taches sur les dents, caries, mauvaise haleine : point complet sur l’attaya, le café, la kola et les bons réflexes à Dakar.",
    date: "2025-05-29",
    category: "Prévention",
    tags: [
      "attaya dents",
      "taches dents cafe",
      "mauvaise haleine",
      "prevention dentaire senegal",
    ],
    author: AUTHORS.sao,
    cover: halitoseCover,
    readingMinutes: 12,
    pinned: true,
    content: `""`,
  },

  {
    slug: "erreurs-quotidiennes-qui-abiment-les-dents",
    title:
      "Les 7 erreurs du quotidien qui abîment vos dents (et comment les éviter)",
    description:
      "Brossage trop fort, grignotages, automédication : les erreurs les plus fréquentes au Sénégal et les solutions simples pour protéger vos dents.",
    date: "2025-05-26",
    category: "Prévention",
    tags: [
      "erreurs brossage dents",
      "dents abimees",
      "douleur dentaire",
      "prevention dentaire senegal",
    ],
    author: AUTHORS.sao,
    cover: carieCover,
    readingMinutes: 11,
    pinned: true,
    content: `""`,
  },
  // --- Nouveaux articles ajoutés (SEO & Contenu riche) ---
  {
    slug: "extraction-dents-de-sagesse-dakar-prix-douleur",
    title:
      "Extraction dents de sagesse à Dakar : prix, douleur et cicatrisation",
    description:
      "Douleur au fond de la bouche ? Tout savoir sur l'extraction des dents de sagesse à Dakar : prix, déroulement et conseils pour éviter le gonflement.",
    date: "2026-02-05",
    category: "Urgences",
    tags: [
      "extraction dent de sagesse dakar",
      "dentiste dakar",
      "prix extraction dent de sagesse dakar",
      "stomatologue dakar",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: sagesseCover,
    pinned: true,
    readingMinutes: 13,
    content: `""`,
    faq: [
      {
        q: "Est-ce que ça fait mal ?",
        a: "Non, l'intervention se fait sous anesthésie locale efficace. Après l'extraction, des antalgiques sont prescrits pour gérer la gêne éventuelle.",
      },
      {
        q: "Combien de temps pour cicatriser ?",
        a: "La gencive cicatrise en 1 à 2 semaines. L'os prend plusieurs mois pour se combler totalement, mais vous pouvez manger normalement après quelques jours.",
      },
      {
        q: "Faut-il enlever les 4 en même temps ?",
        a: "C'est possible, souvent sous anesthésie générale ou sédation, mais nous procédons souvent par côté (haut et bas d'un même côté) sous anesthésie locale pour plus de confort.",
      },
    ],
  },
  {
    slug: "facettes-dentaires-dakar-hollywood-smile-prix",
    title: "Facettes dentaires à Dakar (Hollywood Smile) : prix et durée",
    description:
      "Envie d'un sourire Hollywood ? Découvrez les facettes dentaires à Dakar : céramique ou composite, prix et durée pour transformer votre sourire.",
    date: "2026-02-03",
    category: "Esthétique",
    tags: [
      "facette dentaire dakar",
      "hollywood smile dakar",
      "prix facette dentaire senegal",
      "esthétique dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: facettesCover,
    pinned: true,
    readingMinutes: 14,
    content: `""`,
    faq: [
      {
        q: "Est-ce que ça abîme les dents ?",
        a: "Les techniques modernes sont très conservatrices (préparation pelliculaire de 0,3 à 0,5 mm) et respectent la vitalité de la dent.",
      },
      {
        q: "Le résultat fait-il naturel ?",
        a: "Oui, nous choisissons la forme et la teinte avec vous pour un résultat harmonieux qui correspond à votre visage.",
      },
      {
        q: "Quel est le prix d'une facette à Dakar ?",
        a: "Le tarif dépend du matériau (céramique ou composite) et du nombre de dents. Un devis personnalisé vous est remis lors de la consultation.",
      },
    ],
  },
  {
    slug: "invisalign-dakar-orthodontie-invisible-adulte",
    title: "Invisalign à Dakar : l'orthodontie invisible pour adultes",
    description:
      "Redresser ses dents sans bagues ? C'est possible avec Invisalign et les aligneurs invisibles à Dakar. Prix, durée et avantages pour les adultes.",
    date: "2026-01-30",
    category: "Orthodontie",
    tags: [
      "invisalign dakar",
      "orthodontie invisible dakar",
      "appareil dentaire transparent dakar",
      "aligneurs dakar",
      "orthodontie adulte",
    ],
    author: AUTHORS.sao,
    cover: invisalignCover,
    pinned: true,
    readingMinutes: 15,
    content: `""`,
    faq: [
      {
        q: "Dois-je les porter tout le temps ?",
        a: "Pour être efficace, il faut les porter 22h/24, jour et nuit. Vous ne les retirez que pour manger et boire (sauf de l'eau).",
      },
      {
        q: "Est-ce douloureux ?",
        a: "Vous ressentirez une légère pression à chaque changement d'aligneur (toutes les 1 à 2 semaines), signe que les dents bougent. C'est bien moins douloureux que les bagues.",
      },
      {
        q: "Invisalign est-il disponible à Dakar ?",
        a: "Oui, la Clinique DABIA propose des traitements par aligneurs invisibles avec un suivi complet à Dakar.",
      },
    ],
  },
  {
    slug: "implant-dentaire-ou-bridge-choisir-dakar",
    title: "Implant dentaire ou Bridge : que choisir à Dakar ?",
    description:
      "Remplacer une dent manquante : faut-il choisir un implant ou un bridge ? Comparatif des prix, de la durée de vie et de l'esthétique à Dakar.",
    date: "2026-01-28",
    category: "Implantologie",
    tags: [
      "implant dentaire dakar",
      "bridge dentaire dakar",
      "prothèse dentaire dakar",
      "remplacement dent",
      "prix implant dakar",
    ],
    author: AUTHORS.sao,
    cover: bridgeImplantCover,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "L'implant est-il remboursé ?",
        a: "Les implants sont rarement couverts par les assurances classiques au Sénégal, contrairement aux bridges qui peuvent bénéficier d'une prise en charge partielle.",
      },
      {
        q: "La pose d'implant fait-elle mal ?",
        a: "Non, l'intervention se déroule sous anesthésie locale. Les suites sont généralement simples, souvent moins douloureuses qu'une extraction.",
      },
      {
        q: "Combien de temps dure un implant ?",
        a: "Avec une bonne hygiène bucco-dentaire, un implant peut durer toute la vie.",
      },
    ],
  },
  {
    slug: "femme-enceinte-dentiste-dakar-soins-autorises",
    title: "Femme enceinte et dentiste à Dakar : soins autorisés et risques",
    description:
      "Peut-on aller chez le dentiste enceinte ? Gingivite de grossesse, anesthésie, radio : tout ce qu'il faut savoir pour des soins sans danger à Dakar.",
    date: "2026-01-25",
    category: "Conseils",
    tags: [
      "femme enceinte dentiste dakar",
      "soins dentaires grossesse",
      "gingivite femme enceinte",
      "dentiste dakar",
      "grossesse",
    ],
    author: AUTHORS.sao,
    cover: grossesseCover,
    readingMinutes: 10,
    content: `""`,
    faq: [
      {
        q: "L'anesthésie est-elle dangereuse pour le bébé ?",
        a: "Non, nous utilisons des produits spécifiques pour les femmes enceintes qui ne traversent pas la barrière placentaire à dose toxique.",
      },
      {
        q: "Puis-je faire un blanchiment enceinte ?",
        a: "Non, par principe de précaution, les traitements esthétiques (blanchiment) sont reportés après l'accouchement et l'allaitement.",
      },
    ],
  },
  {
    slug: "peur-du-dentiste-dakar-sedation-soins-sans-douleur",
    title:
      "Peur du dentiste à Dakar : nos solutions pour des soins sans douleur",
    description:
      "Phobie du dentiste ? Découvrez nos solutions de sédation et d'anesthésie douce à Dakar pour des soins dentaires sans stress et sans douleur.",
    date: "2026-01-20",
    category: "Conseils",
    tags: [
      "peur du dentiste dakar",
      "dentiste sans douleur dakar",
      "sédation dentaire dakar",
      "stomato phobie",
      "soins doux",
    ],
    author: AUTHORS.sao,
    cover: sedationCover,
    readingMinutes: 11,
    content: `""`,
    faq: [
      {
        q: "La sédation est-elle une anesthésie générale ?",
        a: "Non, vous restez conscient et pouvez parler. C'est beaucoup plus léger et vous récupérez vos esprits en quelques minutes après l'arrêt.",
      },
      {
        q: "Est-ce que ça fonctionne pour les enfants ?",
        a: "Oui, c'est très efficace pour les enfants agités ou anxieux, permettant de réaliser les soins dans le calme.",
      },
    ],
  },

  // NOUVEAUX ARTICLES AJOUTÉS (Implant, Ortho, Blanchiment, Endo, Sagesse)
  {
    slug: "implant-dentaire-dakar-prix-avis",
    title: "Implant dentaire à Dakar : prix, déroulement et avis",
    description:
      "Remplacer une dent manquante durablement : tout savoir sur la pose d'implant dentaire à Dakar, le prix, la douleur et la cicatrisation.",
    date: "2026-02-02",
    category: "Implantologie",
    tags: [
      "implant dentaire dakar",
      "prix implant senegal",
      "remplacer dent",
      "chirurgie dentaire dakar",
    ],
    author: AUTHORS.sao,
    cover: implantCover,
    readingMinutes: 15,
    content: `""`,
    faq: [
      {
        q: "Quelle est la durée de vie d'un implant ?",
        a: "Avec une bonne hygiène (brossage + fil dentaire) et des contrôles réguliers, un implant peut durer toute la vie.",
      },
      {
        q: "Y a-t-il une limite d'âge ?",
        a: "Non, tant que l'état de santé général le permet. Il faut juste attendre la fin de la croissance (vers 18-20 ans) pour les jeunes patients.",
      },
    ],
  },

  {
    slug: "appareil-dentaire-adulte-dakar-invisalign",
    title:
      "Appareil dentaire adulte à Dakar : bagues ou gouttières invisibles ?",
    description:
      "Aligner ses dents à l'âge adulte à Dakar, c'est possible. Comparatif entre bagues céramiques et aligneurs invisibles (type Invisalign) pour un sourire parfait.",
    date: "2026-02-05",
    category: "Orthodontie",
    tags: [
      "orthodontie adulte dakar",
      "invisalign dakar",
      "aligneurs dentaires",
      "appareil dentaire invisible",
    ],
    author: AUTHORS.sao,
    cover: invisalignCover,
    readingMinutes: 12,
    content: `""`,
    faq: [
      {
        q: "Est-ce douloureux ?",
        a: "On ressent une pression les premiers jours (signe que les dents bougent), mais c'est très supportable. Les aligneurs sont souvent plus doux que les bagues.",
      },
      {
        q: "Doit-on porter les aligneurs toute la journée ?",
        a: "Oui, 22h/24. On ne les enlève que pour les repas et le brossage pour garantir le résultat.",
      },
    ],
  },

  {
    slug: "blanchiment-dentaire-dakar-efficace-medical",
    title: "Blanchiment dentaire à Dakar : la technique médicale efficace",
    description:
      "Vous rêvez de dents plus blanches ? Oubliez les astuces maison. Découvrez le blanchiment dentaire médical à Dakar : sûr, rapide et durable.",
    date: "2026-02-08",
    category: "Esthétique",
    tags: [
      "blanchiment dentaire dakar",
      "dents blanches",
      "détartrage blanchiment",
      "esthétique dentaire",
    ],
    author: AUTHORS.sao,
    cover: blanchimentCover,
    readingMinutes: 10,
    content: `""`,
    faq: [
      {
        q: "Combien de teintes peut-on gagner ?",
        a: "Cela dépend de votre teinte initiale, mais le résultat est toujours visiblement plus lumineux et naturel.",
      },
      {
        q: "Le blanchiment marche-t-il sur les couronnes ?",
        a: "Non, le produit n'agit que sur l'émail naturel. Si vous avez des couronnes visibles, il faudra peut-être les changer pour harmoniser la teinte.",
      },
    ],
  },

  {
    slug: "devitaliser-dent-dakar-traitement-canal",
    title: "Dévitaliser une dent à Dakar : pourquoi, étapes et douleur ?",
    description:
      "Une carie profonde ou une rage de dent ? Le traitement de canal (dévitalisation) permet de sauver votre dent. Explications d'experts à Dakar.",
    date: "2026-02-12",
    category: "Technologie",
    tags: [
      "devitalisation dakar",
      "traitement canal",
      "nerf dentaire",
      "urgence dentaire",
    ],
    author: AUTHORS.sao,
    cover: endoCover,
    readingMinutes: 14,
    content: `""`,
    faq: [
      {
        q: "Une dent dévitalisée est-elle morte ?",
        a: "Elle n'a plus de nerf (sensibilité), mais elle reste ancrée dans l'os et la gencive qui sont bien vivants. Elle garde sa fonction masticatoire.",
      },
      {
        q: "La dent va-t-elle noircir ?",
        a: "C'était vrai avec les anciennes techniques. Aujourd'hui, avec les matériaux modernes, le risque de coloration est minime. Une couronne permet aussi de masquer toute dyschromie.",
      },
    ],
  },

  {
    slug: "extraction-dent-sagesse-dakar-prix-douleur",
    title: "Extraction dent de sagesse à Dakar : quand l'enlever ?",
    description:
      "Douleur au fond de la bouche, dents qui se chevauchent ? Focus sur l'extraction des dents de sagesse à Dakar : indications et suites opératoires.",
    date: "2026-02-15",
    category: "Urgences",
    tags: [
      "dent de sagesse dakar",
      "extraction dentaire",
      "chirurgie dentaire dakar",
      "douleur dents",
    ],
    author: AUTHORS.sao,
    cover: sagesseCover,
    readingMinutes: 11,
    content: `""`,
    faq: [
      {
        q: "Peut-on enlever les 4 d'un coup ?",
        a: "Sous anesthésie locale, on préfère souvent faire un côté (haut et bas) puis l'autre 15 jours plus tard, pour vous laisser un côté pour manger.",
      },
      {
        q: "Combien coûte l'extraction ?",
        a: "Le tarif varie selon que la dent est sortie (extraction simple) ou incluse dans l'os (extraction chirurgicale). Un devis est établi après la radio.",
      },
    ],
  },
  {
    slug: "detartrage-dentaire-dakar-prix-frequence",
    title: "Détartrage dentaire à Dakar : prix, fréquence et importance",
    description:
      "Combien coûte un détartrage à Dakar ? Pourquoi le faire tous les 6 mois ? Guide complet sur le soin préventif n°1.",
    date: "2026-01-20",
    category: "Prévention",
    tags: [
      "détartrage dakar",
      "prix détartrage",
      "hygiène dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: detartragePrixCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Est-ce que le détartrage fait mal ?",
        a: "Non, avec les ultrasons modernes, c'est désagréable mais pas douloureux. Si vos dents sont sensibles, on peut anesthésier la gencive.",
      },
      {
        q: "Le détartrage abîme-t-il les dents ?",
        a: "Absolument pas. Au contraire, il enlève ce qui les agresse. L'émail est très dur et ne craint pas les ultrasons.",
      },
    ],
  },

  {
    slug: "prix-prothese-dentaire-dakar-dentier-stellite",
    title:
      "Prix prothèse dentaire à Dakar : dentier complet, partiel et stellite",
    description:
      "Appareil complet, résine ou stellite ? Comprendre les différents types de prothèses amovibles et leurs tarifs à Dakar.",
    date: "2026-01-22",
    category: "Conseils",
    tags: [
      "prothèse dentaire dakar",
      "prix dentier",
      "stellite dakar",
      "dentier complet",
    ],
    author: AUTHORS.sao,
    cover: protheseAmovibleCover,
    readingMinutes: 10,
    content: `""`,
    faq: [
      {
        q: "Combien de temps faut-il pour faire un appareil ?",
        a: "Il faut compter entre 3 et 5 séances (empreintes, essayage cire, essayage dents, pose) sur environ 2 semaines.",
      },
      {
        q: "Est-ce que ça tient bien ?",
        a: "Une prothèse bien ajustée tient par effet ventouse (complet) ou grâce aux crochets (partiel). Si elle bouge, un 'rebasage' est possible.",
      },
    ],
  },

  {
    slug: "prix-radio-dentaire-scanner-3d-dakar",
    title:
      "Prix radio dentaire et scanner 3D à Dakar : combien prévoir en 2026 ?",
    description:
      "Combien coûte une radio dentaire ou un scanner 3D (CBCT) à Dakar en 2026 ? Tarifs par type d'examen, remboursement et devis à la Clinique DABIA.",
    date: "2026-01-25",
    category: "Technologie",
    tags: [
      "radio dentaire dakar",
      "prix panoramique",
      "prix scanner dentaire",
      "cbct dakar",
    ],
    author: AUTHORS.sao,
    cover: radioPanoramiqueCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Les rayons X sont-ils dangereux ?",
        a: "Les appareils numériques modernes émettent des doses très faibles, inférieures à un vol en avion long-courrier.",
      },
      {
        q: "Puis-je repartir avec ma radio ?",
        a: "Oui, nous vous envoyons vos clichés par email ou WhatsApp, ou sur clé USB si besoin.",
      },
    ],
  },

  {
    slug: "devis-dentaire-dakar-comprendre-tarifs",
    title:
      "Devis dentaire à Dakar : comment analyser les tarifs et éviter les surprises",
    description:
      "Comprendre votre devis dentaire : matériaux, stérilisation, expertise. Comment comparer ce qui est comparable ?",
    date: "2026-01-28",
    category: "Conseils",
    tags: [
      "devis dentaire",
      "tarifs dentiste dakar",
      "prix soins dentaires",
      "conseil",
    ],
    author: AUTHORS.sao,
    cover: devisDentaireCover,
    readingMinutes: 9,
    content: `""`,
    faq: [
      {
        q: "Le devis est-il payant ?",
        a: "Le devis lui-même est gratuit, mais il nécessite une consultation et souvent une radio (actes payants) pour être établi sérieusement.",
      },
      {
        q: "Puis-je payer en plusieurs fois ?",
        a: "Nous proposons souvent un étalement des paiements au fur et à mesure de l'avancement des soins (ex: acompte au début, solde à la pose).",
      },
    ],
  },

  {
    slug: "soigner-carie-prix-dakar-plombage-composite",
    title:
      "Prix pour soigner une carie à Dakar : plombage, composite ou onlay ?",
    description:
      "Le prix pour soigner une carie dépend de sa taille. Découvrez les différentes options : du simple composite à la dévitalisation.",
    date: "2026-01-30",
    category: "Conseils",
    tags: ["prix soin carie", "dentiste dakar", "composite", "dévitalisation"],
    author: AUTHORS.sao,
    cover: soinCariePrixCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Les plombages gris (amalgame) sont-ils moins chers ?",
        a: "Ils ne sont presque plus utilisés à cause du mercure et de l'esthétique. Nous privilégions les composites (blancs) ultra-résistants.",
      },
      {
        q: "Combien de temps dure un soin ?",
        a: "Pour une carie simple, comptez 30 à 45 minutes. Pour une dévitalisation, cela peut prendre 1h30 ou plusieurs séances.",
      },
    ],
  },

  // --- 10 NOUVEAUX ARTICLES ---

  {
    slug: "prix-soins-dentaires-dakar-2026-guide",
    title:
      "Prix des soins dentaires à Dakar (2026) : Guide complet et transparence",
    description:
      "Combien coûte un dentiste à Dakar ? Découvrez les tarifs moyens pour un détartrage, une dévitalisation ou une extraction et comment obtenir un devis clair.",
    date: "2026-02-15",
    category: "Conseils",
    tags: [
      "prix dentiste dakar",
      "tarif soins dentaires",
      "coût dentiste senegal",
      "devis dentaire",
    ],
    author: AUTHORS.sao,
    cover: prixSoinsCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Les soins sont-ils remboursés par les assurances ?",
        a: "La plupart des soins courants (détartrage, soins de caries) sont couverts par les IPM et assurances. Les prothèses et l'esthétique le sont selon votre contrat.",
      },
      {
        q: "Peut-on connaître le prix exact par téléphone ?",
        a: "C'est difficile sans examen. Une douleur peut venir d'une simple carie ou d'une infection nécessitant une dévitalisation. Le devis nécessite un diagnostic.",
      },
    ],
  },

  {
    slug: "urgence-dentaire-dakar-qui-appeler",
    title:
      "Urgence dentaire à Dakar : Qui appeler et quoi faire en attendant ?",
    description:
      "Douleur insupportable, dent cassée ou abcès ? Guide de survie pour gérer une urgence dentaire à Dakar avant votre rendez-vous.",
    date: "2026-02-12",
    category: "Urgences",
    tags: [
      "urgence dentaire dakar",
      "dentiste garde dakar",
      "sos dentiste",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: urgenceActionCover,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Puis-je venir sans rendez-vous pour une urgence ?",
        a: "Il est toujours préférable d'appeler avant. Nous réservons des créneaux pour les urgences afin de vous recevoir dans les meilleures conditions.",
      },
      {
        q: "Le clou de girofle est-il efficace ?",
        a: "C'est un apaisant temporaire, mais il ne soigne pas la cause. Il ne remplace pas la visite chez le dentiste.",
      },
    ],
  },

  {
    slug: "comment-choisir-meilleur-dentiste-dakar",
    title: "Comment choisir le meilleur dentiste à Dakar pour vos besoins ?",
    description:
      "Critères essentiels pour trouver un bon cabinet dentaire à Dakar : hygiène, écoute, équipements et localisation.",
    date: "2026-02-10",
    category: "Conseils",
    tags: [
      "meilleur dentiste dakar",
      "avis dentiste dakar",
      "choisir dentiste",
      "cabinet dentaire moderne",
    ],
    author: AUTHORS.sao,
    cover: choisirDentisteCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Est-ce important d'avoir un dentiste proche de chez soi ?",
        a: "Oui pour le confort, mais la qualité des soins prime. Parfois, faire quelques kilomètres de plus garantit une meilleure prise en charge.",
      },
      {
        q: "Comment vérifier la réputation d'un dentiste ?",
        a: "Les avis Google peuvent aider, mais le ressenti lors de la première consultation est le meilleur indicateur.",
      },
    ],
  },

  {
    slug: "blanchiment-dentaire-dakar-efficace-ou-danger",
    title: "Blanchiment dentaire à Dakar : Techniques efficaces vs dangers",
    description:
      "Envie d'un sourire éclatant ? Démêlez le vrai du faux sur le blanchiment dentaire au Sénégal : techniques pro vs recettes maison.",
    date: "2026-02-08",
    category: "Esthétique",
    tags: [
      "blanchiment dentaire dakar",
      "dents blanches senegal",
      "prix blanchiment",
      "danger charbon",
    ],
    author: AUTHORS.sao,
    cover: blanchimentEfficaceCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Le blanchiment abîme-t-il les dents ?",
        a: "S'il est réalisé par un professionnel avec les bons produits, non. Il peut créer une sensibilité passagère qui s'estompe vite.",
      },
      {
        q: "Combien de temps dure le résultat ?",
        a: "Entre 1 et 3 ans selon vos habitudes (consommation de café, tabac, etc.).",
      },
    ],
  },

  {
    slug: "implant-dentaire-dakar-retrouver-sourire",
    title:
      "Implant dentaire à Dakar : La solution durable pour remplacer une dent",
    description:
      "Perdre une dent n'est plus une fatalité. Découvrez comment l'implant dentaire peut vous rendre votre sourire et votre confort de mastication.",
    date: "2026-02-05",
    category: "Implantologie",
    tags: [
      "implant dentaire dakar",
      "dentier vs implant",
      "prix implant senegal",
      "chirurgie dentaire",
    ],
    author: AUTHORS.sao,
    cover: implantSourireCover,
    readingMinutes: 9,
    content: `""`,
    faq: [
      {
        q: "Est-ce que ça fait mal ?",
        a: "L'intervention se fait sous anesthésie, vous ne sentez rien. Les suites sont souvent moins douloureuses qu'une extraction.",
      },
      {
        q: "Y a-t-il des rejets ?",
        a: "Le taux de réussite est supérieur à 95%. Le rejet (allergie) est rarissime. L'échec vient souvent d'une infection ou du tabac.",
      },
    ],
  },

  {
    slug: "rage-de-dent-remede-grand-mere-dakar",
    title: "Rage de dent : Remèdes de grand-mère vs visite chez le dentiste",
    description:
      "Peut-on soigner une rage de dent avec des plantes ? Ce qui marche pour soulager et pourquoi il faut consulter un dentiste à Dakar.",
    date: "2026-02-02",
    category: "Urgences",
    tags: [
      "rage de dent",
      "douleur dentaire remède",
      "dentiste dakar",
      "soigner dent naturellement",
    ],
    author: AUTHORS.sao,
    cover: remedeRageCover,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Pourquoi la douleur est-elle plus forte la nuit ?",
        a: "En position allongée, l'afflux sanguin vers la tête augmente, ce qui accroît la pression dans la dent enflammée.",
      },
      {
        q: "Une dent dévitalisée peut-elle refaire mal ?",
        a: "Oui, si elle s'est réinfectée au bout de la racine. Une radio de contrôle est nécessaire.",
      },
    ],
  },

  {
    slug: "gencives-qui-saignent-gingivite-dakar",
    title:
      "Gencives qui saignent : Pourquoi il ne faut pas ignorer une gingivite",
    description:
      "Du sang lors du brossage ? C'est le premier signe d'une maladie des gencives. Découvrez comment traiter la gingivite à Dakar.",
    date: "2026-01-28",
    category: "Prévention",
    tags: [
      "gencives saignantes",
      "gingivite",
      "mauvaise haleine",
      "parodontite dakar",
    ],
    author: AUTHORS.sao,
    cover: gingiviteTraitementCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Quel dentifrice utiliser pour les gencives ?",
        a: "Un dentifrice spécifique peut aider, mais il ne remplace pas l'action mécanique du brossage et du détartrage.",
      },
      {
        q: "Le tabac joue-t-il un rôle ?",
        a: "Oui, le tabac masque le saignement (mauvaise vascularisation) mais accélère la destruction de l'os. C'est un ennemi redoutable pour vos dents.",
      },
    ],
  },

  {
    slug: "orthodontie-adulte-invisible-dakar-aligneurs",
    title: "Orthodontie adulte à Dakar : Des solutions invisibles existent",
    description:
      "Aligner ses dents n'est plus réservé aux ados. Découvrez les gouttières invisibles et l'orthodontie discrète pour adultes à Dakar.",
    date: "2026-01-25",
    category: "Orthodontie",
    tags: [
      "orthodontie adulte",
      "invisalign dakar",
      "aligneurs invisibles",
      "bagues dentaires",
    ],
    author: AUTHORS.sao,
    cover: orthoAdulteCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Combien de temps dure le traitement ?",
        a: "Cela varie de 6 mois pour des corrections légères à 2 ans pour des cas complexes. La moyenne est souvent autour de 12-18 mois.",
      },
      {
        q: "Peut-on mettre des bagues avec des couronnes ou implants ?",
        a: "Avec des couronnes oui. Avec des implants, c'est plus délicat car l'implant ne bouge pas. Le diagnostic orthodontique le déterminera.",
      },
    ],
  },

  {
    slug: "sante-dentaire-enfant-senegal-prevention",
    title: "Santé dentaire de l'enfant au Sénégal : Quand commencer ?",
    description:
      "Protéger les dents de vos enfants dès le plus jeune âge. Conseils pour la première visite, le brossage et l'alimentation à Dakar.",
    date: "2026-01-22",
    category: "Pédiatrie",
    tags: [
      "dentiste enfant dakar",
      "pedodontiste",
      "carie biberon",
      "brossage enfant",
    ],
    author: AUTHORS.sao,
    cover: santeEnfantCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Faut-il soigner les dents de lait puisqu'elles vont tomber ?",
        a: "ABSOLUMENT ! Une dent de lait infectée fait mal et peut abîmer le germe de la dent définitive qui pousse en dessous.",
      },
      {
        q: "Mon enfant a peur, que faire ?",
        a: "Parlez du dentiste positivement. Ne dites pas 'il ne va pas te faire mal' (l'enfant entend 'mal'). Dites 'il va compter tes dents'. Nos équipes sont formées pour rassurer les petits.",
      },
    ],
  },

  {
    slug: "detartrage-preventif-dakar-investissement",
    title: "Le détartrage préventif : Pourquoi c'est le soin le plus rentable",
    description:
      "Pourquoi faire un détartrage tous les ans ? Ce soin simple vous évite des traitements coûteux et douloureux. Explications.",
    date: "2026-01-20",
    category: "Prévention",
    tags: [
      "détartrage dakar",
      "prix détartrage",
      "prévention dentaire",
      "hygiène bucco-dentaire",
    ],
    author: AUTHORS.sao,
    cover: detartragePreventifCover,
    readingMinutes: 5,
    content: `""`,
    faq: [
      {
        q: "Est-ce que le détartrage abîme l'émail ?",
        a: "Non, absolument pas. Les inserts à ultrasons sont conçus pour décoller le tartre sans rayer la dent.",
      },
      {
        q: "À quelle fréquence faut-il le faire ?",
        a: "Pour la plupart des gens, tous les 6 mois ou tous les ans. Votre dentiste vous le dira selon votre vitesse à faire du tartre.",
      },
    ],
  },
  {
    slug: "soins-dentaires-pendant-ramadan-jeune",
    title: "Aller chez le dentiste casse-t-il le jeûne ? Ce qu'il faut savoir",
    description:
      "Anesthésie, détartrage, extraction : quels soins dentaires sont autorisés pendant le Ramadan au Sénégal ? Le point sur les avis religieux et médicaux.",
    date: "2026-02-15",
    category: "Conseils",
    tags: ["ramadan", "dentiste dakar", "soins dentaires", "jeûne"],
    author: AUTHORS.sao,
    cover: ramadanSoinsCover,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "L'anesthésie coupe-t-elle le jeûne ?",
        a: "Non, car elle n'apporte aucun nutriment au corps. Elle est purement locale.",
      },
      {
        q: "Puis-je avaler ma salive après un soin ?",
        a: "Oui, une fois la bouche rincée, avaler sa salive est naturel et n'a aucun impact sur le jeûne.",
      },
    ],
  },
  {
    slug: "mauvaise-haleine-ramadan-conseils-dakar",
    title: "Mauvaise haleine pendant le Ramadan : Causes et solutions à Dakar",
    description:
      "Bouche sèche, jeûne et mauvaise haleine (halitose) : nos astuces pour garder une haleine fraîche toute la journée pendant le Ramadan.",
    date: "2026-02-14",
    category: "Conseils",
    tags: ["mauvaise haleine", "ramadan", "conseils dentiste", "halitose"],
    author: AUTHORS.sao,
    cover: ramadanHaleineCover,
    readingMinutes: 5,
    content: `""`,
    faq: [
      {
        q: "Le bain de bouche est-il autorisé ?",
        a: "Oui, tant qu'il est recraché totalement. Attention aux bains de bouche alcoolisés (à éviter). Préférez ceux sans alcool.",
      },
    ],
  },
  {
    slug: "brosser-dents-pendant-ramadan-autorise",
    title:
      "Peut-on se brosser les dents pendant le jeûne ? La réponse du dentiste",
    description:
      "Dentifrice, Siwak ou brosse à sec ? Le point sur l'hygiène bucco-dentaire autorisée pendant les heures de jeûne.",
    date: "2026-02-13",
    category: "Prévention",
    tags: ["brossage dents", "ramadan", "hygiène bucco-dentaire"],
    author: AUTHORS.sao,
    cover: ramadanBrossageCover,
    readingMinutes: 4,
    content: `""`,
    faq: [
      {
        q: "Le goût du dentifrice rompt-il le jeûne ?",
        a: "Non, le goût dans la bouche ne rompt pas le jeûne tant que la matière n'est pas avalée.",
      },
    ],
  },
  {
    slug: "quand-aller-dentiste-pendant-ramadan",
    title:
      "Quel est le meilleur moment pour aller chez le dentiste pendant le Ramadan ?",
    description:
      "Matin ou soir ? Comment organiser ses rendez-vous dentaires pendant le mois de Ramadan pour éviter la fatigue et l'hypoglycémie.",
    date: "2026-02-12",
    category: "Conseils",
    tags: ["rendez-vous dentiste", "horaires ramadan", "dakar"],
    author: AUTHORS.sao,
    cover: ramadanRdvCover,
    readingMinutes: 4,
    content: `""`,
    faq: [
      {
        q: "Faites-vous des nocturnes pendant le Ramadan ?",
        a: "Contactez le secrétariat pour connaître nos horaires aménagés spécial Ramadan.",
      },
    ],
  },
  {
    slug: "urgence-dentaire-rompre-jeune-ramadan",
    title: "Urgence dentaire : Faut-il rompre le jeûne pour se soigner ?",
    description:
      "Rage de dent insupportable, antibiotiques, antidouleurs... Dans quels cas l'urgence dentaire autorise-t-elle à rompre le jeûne ?",
    date: "2026-02-10",
    category: "Urgences",
    tags: ["urgence dentaire", "douleur", "ramadan"],
    author: AUTHORS.sao,
    cover: ramadanUrgenceCover,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Une extraction dentaire oblige-t-elle à rompre le jeûne ?",
        a: "Non, pas l'acte en lui-même. Mais si vous avez besoin d'antidouleurs juste après, il faudra peut-être rompre le jeûne ce jour-là.",
      },
    ],
  },
  // ─── 5 nouveaux articles SEO – Avril 2026 ──────────────────────────────────
  {
    slug: "couronne-dentaire-dakar-prix-pose-duree-vie",
    title: "Couronne dentaire à Dakar : prix, pose et durée de vie (guide 2026)",
    description:
      "Tout savoir sur la couronne dentaire à Dakar : quand en poser une, types (zircone, métal-céramique, tout-céramique), prix réels et durée de vie. Guide complet par la Clinique DABIA.",
    date: "2026-04-26",
    category: "Conseils",
    tags: [
      "couronne dentaire dakar",
      "couronne dentaire prix",
      "prothèse dentaire fixe",
      "dentiste dakar",
      "zircone dakar",
    ],
    author: AUTHORS.sao,
    cover: couronneDentaireCover,
    readingMinutes: 10,
    content: `""`,
    faq: [
      {
        q: "Combien de rendez-vous faut-il pour poser une couronne ?",
        a: "En général 2 à 3 rendez-vous : préparation + empreinte, pose du temporaire, puis pose définitive une à deux semaines plus tard.",
      },
      {
        q: "La pose d'une couronne est-elle douloureuse ?",
        a: "Non, la préparation se fait sous anesthésie locale. Des sensibilités légères peuvent apparaître les premiers jours, puis disparaissent.",
      },
      {
        q: "L'assurance ou l'IPM rembourse-t-elle les couronnes au Sénégal ?",
        a: "Certaines mutuelles et IPM couvrent une partie des prothèses fixes. Demandez une entente préalable à votre assureur avant la pose.",
      },
      {
        q: "Peut-on poser une couronne sur une dent dévitalisée ?",
        a: "Oui, c'est même recommandé. La dévitalisation fragilise la dent ; la couronne la protège des fractures.",
      },
    ],
  },
  {
    slug: "dents-sensibles-froid-chaud-dakar-causes-traitements",
    title: "Dents sensibles au froid et au chaud à Dakar : causes et traitements efficaces",
    description:
      "Vous souffrez de dents sensibles à Dakar ? Découvrez les causes (dentine exposée, gencive rétractée, bruxisme) et les solutions pour retrouver le plaisir de manger sans douleur.",
    date: "2026-04-25",
    category: "Prévention",
    tags: [
      "dents sensibles",
      "sensibilité dentaire dakar",
      "dentine exposée",
      "dentiste dakar",
      "gencive rétractée",
    ],
    author: AUTHORS.sao,
    cover: dentsSensiblesCover,
    readingMinutes: 8,
    content: `""`,
    faq: [
      {
        q: "Le dentifrice pour dents sensibles est-il efficace ?",
        a: "Oui, à condition de l'utiliser régulièrement pendant au moins 3 à 4 semaines. Il ne traite pas la cause mais obture les tubules et réduit la douleur.",
      },
      {
        q: "Les dents sensibles guérissent-elles seules ?",
        a: "Rarement. Si la cause persiste (bruxisme, acidité, brossage inadapté), la sensibilité s'aggrave. Un traitement adapté est nécessaire.",
      },
      {
        q: "Le blanchiment dentaire aggrave-t-il les dents sensibles ?",
        a: "Le blanchiment peut provoquer une sensibilité transitoire. Nous déconseillons les blanchiments chez les patients avec une sensibilité sévère non traitée.",
      },
    ],
  },
  {
    slug: "tartre-plaque-dentaire-dakar-comment-eliminer",
    title: "Tartre et plaque dentaire à Dakar : différences, risques et comment les éliminer",
    description:
      "Plaque dentaire ou tartre : quelle différence ? Comment se forment-ils et comment les éliminer efficacement à Dakar ? Guide complet sur la prévention et le détartrage professionnel.",
    date: "2026-04-24",
    category: "Prévention",
    tags: [
      "tartre dent dakar",
      "plaque dentaire",
      "détartrage dakar",
      "hygiène dentaire",
      "dentiste dakar",
      "détartrage dentaire dakar prix",
    ],
    author: AUTHORS.sao,
    cover: tartrePlaqueCover,
    readingMinutes: 9,
    content: `""`,
    faq: [
      {
        q: "Peut-on enlever le tartre soi-même à la maison ?",
        a: "Non. Le tartre est minéralisé et seul un instrument professionnel (ultrason ou curette) peut le retirer sans abîmer l'émail ou les gencives.",
      },
      {
        q: "Le bicarbonate de soude enlève-t-il le tartre ?",
        a: "Il peut atténuer certaines taches de surface mais ne dissout pas le tartre. Un usage abusif abrase l'émail et peut aggraver la situation.",
      },
      {
        q: "Combien de temps dure un détartrage ?",
        a: "Entre 30 et 60 minutes selon la quantité de tartre. La séance est généralement indolore ; une anesthésie topique peut être appliquée si nécessaire.",
      },
      {
        q: "Le détartrage affaiblit-il les dents ?",
        a: "Non, c'est un mythe répandu. Le détartrage retire uniquement le tartre sans toucher à l'émail sain. Vos dents sont plus propres, pas plus fragiles.",
      },
    ],
  },
  {
    slug: "dent-cassee-dakar-urgence-quoi-faire-solutions",
    title: "Dent cassée à Dakar : quoi faire en urgence et quelles sont les solutions ?",
    description:
      "Vous venez de vous casser une dent à Dakar ? Gestes d'urgence immédiats, ce qu'il faut éviter, et solutions de reconstruction (composite, couronne, implant) expliqués par la Clinique DABIA.",
    date: "2026-04-23",
    category: "Urgences",
    tags: [
      "dent cassée dakar",
      "urgence dentaire dakar",
      "fracture dentaire",
      "dentiste dakar",
      "douleur dentaire",
    ],
    author: AUTHORS.sao,
    cover: dentCasseeCover,
    readingMinutes: 7,
    content: `""`,
    faq: [
      {
        q: "Une dent cassée sans douleur est-elle une urgence ?",
        a: "Pas nécessairement une urgence absolue, mais consultez dans les 48h. Une fracture silencieuse peut cacher une atteinte de la racine ou permettre à une carie de progresser rapidement.",
      },
      {
        q: "Peut-on coller soi-même un éclat de dent ?",
        a: "Non. Les colles grand public ne résistent pas aux forces de mastication et peuvent blesser la gencive. Seul un composite dentaire collé par un praticien est fiable.",
      },
      {
        q: "Une dent dévitalisée casse-t-elle plus facilement ?",
        a: "Oui. Sans apport sanguin et nerveux, la dent devient plus fragile. C'est pourquoi une couronne est recommandée après toute dévitalisation.",
      },
      {
        q: "Le prix d'une urgence dent cassée à Dakar ?",
        a: "La consultation d'urgence est généralement comprise entre 10 000 et 20 000 FCFA. Le coût du traitement dépend de la solution choisie (composite, couronne, implant).",
      },
    ],
  },
  {
    slug: "parodontite-dakar-symptomes-traitement-prevention",
    title: "Parodontite à Dakar : symptômes, traitement et prévention du déchaussement des dents",
    description:
      "La parodontite est la principale cause de perte de dents après 40 ans. Découvrez les signes d'alerte, les traitements disponibles à Dakar et comment stopper le déchaussement dentaire.",
    date: "2026-04-22",
    category: "Prévention",
    tags: [
      "parodontite dakar",
      "déchaussement des dents",
      "gencives dakar",
      "parodontologie dakar",
      "dentiste dakar",
      "gingivite",
    ],
    author: AUTHORS.sao,
    cover: parodontiteCover,
    readingMinutes: 11,
    content: `""`,
    faq: [
      {
        q: "Peut-on guérir complètement d'une parodontite ?",
        a: "On ne guérit pas à proprement parler : l'os perdu ne repousse pas totalement. Mais un traitement adapté suivi d'une maintenance régulière stoppe la progression et stabilise la maladie.",
      },
      {
        q: "Quel est le prix d'un traitement parodontal à Dakar ?",
        a: "Le détartrage-surfaçage radiculaire complet coûte généralement entre 60 000 et 150 000 FCFA selon la sévérité et le nombre de séances. Un devis vous est remis après le bilan.",
      },
      {
        q: "La parodontite est-elle contagieuse ?",
        a: "Les bactéries parodontopathogènes peuvent se transmettre dans les couples via la salive. Cela ne signifie pas que la maladie se déclenche automatiquement chez le partenaire.",
      },
      {
        q: "Peut-on poser des implants avec une parodontite ?",
        a: "Non. La parodontite active doit être traitée et stabilisée avant toute pose d'implant. Un implant posé dans un contexte parodontal non maîtrisé risque de développer une péri-implantite.",
      },
    ],
  },

// === NOUVEAUX ARTICLES SEO — JUIN 2026 ===
// Ces 5 articles sont insérés à la fin du tableau POSTS dans posts.js

  // Article 1 : Greffe osseuse
  {
    slug: "greffe-osseuse-dentaire-dakar-prix-deroule-2026",
    title:
      "Greffe osseuse dentaire à Dakar : prix, déroulement et indications en 2026",
    description:
      "Vous avez besoin d'une greffe osseuse avant un implant dentaire à Dakar ? Prix, étapes, types de greffe, suites et délais expliqués clairement par la Clinique DABIA.",
    date: "2026-06-24",
    category: "Soins",
    tags: [
      "greffe osseuse",
      "implant dentaire",
      "greffe sinus",
      "regeneration osseuse",
      "prix greffe dentaire dakar",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: implantCoutCover,
    readingMinutes: 6,
    content: `""`,
    faq: [
      {
        q: "Une greffe osseuse est-elle douloureuse ?",
        a: "L'intervention se fait sous anesthésie locale et n'est pas douloureuse. Les suites sont une gêne modérée, bien contrôlée par des antalgiques prescrits.",
      },
      {
        q: "Combien de temps entre la greffe et l'implant ?",
        a: "En moyenne 4 à 9 mois selon le type de greffe. Le CBCT de contrôle confirme la consolidation avant la pose de l'implant.",
      },
      {
        q: "La greffe est-elle toujours nécessaire avant un implant ?",
        a: "Non. Si le volume osseux est suffisant (vérifié par CBCT), l'implant peut être posé sans greffe.",
      },
    ],
  },

  // Article 2 : Sensibilité dentaire
  {
    slug: "sensibilite-dentaire-causes-traitement-dakar-2026",
    title:
      "Dents sensibles à Dakar : causes, traitements et solutions durables en 2026",
    description:
      "Vos dents sont sensibles au chaud, au froid ou au sucré ? Découvrez les causes, les traitements disponibles à Dakar et les gestes simples pour retrouver du confort au quotidien.",
    date: "2026-06-24",
    category: "Prévention",
    tags: [
      "sensibilité dentaire",
      "dents sensibles",
      "email dentaire",
      "recession gingivale",
      "dentifrice dents sensibles",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: dentsSensiblesCover,
    readingMinutes: 5,
    content: `""`,
    faq: [
      {
        q: "Les dents sensibles annoncent-elles une carie ?",
        a: "Pas toujours. Cela peut être dû à l'usure de l'émail ou une récession. Mais une sensibilité qui s'aggrave ou devient spontanée nécessite une consultation.",
      },
      {
        q: "Combien de temps dure la sensibilité après un détartrage ?",
        a: "24 à 48 heures. Au-delà, un vernis fluoré peut être appliqué pour la soulager.",
      },
    ],
  },

  // Article 3 : Bridge dentaire
  {
    slug: "bridge-dentaire-prix-dakar-indications-2026",
    title:
      "Bridge dentaire à Dakar : prix, indications et alternatives en 2026",
    description:
      "Il vous manque une ou plusieurs dents ? Bridge traditionnel, cantilever ou sur implant : prix à Dakar, indications, durée de vie et comparaison avec les alternatives.",
    date: "2026-06-24",
    category: "Soins",
    tags: [
      "bridge dentaire",
      "prix bridge dakar",
      "remplacer dent",
      "prothese dentaire",
      "implant dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: bridgeImplantCover,
    readingMinutes: 5,
    content: `""`,
    faq: [
      {
        q: "Combien de temps dure un bridge ?",
        a: "10 à 15 ans avec une bonne hygiène et des contrôles réguliers.",
      },
      {
        q: "Le bridge est-il plus économique que l'implant ?",
        a: "À court terme oui. Mais l'implant préserve l'os et dure plus longtemps. Sur 20 ans, l'implant peut être plus économique.",
      },
    ],
  },

  // Article 4 : Mutuelle / IPM dentiste Dakar
  {
    slug: "dentiste-mutuelle-ipm-dakar-prise-en-charge-2026",
    title:
      "Dentiste et mutuelle à Dakar : comment être bien remboursé avec l'IPM en 2026",
    description:
      "Vous avez une mutuelle ou une IPM ? Découvrez comment optimiser le remboursement de vos soins dentaires à Dakar : démarches, documents nécessaires, plafonds et astuces pratiques.",
    date: "2026-06-24",
    category: "Conseils",
    tags: [
      "mutuelle dentaire dakar",
      "ipm dentiste",
      "assurance dentaire senegal",
      "remboursement soins dentaires",
      "dentiste conventionné dakar",
      "devis dentaire",
    ],
    author: AUTHORS.sao,
    cover: devisDentaireCover,
    readingMinutes: 5,
    content: `""`,
    faq: [
      {
        q: "La Clinique DABIA est-elle conventionnée avec mon IPM ?",
        a: "Nous travaillons avec la plupart des IPM et mutuelles au Sénégal. Appelez-nous pour vérifier votre convention ou venez avec vos documents pour qu'on prépare votre dossier.",
      },
      {
        q: "Faut-il un devis avant les soins ?",
        a: "Oui, c'est obligatoire pour les soins importants (couronne, implant, prothèse). Nous vous remettons un devis détaillé avec les codes CCAM.",
      },
      {
        q: "Combien de temps pour être remboursé ?",
        a: "Selon l'IPM, le délai varie de 2 semaines à 2 mois après soumission du dossier complet.",
      },
    ],
  },

  // Article 5 : Première consultation
  {
    slug: "premiere-consultation-dentiste-dakar-deroulement-2026",
    title:
      "Première consultation chez le dentiste à Dakar : à quoi s'attendre en 2026",
    description:
      "Vous avez votre premier rendez-vous chez le dentiste à Dakar ? Déroulement complet : accueil, examen, radiographies, plan de traitement et devis expliqués pas à pas par la Clinique DABIA.",
    date: "2026-06-24",
    category: "Conseils",
    tags: [
      "consultation dentaire",
      "premiere visite dentiste",
      "bilan dentaire dakar",
      "devis dentaire",
      "radio dentaire",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: choisirDentisteCover,
    readingMinutes: 4,
    content: `""`,
    faq: [
      {
        q: "La première consultation est-elle payante ?",
        a: "Oui, comme toute consultation médicale. Le tarif inclut l'examen clinique complet, le diagnostic, le plan de traitement et le devis détaillé.",
      },
      {
        q: "Dois-je apporter quelque chose ?",
        a: "Vos anciennes radios dentaires, ordonnances en cours, et votre carte de mutuelle/IPM si vous en avez une. Et vos questions !",
      },
      {
        q: "Peut-on me soigner le jour même ?",
        a: "Pour une urgence (douleur, abcès), oui. Pour un bilan de routine, les soins seront planifiés sur des rendez-vous ultérieurs.",
      },
    ],
  }

];
