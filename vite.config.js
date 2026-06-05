import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ditty-20260605-4t51wk/",
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3001,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 3001,
    allowedHosts: true,
  },
});
