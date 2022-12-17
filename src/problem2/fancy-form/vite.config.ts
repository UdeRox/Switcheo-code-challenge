import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
      { find: "@", replacement: resolve(__dirname, "./src/") },
    ],
  },
  server: {
    host: true,
    port: 3003,
  },
});
