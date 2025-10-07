import React from "react";

export default function ReviewCTA({ className = "" }) {
  const reviewUrl =
    "https://search.google.com/local/writereview?placeid=ChIJr_hCmyINwQ4RTNp6JYtNdtQ";
  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noreferrer"
      className={`btn-cta btn-cta-sm ${className}`}
      aria-label="Laisser un avis Google"
    >
      Laisser un avis Google
    </a>
  );
}
