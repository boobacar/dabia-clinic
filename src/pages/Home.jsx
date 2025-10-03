import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroVideo from "../components/HeroVideo";
import BeforeAfterGallery from "../components/BeforeAfterGallery";
import ClinicIntro from "../components/ClinicIntro";
import CompetencesGrid from "../components/CompetencesGrid";
import StaffPreview from "../components/StaffPreview";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import GoogleMapSection from "../components/GoogleMapSection";
import Personnel from "./Personnel";
import HeroSlideshow from "../components/HeroSlideshow";

// 👉 On importe la source des articles
import { POSTS } from "../data/posts";
import BlogListCompact from "../components/BlogListCompact";

// Utils: épinglés d'abord puis date décroissante
const sortByDateDesc = (a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
const sortPinnedThenDate = (a, b) => {
  const ap = a.pinned ? 1 : 0;
  const bp = b.pinned ? 1 : 0;
  if (ap !== bp) return bp - ap;
  return sortByDateDesc(a, b);
};

const Home = () => {
  const postsSorted = [...POSTS].sort(sortPinnedThenDate);
  const latest = postsSorted.slice(0, 6); // vitrine
  const allPosts = postsSorted; // liste complète

  // Framer Motion variants
  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, duration: 0.4, ease: "easeOut" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="bg-white text-gray-800">
      <HeroSlideshow />
      <BeforeAfterGallery />
      <ClinicIntro />
      {/* Liens rapides – style pills aux couleurs du site */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link
            to="/dentiste-dakar"
            className="px-4 py-2 rounded-full bg-pink-50 text-[#bb2988] border border-pink-200 shadow-sm hover:bg-pink-100 hover:border-pink-300 transition"
          >
            Dentiste Dakar
          </Link>
          <Link
            to="/cabinet-dentaire-dakar"
            className="px-4 py-2 rounded-full bg-pink-50 text-[#bb2988] border border-pink-200 shadow-sm hover:bg-pink-100 hover:border-pink-300 transition"
          >
            Cabinet dentaire
          </Link>
          <Link
            to="/urgence-dentaire-dakar"
            className="px-4 py-2 rounded-full bg-pink-50 text-[#bb2988] border border-pink-200 shadow-sm hover:bg-pink-100 hover:border-pink-300 transition"
          >
            Urgence
          </Link>
          <Link
            to="/all-competences"
            className="px-4 py-2 rounded-full bg-pink-50 text-[#bb2988] border border-pink-200 shadow-sm hover:bg-pink-100 hover:border-pink-300 transition"
          >
            Compétences
          </Link>
          <Link
            to="/infos/technologie"
            className="px-4 py-2 rounded-full bg-pink-50 text-[#bb2988] border border-pink-200 shadow-sm hover:bg-pink-100 hover:border-pink-300 transition"
          >
            Technologie
          </Link>
          <Link
            to="/infos/assurances"
            className="px-4 py-2 rounded-full bg-pink-50 text-[#bb2988] border border-pink-200 shadow-sm hover:bg-pink-100 hover:border-pink-300 transition"
          >
            Assurances
          </Link>
          <Link
            to="/cabinet-dentaire-liberte-6"
            className="px-4 py-2 rounded-full bg-pink-50 text-[#bb2988] border border-pink-200 shadow-sm hover:bg-pink-100 hover:border-pink-300 transition"
          >
            Liberté 6
          </Link>
        </div>
      </section>
      <StaffPreview />
      <CompetencesGrid />

      {/* =========================
          Derniers articles (grille)
         ========================= */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex items-end justify-between mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Derniers articles du blog
            </h2>
            <Link
              to="/blog"
              className="text-pink-600 hover:text-[#bb2988] font-medium"
            >
              Voir le blog →
            </Link>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {latest.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  {post.cover && (
                    <img
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:opacity-95 transition"
                    />
                  )}
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      • {post.category}
                      {post.readingMinutes ? ` • ${post.readingMinutes} min` : ""}
                    </div>
                    <h3 className="font-semibold text-lg leading-snug group-hover:text-[#bb2988]">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-block px-6 py-3 rounded-full bg-[#bb2988] text-white font-semibold transition transform hover:scale-105"
            >
              Tous les articles du blog
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ===================================
          Tous nos articles (liste de liens)
         =================================== */}
      <BlogListCompact />
      <TestimonialsCarousel />
      <GoogleMapSection />
    </div>
  );
};

export default Home;
