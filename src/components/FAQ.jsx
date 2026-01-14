import React from "react";
import SectionTitle from "./SectionTitle";

export default function FAQ({
  items = [],
  asJsonLd = true,
  title = "Questions fréquentes",
  className = "",
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (items || []).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className={className}>
      <SectionTitle
        title={title}
        subtitle="FAQ"
        center={false}
        className="mb-8"
      />
      <div className="space-y-3">
        {items.map((f, i) => (
          <details key={i} className="border rounded-xl p-4 bg-white">
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-700 text-sm">{f.a}</p>
          </details>
        ))}
      </div>
      {asJsonLd && (
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      )}
    </section>
  );
}
