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
    default: "Olamide Titus | Operations & Support Specialist",
    template: "%s | Olamide Titus"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "operations specialist",
    "remote support specialist",
    "virtual assistant",
    "customer support remote",
    "executive assistant remote",
    "admin support specialist"
  ],
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: "Olamide Titus | Operations & Support Specialist",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: absoluteUrl("/assets/logo.png"),
        width: 1200,
        height: 630,
        alt: "Olamide Titus — Operations & Support Specialist"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Olamide Titus | Operations & Support Specialist",
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
