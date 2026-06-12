import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mapbox | Maps, Navigation, Search, and Data",
  description:
    "APIs and SDKs for AI-powered maps, location search, turn-by-turn navigation, and geospatial data in mobile or web apps. Get started for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[var(--mbx-bg)] antialiased">{children}</body>
    </html>
  );
}
