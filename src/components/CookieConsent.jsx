import React, { useEffect, useState } from "react";
import { sendEvent } from "../analytics/ga4";

const LS_KEY = "dabia_consent_v1";

const defaultState = {
  analytics: false,
  ads: false,
};

function applyConsent(state) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.__analytics_allowed = !!state.analytics;
  window.gtag("consent", "update", {
    analytics_storage: state.analytics ? "granted" : "denied",
    ad_storage: state.ads ? "granted" : "denied",
    ad_user_data: state.ads ? "granted" : "denied",
    ad_personalization: state.ads ? "granted" : "denied",
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

  if (!open) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-4 md:bottom-6 z-[60] px-3 md:px-6 flex justify-start"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="pointer-events-auto w-full max-w-[430px] rounded-2xl border border-gray-200/70 bg-white shadow-xl shadow-gray-900/10 backdrop-blur p-4">
        <p className="text-[13px] leading-5 text-gray-800">
          Nous utilisons des cookies essentiels et de mesure d’audience pour
          améliorer votre expérience. Vous pouvez accepter, refuser ou choisir
          vos préférences.
        </p>

        {showManage && (
          <div className="mt-3 rounded-lg bg-gray-50 p-3 text-[13px]">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly disabled />
              Fonctionnels (toujours actifs)
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
            <label className="mt-2 flex items-center gap-2">
              <input
                type="checkbox"
                checked={prefs.ads}
                onChange={(e) => setPrefs((p) => ({ ...p, ads: e.target.checked }))}
              />
              Publicité personnalisée
            </label>
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className="btn-cta btn-cta-sm text-[13px]"
            onClick={() => setShowManage((s) => !s)}
          >
            {showManage ? "Fermer" : "Paramètres"}
          </button>
          <button
            className="btn-cta btn-cta-sm text-[13px]"
            onClick={() => {
              const state = { ...defaultState, analytics: false, ads: false };
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
            className="btn-cta btn-cta-sm text-[13px]"
            onClick={() => {
              const state = { analytics: true, ads: true };
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
    </div>
  );
}
