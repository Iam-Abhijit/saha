import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "imgs.ogaanindia.com" },
      { protocol: "https", hostname: "www.royalexport.in" },
      { protocol: "https", hostname: "www.roopdarshan.co.nz" },
      { protocol: "https", hostname: "www.kraftindia.in" },
      { protocol: "https", hostname: "resources.indianclothstore.com" },
      { protocol: "https", hostname: "ambiyaonline.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
