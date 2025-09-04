import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.angelkellogg.com"

  const staticPages = [
    "/",
    "/content",
    "/videos",
    "/podcast",
    "/blog",
    "/projects",
    "/community",
    "/brgr-collective",
    "/forever-docs",
    "/business-partners",
    "/events",
    "/media-kit",
    "/contact",
    "/join",
    "/privacy",
    "/terms",
    "/about",
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }))
}
