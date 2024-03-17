import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "src/views"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@langs": path.resolve(__dirname, "./src/langs/langs"),
    },
  }
});
