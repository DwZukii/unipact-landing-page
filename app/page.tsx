import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import HomeContent from "@/components/home/HomePage";

const TITLE = "UniPact | Vetted Student Teams for Software & Marketing";
const DESCRIPTION =
  "Websites, business systems and social content built by verified Malaysian university students. Team proposed in 48 hours. Pay per approved milestone.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/",
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
      description:
        "UniPact builds websites, business systems and social media content for companies, using vetted teams of Malaysian university students.",
    },
    {
      "@type": "WebSite",
      name: "UniPact",
      url: "https://www.unipact.my/",
    },
  ],
};

import { client } from "@/lib/sanity/client";
import { CASE_STUDIES_QUERY, type CaseStudy } from "@/lib/sanity/queries";

export const revalidate = 60; // revalidate at most once every minute

export default async function HomePage() {
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
      <HomeContent caseStudies={caseStudies} />
      <SiteFooter />
    </>
  );
}

