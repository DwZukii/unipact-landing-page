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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  function closeMobileNav() {
    setNavOpen(false);
    setDropdownOpen(false);
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
        <nav className={`nav-links${navOpen ? " open" : ""}`} id="navLinks">
          <Link className="nav-btn" href="/sme">
            For SMEs &amp; Brands
          </Link>
          <Link className="nav-btn" href="/clients">
            Global Clients
          </Link>
          <div
            className={`nav-dropdown${dropdownOpen ? " open" : ""}`}
            id="studentDropdownWrapper"
            ref={wrapperRef}
          >
            <button
              className="nav-student-link nav-dropdown-btn"
              id="studentDropdownBtn"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((open) => !open);
              }}
            >
              I&apos;m a Student <span className="ext-icon" aria-hidden="true">&#9662;</span>
            </button>
            <div className="nav-dropdown-menu" id="studentDropdownMenu">
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
