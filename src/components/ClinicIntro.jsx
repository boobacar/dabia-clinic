import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import apropos from "../assets/apropos.png";

const ClinicIntro = () => {
  return (
    <section className="relative overflow-hidden py-16 px-4 bg-gray-100 text-center">
      {/* ✅ Background image mobile uniquement */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 sm:hidden"
        style={{ backgroundImage: `url(${apropos})` }}
      ></div>

      {/* ✅ Contenu animé */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* ✅ Image animée sur desktop */}
        <motion.img
          src={apropos}
          alt="À propos de la clinique"
          className="hidden sm:block sm:w-[80%] rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* ✅ Texte & bouton animés */}
        <motion.div
          className="text-left sm:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-[#ad9d64] font-bold mb-4">
            À propos de la clinique
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Dabia est un cabinet dentaire dédié à la prise en charge complète de
            la santé bucco-dentaire. Situé à Sicap Foire 2 voies Liberté 6, à
            150m du Uno, Dakar, Sénégal, le cabinet offre des soins variés,
            allant de la prévention aux traitements plus complexes comme les
            implants et les prothèses dentaires.
          </p>
          <Link
            to="/rendez-vous"
            className="inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
          >
            Prendre un rendez-vous
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClinicIntro;
