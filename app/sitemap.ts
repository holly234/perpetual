import type { MetadataRoute } from "next";
import { blogPosts, seoServices } from "@/lib/seo-data";
import { projects } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/services", "/industries", "/projects", "/blog", "/training", "/contact"];
  const serviceRoutes = seoServices.map((service) => `/services/${service.slug}`);
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.9 : 0.7
  }));
}

