import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TITLE = "Privacy Policy | UniPact";
const DESCRIPTION =
  "Privacy Policy and Personal Data Protection Act (PDPA 2010) Notice for UniPact (SSM Registration: 202603205508). Learn how we collect, protect, and handle your data.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/privacy-policy",
  },
  openGraph: {
    title: TITLE,
    description: "Official Privacy Policy and PDPA Notice for UniPact (SSM: 202603205508).",
    type: "website",
    url: "https://www.unipact.my/privacy-policy",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar variant="simple" logoAlt="UniPact Logo" />
      <main>
        <section className="legal-section">
          <div className="container legal-container">
            <div className="legal-header">
              <h1 className="legal-title">Privacy Policy</h1>
              <p className="legal-subtitle">
                Personal Data Protection Notice in accordance with the Malaysian Personal Data Protection Act
                2010 (PDPA).
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
                <h2>1. Introduction &amp; Commitment</h2>
                <p>
                  UniPact (referred to as &quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the
                  &quot;Platform&quot;), registered under the Companies Commission of Malaysia (Suruhanjaya
                  Syarikat Malaysia - <strong>No. Pendaftaran SSM: 202603205508</strong>), is committed to
                  respecting and protecting the personal data and privacy of all users, including university
                  students, student clubs/societies, and corporate clients.
                </p>
                <p>
                  This Privacy Policy explains how we collect, process, store, disclose, and safeguard your
                  personal information in compliance with the{" "}
                  <strong>Personal Data Protection Act 2010 (&quot;PDPA&quot;)</strong> of Malaysia.
                </p>
              </div>

              <div className="legal-card">
                <h2>2. Personal Data We Collect</h2>
                <p>
                  Depending on whether you use UniPact as a student, student organization, or business partner,
                  we may collect the following personal data:
                </p>

                <h3>A. Student Applicants &amp; Freelancers</h3>
                <ul>
                  <li>
                    <strong>Identity &amp; Contact Info:</strong> Full name, email address, phone / WhatsApp
                    number, university / institution name, field of study, and expected graduation year.
                  </li>
                  <li>
                    <strong>Professional Profile:</strong> Skills, portfolio links (e.g. GitHub, Behance,
                    LinkedIn), past project experience, and weekly availability.
                  </li>
                  <li>
                    <strong>Verification &amp; Payout Data:</strong> Bank account or payment details required to
                    disburse earned milestone bounties upon completed deliverables.
                  </li>
                </ul>

                <h3>B. Companies &amp; Corporate Clients</h3>
                <ul>
                  <li>
                    <strong>Company &amp; Representative Details:</strong> Business name, company registration
                    number (if applicable), representative name, designation, corporate email address, and phone
                    number.
                  </li>
                  <li>
                    <strong>Project Details:</strong> Job descriptions, milestone specifications, deliverables
                    criteria, and escrow payment allocations.
                  </li>
                </ul>

                <h3>C. Technical &amp; Usage Data</h3>
                <ul>
                  <li>
                    IP address, browser type, device information, operating system, and interaction logs when
                    accessing our web application.
                  </li>
                </ul>
              </div>

              <div className="legal-card">
                <h2>3. Purpose of Data Collection</h2>
                <p>Your personal data is collected and processed for the following legitimate business purposes:</p>
                <ul>
                  <li>
                    Matching student developers, marketers, and campus organizations with relevant, verified
                    corporate projects.
                  </li>
                  <li>
                    Administering and executing milestone-based contracts, digital deliverables verification,
                    and escrow payouts.
                  </li>
                  <li>
                    Facilitating direct communication between clients and matched student talent regarding
                    project scope and feedback.
                  </li>
                  <li>Preventing fraud, resolving disputes, and enforcing platform integrity.</li>
                  <li>Complying with statutory and regulatory obligations under Malaysian law.</li>
                </ul>
              </div>

              <div className="legal-card">
                <h2>4. Consent &amp; Data Sharing</h2>
                <p>
                  By submitting your details on our application forms or through our platform, you explicitly
                  consent to the collection and processing of your personal data as outlined in this policy.
                </p>
                <p>
                  <strong>Third-Party Sharing:</strong> We do not sell, rent, or trade your personal data. We
                  only share information with:
                </p>
                <ul>
                  <li>
                    <strong>Verified Match Partners:</strong> Selected corporate clients receive relevant profile
                    data of matched students to coordinate milestone completion.
                  </li>
                  <li>
                    <strong>Infrastructure &amp; Processing Providers:</strong> Cloud storage, secure database
                    systems, and automation tools strictly bound by confidentiality.
                  </li>
                  <li>
                    <strong>Regulatory &amp; Law Enforcement:</strong> Government agencies or courts where
                    disclosure is required by statutory requirements in Malaysia.
                  </li>
                </ul>
              </div>

              <div className="legal-card">
                <h2>5. Data Security &amp; Retention</h2>
                <p>
                  We apply rigorous administrative and technological safeguards to prevent unauthorized access,
                  accidental loss, alteration, or disclosure of your personal data.
                </p>
                <p>
                  Your data is retained only for as long as necessary to fulfill platform matching, milestone
                  verification, escrow accounting, or until you request its deletion, subject to applicable
                  legal and financial record-keeping laws.
                </p>
              </div>

              <div className="legal-card">
                <h2>6. Your Rights Under the PDPA 2010</h2>
                <p>
                  Under the Malaysian Personal Data Protection Act 2010, you are entitled to the following
                  rights regarding your personal information:
                </p>
                <ul>
                  <li>
                    <strong>Right of Access:</strong> Request a copy of the personal data we hold about you.
                  </li>
                  <li>
                    <strong>Right of Correction:</strong> Request the correction or update of any inaccurate or
                    incomplete data.
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Withdraw your consent for future data processing
                    (subject to active contractual obligations).
                  </li>
                  <li>
                    <strong>Right to Inquire / Complain:</strong> Contact us with any questions or concerns
                    regarding our privacy practices.
                  </li>
                </ul>
              </div>

              <div className="legal-card">
                <h2>7. Contact Us</h2>
                <p>
                  If you have any questions, requests, or concerns regarding this Privacy Policy or your
                  personal data, please contact our Data Protection representative:
                </p>
                <div className="contact-box">
                  <p>
                    <strong>UniPact</strong>
                  </p>
                  <p>
                    No. Pendaftaran SSM: <strong>202603205508</strong>
                  </p>
                  <p>
                    Email: <a href="mailto:unipact.my@gmail.com">unipact.my@gmail.com</a> /{" "}
                    <a href="mailto:azizi.sahari@unipact.com.my">azizi.sahari@unipact.com.my</a>
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
