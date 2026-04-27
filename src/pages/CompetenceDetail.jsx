import { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/posts"; // ← articles du blog pour les "Articles liés"
import Seo from "../components/Seo";

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
const MONEY_PAGE_CONTENT = {
  implantologie: {
    accroche:
      "L’implantologie est indiquée lorsqu’une dent manquante gêne la mastication, l’esthétique du sourire ou la stabilité des dents voisines.",
    pointsForts: [
      "Bilan clinique + imagerie pour confirmer la quantité d’os disponible.",
      "Plan de traitement personnalisé (1 dent, plusieurs dents ou réhabilitation complète).",
      "Suivi post-opératoire structuré pour sécuriser la cicatrisation.",
    ],
    deroule: [
      "Consultation de diagnostic: examen, radio/CBCT et discussion des objectifs.",
      "Phase chirurgicale: pose de l’implant sous anesthésie locale.",
      "Phase prothétique: couronne/bridge après intégration osseuse.",
      "Contrôles réguliers et maintenance pour la durabilité.",
    ],
    faq: [
      {
        q: "Combien de temps dure un traitement implantaire ?",
        a: "La durée dépend du volume osseux, du nombre d’implants et de la cicatrisation. Après le bilan, un calendrier clair vous est remis.",
      },
      {
        q: "Peut-on poser un implant si la dent est absente depuis longtemps ?",
        a: "Oui, dans de nombreux cas. Un examen précis permet d’évaluer si une préparation osseuse est nécessaire avant la pose.",
      },
    ],
  },
  orthodontie: {
    accroche:
      "L’orthodontie améliore l’alignement dentaire, l’occlusion et facilite l’hygiène quotidienne, chez l’adolescent comme chez l’adulte.",
    pointsForts: [
      "Choix thérapeutique selon votre profil: aligneurs transparents ou appareils conventionnels.",
      "Objectifs fonctionnels et esthétiques définis avant le début du traitement.",
      "Contrôles réguliers pour ajuster le mouvement dentaire en douceur.",
    ],
    deroule: [
      "Bilan orthodontique complet et photos cliniques.",
      "Simulation du plan de traitement et validation des étapes.",
      "Pose des dispositifs et visites de contrôle programmées.",
      "Phase de contention pour stabiliser le résultat.",
    ],
    faq: [
      {
        q: "Un adulte peut-il commencer un traitement orthodontique ?",
        a: "Oui. L’orthodontie adulte est fréquente et peut être adaptée aux contraintes esthétiques et professionnelles.",
      },
      {
        q: "Combien de temps faut-il porter une contention ?",
        a: "La contention est indispensable pour maintenir les résultats. La durée varie selon les cas et vous est expliquée dès le plan initial.",
      },
    ],
  },
  "blanchiment-dentaire": {
    accroche:
      "Le blanchiment dentaire professionnel vise à éclaircir la teinte des dents tout en respectant l’émail et la sensibilité individuelle.",
    pointsForts: [
      "Vérification préalable: absence de caries actives et contrôle gingival.",
      "Protocole encadré médicalement pour limiter la sensibilité.",
      "Conseils personnalisés pour prolonger l’éclat du sourire.",
    ],
    deroule: [
      "Consultation préalable avec diagnostic de teinte.",
      "Nettoyage/détartrage si nécessaire avant le protocole.",
      "Séance de blanchiment au cabinet ou protocole mixte selon indication.",
      "Suivi et recommandations alimentaires/hygiène post-traitement.",
    ],
    faq: [
      {
        q: "Le blanchiment abîme-t-il les dents ?",
        a: "Réalisé au cabinet et sur bonne indication, le blanchiment respecte l’émail. Le protocole est ajusté pour votre confort.",
      },
      {
        q: "Le résultat est-il durable ?",
        a: "Le résultat dépend des habitudes (tabac, café, thé) et de l’hygiène. Un entretien périodique peut être proposé.",
      },
    ],
  },
  "facettes-dentaires": {
    accroche:
      "Les facettes dentaires corrigent couleur, forme et petits défauts d’alignement pour un rendu harmonieux et naturel.",
    pointsForts: [
      "Analyse esthétique du sourire avant toute préparation.",
      "Choix de la teinte et de la forme en cohérence avec votre visage.",
      "Approche conservatrice pour préserver un maximum de structure dentaire.",
    ],
    deroule: [
      "Bilan initial et définition du projet esthétique.",
      "Préparation minimale des dents selon indication.",
      "Essayage puis collage des facettes avec ajustements précis.",
      "Contrôle de l’occlusion et conseils d’entretien.",
    ],
    faq: [
      {
        q: "Les facettes ont-elles un rendu naturel ?",
        a: "Oui, quand la planification est personnalisée. Le choix de la teinte et de la translucidité est adapté à votre sourire.",
      },
      {
        q: "Combien de temps durent les facettes ?",
        a: "Avec une bonne hygiène et des contrôles réguliers, les facettes peuvent durer de nombreuses années.",
      },
    ],
  },
  endodontie: {
    accroche:
      "L’endodontie permet de traiter la douleur liée à l’infection pulpaire et de conserver la dent quand cela est possible.",
    pointsForts: [
      "Diagnostic précis de la cause (carie profonde, fissure, infection).",
      "Traitement canalaire avec protocole de désinfection rigoureux.",
      "Restauration finale pour protéger la dent traitée.",
    ],
    deroule: [
      "Examen clinique + imagerie pour confirmer l’indication.",
      "Anesthésie locale puis nettoyage des canaux.",
      "Obturation étanche et contrôle radiographique.",
      "Reconstitution de la dent (composite/couronne selon le cas).",
    ],
    faq: [
      {
        q: "Le traitement canalaire est-il douloureux ?",
        a: "Le traitement est réalisé sous anesthésie locale. L’objectif est précisément de soulager la douleur et d’éliminer l’infection.",
      },
      {
        q: "Faut-il toujours poser une couronne après ?",
        a: "Pas systématiquement. Cela dépend de la quantité de dent restante et du risque de fracture après traitement.",
      },
    ],
  },
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
        className="text-center py-20 mt-20"
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
      className="py-16 px-4 max-w-4xl mx-auto mt-20"
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
          className="w-[60%] object-cover rounded mb-6 mx-auto shadow-lg"
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

            <section className="bg-white rounded-xl border p-5 md:p-6">
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
          </motion.div>
        )}

        <motion.div className="text-center" variants={childVariant}>
          <Link
            to="/rendez-vous"
            className="btn-cta"
            aria-label="Prendre rendez-vous à la Clinique Dentaire DABIA"
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
                  <Link to={`/blog/${p.slug}`}>
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
