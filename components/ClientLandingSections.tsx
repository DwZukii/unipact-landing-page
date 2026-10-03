"use client";

import Link from "next/link";
import CompanyCta from "./CompanyCta";
import Faq from "./Faq";
import type { CaseStudy } from "@/lib/sanity/queries";

export function scrollToSectionId(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbar = document.querySelector(".navbar") as HTMLElement | null;
    const navHeight = navbar?.offsetHeight ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: sectionTop - navHeight - 20,
      behavior: "smooth",
    });
  }
}

const CLIENT_FAQS = [
  {
    question: "How does the milestone escrow protect my company?",
    answer:
      "You never pay upfront to an unverified contractor. When a milestone is agreed upon, your payout is deposited safely into platform escrow. The student talent begins work, and funds are only released to them once you test, inspect, and approve the verified deliverable.",
  },
  {
    question: "Are the students fluent in English?",
    answer:
      "Yes. Malaysia is ranked among the highest English-proficiency countries in Asia (EF EPI High Proficiency). All student developers and creators on UniPact undergo rigorous communication vetting and produce clean English documentation, commit messages, and video scripts.",
  },
  {
    question: "How do timezones work for US, UK, and European clients?",
    answer:
      "We operate on an asynchronous-first execution rhythm. You post instructions or feedback in your evening, and our teams build while you sleep, delivering working code and videos by your morning. For Singapore and Australian clients, we share virtually identical working hours.",
  },
  {
    question: "Who owns the Intellectual Property (IP) and source code?",
    answer:
      "You do. 100%. Upon final milestone sign-off and escrow release, all source code, repository access, design files, and raw media assets are transferred entirely to your company.",
  },
  {
    question: "What if a deliverable does not match the agreed brief?",
    answer:
      "Because payouts are tied to clear, predefined milestone criteria, the student is obligated to revise the deliverable until it satisfies the brief. If work is unfulfilled or abandoned, your escrow funds are refunded.",
  },
];

export default function ClientLandingSections({
  caseStudies = [],
}: {
  caseStudies?: CaseStudy[];
}) {
  const primaryStudy = caseStudies && caseStudies.length > 0 ? caseStudies[0] : null;

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>For Global Startups, Founders &amp; Agencies
              </div>
              <h1 className="headline headline-desktop">
                Ship High-Caliber Tech &amp; Video.
                <br />
                Cut Agency Costs by 70%.
              </h1>
              <h1 className="headline headline-mobile">
                Ship Fast. Save 70%.
                <br />
                Escrow-Secured.
              </h1>
              <p className="sub-headline sub-headline-desktop">
                UniPact matches US, UK, Singaporean, and global businesses with the top 1% vetted university developers and creators in Malaysia. Fixed-scope milestones, English-fluent execution, 100% escrow-backed.
              </p>
              <p className="sub-headline sub-headline-mobile">
                Vetted remote student engineers and video creators. Pay milestone by milestone via escrow.
              </p>

              <div className="client-hero-badges">
                <span className="trust-pill">100% Escrow Protected</span>
                <span className="trust-pill">7&ndash;14 Day MVPs</span>
                <span className="trust-pill">Top 1% STEM Talent</span>
                <span className="trust-pill">Direct IP Transfer</span>
              </div>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSectionId("client-intake")}
                >
                  Scope a Project
                </button>
              </div>
            </div>

            <aside className="hero-proof-card">
              <div className="hero-proof-badge">Live Case Study</div>
              <p className="hero-proof-client">
                {primaryStudy?.client || "Fintech Consulting Client"}
              </p>
              <p className="hero-proof-caption">
                {primaryStudy?.title || "From blank repo to live sales CRM in 7 days"}
              </p>
              <div className="hero-proof-rule"></div>
              <div className="hero-proof-row">
                <div>
                  <p className="hero-proof-mini-stat">
                    {primaryStudy?.metrics?.[0]?.value || "7 Days"}
                  </p>
                  <p className="hero-proof-mini-label">
                    {primaryStudy?.metrics?.[0]?.label || "Brief to production"}
                  </p>
                </div>
                <div>
                  <p className="hero-proof-mini-stat">
                    {primaryStudy?.metrics?.[1]?.value || "70% Saved"}
                  </p>
                  <p className="hero-proof-mini-label">
                    {primaryStudy?.metrics?.[1]?.label || "vs Western agency quotes"}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Comparison: Why Global Founders Choose UniPact */}
      <section className="comparison-section">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span>The Better Alternative
          </p>
          <h2 className="section-title">
            Stop overpaying agencies.
            <br />
            Stop gambling on open freelance boards.
          </h2>
          <p className="proof-copy">
            Hiring full-time overseas engineers takes months. Traditional Western agencies charge massive retainer markups. Open marketplaces leave you sorting through 100+ unvetted proposals. UniPact gives you pre-screened execution in 48 hours.
          </p>

          <div className="comparison-grid">
            <div className="comparison-card">
              <h3>Western Agencies</h3>
              <p>US / UK / Australian dev &amp; creative agencies</p>
              <p className="comparison-price">$120 &ndash; $200 / hr</p>
              <ul className="comparison-list con">
                <li> $15,000+ minimum project retainers</li>
                <li>6 to 12 week bloated delivery cycles</li>
                <li>Junior devs assigned anyway with partner markups</li>
                <li>Rigid change orders and contract negotiations</li>
              </ul>
            </div>

            <div className="comparison-card">
              <h3>Freelance Marketplaces</h3>
              <p>Upwork, Fiverr, and generic job boards</p>
              <p className="comparison-price">Unpredictable</p>
              <ul className="comparison-list con">
                <li> 80+ copy-pasted AI bids on every posting</li>
                <li>High risk of ghosting and abandoned projects</li>
                <li>Zero standardized code review or QA verification</li>
                <li>Cumbersome dispute resolution processes</li>
              </ul>
            </div>

            <div className="comparison-card highlight">
              <span className="comparison-badge">The UniPact Way</span>
              <h3>UniPact Milestone Match</h3>
              <p>Curated Top 1% Malaysian University Talent</p>
              <p className="comparison-price">$800 &ndash; $3,000 / milestone</p>
              <ul className="comparison-list pro">
                <li> 1 verified, best-fit match within 48 hours</li>
                <li>100% Escrow-Secured — only pay on approved milestones</li>
                <li>Fluent English &amp; daily asynchronous velocity</li>
                <li>Direct IP ownership &amp; clean repository handover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Tracks */}
      <section className="capabilities-section">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span>Core Tracks
          </p>
          <h2 className="section-title">What our talent builds for overseas clients.</h2>
          <p className="proof-copy">
            Every student engineer and creator is hand-vetted through technical assessments and portfolio audits from top STEM institutions.
          </p>

          <div className="capability-grid">
            <div className="capability-card">
              <h3>Full-Stack Web &amp; Mobile MVPs</h3>
              <p>
                From Figma designs to live production deployments. Build functional SaaS MVPs, customer dashboards, and cross-platform apps without full-time payroll.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">React / Next.js</span>
                <span className="tech-tag">Node.js / Express</span>
                <span className="tech-tag">Python / FastAPI</span>
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">PostgreSQL / Supabase</span>
              </div>
            </div>

            <div className="capability-card">
              <h3>Viral Short-Form &amp; Video Content</h3>
              <p>
                High-retention editing for TikTok, Instagram Reels, and YouTube Shorts. Dynamic captions, motion hooks, B-roll pacing, and audio design tailored for Western audiences.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">Premiere Pro</span>
                <span className="tech-tag">After Effects</span>
                <span className="tech-tag">CapCut Pro</span>
                <span className="tech-tag">Motion Graphics</span>
                <span className="tech-tag">YouTube Long-Form</span>
              </div>
            </div>

            <div className="capability-card">
              <h3>Internal Tools &amp; Automation Bots</h3>
              <p>
                Custom scrapers, CRM integrations, Zapier/Make automations, and AI API wrappers that eliminate hundreds of hours of manual operations.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">Web Scraping</span>
                <span className="tech-tag">OpenAI / Claude APIs</span>
                <span className="tech-tag">CRM Pipelines</span>
                <span className="tech-tag">Automated Invoicing</span>
                <span className="tech-tag">Data Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Escrow Workflow */}
      <section className="how-it-works-section">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span>The 4-Step Process
          </p>
          <h2 className="section-title">Zero risk. Clear milestones. Full velocity.</h2>
          <p className="proof-copy">
            Here is how we ensure seamless cross-border delivery with zero upfront exposure for your company.
          </p>

          <div className="step-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h4>Submit Brief</h4>
              <p>Describe your project, feature list, desired timeline, and milestone budget.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h4>1-on-1 Match</h4>
              <p>Within 48 hours, we match you with one curated, verified student developer or editor.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h4>Lock Escrow</h4>
              <p>Funds are deposited into escrow. Your money stays protected until work is delivered.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h4>Inspect &amp; Release</h4>
              <p>Review the GitHub PR or video draft. Release milestone payout only when satisfied.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Project Scoping & Intake Form */}
      <section id="client-intake" className="company-section">
        <div className="container">
          <div className="company-grid">
            <div className="company-pitch">
              <p className="eyebrow">
                <span className="eyebrow-dot"></span>Get Started
              </p>
              <h2>Post a project brief. Get matched in 48h.</h2>
              <p>
                Tell us what you need built or edited. We will review your scope, match the ideal student talent, and set up your milestone escrow contract.
              </p>

              <ul className="feature-list">
                <li>Fixed-scope milestone pricing (USD / SGD / GBP / MYR)</li>
                <li>A hand-picked team of verified, pre-screened students</li>
                <li>Zero upfront payout release &mdash; escrow protected</li>
                <li>Full source code &amp; IP ownership upon completion</li>
              </ul>
            </div>

            <div className="company-form">
              <CompanyCta />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <Faq
        title="Questions from global clients."
        intro="Everything global founders need to know about milestone escrow, timezone velocity, and intellectual property ownership."
        items={CLIENT_FAQS}
      />
    </main>
  );
}
