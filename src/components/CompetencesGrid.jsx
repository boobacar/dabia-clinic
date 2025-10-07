import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import competences from "../data/competences";
import SkeletonImage from "./SkeletonImage";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CompetencesGrid() {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.cliniquedentairedabia.com";

  // JSON-LD ItemList (ordre de la grille)
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: competences.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${origin}/competences/${item.slug}`,
      name: item.titre,
    })),
  };

  return (
    <section
      id="competences"
      className="scroll-mt-24 py-16 px-4 max-w-6xl mx-auto"
    >
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
          <motion.div key={item.slug} variants={card}>
            <Link
              to={`/competences/${item.slug}`}
              className="gradient-card glow-hover wow-tilt block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
              title={`${item.titre} à Dakar – en savoir plus`}
              aria-label={`${item.titre} à Dakar – en savoir plus`}
            >
              <div className="relative h-72 group">
                <SkeletonImage
                  src={item.image}
                  alt={`${item.titre} – Clinique Dentaire DABIA, Dakar`}
                  className="absolute inset-0 w-full h-full"
                  imgClassName="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{item.titre}</h3>
                  <p className="text-sm">
                    {(item.description || "").slice(0, 80)}…
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-12 text-center">
        <Link to="/rendez-vous" className="btn-cta">
          Prendre un rendez-vous
        </Link>
      </div>

      {/* Données structurées de la liste */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </section>
  );
}
