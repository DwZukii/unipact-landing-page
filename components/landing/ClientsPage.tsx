import Image from "next/image";
import type { CaseStudy } from "@/lib/sanity/queries";
import WorkScreenshot from "@/components/site/WorkScreenshot";
import ui from "@/components/site/ui.module.css";
import home from "@/components/home/home.module.css";
import { DotList, LandingContact, LandingFaq, LandingHero, SectionHead } from "./parts";
import styles from "./landing.module.css";

const OPTIONS = [
  {
    name: "Western agencies",
    who: "US, UK and Australian dev and creative agencies",
    price: "$120–$200 an hour",
    points: [
      "$15,000+ minimum project retainers",
      "6–12 week delivery cycles",
      "Junior developers assigned anyway, with partner markups",
      "Rigid change orders and contract negotiations",
    ],
  },
  {
    name: "Freelance marketplaces",
    who: "Upwork, Fiverr and general job boards",
    price: "Unpredictable",
    points: [
      "80+ copy-pasted AI bids on every post",
      "High risk of ghosting and abandoned projects",
      "No standard code review or QA",
      "Slow, awkward dispute resolution",
    ],
  },
  {
    name: "UniPact milestone match",
    who: "Curated top 1% Malaysian university talent",
    price: "$800–$3,000 a milestone",
    ours: true,
    points: [
      "One verified, best-fit match within 48 hours",
      "Escrow: you pay only for approved milestones",
      "Fluent English and daily async progress",
      "You own the IP, with a clean repository handover",
    ],
  },
];

const CAPABILITIES = [
  {
    name: "Full-stack web and mobile MVPs",
    text: "From Figma designs to live production. SaaS MVPs, customer dashboards and cross-platform apps, without full-time payroll.",
    tags: ["React / Next.js", "Node.js / Express", "Python / FastAPI", "Flutter", "PostgreSQL / Supabase"],
  },
  {
    name: "Short-form and video content",
    text: "High-retention editing for TikTok, Instagram Reels and YouTube Shorts: dynamic captions, motion hooks, b-roll pacing and sound design for Western audiences.",
    tags: ["Premiere Pro", "After Effects", "CapCut Pro", "Motion graphics", "YouTube long-form"],
  },
  {
    name: "Internal tools and automation",
    text: "Custom scrapers, CRM integrations, Zapier and Make automations, and AI integrations that remove hundreds of hours of manual work.",
    tags: ["Web scraping", "OpenAI / Claude APIs", "CRM pipelines", "Automated invoicing", "Data pipelines"],
  },
];

const STEPS = [
  { title: "Send your brief", text: "Describe the project, features, timeline and milestone budget." },
  { title: "Get matched", text: "Within 48 hours we match you with a curated, verified student developer or editor." },
  { title: "Fund escrow", text: "Each milestone is paid into escrow, where it stays until the work is delivered." },
  {
    title: "Review and release",
    text: "Review the GitHub pull request or video draft, and release payment only when you’re satisfied.",
  },
];

const FAQS = [
  {
    q: "How does milestone escrow protect my company?",
    a: "You never pay an unverified contractor upfront. When a milestone is agreed, the payment goes into escrow. The student starts work, and the money is released only after you test and approve the deliverable.",
  },
  {
    q: "Are the students fluent in English?",
    a: "Yes. Malaysia ranks among Asia’s most English-proficient countries (High Proficiency in the EF English Proficiency Index). Every developer and creator on UniPact is vetted on communication, and writes clear English documentation, commit messages and scripts.",
  },
  {
    q: "How do time zones work for US, UK and European clients?",
    a: "We work asynchronously. You send instructions or feedback in your evening, the team builds while you sleep, and working code or videos are ready by your morning. Singapore and Australian clients share almost the same working hours.",
  },
  {
    q: "Who owns the intellectual property and source code?",
    a: "You do, fully. Once the final milestone is signed off and paid, all source code, repository access, design files and raw media are transferred to your company.",
  },
  {
    q: "What if a deliverable doesn’t match the agreed brief?",
    a: "Payments are tied to clear milestone criteria, so the student revises the work until it meets the brief. If work is not delivered or is abandoned, your escrow funds are refunded.",
  },
];

export default function ClientsPage({ caseStudies = [] }: { caseStudies?: CaseStudy[] }) {
  // A case study published in the CMS replaces the built-in CRM screenshot.
  const study = caseStudies[0];

  return (
    <main id="main">
      <LandingHero
        title={
          <>
            Ship high-calibre tech and video, and <span>cut agency costs by 70%</span>
          </>
        }
        text="UniPact matches businesses in the US, UK, Singapore and beyond with the top 1% of vetted university developers and creators in Malaysia. Fixed-scope milestones, fluent English, and every payment held in escrow."
        primary={{ label: "Scope a project", href: "#contact" }}
        secondary={{ label: "Compare your options", href: "#compare" }}
        ticks={["Every milestone in escrow", "MVPs in 7–14 days", "Top 1% STEM talent", "You own the IP"]}
        visual={
          <>
            {/* The CRM a UniPact team delivered: an agent's leads on desktop, the manager's view
                on a phone. Phone numbers, names and emails are masked. */}
            <Image
              src="/work/crm-leads-window.webp"
              alt=""
              width={1000}
              height={700}
              sizes="460px"
              loading="lazy"
              className={styles.visualWindow}
            />
            <Image
              src="/work/crm-performance-phone.webp"
              alt=""
              width={517}
              height={742}
              sizes="180px"
              loading="lazy"
              className={styles.visualPhone}
            />
          </>
        }
      />

      <section id="compare" className={`${ui.section} ${home.navyBand}`}>
        <div className="container">
          <div className={ui.head}>
            <h2 className={ui.title}>Stop overpaying agencies, and stop gambling on freelance boards</h2>
            <p className={`${ui.lead} ${styles.compareLead}`}>
              Hiring overseas engineers takes months. Western agencies charge large retainers. Open marketplaces leave
              you sorting through 100+ unvetted proposals. UniPact gives you pre-screened people within 48 hours.
            </p>
          </div>
          <div className={styles.compare}>
            {OPTIONS.map(({ name, who, price, points, ours }) => (
              <div key={name} className={`${styles.option} ${ours ? styles.optionOurs : ""}`}>
                <h3>{name}</h3>
                <p className={styles.optionFor}>{who}</p>
                <p className={styles.optionPrice}>{price}</p>
                <DotList items={points} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <SectionHead
            title="What our talent builds for overseas clients"
            lead="Every developer and creator is vetted through technical assessments and portfolio reviews, from Malaysia's top STEM universities."
          />
          <div className={styles.capabilities}>
            {CAPABILITIES.map(({ name, text, tags }) => (
              <div key={name} className={styles.capability}>
                <h3>{name}</h3>
                <p>{text}</p>
                <ul className={styles.tags}>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {study ? null : (
            <figure className={styles.buildFigure}>
              <WorkScreenshot
                name="crm-performance"
                wideHeight={877}
                className={styles.buildShot}
                alt="The CRM's Performance screen: totals of leads assigned, pending, called, and reached by WhatsApp and SMS, above a table of each agent's figures."
              />
              <figcaption>
                Built by a UniPact team: the sales CRM a financial consulting agency went live with 7 days after the
                brief. Names are hidden.
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      <section id="how" className={ui.section}>
        <div className="container">
          <SectionHead
            title="Clear milestones, no upfront risk"
            lead="How cross-border projects run, with nothing paid out before you approve."
          />
          <ol className={home.steps}>
            {STEPS.map(({ title, text }, i) => (
              <li key={title} className={home.step}>
                <span className={home.stepNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LandingFaq title="Questions from overseas clients" items={FAQS} onWhite />

      <LandingContact
        title="Send a project brief. Get matched in 48 hours."
        text="Tell us what you need built or edited. We'll review the scope, match the right student talent and set up your milestone escrow."
        points={[
          "Fixed-scope milestone pricing in USD, SGD, GBP or MYR",
          "A hand-picked team of verified, pre-screened students",
          "Nothing released before you approve: escrow protected",
          "Full source code and IP ownership on completion",
        ]}
      />
    </main>
  );
}
