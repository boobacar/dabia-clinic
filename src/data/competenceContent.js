// ------------------------------------------------------------------
//  Contenu riche des pages compétences — source unique
//  Utilisé par CompetenceDetail.jsx (rendu React) ET par
//  scripts/generate-seo-shells.mjs (shells SSG statiques pour les
//  crawlers LLM : GPTBot, ClaudeBot, PerplexityBot…).
//
//  quickAnswer : réponse directe 40-60 mots affichée en haut de page
//  (bloc « Quick Answer » recommandé pour l'AEO — les LLM l'extraient).
// ------------------------------------------------------------------

export const competenceContent = {
  "esthétique-dentaire": {
    accroche:
      "La dentisterie esthétique améliore la forme, la teinte et l'harmonie du sourire tout en respectant la santé des dents et des gencives.",
    quickAnswer:
      "L'esthétique dentaire regroupe blanchiment, facettes et alignement pour harmoniser le sourire. À la Clinique Dentaire DABIA à Dakar (Liberté 6), un bilan esthétique personnalisé détermine l'option la plus adaptée : blanchiment, facettes ou orthodontie, avec un devis clair avant tout traitement.",
    pointsForts: [
      "Bilan esthétique personnalisé (teinte, proportion, ligne du sourire).",
      "Approche progressive: solutions conservatrices avant les options plus invasives.",
      "Objectif naturel: résultat cohérent avec votre visage et votre expression.",
    ],
    deroule: [
      "Consultation initiale avec photos et analyse du sourire.",
      "Choix du plan de traitement (blanchiment, facettes, alignement, restaurations).",
      "Réalisation des soins selon un calendrier adapté à vos priorités.",
      "Contrôle final et recommandations pour maintenir le résultat dans le temps.",
    ],
    faq: [
      {
        q: "Comment choisir entre blanchiment et facettes ?",
        a: "Le choix dépend de la teinte de départ, de la forme des dents et de vos objectifs. Le bilan esthétique permet de déterminer l'option la plus adaptée.",
      },
      {
        q: "Les résultats esthétiques sont-ils durables ?",
        a: "Oui, avec une bonne hygiène, des contrôles réguliers et des habitudes alimentaires adaptées, les résultats peuvent être maintenus durablement.",
      },
    ],
  },
  parodontologie: {
    accroche:
      "La parodontologie prend en charge l'inflammation des gencives et du tissu de soutien des dents pour éviter déchaussement, mobilité et pertes dentaires.",
    quickAnswer:
      "La parodontologie traite les maladies des gencives (gingivite, parodontite) qui menacent le soutien des dents. À la Clinique Dentaire DABIA à Dakar, le bilan parodontal détecte saignements et poches, puis un traitement ciblé (détartrage, surfaçage) stabilise la santé gingivale sur le long terme.",
    pointsForts: [
      "Diagnostic précoce des saignements, poches parodontales et mobilité.",
      "Traitement ciblé (détartrage, surfaçage, protocole d'hygiène personnalisé).",
      "Programme de maintenance pour stabiliser durablement la santé gingivale.",
    ],
    deroule: [
      "Bilan parodontal complet et évaluation du risque individuel.",
      "Phase thérapeutique initiale pour réduire l'inflammation.",
      "Réévaluation clinique et adaptation du plan de soins.",
      "Suivi périodique pour prévenir les récidives.",
    ],
    faq: [
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
  implantologie: {
    accroche:
      "L'implantologie est indiquée lorsqu'une dent manquante gêne la mastication, l'esthétique du sourire ou la stabilité des dents voisines.",
    quickAnswer:
      "Un implant dentaire remplace une ou plusieurs dents manquantes par une racine artificielle en titane, surmontée d'une couronne fixe. À la Clinique Dentaire DABIA à Dakar, le traitement comprend bilan avec imagerie, pose chirurgicale sous anesthésie locale et couronne après intégration osseuse.",
    pointsForts: [
      "Bilan clinique + imagerie pour confirmer la quantité d'os disponible.",
      "Plan de traitement personnalisé (1 dent, plusieurs dents ou réhabilitation complète).",
      "Suivi post-opératoire structuré pour sécuriser la cicatrisation.",
    ],
    deroule: [
      "Consultation de diagnostic: examen, radio/CBCT et discussion des objectifs.",
      "Phase chirurgicale: pose de l'implant sous anesthésie locale.",
      "Phase prothétique: couronne/bridge après intégration osseuse.",
      "Contrôles réguliers et maintenance pour la durabilité.",
    ],
    faq: [
      {
        q: "Combien de temps dure un traitement implantaire ?",
        a: "La durée dépend du volume osseux, du nombre d'implants et de la cicatrisation. Après le bilan, un calendrier clair vous est remis.",
      },
      {
        q: "Peut-on poser un implant si la dent est absente depuis longtemps ?",
        a: "Oui, dans de nombreux cas. Un examen précis permet d'évaluer si une préparation osseuse est nécessaire avant la pose.",
      },
    ],
  },
  endodontie: {
    accroche:
      "L'endodontie permet de traiter la douleur liée à l'infection pulpaire et de conserver la dent quand cela est possible.",
    quickAnswer:
      "Le traitement endodontique (traitement de canal) sauve une dent infectée ou douloureuse en nettoyant et obturant les canaux. À la Clinique Dentaire DABIA à Dakar, il est réalisé sous anesthésie locale avec contrôle radiographique, dans le but d'éviter l'extraction.",
    pointsForts: [
      "Diagnostic précis de la cause (carie profonde, fissure, infection).",
      "Traitement canalaire avec protocole de désinfection rigoureux.",
      "Restauration finale pour protéger la dent traitée.",
    ],
    deroule: [
      "Examen clinique + imagerie pour confirmer l'indication.",
      "Anesthésie locale puis nettoyage des canaux.",
      "Obturation étanche et contrôle radiographique.",
      "Reconstitution de la dent (composite/couronne selon le cas).",
    ],
    faq: [
      {
        q: "Le traitement canalaire est-il douloureux ?",
        a: "Le traitement est réalisé sous anesthésie locale. L'objectif est précisément de soulager la douleur et d'éliminer l'infection.",
      },
      {
        q: "Faut-il toujours poser une couronne après ?",
        a: "Pas systématiquement. Cela dépend de la quantité de dent restante et du risque de fracture après traitement.",
      },
    ],
  },
  "facettes-dentaires": {
    accroche:
      "Les facettes dentaires corrigent couleur, forme et petits défauts d'alignement pour un rendu harmonieux et naturel.",
    quickAnswer:
      "Les facettes dentaires sont de fines pellicules en céramique collées sur les dents pour corriger couleur, forme et alignement. À la Clinique Dentaire DABIA à Dakar, le projet esthétique est planifié avant toute préparation : analyse du sourire, choix de teinte et essayage avant collage.",
    pointsForts: [
      "Analyse esthétique du sourire avant toute préparation.",
      "Choix de la teinte et de la forme en cohérence avec votre visage.",
      "Approche conservatrice pour préserver un maximum de structure dentaire.",
    ],
    deroule: [
      "Bilan initial et définition du projet esthétique.",
      "Préparation minimale des dents selon indication.",
      "Essayage puis collage des facettes avec ajustements précis.",
      "Contrôle de l'occlusion et conseils d'entretien.",
    ],
    faq: [
      {
        q: "Les facettes ont-elles un rendu naturel ?",
        a: "Oui, quand la planification est personnalisée. Le choix de la teinte et de la translucidité est adapté à votre sourire.",
      },
      {
        q: "Combien de temps durent les facettes ?",
        a: "Avec une bonne hygiène et des contrôles réguliers, les facettes peuvent durer de nombreuses années.",
      },
    ],
  },
  orthodontie: {
    accroche:
      "L'orthodontie améliore l'alignement dentaire, l'occlusion et facilite l'hygiène quotidienne, chez l'adolescent comme chez l'adulte.",
    quickAnswer:
      "L'orthodontie corrige les dents mal alignées avec des bagues ou des aligneurs transparents. À la Clinique Dentaire DABIA à Dakar, un bilan orthodontique complet (photos, simulation du plan de traitement) détermine la solution adaptée à votre profil, avec une phase de contention pour stabiliser le résultat.",
    pointsForts: [
      "Choix thérapeutique selon votre profil: aligneurs transparents ou appareils conventionnels.",
      "Objectifs fonctionnels et esthétiques définis avant le début du traitement.",
      "Contrôles réguliers pour ajuster le mouvement dentaire en douceur.",
    ],
    deroule: [
      "Bilan orthodontique complet et photos cliniques.",
      "Simulation du plan de traitement et validation des étapes.",
      "Pose des dispositifs et visites de contrôle programmées.",
      "Phase de contention pour stabiliser le résultat.",
    ],
    faq: [
      {
        q: "Un adulte peut-il commencer un traitement orthodontique ?",
        a: "Oui. L'orthodontie adulte est fréquente et peut être adaptée aux contraintes esthétiques et professionnelles.",
      },
      {
        q: "Combien de temps faut-il porter une contention ?",
        a: "La contention est indispensable pour maintenir les résultats. La durée varie selon les cas et vous est expliquée dès le plan initial.",
      },
    ],
  },
  "greffe-osseuse": {
    accroche:
      "La greffe osseuse est proposée lorsque le volume osseux est insuffisant pour assurer une pose d'implant stable et durable.",
    quickAnswer:
      "La greffe osseuse reconstruit la mâchoire quand l'os est insuffisant pour poser un implant. À la Clinique Dentaire DABIA à Dakar, une évaluation radiologique précise mesure le déficit, la greffe est réalisée sous anesthésie locale, puis l'implant est posé après cicatrisation osseuse.",
    pointsForts: [
      "Évaluation radiologique précise pour mesurer le déficit osseux.",
      "Choix de la technique selon la zone à reconstruire et l'objectif prothétique.",
      "Sécurisation de la base osseuse avant implantation.",
    ],
    deroule: [
      "Bilan préopératoire et planification 3D.",
      "Intervention de greffe sous anesthésie locale.",
      "Phase de cicatrisation avec contrôles cliniques.",
      "Réévaluation puis pose implantaire quand l'os est mature.",
    ],
    faq: [
      {
        q: "La greffe osseuse est-elle toujours nécessaire avant un implant ?",
        a: "Non. Elle est indiquée uniquement quand le volume osseux est insuffisant pour garantir la stabilité de l'implant.",
      },
      {
        q: "Combien de temps faut-il avant la pose de l'implant ?",
        a: "Cela varie selon la technique et la cicatrisation. Un calendrier prévisionnel est établi dès le début du traitement.",
      },
    ],
  },
  "blanchiment-dentaire": {
    accroche:
      "Le blanchiment dentaire professionnel vise à éclaircir la teinte des dents tout en respectant l'émail et la sensibilité individuelle.",
    quickAnswer:
      "Le blanchiment dentaire éclaircit la teinte des dents avec des gels à base de peroxyde, sous contrôle professionnel. À la Clinique Dentaire DABIA à Dakar, une consultation préalable vérifie l'absence de caries et de problèmes gingivaux, puis le protocole est adapté pour limiter la sensibilité.",
    pointsForts: [
      "Vérification préalable: absence de caries actives et contrôle gingival.",
      "Protocole encadré médicalement pour limiter la sensibilité.",
      "Conseils personnalisés pour prolonger l'éclat du sourire.",
    ],
    deroule: [
      "Consultation préalable avec diagnostic de teinte.",
      "Nettoyage/détartrage si nécessaire avant le protocole.",
      "Séance de blanchiment au cabinet ou protocole mixte selon indication.",
      "Suivi et recommandations alimentaires/hygiène post-traitement.",
    ],
    faq: [
      {
        q: "Le blanchiment abîme-t-il les dents ?",
        a: "Réalisé au cabinet et sur bonne indication, le blanchiment respecte l'émail. Le protocole est ajusté pour votre confort.",
      },
      {
        q: "Le résultat est-il durable ?",
        a: "Le résultat dépend des habitudes (tabac, café, thé) et de l'hygiène. Un entretien périodique peut être proposé.",
      },
    ],
  },
  pedodontie: {
    accroche:
      "La pédodontie accompagne les enfants dès le plus jeune âge pour prévenir les caries, rassurer lors des soins et construire de bonnes habitudes d'hygiène.",
    quickAnswer:
      "La pédodontie prend en charge la santé bucco-dentaire des enfants : prévention des caries, soins des dents de lait et suivi de croissance. À la Clinique Dentaire DABIA à Dakar, la première visite est recommandée dès l'apparition des premières dents, dans un cadre rassurant.",
    pointsForts: [
      "Approche douce et pédagogique adaptée à l'âge de l'enfant.",
      "Prévention active: fluor, scellements, conseils alimentation/brossage.",
      "Suivi de croissance dentaire pour intervenir au bon moment.",
    ],
    deroule: [
      "Première consultation de familiarisation et bilan de risque carieux.",
      "Mise en place d'un plan de prévention personnalisé.",
      "Soins conservateurs si nécessaire, dans un cadre rassurant.",
      "Contrôles réguliers pour maintenir des dents saines.",
    ],
    faq: [
      {
        q: "À quel âge faire la première visite chez le dentiste ?",
        a: "Idéalement dès l'apparition des premières dents ou avant 1 an, puis avec un suivi régulier selon le risque carieux.",
      },
      {
        q: "Comment éviter les caries chez l'enfant ?",
        a: "Une routine de brossage adaptée, une alimentation contrôlée en sucres et des visites préventives régulières sont les clés.",
      },
    ],
  },
};

export default competenceContent;
