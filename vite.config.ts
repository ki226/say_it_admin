import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  server: {
    host: true, // 외부 접속 허용 (기본적으로 localhost만 허용)
    allowedHosts: [],
    port: 3000,
    watch: {
      usePolling: true,
    },
    hmr: true,
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      {
        find: /^\/src\/assets\/(.+)/,
        replacement: "/src/assets/$1",
      },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
      },
    },
  },
});
