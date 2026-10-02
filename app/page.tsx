import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSections from "@/components/HomeSections";

const TITLE = "UniPact | Paid Student Work, Matched and Verified";
const DESCRIPTION =
  "Post a Software Development or Digital Marketing project for free. UniPact hand-picks a team of verified Malaysian university students, you approve the match, and payment releases from escrow milestone by milestone.";

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
      description: "UniPact matches companies with verified students for paid, milestone-based work.",
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
      <Navbar variant="full" />
      <HomeSections caseStudies={caseStudies} />
      <Footer variant="full" />
    </>
  );
}

