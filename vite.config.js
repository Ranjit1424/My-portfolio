import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/My-portfolio",
  build: {
    // Relax the warning threshold so you only see it for very large chunks.
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor_react';
            }
            if (id.includes('three')) {
              return 'vendor_three';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
