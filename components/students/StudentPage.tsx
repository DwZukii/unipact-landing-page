import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import JsonLd from "@/components/site/JsonLd";
import { DotList, LandingFaq, LandingHero } from "@/components/landing/parts";
import ui from "@/components/site/ui.module.css";
import home from "@/components/home/home.module.css";
import styles from "@/components/landing/landing.module.css";
import { pageSchema } from "@/lib/schema";
import { LINKS } from "@/lib/site";
import { STUDENT_STEPS, type StudentPageContent } from "./content";

export default function StudentPage({ content }: { content: StudentPageContent }) {
  const { hero, blocks, faqs, crumbs, path, metaTitle, description } = content;
  // Steps come first on the plain background, then the blocks alternate with white.
  const lastBlockIsWhite = (blocks.length - 1) % 2 === 0;

  return (
    <>
      <JsonLd data={pageSchema({ path, name: metaTitle, description, language: "ms", crumbs, faqs })} />
      <SiteNav />
      {/* The nav and footer stay in English; the page itself is Bahasa Malaysia. */}
      <main id="main" lang="ms">
        <LandingHero
          title={
            <>
              {hero.title} <span>{hero.accent}</span>
            </>
          }
          text={hero.text}
          primary={{ label: "Daftar akaun pelajar", href: LINKS.joinStudent }}
          secondary={{ label: "Soalan lazim", href: "#faq" }}
          ticks={hero.ticks}
        />

        <section id="langkah" className={ui.section}>
          <div className="container">
            <div className={ui.head}>
              <h2 className={ui.title}>Daripada daftar kepada bayaran dalam empat langkah</h2>
            </div>
            <ol className={home.steps}>
              {STUDENT_STEPS.map(({ title, text }, i) => (
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

        {blocks.map(({ id, title, lead, items }, i) => (
          <section key={id} id={id} className={`${ui.section} ${i % 2 === 0 ? ui.sectionWhite : ""}`}>
            <div className={`container ${styles.split}`}>
              <div className={styles.splitHead}>
                <h2 className={ui.title}>{title}</h2>
                {lead ? <p className={ui.lead}>{lead}</p> : null}
              </div>
              <DotList items={items} />
            </div>
          </section>
        ))}

        <LandingFaq title="Soalan lazim pelajar" items={faqs} onWhite={!lastBlockIsWhite} />

        <section className={`${ui.section} ${home.navyBand}`}>
          <div className={`container ${home.contactCopy}`}>
            <h2 className={ui.title}>Sedia untuk mula?</h2>
            <p className={ui.lead}>
              Daftar akaun pelajar anda. Selepas itu, admin UniPact mengesahkan status pelajar anda sebelum anda
              dipadankan dengan projek.
            </p>
            <div className={home.studentActions}>
              <a href={LINKS.joinStudent} className={`${ui.btn} ${ui.btnCyan} ${ui.btnLg}`}>
                Daftar akaun pelajar <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href={LINKS.login} className={`${ui.btn} ${ui.btnGhostOnDark} ${ui.btnLg}`}>
                Sudah ada akaun? Log masuk
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
