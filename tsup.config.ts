import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: {
    constants: "src/constants.ts",
    index: "src/index.ts",
    types: "src/types/index.ts",
  },
  format: ["cjs", "esm", "iife"],
  minify: isProduction,
  sourcemap: true,
});
