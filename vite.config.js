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

export default defineConfig({
  server: {
    allowedHosts: ["home-server-1.tail660cfd.ts.net"],
    proxy: {
      "/api/google-reviews": {
        target: "https://www.cliniquedentairedabia.com",
        changeOrigin: true,
        secure: true,
      },
      "/api": "http://localhost:3000",
    },
  },
  preview: {
    allowedHosts: ["home-server-1.tail660cfd.ts.net"],
    proxy: {
      "/api/google-reviews": {
        target: "https://www.cliniquedentairedabia.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
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
    manifest: true,
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
