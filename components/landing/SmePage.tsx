import Image from "next/image";
import ui from "@/components/site/ui.module.css";
import PersonaTabs, { type Persona } from "./PersonaTabs";
import { DotList, LandingContact, LandingFaq, LandingHero, SectionHead } from "./parts";
import styles from "./landing.module.css";

const PERSONAS: Persona[] = [
  {
    tab: "Cafés and retail",
    title: "The overwhelmed café or shop owner",
    situation:
      "You manage daily operations, stock and staff. You know Instagram Reels and TikTok bring in customers, but you have no time to hold a camera or edit to trending audio.",
    problems: [
      "You can’t justify RM 3,500–4,500 a month for a full-time marketing hire",
      "Your feed is quiet, or stuck on low-reach static posters",
      "Nearby cafés going viral are taking your walk-in customers",
    ],
    solution:
      "Student creators visit your shop, capture food and atmosphere b-roll, edit TikToks to trending audio and keep your feed fresh.",
  },
  {
    tab: "Online shops",
    title: "The stalled e-commerce founder",
    situation:
      "You sell on Shopee, TikTok Shop or Shopify. Ad fatigue is hurting your return on ad spend, and you need 10–20 fresh creative variations every month.",
    problems: [
      "Freelancers charge high fees for small revisions",
      "No time to film UGC, unboxings and hooks",
      "You need creators who understand Gen-Z pacing and viral sounds",
    ],
    solution:
      "High-volume video batches in 48–72 hours. Gen-Z campus creators write scroll-stopping hooks to scale your paid ads.",
  },
  {
    tab: "Clinics and services",
    title: "The local clinic or professional firm",
    situation:
      "You run a dental or aesthetic clinic, a law practice or a design firm. You rely on word of mouth while competitors build authority on TikTok and LinkedIn.",
    problems: [
      "You’re uncomfortable on camera, or unsure what to talk about",
      "No in-house lighting, wireless mics or editing",
      "You need credible, polished content, not dance trends",
    ],
    solution:
      "We script educational talking-head videos, coach your delivery on camera, and edit with clean subtitles and your branding.",
  },
];

const OBJECTIONS = [
  {
    worry: "Agencies charge RM 4,000+ a month, with six-month lock-in contracts.",
    answer: "Flexible one-off jobs and monthly video packages at student rates. Cancel any time, with no lock-in.",
  },
  {
    worry: "Freelancers take weeks to deliver, then disappear.",
    answer:
      "A set 48–72 hour turnaround, overseen by verified campus project managers. Your payment stays in escrow until you approve the work.",
  },
  {
    worry: "Our marketing looks stiff and corporate.",
    answer: "Gen-Z creators who live on TikTok and Instagram Reels, and know what hooks an audience.",
  },
  {
    worry: "We don’t have footage, or know what to film.",
    answer:
      "End to end: we come on site with 4K mobile rigs, plan the concepts, film the shots and handle the editing.",
  },
];

const PACKAGES = [
  {
    name: "Café starter",
    desc: "Consistent, good-looking short videos that bring people through the door.",
    bestFor: "For cafés, bakeries and retail",
    points: [
      "8 edited videos a month",
      "One 2-hour on-site shoot",
      "Trending audio and hook research",
      "48–72 hour batch delivery",
      "2 rounds of revisions per video",
    ],
    cta: "Ask about this package",
  },
  {
    name: "TikTok Shop velocity",
    tag: "Most popular",
    desc: "High-volume UGC variations to beat ad fatigue and lift return on ad spend.",
    bestFor: "For Shopee and TikTok Shop sellers",
    points: [
      "16 videos a month, made to convert",
      "Product unboxing and problem–solution formats",
      "Dynamic subtitles and calls to action",
      "48-hour turnaround per batch",
      "Split-test variations for your ads",
    ],
    cta: "Get the velocity pack",
  },
  {
    name: "Clinic and authority",
    desc: "Educational talking-head videos that build trust.",
    bestFor: "For aesthetic clinics and B2B services",
    points: [
      "12 educational Reels a month",
      "On-site lighting and wireless audio",
      "Scripted talking points and hook coaching",
      "Polished subtitles and brand styling",
      "Formatted for Instagram, TikTok and LinkedIn",
    ],
    cta: "Ask about this package",
  },
];

const FAQS = [
  {
    q: "Do your creators come to my shop or clinic to film?",
    a: "Yes. For cafés, shops and clinics across the Klang Valley (KL and Selangor) and major university towns, our student creator teams film on site with professional mobile rigs, lighting and wireless microphones.",
  },
  {
    q: "How fast is the turnaround from filming to the final edit?",
    a: "Standard edits are delivered within 48 to 72 hours per batch. For e-commerce ads we prioritise quick variations, so you can refresh TikTok and Shopee campaigns before ad fatigue sets in.",
  },
  {
    q: "How does this compare with hiring a full-time marketing staff member?",
    a: "A junior marketing executive costs RM 3,000–4,500 a month plus EPF, SOCSO and equipment, and one person is rarely good at shooting, scripting, editing and analytics all at once. UniPact gives you a specialised campus squad at package rates, with no long-term payroll.",
  },
  {
    q: "What if I’m shy or don’t know what to say on camera?",
    a: "That is our speciality. For the Clinic and authority package, our team writes simple, conversational scripts. During filming we guide you through short talking points, or record voiceovers, so you come across confident and natural.",
  },
  {
    q: "Are invoices and payments officially registered?",
    a: "Yes. UniPact is registered with Suruhanjaya Syarikat Malaysia (SSM no. 202603205508). Every milestone is held in escrow and invoiced with official documentation.",
  },
];

export default function SmePage() {
  return (
    <main id="main">
      <LandingHero
        title={
          <>
            Viral short-form video for Malaysian SMEs, <span>with no agency lock-in</span>
          </>
        }
        text="We match Malaysian business owners, TikTok Shop brands and clinics with verified university creators. Get 10–20 ready-to-post videos a month, on-site shooting and a 48–72 hour turnaround, at student rates and without a full-time marketing hire."
        primary={{ label: "Get a content squad", href: "#contact" }}
        secondary={{ label: "See the packages", href: "#packages" }}
        ticks={["48–72 hour turnaround", "On-site shooting", "Gen-Z creators", "No lock-in contract"]}
        visual={
          <>
            {/* Frames from the team's own behind-the-scenes clips of an on-site shoot. */}
            <Image
              src="/photos/shoot-tripod.webp"
              alt=""
              width={540}
              height={967}
              sizes="220px"
              loading="lazy"
              className={`${styles.visualShoot} ${styles.visualShootBack}`}
            />
            <Image
              src="/photos/shoot-rig.webp"
              alt=""
              width={540}
              height={967}
              sizes="220px"
              loading="lazy"
              className={`${styles.visualShoot} ${styles.visualShootFront}`}
            />
          </>
        }
      />

      <section id="who" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <SectionHead
            title="Built for how Malaysian businesses run"
            lead="Whether you run a busy café, an online shop or a clinic, a UniPact squad takes the content work off your hands."
          />
          <PersonaTabs personas={PERSONAS} />
        </div>
      </section>

      <section id="why" className={ui.section}>
        <div className={`container ${styles.split}`}>
          <div>
            <h2 className={ui.title}>Why local businesses switch to UniPact</h2>
            <p className={ui.lead}>
              The four reasons Malaysian SMEs hold back from hiring marketing help, and how we deal with each.
            </p>
          </div>
          <ul className={styles.objections}>
            {OBJECTIONS.map(({ worry, answer }) => (
              <li key={worry}>
                <p className={styles.objectionQuote}>&ldquo;{worry}&rdquo;</p>
                <p className={styles.objectionAnswer}>{answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="packages" className={`${ui.section} ${ui.sectionWhite}`}>
        <div className="container">
          <SectionHead
            title="Clear monthly packages, no hidden fees"
            lead="Choose how much content your brand needs. Every package includes management of your student team and escrow protection."
          />
          <div className={styles.packages}>
            {PACKAGES.map(({ name, tag, desc, bestFor, points, cta }) => (
              <div key={name} className={`${styles.package} ${tag ? styles.packageFeatured : ""}`}>
                {tag ? <span className={styles.packageTag}>{tag}</span> : null}
                <h3>{name}</h3>
                <p className={styles.packageDesc}>{desc}</p>
                <p className={styles.packageFor}>{bestFor}</p>
                <DotList items={points} />
                <a
                  href="#contact"
                  className={`${ui.btn} ${ui.btnBlock} ${tag ? ui.btnCyan : ui.btnSecondary}`}
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingFaq title="Questions from Malaysian businesses" items={FAQS} />

      <LandingContact
        title="Tell us about your business. Get your squad in 48 hours."
        text="Whether you need 10 TikTok videos shot this week or an internal tool built, tell us what you need and our team will get back to you by WhatsApp or email."
        points={[
          "No long-term contract: plan month by month",
          "A hand-picked squad of student creators or developers",
          "Payment held in escrow until you approve the work",
          "Official invoices from a business registered with SSM (202603205508)",
        ]}
      />
    </main>
  );
}
