import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendEvent } from "../analytics/ga4";

export default function ConversionTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    function onClick(e) {
      let el = e.target;
      while (el && el.tagName && el !== document.body) {
        if (el.tagName.toLowerCase() === "a") break;
        el = el.parentElement;
      }
      if (!el) return;

      const href = el.getAttribute("href") || "";
      const text = (el.textContent || "").trim().slice(0, 80);

      if (href.includes("/rendez-vous")) {
        sendEvent("cta_rendez_vous_click", {
          link_text: text || "rendez-vous",
          page_path: pathname,
        });
      }

      if (href.startsWith("tel:")) {
        sendEvent("click_tel", {
          link_text: text || "call",
          page_path: pathname,
          destination: href,
        });
      }

      if (href.includes("wa.me") || href.includes("whatsapp")) {
        sendEvent("click_whatsapp", {
          link_text: text || "whatsapp",
          page_path: pathname,
          destination: href,
        });
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}

