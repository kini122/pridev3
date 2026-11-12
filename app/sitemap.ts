import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prideeventz.in"
  const now = new Date()

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/corporate-events", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/destination-weddings", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/concerts", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/conferences-mice", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/exhibitions", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/brand-activation", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/rural-marketing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/clients", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  return routes.map((r) => ({
    url: `${baseUrl}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}

