// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://djkde01.github.io/astro-linktree/",
  base: "/astro-linktree/",
});
