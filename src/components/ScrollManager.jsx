// src/components/ScrollManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * - Si l'URL a un hash (#id), on scrolle vers l'élément correspondant.
 * - Sinon, on scrolle en haut de page.
 * On évite ainsi le conflit entre "hash scroll" et "scroll to top".
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Fonction utilitaire: tente de scroller à l'ancre avec quelques retries (DOM async)
    const scrollToHash = (h) => {
      if (!h || h === "#") return false;
      const id = decodeURIComponent(h.replace("#", ""));
      let tries = 0;
      const maxTries = 10;

      const tick = () => {
        const el = document.getElementById(id) || document.querySelector(h);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        tries += 1;
        if (tries < maxTries) {
          // attend un peu que le DOM/lazy route se charge
          setTimeout(tick, 50);
        }
      };

      // Laisse le temps au DOM de peindre la route
      requestAnimationFrame(tick);
      return true;
    };

    if (hash) {
      // S'il y a une ancre, on ne fait PAS de scrollToTop
      scrollToHash(hash);
    } else {
      // Pas d'ancre → remonte en haut
      // setTimeout pour éviter de lutter avec le render/paint initial
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}
