import React from "react";
import Seo from "../../components/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GoogleMapSection from "../../components/GoogleMapSection";

export default function LocaliteHlmGrandYoff() {
  const url = "https://www.cliniquedentairedabia.com/cabinet-dentaire-hlm-grand-yoff";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Clinique Dentaire DABIA – HLM Grand Yoff (proche)",
      url,
      image: "/og-image.jpg",
      telephone: "+221777039393",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
      areaServed: ["HLM Grand Yoff", "Grand Yoff", "Patte d'Oie", "Liberté 6", "Sicap Foire"],
      openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
      priceRange: "CFA",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto mt-20">
      <Seo
        title="Dentiste HLM Grand Yoff (proche) – Clinique DABIA"
        description="Dentiste proche de HLM Grand Yoff : urgences, prévention, esthétique, orthodontie et implantologie. Accès simple depuis Sicap Foire."
        url={url}
        canonical={url}
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Dentiste HLM Grand Yoff" }]} />

      <motion.h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64]" initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}>Dentiste proche de HLM Grand Yoff</motion.h1>
      <motion.p className="mt-3 text-gray-700" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.1, duration:0.4 }}>Cabinet moderne à quelques minutes de HLM Grand Yoff : urgences, prévention, esthétique, orthodontie, implantologie.</motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div className="p-5 border rounded-xl bg-white" initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.4 }} transition={{ duration:0.35 }}>
          <h2 className="text-xl font-semibold mb-2">Accès & coordonnées</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Adresse : Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)</li>
            <li>Téléphone : <a href="tel:+221777039393" className="text-[#bb2988]">+221 77 703 93 93</a></li>
            <li>Horaires : Lun–Ven 9h–18h • Sam 9h–14h</li>
            <li><Link to="/rendez-vous" className="text-[#bb2988] underline">Prendre rendez-vous en ligne</Link></li>
          </ul>
        </motion.div>
        <motion.div className="p-5 border rounded-xl bg-white" initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.4 }} transition={{ duration:0.35, delay:0.05 }}>
          <h2 className="text-xl font-semibold mb-2">Soins proposés</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>Consultation, bilan et plan de traitement</li>
            <li>Détartrage, prévention et traitements des gencives</li>
            <li>Esthétique (blanchiment, facettes)</li>
            <li>Orthodontie (aligneurs, brackets)</li>
            <li>Implants et prothèses</li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-8">
        <GoogleMapSection />
      </div>
    </section>
  );
}
