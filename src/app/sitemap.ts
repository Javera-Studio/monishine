import type { MetadataRoute } from "next";
import { serviceCategories } from "@/content/serviceCategories";

const BASE_URL = "https://monishine.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/leistungen`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/preise`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ueber-mich`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/schulungen`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/impressum`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/datenschutz`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = serviceCategories
    .filter((c) => c.published !== false && !c.href)
    .map((c) => ({
      url: `${BASE_URL}/leistungen/${c.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticRoutes, ...categoryRoutes];
}
