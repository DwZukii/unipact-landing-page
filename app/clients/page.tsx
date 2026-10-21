import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { SOCIAL_IMAGE } from "@/lib/site";
import JsonLd from "@/components/site/JsonLd";
import { providerRef } from "@/lib/schema";
import ClientsContent from "@/components/landing/ClientsPage";
import { client } from "@/lib/sanity/client";
import { CASE_STUDIES_QUERY, type CaseStudy } from "@/lib/sanity/queries";

const TITLE = "Hire Vetted Remote Developers & Creators | UniPact for Global Clients";
const DESCRIPTION =
  "Outsource software development and video editing to the top 1% vetted university talent in Malaysia. Save 70% vs Western agency rates. 100% milestone escrow-secured.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/clients",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/clients",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Cross-Border Milestone Talent Matching",
      provider: providerRef,
      serviceType: "Software Development & Video Production",
      areaServed: ["US", "GB", "SG", "AU", "Global"],
      description: DESCRIPTION,
    },
  ],
};

export const revalidate = 60; // revalidate every minute

export default async function ClientsPage() {
  let caseStudies: CaseStudy[] = [];
  try {
    caseStudies = await client.fetch(CASE_STUDIES_QUERY);
  } catch (error) {
    console.error("Sanity fetch error (falling back to hardcoded proof):", error);
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteNav />
      <ClientsContent caseStudies={caseStudies} />
      <SiteFooter />
    </>
  );
}
