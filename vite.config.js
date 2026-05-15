import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

/** Serve the home page at `/` instead of only `/pages/index.html` (dev + preview). */
function rootToHomePlugin() {
  const rewrite = (req) => {
    const raw = req.url ?? "";
    const q = raw.includes("?") ? raw.slice(raw.indexOf("?")) : "";
    const pathname = raw.split("?")[0] ?? "";
    if (pathname === "/" || pathname === "/index.html") {
      req.url = "/pages/index.html" + q;
    }
  };
  return {
    name: "rewrite-root-to-pages-index",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), rootToHomePlugin()],

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