// src/data/posts.js

import saoAvatar from "../assets/sao.webp";

// Couvertures d’articles (tes fichiers)
import urgenceCover from "../assets/blog/urgence.jpg";
import blanchimentCover from "../assets/technologie/tech-led.webp";
import implantCover from "../assets/blog/implant.jpg";
import orthodontieCover from "../assets/blog/orthodontie.jpg";
import gingiviteCover from "../assets/blog/gingivite.jpg";
import nuitCover from "../assets/blog/malnuit.webp";
import enfantCover from "../assets/blog/enfant.jpg";
import prixCover from "../assets/blog/prix.jpg";
import endoCover from "../assets/blog/canal.webp"; // Traitement canalaire
import facettesCover from "../assets/blog/facette.webp"; // Facettes dentaires
import airflowCover from "../assets/blog/Airflow.jpg"; // Détartrage vs AirFlow
import halitoseCover from "../assets/blog/halitose.jpg"; // Mauvaise haleine
import carieCover from "../assets/blog/carie.jpg";
import sagesseCover from "../assets/blog/sagesse.jpg";
import protheseCover from "../assets/blog/prothese.jpeg";
import urgenceNuitCover from "../assets/blog/urgence-nuit.jpeg";
import blanchimentVsFacettesCover from "../assets/blog/facette-blanchiment.webp";
import grossesseCover from "../assets/blog/grossesse.jpeg";
import fluorCover from "../assets/blog/fluor.jpeg";
import sedationCover from "../assets/blog/sedation.jpg";
import invisalignCover from "../assets/blog/invisalign.jpg";
import bridgeImplantCover from "../assets/blog/bridge-vs-implant.jpeg";
import onlayCover from "../assets/blog/onlay.jpg";
import cbctCover from "../assets/technologie/tech-cbct.webp";
import traumaEnfantCover from "../assets/blog/trauma-enfant.webp";
import diabeteCover from "../assets/blog/diabete.jpg";

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
  "tarif dentiste dakar",
  "tarif implant dentaire dakar",
  "détartrage dentaire dakar prix",
  "cabinet dentaire dakar",
  "liberté 6",
  "parcelles assainies",
  "dentiste dakar 24/24",
];

export const POSTS = [
  {
    slug: "urgence-dentaire-dakar-que-faire",
    title: "Urgence dentaire à Dakar : que faire immédiatement ?",
    description:
      "Douleur aiguë, dent cassée, abcès… Les bons réflexes avant d’arriver à la Clinique DABIA et comment se déroule la prise en charge.",
    date: "2025-08-05",
    category: "Urgences",
    tags: ["urgence dentaire", "dentiste dakar", "douleur dentaire"],
    author: AUTHORS.sao,
    cover: urgenceCover,
    readingMinutes: 11,
    content: `> **Résumé rapide** — En cas de douleur aiguë, gonflement ou traumatisme : prenez du **paracétamol** (pas d’aspirine si saignement), appliquez du **froid** sur la joue 20 min on/20 min off, **rincez** à l’eau tiède salée si suppuration, **gardez** tout fragment de dent dans du sérum ou du lait, et **appelez-nous** pour une prise en charge rapide : [/rendez-vous](/rendez-vous).

## Quand faut-il consulter en urgence ?
Certains signes ne doivent pas attendre :
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
    description: "Prévenir les caries des molaires définitives avec les sealants : indications, déroulé et durée.",
    date: "2025-10-07",
    category: "Pédiatrie",
    tags: ["scellants", "prévention caries", "enfant"],
    author: AUTHORS.sao,
    cover: enfantCover,
    readingMinutes: 8,
    content: `Les **scellants** (ou sealants) protègent les **sillons des molaires** de l’enfant. Ils forment une fine **barrière** contre la plaque et les sucres.\n\n## Quand les poser ?\n- À l’éruption des **molaires définitives** (vers 6–7 ans),\n- Chez les enfants à **risque carieux** élevé (taches, habitudes sucrées).\n\n## Déroulé rapide\nNettoyage – isolation – application du matériau – **photopolymérisation**. Indolore et réversible.\n\n> Couplé à une **hygiène fluorée** et des contrôles, c’est une des meilleures stratégies de **prévention**.`,
  },

  {
    slug: "bruxisme-gouttiere-protection-dakar",
    title: "Bruxisme : symptômes, causes et gouttière de protection",
    description: "Serrage/grincement la nuit, douleurs musculaires, usure des dents : comment diagnostiquer et soulager.",
    date: "2025-10-07",
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
    description: "Arcade complète fixée sur 4 implants : indications, étapes, confort et entretien.",
    date: "2025-10-07",
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
    description: "Dents sensibles au froid/chaud : causes fréquentes et traitements possibles.",
    date: "2025-10-07",
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
    date: "2025-09-30",
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
    title: "Détartrage dentaire à Dakar : prix, fréquence, AirFlow et résultats",
    description:
      "Pourquoi le détartrage est essentiel, quand privilégier l’AirFlow et de quoi dépend le tarif à Dakar.",
    date: "2025-09-30",
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
      "Comprendre les critères de qualité (écoute, diagnostic, technologie, hygiène, suivi) et poser les bonnes questions lors de la première visite.",
    date: "2025-09-30",
    category: "Conseils",
    pinned: true,
    tags: ["meilleur dentiste dakar", "cabinet dentaire dakar", "dentiste dakar"],
    author: AUTHORS.sao,
    cover: prixCover,
    readingMinutes: 11,
    content: `La notion de “**meilleur**” dentiste est **subjective**. En revanche, des **repères concrets** aident à choisir un cabinet qui vous convient à Dakar.

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

> Découvrez notre page Liberté 6 : [/cabinet-dentaire-liberte-6](/cabinet-dentaire-liberte-6) • Prenez RDV : [/rendez-vous](/rendez-vous).`,
  },

  {
    slug: "blanchiment-dents-prix-conseils-dakar",
    title:
      "Blanchiment des dents à Dakar : méthodes, indications, prix et conseils",
    description:
      "Cabinet vs domicile, contre-indications, déroulé, entretien du résultat et fourchettes de prix indicatives.",
    date: "2025-07-20",
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
    date: "2025-07-01",
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
    date: "2025-06-14",
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

  {
    slug: "detartrage-profondeur-gingivite-saignement-conseils",
    title:
      "Saignement des gencives : simple gingivite ou besoin d’un détartrage en profondeur ?",
    description:
      "Signes d’alerte, différence entre détartrage simple et surfaçage radiculaire, habitudes d’hygiène qui changent tout.",
    date: "2025-05-30",
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
    date: "2025-04-26",
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
    date: "2025-05-10",
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
      "De la consultation au détartrage, composite, extraction et soins esthétiques : à quoi s’attendre et ce qui fait varier les tarifs.",
    date: "2025-04-01",
    category: "Conseils",
    tags: ["prix", "dentiste dakar", "clinique dentaire dakar"],
    author: AUTHORS.sao,
    cover: prixCover,
    readingMinutes: 12,
    content: `> **Transparence** — Les prix dépendent du **diagnostic**, de la **complexité** et des **matériaux**. Un **devis personnalisé** vous est remis avant tout acte.

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

> Pour un devis précis après examen : [/rendez-vous](/rendez-vous).`,
  },

  {
    slug: "traitement-canalaire-devitalisation-etapes-douleur-dakar",
    title:
      "Dévitalisation (traitement canalaire) : étapes, douleur, suites – Dakar",
    description:
      "Pourquoi dévitaliser une dent ? Étapes du traitement canalaire, douleur, antibiotiques, couronne après traitement à la Clinique DABIA.",
    date: "2025-07-08",
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
      "Corriger couleur, forme, alignement léger : ce qu’il faut savoir sur les facettes céramiques/composites à la Clinique DABIA.",
    date: "2025-01-22",
    category: "Esthétique",
    tags: ["facettes", "esthétique", "clinique dentaire dakar"],
    author: AUTHORS.sao,
    cover: facettesCover,
    readingMinutes: 14,
    content: `Les **facettes dentaires** corrigent couleur, **forme** et légers **désalignements** visibles du sourire. Elles préservent la biologie si l’indication est respectée.

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
    date: "2025-04-06",
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
    date: "2025-02-20",
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
    date: "2025-11-05",
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
    date: "2025-11-12",
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
      "Les solutions modernes pour retrouver fonction et esthétique : quelle prothèse pour quel cas ?",
    date: "2025-11-19",
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
    content: `Perte de dents ? Les prothèses **modernes** permettent de restaurer **mastication**, **phonation** et **esthétique**. Le choix dépend du **nombre de dents manquantes**, du **volume osseux** et du **budget**.

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
    date: "2025-11-26",
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
      "Comparatif clair entre éclaircissement de la teinte et relooking du sourire par facettes.",
    date: "2025-12-03",
    category: "Esthétique",
    tags: ["blanchiment", "facettes", "esthétique", "clinique dentaire dakar"],
    author: AUTHORS.sao,
    cover: blanchimentVsFacettesCover,
    readingMinutes: 11,
    content: `Pour **éclaircir** la teinte, on pense au **blanchiment** ; pour corriger **forme**, **alignement léger** et **teinte réfractaire**, on envisage des **facettes**. Les deux solutions peuvent être **complémentaires**.

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
    date: "2025-12-12",
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
    date: "2025-12-26",
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
    date: "2025-01-02",
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
    date: "2025-01-09",
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
    date: "2025-01-16",
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
    date: "2025-01-23",
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
    date: "2025-01-30",
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
    date: "2025-02-06",
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
    date: "2025-02-13",
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
];
