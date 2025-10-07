import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import apropos from "../assets/apropos.webp";

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
          alt="Dentiste Dakar - Clinique dentaire DABIA"
          className="hidden sm:block sm:w-[300px] rounded-lg shadow-md"
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
            À propos de la Clinique Dentaire DABIA
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Située au cœur de Dakar, à la Sicap Foire Socabeg à 150m des deux
            voies de Liberté VI, notre clinique dentaire vous accueille dans un
            cadre moderne, chaleureux et professionnel. Nous mettons un point
            d'honneur à offrir des soins de qualité, adaptés aux besoins de
            chaque patient. Notre équipe expérimentée et attentionnée vous
            accompagne avec écoute et bienveillance, que ce soit pour des
            consultations de routine, des traitements spécialisés ou des
            interventions esthétiques. Votre sourire est notre priorité !
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
