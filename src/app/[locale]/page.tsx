import { Hero, Services, Locations, Team } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groeipunt - Diagnostiek en behandeling van psychische klachten",
  description:
    "Vanuit servicegerichte praktijken bieden enthousiaste psychologen, vaktherapeuten en psychiaters behandeling voor volwassenen.",
  icons: {
    icon: [
      { url: "/fav-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    shortcut: "/fav-icon.png",
    apple: [{ url: "/fav-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Homepage sections - Auto-deployed via Vercel */}
      <Hero />
      <Services />
      <Locations />
      <Team />
    </div>
  );
}
