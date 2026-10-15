import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, CircleCheck, CodeXml, Megaphone, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import WorkScreenshot from "@/components/site/WorkScreenshot";
import ProtectionsRow from "./ProtectionsRow";
import VideoStill from "./VideoStill";
import { LINKS } from "@/lib/site";
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

// Each audience page as a door, showing the picture from that page's hero.
const AUDIENCES: { key: "sme" | "global"; name: string; text: string; proof: string; href: string; cta: string }[] = [
  {
    key: "sme",
    name: "Malaysian SMEs and brands",
    text: "Monthly short-video packages for cafés, clinics and online shops, filmed on site and edited within 48–72 hours.",
    proof: "450k organic TikTok views in 3 weeks for one F&B client",
    href: "/sme",
    cta: "See the SME page",
  },
  {
    key: "global",
    name: "Companies outside Malaysia",
    text: "Software and video for overseas teams, run in English, with each fixed-scope milestone held in escrow.",
    proof: "MVPs in 7–14 days, and you own the code and the IP",
    href: "/clients",
    cta: "See the global clients page",
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

// Pictures are 1040 x 650 (16:10). The tuition app's teacher names are blanked out and its
// sidebar, which names the centre, is cropped off. The video item uses a frame from the shoot.
const PIPELINE: (Point & { image?: { src: string; alt: string }; video?: { src: string; seconds: number } })[] = [
  {
    title: "Tuition centre operations",
    text: "Moving a tuition centre’s scheduling, records and admin off pen and paper.",
    image: {
      src: "/work/tuition-timetable.webp",
      alt: "The tuition centre app's weekly timetable: class cards with each room's capacity, one marked full and one over capacity.",
    },
  },
  {
    title: "Interior visualisation app",
    text: "A tablet app for designers: map the client’s room, design the cabinets in 3D with live pricing, and send the cut list to the factory.",
    image: {
      src: "/work/interior-studio.webp",
      alt: "The interior design app's 3D studio: a wooden base cabinet and a wall cabinet in a room, with a panel of finishes to choose from.",
    },
  },
  {
    title: "Product videos for a software firm",
    // A 12-second muted clip from the interview, played in place when pressed.
    video: { src: "/work/product-video.mp4", seconds: 12 },
    text: "A run of short social videos explaining a Malaysian software company’s business systems.",
    image: {
      src: "/work/product-video.webp",
      alt: "A frame from one of the videos: a man in a green polo shirt and glasses being interviewed in an office.",
    },
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

          {/* Two phone screens from delivered work: the RSVP event page behind, the CRM in
              front (an agent's email is masked). Decorative, since both are described in the
              work section right below. Shown from 1200px wide only (see home.module.css). */}
          <div className={styles.heroWork} aria-hidden="true">
            <Image
              src="/work/rsvp-event-page.webp"
              alt=""
              width={780}
              height={1120}
              sizes="240px"
              loading="lazy"
              className={`${styles.heroPhone} ${styles.heroPhoneBack}`}
            />
            <Image
              src="/work/crm-performance-phone.webp"
              alt=""
              width={517}
              height={742}
              sizes="240px"
              loading="lazy"
              className={`${styles.heroPhone} ${styles.heroPhoneFront}`}
            />
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
              <WorkScreenshot
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
              {PIPELINE.map(({ title, text, image, video }) => (
                <li key={title} className={image ? styles.pipelineWithShot : undefined}>
                  {image && video ? (
                    <VideoStill
                      poster={image.src}
                      src={video.src}
                      alt={image.alt}
                      seconds={video.seconds}
                      sizes="(min-width: 768px) 340px, 128px"
                    />
                  ) : image ? (
                    <div className={styles.pipelineMedia}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1040}
                        height={650}
                        sizes="(min-width: 768px) 340px, 128px"
                        className={styles.pipelineShot}
                      />
                    </div>
                  ) : null}
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
                <ul className={styles.pointList}>
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

      {/* The people behind it, with a link to the full team page */}
      <section id="team" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className={`container ${styles.team}`}>
          <div>
            <h2 className={ui.title}>Run by people you can talk to</h2>
            <p className={ui.lead}>
              UniPact is a small team of university students. We scope your brief, pick your student team and stay
              your contact until the work is accepted.
            </p>
            <Link href="/team" className={`${ui.btn} ${ui.btnSecondary} ${styles.teamLink}`}>
              Meet the team <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <figure className={styles.teamFigure}>
            <Image
              src="/photos/team-pitching.webp"
              alt="Akif, Luqman and Naqib presenting UniPact to a panel in a meeting room."
              width={1280}
              height={721}
              sizes="(min-width: 1024px) 640px, 100vw"
              className={styles.teamPhoto}
            />
          </figure>
        </div>
      </section>

      {/* Pricing and protections */}
      <section id="pricing" className={ui.section}>
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
          <ProtectionsRow items={PROTECTIONS} />
        </div>
      </section>

      {/* The two audience pages, as doors showing a preview of each page's picture */}
      <section id="who-we-help" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <div className={ui.head}>
            <h2 className={ui.title}>Find the page for your business</h2>
            <p className={ui.lead}>More detail on how we work with each kind of client.</p>
          </div>
          <div className={styles.doors}>
            {AUDIENCES.map(({ key, name, text, proof, href, cta }) => (
              <article key={key} className={styles.door}>
                <div className={`${styles.doorStage} ${key === "sme" ? styles.doorStageSme : styles.doorStageGlobal}`}>
                  {key === "sme" ? (
                    <>
                      <Image
                        src="/photos/shoot-tripod.webp"
                        alt=""
                        width={540}
                        height={967}
                        sizes="170px"
                        className={`${styles.doorPhone} ${styles.doorPhoneBack}`}
                      />
                      <Image
                        src="/photos/shoot-rig.webp"
                        alt=""
                        width={540}
                        height={967}
                        sizes="170px"
                        className={`${styles.doorPhone} ${styles.doorPhoneFront}`}
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src="/work/crm-leads-window.webp"
                        alt=""
                        width={1000}
                        height={700}
                        sizes="(min-width: 768px) 480px, 100vw"
                        className={styles.doorWindow}
                      />
                      <Image
                        src="/work/crm-performance-phone.webp"
                        alt=""
                        width={517}
                        height={742}
                        sizes="150px"
                        className={`${styles.doorPhone} ${styles.doorPhoneCrm}`}
                      />
                    </>
                  )}
                </div>
                <div className={styles.doorBody}>
                  {/* The title link covers the whole door, so the door is one click target. */}
                  <h3>
                    <Link href={href} className={styles.doorLink}>
                      {name}
                    </Link>
                  </h3>
                  <p className={styles.doorText}>{text}</p>
                  <p className={styles.doorProof}>{proof}</p>
                  <span className={styles.doorCta} aria-hidden="true">
                    {cta} <ArrowRight size={17} />
                  </span>
                </div>
              </article>
            ))}
          </div>
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
          <ul className={styles.pointList}>
            {STUDENT_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${ui.section} ${ui.sectionWhite} ${styles.faqOnWhite}`}>
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
          </div>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
          {/* After the form on phones, so the form is not pushed down; under the text on desktop. */}
          <figure className={styles.contactFigure}>
            <Image
              src="/photos/team-group.webp"
              alt="Six people in formal wear posing together in front of an event backdrop."
              width={1400}
              height={1261}
              sizes="(min-width: 1024px) 460px, 100vw"
              className={styles.contactPhoto}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
