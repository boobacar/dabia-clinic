import React from "react";
import ReactMarkdown from "react-markdown";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import GoogleMapSection from "../components/GoogleMapSection";
import Callout from "../components/Callout";
import { Link } from "react-router-dom";

export default function LocaliteLiberte6() {
  const url =
    "https://www.cliniquedentairedabia.com/cabinet-dentaire-liberte-6";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Clinique Dentaire DABIA – Liberté 6",
      url,
      image: "/og-image.webp",
      telephone: "+221777039393",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
      areaServed: ["Liberté 6", "Sicap Foire", "Yoff", "Mermoz"],
      openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
      priceRange: "CFA",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto mt-20">
      <Seo
        title="Cabinet dentaire à Liberté 6 (Dakar) – Clinique DABIA"
        description="Dentiste proche de Liberté 6 et Sicap Foire : urgences, détartrage, implants, orthodontie, esthétique. Accès simple et horaires étendus."
        url={url}
        canonical={url}
        type="website"
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Cabinet dentaire Liberté 6" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64]">
        Cabinet dentaire à Liberté 6 (Dakar)
      </h1>
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <p className="mt-3 text-gray-700" {...props} />
          ),
        }}
      >
        {`La Clinique Dentaire DABIA accueille les patient·es de **Liberté 6**, **Sicap Foire**, **Yoff** et alentours. Notre équipe prend en charge les soins du quotidien (prévention, détartrage, caries), l’**urgence dentaire**, ainsi que l’**esthétique**, l’**orthodontie** et l’**implantologie**.`}
      </ReactMarkdown>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="p-5 border rounded-xl bg-white">
          <h2 className="text-xl font-semibold mb-2">Accès & coordonnées</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              Adresse : Sicap Foire, 2 voies Liberté 6 (à 150m du Uno), Dakar
            </li>
            <li>
              Téléphone :{" "}
              <a href="tel:+221777039393" className="text-[#bb2988]">
                +221 77 703 93 93
              </a>
            </li>
            <li>Horaires : Lun–Ven 9h–18h • Sam 9h–14h</li>
            <li>
              <Link to="/rendez-vous" className="text-[#bb2988] underline">
                Prendre rendez-vous en ligne
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5 border rounded-xl bg-white">
          <h2 className="text-xl font-semibold mb-2">Soins proposés</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>Consultation, bilan et plan de traitement</li>
            <li>Détartrage, prévention et traitements des gencives</li>
            <li>Traitement des caries, inlays/onlays, couronnes</li>
            <li>Urgences dentaires et douleurs nocturnes</li>
            <li>Esthétique du sourire : blanchiment, facettes</li>
            <li>Orthodontie (aligneurs, brackets)</li>
            <li>Implants et prothèses</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-4 border rounded-lg bg-yellow-50 text-yellow-800 text-sm">
        Besoin d’une prise en charge rapide ? Consultez notre guide
        <Link
          to="/blog/urgence-dentaire-dakar-que-faire"
          className="ml-1 underline text-[#bb2988]"
        >
          Urgence dentaire à Dakar
        </Link>
        , puis contactez-nous.
      </div>

      <GoogleMapSection />

      <Callout title="Astuces pour venir">
        <ul className="list-disc pl-5">
          <li>Stationnement possible à proximité (prévoir un peu d’avance).</li>
          <li>Apportez vos radios/ordonnances précédentes si disponibles.</li>
          <li>
            En cas d’urgence, appelez avant votre venue pour un créneau
            prioritaire.
          </li>
        </ul>
      </Callout>
    </section>
  );
}
