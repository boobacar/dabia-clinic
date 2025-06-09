import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import esthetique from "../assets/competences/esthetique.webp";
import parodontologie from "../assets/competences/parodontologie.webp";
import implantologie from "../assets/competences/Implantologie.webp";
import endodontie from "../assets/competences/Endodontie.webp";
import facette from "../assets/competences/Facettes-dentaires.webp";
import orthodontie from "../assets/competences/Orthodontie.webp";
import greffe from "../assets/competences/Greffe-osseuse.webp";
import blanchiment from "../assets/competences/Blanchiment-dentaire.webp";
import pedodontie from "../assets/competences/Pedodontie.webp";

// ------------------------------------------------------------
//  Compétence detail data
// ------------------------------------------------------------
const competencesData = {
  "esthétique-dentaire": {
    titre: "Esthétique dentaire",
    description:
      "L’esthétique dentaire vise à améliorer l’apparence du sourire en harmonisant les dents, les gencives et les lèvres. Dans une clinique dentaire, cela inclut des traitements comme le blanchiment, les facettes, ou l’alignement invisible. Ces soins combinent précision médicale et sens artistique. L’objectif est d’offrir un sourire naturel, équilibré et adapté au visage de chaque patient.",
    image: esthetique,
  },
  parodontologie: {
    titre: "Parodontologie",
    description:
      "La parodontologie est la spécialité qui traite les maladies des gencives et de l’os qui soutient les dents. En clinique dentaire, elle permet de diagnostiquer, prévenir et soigner des affections comme la gingivite ou la parodontite. Ces traitements visent à stopper l’inflammation et à préserver la dentition naturelle. Une bonne santé parodontale est essentielle pour la stabilité et la longévité des dents.",
    image: parodontologie,
  },
  implantologie: {
    titre: "Implantologie",
    description:
      "L’implantologie est une discipline qui consiste à remplacer une ou plusieurs dents manquantes par des implants en titane insérés dans l’os de la mâchoire. Cette technique offre une solution fixe, durable et esthétique. Elle permet de retrouver une mastication efficace et un sourire naturel. L’implant agit comme une racine artificielle, préservant l’équilibre de la bouche.",
    image: implantologie,
  },
  endodontie: {
    titre: "Endodontie",
    description:
      "L’endodontie est la spécialité qui traite l’intérieur de la dent, notamment le nerf et la pulpe dentaire. Elle intervient lorsqu’une dent est infectée ou douloureuse, souvent par une carie profonde. Le traitement consiste à nettoyer, désinfecter et obturer les canaux pour sauver la dent. Cela permet d’éviter l’extraction et de conserver une dent fonctionnelle.",
    image: endodontie,
  },
  "facettes-dentaires": {
    titre: "Facettes dentaires",
    description:
      "Les facettes dentaires sont de fines pellicules en céramique ou en composite collées sur la face visible des dents. Elles permettent de corriger la forme, la couleur ou l’alignement des dents de façon rapide et esthétique. C’est une solution idéale pour embellir le sourire tout en préservant la structure dentaire. Le résultat est naturel, durable et personnalisé à chaque patient.",
    image: facette,
  },
  orthodontie: {
    titre: "Orthodontie",
    description:
      "L’orthodontie est la spécialité qui corrige les malpositions des dents et des mâchoires pour améliorer la fonction et l’esthétique du sourire. Elle utilise des appareils fixes (comme les bagues) ou amovibles (comme les aligneurs transparents – Invisalign). Ces traitements favorisent une bonne occlusion et facilitent l’hygiène bucco-dentaire. L’orthodontie s’adresse aussi bien aux enfants qu’aux adultes.",
    image: orthodontie,
  },
  "greffe-osseuse": {
    titre: "Greffe osseuse",
    description:
      "La greffe osseuse est une intervention qui permet de reconstruire l’os de la mâchoire lorsqu’il est insuffisant pour poser un implant dentaire. Elle consiste à ajouter de l’os naturel ou synthétique pour renforcer la zone traitée. Cette procédure favorise une bonne stabilité des futurs implants. Elle est essentielle pour restaurer pleinement la fonction et l’esthétique du sourire.",
    image: greffe,
  },
  "blanchiment-dentaire": {
    titre: "Blanchiment dentaire",
    description:
      "Le blanchiment dentaire est un traitement esthétique qui vise à éclaircir la teinte des dents en éliminant les taches et les colorations. Réalisé en clinique dentaire, il utilise des gels à base de peroxyde, activés sous contrôle professionnel pour garantir efficacité et sécurité. Le résultat est un sourire visiblement plus lumineux. C’est une solution rapide et non invasive pour raviver l’éclat naturel des dents.",
    image: blanchiment,
  },
  pedodontie: {
    titre: "Pedodontie",
    description:
      "La pédodontie est la branche de la dentisterie dédiée à la santé bucco-dentaire des enfants, dès le plus jeune âge. Elle comprend la prévention, les soins des dents temporaires et l’accompagnement de la croissance dentaire. Le but est d’instaurer de bonnes habitudes et de traiter précocement les problèmes. Un suivi régulier favorise un sourire sain et une dentition équilibrée à l’âge adulte.",
    image: pedodontie,
  },
};

// ------------------------------------------------------------
// Animation variants
// ------------------------------------------------------------
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

const childVariant = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

// ------------------------------------------------------------
// Component
// ------------------------------------------------------------
const CompetenceDetail = () => {
  const { slug } = useParams();
  const competence = competencesData[slug];

  if (!competence) {
    return (
      <motion.div
        className="text-center py-20 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Compétence introuvable
        </h2>
        <Link to="/" className="text-[#bb2988] underline">
          Retour à l'accueil
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="py-16 px-4 max-w-4xl mx-auto mt-20"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-4xl font-bold text-center text-[#ad9d64] mb-8"
        variants={childVariant}
      >
        {competence.titre}
      </motion.h1>

      {/* Container for image + paragraph & CTA */}
      <motion.div variants={staggerContainer}>
        <motion.img
          src={competence.image}
          alt={competence.titre}
          className="w-[60%] object-cover rounded mb-6 mx-auto shadow-lg"
          variants={childVariant}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        <motion.p
          className="text-lg text-gray-700 mb-8 leading-relaxed"
          variants={childVariant}
        >
          {competence.description}
        </motion.p>

        <motion.div className="text-center" variants={childVariant}>
          <Link
            to="/rendez-vous"
            className="bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 focus:scale-105 active:scale-95 inline-block"
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Prendre un rendez-vous
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CompetenceDetail;
