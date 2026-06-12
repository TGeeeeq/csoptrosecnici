import type { MetadataRoute } from "next"
import { SITE } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/locations", "/projects", "/karel", "/letter", "/gallery", "/contact", "/privacy"]
  const now = new Date()
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
