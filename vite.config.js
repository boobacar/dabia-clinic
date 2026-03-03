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
    proxy: {
      "/api": "http://localhost:3000", // si tu lances un petit serveur pour l'API
    },
  },
  plugins: [react()],
  base: "/", // Remplace ici
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // Core React stack
          if (
            id.includes("react/") ||
            id.includes("react-dom/") ||
            id.includes("react-router")
          ) {
            return "react-core";
          }

          // Markdown rendering libs (heavy on blog pages)
          if (
            id.includes("react-markdown") ||
            id.includes("remark-") ||
            id.includes("rehype-")
          ) {
            return "markdown";
          }

          // Animation + sliders
          if (id.includes("framer-motion") || id.includes("swiper")) {
            return "ui-motion";
          }

          // Date + picker utilities
          if (id.includes("date-fns") || id.includes("react-datepicker")) {
            return "date-utils";
          }

          // Icons packages can be heavy
          if (id.includes("react-icons") || id.includes("lucide-react")) {
            return "icons";
          }

          // Animation/interaction libraries used outside framer/swiper
          if (
            id.includes("gsap") ||
            id.includes("@gsap/react") ||
            id.includes("canvas-confetti")
          ) {
            return "fx";
          }

          // Markdown ecosystem (secondary split for syntax stack)
          if (id.includes("remark-gfm") || id.includes("rehype-raw")) {
            return "markdown-extra";
          }

          // Everything else third-party
          return "vendor";
        },
      },
    },
  },
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
});
