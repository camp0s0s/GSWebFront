import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Configuração Vite + React + Tailwind v4
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
});
