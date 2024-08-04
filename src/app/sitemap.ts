import { MetadataRoute } from "next";
import { getAllPosts } from "./_lib/post-utils";
import { Post } from "./_types/interfaces";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPosts();

  const baseUrl = "https://arvacay.com";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/resources`,

      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const dynamicPages = pages.data.map((page: Post) => {
    return {
      url: `${baseUrl}/blog/${page.slug}`,
      lastModified: page.dateModified.split("T")[0],
      changeFrequency: "yearly",
      priority: 0.5,
    };
  });

  return [...staticPages, ...dynamicPages];
}
