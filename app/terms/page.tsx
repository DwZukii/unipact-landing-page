import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TITLE = "Terms of Service | UniPact";
const DESCRIPTION =
  "Terms of Service for UniPact (SSM: 202603205508) - Milestone-based student freelance and corporate activation platform.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/terms",
  },
  openGraph: {
    title: TITLE,
    description: "Terms of Service for UniPact (SSM: 202603205508).",
    type: "website",
    url: "https://www.unipact.my/terms",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar variant="simple" logoAlt="UniPact Logo" />
      <main>
        <section className="legal-section">
          <div className="container legal-container">
            <div className="legal-header">
              <h1 className="legal-title">Terms of Service</h1>
              <p className="legal-subtitle">
                Agreement governing the use of the UniPact platform, milestone escrow, and deliverables
                verification.
              </p>
              <div className="legal-badge">
                <span>
                  <strong>Entity:</strong> UniPact
                </span>
                <span>
                  <strong>No. Pendaftaran SSM:</strong> 202603205508
                </span>
                <span>
                  <strong>Effective Date:</strong> September 2026
                </span>
              </div>
            </div>

            <div className="legal-body">
              <div className="legal-card">
                <h2>1. Agreement to Terms</h2>
                <p>
                  These Terms of Service constitute a legally binding agreement between you (&quot;User&quot;,
                  whether a Company or Student) and <strong>UniPact</strong> (SSM Registration No.:{" "}
                  <strong>202603205508</strong>). By accessing or using the UniPact website, posting job briefs,
                  or applying for project milestones, you agree to be bound by these Terms.
                </p>
              </div>

              <div className="legal-card">
                <h2>2. Description of Services</h2>
                <p>
                  UniPact operates a specialized matching and milestone governance platform connecting verified
                  corporate brands with university student talent and student organizations in Malaysia.
                  Services include:
                </p>
                <ul>
                  <li>
                    <strong>Talent Matching:</strong> Direct curation of student developers and marketers matched
                    to specific corporate project briefs.
                  </li>
                  <li>
                    <strong>Milestone-Based Escrow:</strong> Securing project funds prior to milestone kickoff
                    and releasing payments only upon verified proof of work.
                  </li>
                  <li>
                    <strong>Verified Portfolio Ledgers:</strong> Creation of permanent digital execution records
                    for student contributors.
                  </li>
                </ul>
              </div>

              <div className="legal-card">
                <h2>3. User Roles &amp; Responsibilities</h2>
                <h3>A. Companies / Corporate Clients</h3>
                <ul>
                  <li>
                    Must provide accurate project scopes, clear acceptance criteria, and transparent milestone
                    deadlines.
                  </li>
                  <li>Agree to deposit agreed milestone funds into escrow before work commences.</li>
                  <li>
                    Must review completed deliverables within the designated review window (typically 3
                    business days) or request specific revisions aligned with the original brief.
                  </li>
                </ul>

                <h3>B. Student Talent &amp; Student Clubs</h3>
                <ul>
                  <li>
                    Operate as independent contractors and retain full responsibility for the quality and
                    timeliness of deliverables.
                  </li>
                  <li>Must submit original, non-infringing work that complies with company guidelines.</li>
                  <li>
                    Agree that platform deliverables build toward a verified public or private impact ledger.
                  </li>
                </ul>
              </div>

              <div className="legal-card">
                <h2>4. Escrow, Payouts &amp; Disputes</h2>
                <p>
                  Funds committed to a milestone are held in platform escrow. When a student delivers work
                  conforming to the agreed specification and the client approves (or the dispute-free inspection
                  window elapses), funds are released to the student.
                </p>
                <p>
                  In the event of a deliverable dispute, UniPact acts as an objective mediator reviewing the
                  digital ledger of deliverables against the initial job scope to determine fair allocation or
                  refund of escrowed amounts.
                </p>
              </div>

              <div className="legal-card">
                <h2>5. Intellectual Property</h2>
                <p>
                  Upon full release of milestone funds from escrow, all agreed intellectual property, source
                  code, design assets, and marketing collateral transfer to the client company, unless
                  explicitly stated otherwise in the project brief. The student retains the right to reference
                  the project in their personal portfolio.
                </p>
              </div>

              <div className="legal-card">
                <h2>6. Governing Law &amp; Jurisdiction</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of Malaysia. Any
                  dispute arising out of or in connection with these Terms shall be subject to the exclusive
                  jurisdiction of the courts of Malaysia.
                </p>
              </div>

              <div className="legal-card">
                <h2>7. Contact Information</h2>
                <div className="contact-box">
                  <p>
                    <strong>UniPact</strong>
                  </p>
                  <p>
                    No. Pendaftaran SSM: <strong>202603205508</strong>
                  </p>
                  <p>
                    Email: <a href="mailto:unipact.my@gmail.com">unipact.my@gmail.com</a>
                  </p>
                  <p>Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="simple" />
    </>
  );
}
