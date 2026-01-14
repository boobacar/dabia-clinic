import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import SectionTitle from "./SectionTitle";
import avantApresImages from "../assets/avantApresImages";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BeforeAfterGallery() {
  return (
    <section className="py-12 px-4 max-w-full mx-auto">
      {/* Heading */}
      <SectionTitle
        title="Résultats Avant/Après"
        subtitle="Transformations"
        className="mb-10"
      />

      {/* Grid animation with staggered children */}
      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {avantApresImages.map((pair, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <ReactCompareSlider
              className="rounded-lg shadow-md overflow-hidden h-48 md:h-64 lg:h-80 lg:w-135"
              itemOne={
                <ReactCompareSliderImage
                  src={pair.before}
                  alt={`Avant ${idx + 1}`}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={pair.after}
                  alt={`Après ${idx + 1}`}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              }
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA vers la galerie complète */}
      <div className="text-center mt-8">
        <Link to="/galerie" className="btn-cta">
          Voir toute la galerie
        </Link>
      </div>
    </section>
  );
}
