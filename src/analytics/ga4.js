// Lightweight GA4 consent gate + SPA pageview helper

const LS_KEY = "dabia_consent_v1";

function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return false;
    return !!JSON.parse(raw)?.analytics;
  } catch {
    return false;
  }
}

function defer(fn) {
  if (typeof window === "undefined") return;
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(fn, { timeout: 2500 });
    return;
  }
  window.setTimeout(fn, 1200);
}

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

function ensureDataLayer() {
  const id = import.meta.env.VITE_GA4_ID;
  if (!id || typeof window === "undefined") return null;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  return id;
}

export function loadGA() {
  const id = ensureDataLayer();
  if (!id || window.__ga4_loaded) return;
  window.__ga4_loaded = true;
  const debugMode = isGaDebugEnabled();

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

export function initGA() {
  const id = ensureDataLayer();
  if (!id) return;

  window.__analytics_allowed = hasAnalyticsConsent();

  // Consent Mode v2 defaults before any possible analytics load.
  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: window.__analytics_allowed ? "granted" : "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
  });

  if (window.__analytics_allowed) {
    defer(loadGA);
  }
}

export function sendPageView(pathname, title) {
  const id = import.meta.env.VITE_GA4_ID;
  if (
    !id ||
    typeof window === "undefined" ||
    !window.__analytics_allowed ||
    !window.gtag
  ) {
    return;
  }
  loadGA();
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
  if (
    !id ||
    typeof window === "undefined" ||
    !window.__analytics_allowed ||
    !window.gtag
  ) {
    return;
  }
  loadGA();
  const debugMode = isGaDebugEnabled();
  window.gtag("event", name, {
    ...params,
    ...(debugMode ? { debug_mode: true } : {}),
  });
}
