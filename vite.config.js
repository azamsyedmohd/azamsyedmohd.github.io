import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/smohdazam.github.io/",
  plugins: [react()],
  esbuild: {
    jsx: "react",
  },
  build: {
    outDir: "dist",
  },
});
