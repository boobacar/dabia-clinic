import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQ from "../components/FAQ";

export default function DentalClinicDakarEn() {
  const canonical =
    "https://www.cliniquedentairedabia.com/en/dental-clinic-dakar";

  const faqItems = [
    {
      q: "Where is DABIA Dental Clinic located in Dakar?",
      a: "We are located in Sicap Foire, on the 2 voies Liberté 6 road, about 150 meters from Uno supermarket.",
    },
    {
      q: "Do you accept international or expat patients?",
      a: "Yes. We welcome international patients and provide clear treatment plans, pricing explanations, and follow-up guidance.",
    },
    {
      q: "Can I get an appointment quickly?",
      a: "Yes. For urgent cases, call first and we will prioritize the fastest available slot.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": `${canonical}#clinic`,
      name: "Clinique Dentaire DABIA Dakar",
      url: canonical,
      telephone: "+221****9393",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sicap Foire, 2 voies Liberté 6 (150m from Uno)",
        addressLocality: "Dakar",
        addressRegion: "Dakar",
        addressCountry: "SN",
      },
      areaServed: ["Dakar", "Senegal", "West Africa"],
      availableLanguage: ["French", "English"],
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

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="py-20 px-4 max-w-7xl mx-auto mt-20">
        <Seo
          title="Dental Clinic Dakar — Implants, Emergency, Cosmetic Dentistry | DABIA"
          description="English-speaking dental clinic in Dakar, Senegal. Implants, orthodontics, teeth whitening, emergency dental care. Clear quotes, fast appointments at DABIA Clinic, Liberté 6."
          canonical={canonical}
          url={canonical}
          locale="en_US"
          hrefLangs={[
            {
              lang: "fr-SN",
              href: "https://www.cliniquedentairedabia.com/clinique-dentaire-dakar",
            },
            {
              lang: "fr",
              href: "https://www.cliniquedentairedabia.com/clinique-dentaire-dakar",
            },
            {
              lang: "en",
              href: canonical,
            },
            {
              lang: "x-default",
              href: "https://www.cliniquedentairedabia.com/clinique-dentaire-dakar",
            },
          ]}
          jsonLd={jsonLd}
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Dental clinic in Dakar" },
          ]}
        />

        <section className="rounded-3xl border bg-gradient-to-br from-pink-50 via-white to-amber-50 p-6 md:p-8">
          <p className="text-sm font-semibold text-[#bb2988]">
            International & expat patients - Dakar
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#ad9d64]">
            Dental clinic in Dakar for complete and modern care
          </h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            DABIA Dental Clinic supports adults and children in Dakar for
            consultations, emergency treatment, implants, orthodontics,
            prosthetics, and cosmetic dentistry. We explain each step clearly:
            diagnosis, options, treatment plan, and follow-up.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/rendez-vous" className="btn-cta">
              Book an appointment
            </Link>
            <a href="tel:+221****9393" className="btn-cta btn-cta-sm">
              Call now
            </a>
            <Link to="/clinique-dentaire-dakar" className="btn-cta btn-cta-sm">
              Version française
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#ad9d64]">
            Most requested dental services in Dakar
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
            <Link className="underline text-[#bb2988]" to="/urgence-dentaire-dakar">
              Dental emergency in Dakar
            </Link>
            <Link className="underline text-[#bb2988]" to="/competences/implantologie">
              Dental implants
            </Link>
            <Link className="underline text-[#bb2988]" to="/competences/orthodontie">
              Orthodontics
            </Link>
            <Link className="underline text-[#bb2988]" to="/competences/blanchiment-dentaire">
              Teeth whitening
            </Link>
          </div>
        </section>

        <FAQ className="mt-10" asJsonLd={false} items={faqItems} />
      </div>
    </main>
  );
}
