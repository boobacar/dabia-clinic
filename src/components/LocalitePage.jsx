import React from "react";
import Seo from "./Seo";
import Breadcrumbs from "./Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GoogleMapSection from "./GoogleMapSection";
import Callout from "./Callout";

/**
 * Reusable localité (quartier) landing page for SEO.
 * Each quartier gets unique title/H1/meta/FAQ/links while sharing the layout.
 *
 * Props:
 *  - quartier: display name (e.g., "Almadies")
 *  - quartierPreposition: "des" | "de" | "du" (default "de")
 *  - slug: URL slug (e.g., "cabinet-dentaire-almadies")
 *  - areaServed: array of nearby quartiers
 *  - intro: 2-3 sentence intro paragraph (markdown string)
 *  - faq: array of {q, a} for the FAQ section
 *  - seoTitle: optional override for <title> tag
 *  - seoDescription: optional override for meta description
 */
export default function LocalitePage({
  quartier,
  quartierPreposition = "de",
  slug,
  areaServed = [],
  intro,
  faq = [],
  seoTitle,
  seoDescription,
}) {
  const url = `https://www.cliniquedentairedabia.com/${slug}`;
  const prep = quartierPreposition === "des" ? "des" : quartierPreposition === "du" ? "du" : "de";
  const title = seoTitle || `Dentiste à ${quartier} Dakar – Urgences, Implants & Soins | DABIA`;
  const description =
    seoDescription ||
    `Dentiste à ${quartier} (Dakar) : consultation, urgence, détartrage, implants, orthodontie et esthétique. RDV rapide au ${quartier}. Appelez le 77 703 93 93.`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Clinique Dentaire DABIA – ${quartier}`,
      url,
      image: "https://www.cliniquedentairedabia.com/og-image.webp",
      telephone: "+221****9393",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
      areaServed: [quartier, ...areaServed],
      openingHours: [
        "Mo-Th 09:00-16:30",
        "Fr 09:00-13:00",
        "Fr 15:00-16:30",
        "Sa 09:00-14:00",
      ],
      priceRange: "CFA",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 14.7319,
        longitude: -17.4572,
      },
      "@id": url + "#local",
      sameAs: [
        "https://www.facebook.com/cliniquedentairedabia/?locale=fr_FR",
        "https://www.instagram.com/clinique_dentaire_dabia/",
        "https://sn.linkedin.com/company/clinique-dentaire-dabia",
      ],
    },
    ...(faq.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : []),
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto mt-20">
      <Seo
        title={title}
        description={description}
        url={url}
        canonical={url}
        jsonLd={jsonLd}
      />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: `Dentiste ${quartier}` },
        ]}
      />
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#ad9d64]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Dentiste {prep} {quartier}
      </motion.h1>
      <motion.p
        className="mt-3 text-gray-700 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {intro}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className="p-5 border rounded-xl bg-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-xl font-semibold mb-2">Accès & coordonnées</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              Adresse : Sicap Foire, 2 voies Liberté 6 (à 150m du Uno), Dakar
            </li>
            <li>
              Téléphone :{" "}
              <a href="tel:+221****9393" className="text-[#bb2988]">
                +221 77 703 93 93
              </a>
            </li>
            <li>
              Horaires : Lun–Jeu 9h–16h30 • Ven 9h–13h et 15h–16h30 • Sam
              9h–14h
            </li>
            <li>
              <Link to="/rendez-vous" className="text-[#bb2988] underline">
                Prendre rendez-vous en ligne
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="p-5 border rounded-xl bg-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <h2 className="text-xl font-semibold mb-2">Soins proposés</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>Consultation, bilan et plan de traitement</li>
            <li>Détartrage, prévention et traitements des gencives</li>
            <li>Traitement des caries, inlays/onlays, couronnes</li>
            <li>Urgences dentaires et douleurs</li>
            <li>Esthétique du sourire : blanchiment, facettes</li>
            <li>Orthodontie (aligneurs, brackets)</li>
            <li>Implants et prothèses</li>
          </ul>
          <div className="mt-3 text-xs">
            <Link
              to="/all-competences"
              className="text-[#bb2988] underline"
            >
              Voir toutes nos compétences →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Articles liés */}
      <div className="mt-8 p-5 border rounded-xl bg-gradient-to-r from-gray-50 to-white">
        <h2 className="text-lg font-semibold mb-3">
          En savoir plus sur nos soins
        </h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link
            to="/blog/guide-tarifs-dentiste-dakar-2025"
            className="text-[#bb2988] underline hover:text-[#9b2170]"
          >
            Guide des tarifs dentaires
          </Link>
          <span className="text-gray-300">•</span>
          <Link
            to="/blog/urgence-dentiste-dakar-24-24-nuit-weekend"
            className="text-[#bb2988] underline hover:text-[#9b2170]"
          >
            Urgence dentaire 24/24
          </Link>
          <span className="text-gray-300">•</span>
          <Link
            to="/blog/comment-choisir-meilleur-dentiste-dakar"
            className="text-[#bb2988] underline hover:text-[#9b2170]"
          >
            Comment choisir son dentiste
          </Link>
          <span className="text-gray-300">•</span>
          <Link
            to="/blog/appareil-dentaire-prix-dakar-guide-complet"
            className="text-[#bb2988] underline hover:text-[#9b2170]"
          >
            Prix appareil dentaire
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <GoogleMapSection />
      </div>

      {/* FAQ section */}
      {faq.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#ad9d64] mb-4">
            Questions fréquentes — Dentiste {prep} {quartier}
          </h2>
          <div className="space-y-3">
            {faq.map((f, i) => (
              <details key={i} className="border rounded-xl p-4 bg-white">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-gray-700 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <Callout title="Conseils pour votre visite">
        <ul className="list-disc pl-5 text-sm">
          <li>
            Arrivez 5 minutes en avance pour le stationnement (places
            disponibles devant la clinique).
          </li>
          <li>
            Apportez vos radios, ordonnances ou devis antérieurs si vous en avez.
          </li>
          <li>
            En cas d'urgence,{" "}
            <strong>appelez avant de vous déplacer</strong> pour un créneau
            prioritaire.
          </li>
          <li>
            Paiement possible en espèces, par carte ou via certaines mutuelles
            (IPM).
          </li>
        </ul>
      </Callout>
    </section>
  );
}
