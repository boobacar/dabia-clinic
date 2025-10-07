import React, { useEffect, useState } from "react";

export default function AggregateRating({
  as = "Dentist",
  name = "Clinique Dentaire DABIA",
  url = "https://www.cliniquedentairedabia.com",
}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    fetch("/api/google-reviews").then(async (r) => {
      try {
        const j = await r.json();
        if (mounted && j && j.rating && j.user_ratings_total) setData(j);
      } catch {}
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return null;

  const ld = {
    "@context": "https://schema.org",
    "@type": as,
    name,
    url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.rating,
      reviewCount: data.user_ratings_total,
    },
  };

  return (
    <div className="mt-3 text-sm text-gray-700 flex items-center gap-2">
      <span className="inline-flex items-center gap-1 text-[#bb2988]">
        {"★".repeat(Math.round(data.rating))}
        {"☆".repeat(5 - Math.round(data.rating))}
      </span>
      <span>
        {data.rating.toFixed(1)} / 5 • {data.user_ratings_total} avis Google
      </span>
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </div>
  );
}

