import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.resilienz-akademie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ahealthylife.nl",
        port: "",
        pathname: "/**",
      },
    ],
    // Alternatif: domains array kullan
    domains: [
      "www.ahealthylife.nl",
      "images.unsplash.com",
      "www.resilienz-akademie.com",
    ],
  },
};

export default withNextIntl(nextConfig);
