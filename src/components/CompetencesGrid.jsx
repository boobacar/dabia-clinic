// src/components/CompetencesGrid.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import competences from "../data/competences";
import CompetenceModal from "./CompetenceModal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CompetencesGrid() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (item) => {
    setSelected(item);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {competences.map((item, index) => (
          <motion.button
            key={index}
            type="button"
            variants={card}
            onClick={() => openModal(item)}
            className="text-left rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
          >
            <div className="relative block h-72 group">
              <img
                src={item.image}
                alt={item.titre}
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{item.titre}</h3>
                <p className="text-sm">
                  {(item.description || "").slice(0, 60)}…
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <CompetenceModal open={open} item={selected} onClose={closeModal} />
    </section>
  );
}
