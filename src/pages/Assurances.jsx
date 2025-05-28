import React from "react";
import { motion } from "framer-motion";

// Import des logos
import logoCnam from "../assets/assurances/cnam.png";
import logoIpres from "../assets/assurances/ipres.png";
import logoSunu from "../assets/assurances/sunu.png";
import logoNsia from "../assets/assurances/nsia.png";
import logoAxa from "../assets/assurances/axa.png";
import logoSaar from "../assets/assurances/saar.png";
import logoAskia from "../assets/assurances/askia.png";
import logoMutuelle from "../assets/assurances/mutuelle.png";

// Liste des assurances avec leur logo
const assurances = [
  { nom: "CNAM", logo: logoCnam },
  { nom: "IPRES", logo: logoIpres },
  { nom: "Sunu Assurances", logo: logoSunu },
  { nom: "NSIA", logo: logoNsia },
  { nom: "AXA", logo: logoAxa },
  { nom: "SAAR", logo: logoSaar },
  { nom: "ASKIA", logo: logoAskia },
  { nom: "Mutuelle de Santé", logo: logoMutuelle },
];

const Assurances = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto mt-20">
      <motion.h2
        className="text-4xl font-bold text-center text-[#ad9d64] mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Nos Partenaires Assurances
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {assurances.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={item.logo}
              alt={item.nom}
              className="w-16 h-16 object-contain rounded-md"
            />
            <h3 className="text-md font-semibold text-[#bb2988]">{item.nom}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Assurances;
