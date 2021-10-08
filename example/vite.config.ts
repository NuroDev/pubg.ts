import { defineConfig } from "vite";
import { join } from "path";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import WindiCSSColors from "windicss/colors";
import WindiCSSPluginFilters from "windicss/plugin/filters";

export default defineConfig({
  envDir: join(process.cwd()),
  plugins: [
    Vue(),
    WindiCSS({
      config: {
        darkMode: "class",
        plugins: [WindiCSSPluginFilters],
        theme: {
          extend: {
            colors: {
              gray: WindiCSSColors.trueGray,
            },
          },
        },
      },
    }),
  ],
});
