import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@services": resolve(__dirname, "./src/services"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@types": resolve(__dirname, "./src/types"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@redux": resolve(__dirname, "./src/redux"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@features": resolve(__dirname, "./src/features"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    host: "0.0.0.0",
  },
});
