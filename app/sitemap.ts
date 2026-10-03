import type { MetadataRoute } from "next";
import { pseoPages } from "@/lib/pseo-data";

const BASE_URL = "https://www.unipact.my";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/clients",
    "/sme",
    "/apply-company",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const pseoRoutes = pseoPages.map((entry) => ({
    url: `${BASE_URL}/${entry.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...pseoRoutes];
}
