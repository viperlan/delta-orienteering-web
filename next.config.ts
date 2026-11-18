import type { NextConfig } from "next";

// GitHub Pages sirve archivos estáticos dentro de /delta-orienteering-web.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/delta-orienteering-web" : "";

const nextConfig: NextConfig = {
  /* config options here */
  ...(isGitHubPages && {
    output: "export",
    basePath,
    images: { unoptimized: true },
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  experimental: {
    agentFeedback: true,
  },
  // La exportación estática no admite estas dos funciones.
  cacheComponents: !isGitHubPages,
  partialPrefetching: !isGitHubPages,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
