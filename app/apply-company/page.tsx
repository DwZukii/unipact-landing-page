import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyApplicationForm from "@/components/CompanyApplicationForm";

const TITLE = "Hire Student Developers & Marketers in Malaysia | UniPact";
const DESCRIPTION =
  "Post a project for free and get matched with a hand-picked team of verified Malaysian university students for software development or digital marketing work. Pay per milestone via escrow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/apply-company",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/apply-company",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Student Freelance Hiring",
  provider: {
    "@type": "Organization",
    name: "UniPact",
  },
  description: "Post a paid job and get matched with a verified, best-fit student.",
};

export default function ApplyCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="simple" />
      <main>
        <section className="company-section">
          <div className="container">
            <div className="company-grid">
              <div className="company-pitch">
                <p className="eyebrow">
                  <span className="eyebrow-dot"></span>For companies
                </p>
                <h1>Post the project. We match the team.</h1>
                <p>
                  Skip the applicant pile. Tell us the scope and the budget &mdash; UniPact hand-picks a team of
                  verified students, you approve them before work starts, and escrow handles the rest.
                </p>

                <ul className="feature-list">
                  <li>Post a fixed-scope project for free, as many as you need</li>
                  <li>Review the proposed team and their portfolios before approving</li>
                  <li>Share briefs and raw assets in a secure files vault</li>
                  <li>Pay per milestone, held in escrow until work is verified</li>
                  <li>Rate the team and download a project report</li>
                </ul>
              </div>

              <div className="company-form">
                <CompanyApplicationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="simple" />
    </>
  );
}
