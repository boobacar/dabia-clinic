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
// NAP non utilisé ici pour alléger le hero

export default function DentisteDakar() {
  const canonical = "https://www.cliniquedentairedabia.com/dentiste-dakar";
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
        {
          "@type": "Question",
          name: "Prenez‑vous les assurances ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous travaillons avec de nombreux partenaires (AXA, Sonam, etc.). Voir la page Assurances ou appelez‑nous.",
          },
        },
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
      <section className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-pink-50 via-white to-pink-50 border">
        <h1 className="text-3xl md:text-4xl text-[#ad9d64] font-extrabold">
          Dentiste à Dakar
        </h1>
        <p className="mt-2 text-gray-700 max-w-3xl">
          La Clinique Dentaire DABIA vous accueille à Sicap Foire (Liberté 6)
          pour des soins modernes, confortables et durables, avec un plateau
          technique de pointe.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-3 bg-white rounded-xl p-3 border shadow-sm">
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
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border shadow-sm">
            <FaPhoneAlt className="w-5 h-5 text-[#bb2988]" />
            <div className="flex flex-col">
              <a href="tel:+221777039393">+221 77 703 93 93</a>
              <a href="tel:+221338684704">+221 33 868 47 04</a>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-3 border shadow-sm">
            <FaEnvelope className="w-5 h-5 text-[#bb2988]" />
            <a href="mailto:cliniquedentairedabia@gmail.com">
              cliniquedentairedabia@gmail.com
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
      </div>

      <div className="mt-10">
        <Link
          to="/rendez-vous"
          className="inline-flex px-7 py-3 rounded-full text-white bg-[#bb2988] hover:opacity-95 shadow"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </main>
  );
}
