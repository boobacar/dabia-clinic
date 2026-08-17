import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Revenir en haut de la page"
      title="Revenir en haut"
      onClick={scrollToTop}
      className="scroll-top-button"
    >
      <span className="scroll-top-button__icon" aria-hidden="true">
        <ArrowUp strokeWidth={2.2} />
      </span>
      <span className="scroll-top-button__label" aria-hidden="true">
        Haut de page
      </span>
    </button>
  );
}
