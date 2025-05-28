import { motion } from "framer-motion";

import radio from "../assets/tech-radio.jpeg";
import camera from "../assets/tech-camera.jpg";
import laser from "../assets/tech-laser.jpg";
import scanner from "../assets/tech-scanner.jpg";
import led from "../assets/tech-led.png";

const technologies = [
  {
    titre: "Radiographie numérique",
    description:
      "Des images précises avec moins de rayonnement pour un diagnostic rapide et sûr.",
    image: radio,
  },
  {
    titre: "Caméra intra-orale",
    description:
      "Permet de visualiser l’intérieur de la bouche en temps réel sur écran.",
    image: camera,
  },
  {
    titre: "Laser dentaire",
    description:
      "Traitements doux pour les gencives et les caries sans douleur et sans bruit.",
    image: laser,
  },
  {
    titre: "Scanner 3D (CFAO)",
    description:
      "Empreintes numériques pour fabriquer des couronnes, facettes et prothèses sur mesure.",
    image: scanner,
  },
  {
    titre: "Blanchiment par lampe LED",
    description:
      "Sourire éclatant en une seule séance grâce à une technologie sans danger.",
    image: led,
  },
];

const Technologie = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <motion.h2
        className="text-4xl font-bold text-center text-[#ad9d64] mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nos Technologies
      </motion.h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        À la Clinique Dentaire Dabia, nous utilisons des équipements de pointe
        pour garantir des soins de qualité, confortables, rapides et précis.
        Voici quelques-unes de nos technologies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologie;
