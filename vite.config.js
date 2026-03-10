import { copyFileSync, cpSync, mkdirSync } from "fs";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default {
  plugins: [
    cssInjectedByJsPlugin(),
    {
      name: "copy-public-to-dist",
      closeBundle() {
        cpSync("public/assets", "dist/assets", { recursive: true });
        mkdirSync("dist/config", { recursive: true });
        copyFileSync("public/config/site-config.json", "dist/config/site-config.json");
      },
    },
  ],
  build: {
    lib: {
      entry: "src/index.js",
      name: "SiteShell",
      formats: ["iife"],
      fileName: () => "site-shell.js",
    },
  },
};
