import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@redux": resolve(__dirname, "./src/redux"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@features": resolve(__dirname, "./src/features"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    // https: true,     // Optional: Uncomment to enable HTTPS
  },
});
