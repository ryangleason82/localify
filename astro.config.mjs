import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Astro generates a sitemap by default
// However, Astro needs to know your site domain to generate canonical links
// Update your astro.config.mjs by adding a "buildOptions.site" setting

// https://astro.build/config
export default defineConfig({
  site: "https://skeleton.ggilabs.com",
  integrations: [tailwind({ config: { applyBaseStyles: false } }), sitemap()],
});
