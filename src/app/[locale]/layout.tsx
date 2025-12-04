import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Groeipunt - Diagnostiek en behandeling van psychische klachten",
  description:
    "Vanuit servicegerichte praktijken bieden enthousiaste psychologen, vaktherapeuten en psychiaters behandeling voor volwassenen.",
  keywords:
    "psychologie, psychiatrie, behandeling, volwassenen, angst, depressie, trauma",
  manifest: "/manifest.json",
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = "${locale}";`,
        }}
      />
      <NextIntlClientProvider messages={messages} locale={locale}>
        <NavBar />
        <main className="pt-20">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
