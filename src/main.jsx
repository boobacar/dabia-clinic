// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { initGA } from "./analytics/ga4";
import { removeSeoShellBody, removeSeoShellHead } from "./utils/seoHead";

// Les shells statiques restent disponibles jusqu’au chargement du bundle,
// puis disparaissent juste avant que React 19 ne prenne possession du DOM.
removeSeoShellHead();
const root = removeSeoShellBody();
if (!root) throw new Error("React root introuvable");

ReactDOM.createRoot(root).render(
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
