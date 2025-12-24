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
  const makeAbs = (u) => {
    if (!u) return undefined;
    if (/^https?:\/\//i.test(u)) return u;
    const base = defaultSite.domain.replace(/\/$/, "");
    const path = u.startsWith("/") ? u : `/${u}`;
    return `${base}${path}`;
  };

  const finalUrl = makeAbs(url) || defaultSite.domain;
  const finalImage = makeAbs(image) || makeAbs("/og-image.webp");
  const finalCanonical = makeAbs(canonical);
  const finalDesc =
    description ||
    "Dentiste à Dakar : clinique dentaire moderne pour implants, orthodontie, urgences et esthétique. Prenez rendez-vous à la Clinique Dentaire DABIA.";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: defaultSite.name,
    url: defaultSite.domain,
    image: finalImage,
    telephone: defaultSite.phone,
    address: { "@type": "PostalAddress", ...defaultSite.address },
    openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-13:00"],
    areaServed: ["Dakar", "Liberté 6", "Sicap Foire", "Parcelles Assainies"],
    sameAs: defaultSite.sameAs,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    // Utiliser le libellé complet (avec Dakar) comme nom de site principal
    name: defaultSite.siteLabel,
    // Garder uniquement des variantes proches
    alternateName: [
      "Clinique Dentaire DABIA",
      "Clinique Dentaire Dabia",
      "Clinique Dentaire DABIA Dakar",
    ],
    url: defaultSite.domain,
  };

  const blocks = [websiteJsonLd, orgJsonLd, ...jsonLd];

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
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={defaultSite.siteLabel} />
      <meta name="application-name" content={defaultSite.siteLabel} />
      <meta
        name="apple-mobile-web-app-title"
        content={defaultSite.siteLabel}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}
      {prevUrl && <link rel="prev" href={makeAbs(prevUrl)} />}
      {nextUrl && <link rel="next" href={makeAbs(nextUrl)} />}
      {/* RSS link retiré (retour configuration simple) */}
      {robots && <meta name="robots" content={robots} />}
      {(() => {
        const entries =
          hrefLangs ||
          (finalCanonical
            ? [
                { lang: "fr-SN", href: finalCanonical },
                { lang: "x-default", href: finalCanonical },
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
