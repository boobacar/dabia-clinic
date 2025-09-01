// src/components/Seo.jsx – version React 19 (sans Helmet)
import React from "react";

const defaultSite = {
  name: "Clinique Dentaire DABIA",
  domain: "https://www.cliniquedentairedabia.com",
  logo: "/logo192.png",
  locale: "fr_SN",
  phone: "+221-00-00-00-00",
  address: {
    streetAddress: "Sicap Foire Socabeg, à 150m des deux voies de Liberté VI",
    addressLocality: "Dakar",
    addressRegion: "Dakar",
    postalCode: "",
    addressCountry: "SN",
  },
};

export default function Seo({
  title,
  description,
  url,
  image = "/og-default.jpg",
  type = "website",
  jsonLd = [],
  canonical,
}) {
  const finalTitle = title
    ? `${title} | ${defaultSite.name}`
    : defaultSite.name;
  const finalUrl = url || defaultSite.domain;
  const finalDesc =
    description ||
    "Soins dentaires de qualité à Dakar : implants, orthodontie, urgences, esthétique. Prenez rendez-vous à la Clinique Dentaire DABIA.";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: defaultSite.name,
    url: defaultSite.domain,
    image,
    telephone: defaultSite.phone,
    address: { "@type": "PostalAddress", ...defaultSite.address },
    openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-13:00"],
    sameAs: [],
  };

  const blocks = [orgJsonLd, ...jsonLd];

  return (
    <>
      {/* React 19: ces balises sont automatiquement intégrées dans <head> */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={image} />
      {canonical && <link rel="canonical" href={canonical} />}
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(b)}
        </script>
      ))}
    </>
  );
}
