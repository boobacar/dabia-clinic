import esthetique from "../assets/competences/esthetique.webp";
import parodontologie from "../assets/competences/parodontologie.webp";
import implantologie from "../assets/competences/Implantologie.webp";
import endodontie from "../assets/competences/Endodontie.webp";
import facette from "../assets/competences/Facettes-dentaires.webp";
import orthodontie from "../assets/competences/Orthodontie.webp";
import greffe from "../assets/competences/Greffe-osseuse.webp";
import blanchiment from "../assets/competences/Blanchiment-dentaire.webp";
import pedodontie from "../assets/competences/Pedodontie.webp";

const competences = [
  {
    titre: "Esthétique dentaire",
    description:
      "L’esthétique dentaire vise à améliorer l’apparence du sourire en harmonisant les dents, les gencives et les lèvres. Dans une clinique dentaire, cela inclut des traitements comme le blanchiment, les facettes, ou l’alignement invisible. Ces soins combinent précision médicale et sens artistique. L’objectif est d’offrir un sourire naturel, équilibré et adapté au visage de chaque patient.",
    seoTitle: "Esthétique dentaire à Dakar : blanchiment et facettes | DABIA",
    seoDescription: "Esthétique dentaire à Dakar : blanchiment, facettes, aligneurs et harmonisation du sourire. Diagnostic, simulation et devis clair à la Clinique DABIA.",
    image: esthetique,
    slug: "esthétique-dentaire",
  },
  {
    titre: "Parodontologie",
    description:
      "La parodontologie est la spécialité qui traite les maladies des gencives et de l’os qui soutient les dents. En clinique dentaire, elle permet de diagnostiquer, prévenir et soigner des affections comme la gingivite ou la parodontite. Ces traitements visent à stopper l’inflammation et à préserver la dentition naturelle. Une bonne santé parodontale est essentielle pour la stabilité et la longévité des dents.",
    seoTitle: "Parodontologie à Dakar : gencives qui saignent | DABIA",
    seoDescription: "Parodontologie à Dakar : gencives qui saignent, déchaussement, détartrage en profondeur et traitement de la parodontite à la Clinique Dentaire DABIA.",
    image: parodontologie,
    slug: "parodontologie",
  },
  {
    titre: "Implantologie",
    description:
      "L’implantologie est une discipline qui consiste à remplacer une ou plusieurs dents manquantes par des implants en titane insérés dans l’os de la mâchoire. Cette technique offre une solution fixe, durable et esthétique. Elle permet de retrouver une mastication efficace et un sourire naturel. L’implant agit comme une racine artificielle, préservant l’équilibre de la bouche.",
    seoTitle: "Implant dentaire à Dakar : pose, prix et devis | DABIA",
    seoDescription: "Implantologie à Dakar : implant dentaire, greffe osseuse, prothèse sur implant. Bilan 3D, plan de traitement expliqué et devis détaillé à la Clinique DABIA.",
    image: implantologie,
    slug: "implantologie",
  },
  {
    titre: "Endodontie",
    description:
      "L’endodontie est la spécialité qui traite l’intérieur de la dent, notamment le nerf et la pulpe dentaire. Elle intervient lorsqu’une dent est infectée ou douloureuse, souvent par une carie profonde. Le traitement consiste à nettoyer, désinfecter et obturer les canaux pour sauver la dent. Cela permet d’éviter l’extraction et de conserver une dent fonctionnelle.",
    seoTitle: "Dévitalisation et traitement canalaire à Dakar | DABIA",
    seoDescription: "Endodontie à Dakar : dévitalisation et traitement canalaire sans douleur, sous contrôle radiologique, à la Clinique Dentaire DABIA (Liberté 6).",
    image: endodontie,
    slug: "endodontie",
  },
  {
    titre: "Facettes dentaires",
    description:
      "Les facettes dentaires sont de fines pellicules en céramique ou en composite collées sur la face visible des dents. Elles permettent de corriger la forme, la couleur ou l’alignement des dents de façon rapide et esthétique. C’est une solution idéale pour embellir le sourire tout en préservant la structure dentaire. Le résultat est naturel, durable et personnalisé à chaque patient.",
    seoTitle: "Facettes dentaires à Dakar : rendu naturel, pose et RDV | Clinique Dentaire DABIA",
    seoDescription: "Facettes dentaires à Dakar : rendu naturel, étapes de la pose, entretien et prix. Simulation du sourire et devis clair à la Clinique Dentaire DABIA.",
    image: facette,
    slug: "facettes-dentaires",
  },
  {
    titre: "Orthodontie",
    seoTitle:
      "Orthodontiste à Dakar : bagues, aligneurs et rendez-vous | Clinique Dentaire DABIA",
    description:
      "L’orthodontie est la spécialité qui corrige les malpositions des dents et des mâchoires pour améliorer la fonction et l’esthétique du sourire. Elle utilise des appareils fixes (comme les bagues) ou amovibles (comme les aligneurs transparents - Invisalign). Ces traitements favorisent une bonne occlusion et facilitent l’hygiène bucco-dentaire. L’orthodontie s’adresse aussi bien aux enfants qu’aux adultes.",
    seoDescription: "Orthodontiste à Dakar : bagues et aligneurs transparents pour adultes et enfants. Bilan orthodontique, durée du traitement et devis clair à la Clinique DABIA.",
    image: orthodontie,
    slug: "orthodontie",
  },
  {
    titre: "Greffe osseuse",
    description:
      "La greffe osseuse est une intervention qui permet de reconstruire l’os de la mâchoire lorsqu’il est insuffisant pour poser un implant dentaire. Elle consiste à ajouter de l’os naturel ou synthétique pour renforcer la zone traitée. Cette procédure favorise une bonne stabilité des futurs implants. Elle est essentielle pour restaurer pleinement la fonction et l’esthétique du sourire.",
    seoTitle: "Greffe osseuse dentaire à Dakar : avant l'implant | DABIA",
    seoDescription: "Greffe osseuse dentaire à Dakar : reconstruction de l'os avant la pose d'un implant. Bilan 3D et plan de traitement expliqué à la Clinique Dentaire DABIA.",
    image: greffe,
    slug: "greffe-osseuse",
  },
  {
    titre: "Blanchiment dentaire",
    description:
      "Le blanchiment dentaire est un traitement esthétique qui vise à éclaircir la teinte des dents en éliminant les taches et les colorations. Réalisé en clinique dentaire, il utilise des gels à base de peroxyde, activés sous contrôle professionnel pour garantir efficacité et sécurité. Le résultat est un sourire visiblement plus lumineux. C’est une solution rapide et non invasive pour raviver l’éclat naturel des dents.",
    seoTitle: "Blanchiment dentaire à Dakar : prix et résultat | DABIA",
    seoDescription: "Blanchiment dentaire à Dakar : éclaircissement professionnel sécurisé, résultat visible et sensibilité maîtrisée à la Clinique Dentaire DABIA.",
    image: blanchiment,
    slug: "blanchiment-dentaire",
  },
  {
    titre: "Pedodontie",
    description:
      "La pédodontie est la branche de la dentisterie dédiée à la santé bucco-dentaire des enfants, dès le plus jeune âge. Elle comprend la prévention, les soins des dents temporaires et l’accompagnement de la croissance dentaire. Le but est d’instaurer de bonnes habitudes et de traiter précocement les problèmes. Un suivi régulier favorise un sourire sain et une dentition équilibrée à l’âge adulte.",
    seoTitle: "Dentiste pour enfants à Dakar : pédodontie | DABIA",
    seoDescription: "Pédodontie à Dakar : dentiste pour enfants, première visite, prévention, scellement des sillons et soins en douceur à la Clinique Dentaire DABIA.",
    image: pedodontie,
    slug: "pedodontie",
  },
];

export default competences;
