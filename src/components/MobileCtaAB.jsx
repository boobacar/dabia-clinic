import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import { sendEvent } from "../analytics/ga4";

const VARIANTS = ["call", "whatsapp", "rdv"];

function pickVariant(storageKey) {
  if (typeof window === "undefined") return "rdv";
  const existing = localStorage.getItem(storageKey);
  if (existing && VARIANTS.includes(existing)) return existing;
  const chosen = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
  localStorage.setItem(storageKey, chosen);
  return chosen;
}

export default function MobileCtaAB({ pagePath, rdvTo = "/rendez-vous", className = "" }) {
  const storageKey = useMemo(() => `dabia_mobile_cta_variant:${pagePath}`, [pagePath]);
  const [variant, setVariant] = useState("rdv");

  useEffect(() => {
    const v = pickVariant(storageKey);
    setVariant(v);
    sendEvent("mobile_cta_ab_impression", { page_path: pagePath, cta_variant: v });
  }, [pagePath, storageKey]);

  const common =
    "btn-cta inline-flex items-center justify-center gap-2 shadow-lg";

  const onClick = (type) => {
    sendEvent("mobile_cta_ab_click", { page_path: pagePath, cta_variant: variant, cta_type: type });
    sendEvent("cta_rendez_vous_click", { page_path: pagePath, cta_type: `${type}_mobile_ab`, cta_variant: variant });
  };

  return (
    <div className={`fixed bottom-4 right-4 md:hidden z-30 ${className}`.trim()}>
      {variant === "call" && (
        <a href="tel:+221777039393" className={common} onClick={() => onClick("call")}>
          <FaPhoneAlt /> Appeler maintenant
        </a>
      )}

      {variant === "whatsapp" && (
        <a
          href="https://wa.me/221777039393?text=Bonjour%20Clinique%20DABIA%2C%20je%20souhaite%20prendre%20un%20rendez-vous."
          target="_blank"
          rel="noreferrer"
          className={common}
          onClick={() => onClick("whatsapp")}
        >
          <FaWhatsapp className="text-green-600" /> WhatsApp RDV
        </a>
      )}

      {variant === "rdv" && (
        <Link to={rdvTo} className={common} onClick={() => onClick("rdv_form")}>
          <FaCalendarCheck /> Prendre RDV
        </Link>
      )}
    </div>
  );
}
