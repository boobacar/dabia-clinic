import { motion } from "framer-motion";

const BeforeAfterGallery = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-[#ad9d64] font-bold text-center mb-8"
      >
        Résultats Avant-Après
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <motion.img
            key={index}
            src={`/assets/avant-apres${index}.jpg`}
            alt={`Transformation ${index}`}
            className="w-full h-60 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          />
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
