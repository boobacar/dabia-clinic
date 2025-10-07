// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { initGA } from './analytics/ga4';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Start RUM in production
if (import.meta.env.PROD) {
  initGA();
  import('./rum/vitals.js').then(({ startWebVitals, applyReducedMotionAttribute }) => {
    try { applyReducedMotionAttribute(); } catch {}
    try { startWebVitals(); } catch {}
  });
}
