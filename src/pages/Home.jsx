import React, { Suspense, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import HeroSlideshow from "../components/HeroSlideshow";
import SkeletonImage from "../components/SkeletonImage";
import Seo from "../components/Seo";
const FAQ = React.lazy(() => import("../components/FAQ"));
import SectionTitle from "../components/SectionTitle";
// Sections chargées en lazy pour alléger le bundle initial
const BeforeAfterGallery = React.lazy(() =>
  import("../components/BeforeAfterGallery")
);
const ClinicIntro = React.lazy(() => import("../components/ClinicIntro"));
const CompetencesGrid = React.lazy(() =>
  import("../components/CompetencesGrid")
);
const StaffPreview = React.lazy(() => import("../components/StaffPreview"));
const BlogListCompact = React.lazy(() =>
  import("../components/BlogListCompact")
);
const SectionWave = React.lazy(() => import("../components/SectionWave"));
const KeyMetrics = React.lazy(() => import("../components/KeyMetrics"));
const AssuranceMarquee = React.lazy(() =>
  import("../components/AssuranceMarquee")
);

// 👉 On importe la source des articles
import { POSTS } from "../data/posts";
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

// Lazy-loaded sections (chargées en chunk séparé)
const TestimonialsCarousel = React.lazy(() =>
  import("../components/TestimonialsCarousel")
);
const GoogleMapSection = React.lazy(() =>
  import("../components/GoogleMapSection")
);

// Utils: épinglés d'abord puis date décroissante
const sortByDateDesc = (a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const Home = () => {
  const postsSorted = useMemo(() => [...POSTS].sort(sortByDateDesc), []);
  const latest = useMemo(() => postsSorted.slice(0, 6), [postsSorted]);
  const assuranceLogos = useMemo(
    () => [
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
    ],
    []
  );

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
  const sectionReveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const cardReveal = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="bg-white text-gray-800">
      <Seo
        title="Dentiste à Dakar (Liberté 6) – Urgence & RDV rapide | DABIA"
        description="Clinique dentaire à Dakar : urgences, détartrage, implants, orthodontie et esthétique. Prenez rendez-vous rapidement par téléphone, WhatsApp ou formulaire."
        canonical="https://www.cliniquedentairedabia.com/"
        url="https://www.cliniquedentairedabia.com/"
      />
      <HeroSlideshow />
      <Suspense fallback={<div className="py-12" aria-hidden="true" />}>
        <BeforeAfterGallery />
      </Suspense>
      <Suspense fallback={<div className="py-8" aria-hidden="true" />}>
        <ClinicIntro />
        <KeyMetrics />
        <SectionWave />
      </Suspense>
      {/* Liens rapides – style pills aux couleurs du site */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-600 mb-3">
            Vous cherchez un dentiste à Dakar ou une clinique dentaire moderne ?
            Accédez directement à nos pages clés :
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link to="/dentiste-dakar" className="btn-cta btn-cta-sm">
              Dentiste Dakar
            </Link>
            <Link to="/cabinet-dentaire-dakar" className="btn-cta btn-cta-sm">
              Cabinet dentaire
            </Link>
            <Link to="/clinique-dentaire-dakar" className="btn-cta btn-cta-sm">
              Clinique dentaire Dakar
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
            <Link
              to="/cabinet-dentaire-liberte-6"
              className="btn-cta btn-cta-sm"
            >
              Liberté 6
            </Link>
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="py-10" aria-hidden="true" />}>
        <StaffPreview />
        <CompetencesGrid />
      </Suspense>
      <Suspense fallback={<div className="py-6" aria-hidden="true" />}>
        <AssuranceMarquee className="py-6" speed={45} logos={assuranceLogos} />
      </Suspense>
      {/* Pourquoi nous choisir */}
      <motion.section
        className="py-14 px-4 bg-white"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl"
            variants={cardReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2 className="text-3xl font-extrabold text-[#ad9d64]">
              Pourquoi nous choisir comme dentiste à Dakar ?
            </h2>
            <p className="mt-3 text-gray-700 text-base">
              Clinique DABIA, Sicap Foire (Liberté 6) : urgences, implants,
              orthodontie, esthétique et soins enfants, avec un plateau
              technique moderne.
            </p>
          </motion.div>
          <motion.div
            className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Rendez-vous rapides (urgences sous 24h) et devis clairs",
              "CBCT 3D, scanner intra-oral, stérilisation Classe B",
              "Implants, facettes, aligneurs, blanchiment, parodontologie",
              "Soins pour enfants et adultes, approche douce et pédagogique",
              "Accès facile VDN/Corniche, parking devant la clinique",
              "Accompagnement post-soins : contrôles, hygiène, rappels",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm"
                variants={cardReveal}
              >
                <FaCheckCircle className="mt-1 text-[#bb2988]" />
                <p className="text-sm text-gray-800">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* FAQ Home */}
      <motion.section
        className="py-12 px-4 bg-gray-50"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={cardReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <Suspense fallback={<div className="py-8" aria-hidden="true" />}>
              <FAQ
                asJsonLd={false}
                title="Foire aux questions"
                items={[
                  {
                    q: "Où se situe la clinique ?",
                    a: "À Sicap Foire, 150m des deux voies de Liberté 6, proche VDN/Corniche. Parking devant l’entrée.",
                  },
                  {
                    q: "Proposez-vous des urgences dentaires à Dakar ?",
                    a: "Oui, nous ouvrons des créneaux sous 24h. Appelez avant de venir pour organiser la prise en charge.",
                  },
                  {
                    q: "Quels soins sont proposés ?",
                    a: "Implants, facettes, orthodontie (aligneurs/bagues), parodontologie, soins enfants, détartrage et esthétique.",
                  },
                  {
                    q: "Proposez-vous des devis détaillés ?",
                    a: "Oui, après l’examen, un plan de traitement et un devis clairs sont expliqués avec des étapes et options.",
                  },
                  {
                    q: "Comment prendre rendez-vous ?",
                    a: "En ligne via la page Rendez-vous ou par téléphone/WhatsApp. Les devis sont expliqués avec des étapes claires.",
                  },
                  {
                    q: "Quels sont vos horaires ?",
                    a: "Lundi à vendredi 9h-19h, samedi 9h-13h. Pour une urgence, appelez avant de vous déplacer.",
                  },
                  {
                    q: "Acceptez-vous les IPM et assurances ?",
                    a: "Nous aidons à la préparation des dossiers. Un devis détaillé est fourni pour vos demandes de prise en charge.",
                  },
                  {
                    q: "Puis-je étaler les soins ou les paiements ?",
                    a: "Les plans de traitement peuvent être phasés. Selon le cas, un étalement des rendez-vous et des paiements est proposé.",
                  },
                ]}
              />
            </Suspense>
          </motion.div>
        </div>
      </motion.section>

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
          <div className="flex flex-col md:flex-row items-end justify-between mb-8">
            <div className="md:flex-1 w-full">
              <SectionTitle
                title="Derniers articles du blog"
                subtitle="Conseils & Actualités"
                center={false}
                className="mb-0"
              />
            </div>
            <Link
              to="/blog"
              className="text-pink-600 hover:text-[#bb2988] font-medium mt-4 md:mt-0 md:mb-6 shrink-0"
            >
              Voir le blog →
            </Link>
          </div>

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
      <Suspense fallback={<div className="py-8" aria-hidden="true" />}>
        <BlogListCompact />
      </Suspense>
      <Suspense fallback={<div className="py-12" aria-hidden="true" />}>
        <TestimonialsCarousel />
        <GoogleMapSection />
      </Suspense>
    </div>
  );
};

export default Home;
