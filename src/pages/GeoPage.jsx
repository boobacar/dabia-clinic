// src/pages/GeoPage.jsx — page générée pour les 3 familles géo :
//   /soins/:geoSlug      (compétence × pays)
//   /parcours/:filiereSlug (filière × pays)
//   /pays/:countrySlug   (hub pays)
// Les données viennent de src/data/geoData.js (usine à pages).
import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { sendEvent } from "../analytics/ga4";
import {
  getGeoPageByPath,
  getAllGeoPages,
  GEO_COUNTRIES,
} from "../data/geoData";

const origin = "https://www.cliniquedentairedabia.com";

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const childVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const FAMILY_LABEL = {
  competence: "Soins dentaires à Dakar",
  filiere: "Parcours de soins à Dakar",
  pays: "Patients internationaux",
};

// ---------------------------------------------------------------
//  Page index des hubs pays : /pays
// ---------------------------------------------------------------
export function GeoPaysIndex() {
  const { pathname } = useLocation();

  return (
    <motion.section
      className="page-shell px-4 max-w-5xl mx-auto"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Seo
        title="Soins dentaires à Dakar pour les patients de la sous-région | DABIA"
        description="La Clinique DABIA à Dakar accueille les patients d'Afrique de l'Ouest, d'Afrique centrale et de la diaspora : devis clair, planning de séjour et suivi après le retour."
        canonical="/pays"
        url="/pays"
      />

      <motion.div variants={staggerContainer}>
        <motion.p className="section-kicker text-center mb-2" variants={childVariant}>
          🌍 Patients internationaux
        </motion.p>
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-[#ad9d64] mb-6"
          variants={childVariant}
        >
          Soins dentaires à Dakar pour les patients de la sous-région
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto"
          variants={childVariant}
        >
          De nombreux patients d'Afrique de l'Ouest, d'Afrique centrale et de la
          diaspora choisissent la Clinique DABIA à Dakar pour leurs soins
          dentaires : devis clair avant le voyage, soins planifiés selon la durée
          du séjour et suivi à distance après le retour.
        </motion.p>

        <motion.div
          variants={childVariant}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10"
        >
          {GEO_COUNTRIES.map((c) => (
            <Link
              key={c.slug}
              to={`/pays/${c.slug}`}
              className="flex items-center gap-2 rounded-xl border border-[#ded4cc] bg-white px-3 py-3 text-sm text-gray-800 hover:border-[#d03088] hover:text-[#d03088] transition-colors"
            >
              <span aria-hidden="true">{c.flag}</span>
              <span>{c.name}</span>
            </Link>
          ))}
        </motion.div>

        <motion.div
          variants={childVariant}
          className="text-center bg-[#fbf7f1] border border-[#ded4cc] rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold text-[#282426] mb-2">
            Vous préparez un séjour de soins à Dakar ?
          </h2>
          <p className="text-gray-700 mb-5">
            Contactez-nous par téléphone ou WhatsApp : un devis et un planning de
            soins vous sont confirmés avant votre départ.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/rendez-vous"
              className="btn-cta"
              onClick={() => sendEvent("cta_rendez_vous_click", { page: pathname })}
            >
              Prendre rendez-vous
            </Link>
            <a
              href="https://wa.me/221774837576?text=Bonjour%2C%20je%20souhaite%20un%20devis%20dentaire%20%C3%A0%20Dakar%20depuis%20l%27%C3%A9tranger."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta !bg-[#25D366] hover:!bg-[#1da851]"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default function GeoPage() {
  const { pathname } = useLocation();

  // Tous les hooks AVANT les retours conditionnels (règle react-hooks)
  const page = useMemo(
    () => (pathname === "/pays" ? null : getGeoPageByPath(pathname)),
    [pathname]
  );

  const faqEntities =
    page?.faq?.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })) || [];

  const jsonLdService = page
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: page.h1,
        areaServed: "Dakar, Sénégal",
        provider: {
          "@type": "Dentist",
          name: "Clinique Dentaire DABIA",
          url: origin,
        },
        description: page.description,
      }
    : null;

  const jsonLdFAQ = page
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqEntities,
      }
    : null;

  const jsonLdBreadcrumb = page
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: origin },
          { "@type": "ListItem", position: 2, name: "Patients de la sous-région", item: `${origin}/pays` },
          {
            "@type": "ListItem",
            position: 3,
            name: page.pays?.name || "Soins dentaires",
            item: `${origin}${page.path}`,
          },
        ],
      }
    : null;

  // Maillage interne : les autres pays de la même famille
  const otherCountries = useMemo(() => {
    if (!page) return [];
    return GEO_COUNTRIES.filter((c) => c.slug !== page.pays?.slug).map((c) => ({
      ...c,
      href:
        page.family === "pays"
          ? `/pays/${c.slug}`
          : page.family === "filiere"
            ? `/parcours/${page.fil.slug}-${c.slug}`
            : `/soins/${page.comp.slug}-${c.slug}`,
    }));
  }, [page]);

  const relatedServices = useMemo(() => {
    if (!page || page.family === "pays") return [];
    const family = page.family;
    const currentSlug = family === "filiere" ? page.fil.slug : page.comp.slug;
    const all = getAllGeoPages().filter(
      (p) => p.family === family && p.pays?.slug === page.pays?.slug && p.path !== page.path
    );
    // 4 pages "connexes" de la même famille et du même pays (parcours stable)
    const stable = all.filter((p) => {
      const slug = family === "filiere" ? p.fil.slug : p.comp.slug;
      return slug !== currentSlug;
    });
    return stable.slice(0, 4);
  }, [page]);

  // /pays (index des hubs) → composant dédié (après tous les hooks)
  if (pathname === "/pays") return <GeoPaysIndex />;

  if (!page) {
    return (
      <motion.div
        className="page-shell text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Seo
          title="Page introuvable"
          description="Cette page n'existe pas ou a été déplacée."
          canonical={pathname}
          url={pathname}
          robots="noindex,follow"
        />
        <h1 className="text-3xl font-bold text-red-500 mb-4">Page introuvable</h1>
        <div className="mt-10">
          <Link to="/" className="btn-cta">
            ← Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    );
  }

  const trackRdv = () => sendEvent("cta_rendez_vous_click", { page: pathname });

  return (
    <motion.section
      className="page-shell px-4 max-w-4xl mx-auto"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Seo
        title={page.title}
        description={page.description}
        canonical={page.path}
        url={page.path}
        jsonLd={[jsonLdService, jsonLdBreadcrumb, jsonLdFAQ].filter(Boolean)}
      />

      <nav aria-label="Fil d'Ariane" className="text-sm mb-4 text-gray-600">
        <Link to="/" className="hover:underline">
          Accueil
        </Link>{" "}
        ›{" "}
        <Link to="/pays" className="hover:underline">
          Patients de la sous-région
        </Link>{" "}
        › <span aria-current="page">{page.pays?.name}</span>
      </nav>

      <motion.div variants={staggerContainer}>
        <motion.p
          className="section-kicker text-center mb-2"
          variants={childVariant}
        >
          {page.pays?.flag} {FAMILY_LABEL[page.family]}
        </motion.p>
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-[#ad9d64] mb-6"
          variants={childVariant}
        >
          {page.h1}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8 leading-relaxed"
          variants={childVariant}
        >
          {page.intro}
        </motion.p>

        {/* Quick Answer (AEO) */}
        <motion.div
          variants={childVariant}
          className="bg-[#fffaf0] border border-[#ded4cc] rounded-2xl p-5 mb-10"
        >
          <p className="text-gray-800 leading-relaxed">{page.quickAnswer}</p>
        </motion.div>

        {page.pointsForts?.length > 0 && (
          <motion.section
            variants={childVariant}
            className="bg-white rounded-xl border p-5 md:p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">
              Points clés du traitement
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {page.pointsForts.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.section>
        )}

        {page.deroule?.length > 0 && (
          <motion.section
            variants={childVariant}
            className="bg-white rounded-xl border p-5 md:p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">
              Comment se déroule le traitement ?
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              {page.deroule.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </motion.section>
        )}

        {page.faq?.length > 0 && (
          <motion.section
            variants={childVariant}
            className="bg-white rounded-xl border p-5 md:p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-[#ad9d64] mb-4">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <details
                  key={item.q}
                  className="group border border-[#ded4cc] rounded-xl p-4"
                >
                  <summary className="cursor-pointer font-semibold text-gray-800 list-none flex items-center justify-between gap-3">
                    {item.q}
                    <span className="text-[#d03088] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </motion.section>
        )}

        {/* Maillage interne : autres pays */}
        {otherCountries.length > 0 && (
          <motion.section
            variants={childVariant}
            className="bg-white rounded-xl border p-5 md:p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-[#ad9d64] mb-4">
              {page.family === "pays"
                ? "Autres pays accueillis"
                : "Aussi pour les patients d'autres pays"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherCountries.map((c) => (
                <Link
                  key={c.slug}
                  to={c.href}
                  className="flex items-center gap-2 rounded-xl border border-[#ded4cc] px-3 py-2 text-sm text-gray-800 hover:border-[#d03088] hover:text-[#d03088] transition-colors"
                >
                  <span aria-hidden="true">{c.flag}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Pages connexes de la même famille / même pays */}
        {relatedServices.length > 0 && (
          <motion.section
            variants={childVariant}
            className="bg-white rounded-xl border p-5 md:p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-[#ad9d64] mb-4">
              {page.family === "filiere" ? "Autres parcours" : "Autres soins"} pour
              les patients {page.pays?.gen} {page.pays?.name}
            </h2>
            <ul className="space-y-2 text-gray-700">
              {relatedServices.map((p) => (
                <li key={p.path}>
                  <Link to={p.path} className="hover:text-[#d03088] hover:underline">
                    {p.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Article lié */}
        {page.relatedArticle && (
          <motion.div
            variants={childVariant}
            className="bg-[#fffaf0] border border-[#ded4cc] rounded-2xl p-5 mb-8"
          >
            <p className="text-sm text-gray-600 mb-1">À lire aussi</p>
            <Link
              to={page.relatedArticle.path}
              className="font-semibold text-[#d03088] hover:underline"
            >
              {page.relatedArticle.titre} →
            </Link>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          variants={childVariant}
          className="text-center bg-[#fbf7f1] border border-[#ded4cc] rounded-2xl p-6 md:p-8 mb-10"
        >
          <h2 className="text-2xl font-bold text-[#282426] mb-2">
            Prêt à planifier vos soins à Dakar ?
          </h2>
          <p className="text-gray-700 mb-5">
            Devis clair avant le voyage, planning adapté à votre séjour et suivi
            après votre retour. Contactez-nous dès aujourd'hui.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/rendez-vous" className="btn-cta" onClick={trackRdv}>
              Prendre rendez-vous
            </Link>
            <a
              href="https://wa.me/221774837576?text=Bonjour%2C%20je%20viens%20de%20l%27%C3%A9tranger%20et%20je%20souhaite%20un%20devis%20dentaire%20%C3%A0%20Dakar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta !bg-[#25D366] hover:!bg-[#1da851]"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
