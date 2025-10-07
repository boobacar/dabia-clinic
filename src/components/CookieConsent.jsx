import React, { useEffect, useState } from 'react';

const LS_KEY = 'dabia_consent_v1';

const defaultState = {
  // core
  analytics: false,
  ads: false,
};

function applyConsent(state) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.__analytics_allowed = !!state.analytics;
  window.gtag('consent', 'update', {
    analytics_storage: state.analytics ? 'granted' : 'denied',
    ad_storage: state.ads ? 'granted' : 'denied',
    ad_user_data: state.ads ? 'granted' : 'denied',
    ad_personalization: state.ads ? 'granted' : 'denied',
    // keep essential storage working
    functionality_storage: 'granted',
    security_storage: 'granted',
  });
}

import { sendEvent } from '../analytics/ga4';

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
        // apply stored consent on load
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
    <div className="fixed bottom-4 right-4 z-50">
      <div className="w-[min(360px,90vw)] rounded-xl border bg-white/95 backdrop-blur p-3 shadow-lg">
        <p className="text-[13px] text-gray-800">
          Nous utilisons des cookies pour améliorer votre expérience (mesure
          d’audience, fonctionnalités essentielles). Vous pouvez accepter ou
          refuser. Vous pourrez modifier votre choix à tout moment.
        </p>
        {showManage && (
          <div className="mt-2 text-[13px]">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked
                readOnly
                disabled
              />
              Fonctionnels (toujours actifs)
            </label>
            <label className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
              />
              Mesure d’audience (GA4)
            </label>
            <label className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                checked={prefs.ads}
                onChange={(e) => setPrefs((p) => ({ ...p, ads: e.target.checked }))}
              />
              Publicité personnalisée
            </label>
          </div>
        )}
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            className="btn-cta btn-cta-sm text-[13px]"
            onClick={() => setShowManage((s) => !s)}
          >
            {showManage ? 'Fermer' : 'Paramètres'}
          </button>
          <button
            className="btn-cta btn-cta-sm text-[13px]"
            onClick={() => {
              const state = { ...defaultState, analytics: false, ads: false };
              localStorage.setItem(LS_KEY, JSON.stringify(state));
              applyConsent(state);
              try { sendEvent('consent_update', { action: 'reject_all' }); } catch {}
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
              try { sendEvent('consent_update', { action: 'accept_all' }); } catch {}
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
