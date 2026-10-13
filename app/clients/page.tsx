import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import ClientLandingSections from "@/components/ClientLandingSections";
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
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "UniPact",
      url: "https://www.unipact.my/",
      logo: "https://www.unipact.my/logo.png",
      description: "Milestone-based remote talent matching platform.",
    },
    {
      "@type": "Service",
      name: "Cross-Border Milestone Talent Matching",
      provider: {
        "@type": "Organization",
        name: "UniPact",
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <ClientLandingSections caseStudies={caseStudies} />
      <SiteFooter />
    </>
  );
}
