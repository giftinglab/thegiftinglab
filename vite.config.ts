import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss()
  ],

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: true,

    // IMPORTANT: forces static SPA build (removes SSR complexity)
    ssr: false,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"]
        }
      }
    }
  },

  server: {
    port: 5173,
    strictPort: true
  },

  preview: {
    port: 5173
  }
});
