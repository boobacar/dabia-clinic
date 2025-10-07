import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import TechScrolly from "../components/TechScrolly";
import technologies from "../data/technologies";

/* Données importées depuis src/data/technologies.js */

/* === PAGE PRINCIPALE === */
const Technologie = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title="Nos technologies – Clinique Dentaire DABIA (Dakar)"
        description="Radiographie panoramique, CBCT 3D, scanner intra-oral, laser, autoclave classe B : notre plateau technique pour des soins de précision."
        canonical="https://www.cliniquedentairedabia.com/infos/technologie"
        url="https://www.cliniquedentairedabia.com/infos/technologie"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Technologie" }]}
      />
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
        <Link to="/rendez-vous" className="btn-cta">
          Prendre un rendez-vous
        </Link>
      </div>

      <TechScrolly items={technologies} />
    </section>
  );
};

export default Technologie;
