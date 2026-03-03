// Lightweight RUM for Core Web Vitals
import { onCLS, onLCP, onINP, onFCP, onTTFB } from 'web-vitals';

const SAMPLE = 0.25; // 25% sampling

function analyticsAllowed() {
  try {
    return !!window.__analytics_allowed && !!window.gtag;
  } catch {
    return false;
  }
}

function sendMetric(metric) {
  if (Math.random() > SAMPLE) return;
  const rounded = metric.name === 'CLS' ? Math.round(metric.value * 1000) : Math.round(metric.value);
  const payload = {
    name: metric.name,
    value: rounded,
    id: metric.id,
    path: location.pathname + location.search,
    ua: navigator.userAgent,
    ts: Date.now(),
  };

  // Respect consent: only send if analytics allowed
  if (analyticsAllowed()) {
    window.gtag('event', 'web_vitals', {
      metric_name: payload.name,
      metric_value: payload.value,
      metric_id: payload.id,
      page_path: payload.path,
      non_interaction: true,
    });
  }
}

export function startWebVitals() {
  onLCP(sendMetric);
  onCLS(sendMetric);
  onINP(sendMetric);
  onFCP(sendMetric);
  onTTFB(sendMetric);
}

// optional: respect reduced-motion users for CSS/JS animations
export function applyReducedMotionAttribute() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.body.toggleAttribute('data-reduce-motion', mq.matches);
}
