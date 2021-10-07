import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import { join } from "path";

export default defineConfig({
  envDir: join(process.cwd()),
  plugins: [
    Vue(),
    WindiCSS({
      config: {
        darkMode: "class",
      },
    }),
  ],
});
