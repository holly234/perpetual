import type { Metadata } from "next";

export const siteConfig = {
  name: "Olamide Titus",
  legalName: "Olamide Titus",
  description:
    "Olamide Titus is an Operations & Support Specialist delivering fast customer care, executive admin support, and web system automation for remote teams worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://perpetualdev.com",
  email: "olamidetitus2@gmail.com",
  phone: "07039742741",
  logo: "/assets/logo.png",
  photo: "/assets/profile.jpg",
  cv: "/assets/olamide-titus-cv.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/olamide-titus",
    whatsapp: "https://wa.me/2347039742741"
  },
  tagline: "Operations & Support Specialist",
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

