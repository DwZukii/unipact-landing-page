import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Camera,
  ChevronDown,
  CircleCheck,
  CodeXml,
  CreditCard,
  FileText,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  Lock,
  Megaphone,
  MessageSquare,
  MessagesSquare,
  Percent,
  RefreshCw,
  Sparkles,
  Tag,
  Undo2,
  UserRoundCheck,
  Users,
  Video,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";
import type { CaseStudy } from "@/lib/sanity/queries";
import ui from "@/components/site/ui.module.css";
import styles from "./home.module.css";

type Item = { icon: LucideIcon; title: string; text: string };

const SERVICES: { icon: LucideIcon; tone: string; name: string; text: string; points: string[] }[] = [
  {
    icon: CodeXml,
    tone: ui.iconTileNavy,
    name: "Software development",
    text: "Websites and landing pages, CRM, ERP and HR systems, and other internal automation tools.",
    points: [
      "Tech stack and required skills agreed for each project",
      "You receive the code repository, a staging link and handover documentation",
      "Hosting and a domain included for 12 months from go-live",
      "30 days of free bug fixes after you accept the work",
    ],
  },
  {
    icon: Megaphone,
    tone: ui.iconTileCyan,
    name: "Digital marketing and video",
    text: "Short videos for TikTok, Instagram Reels and YouTube Shorts, plus copywriting and campaign content.",
    points: [
      "Campaign objective and target platforms set upfront",
      "Share raw footage and brand assets through your files vault",
      "You receive edited videos and a performance summary",
      "One-off campaigns or a monthly content retainer",
    ],
  },
];

const STEPS: Item[] = [
  {
    icon: Briefcase,
    title: "Post your brief",
    text: "Describe the work, the deadline and your budget. Posting is free and needs no card.",
  },
  {
    icon: Sparkles,
    title: "Review your team",
    text: "Within 48 hours we propose a hand-picked team of verified students. You see their portfolios first.",
  },
  {
    icon: Wallet,
    title: "Approve and fund a milestone",
    text: "Nothing starts until you confirm the team. Each milestone is paid into escrow before work on it begins.",
  },
  {
    icon: CircleCheck,
    title: "Accept the work",
    text: "Review each delivery and ask for revisions if you need them. Payment is released when you accept.",
  },
];

const SAFEGUARDS: Item[] = [
  {
    icon: Lock,
    title: "Your money waits in escrow",
    text: "Each milestone payment sits in a bank account used only for client funds. It is released to the team when you accept the work.",
  },
  {
    icon: RefreshCw,
    title: "Two rounds of revisions",
    text: "Every deliverable includes 2 rounds of minor revisions: text, colours, layout, music or small bug fixes.",
  },
  {
    icon: Undo2,
    title: "A refund if we cannot deliver",
    text: "If a milestone cannot be delivered to the brief after those revisions, its payment is refunded in full.",
  },
  {
    icon: UserRoundCheck,
    title: "A replacement if someone drops out",
    text: "If a student becomes unavailable, we assign a replacement at no extra cost and tell you within 2 working days.",
  },
  {
    icon: BadgeCheck,
    title: "The work is yours",
    text: "Once a milestone is paid, all rights in it pass to you. Nothing is shown in a portfolio without your written approval.",
  },
  {
    icon: Wrench,
    title: "30 days of bug fixes",
    text: "Software is covered by 30 days of free fixes after you accept it, for anything that does not match the brief.",
  },
];

const PRICING: Item[] = [
  {
    icon: Tag,
    title: "Free to post",
    text: "No subscription and no card needed. You pay nothing until you approve a team.",
  },
  {
    icon: FileText,
    title: "Priced per project",
    text: "Set your own budget or ask us for a quote. The price is agreed in writing before work starts.",
  },
  {
    icon: Percent,
    title: "One fee, nothing added on top",
    text: "UniPact's service fee, 10% as standard, comes out of the project fee. Payment gateway charges are on us.",
  },
  {
    icon: CreditCard,
    title: "Pay the way you already do",
    text: "FPX, DuitNow QR, card, or bank transfer against an invoice from a company registered in Malaysia.",
  },
];

const MONEY_STEPS = [
  { title: "You fund a milestone", text: "Paid before work on that milestone begins." },
  { title: "It waits in escrow", text: "Held in a bank account used only for client funds." },
  { title: "You accept the work", text: "The payment is released to your student team." },
];

const WORKSPACE: Item[] = [
  { icon: LayoutDashboard, title: "Overview", text: "The key numbers and the latest activity." },
  { icon: Users, title: "Team", text: "Who is on your project, with their verified profiles." },
  { icon: ListChecks, title: "Milestones and work", text: "Each milestone, the work submitted and your approvals." },
  { icon: MessagesSquare, title: "Messages", text: "One conversation with your team and UniPact." },
  { icon: Wallet, title: "Payments", text: "What is in escrow, the release schedule and what you have paid." },
  { icon: FolderOpen, title: "Brief and files", text: "Your brief, brand assets and raw footage in one vault." },
];

const WORKSPACE_TABS = ["Overview", "Team", "Milestones & work", "Messages", "Payments", "Brief & files"];

const MILESTONES = [
  { name: "Design and data model", badge: "Accepted", tone: ui.badgeGreen, note: "Payment released" },
  { name: "Build and staging link", badge: "Awaiting your review", tone: ui.badgeInfo, note: "In escrow until you accept" },
  { name: "Handover and documentation", badge: "Not started", tone: ui.badgeMuted, note: "Funded before work begins" },
];

const PROOF_STATS = [
  { value: "7", label: "Days, brief to live dashboard" },
  { value: "15 hrs", label: "Saved per week, per agent" },
  { value: "200", label: "Agents on the new workflow" },
  { value: "RM 3,000", label: "Saved per year on CRM licences" },
];

const PIPELINE: { icon: LucideIcon; name: string; text: string }[] = [
  {
    icon: BookOpen,
    name: "Tuition centre operations",
    text: "A traditional tuition centre is moving off pen and paper. Scheduling, records and day-to-day admin are being rebuilt as proper software.",
  },
  {
    icon: Camera,
    name: "Interior visualisation app",
    text: "An app where you photograph a room, then drag and drop furniture into the photo, so clients can see a space before committing.",
  },
  {
    icon: Video,
    name: "Product videos for a software firm",
    text: "A Malaysian software company needs its business systems explained on camera. A student team is producing a run of short videos for social.",
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
    a: "Posting is free and there is no subscription. Every project is scoped on its own, so there is no fixed price list: you set a budget or ask us for a quote, and the price is agreed in writing before any work starts. UniPact's service fee, 10% as standard, comes out of that project fee and is never added on top.",
  },
  {
    q: "Who are the students, and how are they verified?",
    a: "They are students at Malaysian universities. Each one registers with their university details and a student ID or enrolment letter, and a UniPact admin checks their status before they can be matched to any project.",
  },
  {
    q: "Do I get to choose the team?",
    a: "A UniPact admin picks the team for your brief based on skills and track record, and each student confirms they can take it on. We propose the team within 48 hours. You then review their profiles and portfolios, and nothing starts until you approve.",
  },
  {
    q: "What if I am not happy with the work?",
    a: "Every deliverable includes 2 rounds of minor revisions. You have 5 working days after each delivery to accept it or ask for changes; if we do not hear from you in that time, it is treated as accepted. If a milestone still cannot be delivered to the brief after the included revisions, that milestone's payment is refunded in full.",
  },
  {
    q: "Who owns the finished work?",
    a: "You do. Once a milestone is paid in full, all rights in its deliverables pass to you. Students keep your files and information confidential, and the project only appears in a portfolio with your written approval.",
  },
  {
    q: "How do I pay?",
    a: "By FPX, DuitNow QR or card, or by bank transfer against a UniPact invoice. Each milestone is paid before work on it starts, and the money is held in a bank account used only for client funds until you accept the work.",
  },
  {
    q: "What happens if a student drops out part-way?",
    a: "UniPact assigns a replacement at no extra cost and tells you within 2 working days.",
  },
  {
    q: "Do you work with companies outside Malaysia?",
    a: "Most of our clients today are Malaysian businesses. If you are based elsewhere, send us an enquiry and we will tell you whether we can support your project.",
  },
];

function SectionHead({ title, text }: { title: string; text?: ReactNode }) {
  return (
    <div className={ui.head}>
      <h2 className={ui.title}>{title}</h2>
      {text && <p className={ui.lead}>{text}</p>}
    </div>
  );
}

function Rule() {
  return (
    <div className="container" aria-hidden="true">
      <div className={ui.rule} />
    </div>
  );
}

// Illustrative view of a project as a client sees it in their workspace.
function ProjectPreview() {
  const stages = ["Posted", "Matched", "In progress", "Done"];
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.previewGlow} />
      <div className={`${ui.card} ${styles.previewCard}`}>
        <div className={styles.previewTop}>
          <span className={`${ui.badge} ${ui.badgeNavy}`}>Software development</span>
          <span className={`${ui.badge} ${ui.badgeInfo}`}>In progress</span>
        </div>
        <p className={styles.previewTitle}>Sales CRM dashboard</p>
        <p className={styles.previewMeta}>Milestone 2 of 3 &middot; Due 30 Oct</p>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <li key={stage} className={styles.stage}>
              <span className={`${styles.dot} ${i < 2 ? styles.dotDone : i === 2 ? styles.dotNow : ""}`}>
                {i < 2 ? <CircleCheck size={13} /> : i + 1}
              </span>
              {i < stages.length - 1 && <span className={styles.stageLine} />}
            </li>
          ))}
        </ol>

        <p className={styles.previewLabel}>Your team</p>
        <div className={styles.members}>
          {[
            ["L", "Lead developer", "Full-stack"],
            ["D", "UI/UX designer", "Product design"],
          ].map(([initial, role, skill]) => (
            <div key={role} className={styles.member}>
              <span className={styles.avatar}>{initial}</span>
              <span className={styles.memberText}>
                <span className={styles.memberRole}>{role}</span>
                <span className={styles.memberSkill}>{skill}</span>
              </span>
              <span className={`${ui.badge} ${ui.badgeGreen}`}>
                <BadgeCheck size={12} /> Verified
              </span>
            </div>
          ))}
        </div>

        <div className={styles.previewAlert}>
          <CircleCheck size={16} /> New delivery ready for your review
        </div>
      </div>
    </div>
  );
}

function WorkspacePreview() {
  return (
    <div className={`${ui.card} ${styles.workspaceCard}`} aria-hidden="true">
      <div className={styles.workspaceTop}>
        <p className={styles.previewTitle}>Sales CRM dashboard</p>
        <span className={`${ui.badge} ${ui.badgeInfo}`}>In progress</span>
      </div>
      <div className={styles.tabs}>
        {WORKSPACE_TABS.map((tab) => (
          <span key={tab} className={`${styles.tab} ${tab === "Milestones & work" ? styles.tabActive : ""}`}>
            {tab}
          </span>
        ))}
      </div>
      <ul className={styles.milestones}>
        {MILESTONES.map((m, i) => (
          <li key={m.name} className={styles.milestone}>
            <span className={styles.milestoneNumber}>{i + 1}</span>
            <span className={styles.milestoneText}>
              <span className={styles.milestoneName}>{m.name}</span>
              <span className={styles.milestoneNote}>{m.note}</span>
            </span>
            <span className={`${ui.badge} ${m.tone}`}>{m.badge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage({ caseStudies = [] }: { caseStudies?: CaseStudy[] }) {
  // A case study published in the CMS replaces the built-in one.
  const study = caseStudies[0];
  const proofTitle = study?.title || "A working sales CRM. Built and verified in 7 days.";
  const proofText =
    study?.summary ||
    "A UniPact team was matched to a financial consulting agency that needed a sales CRM built from scratch. The scope was agreed upfront, and the finished work was delivered and verified against the original brief.";
  const proofStats = study?.metrics?.length ? study.metrics.slice(0, 4) : PROOF_STATS;

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Get your project built by a <span>vetted student team</span>
            </h1>
            <p className={styles.heroText}>
              Websites, business systems and social media content, delivered by verified university students and
              managed by UniPact. We propose your team within 48 hours, you approve it, and you pay milestone by
              milestone as you accept the work.
            </p>
            <div className={styles.heroActions}>
              <a href={LINKS.postProject} className={`${ui.btn} ${ui.btnNavy} ${ui.btnLg}`}>
                <Briefcase size={18} aria-hidden="true" /> Post a project
              </a>
              <Link href="/#contact" className={`${ui.btn} ${ui.btnSecondary} ${ui.btnLg}`}>
                <MessageSquare size={18} aria-hidden="true" /> Talk to us
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
          <ProjectPreview />
        </div>
      </section>

      <Rule />

      {/* Services */}
      <section id="services" className={ui.section}>
        <div className="container">
          <SectionHead
            title="What we build for you"
            text="Two specialisations. Each has a set structure, so you know what you will receive before work starts."
          />
          <div className={styles.services}>
            {SERVICES.map(({ icon: Icon, tone, name, text, points }) => (
              <article key={name} className={`${ui.card} ${styles.service}`}>
                <span className={`${ui.iconTile} ${ui.iconTileLg} ${tone}`}>
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{name}</h3>
                <p className={styles.serviceText}>{text}</p>
                <ul className={ui.checkList}>
                  {points.map((point) => (
                    <li key={point}>
                      <CircleCheck size={17} className={ui.checkIcon} aria-hidden="true" /> {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <SectionHead title="From brief to finished work in four steps" />
          <ol className={styles.steps}>
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={`${ui.card} ${styles.step}`}>
                <div className={styles.stepTop}>
                  <span className={ui.iconTile}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className={styles.stepNumber} aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
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

      {/* Safeguards */}
      <section id="safeguards" className={ui.section}>
        <div className="container">
          <SectionHead
            title="What protects you"
            text={
              <>
                Every point below is a term in our{" "}
                <a href={LINKS.clientAgreement} className={ui.textLink}>
                  Client Service Agreement
                </a>
                .
              </>
            }
          />
          <div className={styles.grid3}>
            {SAFEGUARDS.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`${ui.card} ${styles.feature}`}>
                <span className={ui.iconTile}>
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* Pricing */}
      <section id="pricing" className={ui.section}>
        <div className="container">
          <SectionHead
            title="How pricing works"
            text="Every project is different, so we do not publish a fixed price list. What stays the same is how the money moves."
          />
          <div className={styles.pricing}>
            <ul className={styles.pricingList}>
              {PRICING.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className={ui.iconTile}>
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.money}>
              <div className={styles.panelGlow} aria-hidden="true" />
              <h3>Where your money is at each step</h3>
              <ol>
                {MONEY_STEPS.map(({ title, text }, i) => (
                  <li key={title}>
                    <span className={styles.moneyNumber} aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <p className={styles.moneyTitle}>{title}</p>
                      <p className={styles.moneyText}>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace */}
      <section id="workspace" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <SectionHead
            title="Follow the whole project in one place"
            text="Every client gets a workspace on the UniPact platform. This is what is inside."
          />
          <div className={styles.workspace}>
            <ul className={styles.workspaceList}>
              {WORKSPACE.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className={ui.iconTile}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <WorkspacePreview />
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className={ui.section}>
        <div className="container">
          <div className={styles.proof}>
            <div className={styles.panelGlow} aria-hidden="true" />
            <div className={styles.proofCopy}>
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
          </div>

          <div className={styles.pipelineHead}>
            <h3>Also in progress right now</h3>
            <p>Three more client projects, still being built. No numbers for these yet.</p>
          </div>
          <div className={styles.grid3}>
            {PIPELINE.map(({ icon: Icon, name, text }) => (
              <article key={name} className={`${ui.card} ${styles.feature}`}>
                <div className={styles.pipelineTop}>
                  <span className={ui.iconTile}>
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className={`${ui.badge} ${ui.badgeMuted}`}>In development</span>
                </div>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* Students */}
      <section id="students" className={ui.section}>
        <div className="container">
          <div className={`${ui.card} ${styles.students}`}>
            <div>
              <span className={`${ui.iconTile} ${ui.iconTileLg}`}>
                <GraduationCap size={24} aria-hidden="true" />
              </span>
              <h2>Are you a university student?</h2>
              <p>
                UniPact pays students for real client projects in software development and digital marketing. You
                register on the platform, and it takes a few minutes.
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
            <ul className={ui.checkList}>
              {STUDENT_POINTS.map((point) => (
                <li key={point}>
                  <CircleCheck size={17} className={ui.checkIcon} aria-hidden="true" /> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className={`container ${styles.faq}`}>
          <SectionHead title="Questions clients ask us" />
          <div className={styles.faqList}>
            {FAQS.map(({ q, a }) => (
              <details key={q} className={`${ui.card} ${styles.faqItem}`}>
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

      {/* Contact */}
      <section id="contact" className={ui.section}>
        <div className={`container ${styles.contact}`}>
          <div>
            <h2 className={ui.title}>Not ready to post yet? Talk to us first.</h2>
            <p className={ui.lead}>
              Send a few lines about what you need. Someone from the UniPact team will reply to scope it with you.
            </p>
            <ul className={`${ui.checkList} ${styles.contactPoints}`}>
              {[
                "We reply by email, or on WhatsApp if you leave a number",
                "We help you turn a rough idea into a clear brief",
                "You decide afterwards whether to post the project",
              ].map((point) => (
                <li key={point}>
                  <CircleCheck size={17} className={ui.checkIcon} aria-hidden="true" /> {point}
                </li>
              ))}
            </ul>
            <p className={styles.contactEmail}>
              Prefer email? Write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={ui.textLink}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
