import React from "react";
import Seo from "../../components/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GoogleMapSection from "../../components/GoogleMapSection";
import Callout from "../../components/Callout";

export default function LocalitePointE() {
  const url = "https://www.cliniquedentairedabia.com/cabinet-dentaire-point-e";
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Clinique Dentaire DABIA – Point E (proche)", url, image: "/og-image.jpg", telephone: "+221777039393", address: { "@type": "PostalAddress", streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)", addressLocality: "Dakar", addressCountry: "SN" }, areaServed: ["Point E", "Mermoz", "Sicap Foire"], openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"], priceRange: "CFA" },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto mt-20">
      <Seo title="Dentiste à Point E (proche) – Clinique DABIA" description="Dentiste proche du Point E: urgences, détartrage, esthétique, orthodontie, implants à la Clinique DABIA." url={url} canonical={url} jsonLd={jsonLd} />
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Dentiste Point E" }]} />
      <motion.h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64]" initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}>Dentiste proche du Point E</motion.h1>
      <motion.p className="mt-3 text-gray-700" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.1, duration:0.4 }}>Notre cabinet de Sicap Foire accueille les patients du Point E avec une prise en charge complète.</motion.p>

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
            <li>Soins conservateurs, endodontie</li>
            <li>Esthétique (blanchiment, facettes)</li>
            <li>Orthodontie (aligneurs, brackets)</li>
            <li>Implants et prothèses</li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-8">
        <GoogleMapSection />
      </div>

      <Callout title="Informations utiles">
        <ul className="list-disc pl-5">
          <li>Devis clairs après examen et plan de traitement.</li>
          <li>Assurances: collaboration avec de nombreux partenaires.</li>
          <li>Photos avant/après possibles pour les soins esthétiques.</li>
        </ul>
      </Callout>
    </section>
  );
}
