import type { MetadataRoute } from "next";
import { resources, services } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = "https://travokeys.co.za";
  return [
    { url: root, changeFrequency: "monthly", priority: 1 },
    { url: `${root}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${root}/contact`, changeFrequency: "monthly", priority: 0.7 },
    ...services.map((service) => ({ url: `${root}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${root}/resources`, changeFrequency: "monthly", priority: 0.8 },
    ...resources.map((article) => ({ url: `${root}/resources/${article.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${root}/tools`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${root}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${root}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
