import { useParams, Link } from "react-router-dom";
import esthetique from "../assets/esthetique.jpeg";
import parodontologie from "../assets/parodontologie.png";
import implantologie from "../assets/implantologie.png";
import endodontie from "../assets/endodontie.png";
import facette from "../assets/facette.png";
import orthodontie from "../assets/orthodontie.png";
import greffe from "../assets/greffe.png";
import blanchiment from "../assets/blanchiment.png";

const competencesData = {
  "esthétique-dentaire": {
    titre: "Esthétique dentaire",
    description:
      "L’esthétique dentaire vise à améliorer l'apparence du sourire en utilisant des techniques modernes telles que les facettes, les couronnes céramiques et les composites.",
    image: esthetique,
  },
  parodontologie: {
    titre: "Parodontologie",
    description:
      "La parodontologie traite les maladies des gencives et de l’os qui soutient les dents. Elle est essentielle pour préserver la santé buccale à long terme.",
    image: parodontologie,
  },
  implantologie: {
    titre: "Implantologie",
    description:
      "L’implantologie permet de remplacer une ou plusieurs dents manquantes par des implants en titane, une solution durable et esthétique.",
    image: implantologie,
  },
  endodontie: {
    titre: "Endodontie",
    description:
      "Spécialité qui traite l’intérieur de la dent (nerf), notamment les infections grâce au traitement de canal ou dévitalisation.",
    image: endodontie,
  },
  "facettes-dentaires": {
    titre: "Facettes dentaires",
    description:
      "Les facettes dentaires sont de fines coques en céramique collées sur les dents pour corriger la forme, la couleur ou l’alignement.",
    image: facette,
  },
  orthodontie: {
    titre: "Orthodontie",
    description:
      "L’orthodontie aligne les dents et corrige les problèmes de mâchoires grâce à des appareils fixes ou invisibles.",
    image: orthodontie,
  },
  "greffe-osseuse": {
    titre: "Greffe osseuse",
    description:
      "La greffe osseuse est nécessaire avant certains implants, lorsqu’il manque de volume osseux dans la mâchoire.",
    image: greffe,
  },
  "blanchiment-dentaire": {
    titre: "Blanchiment dentaire",
    description:
      "Le blanchiment dentaire améliore la couleur des dents de manière sûre, rapide et efficace pour un sourire éclatant.",
    image: blanchiment,
  },
};

const CompetenceDetail = () => {
  const { slug } = useParams();
  const competence = competencesData[slug];

  if (!competence) {
    return (
      <div className="text-center py-20 mt-20">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Compétence introuvable
        </h2>
        <Link to="/" className="text-[#bb2988] underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto mt-20">
      <h1 className="text-4xl font-bold text-center text-[#ad9d64] mb-8">
        {competence.titre}
      </h1>
      <img
        src={competence.image}
        alt={competence.titre}
        className="w-[60%] object-cover rounded mb-6 mx-auto"
      />
      <p className="text-lg text-gray-700 mb-8">{competence.description}</p>
      <div className="text-center">
        <Link
          to="/rendez-vous"
          className="bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Prendre un rendez-vous
        </Link>
      </div>
    </section>
  );
};

export default CompetenceDetail;
