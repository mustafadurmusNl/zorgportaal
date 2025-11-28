import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groeipunt - Professional Psychological Care",
  description:
    "Professional psychological treatment and support services for adults in the Netherlands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
