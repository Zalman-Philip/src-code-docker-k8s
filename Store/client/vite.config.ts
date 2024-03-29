import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      // strictPort: true,
      port: 3000,
    },
    base: "store",
    build: {
      chunkSizeWarningLimit: 2000, // Set the desired limit in kilobytes
    },
  };
});
