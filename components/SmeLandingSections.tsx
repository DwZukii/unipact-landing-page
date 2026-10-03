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

const MALAYSIA_FAQS = [
  {
    question: "Do your student creators come to my shop or clinic to film?",
    answer:
      "Yes! For F&B outlets, retail shops, and clinics across the Klang Valley (KL & Selangor) and major university hubs, our managed student creator teams provide on-site filming sessions equipped with professional mobile rigs, lighting, and wireless microphones.",
  },
  {
    question: "How fast is the turnaround from shooting to final edited video?",
    answer:
      "Standard edits are delivered within 48 to 72 hours per batch. For e-commerce ad creative variations, we prioritize rapid iterations so you can refresh TikTok and Shopee campaigns without ad fatigue.",
  },
  {
    question: "How does this compare to hiring a full-time marketing staff?",
    answer:
      "A junior marketing executive costs RM 3,000–4,500/month plus EPF, SOCSO, and equipment costs — and one person rarely excels at shooting, scripting, editing, AND analytics simultaneously. UniPact gives you a specialized campus creative squad at flexible package rates with zero long-term payroll overhead.",
  },
  {
    question: "What if I am shy or don't know what to say on camera?",
    answer:
      "That is our specialty. For our Clinic and Professional Service package, our team writes conversational, bulletproof scripts in simple language. During filming, our crew guides you through bite-sized talking points or provides voiceovers so you look confident and natural.",
  },
  {
    question: "Are invoices and payments officially registered?",
    answer:
      "Yes. UniPact is an officially registered Malaysian business entity under Suruhanjaya Syarikat Malaysia (SSM Registration No: 202603205508). All project milestones are escrow-secured and invoiced with official documentation.",
  },
];

export default function SmeLandingSections({
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
              <h1 className="headline headline-desktop">
                Viral Short-Form Video &amp; Tech.
                <br />
                Zero Full-Time Payroll. Zero Agency Lock-Ins.
              </h1>
              <h1 className="headline headline-mobile">
                Viral Video for SMEs.
                <br />
                No Agency Lock-Ins.
              </h1>
              <p className="sub-headline sub-headline-desktop">
                We match local Malaysian business owners, TikTok Shop brands, and clinics with verified university creators. Get 10&ndash;20 viral-ready videos every month, on-site shooting, and fast 48&ndash;72h turnaround at accessible student bounty rates.
              </p>
              <p className="sub-headline sub-headline-mobile">
                On-site shoots, TikTok/Reels editing, and custom tech built by top Malaysian university talent.
              </p>

              <div className="client-hero-badges">
                <span className="trust-pill">48&ndash;72h Turnaround</span>
                <span className="trust-pill">On-Site Shooting Available</span>
                <span className="trust-pill">Native Gen-Z Creators</span>
                <span className="trust-pill">RM 0 Agency Lock-In</span>
              </div>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSectionId("sme-intake")}
                >
                  Get a Content Squad
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToSectionId("personas-section")}
                >
                  Explore Who We Help
                </button>
              </div>
            </div>

            <aside className="hero-proof-card">
              <p className="hero-proof-client">
                {primaryStudy?.client || "F&B / SME Client Spotlight"}
              </p>
              <p className="hero-proof-caption">
                {primaryStudy?.title || "From static posters to 450k organic TikTok views in 3 weeks"}
              </p>
              <div className="hero-proof-rule"></div>
              <div className="hero-proof-row">
                <div>
                  <p className="hero-proof-mini-stat">48 hrs</p>
                  <p className="hero-proof-mini-label">Batch Turnaround</p>
                </div>
                <div>
                  <p className="hero-proof-mini-stat">65%</p>
                  <p className="hero-proof-mini-label">Saved vs Agency</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Customer Personas Section */}
      <section id="personas-section" className="persona-section">
        <div className="container">
          <h2 className="section-title">Built specifically for how Malaysian businesses operate.</h2>
          <p className="proof-copy">
            Whether you run a bustling cafe, an e-commerce store, or a local medical clinic, UniPact eliminates the marketing bottleneck.
          </p>

          <div className="persona-grid">
            {/* Persona A */}
            <div className="persona-card">
              <div className="persona-header">
                <div>
                  <span className="persona-tag">F&amp;B &amp; Local Retail</span>
                  <h3>The Overwhelmed SME / Cafe Owner</h3>
                </div>
              </div>
              <p className="persona-situation">
                You manage daily operations, stock, and staff. You know Instagram Reels and TikTok drive foot traffic, but have zero time to hold a camera or edit trending audios.
              </p>
              <div className="persona-block pain">
                <p className="persona-block-title">Your Current Bottlenecks</p>
                <ul className="persona-list">
                  <li>Cannot justify RM 3,500–4,500/mo for a full-time marketing hire</li>
                  <li>Feed is inactive or stuck with low-reach static posters</li>
                  <li>Losing walk-in customers to nearby cafes going viral</li>
                </ul>
              </div>
              <div className="persona-solution-box">
                <p>
                  <strong>UniPact Squad:</strong> Student creators visit your shop, capture aesthetic food &amp; vibe b-roll, edit engaging TikToks with trending audio, and keep your feed fresh.
                </p>
              </div>
            </div>

            {/* Persona B */}
            <div className="persona-card">
              <div className="persona-header">
                <div>
                  <span className="persona-tag">E-Commerce &amp; TikTok Shop</span>
                  <h3>The Stalled E-Commerce Founder</h3>
                </div>
              </div>
              <p className="persona-situation">
                You sell on Shopee, TikTok Shop, or Shopify. Ad fatigue is killing your ROAS, and you desperately need 10&ndash;20 fresh creative variations every single month.
              </p>
              <div className="persona-block pain">
                <p className="persona-block-title">Your Current Bottlenecks</p>
                <ul className="persona-list">
                  <li>Generic freelancers charge expensive fees for tiny revisions</li>
                  <li>Lack the bandwidth to film UGC, unboxings, and hooks</li>
                  <li>Need creators who understand Gen-Z pacing and viral sounds</li>
                </ul>
              </div>
              <div className="persona-solution-box">
                <p>
                  <strong>UniPact Squad:</strong> High-volume, rapid 48–72h video batches. Native Gen-Z campus creators delivering scroll-stopping hooks to scale your paid ad campaigns.
                </p>
              </div>
            </div>

            {/* Persona C */}
            <div className="persona-card">
              <div className="persona-header">
                <div>
                  <span className="persona-tag">Clinics &amp; B2B Services</span>
                  <h3>The Local Professional &amp; Clinic</h3>
                </div>
              </div>
              <p className="persona-situation">
                You run a dental/aesthetic clinic, law practice, or design firm. You rely on word-of-mouth, but competitors are building massive authority on TikTok and LinkedIn.
              </p>
              <div className="persona-block pain">
                <p className="persona-block-title">Your Current Bottlenecks</p>
                <ul className="persona-list">
                  <li>Uncomfortable on camera or don&apos;t know what to talk about</li>
                  <li>No in-house team for studio lighting, wireless mics, or editing</li>
                  <li>Need credible, high-trust polish instead of tacky dancing trends</li>
                </ul>
              </div>
              <div className="persona-solution-box">
                <p>
                  <strong>UniPact Squad:</strong> We script educational talking-head content, guide your on-camera delivery, and edit with clean subtitles and sleek branding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Killer Matrix */}
      <section className="objection-section">
        <div className="container">
          <h2 className="section-title">Why local businesses switch to UniPact.</h2>
          <p className="proof-copy">
            We solved the four biggest reasons Malaysian SMEs hesitate to hire marketing help.
          </p>

          <div className="objection-grid">
            <div className="objection-card">
              <div className="objection-client">
                <span className="objection-label">Common Hesitation</span>
                <p className="objection-quote">&ldquo;Agencies charge RM 4,000+/month with 6-month lock-in contracts.&rdquo;</p>
              </div>
              <div className="objection-arrow">&rarr;</div>
              <div className="objection-unipact">
                <span className="objection-unipact-label">UniPact Solution</span>
                <p className="objection-ans">Flexible micro-bounties and monthly video packages starting at accessible student rates. Cancel anytime with zero lock-in.</p>
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-client">
                <span className="objection-label">Common Hesitation</span>
                <p className="objection-quote">&ldquo;Freelancers take weeks to deliver and then ghost us completely.&rdquo;</p>
              </div>
              <div className="objection-arrow">&rarr;</div>
              <div className="objection-unipact">
                <span className="objection-unipact-label">UniPact Solution</span>
                <p className="objection-ans">Structured 48&ndash;72h turnaround backed by verified campus project managers. Payments held in escrow until approved.</p>
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-client">
                <span className="objection-label">Common Hesitation</span>
                <p className="objection-quote">&ldquo;Our marketing looks stiff, boring, and corporate.&rdquo;</p>
              </div>
              <div className="objection-arrow">&rarr;</div>
              <div className="objection-unipact">
                <span className="objection-unipact-label">UniPact Solution</span>
                <p className="objection-ans">Gen Z creators who literally live on TikTok and Instagram Reels. They know what hooks audiences natively.</p>
              </div>
            </div>

            <div className="objection-card">
              <div className="objection-client">
                <span className="objection-label">Common Hesitation</span>
                <p className="objection-quote">&ldquo;We don&apos;t even have raw footage or know what to film.&rdquo;</p>
              </div>
              <div className="objection-arrow">&rarr;</div>
              <div className="objection-unipact">
                <span className="objection-unipact-label">UniPact Solution</span>
                <p className="objection-ans">Full end-to-end service: we come on-site with 4K mobile rigs, script the concepts, film the shots, and handle post-production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Video Packages */}
      <section className="package-section">
        <div className="container">
          <h2 className="section-title">Transparent packages. No hidden fees.</h2>
          <p className="proof-copy">
            Choose the content velocity your brand needs. All packages include student talent management and escrow protection.
          </p>

          <div className="package-grid">
            <div className="package-card">
              <h3>F&amp;B / Cafe Starter</h3>
              <p className="package-desc">Consistent, aesthetic short-form content to drive local footfall.</p>
              <span className="package-ideal">Best for Cafes, Bakeries &amp; Retail</span>
              <ul className="package-list">
                <li><strong>8 Edited Videos / month</strong></li>
                <li>1x On-Site 2-Hour Shooting Session</li>
                <li>Trending Audio &amp; Hook Research</li>
                <li>48–72h Batch Delivery</li>
                <li>1 Round of Revision per video</li>
              </ul>
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginTop: "auto" }}
                onClick={() => scrollToSectionId("sme-intake")}
              >
                Inquire Package
              </button>
            </div>

            <div className="package-card highlight">
              <span className="package-popular">Most Popular</span>
              <h3>TikTok Shop Velocity</h3>
              <p className="package-desc">High-volume UGC variations to beat ad fatigue and boost ROAS.</p>
              <span className="package-ideal">Best for Shopee &amp; TikTok Sellers</span>
              <ul className="package-list">
                <li><strong>16 High-Converting Videos / month</strong></li>
                <li>Product Unboxing &amp; Problem-Agitate-Solve</li>
                <li>Dynamic Subtitles &amp; Call-to-Actions</li>
                <li>Rapid 48h Turnaround per Batch</li>
                <li>Ad Creative Split-Testing Variations</li>
              </ul>
              <button
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "auto" }}
                onClick={() => scrollToSectionId("sme-intake")}
              >
                Get Velocity Pack
              </button>
            </div>

            <div className="package-card">
              <h3>Clinic &amp; Authority</h3>
              <p className="package-desc">High-trust educational talking heads that build credibility.</p>
              <span className="package-ideal">Best for Aesthetic Clinics &amp; B2B</span>
              <ul className="package-list">
                <li><strong>12 Educational Reels / month</strong></li>
                <li>On-Site Lighting &amp; Wireless Audio Rig</li>
                <li>Pre-Scripted Talking Points &amp; Hook Coaching</li>
                <li>Premium Subtitles &amp; Brand Styling</li>
                <li>Multi-Platform Formatting (IG, TikTok, LinkedIn)</li>
              </ul>
              <button
                className="btn btn-secondary"
                style={{ width: "100%", marginTop: "auto" }}
                onClick={() => scrollToSectionId("sme-intake")}
              >
                Inquire Package
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* SME Lead Form */}
      <section id="sme-intake" className="company-section">
        <div className="container">
          <div className="company-grid">
            <div className="company-pitch">
              <h2>Tell us about your business. Get your squad in 48h.</h2>
              <p>
                Whether you need 10 TikTok videos shot this week or a custom internal tool built, tell us your needs and our team will get in touch directly via WhatsApp or Email.
              </p>

              <ul className="feature-list">
                <li>No long-term contracts &mdash; monthly milestone flex</li>
                <li>Curated student creator or engineering squads</li>
                <li>Escrow-secured &mdash; payment only on verified approval</li>
                <li>Official invoice with SSM: 202603205508</li>
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
        title="Questions from Malaysian businesses."
        intro="Frequently asked questions from local business owners, cafes, and e-commerce sellers in Malaysia."
        items={MALAYSIA_FAQS}
      />
    </main>
  );
}
