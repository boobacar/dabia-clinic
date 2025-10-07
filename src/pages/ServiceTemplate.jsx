import React from "react";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import NAP from "../components/NAP";
import { Link } from "react-router-dom";

export default function ServiceTemplate({
  slug,
  title,
  description,
  bullets = [],
  faq = [],
}) {
  const url = `https://www.cliniquedentairedabia.com${slug ? `/services/${slug}` : "/services"}`;
  const faqLD = faq.length
    ? [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((q) => ({
            "@type": "Question",
            name: q.q,
            acceptedAnswer: { "@type": "Answer", text: q.a },
          })),
        },
      ]
    : [];

  return (
    <main className="pt-20 pb-14 px-4 max-w-5xl mx-auto">
      <Seo
        title={`${title || "Nos services"} – Dakar`}
        description={description || "Découvrez nos soins et services dentaires à Dakar : esthétique, orthodontie, implantologie, urgences et plus."}
        canonical={url}
        jsonLd={faqLD}
      />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          ...(title ? [{ label: title }] : []),
        ]}
      />
      <h1 className="text-3xl font-extrabold mb-3">{title} à Dakar</h1>
      <NAP compact />
      <p className="mt-4 text-gray-700">{description}</p>

      {bullets.length ? (
        <ul className="list-disc ml-5 mt-6 space-y-1 text-gray-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}

      {faq.length ? (
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <details key={i} className="bg-gray-50 rounded p-4">
                <summary className="font-semibold cursor-pointer">
                  {f.q}
                </summary>
                <div className="mt-2 text-gray-700">{f.a}</div>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-8">
        <Link to="/rendez-vous" className="btn-cta">
          Prendre rendez-vous
        </Link>
      </div>
    </main>
  );
}
