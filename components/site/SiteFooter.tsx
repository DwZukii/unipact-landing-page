import Link from "next/link";
import BrandLogo from "./BrandLogo";
import WhatsAppButton from "./WhatsAppButton";
import { CONTACT_EMAIL, LINKS, SSM_NUMBER, TEAM } from "@/lib/site";
import styles from "./footer.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="UniPact home" className={styles.home}>
            <BrandLogo />
          </Link>
          <p className={styles.blurb}>
            Vetted university student teams for software and digital marketing projects in Malaysia.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav aria-label="Services">
          <h2 className={styles.heading}>Services</h2>
          <ul className={styles.list}>
            <li><Link href="/#proof">Our work</Link></li>
            <li><Link href="/#services">What we build</Link></li>
            <li><Link href="/#how-it-works">How it works</Link></li>
            <li><Link href="/#pricing">Pricing</Link></li>
            <li><Link href="/team">The team</Link></li>
            <li><Link href="/sme">For SMEs and brands</Link></li>
            <li><Link href="/clients">Global clients</Link></li>
          </ul>
        </nav>

        <nav aria-label="Get started">
          <h2 className={styles.heading}>Get started</h2>
          <ul className={styles.list}>
            <li><a href={LINKS.postProject}>Post a project</a></li>
            <li><Link href="/#contact">Talk to us</Link></li>
            <li><Link href="/#students">For students</Link></li>
            <li><a href={LINKS.login}>Log in</a></li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className={styles.heading}>Legal</h2>
          <ul className={styles.list}>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><a href={LINKS.clientAgreement}>Client Service Agreement</a></li>
            <li><a href={LINKS.talentAgreement}>Talent Agreement</a></li>
          </ul>
        </nav>
      </div>

      <div className={styles.band}>
        <div className={`container ${styles.team}`}>
          {TEAM.map((person) => (
            <div key={person.email}>
              <p className={styles.name}>{person.name}</p>
              <p className={styles.role}>{person.role}</p>
              <a href={`mailto:${person.email}`} className={styles.email}>
                {person.email}
              </a>
              <a href={`tel:${person.phone.replace(/[^+\d]/g, "")}`} className={styles.phone}>
                {person.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.band}>
        <p className={`container ${styles.legal}`}>
          &copy; 2026 UniPact. Registered in Malaysia, SSM no. {SSM_NUMBER}. All rights reserved.
        </p>
      </div>
      <WhatsAppButton />
    </footer>
  );
}
