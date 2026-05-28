import type { Metadata } from "next";

export const siteConfig = {
  name: "Perpetual Dev",
  legalName: "Perpetual Dev",
  description:
    "Perpetual Dev designs and builds premium business websites, booking websites, SEO-ready pages and web systems for companies worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://perpetualdev.com",
  email: "perpetualdev2@gmail.com",
  logo: "/assets/logo.png",
  social: {
    instagram: "https://www.instagram.com/perpetual_devs",
    tiktok: "https://www.tiktok.com/@perpetual_devs"
  },
  markets: ["United States", "United Kingdom", "Canada", "Australia", "Germany", "Worldwide"]
};

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const nextPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${nextPath}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.logo,
  type = "website"
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

