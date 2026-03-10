import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AITRONA — AI Agents for WhatsApp, Instagram & Calls",
    template: "%s — AITRONA"
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI agents",
    "WhatsApp bot",
    "Instagram DM automation",
    "AI call receptionist",
    "voice AI",
    "appointment booking",
    "customer support automation",
    "personal AI assistant"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AITRONA — AI Agents That Talk Like Humans",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AITRONA — AI Agents That Talk Like Humans",
    description: site.description
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}

