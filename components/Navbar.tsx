"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const APP_URL = "https://app.unipact.my";

export function scrollToSectionId(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbar = document.querySelector(".navbar") as HTMLElement | null;
    const navHeight = navbar?.offsetHeight ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: sectionTop - navHeight - 20,
      behavior: "smooth",
    });
  }
}

export default function Navbar({
  variant = "full",
  logoAlt = "",
}: {
  variant?: "full" | "simple";
  logoAlt?: string;
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"company" | "student" | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  function closeMobileNav() {
    setNavOpen(false);
    setOpenMenu(null);
  }

  function handleScrollTo(sectionId: string) {
    closeMobileNav();
    scrollToSectionId(sectionId);
  }

  if (variant === "simple") {
    return (
      <header className="navbar">
        <div className="container nav-content">
          <Link href="/" className="logo-link" aria-label="UniPact home">
            <span className="logo-mark">
              <img src="/logo-mark.png" alt={logoAlt} className="logo-mark-img" />
            </span>
            <span className="logo-wordmark">
              <span className="logo-uni">UNI</span>
              <span className="logo-pact">PACT</span>
            </span>
          </Link>
          <Link className="nav-btn" href="/">
            &larr; Back to Home
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-link" aria-label="UniPact home">
          <span className="logo-mark">
            <img src="/logo-mark.png" alt="" className="logo-mark-img" />
          </span>
          <span className="logo-wordmark">
            <span className="logo-uni">UNI</span>
            <span className="logo-pact">PACT</span>
          </span>
        </Link>
        <nav className={`nav-links${navOpen ? " open" : ""}`} id="navLinks" ref={navRef}>
          <div className={`nav-dropdown${openMenu === "company" ? " open" : ""}`}>
            <button
              className="nav-student-link nav-dropdown-btn"
              aria-expanded={openMenu === "company"}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu((open) => (open === "company" ? null : "company"));
              }}
            >
              I&apos;m a Company <span className="ext-icon" aria-hidden="true">&#9662;</span>
            </button>
            <div className="nav-dropdown-menu">
              <Link className="nav-dropdown-item" href="/sme" onClick={closeMobileNav}>
                <span className="dropdown-item-title">For SMEs &amp; Brands</span>
                <span className="dropdown-item-sub">Malaysian businesses &amp; local growth</span>
              </Link>
              <Link className="nav-dropdown-item" href="/clients" onClick={closeMobileNav}>
                <span className="dropdown-item-title">Global Clients</span>
                <span className="dropdown-item-sub">Overseas teams &amp; agency alternatives</span>
              </Link>
            </div>
          </div>
          <div className={`nav-dropdown${openMenu === "student" ? " open" : ""}`}>
            <button
              className="nav-student-link nav-dropdown-btn"
              aria-expanded={openMenu === "student"}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu((open) => (open === "student" ? null : "student"));
              }}
            >
              I&apos;m a Student <span className="ext-icon" aria-hidden="true">&#9662;</span>
            </button>
            <div className="nav-dropdown-menu">
              <a className="nav-dropdown-item" href={`${APP_URL}/register/student`}>
                <span className="dropdown-item-title">Software Developer</span>
                <span className="dropdown-item-sub">Web, Mobile &amp; Backend</span>
              </a>
              <a className="nav-dropdown-item" href={`${APP_URL}/register/student`}>
                <span className="dropdown-item-title">Digital Marketing / Video</span>
                <span className="dropdown-item-sub">Social, Growth &amp; Video Editing</span>
              </a>
            </div>
          </div>
          <a className="nav-btn" href={`${APP_URL}/login`}>
            Log in
          </a>
          <a className="btn btn-primary nav-cta" href={`${APP_URL}/register/company`}>
            Post a project
          </a>
        </nav>
        <button
          className={`nav-toggle${navOpen ? " open" : ""}`}
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          aria-controls="navLinks"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
