import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/postcss"; // ✅ Use the new Tailwind PostCSS plugin
import autoprefixer from "autoprefixer";
import tailwindPlugin from "tailwindcss/plugin";

// Extend the Tailwind theme
const customTailwind = tailwindPlugin.withOptions(() => ({
  theme: {
    extend: {
      colors: {
        dabiaYellow: "#FFD435",
        dabiaPeach: "#FFCAAD",
      },
    },
  },
}));

// Transforme le <link rel="stylesheet"> généré par Vite en chargement non-bloquant.
// Le CSS est preloaded (parallèle au JS) puis switché en stylesheet via onload.
// Élimine les ~160ms de render-blocking sans FOUC grâce au CSS critique inliné dans index.html.
const deferCss = () => ({
  name: "defer-non-critical-css",
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
      (_, href) =>
        `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
        `<noscript><link rel="stylesheet" href="${href}"></noscript>`
    );
  },
});

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react(), deferCss()],
  base: "/",
  css: {
    postcss: {
      plugins: [
        tailwind({
          plugins: [customTailwind],
        }),
        autoprefixer(),
      ],
    },
  },
  build: {
    // Assure la minification même en mode développement accidentel
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — très stable, long TTL CDN
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Framer Motion — chargé en parallèle du code app
          "vendor-motion": ["framer-motion"],
          // UI libs lourdes — chargées séparément
          "vendor-ui": ["swiper", "react-compare-slider"],
          // Libs formulaire/date — uniquement page RDV
          "vendor-form": ["react-datepicker", "date-fns", "@emailjs/browser"],
        },
      },
    },
  },
});
