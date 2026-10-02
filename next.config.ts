import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages deployment (gh-pages branch serves out/)
  output: "export",
  // Repo is served from the /Coreline/ subpath on GitHub Pages project sites
  basePath: "/Coreline",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
