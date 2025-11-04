import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import SkeletonImage from "../components/SkeletonImage";
import SectionWave from "../components/SectionWave";
import KeyMetrics from "../components/KeyMetrics";
import AssuranceMarquee from "../components/AssuranceMarquee";
// Logos assurances (pour la home marquee)
import logoSunu from "../assets/assurances/sunu.webp";
import logoAxa from "../assets/assurances/axa.webp";
import logoSonam from "../assets/assurances/sonam.webp";
import logoPrevoyance from "../assets/assurances/prevoyance.webp";
import logoMsh from "../assets/assurances/msh.webp";
import logoOlea from "../assets/assurances/olea.webp";
import logoAscoma from "../assets/assurances/ascoma.webp";
import logoWafa from "../assets/assurances/wafa.webp";
import logoAmsa from "../assets/assurances/amsa.webp";
import logoSanlam from "../assets/assurances/sanlam.webp";
import logoIpmSonatel from "../assets/assurances/ipm_sonatel.webp";
import logoIpmEiffage from "../assets/assurances/ipm_eiffage.webp";
import logoIpmBis from "../assets/assurances/ipm_bis.webp";
import logoIpmPoste from "../assets/assurances/ipm_poste.webp";
import logoIpmCentif from "../assets/assurances/ipm_centif.webp";
import logoIpmKingFahd from "../assets/assurances/ipm_kingfahd.webp";
import logoTransvie from "../assets/assurances/transvie.webp";
import logoIpmSenelec from "../assets/assurances/ipm_senelec.webp";
import logoDgid from "../assets/assurances/dgid.webp";

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
      <KeyMetrics />
      <SectionWave />
      {/* Liens rapides – style pills aux couleurs du site */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link to="/dentiste-dakar" className="btn-cta btn-cta-sm">
            Dentiste Dakar
          </Link>
          <Link to="/cabinet-dentaire-dakar" className="btn-cta btn-cta-sm">
            Cabinet dentaire
          </Link>
          <Link to="/urgence-dentaire-dakar" className="btn-cta btn-cta-sm">
            Urgence
          </Link>
          <Link to="/all-competences" className="btn-cta btn-cta-sm">
            Compétences
          </Link>
          <Link to="/infos/technologie" className="btn-cta btn-cta-sm">
            Technologie
          </Link>
          <Link to="/infos/assurances" className="btn-cta btn-cta-sm">
            Assurances
          </Link>
          <Link to="/cabinet-dentaire-liberte-6" className="btn-cta btn-cta-sm">
            Liberté 6
          </Link>
        </div>
      </section>
      <StaffPreview />
      <AssuranceMarquee
        className="py-6"
        speed={45}
        logos={[
          logoAxa,
          logoSonam,
          logoSunu,
          logoPrevoyance,
          logoWafa,
          logoSanlam,
          logoOlea,
          logoMsh,
          logoAscoma,
          logoAmsa,
          logoIpmSenelec,
          logoIpmPoste,
          logoIpmSonatel,
          logoIpmBis,
          logoIpmEiffage,
          logoIpmKingFahd,
          logoDgid,
          logoIpmCentif,
          logoTransvie,
        ]}
      />
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
                  className="group gradient-card glow-hover wow-tilt bg-white rounded-xl shadow transition-transform duration-300 ease-out overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl ring-1 ring-transparent hover:ring-[#ad9d64]/40"
                >
                  {post.cover && (
                    <SkeletonImage
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 overflow-hidden"
                      imgClassName="object-cover transition-transform duration-300 rounded-t-xl group-hover:opacity-95 group-hover:scale-[1.03]"
                      style={{ viewTransitionName: `post-cover-${post.slug}` }}
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
                      {post.readingMinutes
                        ? ` • ${post.readingMinutes} min`
                        : ""}
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
            <Link to="/blog" className="btn-cta">
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
