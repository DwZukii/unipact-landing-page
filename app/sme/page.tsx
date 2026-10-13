import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import SmeLandingSections from "@/components/SmeLandingSections";
import { client } from "@/lib/sanity/client";
import { CASE_STUDIES_QUERY, type CaseStudy } from "@/lib/sanity/queries";

const TITLE = "Viral Short-Form Video & Tech for Malaysian SMEs | UniPact";
const DESCRIPTION =
  "Access verified Malaysian university creators and developers. On-site shoots, 48-72h turnaround, viral TikTok & Reels packages without expensive agency retainers. SSM: 202603205508.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/sme",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/sme",
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
      description: "University creative and tech talent matching platform in Malaysia.",
    },
    {
      "@type": "Service",
      name: "Short-Form Video Production & Tech Bounties for Malaysian SMEs",
      provider: {
        "@type": "Organization",
        name: "UniPact",
      },
      serviceType: "Video Production, Social Media Marketing & Software Development",
      areaServed: "Malaysia",
      description: DESCRIPTION,
    },
  ],
};

export const revalidate = 60; // revalidate every minute

export default async function SmePage() {
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
      <SmeLandingSections caseStudies={caseStudies} />
      <SiteFooter />
    </>
  );
}
