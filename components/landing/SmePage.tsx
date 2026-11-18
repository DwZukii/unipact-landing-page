import Image from "next/image";
import ui from "@/components/site/ui.module.css";
import home from "@/components/home/home.module.css";
import CreatorClip from "./CreatorClip";
import PersonaTabs, { type Persona } from "./PersonaTabs";
import { DotList, LandingContact, LandingFaq, LandingHero, SectionHead } from "./parts";
import styles from "./landing.module.css";
import { SME_FAQS as FAQS } from "@/lib/faqs";

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
      "You sell on Shopee, TikTok Shop or Shopify. Ad fatigue is hurting your return on ad spend, and you need a steady run of fresh creative variations every month.",
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

// The team's rate card: three monthly tiers, priced in ringgit. Silver is the one shown
// in navy, as the middle option.
// Raziq Syahmee's own client work (the clients agreed to it being shown here), cut to
// 15-second loops at 450x800. Files are public/videos/creator-<name>.mp4 and .webp.
const CLIPS = [
  {
    name: "event-promo",
    title: "Event promo with motion graphics",
    description: "A host introduces a community event, with animated scenes and shots of the crowd.",
  },
  {
    name: "interview",
    title: "Interview with captions",
    description: "A rider at an equestrian centre talks about horse riding, with Malay captions.",
  },
  {
    name: "stables",
    title: "Brand video on a professional camera",
    description: "A riding instructor shows the stables, filmed on a professional camera.",
  },
  {
    name: "campus-skit",
    title: "Event promo skit",
    description: "A short comedy skit, with captions, promoting a university event.",
  },
];

const PACKAGES = [
  {
    name: "Bronze",
    price: "1,000",
    desc: "Steady, clean short videos that keep your page active.",
    bestFor: "For cafés, bakeries and retail",
    points: [
      "8 videos a month",
      "1 filming session",
      "2 videos a week",
      "Script and captions",
      "Clean, standard cuts with text and music",
      "A basic posting schedule",
      "Filmed on iPhone",
      "2 rounds of revisions per video",
    ],
  },
  {
    name: "Silver",
    price: "1,900",
    featured: true,
    desc: "More videos, filmed with professional gear and tested before they go out.",
    bestFor: "For clinics and service businesses",
    points: [
      "12 videos a month",
      "2 filming sessions",
      "3 videos a week",
      "Script and captions",
      "Good pacing, graphics and a version for each platform",
      "A/B testing with Instagram trial reels",
      "Professional camera, microphone and lighting",
    ],
  },
  {
    name: "Gold",
    price: "2,500",
    desc: "The most videos, with premium production and storytelling scripts.",
    bestFor: "For Shopee and TikTok Shop sellers",
    points: [
      "16 videos a month",
      "2 filming sessions",
      "4 videos a week",
      "Detailed storytelling scripts and captions",
      "Premium production and graphics",
      "A/B testing with Instagram trial reels",
      "Professional camera, microphone and lighting",
    ],
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
        text="We match Malaysian business owners, TikTok Shop brands and clinics with verified university creators. Get 8–16 ready-to-post videos a month, on-site shooting and a 48–72 hour turnaround, at student rates and without a full-time marketing hire."
        primary={{ label: "Get a content squad", href: "#contact" }}
        secondary={{ label: "See the packages", href: "#packages" }}
        ticks={["48–72 hour turnaround", "On-site shooting", "Gen-Z creators", "No lock-in contract"]}
        visual={
          <>
            {/* Frames from the team's own behind-the-scenes clips of an on-site shoot. */}
            <Image
              src="/photos/shoot-tripod.webp"
              alt="UniPact student videographer setting up a camera on a tripod on location"
              width={540}
              height={967}
              sizes="220px"
              loading="lazy"
              className={`${styles.visualShoot} ${styles.visualShootBack}`}
            />
            <Image
              src="/photos/shoot-rig.webp"
              alt="Camera rig with a monitor framing an interview during a UniPact on-site video shoot"
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
          <div className={styles.splitHead}>
            <h2 className={ui.title}>Why local businesses switch to UniPact</h2>
            <p className={ui.lead}>
              The four reasons Malaysian SMEs hold back from hiring marketing help, and how we deal with each.
            </p>
          </div>
          {/* Set out as a chat: what owners tell us, then our reply. */}
          <ul className={styles.chat}>
            {OBJECTIONS.map(({ worry, answer }) => (
              <li key={worry} className={styles.exchange}>
                <p className={styles.said}>&ldquo;{worry}&rdquo;</p>
                <p className={styles.reply}>{answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="videos" className={`${ui.section} ${home.navyBand}`}>
        <div className="container">
          <div className={ui.head}>
            <h2 className={ui.title}>What the videos look like</h2>
            <p className={`${ui.lead} ${styles.leadOnNavy}`}>
              Client work by Raziq Syahmee, one of our Digital Marketing talents.
            </p>
          </div>
          <ul className={styles.clips}>
            {CLIPS.map(({ name, title, description }) => (
              <li key={name}>
                <CreatorClip
                  src={`/videos/creator-${name}.mp4`}
                  poster={`/videos/creator-${name}.webp`}
                  title={title}
                  description={description}
                />
                <p className={styles.clipCaption}>{title}</p>
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
            {PACKAGES.map(({ name, price, featured, desc, bestFor, points }) => (
              <div key={name} className={`${styles.package} ${featured ? styles.packageFeatured : ""}`}>
                <h3>{name}</h3>
                <p className={styles.packagePrice}>
                  RM {price} <span>a month</span>
                </p>
                <p className={styles.packageDesc}>{desc}</p>
                <p className={styles.packageFor}>{bestFor}</p>
                <DotList items={points} />
                <a
                  href="#contact"
                  className={`${ui.btn} ${ui.btnBlock} ${featured ? ui.btnCyan : ui.btnSecondary}`}
                >
                  Ask about {name}
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
