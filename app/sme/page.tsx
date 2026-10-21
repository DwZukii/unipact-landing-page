import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { SOCIAL_IMAGE } from "@/lib/site";
import JsonLd from "@/components/site/JsonLd";
import { providerRef } from "@/lib/schema";
import SmeContent from "@/components/landing/SmePage";

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
      name: "Short-Form Video Production & Tech Bounties for Malaysian SMEs",
      provider: providerRef,
      serviceType: "Video Production, Social Media Marketing & Software Development",
      areaServed: "Malaysia",
      description: DESCRIPTION,
    },
  ],
};

export default function SmePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteNav />
      <SmeContent />
      <SiteFooter />
    </>
  );
}
