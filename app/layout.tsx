import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { StructuredData } from "@/components/structured-data";
import { organizationSchema, websiteSchema } from "@/lib/seo-data";
import { absoluteUrl, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Perpetual Dev | Web Design, SEO & Business Websites",
    template: "%s | Perpetual Dev"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "web design agency",
    "business website design",
    "SEO optimization",
    "booking website design",
    "Google Business Profile optimization",
    "small business website design"
  ],
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: "Perpetual Dev | Web Design, SEO & Business Websites",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: absoluteUrl("/assets/logo.png"),
        width: 1200,
        height: 630,
        alt: "Perpetual Dev"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Perpetual Dev | Web Design, SEO & Business Websites",
    description: siteConfig.description,
    images: [absoluteUrl("/assets/logo.png")]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/assets/logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
