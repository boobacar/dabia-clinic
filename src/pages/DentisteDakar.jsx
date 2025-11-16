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
      q: "Prenez‑vous les urgences dentaires ?",
      a: "Oui, nous organisons des créneaux prioritaires. En cas de gonflement/fièvre, contactez‑nous rapidement.",
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

  const faqLD = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quels sont vos horaires ?",
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
    },
  ];

  return (
    <main className="pt-20 pb-14 px-4 max-w-7xl mx-auto">
      <Seo
        title="Dentiste à Dakar – Clinique Dentaire DABIA"
        description="Implants, orthodontie, esthétique, détartrage, urgences. Équipe expérimentée, technologies modernes (CBCT, scanner intra‑oral, laser)."
        canonical={canonical}
        url={canonical}
        jsonLd={faqLD}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-3"><AggregateRating /></div>
        <motion.div className="contents" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35 }}>
        <Link
          to="/competences/implantologie"
          className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="flex items-center gap-3">
            <FaTooth className="w-5 h-5 text-[#bb2988]" />
            <div className="font-semibold">Implant dentaire</div>
          </div>
          <div className="mt-1 text-sm text-gray-600">
            Remplacer une dent manquante
          </div>
        </Link>
        </motion.div>
        <motion.div className="contents" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: 0.05 }}>
        <Link
          to="/competences/orthodontie"
          className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="flex items-center gap-3">
            <FaShieldAlt className="w-5 h-5 text-[#bb2988]" />
            <div className="font-semibold">Orthodontie</div>
          </div>
          <div className="mt-1 text-sm text-gray-600">Aligneurs, brackets</div>
        </Link>
        </motion.div>
        <motion.div className="contents" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: 0.1 }}>
        <Link
          to="/competences/facettes-dentaires"
          className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="flex items-center gap-3">
            <FaRegSmile className="w-5 h-5 text-[#bb2988]" />
            <div className="font-semibold">Facettes dentaires</div>
          </div>
          <div className="mt-1 text-sm text-gray-600">
            Esthétique du sourire
          </div>
        </Link>
        </motion.div>
        <motion.div className="contents" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: 0.15 }}>
        <Link
          to="/competences/blanchiment-dentaire"
          className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="flex items-center gap-3">
            <FaStar className="w-5 h-5 text-[#bb2988]" />
            <div className="font-semibold">Blanchiment</div>
          </div>
          <div className="mt-1 text-sm text-gray-600">
            Cabinet et gouttières
          </div>
        </Link>
        </motion.div>
        <motion.div className="contents" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: 0.2 }}>
        <Link
          to="/competences/parodontologie"
          className="group border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="flex items-center gap-3">
            <FaShieldAlt className="w-5 h-5 text-[#bb2988]" />
            <div className="font-semibold">Parodontologie</div>
          </div>
          <div className="mt-1 text-sm text-gray-600">Santé des gencives</div>
        </Link>
        </motion.div>
        <motion.div className="contents" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: 0.25 }}>
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

      <div className="mt-10">
        <Link to="/rendez-vous" className="btn-cta btn-cta-lg">
          Prendre rendez-vous
        </Link>
      </div>

      {/* FAQ – Dentiste Dakar (JSON-LD déjà injecté via Seo) */}
      <FAQ
        className="mt-10"
        asJsonLd={false}
        items={faqItems}
      />
    </main>
  );
}
