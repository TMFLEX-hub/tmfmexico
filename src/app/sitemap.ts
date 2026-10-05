import type { MetadataRoute } from "next";
import { electricoCategories } from "@/data/electrico";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/electrico`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...electricoCategories.map((category) => ({
      url: `${siteUrl}/electrico/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/industrial`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
