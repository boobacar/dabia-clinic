import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaTooth,
  FaUserMd,
} from "react-icons/fa";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import AggregateRating from "../components/AggregateRating";
import FAQ from "../components/FAQ";
import MobileCtaAB from "../components/MobileCtaAB";

export default function CliniqueDentaireDakar() {
  const canonical =
    "https://www.cliniquedentairedabia.com/clinique-dentaire-dakar";

  const faqItems = [
    {
      q: "Où se trouve la clinique dentaire DABIA à Dakar ?",
      a: "La clinique est située à Sicap Foire, sur les 2 voies de Liberté 6, à environ 150m du supermarché Uno.",
    },
    {
      q: "Quels soins propose la clinique ?",
      a: "Consultation, urgences, détartrage, soins de caries, implants, orthodontie, prothèses, facettes, blanchiment et soins enfants.",
    },
    {
      q: "Peut-on demander un devis avant un soin ?",
      a: "Oui. Après l’examen clinique, un plan de traitement et un devis détaillé sont expliqués avant de commencer.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": `${canonical}#clinic`,
      name: "Clinique Dentaire DABIA Dakar",
      url: canonical,
      image: "https://www.cliniquedentairedabia.com/og-image.webp",
      telephone: "+221777039393",
      priceRange: "CFA",
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
        "VDN",
        "Mermoz",
        "Almadies",
        "Parcelles Assainies",
      ],
      medicalSpecialty: [
        "Dentistry",
        "Dental implants",
        "Orthodontics",
        "Cosmetic dentistry",
      ],
      openingHours: [
        "Mo-Th 09:00-16:30",
        "Fr 09:00-13:00",
        "Fr 15:00-16:30",
        "Sa 09:00-14:00",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const highlights = [
    {
      icon: <FaUserMd />,
      title: "Équipe dentaire dédiée",
      text: "Consultation, explication du diagnostic et suivi après les soins.",
    },
    {
      icon: <FaTooth />,
      title: "Soins complets",
      text: "Prévention, urgence, esthétique, implantologie, orthodontie et prothèses.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Plateau technique moderne",
      text: "CBCT 3D, scanner intra-oral, imagerie numérique et stérilisation classe B.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title="Clinique dentaire Dakar : soins, implants, urgence"
        description="Clinique dentaire à Dakar, Sicap Foire Liberté 6 : consultation, urgence, implants, orthodontie, prothèses, blanchiment et devis clair."
        canonical={canonical}
        url={canonical}
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Clinique dentaire Dakar" },
        ]}
      />

      <motion.section
        className="rounded-3xl border bg-gradient-to-br from-pink-50 via-white to-amber-50 p-6 md:p-8"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold text-[#bb2988]">
          Clinique dentaire à Dakar - Sicap Foire / Liberté 6
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#ad9d64]">
          Clinique dentaire à Dakar pour soins, urgences et devis clairs
        </h1>
        <p className="mt-3 max-w-3xl text-gray-700">
          La Clinique Dentaire DABIA accueille les patients à Dakar pour les
          soins courants, les urgences, les implants, l’orthodontie, les
          prothèses et l’esthétique du sourire. Le parcours est simple :
          diagnostic, explication des options, devis détaillé puis suivi.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/rendez-vous" className="btn-cta">
            Prendre rendez-vous
          </Link>
          <a href="tel:+221777039393" className="btn-cta btn-cta-sm">
            Appeler la clinique
          </a>
          <Link to="/urgence-dentaire-dakar" className="btn-cta btn-cta-sm">
            Urgence dentaire
          </Link>
          <Link to="/en/dental-clinic-dakar" className="btn-cta btn-cta-sm">
            English page
          </Link>
        </div>
      </motion.section>

      <section className="mt-8">
        <AggregateRating />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            className="rounded-xl border bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <div className="flex items-center gap-3 text-[#bb2988]">
              {item.icon}
              <h2 className="font-semibold text-gray-900">{item.title}</h2>
            </div>
            <p className="mt-2 text-sm text-gray-700">{item.text}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#ad9d64]">
            Services dentaires les plus demandés à Dakar
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
            <Link className="underline text-[#bb2988]" to="/dentiste-dakar">
              Consultation dentiste Dakar
            </Link>
            <Link className="underline text-[#bb2988]" to="/urgence-dentaire-dakar">
              Urgence dentaire Dakar
            </Link>
            <Link className="underline text-[#bb2988]" to="/competences/implantologie">
              Implant dentaire
            </Link>
            <Link className="underline text-[#bb2988]" to="/competences/orthodontie">
              Orthodontie et appareil dentaire
            </Link>
            <Link className="underline text-[#bb2988]" to="/competences/blanchiment-dentaire">
              Blanchiment dentaire
            </Link>
            <Link className="underline text-[#bb2988]" to="/competences/facettes-dentaires">
              Facettes dentaires
            </Link>
          </div>
        </article>

        <article className="rounded-2xl border bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-[#ad9d64]">
            Accès, horaires et informations pratiques
          </h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <p className="flex gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#bb2988]" />
              <span>
                Sicap Foire, 2 voies Liberté 6, à 150m du Uno. Accès rapide
                depuis VDN, Parcelles Assainies, Mermoz, Yoff et Almadies.
              </span>
            </p>
            <p className="flex gap-2">
              <FaCalendarCheck className="mt-1 text-[#bb2988]" />
              <span>
                Lun-jeu 9h-16h30, ven 9h-13h et 15h-16h30, sam 9h-14h.
                Appelez avant de venir pour une urgence.
              </span>
            </p>
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-[#ad9d64]">
          Technologies utiles au diagnostic
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Les équipements ne remplacent pas l’examen clinique, mais ils aident à
          mieux planifier les soins et à expliquer les options au patient.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link className="btn-cta btn-cta-sm" to="/infos/technologie/cone-beam-ct-cbct">
            CBCT dentaire 3D
          </Link>
          <Link className="btn-cta btn-cta-sm" to="/infos/technologie/scanner-intra-oral-3d">
            Scanner intra-oral
          </Link>
          <Link className="btn-cta btn-cta-sm" to="/infos/technologie/airflow-dentaire-prophylaxie">
            AirFlow dentaire
          </Link>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-[#ad9d64]">
          Guides utiles avant de choisir une clinique dentaire à Dakar
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          <Link className="underline text-[#bb2988]" to="/blog/comment-choisir-meilleur-dentiste-dakar">
            Comment choisir le meilleur dentiste
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/guide-prix-dentiste-dakar-consultation-soins">
            Guide des prix dentaires à Dakar
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/prix-appareil-dentaire-orthodontie-dakar-enfant-adulte">
            Prix appareil dentaire
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/tarif-implant-dentaire-dakar-deroulement">
            Tarif implant dentaire
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/blanchiment-dents-prix-conseils-dakar">
            Prix blanchiment dentaire
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/detartrage-dentaire-dakar-prix-frequence">
            Prix détartrage
          </Link>
        </div>
      </section>

      <FAQ className="mt-10" asJsonLd={false} items={faqItems} />
      <MobileCtaAB pagePath="/clinique-dentaire-dakar" rdvTo="/rendez-vous" />
      </div>
    </main>
  );
}
