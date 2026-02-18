import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaTooth,
  FaBandAid,
  FaExclamationTriangle,
  FaTemperatureHigh,
  FaSmileBeam,
  FaUserInjured,
} from "react-icons/fa";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import GoogleMapSection from "../components/GoogleMapSection";
import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import Magnetic from "../components/Magnetic";

export default function UrgenceDentaire() {
  const canonical =
    "https://www.cliniquedentairedabia.com/urgence-dentaire-dakar";

  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Que faire en cas de rage de dent la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Évitez l’aspirine (risque de saignement). Prenez du paracétamol si compatible, rincez à l’eau tiède salée et contactez la clinique dès l’ouverture. Si gonflement ou fièvre, prise en charge prioritaire.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce une urgence si une dent se casse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui si douleur, saignement ou nerf exposé. Conservez le fragment, évitez de mastiquer dessus et consultez rapidement.",
        },
      },
      {
        "@type": "Question",
        name: "Quand aller aux urgences hospitalières ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En cas de traumatisme facial sévère, difficultés respiratoires, fièvre élevée persistante ou gonflement qui s’étend vers l’œil/le cou.",
        },
      },
    ],
  };

  const howToLD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Que faire immédiatement en cas d’urgence dentaire",
    step: [
      {
        "@type": "HowToStep",
        name: "Évaluer",
        text: "Douleur, fièvre, gonflement, saignement ?",
      },
      {
        "@type": "HowToStep",
        name: "Soulager",
        text: "Paracétamol si compatible. Évitez l’aspirine.",
      },
      {
        "@type": "HowToStep",
        name: "Rincer",
        text: "Bains de bouche tièdes salés, sans forcer.",
      },
      {
        "@type": "HowToStep",
        name: "Contacter",
        text: "Appelez la clinique pour une prise en charge rapide.",
      },
    ],
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title="Urgence dentaire à Dakar – Clinique Dentaire DABIA"
        description="Douleur aiguë, gonflement, dent cassée ? Conseils immédiats et prise en charge rapide à Dakar. Appelez la Clinique DABIA."
        canonical={canonical}
        url={canonical}
        jsonLd={[faqLD, howToLD]}
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Urgence dentaire" }]}
      />

      {/* HERO */}
      <motion.div
        className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-red-50 via-white to-orange-50 border"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#ad9d64]">
          Urgence dentaire à Dakar
        </h1>
        <p className="mt-2 text-gray-700 max-w-3xl">
          Douleur intense, gonflement, traumatisme ou dent cassée : nous vous
          orientons et vous recevons rapidement.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="tel:+221777039393" className="inline-flex items-center gap-2 btn-cta">
            <FaPhoneAlt /> Appeler la clinique
          </a>
          <a
            href="https://wa.me/221777039393"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-cta"
          >
            <FaWhatsapp className="text-green-600" /> WhatsApp
          </a>
          <Magnetic>
            <Link
              to="/rendez-vous?motif=urgence&soin=Consultation"
              className="ripple inline-flex items-center gap-2 btn-cta"
            >
              Prendre rendez‑vous
            </Link>
          </Magnetic>
        </div>
      </motion.div>

      {/* TRIAGE RAPIDE */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div className="bg-white border rounded-xl p-5 shadow-sm" initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.5 }} transition={{ duration:0.35 }}>
          <div className="flex items-center gap-3 text-[#bb2988] font-semibold">
            <FaExclamationTriangle /> Douleur aiguë
          </div>
          <p className="mt-2 text-sm text-gray-700">
            Paracétamol si compatible. Évitez aspirine/alcool chaud. Rincez eau
            tiède salée.
          </p>
        </motion.div>
        <motion.div className="bg-white border rounded-xl p-5 shadow-sm" initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.5 }} transition={{ duration:0.35, delay:0.05 }}>
          <div className="flex items-center gap-3 text-[#bb2988] font-semibold">
            <FaTemperatureHigh /> Gonflement/fièvre
          </div>
          <p className="mt-2 text-sm text-gray-700">
            Contact prioritaire. Si extension vers l’œil/le cou ou fièvre
            élevée : urgences hospitalières.
          </p>
        </motion.div>
        <motion.div className="bg-white border rounded-xl p-5 shadow-sm" initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.5 }} transition={{ duration:0.35, delay:0.1 }}>
          <div className="flex items-center gap-3 text-[#bb2988] font-semibold">
            <FaBandAid /> Dent cassée/traumatisme
          </div>
          <p className="mt-2 text-sm text-gray-700">
            Conservez le fragment, évitez de mastiquer dessus, compresse si
            saignement.
          </p>
        </motion.div>
      </section>

      {/* CAS FREQUENTS */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#ad9d64]">Cas fréquents</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <FaTooth className="text-[#bb2988]" />,
              title: "Pulpites / caries profondes",
              text: "Douleur pulsatile, sensible au chaud/froid. Soulager par paracétamol, éviter le sucré et appeler pour traitement endodontique.",
            },
            {
              icon: <FaBandAid className="text-[#bb2988]" />,
              title: "Dent fracturée",
              text: "Si douleur ou nerf exposé, urgence. Conservez le fragment et consultez rapidement.",
            },
            {
              icon: <FaSmileBeam className="text-[#bb2988]" />,
              title: "Couronne ou plombage décollé",
              text: "Évitez de mâcher sur la dent. Nous posons une restauration provisoire ou définitive.",
            },
            {
              icon: <FaExclamationTriangle className="text-[#bb2988]" />,
              title: "Saignement post‑extraction",
              text: "Compresse stérile 30–60 min. Si persistant, appelez. Évitez aspirine.",
            },
            {
              icon: <FaUserInjured className="text-[#bb2988]" />,
              title: "Traumatisme chez l’enfant",
              text: "Dents temporaires : ne réimplantez pas. Nettoyez doucement, compresse, consultez.",
            },
            {
              icon: <FaTemperatureHigh className="text-[#bb2988]" />,
              title: "Abcès / cellulite",
              text: "Gonflement, parfois fièvre. Prise en charge prioritaire. Ne percez pas vous‑même.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow transition"
              initial={{ opacity:0, y:12 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.4 }}
              transition={{ duration:0.35, delay: i*0.05 }}
            >
              <div className="flex items-center gap-3 font-semibold">
                {c.icon} {c.title}
              </div>
              <p className="mt-2 text-sm text-gray-700">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUAND ALLER À L’HÔPITAL */}
      <section className="mt-10 p-5 rounded-xl border bg-yellow-50 text-yellow-900">
        <h3 className="font-semibold">
          Quand aller aux urgences hospitalières ?
        </h3>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>
            Traumatisme facial sévère (perte de connaissance, plaies profondes)
          </li>
          <li>
            Gonflement qui s’étend vers l’œil/le cou, difficultés à
            respirer/avaler
          </li>
          <li>Fièvre élevée persistante ou état général altéré</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="tel:+221777039393" className="inline-flex items-center gap-2 btn-cta">
          <FaPhoneAlt /> Appeler
        </a>
        <a
          href="https://wa.me/221777039393"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 btn-cta"
        >
          <FaWhatsapp className="text-green-600" /> WhatsApp
        </a>
        <Link
          to="/rendez-vous?motif=urgence&soin=Consultation"
          className="inline-flex items-center gap-2 btn-cta"
        >
          Prendre rendez‑vous
        </Link>
        <Link
          to="/blog/urgence-dentaire-dakar-que-faire"
          className="inline-flex items-center gap-2 btn-cta"
        >
          Lire notre guide →
        </Link>
      </div>

      {/* MAP */}
      <div className="mt-10">
        <GoogleMapSection />
      </div>

      <section className="mt-10 p-5 rounded-xl border bg-white shadow-sm">
        <h2 className="text-xl font-bold text-[#ad9d64]">
          Lire aussi (urgence + Ramadan)
        </h2>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <Link className="underline text-[#bb2988]" to="/blog/urgence-dentiste-dakar-24h-que-faire">
            Urgence dentiste Dakar 24h : que faire
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/urgence-dentaire-rompre-jeune-ramadan">
            Urgence dentaire : faut-il rompre le jeûne ?
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/quand-aller-dentiste-pendant-ramadan">
            Ramadan : quand consulter le dentiste
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/mauvaise-haleine-ramadan-conseils-dakar">
            Mauvaise haleine pendant Ramadan
          </Link>
          <Link className="underline text-[#bb2988]" to="/blog/brosser-dents-pendant-ramadan-autorise">
            Brosser les dents pendant le jeûne
          </Link>
          <Link className="underline text-[#bb2988]" to="/rendez-vous?motif=urgence&soin=Consultation">
            RDV urgence en ligne
          </Link>
        </div>
      </section>

      {/* FAQ – affiche visible, JSON-LD déjà injecté via Seo */}
      <FAQ
        className="mt-10"
        asJsonLd={false}
        items={[
          { q: "Que faire en cas de rage de dent la nuit ?", a: "Évitez l’aspirine, prenez du paracétamol si compatible, rincez à l’eau tiède salée. Contactez la clinique dès l’ouverture." },
          { q: "Dent cassée : est‑ce une urgence ?", a: "Oui si douleur, saignement ou nerf exposé. Conservez le fragment, évitez de mastiquer dessus et consultez rapidement." },
          { q: "Quand aller à l’hôpital ?", a: "Traumatisme sévère, difficultés à respirer/avaler, fièvre élevée persistante, gonflement qui s’étend vers l’œil ou le cou." },
        ]}
      />

      {/* Sticky mobile actions */}
      <div className="fixed bottom-4 right-4 md:hidden flex flex-col gap-2 z-30">
        <a href="tel:+221777039393" className="btn-cta">
          Appeler
        </a>
        <Link to="/rendez-vous" className="btn-cta">RDV</Link>
      </div>
    </section>
  );
}
