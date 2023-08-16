import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/responsive_dark_mode/",
  };

  if (command !== "serve") {
    config.base = "/responsive_dark_mode/";
  }

  return config;
});
