import React from "react";
import { Link } from "react-router-dom";
import {
  FaTooth,
  FaShieldAlt,
  FaLifeRing,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegSmile,
  FaStar,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import AggregateRating from "../components/AggregateRating";
import FAQ from "../components/FAQ";
// NAP non utilisé ici pour alléger le hero

export default function DentisteDakar() {
  const canonical = "https://www.cliniquedentairedabia.com/dentiste-dakar";
  // Questions affichées sur la page (réutilisées pour le JSON-LD FAQ)
  const faqItems = [
    {
      q: "Urgence dentiste à Dakar : pouvez‑vous me recevoir rapidement ?",
      a: "Oui, nous organisons des créneaux sous 24h. En cas de gonflement/fièvre, contactez‑nous rapidement.",
    },
    {
      q: "Quels sont vos tarifs ?",
      a: "Un devis clair est remis après l’examen clinique et le plan de traitement. Nous expliquons les options et alternatives.",
    },
    {
      q: "Acceptez‑vous des assurances ?",
      a: "Oui, nous travaillons avec de nombreux partenaires. Consultez la page Assurances ou appelez‑nous pour confirmer la vôtre.",
    },
    {
      q: "Quelles technologies utilisez‑vous ?",
      a: "CBCT (radio 3D), scanner intra‑oral, laser, autoclaves Classe B, imagerie numérique — pour précision et confort.",
    },
    {
      q: "Comment prendre rendez‑vous ?",
      a: "En ligne en 1 minute via la page Rendez‑vous, par téléphone ou WhatsApp.",
    },
  ];

  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels sont vos horaires à Dakar ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lun–Ven 9h–18h, Sam 9h–14h. En cas d’urgence, contactez‑nous par téléphone.",
        },
      },
      // On ajoute aussi les questions affichées dans le bloc FAQ
      ...faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    ],
  };

  const breadcrumbLD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.cliniquedentairedabia.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dentiste Dakar",
        item: canonical,
      },
    ],
  };

  const localBusinessLD = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${canonical}#dentiste-dakar`,
    name: "Dentiste à Dakar - Clinique Dentaire DABIA",
    url: canonical,
    image: "/og-image.webp",
    telephone: "+221777039393",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
      addressLocality: "Dakar",
      addressRegion: "Dakar",
      addressCountry: "SN",
    },
    areaServed: [
      "Dakar",
      "Liberté 6",
      "Sicap Foire",
      "Parcelles Assainies",
      "Almadies",
      "Yoff",
      "Mermoz",
      "Ouakam",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/cliniquedentairedabia/?locale=fr_FR",
      "https://www.instagram.com/clinique_dentaire_dabia/",
      "https://sn.linkedin.com/company/clinique-dentaire-dabia",
    ],
  };

  const jsonLd = [breadcrumbLD, localBusinessLD, faqLD];

  return (
    <main className="pt-20 pb-14 px-4 max-w-7xl mx-auto">
      <Seo
        title="Dentiste à Dakar – Clinique Dentaire DABIA"
        description="Dentiste à Dakar (Liberté 6 – Sicap Foire) : urgences, implants, aligneurs, facettes, enfants. Rendez‑vous rapides, CBCT et scanner intra‑oral."
        canonical={canonical}
        url={canonical}
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Dentiste Dakar" }]}
      />

      {/* HERO */}
      <motion.section
        className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-pink-50 via-white to-pink-50 border"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl text-[#ad9d64] font-extrabold">
          Dentiste à Dakar – Cabinet dentaire DABIA
        </h1>
        <p className="mt-2 text-gray-700 max-w-3xl">
          La Clinique Dentaire DABIA vous accueille à Sicap Foire (Liberté 6)
          pour des soins modernes, confortables et durables, avec un plateau
          technique de pointe.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <motion.div
            className="flex items-start gap-3 bg-white rounded-xl p-3 border shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35 }}
          >
            <FaMapMarkerAlt className="w-5 h-5 text-[#bb2988] mt-0.5" />
            <div>
              Sicap Foire, 2 voies Liberté 6 (à 150m du Uno) — Dakar
              <div className="text-[12px] mt-1">
                <Link className="underline" to="/cabinet-dentaire-liberte-6">
                  Liberté 6
                </Link>
                <span className="mx-1">•</span>
                <Link
                  className="underline"
                  to="/clinique-dentaire-parcelles-assainies"
                >
                  Parcelles Assainies
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 bg-white rounded-xl p-3 border shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <FaPhoneAlt className="w-5 h-5 text-[#bb2988]" />
            <div className="flex flex-col">
              <a href="tel:+221777039393">+221 77 703 93 93</a>
              <a href="tel:+221338684704">+221 33 868 47 04</a>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 bg-white rounded-xl p-3 border shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <FaEnvelope className="w-5 h-5 text-[#bb2988]" />
            <a href="mailto:cliniquedentairedabia@gmail.com">
              cliniquedentairedabia@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-8 p-5 md:p-6 rounded-2xl border bg-white shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#ad9d64]">
              Dentiste à Dakar : rendez‑vous rapides et soins complets
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Depuis Sicap Foire (Liberté 6), nous prenons en charge la
              prévention, l’esthétique, l’implantologie et les urgences à Dakar.
              Vous repartez avec un plan de traitement clair, expliqué par
              l’équipe médicale.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-pink-50">
            <FaClock className="text-[#bb2988]" />
            <span>Rendez‑vous sous 24h pour l’urgence</span>
          </div>
        </div>
        </div>

        <div className="mt-4">
          <AggregateRating />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="contents"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35 }}
          >
            <Link
              to="/competences/implantologie"
              className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <FaTooth className="w-5 h-5 text-[#bb2988]" />
                <div className="font-semibold">Implant dentaire</div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Remplacer une dent manquante durablement
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="contents"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <Link
              to="/competences/orthodontie"
              className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-5 h-5 text-[#bb2988]" />
                <div className="font-semibold">Orthodontie</div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Aligneurs ou bagues selon votre cas
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="contents"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <Link
              to="/competences/facettes-dentaires"
              className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <FaRegSmile className="w-5 h-5 text-[#bb2988]" />
                <div className="font-semibold">Facettes dentaires</div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Esthétique du sourire à Dakar
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="contents"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.15 }}
          >
            <Link
              to="/competences/blanchiment-dentaire"
              className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <FaStar className="w-5 h-5 text-[#bb2988]" />
                <div className="font-semibold">Blanchiment</div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Cabinet ou gouttières personnalisées
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="contents"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            <Link
              to="/competences/parodontologie"
              className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-5 h-5 text-[#bb2988]" />
                <div className="font-semibold">Parodontologie</div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Santé des gencives et maintenance
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="contents"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.25 }}
          >
            <Link
              to="/urgence-dentaire-dakar"
              className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3">
                <FaLifeRing className="w-5 h-5 text-red-600" />
                <div className="font-semibold text-red-700">Urgence dentaire</div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Conseils et prise en charge rapide
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-6 rounded-2xl border bg-gradient-to-br from-pink-50 via-white to-pink-50 shadow-sm">
          <h2 className="text-xl font-bold text-[#ad9d64]">
            Pourquoi choisir la Clinique DABIA comme dentiste à Dakar ?
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>
              Examens précis (bilan photo, CBCT 3D, scanner intra‑oral) avant
              chaque plan de traitement.
            </li>
            <li>
              Soins confortables : anesthésie locale douce, suivi post‑op,
              conseils personnalisés.
            </li>
            <li>
              Esthétique du sourire (facettes, blanchiment, alignement) réalisée
              par des praticiens expérimentés.
            </li>
            <li>
              Implants et prothèses sur mesure avec laboratoire partenaire pour
              des ajustements rapides.
            </li>
            <li>
              Protocoles de stérilisation rigoureux (autoclave Classe B) et
              salle de soins climatisée.
            </li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border bg-white shadow-sm">
          <h3 className="text-lg font-semibold text-[#ad9d64]">
            Infos pratiques à Dakar
          </h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="flex gap-2">
              <FaCheckCircle className="mt-1 text-[#bb2988]" />
              <div>
                <div className="font-semibold">Devis expliqués</div>
                <p className="text-xs text-gray-600">
                  Plans de traitement détaillés, options étagées et facilités de
                  paiement quand c’est possible.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaCheckCircle className="mt-1 text-[#bb2988]" />
              <div>
                <div className="font-semibold">Assurances et IPM</div>
                <p className="text-xs text-gray-600">
                  Aide au dossier pour vos prises en charge. Voir la page
                  Assurances ou appelez‑nous.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaCheckCircle className="mt-1 text-[#bb2988]" />
              <div>
                <div className="font-semibold">Enfants et adultes</div>
                <p className="text-xs text-gray-600">
                  Consultations dédiées pour les enfants, les étudiants et les
                  familles, avec une approche douce et pédagogique.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaCheckCircle className="mt-1 text-[#bb2988]" />
              <div>
                <div className="font-semibold">Suivi post‑soins</div>
                <p className="text-xs text-gray-600">
                  Conseils d’hygiène, rappels de contrôle et accompagnement
                  après implants ou orthodontie.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-700">
            Vous venez pour un second avis, un contrôle ou une urgence ? Appelez
            avant de vous déplacer pour réserver un créneau dédié à votre
            situation.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mt-10 p-6 rounded-2xl border bg-gray-50"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold text-[#ad9d64]">
          Dentiste Dakar : accès et quartiers desservis
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          La clinique est à 150m du supermarché Uno (Liberté 6), proche VDN et
          Corniche. Stationnement devant l’entrée et accès facile en taxi ou
          transports.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/cabinet-dentaire-liberte-6" className="btn-cta btn-cta-sm">
            Dentiste Liberté 6
          </Link>
          <Link
            to="/clinique-dentaire-parcelles-assainies"
            className="btn-cta btn-cta-sm"
          >
            Parcelles Assainies
          </Link>
          <Link to="/cabinet-dentaire-almadies" className="btn-cta btn-cta-sm">
            Almadies
          </Link>
          <Link to="/cabinet-dentaire-ngor" className="btn-cta btn-cta-sm">
            Ngor
          </Link>
          <Link to="/cabinet-dentaire-yoff" className="btn-cta btn-cta-sm">
            Yoff
          </Link>
          <Link to="/cabinet-dentaire-mermoz" className="btn-cta btn-cta-sm">
            Mermoz
          </Link>
          <Link to="/cabinet-dentaire-point-e" className="btn-cta btn-cta-sm">
            Point E
          </Link>
          <Link to="/cabinet-dentaire-ouakam" className="btn-cta btn-cta-sm">
            Ouakam
          </Link>
          <Link to="/cabinet-dentaire-sacre-coeur" className="btn-cta btn-cta-sm">
            Sacré‑Cœur
          </Link>
          <Link to="/cabinet-dentaire-plateau" className="btn-cta btn-cta-sm">
            Plateau
          </Link>
        </div>
        <p className="mt-3 text-sm text-gray-700 flex items-start gap-2">
          <FaMapMarkerAlt className="mt-0.5 text-[#bb2988]" />
          <span>
            Accès rapide depuis l’aéroport, Parcelles, Almadies, Yoff, Ngor ou
            Plateau via la VDN. Appelez‑nous pour des indications précises ou un
            créneau dédié.
          </span>
        </p>
      </motion.section>

      <div className="mt-10">
        <Link to="/rendez-vous" className="btn-cta btn-cta-lg">
          Prendre rendez-vous
        </Link>
      </div>

      <section className="mt-10 p-5 rounded-xl border bg-white shadow-sm">
        <h2 className="text-xl font-bold text-[#ad9d64]">
          Guides utiles pour choisir votre dentiste à Dakar
        </h2>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <Link className="underline text-[#bb2988]" to="/blog/dentiste-dakar-prix-consultation-2026">
            Prix consultation dentiste à Dakar (2026)
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/clinique-dentaire-dakar-comment-choisir">
            Comment choisir une clinique dentaire à Dakar
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/urgence-dentiste-dakar-24h-que-faire">
            Urgence dentiste Dakar 24h : que faire
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/soins-dentaires-pendant-ramadan-jeune">
            Ramadan : soins dentaires et jeûne
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/quand-aller-dentiste-pendant-ramadan">
            Ramadan : meilleur horaire pour consulter
          </Link>
          <Link className="underline text-[#bb2988]" to="/rendez-vous">
            Prendre rendez-vous en ligne
          </Link>
        </div>
      </section>

      {/* FAQ – Dentiste Dakar (JSON-LD déjà injecté via Seo) */}
      <FAQ
        className="mt-10"
        asJsonLd={false}
        items={faqItems}
      />
    </main>
  );
}
