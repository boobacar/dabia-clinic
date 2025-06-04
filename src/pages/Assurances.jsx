import React from "react";
import { motion } from "framer-motion";

// Import des logos
import logoSunu from "../assets/assurances/sunu.jpg";
import logoAxa from "../assets/assurances/axa.png";
import logoSonam from "../assets/assurances/sonam.jpg";
import logoPrevoyance from "../assets/assurances/prevoyance.jpg";
import logoMsh from "../assets/assurances/msh.png";
import logoOlea from "../assets/assurances/olea.png";
import logoAscoma from "../assets/assurances/ascoma.jpg";
import logoWafa from "../assets/assurances/wafa.png";
import logoAmsa from "../assets/assurances/amsa.png";
import logoSanlam from "../assets/assurances/sanlam.png";
import logoFinafrica from "../assets/assurances/finafrica.png";
import logoWillis from "../assets/assurances/willis.png";
import logoGga from "../assets/assurances/gga.png";
import logoAfiyah from "../assets/assurances/afiyah.jpeg";
import logoIpmSonatel from "../assets/assurances/ipm_sonatel.jpg";
import logoIpmEiffage from "../assets/assurances/ipm_eiffage.jpg";
import logoIpmBis from "../assets/assurances/ipm_bis.png";
import logoIpmSagfa from "../assets/assurances/ipm_sagfa.jpeg";
import logoIpmPoste from "../assets/assurances/ipm_poste.jpeg";
import logoIpmCentif from "../assets/assurances/ipm_centif.jpeg";
import logoIpmKingFahd from "../assets/assurances/ipm_kingfahd.png";
import logoSypaoa from "../assets/assurances/sypaoa.jpeg";
import logoTransvie from "../assets/assurances/transvie.webp";
import logoIpmSenelec from "../assets/assurances/ipm_senelec.jpeg";
import logoIpmSura from "../assets/assurances/ipm_sura.png";
import logoSusu from "../assets/assurances/susu.png";
import logoAgetip from "../assets/assurances/agetip.jpeg";
import logoMutuelleCapVert from "../assets/assurances/mutuelle_cap_vert.png";
import logoPhosphateThies from "../assets/assurances/phosphate_thies.jpeg";
import logoExpressSante from "../assets/assurances/express_sante.jpeg";
import logoDgid from "../assets/assurances/dgid.png";
import logoIpm from "../assets/assurances/ipm.jpeg";
import { Link } from "react-router-dom";

const assurances = [
  { nom: "AXA", logo: logoAxa },
  { nom: "Sonam", logo: logoSonam },
  { nom: "Amsa", logo: logoAmsa },
  { nom: "MSH International", logo: logoMsh },
  { nom: "OLEA", logo: logoOlea },
  { nom: "Ipm Sonatel", logo: logoIpmSonatel },
  { nom: "Ascoma", logo: logoAscoma },
  { nom: "Sunu Assurances", logo: logoSunu },
  { nom: "Prévoyance Assurance", logo: logoPrevoyance },
  { nom: "Wafa Assurances", logo: logoWafa },
  { nom: "Sanlam|Allianz", logo: logoSanlam },
  { nom: "Ma-Dgid (IPM impots et domaines)", logo: logoDgid },
  { nom: "Finafrica", logo: logoFinafrica },
  { nom: "WILLIS TOWERS WATSON", logo: logoWillis },
  { nom: "GGA", logo: logoGga },
  { nom: "Ipm Fadiou", logo: logoIpm },
  { nom: "Ipm Sura", logo: logoIpm },
  { nom: "Ipm des Professions Libérales", logo: logoIpm },
  { nom: "Afiyah", logo: logoAfiyah },
  { nom: "Ipm Eiffage", logo: logoIpmEiffage },
  { nom: "Ipm Bis (banque islamique)", logo: logoIpmBis },
  { nom: "Ipm Sagfa", logo: logoIpmSagfa },
  { nom: "Ipm Poste", logo: logoIpmPoste },
  { nom: "Ipm Centif", logo: logoIpmCentif },
  { nom: "Ipm King Fahd Palace", logo: logoIpmKingFahd },
  { nom: "SYPAOA", logo: logoSypaoa },
  { nom: "TRANSVIE", logo: logoTransvie },
  { nom: "Ipm Senelec", logo: logoIpmSenelec },
  { nom: "SUSU", logo: logoSusu },
  { nom: "AGETIP", logo: logoAgetip },
  { nom: "Mutuelle Hôtelière du Cap-Vert", logo: logoMutuelleCapVert },
  { nom: "Phosphate de THIES", logo: logoPhosphateThies },
  { nom: "Express Santé", logo: logoExpressSante },
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

      <div className="flex justify-center mb-10">
        <Link
          to="/rendez-vous"
          className="animate-bounce inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
        >
          Prendre un rendez-vous
        </Link>
      </div>

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
              className="w-16 h-16 object-contain bg-white rounded-md"
            />
            <h3 className="text-md font-semibold text-[#bb2988]">{item.nom}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Assurances;
