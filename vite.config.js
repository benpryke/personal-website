import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
    reporters: ["verbose"],
  },
  plugins: [react()],
});
