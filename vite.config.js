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
