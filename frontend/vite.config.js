import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/Components/common"),
      "@layout": path.resolve(__dirname, "src/Components/layout"),
      "@pages": path.resolve(__dirname, "src/Components/pages"),
      "@routes": path.resolve(__dirname, "src/Components/routes"),
      "@context": path.resolve(__dirname, "src/context"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
});
