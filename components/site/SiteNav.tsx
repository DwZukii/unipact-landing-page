"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { LINKS, NAV_LINKS } from "@/lib/site";
import ui from "./ui.module.css";
import styles from "./nav.module.css";

// Two states, as on the platform: from 1024px the links sit in the bar; below that
// everything lives in the menu.
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = (e: MediaQueryListEvent) => e.matches && setOpen(false);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <header className={`${styles.shell}${scrolled || open ? ` ${styles.raised}` : ""}`}>
      <nav className={`container ${styles.bar}`} aria-label="Main">
        <Link href="/" className={styles.home} aria-label="UniPact home">
          <BrandLogo />
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href={LINKS.login} className={styles.login}>
            Log in
          </a>
          <a href={LINKS.postProject} className={`${ui.btn} ${ui.btnNavy}`}>
            Post a project
          </a>
        </div>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="site-menu" className={styles.menu}>
          <div className="container">
            <ul className={styles.menuLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.menuLink} onClick={() => setOpen(false)}>
                    {link.label} <ChevronRight size={18} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.menuActions}>
              <a href={LINKS.login} className={`${ui.btn} ${ui.btnSecondary}`}>
                Log in
              </a>
              <a href={LINKS.postProject} className={`${ui.btn} ${ui.btnNavy}`}>
                Post a project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
