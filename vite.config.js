import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    open: true,
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,

    rollupOptions: {
      input: {
        main: "pages/index.html",
        verify: "pages/verify.html",
        retail: "pages/retail.html",
        enterprise: "pages/enterprise.html",
        contact: "pages/contact.html",
      },
    },
  },

  css: {
    devSourcemap: true,
  },
});