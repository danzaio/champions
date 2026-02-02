import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/champions',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
