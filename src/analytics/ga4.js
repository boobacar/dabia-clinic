// Lightweight GA4 loader + SPA pageview helper
export function initGA() {
  const id = import.meta.env.VITE_GA4_ID;
  if (!id || typeof window === "undefined") return;

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
  window.gtag("config", id, { anonymize_ip: true, send_page_view: false });
}

export function sendPageView(pathname, title) {
  const id = import.meta.env.VITE_GA4_ID;
  if (!id || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: pathname,
  });
}

export function sendEvent(name, params = {}) {
  const id = import.meta.env.VITE_GA4_ID;
  if (!id || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
