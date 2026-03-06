import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import apropos from "../assets/apropos.webp";
import aproposAvif from "../assets/apropos.avif";
import aproposMobileAvif from "../assets/apropos-mobile.avif";

const ClinicIntro = () => {
  return (
    <section className="relative overflow-hidden py-16 px-4 bg-gray-100 text-center">
      {/* ✅ Fond image sur mobile + desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 sm:opacity-[0.12]"
        style={{ backgroundImage: `url(${aproposAvif})` }}
      ></div>

      {/* ✅ Contenu animé */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* ✅ Image visible sur mobile */}
        <motion.div
          className="sm:hidden w-full max-w-[320px] rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <picture>
            <source type="image/avif" srcSet={aproposMobileAvif} />
            <img
              src={apropos}
              alt="Dentiste Dakar - Clinique dentaire DABIA"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full h-48 object-cover"
            />
          </picture>
        </motion.div>

        {/* ✅ Image animée sur desktop */}
        <motion.div
          className="hidden sm:block sm:w-[300px] rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <picture>
            <source type="image/avif" srcSet={aproposAvif} />
            <img
              src={apropos}
              alt="Dentiste Dakar - Clinique dentaire DABIA"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full h-auto"
            />
          </picture>
        </motion.div>

        {/* ✅ Texte & bouton animés */}
        <motion.div
          className="text-left sm:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="À propos de la Clinique Dentaire DABIA à Dakar"
            subtitle="Votre sourire, notre priorité"
            center={false}
            className="mb-6"
          />
          <p className="text-lg mb-4 text-gray-700">
            Bienvenue à la Clinique Dentaire DABIA, votre référence pour trouver
            un excellent dentiste à Dakar. Située à Sicap Foire (Liberté 6),
            notre structure moderne vous offre une expertise complète : urgences
            dentaires, implants, orthodontie, et esthétique du sourire.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            En tant que clinique dentaire à Dakar dotée d'un plateau technique
            de pointe (Scanner 3D, radio panoramique), nous garantissons des
            soins de haute qualité. Que vous cherchiez un dentiste pour un
            simple détartrage ou une réhabilitation complexe, notre équipe
            dévouée vous assure une prise en charge douce et personnalisée.
          </p>
          <Link to="/rendez-vous" className="btn-cta">
            Prendre un rendez-vous
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClinicIntro;
