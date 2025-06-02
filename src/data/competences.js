import esthetique from "../assets/esthetique.jpeg";
import parodontologie from "../assets/parodontologie.png";
import implantologie from "../assets/implantologie.png";
import endodontie from "../assets/endodontie.png";
import facette from "../assets/facette.png";
import orthodontie from "../assets/orthodontie.png";
import greffe from "../assets/greffe.png";
import blanchiment from "../assets/blanchiment.png";

const competences = [
  {
    titre: "Esthétique dentaire",
    description:
      "Amélioration du sourire grâce à des techniques comme les facettes, composites, couronnes en céramique, etc.",
    image: esthetique,
    slug: "esthétique-dentaire",
  },
  {
    titre: "Parodontologie",
    description:
      "Traitement des maladies des gencives et de l’os de soutien des dents, essentielle pour une bonne santé bucco-dentaire.",
    image: parodontologie,
    slug: "parodontologie",
  },
  {
    titre: "Implantologie",
    description:
      "Pose d’implants dentaires en titane pour remplacer durablement les dents manquantes.",
    image: implantologie,
    slug: "implantologie",
  },
  {
    titre: "Endodontie",
    description:
      "Traitement des racines dentaires (dévitalisation) en cas d’infection profonde ou de carie avancée.",
    image: endodontie,
    slug: "endodontie",
  },
  {
    titre: "Facettes dentaires",
    description:
      "Pose de coques en céramique sur les dents pour corriger la forme, la couleur ou l’alignement.",
    image: facette,
    slug: "facettes-dentaires",
  },
  {
    titre: "Orthodontie",
    description:
      "Alignement des dents et correction des problèmes de mâchoires avec des appareils visibles ou invisibles.",
    image: orthodontie,
    slug: "orthodontie",
  },
  {
    titre: "Greffe osseuse",
    description:
      "Reconstruction osseuse pour accueillir un implant dentaire, si l’os est trop fragile ou insuffisant.",
    image: greffe,
    slug: "greffe-osseuse",
  },
  {
    titre: "Blanchiment dentaire",
    description:
      "Éclaircissement des dents par gel ou lampe pour un sourire éclatant et naturel.",
    image: blanchiment,
    slug: "blanchiment-dentaire",
  },
];

export default competences;
