import type { MetadataRoute } from "next";

const BASE_URL = "https://www.unipact.my";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/clients",
    "/sme",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  return staticRoutes;
}
