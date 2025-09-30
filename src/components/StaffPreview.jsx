import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sao from "../assets/sao.webp";

const StaffPreview = () => {
  return (
    <motion.section
      className="py-16 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl text-[#ad9d64] font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Notre Equipe
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image */}
        <motion.div
          className="rounded-xl overflow-hidden shadow w-full md:h-[320px] lg:h-[380px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.4 }}
       >
          <img
            src={sao}
            alt="Dentiste Dakar - Clinique dentaire DABIA"
            className="w-full h-full object-cover md:object-[50%_30%] lg:object-[50%_35%]"
          />
        </motion.div>
        {/* Texte */}
        <motion.div
          className="rounded-xl shadow p-6 flex flex-col justify-center bg-white w-full md:h-[320px] lg:h-[380px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h4 className="text-xl font-semibold text-[#bb2988]">Dr FATOUMATA SAO</h4>
          <p className="text-sm text-gray-500 mb-3">
            Fondatrice et chirurgienne-dentiste en chef
          </p>
          <p className="text-sm text-black text-justify leading-relaxed">
            Passionnée par l'excellence et le bien-être de ses patients, Dr SAO
            est la fondatrice et l’âme de la clinique dentaire DABIA. Forte de
            plusieurs années d'expérience, elle s'est spécialisée dans des
            domaines de pointe tels que l’implantologie, l’orthodontie,
            l’endodontie et la dentisterie esthétique. Grâce à une approche
            humaine et à une expertise technique reconnue, elle propose des
            traitements sur mesure alliant précision, confort et esthétisme. Sa
            vision : redonner le sourire en toute confiance, avec un souci
            constant d’innovation et de qualité.
          </p>
        </motion.div>
      </motion.div>
      <div className="text-center">
        <Link
          to="/personnel"
          className="bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Voir tout le personnel
        </Link>
      </div>
    </motion.section>
  );
};

export default StaffPreview;
