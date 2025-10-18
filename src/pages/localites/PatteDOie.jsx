import React from "react";
import Seo from "../../components/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import GoogleMapSection from "../../components/GoogleMapSection";
import Callout from "../../components/Callout";
import { motion } from "framer-motion";

export default function LocalitePatteDOie() {
  const url =
    "https://www.cliniquedentairedabia.com/cabinet-dentaire-patte-d-oie";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Clinique Dentaire DABIA – Patte d’Oie (proche)",
      url,
      image: "/og-image.webp",
      telephone: "+221777039393",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
      areaServed: ["Patte d’Oie", "Grand Yoff", "Liberté 6"],
      openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
      priceRange: "CFA",
    },
  ];
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto mt-20">
      <Seo
        title="Dentiste à Patte d’Oie (proche) – Clinique DABIA"
        description="Dentiste proche de Patte d’Oie : urgences, prévention, esthétique, orthodontie, implantologie."
        url={url}
        canonical={url}
        jsonLd={jsonLd}
      />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Dentiste Patte d’Oie" },
        ]}
      />
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#ad9d64]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Dentiste proche de Patte d’Oie
      </motion.h1>
      <motion.p
        className="mt-3 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Accès simple depuis Patte d’Oie, prise en charge complète.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className="p-5 border rounded-xl bg-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-2">Accès & coordonnées</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Adresse : Sicap Foire, 2 voies Liberté 6</li>
            <li>
              Tél :{" "}
              <a href="tel:+221777039393" className="text-[#bb2988]">
                +221 77 703 93 93
              </a>
            </li>
            <li>Horaires : Lun–Ven 9h–18h • Sam 9h–14h</li>
            <li>
              <Link to="/rendez-vous" className="text-[#bb2988] underline">
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="p-5 border rounded-xl bg-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          <h2 className="text-xl font-semibold mb-2">Soins proposés</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>Consultation, bilan</li>
            <li>Détartrage, gencives</li>
            <li>Esthétique (blanchiment, facettes)</li>
            <li>Orthodontie</li>
            <li>Implants</li>
          </ul>
        </motion.div>
      </div>
      <div className="mt-8">
        <GoogleMapSection />
      </div>

      <Callout title="Astuces pour la visite">
        <ul className="list-disc pl-5">
          <li>Arriver quelques minutes en avance pour se garer aisément.</li>
          <li>Apporter ses anciens examens (radios) si disponibles.</li>
          <li>Urgence: appelez pour prioriser votre prise en charge.</li>
        </ul>
      </Callout>
    </section>
  );
}
