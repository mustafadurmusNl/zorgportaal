import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Dutch locale: Dutch URLs → English folders
      {
        source: "/nl/over-ons/:path*",
        destination: "/nl/about/:path*",
      },
      {
        source: "/nl/zorgaanbod/:path*",
        destination: "/nl/services/:path*",
      },
      // English locale: Dutch URLs → English folders (for backward compatibility)
      {
        source: "/en/over-ons/:path*",
        destination: "/en/about/:path*",
      },
      {
        source: "/en/zorgaanbod/:path*",
        destination: "/en/services/:path*",
      },
      // English locale: English URLs → English folders (clean URLs)
      {
        source: "/en/about/:path*",
        destination: "/en/about/:path*",
      },
      {
        source: "/en/services/:path*",
        destination: "/en/services/:path*",
      },
    ];
  },
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
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        source: "/fav-icon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        source: "/icon-:size.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
          {
            key: "Content-Type",
            value: "application/manifest+json",
          },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
          {
            key: "Content-Type",
            value: "application/manifest+json",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
