import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/terms',   destination: '/security/terms',   permanent: true },
      { source: '/privacy', destination: '/security/privacy', permanent: true },
    ]
  },
};

export default nextConfig;
