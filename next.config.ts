import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|ts|jsx|tsx)$/,
      exclude: [
        /node_modules/,
        /C:\\Users\\amank\\Application Data/  // <- ignore problematic path
      ],
    });
    return config;
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
