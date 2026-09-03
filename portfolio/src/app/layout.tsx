import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "@/app/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.tagline,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
