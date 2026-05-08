import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output bundles only required dependencies for production.
  // This is the recommended mode for Node.js server deployments (IIS, Docker, etc.)
  output: "standalone",
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
