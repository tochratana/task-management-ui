import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["simplenote.com"],
  },
  // other config if needed
};

// ✅ Wrap your config with PWA support
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: isDev,
  workboxOptions: {
    skipWaiting: true, // moved here
    clientsClaim: true, // recommended
  },
});

export default withPWA(nextConfig);
