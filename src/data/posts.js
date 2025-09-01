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
];
