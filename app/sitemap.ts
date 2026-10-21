import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// No lastModified on purpose: stamping every URL with the build time tells Google nothing
// real, and it learns to ignore the field. Add real dates per URL when there are any.
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/clients", "/sme", "/team", "/pelajar", "/pelajar/pembangun", "/pelajar/kreator", "/privacy-policy", "/terms"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
