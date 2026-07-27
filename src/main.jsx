// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { initGA } from "./analytics/ga4";
import { removeSeoShellHead } from "./utils/seoHead";

// Les shells statiques sont utiles aux robots, mais doivent disparaître avant
// que React 19 ne prenne possession du head pour éviter tout removeChild invalide.
removeSeoShellHead();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

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
