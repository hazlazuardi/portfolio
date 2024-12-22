import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Match all routes
        destination: "/kopken", // Redirect to /kopken
        permanent: false, // Temporary redirect
      },
    ];
  },
};

export default nextConfig;
