// dashboard/layout.tsx
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import { PricingDialog } from "@/components/dashboard/pricing-dialog";
import { Sidebar } from "@/components/dashboard/sidebar";

export const metadata: Metadata = {
  title: {
    default: "TrendCraft AI Dashboard | Content Generation Platform",
    template: "%s | TrendCraft AI Dashboard",
  },
  description:
    "Access your AI-powered content generation dashboard. Create trending content, analyze performance, and manage your social media strategy across multiple platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trendcraft.pro/dashboard",
    title: "TrendCraft AI Dashboard | Content Generation Platform",
    description:
      "Your centralized hub for AI-powered content generation and trend analysis across social media platforms.",
    images: [
      {
        url: "https://trendcraft.pro/_next/image?url=%2Fbg.png&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "TrendCraft AI Dashboard Interface",
      },
    ],
    siteName: "TrendCraft AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrendCraft AI Dashboard | Content Generation Platform",
    description:
      "Your centralized hub for AI-powered content generation and trend analysis across social media platforms.",
    images: ["https://trendcraft.pro/_next/image?url=%2Fbg.png&w=3840&q=75"],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  alternates: {
    canonical: "https://trendcraft.pro/dashboard",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-screen w-screen">
      <PricingDialog />
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;
