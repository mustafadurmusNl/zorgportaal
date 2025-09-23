import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { Footer, NavBar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad - Diagnostiek en behandeling van psychische klachten",
  description:
    "Vanuit servicegerichte praktijken bieden enthousiaste psychologen, vaktherapeuten en psychiaters behandeling voor volwassenen.",
  keywords:
    "psychologie, psychiatrie, behandeling, volwassenen, angst, depressie, trauma",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Import messages directly based on locale
  const messages = await import(`../../../messages/${locale}.json`).then(
    (module) => module.default
  );

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavBar />
          <main className="pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
