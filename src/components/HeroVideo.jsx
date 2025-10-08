import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Video asset removed; fallback to gradient background

const HeroVideo = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Fallback hero sans vidéo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#ad9d64] text-xl md:text-3xl mb-2"
        >
          Bienvenue à la Clinique Dentaire
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[#ad9d64] font-bold text-5xl md:text-7xl mb-6"
        >
          Dabia
        </motion.h1>
        <motion.p className="border p-2 text-[#ad9d64] max-w-60 text-sm mb-10 sm:max-w-100">
          Des soins avancés, un accueil chaleureux, un sourire radieux.
        </motion.p>
        <Link to="/rendez-vous" className="btn-cta">
          Prendre un rendez-vous
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroVideo;
