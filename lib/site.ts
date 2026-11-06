import type { Metadata } from "next";

export const siteConfig = {
  name: "Olamide Titus",
  legalName: "Olamide Titus",
  description:
    "Web & Mobile Developer. High-converting contractor funnels, seasonal landing pages, and web systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://perpetualdevs.com",
  email: "olamidetituswork@gmail.com",
  phone: "07039742741",
  logo: "/assets/logo.png",
  photo: "/assets/profile.jpg",
  cv: "/assets/olamide-titus-cv.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/olamide-titus",
    whatsapp: "https://wa.me/2347039742741",
    instagram: "https://www.instagram.com/olamidetitus",
    facebook: "https://www.facebook.com/olamidetitus"
  },
  tagline: "Web & Mobile Developer",
  markets: ["United States", "United Kingdom", "Canada", "Australia", "Worldwide"]
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
