import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { execSync } from "child_process";

const commitYear = execSync("git log -1 --format=%cd --date=format:%Y")
  .toString()
  .trim();

export default defineConfig({
  base: "/", // 👈 REQUIRED for GitHub Pages
  define: {
    __LAST_UPDATE_YEAR__: JSON.stringify(commitYear),
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
          "sortAttrs",
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
            },
          },
        ],
      },
    }),
  ],
});

