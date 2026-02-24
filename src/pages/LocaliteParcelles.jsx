import React from "react";
import ReactMarkdown from "react-markdown";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import GoogleMapSection from "../components/GoogleMapSection";
import Callout from "../components/Callout";
import { Link } from "react-router-dom";

export default function LocaliteParcelles() {
  const url =
    "https://www.cliniquedentairedabia.com/clinique-dentaire-parcelles-assainies";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Clinique Dentaire DABIA – Parcelles Assainies (proche)",
      url,
      image: "/og-image.webp",
      telephone: "+221777039393",
      areaServed: [
        "Parcelles Assainies",
        "Liberté 6",
        "Sicap Foire",
        "Patte d'Oie",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
      openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
      priceRange: "CFA",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto mt-20">
      <Seo
        title="Dentiste Parcelles Assainies (proche) – Clinique DABIA Dakar"
        description="Vous cherchez un dentiste près des Parcelles Assainies ? Clinique DABIA (Sicap Foire) : urgences, détartrage, implants, orthodontie et esthétique."
        url={url}
        canonical={url}
        type="website"
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Clinique dentaire Parcelles Assainies" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64]">
        Clinique dentaire proche des Parcelles Assainies (Dakar)
      </h1>
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <p className="mt-3 text-gray-700" {...props} />
          ),
        }}
      >
        {`Située à **Sicap Foire** (à quelques minutes des **Parcelles Assainies**), la Clinique Dentaire DABIA propose une prise en charge globale : prévention, **détartrage**, **soins conservateurs**, **urgences**, **implantologie**, **orthodontie** et **esthétique du sourire**.`}
      </ReactMarkdown>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="p-5 border rounded-xl bg-white">
          <h2 className="text-xl font-semibold mb-2">
            Pourquoi nous choisir ?
          </h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
            <li>Équipe attentive et pédagogie sur chaque traitement</li>
            <li>Imagerie moderne pour un diagnostic précis</li>
            <li>Plan de traitement clair et devis détaillé</li>
            <li>Suivi et contrôles réguliers</li>
          </ul>
        </div>
        <div className="p-5 border rounded-xl bg-white">
          <h2 className="text-xl font-semibold mb-2">Informations pratiques</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Accès : Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)</li>
            <li>
              <Link to="/rendez-vous" className="text-[#bb2988] underline">
                Prendre rendez-vous en ligne
              </Link>
            </li>
            <li>
              Conseils :
              <Link
                to="/blog/guide-prix-dentiste-dakar-consultation-soins"
                className="ml-1 text-[#bb2988] underline"
              >
                tarifs dentaires à Dakar
              </Link>
              ,
              <Link
                to="/blog/detartrage-vs-airflow-difference-prophylaxie-dakar"
                className="ml-1 text-[#bb2988] underline"
              >
                détartrage / AirFlow
              </Link>
              .
            </li>
          </ul>
        </div>
      </div>

      <GoogleMapSection />

      <Callout title="Informations utiles">
        <ul className="list-disc pl-5">
          <li>Tarifs détaillés après examen clinique et plan de traitement.</li>
          <li>
            Nous travaillons avec de nombreuses assurances (voir la page
            dédiée).
          </li>
          <li>
            Pour les soins esthétiques, des photos avant/après peuvent être
            réalisées.
          </li>
        </ul>
      </Callout>
    </section>
  );
}
