// src/components/ScrollManager.jsx
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * - Si l'URL a un hash (#id), on scrolle vers l'élément correspondant.
 * - Sinon, on scrolle en haut de page.
 * On évite ainsi le conflit entre "hash scroll" et "scroll to top".
 */
export default function ScrollManager({ location: displayedLocation }) {
  const routerLocation = useLocation();
  const { pathname, hash } = displayedLocation || routerLocation;

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    let cancelled = false;
    let timeoutId;
    let frameId;

    // Fonction utilitaire: tente de scroller à l'ancre avec quelques retries (DOM async)
    const scrollToHash = (h) => {
      if (!h || h === "#") return false;
      let id;
      try {
        id = decodeURIComponent(h.replace(/^#/, ""));
      } catch {
        id = h.replace(/^#/, "");
      }
      let tries = 0;
      const maxTries = 10;

      const tick = () => {
        if (cancelled) return;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        tries += 1;
        if (tries < maxTries) {
          // attend un peu que le DOM/lazy route se charge
          timeoutId = window.setTimeout(tick, 50);
        }
      };

      // Laisse le temps au DOM de peindre la route
      frameId = window.requestAnimationFrame(tick);
      return true;
    };

    if (hash) {
      // S'il y a une ancre, on ne fait PAS de scrollToTop
      scrollToHash(hash);
    } else {
      // La route affichée vient réellement de changer : remonte avant la peinture.
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [pathname, hash]);

  return null;
}
