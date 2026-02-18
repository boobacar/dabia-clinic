import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import AggregateRating from "../components/AggregateRating";
import FAQ from "../components/FAQ";

export default function CabinetDentaireDakar() {
  const canonical =
    "https://www.cliniquedentairedabia.com/cabinet-dentaire-dakar";
  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelle est la différence entre clinique et cabinet dentaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les deux désignent des structures de soins dentaires. Notre cabinet/clinique propose une prise en charge complète (prévention, soins, esthétique, implantologie, orthodontie) avec un plateau technique moderne.",
        },
      },
      {
        "@type": "Question",
        name: "Comment choisir le meilleur cabinet dentaire à Dakar ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vérifiez l’expérience de l’équipe, la clarté des devis, l’équipement (radiologie 3D, scanner intra‑oral, stérilisation), les avis patients et la qualité du suivi.",
        },
      },
    ],
  };
  const lbLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cabinet Dentaire DABIA",
    url: canonical,
    telephone: "+221777039393",
    image: "/og-image.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    areaServed: [
      "Dakar",
      "Liberté 6",
      "Sicap Foire",
      "Parcelles Assainies",
      "Mermoz",
    ],
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title="Cabinet dentaire à Dakar – DABIA"
        description="Cabinet dentaire moderne à Dakar: prévention, esthétique, implants, orthodontie, urgences. Technologies CBCT, scanner intra‑oral, autoclave classe B."
        canonical={canonical}
        url={canonical}
        jsonLd={[lbLD, faqLD]}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Cabinet dentaire Dakar" },
        ]}
      />

      <motion.div
        className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-pink-50 via-white to-pink-50 border"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl text-[#ad9d64] font-extrabold">
          Cabinet dentaire à Dakar
        </h1>
        <p className="mt-2 text-gray-700 max-w-3xl">
          Chez DABIA, nous allions expertise et technologies de pointe pour des
          soins confortables, précis et durables.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link to="/rendez-vous" className="btn-cta">
            Prendre rendez‑vous
          </Link>
          <Link to="/dentiste-dakar" className="btn-cta btn-cta-sm">
            Voir “Dentiste à Dakar”
          </Link>
        </div>
      </motion.div>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-3">
          <AggregateRating />
        </div>
        <motion.div
          className="bg-white border rounded-xl p-5 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-lg font-semibold text-[#ad9d64]">Technologies</h2>
          <p className="text-sm text-gray-700 mt-1">
            CBCT (radio 3D), scanner intra‑oral, laser, autoclave classe B.
          </p>
          <Link
            to="/infos/technologie"
            className="text-[#bb2988] text-sm underline mt-2 inline-block"
          >
            Nos technologies →
          </Link>
        </motion.div>
        <motion.div
          className="bg-white border rounded-xl p-5 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <h2 className="text-lg font-semibold text-[#ad9d64]">Compétences</h2>
          <p className="text-sm text-gray-700 mt-1">
            Esthétique, implantologie, orthodontie, endodontie, parodontologie.
          </p>
          <Link
            to="/all-competences"
            className="text-[#bb2988] text-sm underline mt-2 inline-block"
          >
            Voir nos compétences →
          </Link>
        </motion.div>
        <motion.div
          className="bg-white border rounded-xl p-5 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold text-[#ad9d64]">Urgences</h2>
          <p className="text-sm text-gray-700 mt-1">
            Douleurs, gonflements, dents cassées — prise en charge rapide.
          </p>
          <Link
            to="/urgence-dentaire-dakar"
            className="text-[#bb2988] text-sm underline mt-2 inline-block"
          >
            Urgence dentaire →
          </Link>
        </motion.div>
      </section>

      <motion.section
        className="mt-10 p-5 rounded-xl border bg-white shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold text-[#ad9d64]">
          Pourquoi choisir notre cabinet dentaire à Dakar ?
        </h2>
        <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 list-disc pl-5">
          <li>
            Diagnostic précis (CBCT, imagerie numérique, scanner intra‑oral)
          </li>
          <li>
            Soins confortables et esthétiques (blanchiment, facettes, aligneurs)
          </li>
          <li>Implants et prothèses sur mesure</li>
          <li>Stérilisation aux normes (autoclave classe B)</li>
          <li>Devis clairs, suivi et prévention</li>
        </ul>
      </motion.section>

      <section className="mt-10 p-5 rounded-xl border bg-white shadow-sm">
        <h2 className="text-xl font-bold text-[#ad9d64]">
          Ressources pratiques avant votre rendez-vous
        </h2>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <Link className="underline text-[#bb2988]" to="/blog/dentiste-dakar-prix-consultation-2026">
            Tarif dentiste Dakar : guide pratique
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/guide-prix-dentiste-dakar-consultation-soins">
            Guide prix consultation et soins
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/clinique-dentaire-dakar-comment-choisir">
            Bien choisir sa clinique dentaire à Dakar
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/soins-dentaires-pendant-ramadan-jeune">
            Ramadan : soins dentaires et jeûne
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/ramadan-jeune-soins-dentaires-dakar">
            Ramadan à Dakar : conseils dentaires
          </Link>
          <Link className="underline text-[#bb2988]" to="/rendez-vous">
            Prendre rendez-vous rapidement
          </Link>
        </div>
      </section>

      {/* FAQ visible, données FAQPage déjà fournies dans jsonLd via Seo */}
      <FAQ
        className="mt-10"
        asJsonLd={false}
        items={[
          {
            q: "Différence entre clinique et cabinet dentaire ?",
            a: "Dans la pratique, les deux termes désignent des structures de soins. DABIA propose une prise en charge complète avec un plateau technique moderne.",
          },
          {
            q: "Combien de temps dure un implant ?",
            a: "Très longue durée si hygiène et contrôles réguliers. Comparable à une dent naturelle entretenue.",
          },
          {
            q: "Les aligneurs fonctionnent‑ils pour les adultes ?",
            a: "Oui, selon le diagnostic. Ils sont discrets et confortables ; des cas complexes préféreront des bagues.",
          },
          {
            q: "Le blanchiment abîme‑t‑il l’émail ?",
            a: "Sous contrôle professionnel et produits homologués, non ; une sensibilité transitoire est possible.",
          },
        ]}
      />
    </section>
  );
}
