"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./home.module.css";

type Protection = { title: string; text: string };

// A grid on desktop. Below 768px it becomes a sideways row of cards (see
// home.module.css): touch screens swipe it, and the arrow buttons move it one card at a
// time for a mouse or keyboard.
export default function ProtectionsRow({ items }: { items: Protection[] }) {
  const rowRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setAtStart(row.scrollLeft <= 4);
        setAtEnd(row.scrollLeft + row.clientWidth >= row.scrollWidth - 4);
      });
    };
    update();
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      row.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function move(direction: 1 | -1) {
    const row = rowRef.current;
    const card = row?.firstElementChild as HTMLElement | null;
    if (!row || !card) return;
    const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    row.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: smooth ? "smooth" : "auto" });
  }

  return (
    <>
      <ul ref={rowRef} className={styles.protections} aria-label="What protects you">
        {items.map(({ title, text }, i) => (
          <li key={title}>
            <p className={styles.protectionCount} aria-hidden="true">
              {i + 1} of {items.length}
            </p>
            <p className={styles.protectionTitle}>{title}</p>
            <p className={styles.protectionText}>{text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.swipeBar}>
        <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous protection">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Next protection">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
