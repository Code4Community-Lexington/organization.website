import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.code4community.dev",
  trailingSlash: "never",
  base: process.env.NODE_ENV === "production" ? "/" : "",
  integrations: [tailwind(), react()],
});
