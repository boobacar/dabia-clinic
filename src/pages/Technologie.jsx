import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* === IMAGES (mets tes vraies images dans src/assets/technologie) === */
import radioPan from "../assets/technologie/tech-radio.jpeg";
import teleradio from "../assets/technologie/tech-teleradio.jpg";
import camera from "../assets/technologie/tech-camera.jpg";
import cbct from "../assets/technologie/tech-cbct.jpeg";
import laser from "../assets/technologie/tech-laser.jpeg";
import scanner from "../assets/technologie/tech-scanner.jpeg";
import aspiration from "../assets/technologie/tech-aspiration.jpg";
import autoclave from "../assets/technologie/tech-autoclave.jpg";
import ia from "../assets/technologie/tech-ia.jpg";
import led from "../assets/technologie/tech-led.png";
import { Link } from "react-router-dom";

/* === CONTENU === */
const technologies = [
  {
    titre: "Radiographie panoramique numérique",
    description:
      "Vue complète des mâchoires en un cliché, avec une dose de rayons X réduite et un diagnostic rapide.",
    image: radioPan,
    details:
      "Cette technologie capture une image complète de votre bouche en une seule prise : dents, mâchoires, articulations, sinus et nerfs. Grâce à un capteur numérique et une rotation douce autour de votre tête, elle remplace les radiographies traditionnelles par une solution plus sûre (dose réduite) et plus efficace.",
  },
  {
    titre: "Téléradiographie céphalométrique",
    description:
      "Analyse précise des rapports squelettiques pour les traitements orthodontiques.",
    image: teleradio,
    details:
      "Radiographie latérale du crâne à faible dose qui montre l’ensemble de la structure faciale (mâchoires, dents, articulation temporo-mandibulaire, tissus mous) pour élaborer un plan orthodontique individualisé.",
  },
  {
    titre: "Caméra intra-orale",
    description:
      "Visualisation HD en temps réel de l'intérieur de la bouche sur écran.",
    image: camera,
    details: `Il s’agit d’une micro-caméra haute résolution, miniature et indolore, qui capture des images précises de l’intérieur de votre bouche. Elle nous permet de visualiser chaque détail de vos dents, gencives et muqueuses, même dans les zones difficiles d’accès.`,
  },
  {
    titre: "Cone Beam CT (CBCT)",
    description: "Imagerie 3D ultra-précise pour implants et chirurgie guidée.",
    image: cbct,
    /* template-string => retours à la ligne conservés */
    details: `Cet équipement révolutionnaire capture des images 3D détaillées de vos dents, mâchoires, nerfs et structures osseuses en quelques secondes.

Dans quels cas l’utilisons-nous ?

- Planification d’implants dentaires
- Analyse de dents incluses
- Diagnostic de pathologies osseuses ou sinusiennes
- Traitements orthodontiques complexes
- Chirurgie buccale`,
  },
  {
    titre: "Laser dentaire",
    description:
      "Traitements des tissus mous quasi indolores et sans saignement.",
    image: laser,
    details: `Une Révolution de Précision et de Confort à la Clinique Dentaire DABIA

À la clinique DABIA, nous allions expertise et technologies de pointe pour transformer votre expérience dentaire. Le laser dentaire incarne cette philosophie : une solution innovante, douce et ultra-précise pour des soins adaptés à vos besoins. 
Précision inégalée, confort optimal, guérison accélérée, sécurité et sérénité seront au rendez-vous avec vos traitements au laser dentaire.`,
  },
  {
    titre: "Scanner intra-oral 3D",
    description: "Empreintes numériques et prothèses sur mesure sans pâte.",
    image: scanner,
    details: `Grâce à une petite caméra haute définition, nous capturons en quelques minutes une image 3D ultra-précise de votre bouche. Sans pâte désagréable, sans gouttière, et sans rayonnement.

Cet outil est utilisé pour : 
- Planification d’implant
- ⁠Couronnes, bridges et facettes
- ⁠Orthodontie (Invisalign, gouttières)
- ⁠Suivi de l’usure dentaire ou des greffes gingivales`,
  },
  {
    titre: "Aspiration chirurgicale",
    description:
      "Système haute puissance pour un champ opératoire propre et sécurisé.",
    image: aspiration,
    details: `Pendant vos soins dentaires, l’aspiration chirurgicale élimine en temps réel :  
- Les résidus de salive, de sang ou de tissus,  
- Les liquides d’irrigation (eau utilisée lors des interventions),  
- Les aérosols (fines particules en suspension dans l’air). 
Pour un confort optimisé, une sécurité renforcée et une visibilité parfaite.`,
  },
  {
    titre: "Autoclaves modernes (classe B)",
    description:
      "Stérilisation conforme aux normes européennes pour instruments impeccables.",
    image: autoclave,
    details: `l’excellence en stérilisation à la Clinique Dentaire DABIA 

À la clinique dentaire DABIA, votre santé est notre priorité absolue. C’est pourquoi nous utilisons un autoclave moderne de Classe B l’équipement de stérilisation le plus avancé et le plus fiable du marché pour garantir une hygiène irréprochable de tous nos instruments dentaires.

L’autoclave Classe B répond aux normes européennes les plus strictes (EN 13060) et s’impose comme la référence dans les cabinets dentaires exigeants.`,
  },
  {
    titre: "Intelligence artificielle (IA)",
    description:
      "Aide au diagnostic radiologique et planification de traitements complexes.",
    image: ia,
    details: `Votre alliée pour des soins dentaires de précision

Chez la Clinique Dentaire DABIA, nous combinons l’expertise humaine et l’innovation technologique pour vous offrir des soins d’excellence. Mais qu’est-ce que l’IA concrètement ?  

L’Intelligence Artificielle est une technologie qui permet à nos systèmes d’analyser des données dentaires avec une précision inédite. Comme un assistant ultra-performant, elle aide nos dentistes à repérer des détails subtils sur vos radios, à anticiper vos besoins, et à personnaliser chaque traitement.`,
  },
  {
    titre: "Blanchiment par lampe LED",
    description:
      "Sourire éclatant en une séance grâce à une lumière froide sécurisée.",
    image: led,
    details:
      "Activation rapide du gel blanchissant sans chauffer la pulpe ; jusqu’à 8 teintes plus claires en 45 minutes.",
  },
];

/* === MODAL === */
const TechnologieModal = ({ tech, onClose }) => (
  <AnimatePresence>
    {tech && (
      <motion.div
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl max-w-lg w-full p-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>

          <img
            src={tech.image}
            alt={tech.titre}
            className="w-full h-56 object-cover rounded-md mb-4"
          />

          <h3 className="text-2xl font-bold text-[#bb2988] mb-2">
            {tech.titre}
          </h3>

          {/* string → on garde les retours à la ligne */}
          <p className="whitespace-pre-line text-gray-700 text-sm leading-relaxed">
            {tech.details}
          </p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* === PAGE PRINCIPALE === */
const Technologie = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      {/* Titre */}
      <motion.h2
        className="text-4xl font-bold text-center text-[#ad9d64] mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos Technologies
      </motion.h2>

      {/* Intro */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        À la Clinique Dentaire Dabia, nous utilisons des équipements de pointe
        pour garantir des soins de qualité, confortables, rapides et précis.
        Cliquez sur une technologie pour en savoir plus.
      </p>

      <div className="flex justify-center mb-10">
        <Link
          to="/rendez-vous"
          className="animate-bounce inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
        >
          Prendre un rendez-vous
        </Link>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, i) => (
          <motion.button
            key={i}
            onClick={() => setSelectedTech(tech)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white cursor-pointer rounded-xl shadow-md overflow-hidden hover:shadow-lg transition text-left"
          >
            <img
              src={tech.image}
              alt={tech.titre}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-[#bb2988] text-lg font-bold mb-2">
                {tech.titre}
              </h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      {selectedTech && (
        <TechnologieModal
          tech={selectedTech}
          onClose={() => setSelectedTech(null)}
        />
      )}
    </section>
  );
};

export default Technologie;
