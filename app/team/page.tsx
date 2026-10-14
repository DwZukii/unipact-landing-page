import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { CORE_TEAM, LINKS, TALENTS, type Talent } from "@/lib/site";
import ui from "@/components/site/ui.module.css";
import styles from "./team.module.css";

const TITLE = "The Team | UniPact";
const DESCRIPTION =
  "Meet the university students who run UniPact and the talents who deliver its software development and digital marketing projects.";

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

const TALENT_GROUPS: Talent[] = ["Software Development", "Digital Marketing"];

const badgeTone = (talent: Talent) => (talent === "Software Development" ? ui.badgeNavy : ui.badgeInfo);

// A portrait, or the person's initial in the same frame while their photo is still to come.
function Portrait({ name, photo, sizes }: { name: string; photo?: string; sizes: string }) {
  if (!photo) {
    return (
      <div className={styles.placeholder} aria-hidden="true">
        {name.charAt(0)}
      </div>
    );
  }
  return <Image src={photo} alt={`Portrait of ${name}`} width={360} height={450} sizes={sizes} className={styles.photo} />;
}

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

        <section className={styles.group} aria-labelledby="core-team">
          <div className="container">
            <h2 id="core-team" className={styles.groupTitle}>
              Core team
            </h2>
            <ul className={styles.core}>
              {CORE_TEAM.map(({ name, role, talent, photo }) => (
                <li key={name}>
                  <Portrait name={name} photo={photo} sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw" />
                  <p className={styles.name}>{name}</p>
                  <p className={styles.role}>{role}</p>
                  {talent ? <p className={`${ui.badge} ${badgeTone(talent)} ${styles.talent}`}>{talent}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.group} ${styles.talents}`} aria-labelledby="talents">
          <div className="container">
            <h2 id="talents" className={styles.groupTitle}>
              Talents
            </h2>
            <p className={styles.groupLead}>The students who build and deliver our clients&rsquo; projects.</p>
            <div className={styles.talentGroups}>
              {TALENT_GROUPS.map((group) => (
                <div key={group}>
                  <h3 className={styles.talentGroupTitle}>
                    <span className={`${ui.badge} ${badgeTone(group)}`}>{group}</span>
                  </h3>
                  <ul className={styles.talentList}>
                    {TALENTS.filter((person) => person.talent === group).map(({ name, photo }) => (
                      <li key={name}>
                        <Portrait name={name} photo={photo} sizes="(min-width: 1024px) 150px, 30vw" />
                        <p className={styles.talentName}>{name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
