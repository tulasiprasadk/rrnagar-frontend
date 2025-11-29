import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Ensure assets are referenced from the site root (no /rrnagar-frontend/ prefix)
  base: "/",
  plugins: [react()],
});
