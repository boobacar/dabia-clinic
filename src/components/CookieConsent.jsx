import React, { useEffect, useState } from "react";
import { sendEvent } from "../analytics/ga4";

const LS_KEY = "dabia_consent_v1";

const defaultState = {
  analytics: false,
};

function applyConsent(state) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.__analytics_allowed = !!state.analytics;
  window.gtag("consent", "update", {
    analytics_storage: state.analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaultState);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        setPrefs({ ...defaultState, ...p });
        if (window.gtag) applyConsent({ ...defaultState, ...p });
        window.__analytics_allowed = !!p.analytics;
        setOpen(false);
      } else {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-3 left-3 z-[55] rounded-full border border-gray-300 bg-white/95 px-3 py-1.5 text-[12px] text-gray-700 shadow-sm hover:bg-white"
        aria-label="Gérer les cookies"
      >
        Cookies
      </button>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-3 md:bottom-5 z-[60] px-3 md:px-6 flex justify-center"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div
        className={
          "pointer-events-auto w-full max-w-[780px] rounded-xl border px-4 py-2 transition-all duration-200 " +
          (showManage
            ? "border-gray-200 bg-white shadow-lg shadow-gray-900/10"
            : "border-gray-200 bg-white/90 backdrop-blur-md shadow-md shadow-gray-900/5")
        }
      >
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <p className="text-[13px] leading-5 text-gray-800 flex-1 min-w-[220px]">
            Nous utilisons des cookies essentiels et de mesure d’audience pour
            améliorer votre expérience. Vous pouvez accepter, refuser ou choisir
            vos préférences.
          </p>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 text-[12px] font-medium text-gray-600 rounded-full border border-gray-200 hover:border-gray-300 transition"
              onClick={() => setShowManage((s) => !s)}
              aria-expanded={showManage}
            >
              Gérer
            </button>
            <button
              className="px-3 py-1 text-[12px] font-semibold rounded-full border border-gray-200 text-gray-800 hover:border-gray-300 transition"
              onClick={() => {
                const state = { ...defaultState, analytics: false };
                localStorage.setItem(LS_KEY, JSON.stringify(state));
                applyConsent(state);
                try {
                  sendEvent("consent_update", { action: "reject_all" });
                } catch {}
                setOpen(false);
              }}
            >
              Tout refuser
            </button>
            <button
              className="px-3.5 py-1 text-[12px] font-semibold rounded-full bg-[#ad9d64] text-white hover:shadow-sm transition"
              onClick={() => {
                const state = { analytics: true };
                localStorage.setItem(LS_KEY, JSON.stringify(state));
                applyConsent(state);
                try {
                  sendEvent("consent_update", { action: "accept_all" });
                } catch {}
                setOpen(false);
              }}
            >
              Tout accepter
            </button>
          </div>
        </div>

        {showManage && (
          <div className="mt-2 rounded-2xl border border-gray-200 bg-white px-3 py-2.5 text-[12px] text-gray-700 shadow-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly disabled />
              Essentiels (toujours actifs)
            </label>
            <label className="mt-2 flex items-center gap-2">
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) =>
                  setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                }
              />
              Mesure d’audience (GA4)
            </label>

            <button
              className="mt-3 px-3 py-1.5 text-[12px] font-semibold rounded-md bg-gray-800 text-white hover:bg-gray-900 transition w-full md:w-auto"
              onClick={() => {
                localStorage.setItem(LS_KEY, JSON.stringify(prefs));
                applyConsent(prefs);
                try {
                  sendEvent("consent_update", { action: "save_custom" });
                } catch {}
                setOpen(false);
              }}
            >
              Enregistrer mes choix
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
