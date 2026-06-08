import type { MetadataRoute } from "next";
import { industries, seoServices } from "@/lib/seo-data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/projects", "/contact", "/services", "/industries"];
  const serviceRoutes = seoServices.map((service) => `/services/${service.slug}`);
  const industryRoutes = industries.map(([slug]) => `/industries/${slug}`);

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/projects" ? 0.9 : route.startsWith("/services") ? 0.85 : 0.7
  }));
}
