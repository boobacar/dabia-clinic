import React from "react";

export default function ReviewCTA({ className = "" }) {
  const reviewUrl =
    "https://search.google.com/local/writereview?placeid=ChIJr_hCmyINwQ4RTNp6JYtNdtQ";
  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex px-4 py-2 rounded-full bg-[#bb2988] text-white transition transform hover:scale-105 ${className}`}
      aria-label="Laisser un avis Google"
    >
      Laisser un avis Google
    </a>
  );
}
