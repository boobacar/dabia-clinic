import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* === IMAGES (mets tes vraies images dans src/assets/technologie) === */
import radioPan from "../assets/technologie/tech-radio.jpeg";
import teleradio from "../assets/technologie/tech-teleradio.jpg";
import camera from "../assets/technologie/tech-camera.jpg";
import cbct from "../assets/technologie/tech-cbct.jpeg";
import laser from "../assets/technologie/tech-laser.jpg";
import scanner from "../assets/technologie/tech-scanner.jpg";
import aspiration from "../assets/technologie/tech-aspiration.jpg";
import autoclave from "../assets/technologie/tech-autoclave.jpg";
import ia from "../assets/technologie/tech-ia.jpg";
import led from "../assets/technologie/tech-led.png";

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
    details:
      "Micro-caméra haute résolution indolore : elle capture des images détaillées des dents, gencives et muqueuses, même dans les zones difficiles d’accès. Idéal pour expliquer les soins et détecter précocement caries ou fissures.",
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
    details:
      "Le laser diode permet des chirurgies gingivales précises, une réduction bactérienne et une cicatrisation accélérée, avec moins d’anesthésie et de bruit pour le patient.",
  },
  {
    titre: "Scanner intra-oral 3D",
    description: "Empreintes numériques et prothèses sur mesure sans pâte.",
    image: scanner,
    details:
      "Caméra 3D haute définition qui numérise votre bouche en quelques minutes, sans alginate. Utilisé pour planification d’implants, couronnes, facettes, gouttières orthodontiques et suivi d’usure.",
  },
  {
    titre: "Aspiration chirurgicale",
    description:
      "Système haute puissance pour un champ opératoire propre et sécurisé.",
    image: aspiration,
    details:
      "Évacuation instantanée de salive, débris et aérosols ; meilleure visibilité pour le praticien et réduction du risque de contamination croisée.",
  },
  {
    titre: "Autoclaves modernes (classe B)",
    description:
      "Stérilisation conforme aux normes européennes pour instruments impeccables.",
    image: autoclave,
    details:
      "Cycle sous vide fractionné ; traçabilité électronique et impression des cycles ; sécurité maximale pour chaque patient.",
  },
  {
    titre: "Intelligence artificielle (IA)",
    description:
      "Aide au diagnostic radiologique et planification de traitements complexes.",
    image: ia,
    details:
      "Algorithmes d’IA pour analyser les radiographies, dépister les lésions précoces et simuler des résultats esthétiques, améliorant précision et communication patient.",
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
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
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
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition text-left"
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
