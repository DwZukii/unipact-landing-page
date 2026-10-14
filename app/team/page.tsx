import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { LINKS, PEOPLE } from "@/lib/site";
import ui from "@/components/site/ui.module.css";
import styles from "./team.module.css";

const TITLE = "The Team | UniPact";
const DESCRIPTION =
  "Meet the university students who run UniPact: they scope each brief, pick the student team and manage the project through to handover.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.unipact.my/team",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.unipact.my/team",
    images: ["https://www.unipact.my/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TeamPage() {
  return (
    <>
      <SiteNav />
      <main id="main" className={styles.page}>
        <section className={styles.intro}>
          <div className="container">
            <h1 className={styles.title}>The team behind UniPact</h1>
            <p className={styles.lead}>
              We are university students in Malaysia. We scope each client&rsquo;s brief, pick the student team for
              it and manage the project until the work is accepted.
            </p>
          </div>
        </section>

        <section className={styles.peopleSection} aria-label="Team members">
          <div className="container">
            <ul className={styles.people}>
              {PEOPLE.map(({ name, role, talent, photo }) => (
                <li key={name}>
                  <Image
                    src={photo}
                    alt={`Portrait of ${name}`}
                    width={360}
                    height={450}
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 30vw, 45vw"
                    className={styles.photo}
                  />
                  <p className={styles.name}>{name}</p>
                  <p className={styles.role}>{role}</p>
                  {talent ? (
                    <p
                      className={`${ui.badge} ${talent === "Software Development" ? ui.badgeNavy : ui.badgeInfo} ${styles.talent}`}
                    >
                      {talent}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <div>
              <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
              <p className={styles.ctaText}>Post it for free, or send us a few lines first and we will help you scope it.</p>
            </div>
            <div className={styles.ctaActions}>
              <a href={LINKS.postProject} className={`${ui.btn} ${ui.btnCyan} ${ui.btnLg}`}>
                Post a project
              </a>
              <Link href="/#contact" className={`${ui.btn} ${ui.btnGhostOnDark} ${ui.btnLg}`}>
                Talk to us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
