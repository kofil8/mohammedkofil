import react from "@vitejs/plugin-react";
import { inspectAttr } from "kimi-plugin-inspect-react";
import path from "path";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    inspectAttr(),
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
    host: true,
  },
  build: {
    target: "es2018",
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/react")) return "react-vendor";
          if (id.includes("node_modules/framer-motion")) return "framer-motion";
          if (id.includes("node_modules/@radix-ui")) return "radix-ui";
          if (id.includes("src/sections")) return "sections";
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: false,
  },
});
