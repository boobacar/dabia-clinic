import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendEvent } from '../analytics/ga4';

export default function ConversionTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    function onClick(e) {
      let el = e.target;
      while (el && el.tagName && el !== document.body) {
        if (el.tagName.toLowerCase() === 'a') break;
        el = el.parentElement;
      }
      if (!el) return;
      const href = el.getAttribute('href') || '';
      if (href.includes('/rendez-vous')) {
        const text = (el.textContent || '').trim().slice(0, 80);
        sendEvent('cta_rendez_vous_click', {
          link_text: text || 'rendez-vous',
          page_path: pathname,
        });
      }
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [pathname]);

  return null;
}

