import type { MetadataRoute } from "next"
import { SITE } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/", disallow: ["/studio", "/api/"] },
      // Seznam.cz – klíčový český vyhledávač
      { userAgent: "SeznamBot", allow: "/", disallow: ["/studio", "/api/"] },
      { userAgent: "*", allow: "/", disallow: ["/studio", "/api/"] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
