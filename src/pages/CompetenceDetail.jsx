import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/posts"; // ← articles du blog pour les "Articles liés"
import Seo from "../components/Seo";
import { sendEvent } from "../analytics/ga4";
import { competenceContent } from "../data/competenceContent"; // ← contenu riche centralisé (partagé avec le SSG)

import esthetique from "../assets/competences/esthetique.webp";
import parodontologie from "../assets/competences/parodontologie.webp";
import implantologie from "../assets/competences/Implantologie.webp";
import endodontie from "../assets/competences/Endodontie.webp";
import facette from "../assets/competences/Facettes-dentaires.webp";
import orthodontie from "../assets/competences/Orthodontie.webp";
import greffe from "../assets/competences/Greffe-osseuse.webp";
import blanchiment from "../assets/competences/Blanchiment-dentaire.webp";
import pedodontie from "../assets/competences/Pedodontie.webp";

// ------------------------------------------------------------
//  Données Compétence
// ------------------------------------------------------------
const competencesData = {
  "esthétique-dentaire": {
    titre: "Esthétique dentaire",
    description:
      "L’esthétique dentaire vise à améliorer l’apparence du sourire (teinte, forme, alignement) avec des traitements comme le blanchiment, les facettes ou l’alignement invisible. Objectif : un sourire naturel et harmonieux, adapté au visage.",
    image: esthetique,
  },
  parodontologie: {
    titre: "Parodontologie",
    description:
      "Diagnostic et traitement des maladies des gencives et de l’os (gingivite, parodontite). La parodontologie vise à stopper l’inflammation, préserver les dents et stabiliser la santé bucco-dentaire.",
    image: parodontologie,
  },
  implantologie: {
    titre: "Implantologie",
    description:
      "Remplacement d’une ou plusieurs dents manquantes par des implants en titane. Solution fixe, durable et esthétique qui restaure la mastication et préserve l’os.",
    image: implantologie,
  },
  endodontie: {
    titre: "Endodontie",
    description:
      "Traitement de l’intérieur de la dent (nerf/pulpe) en cas d’infection ou douleur. Le traitement canalaire nettoie, désinfecte et obture les canaux pour sauver la dent.",
    image: endodontie,
  },
  "facettes-dentaires": {
    titre: "Facettes dentaires",
    description:
      "Fines pellicules en céramique ou composite collées sur la face visible des dents pour corriger couleur, forme, petits défauts d’alignement. Résultat naturel et rapide.",
    image: facette,
  },
  orthodontie: {
    titre: "Orthodontie",
    description:
      "Correction des malpositions dentaires et des mâchoires (aligneurs transparents, brackets) pour une bonne occlusion, une meilleure hygiène et un sourire aligné.",
    image: orthodontie,
  },
  "greffe-osseuse": {
    titre: "Greffe osseuse",
    description:
      "Reconstruction de l’os de la mâchoire quand il est insuffisant pour poser un implant (os autogène/synthétique). Assure la stabilité et la durabilité des implants.",
    image: greffe,
  },
  "blanchiment-dentaire": {
    titre: "Blanchiment dentaire",
    description:
      "Éclaircissement de la teinte des dents sous contrôle professionnel (gels à base de peroxyde). Résultat visible rapidement et en toute sécurité.",
    image: blanchiment,
  },
  pedodontie: {
    titre: "Pédodontie",
    description:
      "Soins et prévention pour les enfants : suivi de croissance, traitement des dents temporaires, conseils d’hygiène et habitudes saines.",
    image: pedodontie,
  },
};

// ------------------------------------------------------------
//  Mots-clés par compétence → sélection des articles liés
// ------------------------------------------------------------
// Contenu riche centralisé (Quick Answer, points forts, déroulé, FAQ)
const MONEY_PAGE_CONTENT = competenceContent;

const MONEY_PAGE_LINKS = {
  "esthétique-dentaire": { tagPath: "/blog/tag/blanchiment-des-dents" },
  parodontologie: { tagPath: "/blog/tag/gingivite" },
  implantologie: { tagPath: "/blog/tag/implant-dentaire" },
  endodontie: { tagPath: "/blog/tag/douleur-dentaire" },
  "facettes-dentaires": { tagPath: "/blog/tag/blanchiment-des-dents" },
  orthodontie: { tagPath: "/blog/tag/orthodontie" },
  "greffe-osseuse": { tagPath: "/blog/tag/implant-dentaire" },
  "blanchiment-dentaire": { tagPath: "/blog/tag/blanchiment-des-dents" },
  pedodontie: { tagPath: "/blog/tag/dentiste-pediatrique-dakar" },
};

const RELATED_KEYWORDS = {
  "esthétique-dentaire": ["esthétique", "blanchiment", "facettes", "sourire"],
  parodontologie: ["gingivite", "parodontite", "détartrage", "saignement"],
  implantologie: ["implant", "implant dentaire", "greffe", "couronne"],
  endodontie: [
    "déviation",
    "canalaire",
    "pulpite",
    "douleur la nuit",
    "mal de dents",
    "devitalisation",
    "dé-vitalisation",
    "traitement canalaire",
  ],
  "facettes-dentaires": ["facettes", "esthétique", "blanchiment"],
  orthodontie: [
    "orthodontie",
    "aligneurs",
    "Invisalign",
    "brackets",
    "contention",
  ],
  "greffe-osseuse": ["greffe", "implant", "os"],
  "blanchiment-dentaire": ["blanchiment", "teinte", "esthétique"],
  pedodontie: [
    "enfant",
    "pédiatrie",
    "première visite",
    "vernis fluoré",
    "traumatisme",
  ],
};

// petite normalisation
function norm(s = "") {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function pickRelatedPosts(slug, limit = 6) {
  const words = (RELATED_KEYWORDS[slug] || []).map(norm);
  if (!words.length) return [];

  // Score par match dans title/description/tags/category
  const withScore = POSTS.map((p) => {
    const hay = norm(
      [p.title, p.description, p.category, ...(p.tags || [])].join(" ")
    );
    const score = words.reduce((acc, w) => acc + (hay.includes(w) ? 1 : 0), 0);
    return { p, score };
  })
    .filter(({ score }) => score > 0)
    // Bonus si catégorie proche: Urgences pour endodontie; Esthétique pour blanchiment/facettes; etc.
    .map(({ p, score }) => {
      let bonus = 0;
      if (slug === "endodontie" && p.category === "Urgences") bonus += 1;
      if (
        [
          "esthétique-dentaire",
          "blanchiment-dentaire",
          "facettes-dentaires",
        ].includes(slug) &&
        p.category === "Esthétique"
      )
        bonus += 1;
      if (
        slug === "implantologie" &&
        (p.category === "Implantologie" ||
          p.title.toLowerCase().includes("implant"))
      )
        bonus += 1;
      if (
        slug === "pedodontie" &&
        (p.category === "Pédiatrie" ||
          p.tags?.some((t) => norm(t).includes("enfant")))
      )
        bonus += 1;
      if (
        slug === "parodontologie" &&
        (p.category === "Prévention" ||
          p.tags?.some((t) => norm(t).includes("gingiv")))
      )
        bonus += 1;
      return { p, score: score + bonus };
    })
    .sort(
      (a, b) => b.score - a.score || new Date(b.p.date) - new Date(a.p.date)
    );

  // Évite de suggérer des posts trop anciens en priorisant la fraicheur (déjà trié par date à égalité)
  return withScore.slice(0, limit).map(({ p }) => p);
}

// ------------------------------------------------------------
// Animations
// ------------------------------------------------------------
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const staggerContainer = { animate: { transition: { staggerChildren: 0.15 } } };
const childVariant = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const CTA_VARIANTS = ["balanced", "whatsapp-first", "rdv-first"];

function pickCompetenceCtaVariant(storageKey) {
  if (typeof window === "undefined") return "balanced";
  const existing = localStorage.getItem(storageKey);
  if (existing && CTA_VARIANTS.includes(existing)) return existing;
  const chosen = CTA_VARIANTS[Math.floor(Math.random() * CTA_VARIANTS.length)];
  localStorage.setItem(storageKey, chosen);
  return chosen;
}

// ------------------------------------------------------------
// Composant
// ------------------------------------------------------------
const CompetenceDetail = () => {
  const { slug } = useParams();
  const competence = competencesData[slug];
  const related = useMemo(() => pickRelatedPosts(slug, 6), [slug]);

  // Liste ordonnée pour précédent/suivant
  const slugs = useMemo(() => Object.keys(competencesData), []);
  const index = slugs.indexOf(slug);
  const prevSlug = index > 0 ? slugs[index - 1] : null;
  const nextSlug =
    index >= 0 && index < slugs.length - 1 ? slugs[index + 1] : null;

  // JSON-LD Service + Breadcrumb + FAQ light
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.cliniquedentairedabia.com";
  const imgAbs = competence?.image
    ? competence.image.startsWith("http")
      ? competence.image
      : `${origin}${competence.image}`
    : `${origin}/og-image.webp`;
  const url = `${origin}/competences/${slug}`;
  const description = (competence?.description || "").slice(0, 155);
  const moneyContent = MONEY_PAGE_CONTENT[slug];
  const moneyLinks = MONEY_PAGE_LINKS[slug] || null;
  const [ctaVariant, setCtaVariant] = useState("balanced");
  const pagePath = `/competences/${slug}`;
  const scrollMilestonesRef = useRef(new Set());
  const timedMilestonesRef = useRef(new Set());
  const sectionSeenRef = useRef(new Set());
  const faqSectionRef = useRef(null);
  const conversionSectionRef = useRef(null);

  const trackCompetenceEvent = useCallback(
    (eventName, extra = {}) => {
      sendEvent(eventName, {
        page_path: pagePath,
        competence_slug: slug,
        cta_variant: ctaVariant,
        ...extra,
      });
    },
    [pagePath, slug, ctaVariant]
  );

  useEffect(() => {
    if (!moneyContent) return;
    const storageKey = `dabia_competence_cta_ab:${slug}`;
    const variant = pickCompetenceCtaVariant(storageKey);
    setCtaVariant(variant);
    sendEvent("competence_cta_ab_impression", {
      page_path: pagePath,
      competence_slug: slug,
      cta_variant: variant,
    });
  }, [moneyContent, pagePath, slug]);

  useEffect(() => {
    if (!moneyContent || typeof window === "undefined") return;

    scrollMilestonesRef.current = new Set();

    const thresholds = [25, 50, 75, 90];
    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const scrolled = (window.scrollY / maxScroll) * 100;

      thresholds.forEach((threshold) => {
        if (scrolled >= threshold && !scrollMilestonesRef.current.has(threshold)) {
          scrollMilestonesRef.current.add(threshold);
          trackCompetenceEvent("competence_scroll_depth", {
            scroll_threshold: threshold,
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [moneyContent, trackCompetenceEvent]);

  useEffect(() => {
    if (!moneyContent || typeof window === "undefined") return;

    timedMilestonesRef.current = new Set();
    const milestones = [30, 90];

    const timers = milestones.map((seconds) =>
      window.setTimeout(() => {
        if (timedMilestonesRef.current.has(seconds)) return;
        timedMilestonesRef.current.add(seconds);
        trackCompetenceEvent("competence_engaged_time", {
          engaged_seconds: seconds,
        });
      }, seconds * 1000)
    );

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [moneyContent, trackCompetenceEvent]);

  useEffect(() => {
    if (!moneyContent || typeof window === "undefined") return;
    if (!faqSectionRef.current && !conversionSectionRef.current) return;

    sectionSeenRef.current = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionName = entry.target.getAttribute("data-section-name");
          if (!sectionName || sectionSeenRef.current.has(sectionName)) return;
          sectionSeenRef.current.add(sectionName);
          trackCompetenceEvent("competence_section_view", {
            section_name: sectionName,
          });
        });
      },
      { threshold: 0.35 }
    );

    if (faqSectionRef.current) observer.observe(faqSectionRef.current);
    if (conversionSectionRef.current) observer.observe(conversionSectionRef.current);

    return () => observer.disconnect();
  }, [moneyContent, trackCompetenceEvent]);

  const ctaLabels = {
    rdv:
      ctaVariant === "rdv-first"
        ? "Je prends RDV maintenant"
        : ctaVariant === "whatsapp-first"
          ? "Réserver ma consultation"
          : "Prendre rendez-vous",
    whatsapp:
      ctaVariant === "whatsapp-first"
        ? "WhatsApp (réponse rapide)"
        : "WhatsApp rapide",
    advice:
      ctaVariant === "balanced"
        ? `Voir les conseils liés (${competence?.titre || "soin"})`
        : `Conseils liés (${competence?.titre || "soin"})`,
  };

  const ctaOrder =
    ctaVariant === "whatsapp-first"
      ? ["whatsapp", "rdv", "advice"]
      : ctaVariant === "rdv-first"
        ? ["rdv", "whatsapp", "advice"]
        : ["rdv", "advice", "whatsapp"];

  const onConversionClick = (ctaType) => {
    sendEvent("competence_cta_ab_click", {
      page_path: pagePath,
      competence_slug: slug,
      cta_variant: ctaVariant,
      cta_type: ctaType,
    });
    sendEvent("cta_rendez_vous_click", {
      page_path: pagePath,
      cta_type: `${ctaType}_competence_ab`,
      cta_variant: ctaVariant,
      competence_slug: slug,
    });
  };

  const whatsappHref = `https://wa.me/221777039393?text=${encodeURIComponent(
    `Bonjour Clinique DABIA, je souhaite un rendez-vous pour ${competence?.titre || "un soin dentaire"}.`
  )}`;
  const faqEntities =
    moneyContent?.faq?.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })) || [];

  const jsonLdService = competence
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: competence.titre,
        areaServed: "Dakar, Sénégal",
        provider: {
          "@type": "Dentist",
          name: "Clinique Dentaire DABIA",
          url: origin,
        },
        image: imgAbs,
        description: competence.description,
      }
    : null;

  const jsonLdBreadcrumb = competence
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: origin },
          {
            "@type": "ListItem",
            position: 2,
            name: "Nos Compétences",
            item: `${origin}/all-competences`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: competence.titre,
            item: url,
          },
        ],
      }
    : null;

  const jsonLdFAQ = competence
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity:
          faqEntities.length > 0
            ? faqEntities
            : [
                {
                  "@type": "Question",
                  name: `Combien de temps dure un traitement de ${competence.titre.toLowerCase()} ?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La durée dépend du diagnostic et du plan de traitement personnalisé. Un devis clair et un planning vous sont remis après l’examen clinique.",
                  },
                },
                {
                  "@type": "Question",
                  name: `Le traitement de ${competence.titre.toLowerCase()} est-il douloureux ?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Les soins sont réalisés sous anesthésie locale et avec des protocoles modernes pour maximiser le confort. Des conseils post-soins vous sont donnés.",
                  },
                },
              ],
      }
    : null;

  if (!competence) {
    return (
      <motion.div
        className="page-shell text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Seo
          title="Compétence introuvable"
          description="Cette page n’existe pas ou a été déplacée."
          canonical={url}
          url={url}
          robots="noindex,follow"
        />
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Compétence introuvable
        </h1>
        <div className="mt-10">
          <Link to="/#competences" className="btn-cta">
            ← Retour à nos compétences
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="page-shell px-4 max-w-4xl mx-auto"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Seo
        title={`${competence.titre} à Dakar`}
        description={description}
        canonical={url}
        url={url}
        image={imgAbs}
        prevUrl={prevSlug ? `/competences/${prevSlug}` : undefined}
        nextUrl={nextSlug ? `/competences/${nextSlug}` : undefined}
        jsonLd={[jsonLdService, jsonLdBreadcrumb, jsonLdFAQ].filter(Boolean)}
      />
      <nav aria-label="Fil d’Ariane" className="text-sm mb-4 text-gray-600">
        <Link to="/" className="hover:underline">
          Accueil
        </Link>{" "}
        ›{" "}
        <Link to="/all-competences" className="hover:underline">
          Nos Compétences
        </Link>{" "}
        › <span aria-current="page">{competence.titre}</span>
      </nav>

      <motion.h1
        className="text-4xl font-bold text-center text-[#ad9d64] mb-8"
        variants={childVariant}
      >
        {competence.titre} à Dakar
      </motion.h1>

      <motion.div variants={staggerContainer}>
        <motion.img
          src={competence.image}
          alt={`${competence.titre} – Clinique Dentaire DABIA, Dakar`}
          className="w-[60%] aspect-[4/3] object-cover rounded mb-6 mx-auto shadow-lg"
          width="800"
          height="600"
          variants={childVariant}
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        <motion.p
          className="text-lg text-gray-700 mb-8 leading-relaxed"
          variants={childVariant}
        >
          {competence.description}
        </motion.p>

        {moneyContent && (
          <motion.div variants={childVariant} className="space-y-8 mb-10">
            <section className="bg-white rounded-xl border p-5 md:p-6">
              <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">
                {competence.titre}: prise en charge à Dakar
              </h2>
              <p className="text-gray-700 leading-relaxed">{moneyContent.accroche}</p>
            </section>

            <section className="bg-white rounded-xl border p-5 md:p-6">
              <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">
                Points clés du traitement
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {moneyContent.pointsForts.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-xl border p-5 md:p-6">
              <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">
                Comment se déroule le traitement ?
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                {moneyContent.deroule.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section
              ref={faqSectionRef}
              data-section-name="faq"
              className="bg-white rounded-xl border p-5 md:p-6"
            >
              <h2 className="text-2xl font-bold text-[#ad9d64] mb-4">
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {moneyContent.faq.map((item) => (
                  <article key={item.q}>
                    <h3 className="font-semibold text-gray-900">{item.q}</h3>
                    <p className="text-gray-700 mt-1 leading-relaxed">{item.a}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              ref={conversionSectionRef}
              data-section-name="conversion"
              className="bg-[#f8f6ef] rounded-xl border border-[#e8e2cc] p-5 md:p-6"
            >
              <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">
                Devis, prise en charge et rendez-vous rapide
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-5">
                <li>Un devis détaillé est remis après examen clinique et plan de traitement.</li>
                <li>
                  Nous vous aidons à préparer votre dossier IPM/mutuelle sur la page
                  {" "}
                  <Link
                    to="/infos/assurances"
                    className="text-blue-700 hover:underline"
                    onClick={() => onConversionClick("assurances_link")}
                  >
                    Assurances
                  </Link>
                  .
                </li>
                <li>
                  Besoin d’une réponse rapide ? Contactez-nous par téléphone ou WhatsApp pour être orienté selon l’urgence.
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                {ctaOrder.map((cta) => {
                  if (cta === "rdv") {
                    return (
                      <Link
                        key="rdv"
                        to={`/rendez-vous?motif=${encodeURIComponent(slug)}`}
                        className={`btn-cta ${ctaVariant === "rdv-first" ? "ring-2 ring-[#ad9d64]/40" : ""}`}
                        onClick={() => onConversionClick("rdv")}
                      >
                        {ctaLabels.rdv}
                      </Link>
                    );
                  }

                  if (cta === "whatsapp") {
                    return (
                      <a
                        key="whatsapp"
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-cta ${ctaVariant === "whatsapp-first" ? "ring-2 ring-green-500/40" : ""}`}
                        aria-label={`Contacter la clinique sur WhatsApp pour ${competence.titre}`}
                        onClick={() => onConversionClick("whatsapp")}
                      >
                        {ctaLabels.whatsapp}
                      </a>
                    );
                  }

                  if (cta === "advice" && moneyLinks?.tagPath) {
                    return (
                      <Link
                        key="advice"
                        to={moneyLinks.tagPath}
                        className="btn-cta"
                        onClick={() => onConversionClick("advice")}
                      >
                        {ctaLabels.advice}
                      </Link>
                    );
                  }

                  return null;
                })}
              </div>
            </section>
          </motion.div>
        )}

        <motion.div className="text-center" variants={childVariant}>
          <Link
            to="/rendez-vous"
            className="btn-cta"
            aria-label="Prendre rendez-vous à la Clinique Dentaire DABIA"
            onClick={() => {
              trackCompetenceEvent("competence_primary_cta_click", {
                cta_position: "bottom",
                cta_type: "rdv",
              });
              sendEvent("cta_rendez_vous_click", {
                page_path: pagePath,
                cta_type: "rdv_bottom_competence",
                cta_variant: ctaVariant,
                competence_slug: slug,
              });
            }}
          >
            Prendre un rendez-vous
          </Link>
        </motion.div>

        {/* Navigation précédente / suivante */}
        <div className="mt-10 flex items-center justify-between text-sm">
          <div>
            {prevSlug && (
              <Link
                to={`/competences/${prevSlug}`}
                className="text-blue-700 hover:underline"
                aria-label="Compétence précédente"
                onClick={() =>
                  trackCompetenceEvent("competence_navigation_click", {
                    direction: "prev",
                    target_slug: prevSlug,
                  })
                }
              >
                ← {competencesData[prevSlug].titre}
              </Link>
            )}
          </div>
          <div>
            {nextSlug && (
              <Link
                to={`/competences/${nextSlug}`}
                className="text-blue-700 hover:underline"
                aria-label="Compétence suivante"
                onClick={() =>
                  trackCompetenceEvent("competence_navigation_click", {
                    direction: "next",
                    target_slug: nextSlug,
                  })
                }
              >
                {competencesData[nextSlug].titre} →
              </Link>
            )}
          </div>
        </div>

        {/* ======================= ARTICLES LIÉS ======================= */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-[#ad9d64] mb-5">
              Articles liés à {competence.titre}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <article
                  key={p.slug}
                  className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition"
                >
                  <Link
                    to={`/blog/${p.slug}`}
                    onClick={() =>
                      trackCompetenceEvent("competence_related_article_click", {
                        article_slug: p.slug,
                        click_zone: "image",
                      })
                    }
                  >
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <div className="p-4">
                    <p className="text-xs text-gray-500">
                      {new Date(p.date).toLocaleDateString("fr-FR")} •{" "}
                      {p.category}
                    </p>
                    <h3 className="text-base font-semibold mt-1 mb-1">
                      <Link
                        className="hover:text-[#bb2988]"
                        to={`/blog/${p.slug}`}
                        onClick={() =>
                          trackCompetenceEvent("competence_related_article_click", {
                            article_slug: p.slug,
                            click_zone: "title",
                          })
                        }
                      >
                        {p.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                      {(p.tags || []).slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-gray-100 rounded-full"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/blog"
                className="btn-cta"
                aria-label="Voir tous les articles du blog"
              >
                Voir tous les articles
              </Link>
            </div>
          </section>
        )}
      </motion.div>
    </motion.section>
  );
};

export default CompetenceDetail;
