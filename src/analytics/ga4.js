// Lightweight GA4 loader + SPA pageview helper

function isGaDebugEnabled() {
  if (typeof window === "undefined") return false;
  try {
    const qp = new URLSearchParams(window.location.search);
    if (qp.get("ga_debug") === "1") {
      localStorage.setItem("ga_debug", "1");
      return true;
    }
    return localStorage.getItem("ga_debug") === "1";
  } catch {
    return false;
  }
}

export function initGA() {
  const id = import.meta.env.VITE_GA4_ID;
  if (!id || typeof window === "undefined") return;

  const debugMode = isGaDebugEnabled();

  // Prepare dataLayer and consent defaults BEFORE loading gtag.js
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  // Consent Mode v2 defaults: deny analytics/ads until consent
  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
  });

  // Inject gtag script once
  if (!document.getElementById("ga4-src")) {
    const s = document.createElement("script");
    s.id = "ga4-src";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);
  }

  window.gtag("js", new Date());
  // Disable auto page_view for SPA; we will send it on route change
  window.gtag("config", id, {
    anonymize_ip: true,
    send_page_view: false,
    ...(debugMode ? { debug_mode: true } : {}),
  });
}

export function sendPageView(pathname, title) {
  const id = import.meta.env.VITE_GA4_ID;
  if (!id || typeof window === "undefined" || !window.gtag) return;
  const debugMode = isGaDebugEnabled();
  window.gtag("event", "page_view", {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: pathname,
    ...(debugMode ? { debug_mode: true } : {}),
  });
}

export function sendEvent(name, params = {}) {
  const id = import.meta.env.VITE_GA4_ID;
  if (!id || typeof window === "undefined" || !window.gtag) return;
  const debugMode = isGaDebugEnabled();
  window.gtag("event", name, {
    ...params,
    ...(debugMode ? { debug_mode: true } : {}),
  });
}
