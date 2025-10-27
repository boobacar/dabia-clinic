// src/components/Seo.jsx – version React 19 (sans Helmet)
import React from "react";

const defaultSite = {
  name: "Clinique Dentaire DABIA",
  siteLabel: "Clinique Dentaire DABIA - Dakar",
  domain: "https://www.cliniquedentairedabia.com",
  logo: "/logo192.png",
  locale: "fr_SN",
  phone: "+221777039393",
  sameAs: [
    "https://www.facebook.com/cliniquedentairedabia/?locale=fr_FR",
    "https://www.instagram.com/clinique_dentaire_dabia/",
    "https://sn.linkedin.com/company/clinique-dentaire-dabia",
  ],
  address: {
    streetAddress: "Sicap Foire, 2 voies Liberté 6 (à 150m du Uno)",
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
  image = "/og-image.webp",
  type = "website",
  jsonLd = [],
  canonical,
  publishedTime,
  modifiedTime,
  locale = "fr_SN",
  hrefLangs,
  robots = "index,follow",
  prevUrl,
  nextUrl,
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
    sameAs: defaultSite.sameAs,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultSite.name,
    // Garder uniquement des variantes proches pour éviter que Google choisisse un nom tronqué
    alternateName: [
      "Clinique Dentaire DABIA",
      "Clinique Dentaire Dabia",
      "Clinique Dentaire DABIA - Dakar",
    ],
    url: defaultSite.domain,
  };

  const blocks = [websiteJsonLd, orgJsonLd, ...jsonLd];

  const makeAbs = (u) => {
    if (!u) return undefined;
    if (/^https?:\/\//i.test(u)) return u;
    const base = defaultSite.domain.replace(/\/$/, "");
    const path = u.startsWith("/") ? u : `/${u}`;
    return `${base}${path}`;
  };

  // keep simple relative/absolute handling for links below

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
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={defaultSite.name} />
      <meta name="application-name" content={defaultSite.name} />
      <meta name="apple-mobile-web-app-title" content={defaultSite.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={image} />
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      {prevUrl && <link rel="prev" href={makeAbs(prevUrl)} />}
      {nextUrl && <link rel="next" href={makeAbs(nextUrl)} />}
      {/* RSS link retiré (retour configuration simple) */}
      {robots && <meta name="robots" content={robots} />}
      {(() => {
        const entries =
          hrefLangs ||
          (canonical
            ? [
                { lang: "fr-SN", href: canonical },
                { lang: "x-default", href: canonical },
              ]
            : []);
        return entries.map((e, i) => (
          <link
            key={`alt-${i}`}
            rel="alternate"
            hrefLang={e.lang}
            href={e.href}
          />
        ));
      })()}
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(b)}
        </script>
      ))}
    </>
  );
}
