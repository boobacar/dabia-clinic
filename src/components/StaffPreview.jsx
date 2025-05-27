import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sao from "../assets/sao.png";

const StaffPreview = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl text-[#ad9d64] font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Notre Equipe
      </motion.h2>

      <div className="flex justify-center mb-6">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          <img
            src={sao}
            alt="Dr Nom"
            className="w-[40%]  rounded-full mx-auto mb-4 object-cover"
          />
          <h4 className="text-lg font-semibold text-[#bb2988]">
            Dr Fatoumata SAO
          </h4>
          <p className="text-sm text-gray-500">
            Fondatrice de la clinique DABIA
          </p>
        </motion.div>
      </div>

      <div className="text-center">
        <Link
          to="/personnel"
          className="bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Voir tout le personnel
        </Link>
      </div>
    </section>
  );
};

export default StaffPreview;
