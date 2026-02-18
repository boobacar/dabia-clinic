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
import detartragePrixCover from "../assets/blog/detartrage_prix.png";
import protheseAmovibleCover from "../assets/blog/prothese_amovible.png";
import radioPanoramiqueCover from "../assets/blog/radio_panoramique_prix.png";
import devisDentaireCover from "../assets/blog/devis_dentaire.png";
import soinCariePrixCover from "../assets/blog/soin_carie_prix.png";

// Nouveaux imports pour les 10 articles ajoutés
import prixSoinsCover from "../assets/blog/prix_soins_dentaires_dakar.png";
import urgenceActionCover from "../assets/blog/urgence_dentaire_action.png";
// TODO: Restore correct paths after manually copying images
import choisirDentisteCover from "../assets/blog/choisir_bon_dentiste_dakar.png";
import blanchimentEfficaceCover from "../assets/blog/blanchiment_efficace_senegal.png";
import implantSourireCover from "../assets/blog/implant_retrouver_sourire.png";
import remedeRageCover from "../assets/blog/remede_rage_dent.png";
import gingiviteTraitementCover from "../assets/blog/gingivite_traitement.png";
import orthoAdulteCover from "../assets/blog/orthodontie_adulte_choix.png";
import santeEnfantCover from "../assets/blog/sante_dentaire_enfants_senegal.png";
import detartragePreventifCover from "../assets/blog/detartrage_preventif.png";

// Nouveaux imports pour les articles GSC (Jan 2026)
import guideTarifsCover from "../assets/blog/guide_tarifs_2025.png";
import appareilPrixCover from "../assets/blog/appareil_dentaire_prix.png";
import implantCoutCover from "../assets/blog/implant_dentaire_cout.png";
import blanchimentEclatCover from "../assets/blog/blanchiment_dentaire_eclat.png";
// import cliniqueDabiaCover from "../assets/blog/clinique_dabia_expertise.png"; // Replaced by existing asset
import cliniqueDabiaCover from "../assets/dabia.webp";

// Nouveaux imports pour les articles pédiatriques existants
import scellantsCover from "../assets/blog/scellants_sillons_enfant.png";
import premierRdvCover from "../assets/blog/dentiste_enfant_premier_rdv.png";

// Nouveaux imports pour la stratégie SEO "Dentiste Dakar" (Jan 2026 - V2)
import protheseFixeAmovibleCover from "../assets/blog/prothese_fixe_vs_amovible.png";
import appareilGuideCover from "../assets/blog/appareil_dentaire_guide.png";
import cliniqueExpertCover from "../assets/blog/clinique_dabia_expert.png";

// Nouveaux imports pour les articles Ramadan (2026)
import ramadanSoinsCover from "../assets/blog/ramadan_soins.png";
import ramadanHaleineCover from "../assets/blog/ramadan_haleine.png";
import ramadanBrossageCover from "../assets/blog/ramadan_brossage.png";
import ramadanRdvCover from "../assets/blog/ramadan_rdv.png";
import ramadanUrgenceCover from "../assets/blog/ramadan_urgence.png";

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
    slug: "dentiste-dakar-prix-consultation-2026",
    title: "Dentiste Dakar : Prix Consultation et Soins (Guide 2026)",
    description:
      "Combien coûte un dentiste à Dakar ? Consultation, détartrage, urgence, soin de carie et devis: repères de prix et conseils pour bien planifier votre budget.",
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
    content: `Vous cherchez un **dentiste à Dakar** et vous voulez connaître les tarifs avant de prendre rendez-vous ? C'est normal. Voici un guide clair pour estimer votre budget et éviter les mauvaises surprises.

## Prix indicatifs à Dakar (selon le cas)
- **Consultation** : selon l'examen clinique et les besoins d'imagerie
- **Détartrage** : selon la quantité de tartre et l'état gingival
- **Soin de carie** : dépend de la profondeur et du matériau utilisé
- **Urgence dentaire** : variable selon la cause (douleur, infection, fracture)

> Un tarif précis ne peut être confirmé qu'après examen. À la Clinique DABIA, un plan de traitement clair est expliqué avant toute intervention.

## Pourquoi les prix varient ?
1. Complexité du cas
2. Matériaux utilisés
3. Besoin d'imagerie (radio, scanner)
4. Nombre de séances nécessaires

## Comment payer moins cher sur le long terme
- Faire un contrôle régulier
- Traiter tôt une carie ou une gingivite
- Demander un plan de soins par étapes
- Vérifier votre prise en charge IPM/assurance

Pour une estimation adaptée à votre situation, le plus simple est de demander une consultation et un devis personnalisé.`,
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
    content: `Trouver une **clinique dentaire à Dakar** ne se résume pas au prix. Le bon choix combine sécurité, qualité des soins et confiance.

## 5 critères essentiels
1. **Compétence médicale** : équipe formée, expérience documentée
2. **Plateau technique** : imagerie moderne, scanner intra-oral, protocoles à jour
3. **Hygiène et stérilisation** : normes strictes, traçabilité
4. **Transparence** : devis clair, options expliquées, pas de surprise
5. **Suivi patient** : conseils post-soins, contrôles, disponibilité en cas de gêne

## Signaux de qualité d'une bonne clinique
- Explications pédagogiques avant de commencer
- Plan de traitement par étapes
- Temps d'écoute réel pendant la consultation
- Communication simple (téléphone, WhatsApp, formulaire)

## Erreurs fréquentes à éviter
- Choisir uniquement sur le tarif affiché
- Reporter un soin nécessaire
- Ignorer les avis et la qualité du suivi

Vous pouvez commencer par une consultation bilan, poser vos questions, puis comparer la clarté des réponses reçues.`,
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
    content: `Une **urgence dentaire à Dakar** peut vite devenir très douloureuse. Voici les actions à faire tout de suite en attendant votre prise en charge.

## Réflexes immédiats
- Prenez un antalgique compatible (évitez l'automédication risquée)
- Rincez doucement à l'eau tiède salée
- Évitez de mâcher du côté douloureux
- Contactez rapidement votre clinique

## Cas fréquents
### 1) Rage de dent
Douleur pulsatile, parfois insomniante. Une consultation rapide évite l'aggravation.

### 2) Gonflement / infection
Si gonflement important ou fièvre, priorité élevée.

### 3) Dent cassée
Conservez le fragment si possible et consultez sans tarder.

## Quand aller aux urgences hospitalières ?
- Difficulté à respirer/avaler
- Fièvre persistante avec altération de l'état général
- Gonflement qui s'étend vers l'œil ou le cou

En cas de doute, appelez immédiatement. Un triage téléphonique permet de vous orienter vers la bonne prise en charge.`,
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
    content: `Perdre une ou plusieurs dents est une épreuve, mais les solutions pour retrouver le sourire sont nombreuses. À Dakar, on distingue principalement deux familles de prothèses : les **fixes** (qu'on ne retire pas) et les **amovibles** (qu'on retire pour nettoyer).
    
## 1. La Prothèse Fixe (Couronnes et Bridges)
C'est la solution la plus confortable et la plus esthétique. Elle imite parfaitement la sensation des dents naturelles.

### La Couronne
Elle vient "coiffer" une dent abîmée ou dévitalisée pour la renforcer.
- **Prix moyen au Sénégal** : Entre 150 000 et 350 000 FCFA selon le matériau (Céramo-métal ou Zircone).
- **Durée de vie** : 10 à 20 ans avec une bonne hygiène.

### Le Bridge
Il remplace une dent manquante en prenant appui sur les dents voisines.
- **Avantage** : fixe et solide.
- **Inconvénient** : nécessite de tailler les dents saines à côté.
- **Prix** : Multipliez le prix d'une couronne par le nombre d'éléments (généralement 3 pour remplacer 1 dent).

## 2. La Prothèse Amovible (Le "Dentier")
C'est la solution la plus économique, souvent utilisée quand il manque beaucoup de dents.

### Partielle (stellite ou résine)
Elle remplace quelques dents et tient grâce à des crochets.
- **Prix moyen** : À partir de 75 000 - 150 000 FCFA selon le nombre de dents.
- **Avantage** : Rapide à réaliser et peu coûteux.

### Complète
Quand il n'y a plus de dents. Elle tient par effet ventouse.
- **Prix** : Sur devis, généralement plus abordable que les implants.

## 3. Le "Must" : La Prothèse sur Implants
C'est une prothèse fixe (couronne ou bridge) qui repose sur une racine artificielle (l'implant) au lieu des dents voisines.
- **Le top du confort** : On ne touche pas aux autres dents.
- **Prix** : Comptez le prix de l'implant + le prix de la couronne. (Voir notre article sur les implants).

> **Conseil du Dr SAO** : "Le choix dépend de votre budget, mais aussi de l'état de votre os et de vos autres dents. Ne restez pas avec un trou : les dents voisines vont bouger et cela coûtera plus cher à réparer plus tard !"`,
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
    content: `L'expression "appareil dentaire" peut désigner deux choses très différentes : les **bagues** pour aligner les dents (orthodontie) ou les **dentiers** pour remplacer les dents (prothèse). Voici un guide clair des prix pratiqués à Dakar en 2026 pour vous y retrouver.

## 1. Appareil pour aligner les dents (Orthodontie)
C'est le traitement pour avoir un sourire droit, pour enfants et adultes.

### Les Bagues Métalliques
- **Description** : Des petits carrés en métal collés sur les dents.
- **Prix moyen** : Le traitement complet coûte souvent entre 600 000 et 1 200 000 FCFA, étalé sur 1 ou 2 ans.
- **Efficacité** : Maximale.

### Les Aligneurs Invisibles (type Invisalign)
- **Description** : Des gouttières transparentes amovibles.
- **Prix moyen** : À partir de 1 500 000 FCFA. C'est plus cher car c'est une technologie numérique importée.

## 2. Appareil pour remplacer les dents (Prothèse amovible)
C'est ce qu'on appelle communément le dentier.

### L'appareil partiel
- **Pour qui ?** Il vous manque quelques dents.
- **Prix** : Dépend du nombre de dents. Comptez environ 15 000 à 25 000 FCFA par dent remplacée sur une base résine (prix indicatif variable selon les cabinets).

### L'appareil complet
- **Pour qui ?** Toutes les dents de l'arcade sont absentes.
- **Prix** : Un complet haut ou bas coûte généralement entre 150 000 et 300 000 FCFA selon la qualité des dents choisies et de la résine.

## Comment obtenir un prix exact ?
Il est impossible de donner un prix ferme par téléphone.
1.  Prenez rendez-vous pour une **consultation**.
2.  Le dentiste examine votre bouche (nombre de dents, état des gencives).
3.  Il vous remet un **devis écrit** et détaillé.

> À la Clinique DABIA, nous proposons des facilités de paiement pour les traitements longs comme l'orthodontie.`,
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
    content: `Si vous cherchez un **dentiste de confiance à Dakar**, la Clinique Dentaire DABIA est devenue une référence pour la qualité de ses soins et son approche humaine. Située stratégiquement pour être accessible depuis **Liberté 6**, **Sicap Foire** et les **Parcelles Assainies**, nous accueillons patients locaux et expatriés.

## Pourquoi nous choisir ?

### 1. Une technologie de pointe
Nous ne faisons pas de compromis sur le diagnostic.
- **Radio Panoramique & 3D** sur place : Pas besoin de courir dans un centre de radiologie.
- **Scanner Intra-oral** : Fini la pâte à empreinte qui donne la nausée ! Vos dents sont scannées en 3D.

### 2. Transparence totale sur les tarifs
C'est souvent le point noir des soins dentaires. Chez DABIA :
- Pas de "prix à la tête du client".
- Un **devis clair** est remis avant chaque soin coûteux.
- Nous vous expliquons la différence entre les options (ex: couronne métal vs zircone) pour que vous choisissiez selon votre budget.

### 3. Hygiène irréprochable
Nous suivons les normes internationales de stérilisation (autoclave classe B, instruments sous sachets). Votre sécurité est notre priorité absolue.

## Nos spécialités
- **Implantologie** : Remplacer vos dents durablement.
- **Esthétique** : Facettes et blanchiment pour un sourire de star.
- **Orthodontie** : Pour aligner les dents des enfants et des adultes.
- **Urgences** : Nous gardons des créneaux pour vous soulager rapidement.

> **L'avis de nos patients** : "Enfin un dentiste qui prend le temps d'expliquer et qui ne fait pas mal !"
> Venez vérifier par vous-même. Prenez rendez-vous en ligne en quelques clics.`,
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
      "Guide des Tarifs Dentaires à Dakar (2025) : transparence et juste prix",
    description:
      "Combien coûte un détartrage, une extraction ou une consultation à Dakar ? Guide complet des tarifs moyens pratiqués et conseils pour votre budget santé.",
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
    content: `La question du **prix** est souvent la première que l’on se pose avant d'aller chez le dentiste. Combien coûte un détartrage ? Quel est le tarif d'une couronne ? À Dakar, les prix peuvent varier, mais la transparence est essentielle pour établir une relation de confiance.

## Tarifs moyens observés à Dakar (2025)
Voici une fourchette de prix indicative pour les soins courants à Dakar (ces tarifs peuvent varier selon la complexité du cas) :

- **Consultation simple** : entre 10 000 et 20 000 FCFA.
- **Détartrage et polissage** : entre 25 000 et 40 000 FCFA.
- **Extraction dentaire simple** : à partir de 20 000 FCFA.
- **Plombage (Composite)** : entre 25 000 et 45 000 FCFA selon la taille.
- **Dévitalisation (Traitement de racine)** : de 40 000 à 90 000 FCFA selon la dent (incisive vs molaire).

## Pourquoi les prix varient-ils ?
1. **La technologie utilisée** : L'utilisation de radios numériques, de scanners 3D ou de lasers a un coût, mais garantit un diagnostic plus précis et des soins moins douloureux.
2. **La qualité des matériaux** : Entre un composite standard et un composite esthétique haut de gamme, ou entre une couronne métal et une couronne Zircone, le prix diffère logiquement.
3. **L'expertise du praticien** : La formation continue et la spécialisation (orthodontie, implantologie) sont des investissements au service de votre santé.

## Comment maîtriser son budget dentaire ?
- **Demandez toujours un devis clair** : Avant tout soin onéreux (prothèse, implant), votre dentiste doit vous fournir un devis détaillé.
- **N'attendez pas l'urgence** : Un petit soin de carie coûte 3 à 4 fois moins cher qu'une dévitalisation avec couronne.
- **La prévention est rentable** : Un détartrage annuel à 30 000 FCFA évite souvent des maladies des gencives qui coûtent des centaines de milliers de francs à traiter plus tard.

> À la **Clinique DABIA**, nous nous engageons sur la **transparence**. Un devis vous est remis avant le début des soins, sans surprise. N'hésitez pas à nous demander le détail de nos honoraires.`,
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
    content: `Avoir un sourire aligné est un atout charme et santé indéniable. Mais quel est le **prix d'un appareil dentaire à Dakar** ? C'est une question fréquente de nos patients, qu'il s'agisse de parents pour leurs enfants ou d'adultes souhaitant améliorer leur sourire.

## Les différents types d'appareils et leurs coûts
Le budget dépend de la technique choisie et de la durée du traitement.

### 1. Les bagues métalliques (Le classique)
C'est la solution la plus économique et très efficace.
*   **Budget estimatif** : Souvent entre 600 000 et 1 200 000 FCFA pour un traitement complet (payables souvent par semestre ou trimestre).
*   **Pour qui ?** Les adolescents principalement, mais aussi les adultes qui privilégient l'efficacité au coût.

### 2. Les bagues céramiques (Le discret)
Plus discrètes, elles se fondent avec la couleur des dents.
*   **Budget** : Comptez environ 20% à 30% de plus que le métal.
*   **Avantage** : Esthétique soignée tout en gardant la mécanique éprouvée des bagues.

### 3. Les aligneurs invisibles (Type Invisalign)
La révolution pour les adultes ! Des gouttières transparentes amovibles.
*   **Budget** : Variable selon le nombre de gouttières, souvent à partir de 1 500 000 FCFA et jusqu'à 2 500 000 FCFA+ pour les cas complexes.
*   **Avantage** : Invisible, confortable, hygiène facilitée.

## Ce qui est inclus dans le prix
Lorsqu'on vous annonce un tarif, vérifiez qu'il comprend :
- La pose de l'appareil.
- Les rendez-vous de suivi mensuels (activations).
- La dépose en fin de traitement.
- La **contention** (le fil collé derrière les dents pour maintenir le résultat). C'est crucial pour ne pas que les dents rebougent !

## Peut-on payer en plusieurs fois ?
Oui, c'est la norme en orthodontie. Contrairement à un soin unique, l'orthodontie dure de 6 à 24 mois.
À la Clinique DABIA, nous proposons des **échéanciers de paiement** : un acompte initial pour le matériel, puis des mensualités ou trimestrialités adaptées à votre budget.

> **Conseil de pro** : Ne choisissez pas votre orthodontiste uniquement sur le prix. La réussite du traitement dépend du suivi rigoureux et de l'expérience du praticien. Un traitement "pas cher" mais raté coûtera beaucoup plus cher à reprendre.`,
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
    content: `Perdre une dent peut affecter votre sourire, mais aussi votre capacité à mâcher et la santé de votre mâchoire. L'**implant dentaire** est aujourd'hui la solution de référence pour remplacer une racine naturelle. Mais quel est le **tarif d'un implant dentaire à Dakar** ? Décryptage.

## Qu'est-ce qu'un implant dentaire ?
C'est une petite vis en titane (ou zircone) insérée dans l'os de la mâchoire, sur laquelle on vient fixer une couronne. C'est comme une "racine artificielle".

## Combien ça coûte à Dakar ?
Le prix d'un implant "complet" (Implant + Pilier + Couronne) varie généralement entre **400 000 FCFA et 800 000 FCFA** par dent au Sénégal.
Ce tarif comprend :
1.  **La phase chirurgicale** : Pose de l'implant dans l'os.
2.  **La phase prothétique** : Fabrication et pose de la couronne (la dent visible).

Attention aux prix d'appel trop bas : vérifiez la marque de l'implant (les marques reconnues mondialement offrent des pièces détachées disponibles à vie) et la qualité de la couronne (Céramo-métal vs Zircone).

## Pourquoi est-ce si coûteux ?
- **Matériel de haute technologie** : Le titane médical est onéreux et biocompatible.
- **Stérilité absolue** : La pose demande un bloc ou une salle dédiée avec un niveau d'asepsie chirurgicale.
- **Expertise** : C'est un acte chirurgical qui demande une formation avancée.

## Les étapes du traitement à la Clinique DABIA
1.  **Bilan 3D (Scanner/CBCT)** : Indispensable pour vérifier le volume osseux.
2.  **Pose de l'implant** : Intervention sous anesthésie locale, totalement indolore. Durée : environ 30-45 minutes.
3.  **Cicatrisation (Ostéointégration)** : On attend 2 à 4 mois que l'os "soude" l'implant.
4.  **Pose de la couronne** : Une fois solide, on visse la nouvelle dent.

## Est-ce remboursé ?
Les implants sont considérés comme du "hors nomenclature" par la plupart des IPM et assurances classiques au Sénégal. Cependant, certaines assurances internationales ou mutuelles haut de gamme proposent des forfaits annuels pour l'implantologie.

> Retrouvez le plaisir de croquer la vie à pleines dents. L'implant est un investissement durable pour votre santé et votre confiance en vous.`,
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
    content: `Le thé, le café, le tabac ou simplement le temps... nos dents ont tendance à jaunir. Vous cherchez un **blanchiment dentaire à Dakar** ? Voici ce qu'il faut savoir pour éclaircir votre sourire sans danger.

## Pourquoi faire un blanchiment chez le dentiste ?
On voit beaucoup de "bars à sourire" ou de produits miracles sur Internet (charbon, kits UV...). Attention !
- **Sécurité** : Le dentiste protège vos gencives. Les produits non contrôlés peuvent causer des brûlures chimiques graves.
- **Efficacité** : Les produits professionnels sont plus concentrés et agissent en profondeur, là où les dentifrices "blancheur" ne font que rayer la surface.
- **Diagnostic préalable** : On ne blanchit jamais sur des caries ou du tartre ! Un détartrage préalable est obligatoire.

## Les techniques proposées
1.  **Le blanchiment au fauteuil (Cabinet)** :
    *   Résultat immédiat en une séance (1h - 1h30).
    *   Utilisation d'un gel activé par une lampe spécifique.
    *   Idéal pour un événement (mariage, shooting).
2.  **Le blanchiment ambulatoire (Gouttières maison)** :
    *   Le dentiste fabrique des gouttières sur mesure.
    *   Vous appliquez le produit chez vous pendant 10-15 jours (souvent la nuit).
    *   Résultat souvent plus durable et stable dans le temps.

## Quel est le prix d'un blanchiment à Dakar ?
Le tarif varie selon la technique, généralement entre **150 000 FCFA et 300 000 FCFA** pour un traitement complet professionnel.
C'est un acte esthétique, donc non pris en charge par les assurances.

## Et le résultat ?
On gagne en moyenne 2 à 3 teintes. Attention, les couronnes et les plombages ne blanchissent pas ! Si vous en avez sur les dents de devant, il faudra peut-être les changer après le blanchiment pour harmoniser la couleur.

> **Le conseil Dabia** : Commencez toujours par un **détartrage-polissage** complet. Parfois, cela suffit à redonner un éclat naturel suffisant en enlevant les taches externes !`,
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
    content: `Choisir son dentiste n'est pas anodin. C'est une relation de confiance qui touche à votre intimité et votre santé. Si vous cherchez " **Clinique Dentaire DABIA** " ou un dentiste de confiance à Dakar, voici qui nous sommes et ce qui nous anime.

## Une approche moderne et humaine
Chez DABIA, nous avons banni l'image du dentiste "arracheur de dents". Notre priorité : **votre confort**.
- **Gestion de la douleur** : Anesthésie systématique, douceur dans les gestes.
- **Écoute** : Nous prenons le temps de vous expliquer le "pourquoi" et le "comment" de chaque acte.

## Un plateau technique complet
Pour bien soigner, il faut bien voir et bien diagnostiquer. La clinique est équipée de :
- **Radio Panoramique & 3D (CBCT)** : Pour voir ce qui se passe sous la gencive et dans l'os.
- **Caméra Intra-orale** : Pour vous montrer l'état de vos dents sur écran en temps réel.
- **Moteurs d'endodontie** : Pour des dévitalisations précises et rapides.

## Hygiène et Stérilisation : Notre Obsession
C'est le point non-négociable. Nous suivons des protocoles draconiens :
- Chaîne de stérilisation aux normes internationales (Autoclave classe B).
- Instruments sous sachets stériles ouverts devant vous.
- Désinfection des surfaces entre chaque patient.

## Notre engagement tarifaire
Nous savons que les soins dentaires représentent un budget.
- **Transparence** : Aucun soin n'est commencé sans votre accord sur le devis.
- **Juste prix** : Nous calculons nos honoraires au plus juste pour offrir la meilleure qualité de matériel tout en restant accessibles.

> **Votre sourire est notre meilleure carte de visite.** Rejoignez les centaines de patients qui nous ont fait confiance pour retrouver le plaisir de sourire.`,
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
    content: `Vous cherchez un **dentiste à Dakar**, à **Liberté 6**, aux **Parcelles Assainies** ou à **Sicap Foire** ? La Clinique DABIA centralise les recherches “cabinet dentaire Dakar”, “dentiste Liberté 6”, “dentiste Parcelles Assainies” avec imagerie 3D et plateau technique complet.

## Requêtes fréquentes des patients
- **Dentiste Dakar** pour un contrôle, un **détartrage** ou une douleur.
- **Clinique dentaire Liberté 6** pour rester proche de la VDN et des Parcelles.
- **Cabinet dentaire Sicap Foire** équipé en **CBCT** et **scanner intra-oral**.
- **Dentiste Parcelles Assainies** pour les urgences, la pédiatrie ou l’orthodontie.

## Ce que propose la Clinique DABIA (Liberté 6 / Sicap Foire)
- **Urgence dentaire à Dakar** : douleur, abcès, dent cassée, traumatisme.
- **Implant dentaire** et **prothèse** (bridge, couronne) planifiés en 3D.
- **Orthodontie** (bagues, aligneurs) adulte/enfant + suivi **dentiste pédiatrique**.
- **Esthétique** : **blanchiment des dents à Dakar**, facettes, corrections de sourire.
- **Prévention** : bilans, **AirFlow**, coaching d’hygiène personnalisé.

## Parcours patient clair
1. **Prise de rendez-vous** en ligne ou par téléphone.
2. **Bilan complet** : photos, radios, éventuel **CBCT**, devis expliqué.
3. Plan de traitement **priorisé** (urgence → soins → esthétique) avec calendrier.
4. **Suivi** : rappels et contrôle de la cicatrisation/occlusion.

## Accès et horaires
- Clinique située à **Liberté 6 / Sicap Foire**, accès rapide depuis les **Parcelles** et la **VDN**.
- **Horaires étendus** en semaine, créneaux le **samedi** selon disponibilités.
- Stationnement et transports faciles pour les quartiers voisins.

> Pour trouver rapidement un **cabinet dentaire à Dakar** (Liberté 6, Parcelles Assainies, Sicap Foire), contactez la **Clinique DABIA** : un devis clair est remis avant chaque soin.`,
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
    title: "Urgence dentiste à Dakar 24/24 : nuit, week-end et jours fériés",
    description:
      "Douleur pulsatile, gonflement, dent cassée : les gestes immédiats et comment trouver un dentiste d’urgence à Dakar, même la nuit ou le week-end.",
    date: "2026-01-15",
    category: "Urgences",
    tags: [
      "urgence dentaire dakar",
      "dentiste dakar 24/24",
      "dentiste nuit dakar",
      "dentiste weekend dakar",
    ],
    author: AUTHORS.sao,
    cover: urgenceNuitCover,
    pinned: true,
    readingMinutes: 13,
    content: `Une **douleur dentaire** à 23 h ou un choc un dimanche ? Voici le guide “**dentiste urgence Dakar 24/24**” pour savoir quoi faire la nuit ou le week-end.

## Signes qui imposent un dentiste en urgence à Dakar
- Douleur **pulsatile** qui empêche de dormir.
- **Gonflement** de la joue/cou, fièvre, trismus.
- **Dent cassée** ou expulsée après traumatisme (sport, chute).
- Saignement qui ne s’arrête pas après extraction ou choc.

## Gestes immédiats avant de consulter un dentiste de nuit
- **Paracétamol** selon la notice (éviter l’aspirine en cas de saignement).
- **Froid externe** 20 min on/20 min off.
- **Rinçage eau tiède salée** si suppuration qui draine.
- Conserver toute dent/fragment dans du **lait** ou du sérum physiologique.

## Prise en charge à la Clinique DABIA (Dakar)
- **Accueil téléphonique** pour vous insérer sur le créneau d’urgence disponible (soir, samedi, veille ou lendemain de férié).
- Radios ciblées ou **CBCT** si besoin pour décider : **drainage**, **pulpotomie**, **traitement canalaire** d’urgence, extraction ou contention.
- **Ordonnance** antalgiques/antibiotiques adaptée et **plan de soins** détaillé pour finaliser ensuite.

## Budget et couverture
- Devis expliqué avant chaque acte d’urgence.
- Possibilités d’utiliser votre **IPM/mutuelle** selon le contrat.
- Les traitements définitifs (couronne, implant, alignement) sont chiffrés à part.

> Gardez ces réflexes si vous tapez “**dentiste 24/24 Dakar**”, “**dentiste de nuit Dakar**” ou “**urgence dentaire week-end Dakar**” : soulagez la douleur, protégez la dent et appelez la **Clinique DABIA** pour une prise en charge prioritaire.`,
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
    content: `Vous recherchez un **dentiste pas cher à Dakar** ou un **cabinet dentaire** qui explique clairement les **tarifs** ? La clé est de disposer d’un **diagnostic complet**, d’un **devis** transparent et d’un **plan de traitement en phases**.

## Actes fréquents et ce qui influence le prix
- **Consultation + radios** : nécessaire pour établir un devis fiable.
- **Détartrage / AirFlow** : dépend du temps clinique et de l’inflammation.
- **Caries / composites** : taille et localisation de la lésion.
- **Couronne / prothèse / implant** : matériaux, laboratoire, temps opératoire.

## Astuces pour payer moins sans sacrifier la qualité
- **Prioriser** : urgences (douleur, infection) → soins → esthétique.
- Étaler en **phases** : provisoires puis définitifs quand la biologie est stabilisée.
- Activer votre **IPM / mutuelle** : demander un devis daté et signé.
- Miser sur la **prévention** (contrôles, hygiène) pour éviter les gros traitements.
- Discuter des **alternatives** : onlay vs couronne, bridge vs implant selon le cas.

## Comment se passe un devis à la Clinique DABIA ?
1. **Bilan** (photos, radios, parfois **CBCT**).
2. **Plan de traitement** écrit avec priorités et options.
3. **Devis détaillé** remis pour la **mutuelle/IPM** ou la planification budgétaire.
4. Calendrier des séances pour lisser les coûts si besoin.

> Un “**dentiste pas cher à Dakar**” doit surtout fournir un **diagnostic** précis et des **explications**. Un devis clair vous permet de comparer en connaissance de cause.
`,
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
    content: `Les expatriés et voyageurs recherchent un **dentiste à Dakar** capable d’expliquer clairement le traitement, d’anticiper un retour rapide et de préparer des **devis** pour les assurances internationales.

## Les demandes les plus fréquentes
- **Urgence dentaire à Dakar** avant un vol : douleur, fracture, infection.
- **Check-up** rapide avec radios/CBCT et plan écrit de façon claire et détaillée.
- **Implant / couronne / facette** : devis détaillé pour remboursement.
- **Blanchiment** ou **aligners** pour des séjours courts.

## Parcours adapté aux expatriés
1. **RDV rapide** (souvent < 72 h) pour établir le diagnostic.
2. **Compte-rendu détaillé** avec radios et plan de traitement.
3. **Soins priorisés** selon la durée du séjour (urgence → provisoire → définitif).
4. Factures et documents prêts pour votre **assurance internationale**.

## Bonnes pratiques avant de venir
- Envoyer vos **radios** si vous en avez déjà pour gagner du temps.
- Préciser la **date de départ** pour organiser les séances.
- Apporter vos **contrats d’assurance** ou formulaires à faire tamponner.

> Si vous cherchez un **cabinet dentaire pour expatriés à Dakar**, la **Clinique DABIA** peut fournir un devis détaillé et un plan de soins compatible avec votre planning.
`,
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
    content: `Un **bilan dentaire complet à Dakar** permet d’éviter les surprises et de prioriser les soins. À la **Clinique DABIA**, le check-up combine **examen clinique**, **imagerie** (panoramique ou **CBCT**), **photos** et **scanner intra-oral** pour un plan de traitement clair.

## Ce qui est évalué
- **Gencives** : dépistage gingivite/parodontite.
- **Carie** : lésions visibles et caries débutantes entre les dents.
- **Occlusion et usure** : bruxisme, fractures, articulations.
- **Esthétique** : teinte, alignement, volume gingival.

## Technologies utilisées au cabinet dentaire
- **Panoramique** ou **CBCT 3D** selon l’indication (implant, dents incluses, canaux complexes).
- **Scanner intra-oral** pour empreintes numériques (implants, onlays, aligneurs).
- **Photographies** haute définition pour le suivi et les simulations.

## Livrables et plan de traitement
1. **Diagnostic** détaillé en français.
2. **Devis** et calendrier : urgences → soins → prothèse/esthétique.
3. Conseils d’**hygiène personnalisés** (AirFlow, brossettes, fluor).
4. Programmation des contrôles (6–12 mois) et rappels.

> Pour un **bilan dentaire à Dakar** avec technologie **CBCT** et **scanner intra-oral**, prenez rendez-vous à la **Clinique DABIA** : un plan de soins priorisé et chiffré vous est remis.
`,
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
    content: `Les **gencives qui saignent**, une **mauvaise haleine** persistante ou des dents qui s’allongent sont souvent les premiers signes d’une **parodontite**. À Dakar, une prise en charge précoce évite la perte osseuse et la mobilité des dents.

## Signes d’alerte à surveiller
- Saignement au brossage ou au fil dentaire, gencives gonflées.
- Sensation de dents qui bougent ou d’espaces qui apparaissent.
- Goût métallique, haleine désagréable malgré un brossage correct.
- Rétraction gingivale et racines sensibles au froid.

## Bilan parodontal complet
- Entretien médical (tabac, diabète, grossesse) et photos intra-orales.
- **Sondage** des poches autour de chaque dent pour mesurer la profondeur.
- Radiographies 2D ou **CBCT** ciblé pour évaluer la perte osseuse.
- Analyse occlusale/bruxisme pour identifier les facteurs mécaniques.

## Phases du traitement parodontal
1. **Phase initiale** : motivation à l’hygiène, choix des brosses/brossettes, détartrage complet.
2. **Surfaçage radiculaire** quadrant par quadrant sous anesthésie locale pour éliminer plaque, tartre et toxines. Antibiothérapie locale ou systémique si nécessaire.
3. **Phase correctrice** : micro-chirurgie ou greffe gingivale lorsque les pertes sont importantes, ajustements occlusaux, éventuelle gouttière de bruxisme.
4. **Maintenance** : contrôles tous les 3 à 4 mois pour stabiliser les résultats, réévaluation des poches.

## Prix et prise en charge
- Le devis dépend du nombre de séances de surfaçage, des greffes et du suivi radiologique.
- Les **IPM** ou **mutuelles dentaires à Dakar** remboursent parfois une partie du traitement parodontal sur présentation d’un devis.
- Un **plan écrit** est remis pour anticiper le budget et organiser les rendez-vous.

> Une parodontite stabilisée permet de garder ses dents longtemps. Dès les premiers saignements, prenez rendez-vous avec la Clinique DABIA pour un bilan complet.`,
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
    content: `Le **ronflement** régulier n’est pas seulement gênant : il peut révéler une **apnée du sommeil légère**. À Dakar, l’orthèse d’avancée mandibulaire (OAM) fabriquée par un dentiste du sommeil libère les voies respiratoires sans appareil encombrant.

## Ronflement simple ou apnée ?
- Ronflement simple : bruit sans pauses respiratoires, fatigue modérée.
- **SAS léger** : pauses de respiration (apnées), somnolence diurne, maux de tête au réveil.
- Facteurs aggravants : surpoids, alcool tardif, obstruction nasale, mâchoire reculée.

## Parcours de soins à la Clinique DABIA
1. **Entretien** et examen de l’occlusion pour vérifier la faisabilité de l’OAM.
2. Orientation vers un **ORL** ou un médecin du sommeil pour une polygraphie/polysomnographie si besoin.
3. Scanner intra-oral, empreintes et enregistrement de la protrusion mandibulaire.
4. Livraison de la gouttière, réglages progressifs et contrôles réguliers.

## Comment fonctionne l’orthèse mandibulaire ?
- Deux gouttières relient les arcades et avancent légèrement la mâchoire inférieure.
- Cette avance augmente le volume pharyngé et limite les vibrations responsables du ronflement.
- Portée uniquement la nuit, elle reste discrète et durable.

## Conseils d’hygiène du sommeil
- Dormir sur le côté, limiter alcool/tabac en soirée.
- Traiter allergie ou nez bouché, garder un poids stable.
- Faire vérifier l’usure de l’orthèse, surtout en cas de bruxisme.

> Si vous cherchez une **gouttière anti-ronflement à Dakar**, prenez rendez-vous : un diagnostic précis détermine si l’OAM est la bonne solution.`,
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
    content: `Entre **6 et 10 ans**, la croissance faciale est malléable : c’est la période idéale pour une **orthodontie interceptive**. À Dakar, elle corrige les mâchoires étroites, les suctions digitales ou les décalages osseux avant qu’ils ne se figent.

## Quand consulter ?
- Respiration buccale, ronflements, lèvres qui ne se ferment pas.
- Succion du pouce/tétine persistante.
- Dents très en avant ou en arrière.
- Manque de place évident dès l’éruption des incisives permanentes.
- Troubles fonctionnels (déglutition infantile, interposition de la langue).

## Appareils interceptifs possibles
- **Plaques amovibles** avec vérin d’expansion pour élargir le palais.
- **Quad-Helix / disjoncteur** collé pour corriger une arcade trop étroite.
- **Masque facial** ou traction inversée pour stimuler la croissance maxillaire.
- **Pistes fonctionnelles** et gouttières myofonctionnelles pour rééduquer respiration et posture linguale.

## Déroulé à la Clinique DABIA
1. Bilan orthodontique complet (photos, empreinte numérique, téléradiographie).
2. Plan individualisé expliqué aux parents avec durée estimée et devis.
3. Séances d’activation et de contrôle toutes les 4 à 8 semaines.
4. Phase de contention légère ou relais avec un traitement multi-bagues/aligneurs à l’adolescence si nécessaire.

## Rôle des parents
- Aider au port quotidien de l’appareil et au carnet de suivi.
- Surveiller l’hygiène : brossage + tablette révélatrice si besoin.
- Coordonner orthophonie/ORL lorsque des troubles fonctionnels sont identifiés.

> Plus l’orthodontie interceptive commence tôt, moins elle nécessite des extractions ou un traitement lourd plus tard. Contactez notre équipe pédiatrique à **Liberté 6**.`,
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
    content: `Une **récession gingivale** correspond à une gencive qui recule et laisse apparaître la racine. Outre l’aspect esthétique, elle expose aux sensibilités et augmente le risque de carie cervicale. À Dakar, nous combinons diagnostic précis et techniques de greffe pour restaurer le tissu perdu.

## Quelles sont les causes ?
- Brossage trop appuyé ou brosse dure.
- Maladies parodontales non stabilisées.
- Bruxisme, occlusion traumatique ou mouvement orthodontique mal contrôlé.
- Piercing labial, frein trop court, biotype gingival fragile.

## Bilan nécessaire
- Mesure millimétrique de la récession (classification de Miller ou Cairo).
- Analyse des habitudes d’hygiène, du type de brosse et du geste.
- Radios pour vérifier la hauteur osseuse.
- Observation des freins et de la quantité de gencive kératinisée.

## Traitements possibles
1. **Correction des causes** : brosse souple, technique de Bass, gouttière si bruxisme.
2. **Traitement parodontal** si inflammation (détartrage + surfaçage).
3. **Greffe gingivale** (conjonctif, épithélio-conjonctif ou matrices collagéniques) associée à un lambeau de translation coronale pour recouvrir la racine.
4. **Composites cervicaux** pour protéger la racine si la greffe n’est pas indiquée.

## Prévention des récidives
- Coaching d’hygiène personnalisé, brosse électrique avec capteur de pression.
- Contrôles tous les 6 mois pour surveiller la stabilité.
- Ajustements orthodontiques/occlusaux lorsque les dents subissent une surcharge.

> Vous remarquez des dents plus longues ou sensibles ? Prenez rendez-vous pour discuter des options de **greffe gingivale à Dakar**.`,
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
    content: `> En jeûne, priorisez les **soins urgents** (douleur, abcès, trauma). Pour les soins programmés, privilégiez les **rendez-vous après la rupture** du jeûne ou tôt le matin pour rester à l’aise.

## Ce qui ne rompt pas le jeûne
- **Examen clinique** et conseil préventif.  
- **Détartrage** doux (sans ingestion).  
- **Anesthésie locale** (piqûre).  
- **Radio** (CBCT/panoramique) si nécessaire.  
> Si vous craignez d’avaler de l’eau ou du gel, planifiez après l’iftar.

## Douleurs et médicaments
- **Paracétamol** : attendre l’iftar/suhoor pour le prendre.  
- **Antibiotiques** : respectez les horaires fixés par le dentiste (souvent après iftar + suhoor).  
- Éviter **anti-inflammatoires** en automédication (risque gastrique).

## Haleine et bouche sèche pendant le jeûne
- Brosse **douce** + pâte fluorée au suhoor et avant l’iftar.  
- **Gratte-langue** doux le matin.  
- Boire suffisamment la nuit, limiter **attaya/café** très sucrés.  
- Si port d’**aligneurs/gouttières** : bien rincer et nettoyer au suhoor/iftar.

## Quand consulter en urgence pendant le Ramadan
- **Douleur pulsatile** qui empêche de dormir.  
- **Gonflement** ou fièvre.  
- **Traumatisme** (dent cassée/expulsée).  
> En cas de doute, appelez la Clinique DABIA : une prise en charge rapide évite la rupture du jeûne à cause d’une aggravation.`,
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
    content: `Beaucoup de patients de la **diaspora** planifient leurs soins à Dakar. Avec une bonne préparation, il est possible de concentrer les étapes sur **7–10 jours** (hors cicatrisations implantaires).

## Avant de voyager
- Demandez un **appel vidéo** ou un pré-devis si vous avez déjà des radios.  
- Préparez vos **ordonnances** et antécédents (allergies, traitements).  
- Bloquez un **créneau large** les premiers jours pour le bilan + imagerie 3D.

## Exemple de planning
- **Jour 1** : bilan complet + photos + radios/CBCT + plan de traitement.  
- **Jour 2–3** : soins prioritaires (caries, détartrage, urgences).  
- **Jour 4–6** : étapes prothétiques/esthétiques (empreintes, provisoires).  
- **Jour 7–10** : ajustements, pose provisoire/définitive selon l’acte.  
> Pour les **implants**, la pose peut se faire pendant le séjour, la prothèse définitive nécessite un retour après cicatrisation.

## Budget et prise en charge
- Un **devis clair** vous est remis avant chaque étape.  
- Les **assurances/IPM** peuvent couvrir certaines parties : apportez vos documents.  
- Possibilité d’étaler certaines phases (urgence → provisoire, puis définitif au prochain séjour).

## Astuces pratiques
- Prévoir un **jour tampon** si vous êtes serré en timing.  
- Éviter les aliments **très épicés** juste après les soins.  
- Utiliser une **brosse souple** de voyage + bain de bouche doux si indiqué.`,
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
    content: `La **carie du biberon** apparaît très tôt, surtout avec les biberons **sucrés** (lait concentré, jus, attaya) pris la nuit.

## Signes d’alerte
- Taches **brunes/blanches** sur les incisives de lait.  
- **Haleine** anormale, irritabilité au biberon.  
- Aliments qui se coincent, douleur au froid.

## Prévenir à la maison
- Pas de **biberon sucré** la nuit ; privilégier **eau** ou lait non sucré.  
- Nettoyer les **gencives** avec une compresse humide après les repas, puis brosse souple dès la première dent.  
- Dentifrice **fluoré** dès que l’enfant sait cracher (dose pois chiche).  
- Limiter les **grignotages** sucrés (biscuits, jus, attaya répété).

## À la clinique DABIA
- Bilan pédiatrique **dès 1 an** ou apparition des premières dents.  
- **Vernis fluoré** et conseils personnalisés.  
- Soins précoces pour éviter la propagation aux molaires définitives.

> Une carie de lait non soignée peut toucher la **dent définitive** en dessous. Consultez tôt pour éviter la douleur et les extractions.`,
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
    content: `Certaines recettes virales (charbon, citron, poudre de brique, bicarbonate pur) **abrasent** ou **acidifient** l’émail. Résultat : dents plus sensibles, gencives irritées, teinte qui jaunit à long terme.

## Pourquoi c’est risqué ?
- **Citron/vinaigre** : attaques acides répétées ⟶ émail fragilisé.  
- **Poudre de brique/charbon** : abrasifs qui creusent des **micro-rayures**.  
- **Bicarbonate pur** : abrasivité élevée, gencives irritées.

## Comment éclaircir sans danger ?
- **Bilan** pour vérifier caries/fissures avant tout éclaircissement.  
- **Détartrage + AirFlow** pour enlever les taches (attaya, café, kola).  
- **Blanchiment médical** encadré, gels dosés + protections gingivales.  
- Entretien : brossage doux, retouches légères avec gouttières si indiqué.

## Bons réflexes à Dakar
- Ne pas mélanger **recettes maison** sans avis pro.  
- Privilégier des **dentifrices peu abrasifs** (RDA contrôlé).  
- Espacer café/attaya ou rincer à l’eau ensuite.  
- Prendre rendez-vous si **sensibilité** ou taches persistantes.

> Le vrai “sourire blanc” se construit avec une **émail sain**, des soins adaptés et un entretien régulier, pas avec des recettes agressives.`,
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
    content: `> **Résumé rapide – urgence dentaire à Dakar** — En cas de douleur aiguë, gonflement ou traumatisme : prenez du **paracétamol** (pas d’aspirine si saignement), appliquez du **froid** sur la joue 20 min on/20 min off, **rincez** à l’eau tiède salée si suppuration, **gardez** tout fragment de dent dans du sérum ou du lait, et **appelez la Clinique Dentaire DABIA à Dakar** pour une prise en charge rapide : [/rendez-vous](/rendez-vous).

## Quand faut-il consulter en urgence ?
Certains signes ne doivent pas attendre, quel que soit le **dentiste à Dakar** ou la **clinique dentaire** que vous consultez :
- **Douleur nocturne** ou pulsatile qui empêche de dormir  
- **Gonflement** de la joue ou du cou  
- **Fièvre**, mauvais goût en bouche (éventuelle suppuration)  
- **Dent cassée**, expulsion partielle après choc  
- **Saignement** qui ne s’arrête pas  
- **Hypersensibilité** chaude/froide persistante

> En présence de **difficulté à ouvrir la bouche**, d’**œdème qui s’étend** ou de **fièvre élevée**, contactez-nous immédiatement. 

## Premiers gestes à la maison (secours)
- **Antalgique :** paracétamol selon notice. *Éviter l’aspirine* si saignement.  
- **Froid externe :** poche froide enroulée dans un linge, 20 min on/off.  
- **Rinçage :** eau tiède salée (1/2 c. à café de sel/verre) 2–3×/jour si abcès qui draine.  
- **Dent cassée :** conservez le fragment dans du sérum physiologique (ou du lait UHT).  
- **Hygiène douce :** brossage délicat + brossettes si toléré.  
- **Évitez :** alcool, tabac, aliments très chauds/sucrés, automédication antibiotique.

## Que va faire le dentiste ?
À la clinique DABIA, la prise en charge suit un protocole clair :
1. **Interrogatoire ciblé + radio** (CBCT ou rétro-alvéolaire selon cas).  
2. **Soulagement immédiat** : médication adaptée, drainage si nécessaire.  
3. **Traitement causal** : pansement calmant, ouverture de chambre pulpaire, suture, collage provisoire, etc.  
4. **Plan complet** remis par écrit, avec rendez-vous de contrôle.

Voir nos équipements d’imagerie et de planification : [/infos/technologie](/infos/technologie).

## Traumatismes chez l’adulte et l’enfant
- **Dent expulsée (avulsion)** : remettre en place *si possible* dans les 30 min (sans frotter la racine), sinon conserver dans du lait et venir immédiatement.  
- **Fracture coronaire** : le collage du fragment est souvent possible.  
- **Luxation** : contention après repositionnement.

> Chaque urgence est unique : **l’examen clinique** est indispensable pour un diagnostic fiable. Prenez rendez-vous : [/rendez-vous](/rendez-vous).

### FAQ
**Puis-je prendre des antibiotiques sans ordonnance ?** Non, ils peuvent masquer les symptômes et retarder le bon geste.  
**Le clou du mal la nuit ?** Surélevez la tête, froid externe, paracétamol, et consultez vite.  
**Et si je suis enceinte ?** Signalez-le : on adapte imagerie et médication.

*Ce contenu est informatif et ne remplace pas une consultation individuelle.*`,
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
    content: `Les **scellants** (ou sealants) protègent les **sillons des molaires** de l’enfant. Ils forment une fine **barrière** contre la plaque et les sucres.\n\n## Quand les poser ?\n- À l’éruption des **molaires définitives** (vers 6–7 ans),\n- Chez les enfants à **risque carieux** élevé (taches, habitudes sucrées).\n\n## Déroulé rapide\nNettoyage – isolation – application du matériau – **photopolymérisation**. Indolore et réversible.\n\n> Couplé à une **hygiène fluorée** et des contrôles, c’est une des meilleures stratégies de **prévention**.`,
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
    content: `Un **dentiste pour enfants** (pédodontiste ou chirurgien‑dentiste formé à la pédiatrie) accompagne les familles dès les premières dents de lait. À Dakar et dans tout le Sénégal, une prise en charge précoce permet d’**éviter les grosses caries**, la peur du dentiste et les urgences douloureuses.

## À quel âge emmener son enfant chez le dentiste ?
- **Dès 1 an** si possible, ou à l’éruption des premières molaires de lait.  
- Au plus tard vers **2–3 ans**, même sans douleur, pour un **bilan de prévention**.  
- Ensuite, un contrôle tous les **6 à 12 mois** selon le risque carieux.

> Plus l’enfant découvre tôt le **cabinet dentaire** dans un contexte calme, moins il associe le dentiste à la douleur.

## Comment se passe une première visite à la Clinique DABIA ?
1. **Accueil rassurant** : explication simple de ce qui va se passer, sans termes anxiogènes.  
2. **Examen bucco‑dentaire** : dents de lait, gencives, frein de langue, habitudes (sucette, pouce).  
3. **Conseils personnalisés** aux parents : brossage, alimentation, rythme des visites.  
4. Si nécessaire, **radios ciblées** pour vérifier les contacts entre molaires ou une carie débutante.  

L’objectif est d’installer une **relation de confiance** : l’enfant repart avec des gestes simples à appliquer à la maison.

## Prévenir les caries chez l’enfant au Sénégal
- **Brossage 2×/jour** avec un **dentifrice fluoré adapté à l’âge**.  
- Éviter le grignotage sucré (bonbons, biscuits, boissons sucrées, attaya répété).  
- Limiter le biberon ou la tétine sucrée la nuit.  
- Faire contrôler les **molaires définitives** dès leur éruption (vers 6–7 ans) et envisager des **scellants de sillons** si besoin.  
- Surveiller la respiration buccale, les ronflements ou le **serrage de dents** chez l’enfant.

## Quand consulter en urgence pour un enfant ?
- Douleur qui réveille la nuit ou empêche de manger.  
- Dent cassée après chute ou choc (gardez le fragment dans du **lait** ou du sérum).  
- Gencive gonflée, fièvre, mauvaise haleine persistante.  
- Chute sur les dents de devant avec changement de couleur ou mobilité.

Dans ces situations, contactez rapidement un **dentiste pédiatrique à Dakar** pour éviter la propagation de l’infection et sauver la dent quand c’est possible.

## Questions fréquentes des parents
**Et si mon enfant a peur du dentiste ?**  
Parlez‑lui de la visite comme d’un **contrôle de routine**, sans insister sur la douleur. À la clinique, nous prenons le temps de l’apprivoiser et d’expliquer avec des mots simples.

**Les dents de lait, est‑ce vraiment important ?**  
Oui : elles servent à **manger**, à **parler** et à garder la place des futures dents définitives. Une carie de dent de lait peut faire très mal et infecter la dent permanente.

**Peut‑on faire du fluor au Sénégal ?**  
Oui, sous contrôle du dentiste : vernis fluorés, conseils sur le dentifrice et la fréquence d’utilisation.

> Pour une première visite en douceur chez un **dentiste pour enfants à Dakar**, prenez rendez‑vous en ligne : [/rendez-vous](/rendez-vous) • Découvrez aussi nos conseils dédiés : [/infos/enfants](/infos/enfants).`,
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
    content: `Le **bruxisme** est un **serrement/grincement** involontaire, surtout la nuit. Il peut user l’**émail** et donner des **douleurs** musculaires.\n\n## Signes\nUsure dentaire, réveils douloureux, craquements temporo‑mandibulaires.\n\n## Solutions\n- **Gouttière** de protection sur‑mesure,\n- Gestion du **stress**, posture, kiné maxillo‑faciale,\n- Contrôles réguliers.`,
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
    content: `Le concept **All‑on‑4** permet de **fixer une prothèse complète** sur **4 implants** (parfois 6 selon les cas).\n\n## Indications\nÉdentement complet, volume osseux suffisant/optimisé (greffe possible).\n\n## Étapes\nBilan 3D – planification – chirurgie – prothèse provisoire – prothèse définitive.\n\n## Entretien\nHygiène rigoureuse, irrigateur, contrôles.`,
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
    content: `La **sensibilité** survient quand les tubules dentinaires sont **exposés** (collets, érosion, usure).\n\n## Causes\nBrossage abrasif, déchaussement, bruxisme, acides.\n\n## Solutions\nVernis désensibilisant, **dentifrices** spécifiques, **collets** traités, gouttière si bruxisme.`,
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
    content: `> Résumé — Le **prix d’un implant dentaire à Dakar** dépend du **diagnostic 3D**, des **biomatériaux**, de la **complexité** (greffe, chirurgie guidée) et du **type de couronne**. Un **devis clair** est toujours remis après examen.

## Les postes qui composent un devis d’implant
- **Bilan initial** : consultation, photos, empreintes/scan, **CBCT** si besoin pour mesurer volumes et trajets nerveux.  
- **Planification** : choix dimensionnel, **guide chirurgical** si indiqué.  
- **Chirurgie** : pose de l’implant (titane/zircone), vis de cicatrisation.  
- **Temps prothétique** : pilier + **couronne** (céramique/zircone), ajustements.  
- **Contrôles** : visites de suivi, maintenance.

## Ce qui fait varier le tarif
- **Complexité osseuse** : greffe (sinus lift, apposition, RPF) si volume insuffisant.  
- **Nombre d’implants** et **localisation** (esthétique/secteur postérieur).  
- **Marque d’implant** et **type de pilier**.  
- **Matériaux de la couronne** : céramique stratifiée, zircone monolithique, etc.  
- **Chirurgie guidée** pour plus de précision selon indications.

## Parcours patient à DABIA
1. **Entretien + examen clinique**  
2. **CBCT** et planification numérique  
3. **Pose** (anesthésie locale) — suites confort gérées  
4. **Cicatrisation** 6–12 semaines selon biologie  
5. **Couronne** sur pilier, réglages occlusaux  
6. **Maintenance** : hygiène, contrôles

### FAQ
**C’est douloureux ?** Modéré, contrôlé par antalgiques.  
**Fumeur(se) ?** Le sevrage améliore nettement la cicatrisation.  
**Alternatives ?** Bridge, prothèse amovible — discutées au cas par cas.

> Pour un chiffrage précis et transparent, prenez rendez-vous : [/rendez-vous](/rendez-vous).`,
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
    content: `Le **détartrage** élimine la plaque minéralisée responsable des **gingivites** et aide à prévenir la **parodontite**. À Dakar, le prix varie selon l’**état gingival**, la **durée** et la **technique** utilisée (ultrasons classiques, **AirFlow** pour la prophylaxie, ou **surfaçage** si inflammation profonde).

## Comment se déroule un détartrage ?
1. **Bilan gingival** (saignement, poches, mobilités)  
2. **Détartrage aux ultrasons** + polissage  
3. Selon indication, **AirFlow** pour éliminer les colorations  
4. **Conseils d’hygiène** personnalisés (brosse, brossettes, bain de bouche)

## AirFlow, pour qui ?
Technique douce qui projette une poudre spécifique : idéale pour **taches** et **biofilm** supra-gingival, complémentaire des ultrasons.

## De quoi dépend le prix ?
- **Temps clinique** (durée, nombre de séances)  
- **Diagnostic** : simple prophylaxie vs **surfaçage** si poches  
- **Technologie** : utilisation de l’AirFlow  
- **Suivi** : contrôles et rappel d’hygiène

### À quelle fréquence ?
Généralement **tous les 6 à 12 mois**, plus rapproché si **facteurs de risque** (tabac, diabète, antécédents parodontaux).

> Besoin d’une évaluation et d’un devis ? Prenez rendez-vous : [/rendez-vous](/rendez-vous).`,
  },

  {
    slug: "meilleur-dentiste-dakar-criteres-de-choix",
    title: "Meilleur dentiste à Dakar ? Les critères pour bien choisir",
    description:
      "Comprendre les critères de qualité (écoute, diagnostic, technologie, hygiène, suivi) pour choisir un dentiste ou une clinique dentaire à Dakar, et poser les bonnes questions lors de la première visite.",
    date: "2025-09-02",
    category: "Conseils",
    pinned: true,
    tags: [
      "meilleur dentiste dakar",
      "cabinet dentaire dakar",
      "dentiste dakar",
    ],
    author: AUTHORS.sao,
    cover: prixCover,
    readingMinutes: 11,
    content: `La notion de “**meilleur**” dentiste est **subjective**. En revanche, des **repères concrets** aident à choisir un cabinet ou une **clinique dentaire à Dakar** qui vous convient.

## 7 critères utiles
1. **Écoute et pédagogie** : le plan de traitement est expliqué, options et priorités sont posées.  
2. **Diagnostic outillé** : imagerie adaptée (photos, radios, CBCT si nécessaire).  
3. **Hygiène et traçabilité** : stérilisation et protocole visibles, rassurants.  
4. **Compétences variées** : gestion des urgences, esthétique, implantologie, orthodontie ou réseau de spécialistes.  
5. **Devis clair** : transparence des coûts, alternatives éventuelles.  
6. **Suivi** : contrôles et maintenance programmés.  
7. **Accès et horaires** : proximité (Liberté 6 / Parcelles / Sicap Foire) et créneaux adaptés.

## Première visite : les bonnes questions
- Quelles sont mes **priorités** à court terme ?  
- Quelles **options** existent pour atteindre mon objectif ?  
- Quels **délais** et **coûts** prévoir ?  
- Quel **entretien** pour pérenniser le résultat ?

### FAQ – dentiste et clinique dentaire à Dakar
**Quel est le meilleur dentiste à Dakar ?**  
Il n’existe pas de “meilleur” dentiste universel, mais des **professionnels sérieux** qui s’appuient sur un diagnostic complet, des explications claires et des équipements modernes. L’important est de trouver un cabinet ou une **clinique dentaire à Dakar** où vous vous sentez écouté et en confiance.

**Comment choisir une clinique dentaire à Dakar ?**  
Comparez l’**expérience de l’équipe**, la **technologie** (radio 3D, scanner intra‑oral, protocole de stérilisation), la **qualité de l’accueil**, la clarté des **devis** et les possibilités de **suivi**. Visiter les lieux et poser des questions lors de la première consultation est souvent très utile.

**La Clinique Dentaire DABIA accepte‑t‑elle de nouveaux patients ?**  
Oui. Située à **Liberté 6 / Sicap Foire**, la Clinique Dentaire DABIA est une **clinique dentaire à Dakar** qui accueille de nouveaux patients pour des bilans, urgences, soins courants et plans de traitement complets.

> Découvrez notre page Liberté 6 : [/cabinet-dentaire-liberte-6](/cabinet-dentaire-liberte-6) • Prenez RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `Le blanchiment dentaire vise à **éclaircir la teinte** des dents en agissant sur les pigments. À la Clinique DABIA, nous proposons des protocoles **sécurisés** et **personnalisés** après un examen préalable.

## Quelles méthodes ?
### 1) Blanchiment en cabinet (lampe/LED)
- **Séance unique** ~(45–60 min) avec protection des gencives.  
- **Indication** : recherche d’un résultat rapide et homogène.  
- **Avantage** : encadrement médical, contrôle de la sensibilité.

### 2) Blanchiment à domicile (gouttières sur-mesure)
- **Gel dosé** + **port quotidien** (10–14 jours).  
- **Indication** : évolution douce, retouches maîtrisées.  
- **Avantage** : confort à la maison, entretien plus facile dans le temps.

> Dans certains cas, un **protocole combiné** (cabinet + domicile) offre le meilleur ratio **efficacité/confort**.

## Est-ce fait pour moi ?
Un **bilan** s’impose pour vérifier :  
- l’absence de **caries** actives et de **lésions** cervicales,  
- le contrôle d’une **sensibilité** existante,  
- la **teinte initiale** et les attentes réalistes.  
**Contre-indications relatives** : grossesse/allaitement, hypersensibilité non contrôlée, gros travaux à prévoir.

## Déroulé d’un traitement en cabinet
1. **Polissage/hygiénisation** préalable.  
2. **Isolation gingivale** et application du gel.  
3. **Activation/temps de pose** selon protocole.  
4. **Rinçage**, contrôle de la teinte, conseils personnalisés.

## Entretien du résultat
- **48 h post-traitement :** éviter café/thé/tabac/curry, privilégier “aliments blancs”.  
- **Hygiène** : dentifrice pour dents sensibles si besoin, brossage 2–3×/jour.  
- **Retouche** : légère, 1–2 jours avec gouttières si la teinte se ternit.

## Prix indicatifs
Les tarifs dépendent de la **méthode**, de la **sensibilité** et des **objectifs esthétiques**. Demandez un **devis personnalisé** après examen.

### FAQ
**Le blanchiment abîme-t-il l’émail ?** Non si le protocole est médical et les doses contrôlées.  
**Les couronnes/composites blanchissent-ils ?** Non, seule la dent naturelle change de teinte.  
**J’ai une soirée ce week-end ?** Une séance en cabinet offre un rendu plus rapide.

> Découvrez nos autres actes d’esthétique : [/all-competences](/all-competences) • Prenez RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `L’implant dentaire remplace une racine absente pour porter une **couronne**, un **bridge** ou stabiliser une **prothèse**. Nous privilégions une approche **prédictible** grâce à l’imagerie **3D (CBCT)** et à la planification guidée.

## Les grandes étapes
1. **Bilan et CBCT** : analyse osseuse/nerveuse, choix dimensionnel.  
2. **Planification** : guide chirurgical si indiqué, simulation occlusale.  
3. **Chirurgie** (anesthésie locale) : pose de l’implant (titane/zircone).  
4. **Cicatrisation** : 6–12 semaines en moyenne (selon site/biologie).  
5. **Prothèse** : pilier + couronne sur-mesure (céramique/zircone).

## Durée, confort, suites
- **Durée opératoire** : souvent < 1 h par implant.  
- **Douleurs** : modérées, contrôlées par antalgiques.  
- **Vie quotidienne** : reprise rapide avec précautions d’hygiène.

## Quand greffer ?
En cas de volume osseux insuffisant : **greffe d’apposition**, **élévation sinusienne** ou **RPF** (régénération). Décision après CBCT.

## Coût : de quoi dépend le devis ?
- **Biomatériaux** et marque d’implant,  
- **Complexité** (greffes, guide),  
- **Type de couronne** et étendue (unitaire vs plurale).  
Un **devis détaillé** vous est remis avant tout acte.

## Alternatives si l’implant n’est pas indiqué
- **Bridge** sur dents adjacentes,  
- **Prothèse amovible** partielle ou complète.

### FAQ
**L’implant est-il définitif ?** Très durable avec hygiène/contrôles.  
**Faut-il arrêter de fumer ?** Vivement recommandé : la cicatrisation est meilleure.  
**Puis-je manger tout de suite ?** Alimentation molle au début, consignes personnalisées.

> Voir nos équipements 3D et technologie : [/infos/technologie](/infos/technologie) • RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `L’orthodontie aligne les dents et harmonise l’occlusion. Chez DABIA, nous proposons des **aligneurs** et des **brackets** en fonction de l’âge, de la complexité et du mode de vie.

## Quand consulter ?
- **Chevauchements**, **diastèmes**, rotations, dents incluses  
- **Mauvaise occlusion** (classe II/III, articulations bruyantes)  
- **Préparation prothétique** (implants, bridges)

## Aligneurs transparents
**Avantages :** discrets, hygiène simplifiée, alimentation libre.  
**Exigences :** port ~22 h/j, changements réguliers, discipline.  
**Indications :** cas légers à modérés, certaines corrections complexes possibles avec attachements.

## Brackets (bagues)
**Avantages :** très **polyvalents** pour cas complexes, contrôle précis.  
**Inconvénients :** visibles, hygiène plus exigeante, possibles irritations.

## Durée, confort, hygiène
- **Durée** : la plupart des traitements vont de 6 à 24 mois.  
- **Confort** : sensibilités transitoires surtout au démarrage.  
- **Hygiène** : brossage soigneux, brossettes, bains de bouche adaptés.

### FAQ
**Puis-je faire du sport ?** Oui, avec protection si contacts.  
**Les aligneurs modifient la diction ?** Parfois au début, adaptation rapide.  
**Et après ?** **Contention** (fils/stellites/gouttières) indispensable pour stabiliser.

> Parents : consultez aussi notre [/infos/enfants](/infos/enfants) • RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `La **couronne dentaire** protège une dent fragilisée (grosse carie, **dé-vitalisation**, fracture) ou améliore l’**esthétique**. Son **prix** dépend de plusieurs paramètres cliniques et techniques. Un **devis personnalisé** est remis après examen.

## Quand poser une couronne ?
- Dent **très reconstituée** ou fissurée  
- Après **traitement canalaire** (protection contre la fracture)  
- Correction **esthétique** (forme/teinte) quand l’option **facette** n’est pas indiquée

## Matériaux et impact sur le coût
- **Zircone monolithique** : très solide, esthétique correcte sur secteurs postérieurs.  
- **Céramique stratifiée** (sur zircone ou métal) : rendu esthétique supérieur pour le **secteur antérieur**.  
- **Métal‑céramique** : robuste, esthétique intermédiaire.  
Le choix se fait selon la **position**, l’**occlusion**, le **sourire** et le budget.

## Étapes clés au cabinet
1. Bilan et **photos** (éventuel CBCT si contexte complexe)  
2. Préparation de la dent + **empreinte/scan**  
3. **Couronne provisoire** (protection esthétique et fonctionnelle)  
4. Essai/ajustement de la **couronne définitive**, collage ou scellement

## Ce qui fait varier le prix
- Complexité clinique (attaque carieuse profonde, **inlay‑core**, gencive)  
- **Matériau** et protocole de **laboratoire**  
- Teinte et **stratification** esthétique  
- Rendez‑vous d’essai/ajustements

> Chez DABIA, nous expliquons les **options** et remettons un **devis clair** avec les matériaux proposés. Demandez une évaluation : [/rendez-vous](/rendez-vous).`,
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
    content: `Le **traitement canalaire** (dé-vitalisation) consiste à **désinfecter** et **obturer** les canaux d’une dent dont le **nerf** est atteint (carie profonde, fissure, traumatisme). Il **soulage** la douleur et évite la propagation de l’infection.

## Quand est-ce indiqué ?
- **Douleur** pulsatile ou nocturne (pulpite)  
- **Abcès** / fistule, sensibilité à la **mastication**  
- Fracture/carie profonde exposant la pulpe  
- Préparation prothétique (pilier de **couronne**)

## Étapes du soin
1. **Anesthésie** et isolement  
2. Accès aux **canaux** puis mise en forme/désinfection  
3. **Obturation** à chaud/froid selon protocole  
4. **Reconstruction** (provisoire ou définitive)

## Facteurs qui influencent le prix
- Nombre de **canaux** (incisive ⟶ molaire)  
- **Courbures**/calcifications, reprise d’un ancien traitement  
- Nécessité d’un **inlay‑core** et d’une **couronne** de protection  
- Imagerie **3D (CBCT)** et temps opératoire

## Après la dévitalisation
Une dent traitée canalaires est **plus fragile** : une **couronne** est souvent recommandée pour la protéger durablement.

> Pour connaître le **budget exact** dans votre cas, un **examen clinique** est indispensable. Prenez rendez‑vous : [/rendez-vous](/rendez-vous).`,
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
    content: `Un **appareil dentaire** permet de réaligner les dents, d’améliorer l’occlusion et parfois de préparer d’autres traitements (implants, prothèses, esthétique). À Dakar, le **prix** dépend du **type d’appareil**, de la **durée** du traitement et de la **complexité** du cas. Le montant exact ne peut être fixé qu’après un **bilan orthodontique** complet.

## Quand envisager un traitement orthodontique ?
- Chevauchement, dents tournées ou espacées  
- Occlusion modifiée (surplomb, béance, décalage des mâchoires)  
- Préparation à un implant ou une prothèse  
- Motif esthétique avec impact fonctionnel (mastication, phonation)

Chez l’enfant et l’ado, l’orthodontie participe au bon **développement** des arcades. Chez l’adulte, elle vise souvent une **amélioration fonctionnelle** et esthétique, parfois en lien avec des douleurs ou une usure dentaire.

## Types d’appareils et impact sur le budget
### Bagues (brackets) métalliques ou esthétiques
- Très **polyvalentes** pour les cas complexes.  
- Versions **métalliques** : robustes, visibles.  
- Versions **esthétiques** (céramique, saphir) : plus discrètes mais plus exigeantes en entretien.  
> Le prix varie selon le **matériau** et la **durée** de traitement.

### Aligneurs transparents
- Gouttières successives, presque **invisibles**.  
- Exigent un port ~**22 h/jour** et des changements réguliers.  
- Confort et hygiène facilités (on retire pour manger et se brosser).  
> Le devis dépend du **nombre de gouttières** nécessaires, du suivi et du niveau de complexité.

## Déroulé d’un traitement à la Clinique DABIA
1. **Bilan orthodontique complet** : photos, empreintes/scan, radios (CBCT ou panoramique selon besoin).  
2. **Plan de traitement** expliqué (objectifs, durée, options techniques).  
3. Mise en place de l’appareil (bagues ou aligneurs) et **contrôles réguliers**.  
4. Phase de **contention** (fils collés/gouttières) pour stabiliser le résultat.

## Ce qui fait varier le prix d’un appareil dentaire
- **Durée** du traitement (6 à 24 mois ou plus)  
- **Type d’appareil** (aligneurs, bagues métal, céramique)  
- Port éventuel d’**auxiliaires** (mini-vis, élastiques, expansion)  
- Nombre et **fréquence** des rendez-vous de contrôle  

> Le devis prend en compte l’ensemble du **parcours orthodontique** (bilan, appareillage, suivis, contention). Un **devis détaillé** vous est remis avant toute décision.

### FAQ
**Peut-on donner un prix sans voir le patient ?** Non, le tarif dépend du **diagnostic** et des objectifs.  
**Les traitements adultes sont-ils plus chers ?** Ils sont souvent plus longs et nécessitent des matériaux plus esthétiques, ce qui peut influencer le devis.  
**Les aligneurs sont-ils toujours plus chers ?** Pas forcément : tout dépend du **nombre de gouttières** et de la complexité du cas.  

> Pour discuter des options (aligneurs ou bagues) et obtenir un devis personnalisé : [/rendez-vous](/rendez-vous).`,
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
    content: `Une **urgence dentaire** doit d’abord être **soulagée** et sécurisée sur le plan médical. Le **prix** varie selon la **nature du problème** (pulpite, abcès, traumatisme) et les **gestes réalisés** lors de la consultation. À la Clinique DABIA, un **devis** est expliqué avant chaque acte.

## Qu’est-ce qu’une vraie urgence dentaire ?
- Douleur **aiguë**, réveils nocturnes  
- **Gonflement** de la joue ou du cou, fièvre  
- Traumatisme : dent cassée, déplacée ou expulsée  
- Saignement qui ne s’arrête pas  
- Douleur après extraction ou chirurgie, non contrôlée

Dans ces situations, le but est de **soulager**, **stopper l’infection** et éviter les complications.

## Consultation d’urgence : que se passe-t-il ?
1. **Examen clinique ciblé** + imagerie (radio, parfois CBCT).  
2. Mise en place de **mesures antalgiques** et/ou antibiotiques si indiqué.  
3. Geste de **soulagement** : ouverture de la dent, incision-drainage, réalignement ou suture, ajustement d’une prothèse, etc.  
4. Proposition d’un **plan de traitement** pour finaliser (ex. traitement canalaire, extraction, couronne…).

## De quoi dépend le prix d’une urgence ?
- Type de **geste** réalisé (simple consultation vs acte technique)  
- Durée de la séance et **matériel** utilisé (anesthésie, sutures, imagerie 3D…)  
- Complexité : dent déjà traitée, infection étendue, traumatisme important  
- Horaires : intervention **en journée** ou en mode **hors horaires** / nuit selon l’organisation du cabinet

> L’objectif est de **stabiliser** la situation le plus vite possible, puis d’organiser les soins définitifs avec un budget maîtrisé.

### Urgence et soins ultérieurs
La consultation d’urgence couvre les **gestes immédiats**. Les traitements complets (traitement canalaire, couronne, implant, etc.) font l’objet d’un **devis séparé** détaillant les options.

### FAQ
**Puis-je demander uniquement à être soulagé ?** Oui, la priorité est de calmer la douleur et de sécuriser la situation ; la suite est planifiée ensuite.  
**Les urgences de nuit sont-elles plus chères ?** Les interventions en **dehors des horaires habituels** peuvent impliquer des honoraires spécifiques ; ils sont expliqués avant l’acte.  
**Puis-je payer en plusieurs fois ?** Selon les cas, une organisation est possible : n’hésitez pas à en parler lors du devis.

> En cas de douleur aiguë ou de doute, contactez la clinique au plus vite et prenez rendez-vous : [/rendez-vous](/rendez-vous).`,
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
    content: `Les **prothèses dentaires** remplacent une ou plusieurs dents manquantes pour retrouver **fonction** (mastication, phonation) et **esthétique**. Entre prothèse amovible, bridge ou prothèse sur implants, le **prix** dépend du type de solution, des matériaux et du contexte clinique.

## Les grands types de prothèses
### Prothèse amovible partielle
- Remplace plusieurs dents manquantes sur une arcade.  
- S’enlève pour le nettoyage.  
- Option souvent plus **accessible** financièrement, mais nécessite une adaptation.

### Prothèse complète (dentier)
- Quand toutes les dents d’une arcade sont absentes.  
- Peut être **stabilisée** par des implants (attachements).  
- Demande un suivi et des ajustements (réajustage, rebasage).

### Bridge sur dents naturelles
- Appuyé sur les dents voisines préparées.  
- Solution **fixe**, esthétique et confortable.  
- Nécessite de **préparer** (tailler) les dents piliers.

### Prothèse sur implants
- Implique la pose de **racines artificielles** (implants) puis une prothèse fixée ou clipsée.  
- Confort et stabilité supérieurs, préservation de l’os.  
- Investissement plus important, planifié sur plusieurs mois.

## Facteurs qui influencent le prix
- Nombre de **dents à remplacer** et type de prothèse  
- Choix des **matériaux** (résine, métal, céramique, zircone)  
- Travail du **laboratoire de prothèse** (stratification, personnalisation)  
- Besoin éventuel d’**implants**, de greffes ou d’autres soins préalables  
- Nombre de rendez-vous d’essai et d’ajustement

## Comment se déroule la prise en charge à DABIA ?
1. **Bilan** complet (radio, examen clinique, photos).  
2. Discussion des **options** : prothèse amovible, bridge, implants… avec avantages/inconvénients.  
3. **Devis détaillé** incluant les différentes solutions possibles quand cela est indiqué.  
4. Essais, ajustements, conseils d’entretien et **suivi**.

### FAQ
**La prothèse amovible est-elle forcément provisoire ?** Non, elle peut être une solution durable, avec des contrôles réguliers.  
**La prothèse sur implants est-elle toujours possible ?** Elle dépend du **volume osseux**, de l’état général et des attentes du patient ; un bilan 3D est souvent nécessaire.  
**Les prix sont-ils remboursés par les assurances ?** Selon les contrats ; un devis vous permet d’interroger votre assurance ou votre mutuelle.

> Pour discuter des différentes options prothétiques et recevoir un devis personnalisé, prenez rendez-vous : [/rendez-vous](/rendez-vous).`,
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
    content: `Le saignement au brossage est le **premier signal** d’une inflammation gingivale. Bien traitée, la gingivite **régresse** vite ; négligée, elle peut évoluer vers une **maladie parodontale**.

## Reconnaître les signes
- Gencives **rouges**, **gonflées**, **sensibles**, qui saignent  
- Mauvaise haleine, parfois **mobilité** des dents à un stade avancé

## Détartrage simple vs “profond”
- **Détartrage prophylactique** : élimine plaque et tartre **supra-gingival**.  
- **Surfaçage radiculaire** (détartrage “profond”) : quand des **poches** parodontales existent ; on lisse la racine sous anesthésie locale.

## À la maison : l’hygiène qui marche
- Brossage **2–3×/jour** (technique Bass modifiée),  
- **Brossettes interdentaires**/fil selon espace,  
- Bain de bouche **en cure** si indiqué.

## Facteurs aggravants
Tabac, diabète non équilibré, stress, hygiène insuffisante, bagues non nettoyées, etc.

### FAQ
**Le surfaçage est-il douloureux ?** Réalisé sous anesthésie locale, il est **bien toléré**.  
**Puis-je saigner après ?** Oui, transitoire — suivez les consignes.  
**Tous les combien ?** Contrôles tous les **6–12 mois** selon profil de risque.

> Après votre séance, lisez nos [/infos/post-visite](/infos/post-visite) • Prenez RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `Une première visite positive crée une **confiance** durable. Chez DABIA, nous adaptons la consultation à l’âge et au tempérament de l’enfant.

## Quand commencer ?
- **Dès 3 ans**, plus tôt si tache suspecte, chute ou douleur.  
- Bilan **préventif** annuel conseillé.

## Préparer à la maison
- Parlez d’une **rencontre** et non d’“injection” ou de “douleur”.  
- Choisissez un **créneau matin** (enfant reposé).  
- Apportez **doudou**/biberon d’eau.

## À la clinique : déroulé
1. Accueil rassurant, vocabulaire adapté.  
2. Examen doux, conseils d’hygiène, vernis fluor si indiqué.  
3. Plan de prévention personnalisé.

## Caries : prévenir plutôt que guérir
- Limiter grignotages sucrés/boissons sucrées,  
- Brossage **fluoré** 2×/jour (dose adaptée à l’âge),  
- Étanchéité des sillons (sealants) si risque élevé.

### FAQ
**Tétine/biberon ?** À sevrer progressivement ; attention aux biberons sucrés nocturnes.  
**Mon enfant a peur ?** Nous avançons à son rythme, parfois en plusieurs petites étapes.  
**Quand l’orthodontie ?** Dépistage **précoce** si encombrement ou déglutition atypique.

> Ressource parents : [/infos/enfants](/infos/enfants) • RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `Les douleurs nocturnes sont souvent liées à une **inflammation pulpaire** ou à une **carie profonde**. Parfois, un **bruxisme** (serrement/grincement) aggrave la perception douloureuse.

## Causes possibles
- **Carie/pulpite** (douleur pulsatile, chaleur)  
- **Bruxisme** (douleur diffuse au réveil, fatigue musculaire)  
- **Fissures**/fractures  
- **Gingivite** ou abcès

## Que faire en attendant ?
- **Paracétamol** selon notice (pas d’aspirine en cas de saignement).  
- **Froid externe**, tête **surélevée** la nuit.  
- Éviter **sucré/chaud**, rincer à l’eau tiède salée si suppuration.

## Quand consulter d’urgence ?
- Démarrage brutal + gonflement/fièvre,  
- Douleur **non calmée** par les mesures ci-dessus,  
- Traumatisme.

### FAQ
**Le clou de girofle ?** À éviter en automédication, irritation possible.  
**Et si ça passe le matin ?** Le problème reste — faites contrôler.  
**Je serre les dents la nuit ?** Parlez-nous d’une **gouttière** si indiqué.

> Prenez rendez-vous : [/rendez-vous](/rendez-vous).`,
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
    content: `> **Transparence** — Les prix d’un **dentiste à Dakar** dépendent du **diagnostic**, de la **complexité** et des **matériaux**. Dans notre **clinique dentaire à Dakar** (Clinique Dentaire DABIA), un **devis personnalisé** vous est remis avant tout acte.

## Dentiste à Dakar : comprendre les prix en clinique dentaire

## Ce qui influence un tarif
- **Temps clinique** (durée, nombre de séances)  
- **Technique** (matériaux, laboratoire, imagerie)  
- **Complexité** (urgence, greffe, chirurgie guidée)  
- **Garanties et contrôles** (suivi, maintenance)

## Exemples indicatifs (ordre de grandeur)
- **Consultation** : bilan + plan de traitement  
- **Détartrage** : prophylaxie ou surfaçage selon diagnostic  
- **Composite** : selon taille, localisation et esthétisme  
- **Extraction** : simple vs difficile (incluse)  
- **Esthétique** : blanchiment, facettes (sur devis)

> Les actes prothétiques/implantaires nécessitent des **prises d’empreinte**, parfois une **imagerie 3D**. Voir : [/infos/technologie](/infos/technologie).

## Optimiser son budget dentaire
- **Prévention** : contrôles réguliers, hygiène adaptée  
- **Planification** : étaler certaines étapes si possible  
- **Priorisation** : traiter les urgences/inflammations d’abord

### FAQ
**Les assurances couvrent-elles ?** Selon contrat et plafonds.  
**Puis-je avoir plusieurs devis ?** Oui, nous expliquons chaque option.  
**Existe-t-il des alternatives moins coûteuses ?** Parfois : **bridge**, **prothèse amovible**, temporisations.

**Quel type de dentiste à Dakar choisir pour optimiser le budget ?**  
Pour certains actes simples, un cabinet de **proximité** peut suffire ; pour des traitements plus complexes (implantologie, orthodontie, réhabilitation complète), une **clinique dentaire à Dakar** bien équipée (imagerie 3D, scanner intra‑oral, stérilisation structurée) permet souvent un plan plus précis et mieux structuré.

**La Clinique Dentaire DABIA est‑elle une clinique dentaire à Dakar orientée transparence sur les prix ?**  
Oui, nous détaillons le **plan de traitement**, les **options** possibles et remettons un **devis clair** avant les soins. L’objectif est que chaque patient comprenne ce qu’il paie et pourquoi.

> Pour un devis précis après examen : [/rendez-vous](/rendez-vous).`,
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
    content: `Le **traitement canalaire** vise à nettoyer et désinfecter les **canaux** d’une dent dont la pulpe est infectée/inflammée (carie profonde, fracture, choc). Objectif : **soulager**, **prévenir** la réinfection et **conserver** la dent.

## Quand faut-il dévitaliser ?
- Douleur **pulsatile**, réveils nocturnes
- Sensibilités au chaud/froid qui persistent
- **Abcès**, fistule, gonflement
- Fracture/carie profonde atteignant la pulpe

## Étapes du traitement à la Clinique DABIA
1. **Diagnostic** : examen + imagerie (rétro-alvéolaire/CBCT).  
2. **Anesthésie locale** et isolement par **digue**.  
3. **Accès** aux canaux, **mise en forme** mécanique/ultrasons.  
4. **Irrigation** désinfectante activée.  
5. **Obturation** tridimensionnelle à chaud (gutta percha).  
6. **Étanchéité coronaire** (inlay-core/composite) et **couronne** si nécessaire.

## Douleur et suites
- Pendant : procédure **indolore** sous anesthésie.  
- Après : **sensibilité** 24–72h contrôlée par antalgiques.  
- **Antibiotiques** seulement si tableau infectieux systémique.

## Faut-il une couronne après ?
Souvent oui sur les molaires/premolaires fragilisées pour **empêcher la fracture** et garantir l’étanchéité.

## Échecs et retraitements
Une lésion persistante, un canal supplémentaire, une fuite coronaires peuvent nécessiter un **retraitement**.

### FAQ
**Combien de séances ?** 1 à 2 selon l’infection.  
**Peut-on travailler après ?** Oui, sauf cas particuliers.  
**Et si je suis enceinte ?** On adapte l’imagerie et les médications.

> Prenez rendez-vous : [/rendez-vous](/rendez-vous) • Voir nos équipements : [/infos/technologie](/infos/technologie).`,
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
    content: `Les **facettes dentaires** corrigent couleur, **forme** et légers **désalignements** visibles du sourire. À Dakar, dans une **clinique dentaire** comme la Clinique Dentaire DABIA, elles préservent la biologie si l’indication est respectée.

## Pour qui ?
- Teinte non corrigeable au blanchiment
- Dents **usées**, **fendillées**, diastèmes
- Harmonisation du **smile design**

## Matériaux
- **Composite** : direct/indirect, coût plus doux, retouches faciles, longévité moindre.  
- **Céramique** (lithium-disilicate/zircone stratifiée) : **esthétique** et stabilité supérieures.

## Étapes du traitement
1. **Photographies, empreintes/scan**, simulation (mock-up).  
2. **Préparation minimale** (ou no-prep selon cas).  
3. **Empreinte/scan** pour le laboratoire.  
4. **Pose**/collage adhésif sous champ isolé.  
5. **Ajustements** et conseils d’entretien.

## Entretien et longévité
- Hygiène soigneuse, gouttière de **bruxisme** si besoin.  
- Éviter ouvrir des emballages avec les dents (!).

## Prix : de quoi dépend le devis ?
Nombre de facettes, matériau, complexité occlusale/gingivale. **Devis personnalisé** après bilan, souvent précédé d’un **blanchiment**.

### FAQ
**Facettes ou orthodontie/aligneurs ?** Selon l’axe/déplacements souhaités.  
**Durée de vie ?** Plusieurs années si hygiène et occlusion stables.  
**Réversible ?** Pas toujours (préparation).

> Découvrez l’esthétique dentaire : [/all-competences](/all-competences) • RDV : [/rendez-vous](/rendez-vous).`,
  },
  {
    slug: "detartrage-vs-airflow-difference-prophylaxie-dakar",
    title:
      "Détartrage vs AirFlow : quelles différences et quand choisir l’un ou l’autre ?",
    description:
      "Plaque, tartre, taches : comprendre le rôle du détartrage ultrasonique et du jet de poudre AirFlow pour une hygiène optimale.",
    date: "2025-07-19",
    category: "Prévention",
    tags: ["détartrage", "hygiène", "prévention"],
    author: AUTHORS.sao,
    cover: airflowCover,
    readingMinutes: 12,
    content: `**Détartrage** et **AirFlow** sont complémentaires pour maintenir des gencives saines et une surface dentaire propre.

## Détartrage ultrasonique
- Casse le **tartre** supra/sous-gingival.  
- Permet le **surfaçage** en cas de poches parodontales.  
- Ressenti : vibration + irrigation.

## AirFlow (jet poudre + eau)
- Élimine **biofilm** et **taches** (café, thé, tabac).  
- **Moins abrasif** sur l’émail quand bien utilisé.  
- Idéal en **entretien** entre deux détartrages.

## Notre protocole
1. **Bilan** parodontal (indices, sondage).  
2. **Séquence personnalisée** : AirFlow → ultrason/hand-scaler selon besoin.  
3. **Polissage**, instruction d’hygiène, contrôle périodique (6–12 mois).

### FAQ
**AirFlow remplace le détartrage ?** Non, il **complète**.  
**Après bagues/aligneurs ?** Oui, utile pour **zones difficiles**.  
**Puis-je le faire enceinte ?** Oui, protocole adapté.

> Conseils post-visite : [/infos/post-visite](/infos/post-visite) • RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `La **mauvaise haleine** est le plus souvent d’origine **bucco-dentaire** (langue chargée, gingivite, caries). Parfois, la cause est **ORL** ou digestive.

## Causes fréquentes
- **Langue** : enduit riche en composés sulfurés volatils.  
- **Gencives** : inflammation, poches parodontales.  
- **Carie**, restauration infiltrée, **stagnation alimentaire**.  
- **Xérostomie** (bouche sèche), tabac, certains médicaments.

## Le parcours à DABIA
1. **Anamnèse** + examen dentaire/parodontal.  
2. **Dépistage** des causes (langue, saignements, caries).  
3. **Plan** : hygiénisation, traitement parodontal, soin des lésions.  
4. **Conseils** : gratte-langue, hydratation, xylitol, bains de bouche en cure.  
5. **Orientation ORL/Gastro** si suspicion extra-orale.

### FAQ
**Dentifrices miracle ?** Méfiance : privilégier **hygiène** + traitement des causes.  
**Bain de bouche permanent ?** Non : **cures** courtes pour éviter l’**altération du microbiote**.  
**Je jeûne souvent :** hydrate-toi bien, xylitol, contrôle régulier.

> Pour un bilan : [/rendez-vous](/rendez-vous) • Voir prévention : “Détartrage vs AirFlow”.`,
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
    content: `La **carie** est une maladie infectieuse de la dent, favorisée par la **plaque** et les **sucres**. Plus elle est traitée tôt, plus le soin est **simple**, **indolore** et **durable**.

## Reconnaître une carie tôt
- **Tache** blanche ou brune qui s’élargit  
- **Sensibilité** au froid/sucré qui **persiste** après l’arrêt du stimulus  
- **Mauvais goût** ou **haleine** anormale  
- **Aliment qui se coince** dans une cavité

> L’absence de douleur **ne veut pas dire** absence de carie. Beaucoup de lésions sont **silencieuses**.

## Prise en charge à la Clinique DABIA
1. **Bilan** et radiographies ciblées.  
2. **Anesthésie locale** si nécessaire.  
3. **Nettoyage** de la lésion et **restauration** (composite esthétique).  
4. **Contrôle** de l’occlusion et polissage.

## Carie profonde : que se passe-t-il ?
Si la carie touche la **pulpe**, il faut parfois un **traitement canalaire** (dévitalisation) pour sauver la dent, puis une **protection coronaires** (inlay/onlay/couronne).

## Prévention efficace
- **Brossage** 2–3×/jour fluoré, **brossettes**/fil le soir  
- Réduire les **boissons sucrées** et le **grignotage**  
- **Détartrage** et contrôle **tous les 6–12 mois**  
- **Scellement des sillons** chez l’enfant si risque élevé

### FAQ
**La carie se soigne sans fraise ?** Pour les **micro-lésions**, des techniques de **réminéralisation** ou infiltration existent.  
**Grossesse ?** Bilan et soins possibles avec précautions.  
**Douleur la nuit ?** Consultez rapidement : [/rendez-vous](/rendez-vous).`,
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
    content: `Les **dents de sagesse** manquent parfois de place et s’inclinent, provoquant **douleur**, **infections** (péricoronarites) et **dommages** aux dents voisines.

## Symptômes fréquents
- Douleur au **fond de la bouche** (souvent en bas)  
- **Gencive gonflée**, parfois **mauvais goût**  
- Difficulté à **ouvrir** la bouche, irradiation vers l’oreille

## Consultation et examens
- **Panoramique** ou **CBCT** pour position, nerfs et sinus.  
- Décision : **surveillance**, **désinfection** locale, ou **extraction**.

## Extraction : comment ça se passe ?
1. **Anesthésie locale**, parfois sédation légère.  
2. **Dégagement** de la dent incluse, **section** si besoin.  
3. **Sutures** résorbables, consignes post-op (froid, repos, hygiène).

## Suites normales
- **Œdème** 48–72 h, **sensibilité** maîtrisée par antalgiques.  
- Éviter tabac, paille et bains de bouche agressifs les 24 premières heures.

### FAQ
**Toutes les enlever ?** Non : décision **au cas par cas**.  
**Nerf du bas** ? Le CBCT aide à prévenir les risques.  
**Travail le lendemain ?** Selon la difficulté chirurg., prévoyez 1–2 jours.

> Besoin d’un avis ? [/rendez-vous](/rendez-vous) • Technologie : [/infos/technologie](/infos/technologie).`,
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
    content: `Perte de dents ? Les prothèses **modernes** permettent de restaurer **mastication**, **phonation** et **esthétique**. À Dakar, une **clinique dentaire** comme la Clinique Dentaire DABIA vous aide à choisir la solution adaptée selon le **nombre de dents manquantes**, le **volume osseux** et le **budget**.

## Les grandes familles
- **Partielle amovible** : clipsée, économie et facilité d’entretien.  
- **Complète amovible** : lorsque toutes les dents manquent.  
- **Fixe sur dents** : bridges collés ou conventionnels.  
- **Fixe sur implants** : confort et stabilité supérieurs.

## Parcours à DABIA
1. **Bilan global** (gencives, os, occlusion, attentes).  
2. **Plan** personnalisé : temporaires → définitives.  
3. **Essayages** esthétiques/occlusaux, **validation** finale.  
4. **Maintenance** et contrôles réguliers.

## Prothèse sur implant : pour qui ?
Besoin de **stabilité** et d’**esthétique** ; conditions osseuses évaluées par **CBCT**. Possibilité d’arcade complète fixée (All-on-X) selon indications.

### FAQ
**On s’y habitue ?** Quelques jours/semaines, coaching et ajustements.  
**Manger avec une complète ?** Oui, en progressif, mastication bilatérale.  
**Budget ?** Devis détaillé après bilan, étapes possibles.

> Discutez des options : [/rendez-vous](/rendez-vous) • Voir implantologie : “Implant dentaire – Guide”.`,
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
    content: `Une **douleur aiguë** ou une **dent cassée** la nuit/le week-end nécessite des **gestes simples** pour **stabiliser** la situation jusqu’à la consultation.

## Ce qui soulage vraiment
- **Paracétamol** selon notice (éviter aspirine si saignement).  
- **Froid** externe 20 min on/off.  
- **Tête surélevée** pour réduire la pression.  
- **Rinçage eau tiède salée** si suppuration qui draine.

## À éviter absolument
- **Chaleur locale**, alcool, tabac  
- Automédication **antibiotique** sans examen  
- **Bains de bouche** agressifs prolongés

## Cas fréquents
- **Pulpite** (douleur pulsatile) → analgésie + RDV rapide  
- **Abcès** (gonflement + fièvre) → consultation **prioritaire**  
- **Traumatisme** → conserver fragment/dent dans **lait** et venir vite

### FAQ
**Peut-on m’endormir ?** Anesthésie locale + sédation possible selon cas.  
**Je suis enceinte** : protocoles adaptés, signalez-le.  
**Rayons X la nuit ?** Selon urgence, un cliché ciblé suffit souvent.

> Prenez rendez-vous : [/rendez-vous](/rendez-vous) • Conseils post-visite : [/infos/post-visite](/infos/post-visite).`,
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
    content: `Pour **éclaircir** la teinte, on pense au **blanchiment** ; pour corriger **forme**, **alignement léger** et **teinte réfractaire**, on envisage des **facettes**. Dans une **clinique dentaire à Dakar** comme DABIA, les deux solutions peuvent être **complémentaires**.

## Blanchiment : quand et comment ?
- Idéal si **teinte uniforme** à éclaircir  
- Cabinet (rapide) ou gouttières (progressif)  
- **Ne modifie pas** la forme/alignement  
- Entretien : retouches légères si besoin

## Facettes : pour quel résultat ?
- Corrige **couleur**, **forme**, **proportions**, petits **alignements**  
- Composite (direct/indirect) vs **céramique** (esthétique durable)  
- Préparation **minimale** ou no-prep selon cas

## Choisir intelligemment
- **Cas simple** : blanchiment seul  
- **Usure/diastèmes/alignement** : facettes (parfois après blanchiment)  
- **Budget & longévité** : discutés au devis personnalisé

### FAQ
**Les facettes blanchissent-elles ?** Non, elles gardent leur teinte.  
**Blanchiment sur dents sensibles ?** Protocole doux + dentifrice désensibilisant.  
**Réversible ?** Les facettes ne le sont pas toujours.

> Esthétique dentaire : [/all-competences](/all-competences) • RDV : [/rendez-vous](/rendez-vous).`,
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
    content: `La grossesse est une période unique qui s’accompagne de nombreux changements hormonaux et physiologiques. Ces bouleversements touchent aussi la **santé bucco-dentaire** et nécessitent une attention particulière.

## Pourquoi les dents changent-elles pendant la grossesse ?
Les hormones (progestérone et œstrogènes) modifient la réaction des gencives face à la plaque dentaire. Résultat : un risque accru de **gingivite gravidique** (inflammation des gencives chez 60 à 70 % des femmes enceintes).

### Les problèmes fréquents
- **Gencives qui saignent** au brossage.
- **Mauvaise haleine** liée à l’inflammation.
- **Érosion acide** à cause des nausées et vomissements répétés.
- **Caries** favorisées par les grignotages sucrés ou acides.

## Soins dentaires possibles pendant la grossesse
Contrairement aux idées reçues, la grande majorité des soins dentaires sont **sans danger** pour la maman et le bébé :
- **Consultation de contrôle** chaque trimestre.
- **Détartrage** et soins conservateurs : recommandés pour limiter infections et inflammations.
- **Radiographies** : possibles uniquement en cas d’urgence, avec protections adaptées.
- **Antalgiques et antibiotiques** : certains sont compatibles avec la grossesse (toujours prescrits par le praticien).

## Conseils pratiques pour les futures mamans
- Brossez vos dents **2 à 3 fois/jour** avec un dentifrice fluoré.
- Utilisez le **fil dentaire** pour limiter les gingivites.
- Après les nausées, rincez la bouche avec de l’eau bicarbonatée plutôt que de brosser directement.
- Limitez les collations sucrées ou acides.
- Consultez dès l’apparition d’une douleur ou d’un saignement inhabituel.

## Foire aux questions
**Puis-je me faire arracher une dent enceinte ?** Oui, si l’infection menace la santé de la maman.  
**Puis-je blanchir mes dents ?** Non, les traitements esthétiques sont reportés après l’accouchement.  
**Que faire si je ressens une douleur forte la nuit ?** Contactez immédiatement la **Clinique DABIA** : [/rendez-vous](/rendez-vous).

> Une bonne santé bucco-dentaire contribue au bien-être de la maman et du bébé. À Dakar, la Clinique DABIA accompagne les femmes enceintes avec douceur et sécurité.`,
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
    content: `Le **fluor** est l’un des moyens les plus efficaces pour renforcer l’émail et lutter contre les caries. À la Clinique DABIA, nous proposons des **applications de vernis fluoré** pour les enfants comme pour les adultes à risque.

## Pourquoi le fluor est-il essentiel ?
Le fluor a deux actions majeures :
- Il **renforce** l’émail en le rendant plus résistant aux attaques acides.
- Il aide à **réparer** les lésions débutantes avant qu’elles n’évoluent en carie.

## Quand utiliser le vernis fluoré ?
- Chez l’enfant dès l’apparition des premières molaires.
- En cas de risque carieux élevé (grignotage, boissons sucrées, hygiène insuffisante).
- Pour les adultes présentant une **sécheresse buccale** ou porteurs d’appareils orthodontiques.
- Après certains traitements (parodontite, radiothérapie tête/cou).

## Comment se déroule l’application ?
1. Séchage de la dent.
2. Application du vernis fluoré avec un pinceau.
3. Recommandation de ne pas manger/boire pendant 2 heures.

## Est-ce sûr ?
Oui. Les produits sont faiblement dosés, adaptés à l’âge et validés par l’OMS. Le risque de toxicité est **quasi nul** dans le cadre d’une utilisation professionnelle.

## Prévention à la maison
- Dentifrice fluoré 2 à 3 fois par jour.
- Éviter les bains de bouche fluorés répétés sans indication.
- Consulter tous les 6 mois pour évaluer le besoin d’une réapplication.

### FAQ
**Est-ce douloureux ?** Non, l’application est rapide et indolore.  
**Combien de fois par an ?** Tous les 3 à 6 mois selon le risque carieux.  
**Est-ce que ça remplace le brossage ?** Non, c’est un complément.

> À Dakar, la Clinique DABIA accompagne les familles pour protéger le sourire de leurs enfants et adultes grâce au **fluor**.`,
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
    content: `La **peur du dentiste** touche environ 1 patient sur 3. Elle entraîne souvent des retards de soins, aggravant les problèmes dentaires. À Dakar, la Clinique DABIA met en place des solutions de **sédation douce et sécurisée** pour soigner tous les patients, y compris les plus anxieux.

## Quelles techniques de sédation existent ?
1. **Anesthésie locale** classique, quasi indolore grâce aux aiguilles fines et gels anesthésiants.  
2. **MEOPA (gaz hilarant)** : mélange d’oxygène et protoxyde d’azote, respiré par un masque. Effet rapide, anxiété diminuée.  
3. **Sédation orale** : comprimés prescrits avant le rendez-vous (adultes uniquement).  
4. **Sédation intraveineuse** (cas complexes) : réalisée en collaboration avec un anesthésiste.

## Pour qui est-ce indiqué ?
- Les enfants très anxieux ou agités.
- Les adultes phobiques.
- Les patients devant subir des soins longs (implants, extractions multiples).
- Les personnes avec un réflexe nauséeux important.

## Avantages de la sédation
- Réduit le stress et la douleur perçue.
- Permet de réaliser plusieurs soins en une seule séance.
- Améliore la coopération chez les enfants.

## Sécurité
Toutes ces méthodes sont encadrées par des protocoles médicaux stricts. Les doses sont ajustées en fonction de l’âge, du poids et de l’état de santé du patient.

### FAQ
**Vais-je dormir complètement ?** Non, la sédation n’est pas une anesthésie générale. Vous restez conscient mais détendu.  
**Y a-t-il des effets secondaires ?** Très rares, parfois une légère somnolence passagère.  
**Puis-je rentrer seul après une sédation ?** Après MEOPA, oui. Après une sédation orale ou IV, il faut être accompagné.

> La peur du dentiste ne doit plus être un frein. La Clinique DABIA à Dakar vous propose des solutions adaptées pour vous soigner en toute confiance.`,
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
    content: `Les **aligneurs transparents**, comme Invisalign, représentent une révolution en orthodontie. Ils permettent de corriger l’alignement des dents de manière discrète et confortable. À Dakar, de plus en plus d’adultes et d’adolescents optent pour cette solution.

## Comment fonctionnent les aligneurs ?
- Série de gouttières transparentes fabriquées sur mesure.
- Chaque aligneur déplace progressivement les dents.
- À changer toutes les 1 à 2 semaines.

## Indications
- Dents qui se chevauchent.
- Espaces entre les dents (diastèmes).
- Rechutes après un ancien traitement orthodontique.
- Cas esthétiques modérés.

## Avantages
- Discrétion : quasi invisibles.
- Confort : pas de brackets qui blessent.
- Hygiène facile : retrait pour le brossage et les repas.
- Suivi numérique : simulation avant/après.

## Contraintes
- Discipline stricte : port 20–22h par jour.
- Prix supérieur aux traitements classiques.
- Non adaptés aux cas très complexes (chirurgie parfois nécessaire).

## Déroulement du traitement
1. Scanner 3D et photos.
2. Planification numérique du mouvement dentaire.
3. Fabrication des gouttières.
4. Suivi toutes les 6–8 semaines.
5. Contention finale obligatoire.

## Prix et durée
- Durée moyenne : 6 à 18 mois.
- Prix : dépend du nombre de gouttières et de la complexité.

### FAQ
**Est-ce douloureux ?** Une gêne temporaire 2–3 jours après chaque changement.  
**Puis-je manger avec ?** Non, il faut les retirer.  
**Résultats durables ?** Oui, avec contention (fil ou gouttière de nuit).

> La Clinique DABIA propose des traitements par aligneurs avec un suivi personnalisé à Dakar.`,
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
    content: `Lorsqu’une dent est perdue, deux options principales existent pour la remplacer : le **bridge** ou l’**implant**. Le choix dépend de la situation clinique, de l’âge et du budget.

## Le bridge
- Repose sur les dents voisines, taillées pour servir de piliers.
- Indiqué quand ces dents sont déjà abîmées ou couronnées.
- Réalisation rapide (2–3 séances).
- Moins coûteux qu’un implant.

## Les inconvénients du bridge
- Nécessite de réduire des dents parfois saines.
- Ne préserve pas l’os (qui se résorbe sous l’édentement).
- Durée de vie moyenne : 10 à 15 ans.

## L’implant
- Racine artificielle en titane intégrée dans l’os.
- Préserve les dents voisines et l’os.
- Durée de vie supérieure (20+ ans si bonne hygiène).
- Indiqué pour une solution durable.

## Comparatif rapide
- **Durée** : bridge = rapide, implant = plus long (cicatrisation osseuse).  
- **Esthétique** : implant plus naturel.  
- **Entretien** : implant = brossage + fil spécifique.  
- **Prix** : implant généralement plus cher, mais durable.

### FAQ
**Un bridge peut-il être remplacé par un implant plus tard ?** Oui.  
**Implant et diabète ?** Possible si équilibre glycémique.  
**Douleur ?** Pose indolore, cicatrisation maîtrisée.

> La Clinique DABIA à Dakar accompagne les patients pour choisir la solution la plus adaptée : bridge ou implant.`,
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
    content: `Lorsque la dent est abîmée, plusieurs solutions existent. Les plus connues sont la **couronne** et l’**onlay**. Ces restaurations indirectes offrent résistance et esthétique.

## L’onlay
- Recouvre partiellement la dent.
- Conserve plus de structure dentaire saine.
- Réalisé en composite ou en céramique.
- Indiqué pour les caries ou fractures moyennes.

## La couronne
- Recouvre la totalité de la dent.
- Indiquée sur dents dévitalisées ou très fragiles.
- Réalisée en céramique, métal-céramique ou zircone.
- Protège la dent sur le long terme.

## Étapes communes
1. Préparation de la dent.
2. Empreinte ou scan numérique.
3. Réalisation au laboratoire.
4. Pose provisoire, puis définitive.

## Prix et durabilité
- Onlay : coût moyen inférieur, durée 8–12 ans.
- Couronne : plus cher, mais durée 15–20 ans.
- Dans tous les cas : entretien rigoureux indispensable.

### FAQ
**Quelle est la différence esthétique ?** Les deux sont invisibles en céramique.  
**Est-ce douloureux ?** Non, anesthésie locale.  
**Peut-on refaire une couronne ?** Oui, mais il faut parfois retraiter la dent.

> À Dakar, la Clinique DABIA propose couronnes et onlays sur mesure, associant solidité et esthétique.`,
  },
  {
    slug: "cbct-radio-3d-dentaire-a-quoi-sert-dakar",
    title: "CBCT (radio 3D) en dentaire : à quoi ça sert ?",
    description:
      "Implants, endodontie, dents incluses : bénéfices, dose, indications et sécurité de l’imagerie 3D.",
    date: "2025-06-10",
    category: "Technologie",
    tags: ["CBCT Dakar", "radio 3D dentaire", "technologie cabinet"],
    author: AUTHORS.sao,
    cover: cbctCover,
    readingMinutes: 13,
    content: `La **CBCT (Cone Beam Computed Tomography)** est une technologie de radiographie 3D dédiée à la dentisterie. Elle fournit des images précises, avec une irradiation plus faible qu’un scanner médical classique.

## Indications principales
- **Implantologie** : planification des implants avec précision millimétrique.
- **Endodontie** : détection de canaux accessoires, fractures radiculaires.
- **Chirurgie** : dents de sagesse incluses, kystes, lésions osseuses.
- **Orthodontie** : étude des bases osseuses et éruption des dents.

## Avantages
- Image tridimensionnelle.
- Mesures précises de l’os.
- Diagnostic plus fiable.
- Faible irradiation (par rapport au scanner).

## Déroulement de l’examen
1. Installation assise ou debout.
2. Rotation de l’appareil autour de la tête (20 sec).
3. Analyse des images par le dentiste.

## Sécurité
- Dose réduite, adaptée aux enfants si nécessaire.
- Pas d’injection, pas d’examen invasif.

### FAQ
**Est-ce douloureux ?** Non, examen indolore et rapide.  
**Est-ce remboursé ?** Dépend des indications médicales.  
**Puis-je le faire enceinte ?** Déconseillé sauf urgence.

> La Clinique DABIA à Dakar est équipée d’un **CBCT dernière génération** pour des diagnostics et plans de traitement de haute précision.`,
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
    content: `Les enfants sont particulièrement exposés aux **traumatismes dentaires** lors des jeux, du sport ou des chutes. Savoir réagir vite permet souvent de sauver la dent.

## Types de traumatismes
- **Fracture de la couronne** (dent cassée).
- **Luxation** (dent déplacée).
- **Avulsion** (dent complètement sortie).
- **Traumatisme des dents de lait** (choc fréquent chez les 2–5 ans).

## Gestes d’urgence
- Conserver le fragment ou la dent dans du **lait** ou du sérum physiologique.
- Ne pas brosser ni frotter la racine.
- Consulter dans les 30–60 minutes.
- En cas de saignement, appliquer une compresse propre.

## Prise en charge en cabinet
- Radiographie pour évaluer les racines.
- Collage du fragment ou reconstitution avec résine.
- Réimplantation possible d’une dent définitive expulsée.
- Suivi régulier pendant plusieurs mois.

## Cas particulier des dents de lait
- On ne réimplante jamais une dent de lait.
- Surveillance pour éviter de léser la dent définitive sous-jacente.

### FAQ
**Est-ce douloureux ?** Oui, mais une prise en charge rapide limite la douleur.  
**Que faire la nuit ou le week-end ?** Contacter immédiatement un service d’urgence dentaire.  
**Peut-on sauver une dent expulsée ?** Oui, si elle est réimplantée rapidement.

> À Dakar, la Clinique DABIA reçoit les enfants en urgence pour tout traumatisme dentaire.`,
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
    content: `Le **diabète** affecte la santé générale mais aussi la santé bucco-dentaire. Les patients diabétiques présentent un risque accru de maladies parodontales et de complications post-opératoires.

## Quels risques pour les dents ?
- **Parodontite** plus fréquente et plus sévère.
- **Retard de cicatrisation** après extraction ou chirurgie.
- **Sécheresse buccale** favorisant les caries et mycoses.
- Risque accru d’**infections**.

## Pourquoi ?
Un diabète mal équilibré fragilise le système immunitaire et diminue la capacité de défense face aux bactéries buccales.

## Prévention recommandée
- Contrôle glycémique strict.
- Consultation dentaire tous les 6 mois.
- Hygiène rigoureuse (brossage + fil).
- Nettoyage professionnel régulier.

## Soins adaptés à la Clinique DABIA
- Protocoles spécifiques pour limiter les risques infectieux.
- Prescription d’antibiotiques si nécessaire.
- Surveillance rapprochée après les extractions et implants.

### FAQ
**Puis-je avoir un implant avec un diabète ?** Oui, si le diabète est bien équilibré.  
**Dois-je prévenir mon dentiste ?** Absolument, pour adapter les soins.  
**Quels signes doivent alerter ?** Gencives qui saignent, dents qui bougent, mauvaise haleine persistante.

> La Clinique DABIA accompagne les patients diabétiques à Dakar pour préserver leur sourire et leur santé globale.`,
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
    content: `Au Sénégal, de nombreux patients sont couverts par une **IPM**, une **mutuelle** ou une **assurance privée**. Comprendre comment fonctionne la **prise en charge dentaire** permet d’anticiper son budget et d’éviter les mauvaises surprises.

## IPM, mutuelle, assurance : quelles différences ?
- **IPM** (Institution de Prévoyance Maladie) : rattachée à un employeur (SENELEC, SONATEL, EIFFAGE, etc.).  
- **Mutuelle** : structure qui regroupe plusieurs adhérents (fonctionnaires, entreprises, professions libérales…).  
- **Assurance santé privée** : contrat individuel ou collectif, souvent avec un plafond annuel.

Chaque organisme applique ses propres **taux de remboursement** et plafonds pour les soins dentaires.

## Quels soins dentaires sont le plus souvent pris en charge ?
- **Consultations** et **détartrage** de prévention.  
- **Soins conservateurs** : caries, dévitalisations.  
- Certaines **prothèses** (couronnes, prothèses amovibles) et actes d’**implantologie** selon les contrats.  
- Les **urgences dentaires** (douleur aiguë, abcès) avec devis lorsque des soins complémentaires sont nécessaires.

> Les actes esthétiques purs (blanchiment, facettes) sont rarement remboursés ; ils sont expliqués séparément.

## Comment se passe la prise en charge à la Clinique DABIA ?
1. **Consultation** et examen clinique.  
2. Élaboration d’un **plan de traitement** détaillé.  
3. Remise d’un **devis** avec les informations utiles pour votre organisme.  
4. Selon le contrat : **tiers payant** partiel/total ou remboursement après règlement.

Nous travaillons avec de nombreuses **IPM et assurances** (Sunu, AXA, Sonam, Sanlam, etc.) présentées sur notre page dédiée : [/infos/assurances](/infos/assurances).

## Conseils pratiques avant de venir
- Apportez votre **carte IPM/mutuelle** à jour.  
- Renseignez-vous sur votre **plafond annuel dentaire**.  
- Demandez si une **entente préalable** est nécessaire pour les prothèses ou implants.  
- Gardez les **factures** et devis signés pour le remboursement.

## FAQ rapide
**Peut-on connaître le montant remboursé avant les soins ?**  
Souvent oui : votre organisme peut donner une estimation sur la base du devis.

**Les implants sont-ils remboursés ?**  
Cela dépend des contrats. Certains remboursent une partie, d’autres pas du tout.

**Puis-je être soigné si ma carte n’est pas à jour ?**  
Oui, mais les soins seront facturés directement au patient, avec possibilité de remboursement ultérieur si votre organisme l’accepte.

> Pour toute question sur la prise en charge, contactez la Clinique DABIA ou présentez votre carte d’assurance à l’accueil avant la consultation.`,
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
    content: `Au Sénégal, l’**attaya**, le **café** et la **kola** font partie du quotidien. Ces habitudes conviviales ont toutefois un **impact réel** sur les dents, les gencives et l’haleine.

## Taches et coloration des dents
- L’**attaya** (thé vert très infusé) contient des **tanins** qui se fixent sur l’émail.  
- Le **café** et certaines boissons foncées accentuent ces taches.  
- La **kola** colore parfois la muqueuse et laisse des dépôts.

Résultat : un sourire plus **jaune** ou **taché**, surtout si le brossage est insuffisant ou irrégulier.

## Caries et gencives : quel risque ?
- Attaya souvent préparé **très sucré** ⟶ risque de **caries** élevé si pris plusieurs fois par jour.  
- Sucre + acides = terrain favorable pour les **bactéries** responsables de la plaque.  
- Consommation tardive (le soir, après le brossage) ⟶ attaques prolongées sur l’émail.

## Comment limiter les conséquences sans tout arrêter ?
- Réduire le **sucre** ajouté (goûter progressivement moins sucré).  
- Boire de l’**eau** après l’attaya ou le café pour rincer la bouche.  
- Éviter d’enchaîner plusieurs verres sucrés sur la journée.  
- Maintenir un **brossage 2–3×/jour** avec un dentifrice fluoré.

## Détartrage, AirFlow et blanchiment
Un **détartrage régulier** associé à un **AirFlow** permet d’enlever les colorations superficielles liées à l’attaya, au café et à la kola.  
Si la teinte reste foncée, un **blanchiment dentaire** peut être envisagé après un bilan.

## FAQ rapide
**Dois-je arrêter complètement l’attaya ?**  
Non, mais il est préférable de le consommer moins sucré et d’intensifier l’hygiène et les contrôles.

**Le citron dans le thé “nettoie” les dents ?**  
Non, l’acidité du citron fragilise l’émail s’il est utilisé trop souvent ; il faut éviter de garder la boisson en bouche.

**Un simple dentifrice “blancheur” suffit-il ?**  
Il peut aider pour les petites taches, mais ne remplace ni le détartrage, ni l’AirFlow, ni un éventuel blanchiment professionnel.

> La Clinique DABIA à Dakar vous conseille pour garder un sourire lumineux tout en profitant de vos habitudes locales.`,
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
    content: `Beaucoup de patients consultent pour des dents abîmées alors qu’ils ont l’impression de “bien faire”. Certaines **mauvaises habitudes** sont pourtant très fréquentes – et faciles à corriger.

## Erreur 1 : se brosser trop fort
Un brossage **agressif** avec une brosse dure peut user l’émail et abîmer les gencives.
- Préférer une **brosse souple**.  
- Effectuer des **mouvements doux** de la gencive vers la dent.

## Erreur 2 : grignoter sucré toute la journée
Biscuits, jus, bonbons, attaya très sucré… Chaque prise relance l’**attaque acide** sur les dents.
- Limiter le **nombre de prises sucrées**.  
- Boire de l’eau et se brosser les dents après les repas principaux.

## Erreur 3 : utiliser des remèdes maison agressifs
Citron pur, bicarbonate, charbon abrasif : ils peuvent **décaper** l’émail et rendre les dents sensibles.
- Toujours demander **l’avis du dentiste** avant un “truc de grand-mère”.

## Erreur 4 : ignorer les saignements des gencives
Des gencives qui saignent sont **anormales**.
- Consulter pour un **bilan parodontal** et envisager un détartrage ou un surfaçage.

## Erreur 5 : repousser les contrôles
Attendre d’avoir “trop mal” conduit souvent à des soins plus lourds (dé-vitalisations, extractions, prothèses).
- Prévoir une visite tous les **6 à 12 mois**.

## Erreur 6 : fumer sans contrôle dentaire
Le **tabac** masque le saignement, favorise parodontite, taches et mauvaise haleine.
- Un suivi régulier permet de limiter les risques et de dépister tôt.

## Erreur 7 : s’automédiquer avec des antibiotiques
Les antibiotiques sans prescription peuvent masquer les symptômes sans traiter la cause.
- Seul un examen permet de poser le **bon diagnostic** et le bon traitement.

> En corrigeant ces habitudes et en consultant régulièrement, vous protégez durablement vos dents et vos gencives. La Clinique DABIA à Dakar vous accompagne avec des conseils personnalisés.`,
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
    content: `Les **dents de sagesse** (ou troisièmes molaires) sont souvent source de **douleur**, d'infections (**péricoronarite**) et de chevauchement dentaire. À Dakar, leur **extraction** est une intervention courante, réalisée sans douleur grâce aux techniques modernes d'anesthésie.\n\n## Pourquoi extraire les dents de sagesse ?\nL'extraction n'est pas systématique. Elle est recommandée si :\n- **Manque de place** : la dent pousse de travers (enclavée ou incluse) et abîme la dent voisine.\n- **Infection récurrente** : douleur, gonflement de la gencive, difficultés à ouvrir la bouche.\n- **Kyste** ou lésion osseuse visible à la radio.\n- **Carie** impossible à soigner correctement à cause de la position.\n\n## Prix extraction dent de sagesse à Dakar\nLe **prix** varie selon la complexité :\n- **Extraction simple** (dent sortie) : tarif standard.\n- **Extraction chirurgicale** (dent incluse/sous la gencive) : nécessite une petite incision, des sutures et parfois une imagerie 3D (**CBCT**). Le coût est légèrement supérieur.\nUn **devis clair** est toujours établi avant l'intervention.\n\n## Déroulement de l'intervention\n1. **Bilan Radiographique** : Panoramique ou Scanner 3D pour visualiser les racines et le nerf mandibulaire.\n2. **Anesthésie Locale** : Intervention totalement **indolore**.\n3. **Extraction** : Rapide et précise.\n4. **Sutures** : Fils résorbables pour une meilleure cicatrisation.\n\n## Conseils post-opératoires pour éviter le gonflement\n- **Froid** : Appliquer une poche de glace sur la joue (20 min toutes les heures) le premier jour.\n- **Alimentation** : Molle et tiède/froide pendant 48h (biogourts, glaces, purées).\n- **Hygiène** : Pas de bains de bouche le jour même. Brossage doux dès le lendemain.\n- **Repos** : Éviter le sport intense pendant 3-4 jours.\n\n> Vous ressentez une douleur au fond de la mâchoire ? Prenez rendez-vous pour une évaluation : [/rendez-vous](/rendez-vous).`,
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
    content: `Le **Hollywood Smile** n'est plus réservé aux stars. Grâce aux **facettes dentaires**, vous pouvez corriger la forme, la teinte et l'alignement de vos dents de manière durable et spectaculaire. À Dakar, la Clinique DABIA propose des facettes haut de gamme en **céramique** et en **composite**.\n\n## Qu'est-ce qu'une facette dentaire ?\nC'est une fine pellicule (comme une lentille de contact) collée sur la face visible de la dent. Elle permet de masquer :\n- Des dents **tachées** ou jaunes (résistantes au blanchiment).\n- Des dents **cassées** ou usées.\n- Des **écarts** (diastèmes) entre les dents.\n- De légers **chevauchements**.\n\n## Facette Céramique vs Composite : Prix et Différences\n### Facettes Céramique (Emax / Zircone)\n- **Esthétique** : Résultat ultra-naturel, translucidité parfaite.\n- **Durabilité** : Très résistantes, ne changent pas de couleur (15-20 ans).\n- **Prix** : Investissement plus important.\n### Facettes Composite\n- **Esthétique** : Très beau résultat, réalisé directement au fauteuil.\n- **Durabilité** : Moins résistantes que la céramique, peuvent se ternir (5-7 ans).\n- **Prix** : Plus abordable.\n\n## Comment obtenir un Hollywood Smile à Dakar ?\n1. **Consultation Esthétique** : Photos, analyse du sourire (Smile Design).\n2. **Mock-up** : Essai du futur sourire en résine provisoire (sans toucher vos dents) pour valider la forme.\n3. **Préparation** : Légère préparation de l'émail (parfois sans préparation "No-Prep").\n4. **Pose** : Collage minutieux des facettes définitives.\n\n## Entretien\nComme vos dents naturelles : brossage soigné, fil dentaire et visite de contrôle annuelle.\n\n> Envie de sublimer votre sourire ? Demandez votre consultation esthétique : [/rendez-vous](/rendez-vous).`,
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
    content: `Vous rêvez de dents alignées mais refusez de porter des bagues métalliques ? L'**orthodontie invisible** par aligneurs (type **Invisalign**) est la solution idéale pour les adultes et adolescents actifs à Dakar.\n\n## Pourquoi choisir Invisalign à Dakar ?\n- **Discrétion Absolue** : Les gouttières sont transparentes et quasi-invisibles.\n- **Confort** : Pas de métal, pas de blessures aux joues ou aux lèvres.\n- **Hygiène Facilitée** : Les aligneurs sont amovibles. Vous les retirez pour manger et vous brosser les dents.\n- **Visualisation** : Grâce au scanner 3D, vous voyez le résultat final virtuel avant même de commencer.\n\n## Pour quels problèmes ?\nInvisalign est efficace pour corriger :\n- Chevauchements dentaires.\n- Espacements (dents écartées).\n- Problèmes d'occlusion (articulé croisé, supraclusion).\n\n## Durée et Prix du traitement\nLa durée varie de **6 à 18 mois** selon la complexité. Le **prix** dépend du nombre d'aligneurs nécessaires. Bien que souvent plus coûteux que les bagues traditionnelles, le confort et l'esthétique justifient l'investissement pour de nombreux patients.\n\n## Déroulement\n1. **Scan 3D** : Empreinte numérique de vos dents (fini la pâte à empreinte !).\n2. **ClinCheck** : Planification vidéo du mouvement de vos dents.\n3. **Pose** : Remise de vos premiers aligneurs.\n4. **Suivi** : Visites de contrôle toutes les 6 à 8 semaines.\n\n> Prêt à transformer votre sourire en toute discrétion ? Prenez rendez-vous pour un scan 3D : [/rendez-vous](/rendez-vous).`,
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
    content: `Perdre une dent n'est pas une fatalité. Pour la remplacer, deux solutions principales s'offrent à vous à Dakar : l'**implant dentaire** et le **bridge**. Comment choisir la meilleure option ? Voici un comparatif détaillé.\n\n## L'Implant Dentaire : La référence\nC'est une racine artificielle en titane insérée dans l'os.\n- **Avantages** : Solution la plus **durable** (à vie souvent), préserve les dents voisines, stimule l'os, sensation identique à une dent naturelle.\n- **Inconvénients** : Nécessite une petite chirurgie, délai de cicatrisation (3-4 mois), coût initial plus élevé.\n\n## Le Bridge Dentaire : L'alternative classique\nC'est un pont de 3 dents qui s'appuie sur les dents voisines.\n- **Avantages** : Rapide (réalisé en 2-3 semaines), esthétique, moins cher que l'implant dans certains cas.\n- **Inconvénients** : Oblige à **tailler** (mutiler) les dents voisines, risque de carie sous les piliers, l'os continue de fondre sous la dent remplacée.\n\n## Comparatif Prix à Dakar\nÀ première vue, le **bridge** semble moins cher. Cependant, si l'on considère la durée de vie et le fait qu'il faille souvent le refaire après 10-15 ans, l'**implant** est souvent plus économique sur le long terme.\n\n## Le verdict du dentiste\nNous privilégions l'**implant dentaire** car il est plus conservateur (on ne touche pas aux autres dents). Le bridge reste une bonne option si les dents voisines sont déjà abîmées ou si l'implant est contre-indiqué (manque d'os sévère, problèmes de santé).\n\n> Une dent manquante ? N'attendez pas que les autres dents bougent. Demandez conseil : [/rendez-vous](/rendez-vous).`,
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
    content: `**"Je suis enceinte, puis-je aller chez le dentiste ?"** La réponse est **OUI**, c'est même fortement recommandé ! Les changements hormonaux pendant la grossesse fragilisent les dents et les gencives. À Dakar, nous accompagnons les futures mamans pour une grossesse sereine.\n\n## Gingivite de grossesse : Attention !\nLes hormones augmentent la réaction des gencives à la plaque dentaire. Résultat : gencives rouges, gonflées qui saignent (**gingivite gravidique**). Si elle n'est pas traitée, elle peut évoluer vers une parodontite, qui est un facteur de risque pour l'**accouchement prématuré**.\n\n## Quels soins sont autorisés ?\n- **Détartrage** : Indispensable pour calmer l'inflammation gingivale.\n- **Soins de caries** : Une carie non soignée est un nid à bactéries dangereux pour maman et bébé.\n- **Anesthésie** : Nous utilisons des anesthésiants compatibles et sans danger pour le fœtus.\n- **Radiographies** : Évitées par précaution, mais possibles en cas d'urgence absolue avec un tablier de plomb.\n\n## Le meilleur moment pour consulter\nLe **2ème trimestre** est idéal pour les soins courants. En cas d'urgence (douleur, infection), il faut consulter **immédiatement**, quel que soit le stade de la grossesse.\n\n## Conseils pour les futures mamans\n1. **Hygiène irréprochable** : Brossage 2x/jour + fil dentaire.\n2. **Nausées/Vomissements** : Rincez-vous la bouche à l'eau (ne brossez pas tout de suite pour ne pas abîmer l'émail fragilisé par l'acide).\n3. **Alimentation** : Attention aux fringales sucrées !\n\n> Prenez soin de vous et de votre bébé. Programmez votre contrôle dentaire : [/rendez-vous](/rendez-vous).`,
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
    content: `La **peur du dentiste** (ou stomatophobie) empêche de nombreux patients de se soigner, aggravant souvent leur état dentaire. À Dakar, la Clinique DABIA a mis en place une approche "Zero Douleur" et bienveillante pour vous réconcilier avec les soins.\n\n## Une approche bienveillante\nTout commence par l'**écoute**. Nous prenons le temps de comprendre vos peurs (douleur, bruit, piqûre...). Vous gardez le contrôle pendant le soin : un simple geste de la main et nous arrêtons tout.\n\n## Solutions techniques contre la douleur\n- **Anesthésie locale topique** : Un gel anesthésiant est appliqué sur la gencive *avant* la piqûre. Vous ne sentez quasiment rien.\n- **Anesthésie efficace** : Nous attendons que la dent soit *totalement* endormie avant de commencer. Aucune douleur n'est tolérée.\n\n## La Sédation Consciente (MEOPA) / Gaz Hilarant\nPour les patients très anxieux ou les enfants, nous pouvons utiliser une sédation légère. Vous respirez un mélange gazeux relaxant. Vous restez éveillé mais **totalement détendu**, l'anxiété disparaît et la perception du temps est modifiée.\n\n## Conseils pour les phobiques\n1. **Venez tôt** (mais pas trop) pour ne pas stresser en salle d'attente.\n2. **Écoutez de la musique** : Apportez vos écouteurs pour vous isoler des bruits.\n3. **Commencez petit** : Un simple détartrage ou contrôle pour reprendre confiance.\n\n> Ne laissez pas la peur gâcher votre sourire. Venez nous rencontrer pour une discussion sans engagement : [/rendez-vous](/rendez-vous).`,
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
    content: `Perdre une dent peut affecter le sourire et la mastication. L'**implant dentaire** est aujourd'hui la solution de référence à Dakar pour remplacer une dent de façon fixe et durable, sans abîmer les dents voisines.

## Qu'est-ce qu'un implant dentaire ?
C'est une racine artificielle en titane insérée dans l'os de la mâchoire. Une fois cicatrisée (ostéointégration), on y visse une couronne en céramique pour redonner l'apparence et la fonction d'une dent naturelle.

## Déroulement de la pose à la Clinique DABIA
1. **Bilan 3D (CBCT)** : Indispensable pour vérifier le volume osseux et choisir la taille de l'implant.
2. **Pose chirurgicale** : Intervention sous anesthésie locale, totalement **indolore**. Durée : 30 à 60 min.
3. **Cicatrisation** : Période de 3 à 4 mois pour que l'os fusionne avec l'implant. Une prothèse provisoire peut être posée pour l'esthétique.
4. **Pose de la couronne** : Prise d'empreinte (souvent numérique) et fixation de la dent définitive.

## Prix d'un implant dentaire à Dakar
Le tarif varie selon la marque de l'implant, la nécessité d'une greffe osseuse et le type de couronne (Zircone ou Céramo-métal). À la Clinique DABIA, nous proposons un devis détaillé incluant :
- La chirurgie (pose de l'implant)
- L'accastillage (pilier)
- La couronne définitive

> **Bon à savoir** : C'est un investissement sur le long terme. Contrairement à un bridge (qui mutile les dents voisines) ou un appareil amovible, l'implant préserve votre capital osseux.

## Est-ce douloureux ?
Non. La pose se fait sous anesthésie locale efficace. Les suites opératoires sont généralement simples (léger gonflement), bien gérées avec des antalgiques classiques et de la glace.

Prenez rendez-vous pour un **bilan implant** et retrouvez le plaisir de croquer la vie à pleines dents : [/rendez-vous](/rendez-vous).`,
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
    content: `Il n'est jamais trop tard pour aligner ses dents ! L'**orthodontie adulte** est en plein essor à Dakar. Fini les sourires métalliques "de collégien", place à des solutions discrètes et efficaces.

## Les options pour adultes
### 1. Les Aligneurs Invisibles (type Invisalign)
C'est la solution préférée des actifs.
- **Invisible** : Des gouttières transparentes quasi-imperceptibles.
- **Amovible** : On les retire pour manger et se brosser les dents (hygiène top !).
- **Confortable** : Pas de fils qui piquent.
- **Efficace** : Traite des cas simples à complexes.

### 2. Les Bagues Céramiques
Des attaches collées sur les dents, mais de couleur "dent" ou transparentes.
- **Discret**, bien que visible de près.
- **Fixe** : Agit en continu, ne demande pas de discipline de port.
- **Prix** : Souvent un peu plus économique que les aligneurs.

## Pourquoi aligner ses dents adulte ?
Au-delà de l'esthétique, des dents alignées :
- Facilitent le brossage (moins de risque de déchaussement).
- Améliorent l'occlusion (moins d'usure des dents).
- Préviennent les douleurs articulaires.

## Durée et Prix
Un traitement adulte dure entre **6 et 24 mois** selon la complexité. Le coût dépend de la technique et de la durée.
À la Clinique DABIA, nous réalisons un **bilan orthodontique** complet (photos, radio, empreinte numérique) pour vous proposer la solution la plus adaptée à votre vie sociale et professionnelle.

> Envie d'un sourire aligné sans que ça se voie ? Demandez une simulation **scanner intra-oral** lors de votre consultation.`,
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
    content: `Café, thé, attaya, épices... Avec le temps, nos dents jaunissent. Pour retrouver de l'éclat en toute sécurité, le **blanchiment dentaire médical** réalisé par un chirurgien-dentiste à Dakar est la seule option fiable qui préserve votre émail.

## Blanchiment au cabinet (Fauteuil) vs "Bars à sourire"
Il est crucial de distinguer le soin médical des produits en vente libre ou instituts non médicaux.
- **Le Dentiste** utilise des produits (peroxyde) à des concentrations efficaces, uniquement autorisées aux professionnels de santé. Il protège vos gencives avec une barrière spéciale.
- **Le Résultat** est immédiat et contrôlé.

## Le Protocole Clinique DABIA
1. **Bilan préalable** : On vérifie l'absence de caries ou de contre-indications (gencives saines obligatoires !).
2. **Détartrage + Polissage** : Pour enlever le tartre et les taches de surface (tabac, attaya).
3. **Séance de Blanchiment** : Application du gel éclaircissant activé par une lampe spécifique. Durée : environ 1h.
4. **Kit ambulatoire (optionnel)** : Des gouttières sur mesure pour entretenir le résultat à la maison.

## Est-ce que ça abîme l'émail ?
**Non**, si c'est fait par un professionnel. Le produit agit en profondeur sur les pigments sans "rayer" l'émail (contrairement au charbon ou citron).

## Sensibilité ?
Une sensibilité au froid peut survenir pendant 24 à 48h. Nous appliquons des gels désensibilisants pour votre confort.

> **Conseil** : Évitez les aliments colorés (curry, vin rouge, café) pendant 2-3 jours après le soin pour stabiliser la teinte.

Redonnez de l'éclat à votre sourire avant un événement ou simplement pour vous faire plaisir.`,
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
    content: `"Il faut dévitaliser la dent". Cette phrase fait souvent peur. Pourtant, le **traitement de canal** (endodontie) est un acte conservateur qui permet de **garder votre dent** plutôt que de l'extraire.

## Quand doit-on dévitaliser ?
Lorsque la carie est trop profonde et a atteint le nerf (pulpe), ou après un choc violent. Le nerf s'infecte ou se nécrose, provoquant souvent une douleur aiguë (la fameuse rage de dent) ou un abcès.

## Les étapes du traitement à la Clinique DABIA
Grâce aux technologies modernes (localisateur d'apex, instruments rotatifs), ce soin est aujourd'hui rapide et sûr :
1. **Anesthésie** : La dent est totalement endormie.
2. **Nettoyage** : On retire le nerf infecté et on désinfecte l'intérieur des racines.
3. **Obturation** : On rebouche les canaux de manière étanche pour éviter toute réinfection.
4. **Reconstitution** : La dent dévitalisée est plus fragile. Il est souvent indispensable de poser une **couronne** ou un **onlay** pour la consolider et éviter qu'elle ne casse.

## Est-ce que ça fait mal ?
C'est souvent le contraire ! La dévitalisation **soulage** la douleur de l'infection. L'acte lui-même se fait sous anesthésie et est indolore. Une légère sensibilité à la pression peut durer quelques jours après.

> **Sauver sa dent naturelle** est toujours la meilleure option. L'implant ne vient qu'en dernier recours.

Si vous ressentez une douleur au froid, au chaud ou à la mastication, ne tardez pas. Une prise en charge rapide évite l'abcès et l'extraction.`,
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
    content: `Les **dents de sagesse** (3èmes molaires) apparaissent souvent entre 17 et 25 ans. Elles manquent parfois de place, provoquant douleurs ou infections. À Dakar, nous évaluons la nécessité de les extraire au cas par cas grâce à la radiographie panoramique.

## Pourquoi les enlever ?
- **Manque de place** : Elles poussent les autres dents et peuvent perturber un alignement orthodontique.
- **Infection (Péricoronarite)** : La gencive recouvre partiellement la dent, créant une poche où les bactéries prolifèrent (douleur, gonflement).
- **Carie** : Positionnées très loin, elles sont difficiles à brosser et se carient vite.
- **Kyste** : Parfois autour d'une dent incluse.

## L'intervention à la Clinique DABIA
- **Anesthésie locale** efficace.
- Extraction douce (parfois en fractionnant la dent pour préserver l'os).
- Points de suture (souvent résorbables).
- Durée : De 20 min à 1h selon la difficulté.

## Suites opératoires (Après l'extraction)
- **Gonflement** : Fréquent ("joue de hamster"), il diminue après 3 jours. Glacez bien !
- **Alimentation** : Molle et tiède/froide pendant 48h (yaourts, purées, glaces). Pas d'épices, pas d'alcool.
- **Hygiène** : Brossage doux, bains de bouche prescrits à commencer le lendemain.

> **Faut-il les enlever préventivement ?** Pas systématiquement. Si elles sont saines, bien positionnées et fonctionnelles, on les garde !

Une radio panoramique permet de trancher. Si vous avez mal au fond de la mâchoire, consultez pour éviter l'infection.`,
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
    content: `Le **détartrage** est le soin dentaire le plus courant, et pourtant, beaucoup de patients attendent d'avoir mal aux gencives pour consulter. À Dakar, le **prix d'un détartrage** est accessible et reste le meilleur investissement pour éviter des soins lourds (et chers) plus tard.

## Pourquoi le tartre est-il dangereux ?
Le tartre est une plaque dentaire calcifiée que la brosse à dents ne peut plus enlever. S'il s'accumule :
- **Gingivite** : La gencive gonfle et saigne (très fréquent).
- **Mauvaise haleine** : Les bactéries logées dans le tartre libèrent des odeurs.
- **Déchaussement** : À long terme, l'os se résorbe et les dents bougent.

## Combien coûte un détartrage à Dakar ?
Le **prix** varie selon la complexité :
1. **Détartrage simple** : Si réalisé régulièrement (tous les 6 mois), c'est un acte rapide.
2. **Détartrage approfondi / Surfaçage** : Si le tartre est sous la gencive depuis longtemps, le soin demande plus de temps et parfois une anesthésie. Le tarif sera logiquement plus élevé.

> En moyenne, le coût d'un détartrage est bien inférieur à celui de soigner une carie ou de poser une dent !

## Comment ça se passe à la Clinique DABIA ?
1. **Ultrasons** : Pour décoller le tartre sans abîmer l'émail.
2. **Polissage / AirFlow** : Pour enlever les taches (thé, café, cigarette) et rendre les dents lisses.
3. **Conseils** : On vous montre les zones que vous brossez moins bien.

> Ne laissez pas le tartre s'installer. Prenez rendez-vous pour un sourire propre et sain.`,
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
    content: `Remplacer des dents manquantes est essentiel pour manger et sourire. Si l'implant reste la solution "idéale", la **prothèse amovible** (le "dentier") est une option plus économique et très courante à Dakar.

## Les différents types de prothèses
Le **prix** dépend du matériau et du nombre de dents à remplacer :

### 1. La prothèse en résine (Partielle ou Complète)
- C'est la solution la plus **économique**.
- Idéale comme appareil provisoire après une extraction, ou définitif si le budget est serré.
- Elle repose sur la gencive.

### 2. Le Stellite (Métal + Résine)
- Plus **fin**, plus **solide** et plus stable.
- Une armature en métal s'appuie sur les dents restantes avec des crochets discrets.
- Plus confortable que la résine pure car il encombre moins le palais.

### 3. La prothèse flex (Valplast)
- Une résine souple et incassable, sans crochets métalliques visibles.
- Très esthétique pour remplacer quelques dents.

## Quel est le prix à Dakar ?
Le tarif se calcule souvent selon :
- Le type (Résine simple vs Stellite).
- Le nombre de dents (Appareil 1 dent vs Complet).
- L'origine des dents (Qualité standard vs Dents haut de gamme).

Un devis précis est remis après l'examen clinique, car il faut vérifier l'état des dents supports.

## L'entretien
Une prothèse doit être nettoyée chaque jour (hors de la bouche) pour éviter les infections (candidoses). À la Clinique DABIA, nous vous expliquons comment la garder neuve longtemps.

> Vous hésitez entre un appareil et des implants ? Venez en discuter pour comparer les devis et le confort.`,
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
      "Prix radio dentaire et scanner 3D (CBCT) à Dakar : pourquoi faire un bilan ?",
    description:
      "Panoramique, rétro-alvéolaire ou Scanner 3D : quel est le coût de ces examens indispensables pour un diagnostic précis ?",
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
    content: `"Pourquoi faire une radio alors que je vois le trou ?" C'est une question fréquente. Pourtant, ce qui se passe **sous** la dent (la racine, l'os) est invisible à l'œil nu. À Dakar, la Clinique DABIA est équipée pour réaliser tous vos examens sur place.

## Les types de radios et leurs prix
Les tarifs varient selon la technologie :

1. **La radio rétro-alvéolaire (Petite radio)**
   - Cible 1 ou 2 dents.
   - Idéal pour une rage de dent, vérifier une carie profonde ou un traitement de racine.
   - **Coût** : Très accessible.

2. **La radio Panoramique**
   - Donne une vue d'ensemble de toute la mâchoire (dents de sagesse, infections silencieuses, niveau d'os).
   - Indispensable pour un premier bilan complet.
   - **Coût** : Moyen.

3. **Le Scanner 3D (CBCT)**
   - Une image en 3 dimensions.
   - **Obligatoire** pour poser des implants en sécurité ou comprendre une douleur complexe.
   - **Coût** : Plus élevé qu'une radio classique, mais évite des erreurs graves.

## Pourquoi payer pour un diagnostic ?
Un devis basé uniquement sur un "coup d'œil" est un devis risqué. 
- La radio révèle l'ampleur réelle des dégâts.
- Elle permet de savoir si la dent est **récupérable** ou non.
- Elle évite de commencer un soin inutile.

> Chez nous, le prix de la consultation et de l'imagerie est transparent. C'est l'assurance d'un plan de traitement fiable.`,
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
    content: `Recevoir un **devis dentaire** peut parfois surprendre. Pourquoi une couronne coûte-t-elle ce prix ? Pourquoi y a-t-il des écarts entre deux cabinets à Dakar ? Voici les clés pour lire votre devis.

## De quoi est composé le prix ?
Quand vous payez un soin, vous payez pour :
1. **L'expertise du praticien** : Sa formation continue, sa spécialisation.
2. **La technologie** : Scanner 3D, Caméra optique, Moteurs d'endodontie...
3. **La stérilisation** : Un poste de dépense énorme mais CRUCIAL pour votre sécurité (autoclaves classe B, traçabilité).
4. **Les matériaux** : Une résine composite de haute qualité ou un implant de marque reconnue coûte plus cher qu'un produit générique.
5. **Le laboratoire** : La prothèse est-elle faite par un prothésiste artisan qualifié ?

## Le devis "Low Cost" vs Le devis "Juste"
Attention aux prix d'appel trop bas. 
- Un détartrage fait en 5 minutes n'est pas le même qu'un détartrage complet de 30 minutes. 
- Une couronne qui s'adapte mal créera une carie en dessous dans 2 ans.

## La transparence à la Clinique DABIA
- Avant de commencer, nous vous remettons un **plan de traitement écrit**.
- Nous expliquons chaque ligne : "Pourquoi cette dent a besoin d'une couronne et pas juste d'un plombage ?".
- Nous proposons des **options** quand c'est possible (ex: Bridge vs Implant).

> Un bon patient est un patient informé. N'hésitez jamais à poser des questions sur votre devis !`,
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
    content: `"J'ai juste un petit trou". C'est souvent ce qu'on pense, mais la carie est comme un iceberg. Le **prix pour la soigner à Dakar** dépend directement du stade où vous venez consulter.

## Stade 1 : La carie débutante (Prix : € / FCFA le moins cher)
- La carie touche juste l'émail ou un peu la dentine.
- **Le soin** : On nettoie et on pose un **composite** (plombage blanc esthétique).
- C'est rapide, indolore et économique.

## Stade 2 : La carie profonde (Prix : Moyen)
- La dent est très abîmée mais le nerf est vivant.
- Un simple plombage risque de casser.
- **Le soin** : On peut proposer un **Onlay** (une pièce en céramique fabriquée sur mesure) pour consolider la dent durablement.

## Stade 3 : La rage de dent (Prix : Élevé)
- La carie a atteint le nerf. Il faut **dévitaliser** (traitement de racine).
- C'est un acte long, technique et minutieux.
- Après la dévitalisation, la dent est fragile et nécessite souvent une **couronne** pour ne pas casser.
- **Coût total** : Dévitalisation + Reconstruction + Couronne = Beaucoup plus cher qu'un simple soin du stade 1.

> **Le conseil économique** : Plus vous attendez, plus le trou grandit, et plus la facture monte. Soigner une carie dès qu'elle est petite est la meilleure façon de faire des économies !`,
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
    content: `La question du **prix des soins dentaires à Dakar** est souvent source d'inquiétude. Entre les variations de tarifs et la crainte de la facture finale, beaucoup repoussent leurs soins. Voici un guide pour comprendre les coûts et l'importance de la transparence.

## Les tarifs moyens observés à Dakar
Bien que chaque cas soit unique, voici une fourchette de prix pour les actes courants :
- **Consultation** : Souvent entre 10 000 et 20 000 FCFA selon le cabinet.
- **Détartrage** : Indispensable pour la santé, il varie selon la complexité.
- **Extraction** : Dépend de la difficulté (dent de sagesse incluse ou dent simple).

## Pourquoi les prix varient-ils ?
Le tarif d'un soin dentaire inclut bien plus que le temps passé sur le fauteuil :
1. **La technologie** : Un cabinet équipé de radio panoramique ou 3D investit pour un meilleur diagnostic.
2. **L'hygiène** : La chaîne de stérilisation (autoclaves, sachets) a un coût incompressible pour votre sécurité.
3. **Les matériaux** : Utiliser des composites de marque ou des implants certifiés influence le prix final.

## L'importance du devis écrit
À la Clinique DABIA, nous nous engageons à la transparence totale.
- Avant tout soin onéreux (prothèse, chirurgie), un **devis détaillé** vous est remis.
- Il explique le plan de traitement : pourquoi ce soin, combien de séances, et le coût exact.
- Pas de surprise à la caisse : tout est clair dès le départ.

> **Conseil** : Ne choisissez pas votre dentiste uniquement sur le prix. La qualité du diagnostic et de la stérilisation sont garants de votre santé à long terme.`,
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
    content: `Une **urgence dentaire** prévient rarement. Que ce soit un samedi soir ou en plein travail, la douleur peut être paralysante. Voici les bons réflexes à avoir à Dakar.

## Identifier l'urgence
Toutes les douleurs ne sont pas des urgences vitales, mais nécessitent une attention rapide :
- **Douleur pulsatile** (qui tape) : Souvent une pulpite (rage de dent).
- **Gonflement (Chique)** : Signe d'infection ou d'abcès. Consultez rapidement pour éviter la propagation.
- **Traumatisme** : Dent expulsée ou cassée après une chute.

## Gestes de premiers secours
En attendant d'arriver au cabinet :
1. **Rage de dent** : Prenez du Paracétamol. Évitez l'anti-inflammatoire en automédication si vous suspectez une infection. Restez assis ou la tête surélevée.
2. **Dent expulsée** : Récupérez la dent par la couronne (pas la racine). Conservez-la dans du lait ou de la salive. Venez au cabinet dans l'heure !
3. **Abcès** : Ne mettez pas de chaud (ça active l'infection). Mettez une poche de glace sur la joue.

## Où aller à Dakar ?
La Clinique DABIA reçoit les urgences sur rendez-vous prioritaire. Contactez-nous dès l'ouverture ou via notre numéro d'urgence si disponible.
Ne restez pas avec la douleur, une infection dentaire peut avoir des répercussions sur la santé générale.

> **Important** : Si vous avez du mal à respirer, à avaler ou si la fièvre est très élevée, rendez-vous aux urgences de l'hôpital le plus proche.`,
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
    content: `Avec les nombreux cabinets qui ouvrent, trouver le **meilleur dentiste à Dakar** pour vous peut sembler complexe. Au-delà du bouche-à-oreille, voici des critères objectifs pour faire votre choix.

## 1. L'Hygiène et la Stérilisation
C'est le critère N°1. Un cabinet moderne doit avoir une chaîne de stérilisation stricte.
- Les instruments sont-ils sous sachets stériles ?
- Le praticien porte-t-il des gants et un masque ?
- L'environnement semble-t-il propre et entretenu ?

## 2. L'Écoute et la Pédagogie
Un bon dentiste prend le temps de vous expliquer.
- Il ne se contente pas de soigner, il vous montre (caméra intra-orale, radios).
- Il vous présente les différentes options de traitement.
- Il est à l'écoute de votre peur ou de votre douleur.

## 3. Le Plateau Technique
La dentisterie moderne s'appuie sur la technologie pour être plus précise et moins douloureuse.
- Radio panoramique sur place (évite de courir ailleurs).
- Fauteuils confortables.
- Matériel d'endodontie mécanisé pour des soins de racine plus sûrs.

## 4. La Relation de Confiance
Votre dentiste est un partenaire santé pour le long terme. Choisissez quelqu'un avec qui vous vous sentez à l'aise, qui respecte ses horaires et qui est transparent sur ses honoraires.

> À la Clinique DABIA, nous misons sur l'accueil, la technologie et une hygiène irréprochable pour mériter votre confiance.`,
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
    content: `Avoir un sourire éclatant est un signe de beauté et de santé très prisé au Sénégal. Mais attention, toutes les méthodes de **blanchiment dentaire** ne se valent pas, et certaines sont dangereuses.

## Les "Astuces" à éviter
Sur les réseaux sociaux, on voit tout et n'importe quoi :
- **Le Bicarbonate et Citron** : Très acide et abrasif, ce mélange use l'émail de vos dents de manière irréversible. Vos dents deviendront plus jaunes (car la dentine sous l'émail est jaune) et plus sensibles.
- **Le Charbon actif** : Il enlève les taches de surface par abrasion, mais raye l'émail à long terme. À utiliser avec grande modération.

## Le Blanchiment Professionnel au fauteuil
C'est la seule méthode sûre et vraiment efficace pour éclaircir la teinte de la dent.
- **Le principe** : On utilise un gel à base de peroxyde d'hydrogène (eau oxygénée) concentré.
- **La sécurité** : On protège vos gencives avec une barrière étanche pour éviter les brûlures.
- **Le résultat** : Un éclaircissement visible en une séance, durable si l'entretien est bon.

## Le Préalable indispensable : Le Détartrage
On ne peut pas blanchir des dents sales ! Un détartrage-polissage complet est obligatoire avant tout blanchiment pour retirer le tartre et les colorations superficielles (thé, café, tabac).

> Vous voulez des dents blanches en toute sécurité à Dakar ? Demandez conseil à votre dentiste avant de tester des produits miracles.`,
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
    content: `Perdre une dent peut être un complexe esthétique mais aussi un handicap pour manger. L'**implant dentaire** est aujourd'hui la solution de référence à Dakar pour remplacer une dent manquante.

## Qu'est-ce qu'un implant ?
C'est une petite racine artificielle en titane (matériau biocompatible) que l'on insère dans l'os de la mâchoire. Une fois cicatrisé, on vient visser une couronne dessus.
C'est comme si vous aviez une nouvelle dent naturelle !

## Les avantages par rapport au bridge ou au dentier
1. **Préservation des dents voisines** : Contrairement au bridge, on ne touche pas aux dents d'à côté.
2. **Confort absolu** : C'est fixe. Rien ne bouge quand vous parlez ou mangez.
3. **Esthétique** : Le résultat est invisible.
4. **Préservation de l'os** : L'implant stimule l'os et évite qu'il ne se résorbe (visage qui se creuse).

## Comment ça se passe à la Clinique DABIA ?
1. **Bilan 3D (Scanner)** : Pour vérifier si vous avez assez d'os.
2. **Pose de l'implant** : Une intervention rapide sous anesthésie locale (totalement indolore).
3. **Cicatrisation** : On attend 3 à 4 mois que l'os "soude" l'implant.
4. **Pose de la couronne** : Vous retrouvez votre sourire !

> C'est un investissement pour votre santé et votre qualité de vie. Manger des pommes, sourire à pleines dents... ça n'a pas de prix !`,
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
    content: `La **rage de dent** est une douleur intense, souvent nocturne, qui pousse à tout essayer pour être soulagé. Au Sénégal, les remèdes traditionnels sont nombreux, mais sont-ils efficaces ?

## Ce qui peut soulager (temporairement)
- **Le Clou de Girofle** : Il contient de l'eugénol, un anesthésiant naturel puissant. En huile essentielle ou écrasé sur la dent, il apaise.
- **La poche de glace** : Le froid anesthésie et réduit l'inflammation.
- **L'eau salée** : En bain de bouche, elle désinfecte légèrement.

## Ce qu'il ne faut JAMAIS faire
- **Mettre de l'aspirine ou du tabac directement sur la dent** : Cela brûle la gencive et aggrave la situation (ulcère chimique).
- **Prendre des antibiotiques au hasard** : Inutile si ce n'est pas une infection bactérienne, et dangereux pour votre santé future (résistance).
- **Attendre que "ça passe"** : Une dent ne guérit jamais toute seule. Si la douleur s'arrête brutalement, c'est souvent que le nerf est mort (nécrosé)... et l'infection va suivre (abcès).

## Pourquoi aller chez le dentiste ?
Le remède calme le symptôme (la douleur), le dentiste soigne la cause (la carie, l'infection).
À Dakar, la Clinique DABIA peut vous recevoir en urgence pour traiter l'origine du mal et vous éviter une extraction.

> Utilisez les remèdes naturels pour tenir jusqu'au rendez-vous, pas pour le remplacer !`,
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
    content: `"C'est normal, j'ai les gencives sensibles". **FAUX**.
Une gencive saine ne saigne JAMAIS, même en brossant fort. Le saignement est le signal d'alarme d'une inflammation : la **gingivite**.

## Pourquoi ça saigne ?
C'est la réponse de votre corps aux bactéries. La plaque dentaire et le tartre s'accumulent au bord de la gencive. Pour se défendre, la gencive gonfle, rougit et saigne au moindre contact.

## Les conséquences si on ne fait rien
Si la gingivite n'est pas soignée, elle évolue en **Parodontite** (déchaussement).
- L'os qui tient la dent est attaqué.
- Les dents deviennent mobiles (elles bougent).
- À terme, les dents tombent, même si elles n'ont pas de carie !
- C'est aussi la cause n°1 de la **mauvaise haleine** (halitose).

## Le Traitement à Dakar
Il est simple et efficace s'il est pris à temps :
1. **Le Détartrage Professionnel** : Seul le dentiste peut enlever le tartre durci.
2. **L'Hygiène à la maison** : Nous vous apprendrons à utiliser le fil dentaire ou les brossettes interdentaires. C'est là que tout se joue !

> N'ayez pas peur de brosser parce que ça saigne. Au contraire, c'est en nettoyant bien que l'inflammation va disparaître.`,
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
    content: `Il n'est jamais trop tard pour avoir un beau sourire. De plus en plus d'adultes à Dakar consultent pour aligner leurs dents. Fini le "sourire d'enfer" métallique, place à la discrétion !

## Pourquoi faire de l'orthodontie adulte ?
- **Esthétique** : Corriger un chevauchement ou des dents avancées.
- **Santé** : Des dents alignées sont plus faciles à brosser (moins de caries et de tartre).
- **Fonction** : Améliorer l'emboîtement des dents pour éviter l'usure prématurée.

## La Révolution des Aligneurs Invisibles (Gouttières)
C'est la solution préférée des adultes actifs.
- **Invisible** : Ce sont des coquilles en plastique transparent moulées sur vos dents.
- **Amovible** : Vous les enlevez pour manger et pour vous brosser les dents. Aucune contrainte alimentaire !
- **Confortable** : Pas de bague qui blesse la joue, pas de fil qui pique.

## Et les bagues ?
Les bagues "classiques" restent très performantes pour les cas complexes. Aujourd'hui, elles existent en **céramique transparente** pour être beaucoup plus discrètes que les bagues en métal.

> À la Clinique DABIA, nous étudions votre sourire pour vous proposer la solution la plus adaptée à votre vie sociale et professionnelle.`,
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
    content: `Les caries de la petite enfance sont un fléau au Sénégal, causant douleurs et infections précoces. Pourtant, elles sont 100% évitables. Voici comment protéger le capital sourire de vos enfants.

## La Première Visite : Quand ?
L'idéal est de venir **dès l'apparition des premières dents** (vers 1 an) ou au plus tard à 3 ans.
- **Le but** : Vérifier que tout va bien, donner des conseils aux parents, et habituer l'enfant à l'environnement du cabinet AVANT qu'il n'ait mal.
- Si vous attendez que l'enfant ait mal pour venir, il associera le dentiste à la douleur.

## Attention au sucre !
- **Le biberon du soir** : C'est l'ennemi n°1. Ne donnez jamais de lait sucré, de jus ou de bouillie sucrée avant le dodo sans brossage ensuite. Le sucre reste toute la nuit sur les dents.
- **Les bonbons et biscuits** : À limiter aux repas, pas en grignotage toute la journée.

## Le Brossage
- **Dès la première dent** : Avec une compresse ou une brosse adaptée.
- **Le dentifrice** : Fluoré, adapté à l'âge (dose grain de riz, puis petit pois).
- **Aider l'enfant** : Jusqu'à 6-8 ans, l'enfant n'a pas la dextérité manuelle pour bien faire seul. Les parents doivent repasser derrière !

> Un enfant sans carie est un enfant qui grandit bien, mange bien et dort bien. La prévention est le plus beau cadeau que vous puissiez lui faire.`,
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
    content: `Si vous cherchez le moyen le moins cher de garder vos dents toute la vie, la réponse est simple : **le détartrage régulier**.
Beaucoup de patients à Dakar attendent d'avoir mal pour consulter. C'est une erreur qui coûte cher.

## Qu'est-ce que le détartrage ?
C'est l'élimination de la plaque dentaire (bactéries moues) et du tartre (bactéries dures calcifiées) que la brosse à dents ne peut plus enlever.
C'est un soin indolore réalisé avec des ultrasons (vibrations d'eau).

## Pourquoi est-ce rentable ?
- **Coût d'un détartrage** : Faible (et souvent remboursé).
- **Coût de ce qu'il évite** :
    - Soins de caries (le tartre cache les caries).
    - Dévitalisations et couronnes.
    - Soins de gencives (parodontite) et perte de dents.
    - Implants (très coûteux) pour remplacer les dents perdues.

En investissant dans 1 ou 2 détartrages par an, vous économisez des centaines de milliers de francs de prothèses futures !

## Le bonus esthétique
En plus de la santé, le détartrage enlève les colorations (café, thé, tabac). Vous ressortez avec une sensation de fraîcheur et des dents plus nettes.

> N'attendez pas la douleur. Prenez rendez-vous pour votre bilan annuel à la Clinique DABIA.`,
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
    content: `Le Ramadan est une période de spiritualité, mais c'est aussi le moment où beaucoup de patients hésitent à aller chez le dentiste par peur de rompre leur jeûne.
    
## Les soins dentaires et le jeûne
La majorité des savants s'accordent à dire que les soins dentaires **ne rompent pas le jeûne**, à condition de ne rien avaler volontairement.

### Ce qui est autorisé :
1.  **L'anesthésie locale** : La piqûre n'est pas nutritive, elle ne casse donc pas le jeûne.
2.  **Le détartrage** : L'eau utilisée pour nettoyer les dents est aspirée par la pompe à salive. Tant que vous n'avalez pas d'eau, c'est bon.
3.  **Les soins de carie et extractions** : Idem, tant que le sang ou les débris ne sont pas avalés.
4.  **Le Siwak** : Son utilisation est recommandée et purifiante.

### Les précautions à prendre
Si vous avez peur d'avaler de l'eau par mégarde, signalez-le à votre dentiste ! À la Clinique DABIA, nous redoublons de vigilance avec une aspiration chirurgicale puissante pour éviter tout risque.

> **Notre conseil** : Ne repoussez pas un soin urgent. Une infection dentaire fatigue le corps et rend le jeûne plus difficile. Soignez-vous sans crainte.`,
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
    content: `La mauvaise haleine (halitose) est fréquente pendant le Ramadan. C'est gênant pour soi et pour les autres, mais ce n'est pas une fatalité !

## Pourquoi a-t-on mauvaise haleine en jeûnant ?
La cause principale est la **sécheresse on buccale** (xérostomie).
Quand on ne mange pas et ne boit pas, on produit moins de salive. Or, la salive nettoie naturellement la bouche. Moins de salive = plus de bactéries qui stagnent = mauvaises odeurs.

## Les Solutions Efficaces
1.  **Hydratez-vous bien la nuit** : Buvez beaucoup d'eau entre la rupture (Worgou) et le Kheoud pour faire des réserves.
2.  **Le brossage de la langue** : 80% des bactéries responsables des odeurs sont sur la langue. Brossez-la doucement !
3.  **Le Siwak** : Utilisé par le Prophète (PSL), il a des propriétés antibactériennes reconnues scientifiquement.
4.  **L'Hygiène rigoureuse** : Brossez vos dents après le Kheoud (avant l'aube) pour éliminer tous les résidus alimentaires de la nuit.

> Une haleine fraîche passe d'abord par une bouche propre. Un détartrage avant le Ramadan est l'idéal pour partir sur de bonnes bases.`,
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
    content: `C'est une question qui revient chaque année : "Est-ce que je peux me brosser les dents le matin sans casser mon jeûne ?"
LA RÉPONSE EST **OUI**.

## L'avis religieux et médical
L'Islam valorise la propreté. Se laver les dents est autorisé et même encouragé pour l'hygiène sociale.
Le seul interdit est d'avaler le produit ou l'eau.

## Comment se brosser les dents sans risque ?
1.  **Utilisez peu de dentifrice** : Une quantité de la taille d'un grain de riz suffit.
2.  **Ne gargarisez pas au fond de la gorge** : Rincez délicatement et recrachez tout de suite.
3.  **Privilégiez le Siwak** en journée si le goût du dentifrice vous fait peur. C'est la brosse à dents naturelle par excellence !

## Le moment idéal
Pour être tranquille, faites un brossage complet et minutieux (3 minutes) **après le repas du matin (Kheoud)**, juste avant l'heure de l'Imssak. Comme ça, vous démarrez la journée avec des dents propres et l'esprit serein.`,
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
    content: `Pendant le Ramadan, notre rythme biologique change. Pour vos soins dentaires à Dakar, le choix de l'heure est stratégique pour votre confort.

## 1. Le Matin (De 9h à 12h) : L'idéal
C'est le meilleur moment pour les soins techniques (caries, couronnes).
*   **Pourquoi ?** Vous avez encore de l'énergie du repas du matin. Votre taux de sucre est stable.
*   **Avantage** : Vous êtes moins stressé et le dentiste est aussi plus frais !

## 2. L'après-midi : À éviter pour les gros soins
Vers 14h-16h, la fatigue et la soif se font sentir. L'hypoglycémie peut rendre le rendez-vous désagréable (tête qui tourne). Réservez ces créneaux pour des contrôles simples ou des urgences.

## 3. Après la rupture (Le soir)
Certains cabinets ouvrent tard ou le samedi. C'est le moment "confort" : vous avez mangé, bu, et vous pouvez avaler votre salive sans stress.
À la Clinique DABIA, nous aménageons nos horaires pour vous recevoir dans les meilleures conditions.

> **Conseil** : Si vous êtes diabétique, parlez-en absolument à votre dentiste avant de venir à jeûn !`,
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
    content: `La douleur dentaire est l'une des plus intenses qui soit. L'Islam est une religion de facilité qui préserve la santé avant tout.

## Quand la douleur devient insupportable
Si vous avez une "rage de dent" (pulpite) ou un abcès avec fièvre :
1.  **La souffrance n'est pas méritoire** : Rester dans une douleur extrême peut faire monter votre tension et vous mettre en danger.
2.  **La prise de médicaments** : Si vous devez absolument prendre des antibiotiques ou des antidouleurs puissants en journée, cela rompt le jeûne.
3.  **L'avis religieux** : Le malade est exempté de jeûne. Une infection dentaire aiguë EST une maladie. Vous pouvez rompre votre jeûne pour vous soigner et rattraper le jour plus tard.

## Que faire en cas d'urgence ?
Ne restez pas chez vous à souffrir en attendant le coucher du soleil.
Venez consulter immédiatement. Le dentiste vous soulagera (geste d'urgence). Si cela nécessite de boire ou de prendre un médicament, votre santé prime.

> Dieu veut pour vous la facilité, Il ne veut pas pour vous la difficulté (Coran 2:185).`,
    faq: [
      {
        q: "Une extraction dentaire oblige-t-elle à rompre le jeûne ?",
        a: "Non, pas l'acte en lui-même. Mais si vous avez besoin d'antidouleurs juste après, il faudra peut-être rompre le jeûne ce jour-là.",
      },
    ],
  },
];
