import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        Notre Équipe
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        {[1, 2, 3].map((i, index) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-lg p-4 text-center cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <img
              src={`/assets/staff${i}.jpg`}
              alt={`Membre ${i}`}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="font-semibold text-[#bb2988]">Dr Nom {i}</h4>
            <p className="text-sm text-gray-500">Chirurgien dentiste</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/personnel"
          className="bg-[#bb2988] text-white px-6 py-3  rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Voir tout le personnel
        </Link>
      </div>
    </section>
  );
};

export default StaffPreview;
