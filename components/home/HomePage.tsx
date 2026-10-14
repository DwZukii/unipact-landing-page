import Link from "next/link";
import Image, { getImageProps } from "next/image";
import { ArrowRight, ChevronDown, CircleCheck, CodeXml, Megaphone, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";
import type { CaseStudy } from "@/lib/sanity/queries";
import ui from "@/components/site/ui.module.css";
import styles from "./home.module.css";

type Point = { title: string; text: string };

const SERVICES: { icon: LucideIcon; tone: string; name: string; text: string; points: string[] }[] = [
  {
    icon: CodeXml,
    tone: ui.iconTileNavy,
    name: "Software development",
    text: "Websites and landing pages, CRM, ERP and HR systems, and internal automation tools.",
    points: [
      "Tech stack and skills agreed for each project",
      "Code repository, staging link and handover documents",
      "Hosting and a domain for 12 months from go-live",
      "30 days of free bug fixes after you accept the work",
    ],
  },
  {
    icon: Megaphone,
    tone: ui.iconTileCyan,
    name: "Digital marketing and video",
    text: "Short videos for TikTok, Instagram Reels and YouTube Shorts, plus copywriting and campaign content.",
    points: [
      "Campaign objective and platforms set up front",
      "Raw footage and brand assets shared in your files vault",
      "Edited videos and a performance summary",
      "One-off campaigns or a monthly retainer",
    ],
  },
];

const STEPS: Point[] = [
  { title: "Post your brief", text: "Describe the work, the deadline and your budget. Posting is free." },
  { title: "Review your team", text: "Within 48 hours we propose verified students, with their portfolios." },
  { title: "Approve and fund", text: "Nothing starts until you approve. Each milestone is paid into escrow first." },
  { title: "Accept the work", text: "Ask for revisions if you need them. Payment is released when you accept." },
];

const ESCROW: Point[] = [
  { title: "You fund a milestone", text: "Before work on it begins." },
  { title: "It waits in escrow", text: "In a bank account used only for client funds." },
  { title: "You accept the work", text: "Only then is the payment released to your team." },
];

const PROTECTIONS: Point[] = [
  { title: "Two rounds of revisions", text: "Every deliverable includes 2 rounds of minor changes." },
  {
    title: "A refund if we cannot deliver",
    text: "If a milestone still misses the brief after revisions, its payment is refunded in full.",
  },
  {
    title: "A replacement if someone drops out",
    text: "At no extra cost, and we tell you within 2 working days.",
  },
  { title: "The work is yours", text: "All rights pass to you once a milestone is paid." },
  { title: "30 days of bug fixes", text: "Free fixes for software that does not match the brief." },
  { title: "Nothing shown without your say", text: "Your project only appears in a portfolio with your written approval." },
];

// The third figure is read off the screenshot below it, so the page and the picture
// always agree. (The screenshot shows 157 agents and 19 managers, not the "200 agents"
// quoted elsewhere, so that number stays off this page until it is confirmed.)
const PROOF_STATS = [
  { value: "7", label: "Days, brief to live dashboard" },
  { value: "15 hrs", label: "Saved per week, per agent" },
  { value: "61,850", label: "Leads handled in it so far" },
  { value: "RM 3,000", label: "Saved per year on CRM licences" },
];

type Delivered = {
  title: string;
  client: string;
  text: string;
  image: { src: string; alt: string };
};

// Phone screenshots, 780 x 1120. The RSVP one is cropped below the bank's logo, as the
// bank is not named on this site.
const DELIVERED: Delivered[] = [
  {
    title: "Event RSVP and check-in system",
    client: "A major Malaysian bank, for a corporate forum in Kuala Lumpur",
    text: "Guests registered online and got a personal QR pass. On the day, staff checked them in at a kiosk that showed each guest’s table, and a feedback form afterwards fed a two-page report for the organisers.",
    image: {
      src: "/work/rsvp-event-page.webp",
      alt: "The forum's invitation page on a phone: the title, date, time and venue, with a button to share feedback now the event has ended.",
    },
  },
  {
    title: "Animated wedding e-invite",
    client: "A Malaysian couple",
    text: "Guests open an envelope on their phone to music, then scroll through the programme, a countdown, the venue on Google Maps and Waze, and an RSVP form that fills a Google Sheet. Shared as one WhatsApp link.",
    image: {
      src: "/work/wedding-invite.webp",
      alt: "The invite's first screen on a phone: a sealed envelope among roses, and a button inviting guests to tap it open.",
    },
  },
];

const PIPELINE: Point[] = [
  {
    title: "Tuition centre operations",
    text: "Moving a tuition centre’s scheduling, records and admin off pen and paper.",
  },
  {
    title: "Interior visualisation app",
    text: "Photograph a room, then drag furniture into the photo to see the space before committing.",
  },
  {
    title: "Product videos for a software firm",
    text: "A run of short social videos explaining a Malaysian software company’s business systems.",
  },
];

const STUDENT_POINTS = [
  "Get matched to paid projects that fit your skills",
  "Bring classmates onto your team with an agreed payout share",
  "Paid by bank transfer within 7 working days of each accepted milestone",
  "Every finished project is added to your verified record",
];

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "There is no fixed price list, because every project is scoped on its own. You set a budget or ask us for a quote, and the price is agreed in writing before any work starts. Posting is free, and UniPact’s service fee, 10% as standard, comes out of that price.",
  },
  {
    q: "Who are the students, and how are they verified?",
    a: "Students at Malaysian universities. Each one registers with their university details and a student ID or enrolment letter, and a UniPact admin checks their status before they can be matched to a project.",
  },
  {
    q: "Do I get to choose the team?",
    a: "A UniPact admin picks the team for your brief based on skills and track record, and proposes it within 48 hours. You review their profiles and portfolios, and nothing starts until you approve.",
  },
  {
    q: "What if I am not happy with the work?",
    a: "Every deliverable includes 2 rounds of minor revisions. You have 5 working days after each delivery to accept it or ask for changes; after that it counts as accepted. If a milestone still cannot be delivered to the brief, its payment is refunded in full.",
  },
  {
    q: "How do I follow progress?",
    a: "Every client gets a workspace on the UniPact platform: your team, each milestone and the work submitted against it, your payments and what is still in escrow, your files, and one message thread with the team and UniPact.",
  },
  {
    q: "Do you work with companies outside Malaysia?",
    a: "Most of our clients today are Malaysian businesses. If you are based elsewhere, send us an enquiry and we will tell you whether we can support your project.",
  },
];

// Screens from the CRM a UniPact team delivered, with names and phone numbers masked.
// The wide picture is unreadable on a phone, so narrow screens get a closer crop.
function Screenshot({
  name,
  wideHeight,
  alt,
  className,
}: {
  name: string;
  wideHeight: number;
  alt: string;
  className?: string;
}) {
  const { props: small } = getImageProps({
    src: `/work/${name}-small.webp`,
    width: 680,
    height: 620,
    alt,
    unoptimized: true,
  });
  const { props: wide } = getImageProps({
    src: `/work/${name}.webp`,
    width: 1900,
    height: wideHeight,
    alt,
    unoptimized: true,
  });
  return (
    <picture>
      <source media="(min-width: 700px)" srcSet={wide.src} width={wide.width} height={wide.height} />
      <img {...small} alt={alt} className={className} />
    </picture>
  );
}

export default function HomePage({ caseStudies = [] }: { caseStudies?: CaseStudy[] }) {
  // A case study published in the CMS replaces the built-in one, and its own
  // numbers replace the CRM's, so the CRM screenshots are only shown without it.
  const study = caseStudies[0];
  const proofTitle = study?.title || "A working sales CRM. Built and verified in 7 days.";
  const proofText =
    study?.summary ||
    "A financial consulting agency needed a sales CRM built from scratch. A UniPact team agreed the scope up front, delivered it, and had it verified against the original brief.";
  const proofStats = study?.metrics?.length ? study.metrics.slice(0, 4) : PROOF_STATS;

  return (
    <main id="main">
      {/* Hero: the offer, with the delivered work straight underneath */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Get your project built by a <span>vetted student team</span>
            </h1>
            <p className={styles.heroText}>
              Websites, business systems and social media content, built by verified university students and managed
              by UniPact. Your team is proposed within 48 hours, and you pay milestone by milestone as you accept the
              work.
            </p>
            <div className={styles.heroActions}>
              <a href={LINKS.postProject} className={`${ui.btn} ${ui.btnNavy} ${ui.btnLg}`}>
                Post a project
              </a>
              <Link href="/#contact" className={`${ui.btn} ${ui.btnSecondary} ${ui.btnLg}`}>
                Talk to us
              </Link>
            </div>
            <ul className={styles.heroTrust}>
              {["Free to post", "Team proposed in 48 hours", "Pay only for work you accept"].map((t) => (
                <li key={t}>
                  <CircleCheck size={16} aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
            <p className={styles.heroStudent}>
              Student looking for paid work?{" "}
              <Link href="/#students" className={ui.textLink}>
                See how to join
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* Proof, straight after the hero, on a full-width navy band */}
      <section id="proof" className={`${ui.section} ${styles.navyBand}`}>
        <div className="container">
          <div className={styles.proofHead}>
            <h2>{proofTitle}</h2>
            <p>{proofText}</p>
          </div>

          <dl className={styles.stats}>
            {proofStats.map(({ value, label }) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>

          {study ? null : (
            <figure className={styles.proofFigure}>
              <Screenshot
                name="crm-performance"
                wideHeight={877}
                className={styles.proofShot}
                alt="The CRM's Performance screen: totals of leads assigned, pending, called, and reached by WhatsApp and SMS, above a table of each agent's figures."
              />
              <figcaption>The manager&rsquo;s view: every agent&rsquo;s leads and calls in one place. Names are hidden.</figcaption>
            </figure>
          )}

          <div className={styles.pipeline}>
            <h3>More delivered work</h3>
            <ul className={styles.delivered}>
              {DELIVERED.map(({ title, client, text, image }) => (
                <li key={title}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={780}
                    height={1120}
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 240px, 60vw"
                    className={styles.phoneShot}
                  />
                  <div>
                    <span className={styles.deliveredTag}>Delivered</span>
                    <p className={styles.pipelineTitle}>{title}</p>
                    <p className={styles.deliveredClient}>{client}</p>
                    <p className={styles.pipelineText}>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.pipeline}>
            <h3>Also in progress</h3>
            <ul>
              {PIPELINE.map(({ title, text }) => (
                <li key={title}>
                  <span className={styles.pipelineTag}>In development</span>
                  <p className={styles.pipelineTitle}>{title}</p>
                  <p className={styles.pipelineText}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <div className={ui.head}>
            <h2 className={ui.title}>What we build</h2>
            <p className={ui.lead}>
              Two specialisations, each with a set structure, so you know what you will receive before work starts.
            </p>
          </div>
          <div className={styles.services}>
            {SERVICES.map(({ icon: Icon, tone, name, text, points }) => (
              <article key={name} className={styles.service}>
                <span className={`${ui.iconTile} ${ui.iconTileLg} ${tone}`}>
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{name}</h3>
                <p className={styles.serviceText}>{text}</p>
                <ul className={styles.ruledList}>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className={ui.section}>
        <div className="container">
          <div className={ui.head}>
            <h2 className={ui.title}>From brief to finished work in four steps</h2>
          </div>
          <ol className={styles.steps}>
            {STEPS.map(({ title, text }, i) => (
              <li key={title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <div className={styles.afterSteps}>
            <a href={LINKS.postProject} className={`${ui.btn} ${ui.btnNavy} ${ui.btnLg}`}>
              Post a project <ArrowRight size={17} aria-hidden="true" />
            </a>
            <Link href="/#contact" className={ui.textLink}>
              or talk to us first
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing and protections */}
      <section id="pricing" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <div className={ui.head}>
            <h2 className={ui.title}>Your money is held until you accept the work</h2>
            <p className={ui.lead}>
              Every project is priced on its own and agreed in writing before work starts. Posting is free, and
              UniPact&rsquo;s 10% fee comes out of the price, never on top.
            </p>
          </div>

          <ol className={styles.escrow}>
            {ESCROW.map(({ title, text }, i) => (
              <li key={title}>
                <span className={styles.escrowNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <p className={styles.escrowTitle}>{title}</p>
                  <p className={styles.escrowText}>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.payNote}>
            Pay by FPX, DuitNow QR, card, or bank transfer against an invoice. Payment gateway charges are on us.
          </p>

          <div className={styles.protectHead}>
            <h3>What protects you</h3>
            <p>
              Each of these is a term in our{" "}
              <a href={LINKS.clientAgreement} className={ui.textLink}>
                Client Service Agreement
              </a>
              .
            </p>
          </div>
          <ul className={styles.protections}>
            {PROTECTIONS.map(({ title, text }) => (
              <li key={title}>
                <p className={styles.protectionTitle}>{title}</p>
                <p className={styles.protectionText}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Students */}
      <section id="students" className={ui.section}>
        <div className={`container ${styles.students}`}>
          <div>
            <h2 className={ui.title}>Are you a university student?</h2>
            <p className={ui.lead}>
              UniPact pays students for real client projects in software development and digital marketing.
              Registering takes a few minutes.
            </p>
            <div className={styles.studentActions}>
              <a href={LINKS.joinStudent} className={`${ui.btn} ${ui.btnNavy} ${ui.btnLg}`}>
                Create a student account <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href={LINKS.login} className={`${ui.btn} ${ui.btnSecondary} ${ui.btnLg}`}>
                Log in
              </a>
            </div>
          </div>
          <ul className={styles.ruledList}>
            {STUDENT_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className={`container ${styles.faq}`}>
          <h2 className={ui.title}>Questions clients ask us</h2>
          <div className={styles.faqList}>
            {FAQS.map(({ q, a }) => (
              <details key={q} className={styles.faqItem}>
                <summary>
                  {q}
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact, on the second navy band */}
      <section id="contact" className={`${ui.section} ${styles.navyBand}`}>
        <div className={`container ${styles.contact}`}>
          <div className={styles.contactCopy}>
            <h2 className={ui.title}>Not ready to post yet? Talk to us first.</h2>
            <p className={ui.lead}>
              Send a few lines about what you need, and someone from UniPact will reply to help you scope it. You
              decide afterwards whether to post the project.
            </p>
            <p className={styles.contactEmail}>
              Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
