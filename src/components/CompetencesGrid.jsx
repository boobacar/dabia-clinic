import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import competences from "../data/competences";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CompetencesGrid = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl text-[#ad9d64] font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos Compétences
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {competences.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link
              to={`/competences/${item.slug}`}
              className="relative block h-70 group"
            >
              <img
                src={item.image}
                alt={item.titre}
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{item.titre}</h3>
                  <p className="text-sm">{item.description.slice(0, 50)}...</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CompetencesGrid;
