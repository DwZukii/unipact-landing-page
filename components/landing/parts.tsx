import type { ReactNode } from "react";
import { ChevronDown, CircleCheck } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import ui from "@/components/site/ui.module.css";
import home from "@/components/home/home.module.css";
import styles from "./landing.module.css";

// Building blocks shared by the audience pages (/sme and /clients). They reuse the
// homepage's styles wherever a pattern already exists there, so the pages look like one site.

export function LandingHero({
  title,
  text,
  primary,
  secondary,
  ticks,
}: {
  title: ReactNode;
  text: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  ticks: string[];
}) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={home.heroText}>{text}</p>
          <div className={home.heroActions}>
            <a href={primary.href} className={`${ui.btn} ${ui.btnNavy} ${ui.btnLg}`}>
              {primary.label}
            </a>
            <a href={secondary.href} className={`${ui.btn} ${ui.btnSecondary} ${ui.btnLg}`}>
              {secondary.label}
            </a>
          </div>
          <ul className={home.heroTrust}>
            {ticks.map((tick) => (
              <li key={tick}>
                <CircleCheck size={16} aria-hidden="true" /> {tick}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className={ui.head}>
      <h2 className={ui.title}>{title}</h2>
      {lead ? <p className={ui.lead}>{lead}</p> : null}
    </div>
  );
}

// A list with a small cyan dot per item, instead of a line between items.
export function DotList({ items, onDark = false }: { items: ReactNode[]; onDark?: boolean }) {
  return (
    <ul className={`${styles.dotList} ${onDark ? styles.dotListDark : ""}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LandingFaq({
  title,
  items,
  onWhite = false,
}: {
  title: string;
  items: { q: string; a: string }[];
  onWhite?: boolean;
}) {
  return (
    <section id="faq" className={`${ui.section} ${onWhite ? `${ui.sectionWhite} ${styles.faqOnWhite}` : ""}`}>
      <div className={`container ${home.faq}`}>
        <h2 className={ui.title}>{title}</h2>
        <div className={home.faqList}>
          {items.map(({ q, a }) => (
            <details key={q} className={home.faqItem}>
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
  );
}

// The enquiry form on the navy band, as on the homepage.
export function LandingContact({ title, text, points }: { title: string; text: string; points: string[] }) {
  return (
    <section id="contact" className={`${ui.section} ${home.navyBand}`}>
      <div className={`container ${home.contact}`}>
        <div className={home.contactCopy}>
          <h2 className={ui.title}>{title}</h2>
          <p className={ui.lead}>{text}</p>
          <DotList items={points} onDark />
        </div>
        <div className={home.contactForm}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
