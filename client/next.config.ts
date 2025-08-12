import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
