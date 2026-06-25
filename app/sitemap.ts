import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";

const baseUrl = "https://9youngknit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/products",
    "/custom-manufacturing",
    "/fabrics-techniques",
    "/production-workflow",
    "/about",
    "/contact",
  ];

  return [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/products/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
