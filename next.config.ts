import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upbeat-stoat-959.convex.cloud" },
      { protocol: "https", hostname: "wary-anaconda-29.convex.cloud" },
      { protocol: "https", hostname: "intent-giraffe-122.convex.cloud" },
      { protocol: "https", hostname: "quirky-squid-716.convex.cloud" }, 
    ],
  },
};

export default nextConfig;
