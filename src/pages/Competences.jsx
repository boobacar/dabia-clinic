import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import competences from "../data/competences";

/**
 * Animated "Compétences" gallery
 * --------------------------------------------------
 * – Title fades/slides in when it enters the viewport
 * – Call‑to‑action button keeps its bounce but also fades in
 * – Grid items appear with a staggered scale/slide animation
 * – Each card gently lifts & zooms its background image on hover
 */

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.4 } },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const MotionLink = motion(Link);

export default function Competences() {
  return (
    <section className="mt-20 py-16 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h2
        className="text-3xl text-[#ad9d64] font-bold text-center mb-8"
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        Nos Compétences
      </motion.h2>

      {/* CTA Button */}
      <motion.div
        className="flex justify-center mb-10"
        variants={ctaVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Link
          to="/rendez-vous"
          className="animate-bounce inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105"
        >
          Prendre un rendez-vous
        </Link>
      </motion.div>

      {/* Competences Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {competences.map((item, index) => (
          <MotionLink
            to={`/competences/${item.slug}`}
            key={index}
            className="relative h-48 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            {/* Background image */}
            <img
              src={item.image}
              alt={item.titre}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay & text */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute bottom-0 p-4 text-white pointer-events-none">
              <h3 className="text-lg font-bold mb-1 drop-shadow-md">
                {item.titre}
              </h3>
              <p className="text-sm drop-shadow-md">
                {item.description.slice(0, 50)}...
              </p>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
}
