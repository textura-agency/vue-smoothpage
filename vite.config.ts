import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ["src/SmoothPage/**/*.vue", "src/**/*.ts"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ["vite.config.ts", "src/main.ts"],
      },
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/SmoothPagePlugin.ts",
      formats: ["es", "cjs"],
      name: "SmoothPage",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue", "pinia"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    dedupe: [
      'vue'
    ]
  },
});