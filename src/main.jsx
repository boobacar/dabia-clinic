// src/main.jsx
import "./index.css";
import { initGA } from "./analytics/ga4";

let mounted = false;
let mountTimer;

function cleanupMountTriggers() {
  window.removeEventListener("pointerdown", mountApp);
  window.removeEventListener("keydown", mountApp);
  window.removeEventListener("scroll", mountApp);
  if (mountTimer) window.clearTimeout(mountTimer);
}

async function mountApp() {
  if (mounted) return;
  mounted = true;
  cleanupMountTriggers();

  const [{ default: React }, ReactDOM, { BrowserRouter }, { default: App }] =
    await Promise.all([
      import("react"),
      import("react-dom/client"),
      import("react-router-dom"),
      import("./App"),
    ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(App),
    ),
  );
}

window.addEventListener("pointerdown", mountApp, { passive: true });
window.addEventListener("keydown", mountApp);
window.addEventListener("scroll", mountApp, { passive: true });
mountTimer = window.setTimeout(mountApp, 9000);

// Start RUM in production
initGA();
if (import.meta.env.PROD) {
  const startVitals = () => {
    import("./rum/vitals.js").then(({ startWebVitals, applyReducedMotionAttribute }) => {
      try {
        applyReducedMotionAttribute();
      } catch {}
      try {
        startWebVitals();
      } catch {}
    });
  };
  window.setTimeout(startVitals, 12000);
}
