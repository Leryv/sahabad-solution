import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sahabadsolution.web.id/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["https://sahabadsolution.web.id/image.png"],
    },
  ];
}
