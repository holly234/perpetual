import type { MetadataRoute } from "next";
import { blogPosts, industries, seoServices } from "@/lib/seo-data";
import { projects } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/services", "/industries", "/projects", "/blog", "/contact"];
  const serviceRoutes = seoServices.map((service) => `/services/${service.slug}`);
  const industryRoutes = industries.map(([slug]) => `/industries/${slug}`);
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...projectRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.9 : 0.7
  }));
}
