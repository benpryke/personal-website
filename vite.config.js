import postcssGlobalData from "@csstools/postcss-global-data"
import react from "@vitejs/plugin-react"
import postcssCustomMedia from "postcss-custom-media"
import { defineConfig, lazyPlugins } from "vite-plus"

export default defineConfig({
  base: "/",
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ["./src/styles/media-queries.css"],
        }),
        postcssCustomMedia(),
      ],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
    reporters: ["verbose"],
  },
  plugins: lazyPlugins(() => [react()]),
})
