import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** JSON health response for probes (dev + vite preview). */
function healthCheckPlugin() {
  const sendHealth = (_req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ status: "ok" }));
  };

  const middleware = (req, res, next) => {
    const path = req.url?.split("?")[0];
    if (path === "/health" || path === "/health/") {
      sendHealth(req, res);
      return;
    }
    next();
  };

  return {
    name: "health-check",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), healthCheckPlugin()],
  server: {
    port: 5173,
  },
});
