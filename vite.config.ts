import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      },
      esbuildOptions: {},
      include: "**/*.svg?react", // Tùy chọn, giúp xác định các tệp SVG nào nên được chuyển đổi
      exclude: "", // Tùy chọn, giúp xác định các tệp SVG nào không nên được chuyển đổi
    }),
  ],
});
