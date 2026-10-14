"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import styles from "./landing.module.css";

export type Persona = {
  tab: string;
  title: string;
  situation: string;
  problems: string[];
  solution: string;
};

// One persona at a time, chosen with tabs, instead of three cards side by side.
// Left and right arrow keys move between the tabs, as in a standard tab list.
export default function PersonaTabs({ personas }: { personas: Persona[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + personas.length) % personas.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div>
      <div className={styles.tabs} role="tablist" aria-label="Type of business">
        {personas.map((persona, i) => (
          <button
            key={persona.tab}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`persona-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`persona-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={onKeyDown}
          >
            {persona.tab}
          </button>
        ))}
      </div>

      {personas.map((persona, i) => (
        <div
          key={persona.tab}
          role="tabpanel"
          id={`persona-panel-${i}`}
          aria-labelledby={`persona-tab-${i}`}
          hidden={i !== active}
          className={styles.panel}
        >
          <div>
            <h3 className={styles.panelTitle}>{persona.title}</h3>
            <p className={styles.panelText}>{persona.situation}</p>
            <p className={styles.panelLabel}>What gets in the way</p>
            <ul className={styles.dotList}>
              {persona.problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panelSolution}>
            <p className={styles.panelLabel}>What your squad does</p>
            <p>{persona.solution}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
