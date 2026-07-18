// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bhavya11289-ai.github.io",
  base: "/BhavyaSathi-devportfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});
