"use client";

import { ReactNode } from "react";
import { scrollToSectionId } from "./Navbar";
import CompanyApplicationForm from "./CompanyApplicationForm";

import type { CaseStudy } from "@/lib/sanity/queries";

const APP_URL = "https://app.unipact.my";

export default function HomeSections({
  headlineDesktop = (
    <>
      Post a job. Get matched.
      <br />
      Pay for verified work.
    </>
  ),
  headlineMobile = (
    <>
      Post a job.
      <br />
      Get matched.
      <br />
      Pay for results.
    </>
  ),
  caseStudies = [],
}: {
  headlineDesktop?: ReactNode;
  headlineMobile?: ReactNode;
  caseStudies?: CaseStudy[];
}) {
  const primaryStudy = caseStudies && caseStudies.length > 0 ? caseStudies[0] : null;
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>Closed Beta &mdash; Now Matching
              </div>
              <h1 className="headline headline-desktop">{headlineDesktop}</h1>
              <h1 className="headline headline-mobile">{headlineMobile}</h1>
              <p className="sub-headline sub-headline-desktop">
                Post a paid job in Software Development or Digital Marketing and UniPact matches you with one
                verified, best-fit student &mdash; no applicant pile to sort through. Pay milestone by milestone
                through escrow, so you only pay for work that&apos;s actually delivered.
              </p>
              <p className="sub-headline sub-headline-mobile">
                One verified student. Milestone payments. Escrow-secured. No applicant pile.
              </p>
              <div className="scope-tags">
                <a
                  href={`${APP_URL}/register/student`}
                  className="scope-tag scope-tag-link"
                  title="Apply as a Software Developer student"
                >
                  Software Dev <span className="tag-arrow">↗</span>
                </a>
                <a
                  href={`${APP_URL}/register/student`}
                  className="scope-tag scope-tag-link"
                  title="Apply as a Digital Marketing / Video Editing student"
                >
                  Digital Marketing / Video <span className="tag-arrow">↗</span>
                </a>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`${APP_URL}/register/company`}>
                  Post a project
                </a>
              </div>
            </div>

            <aside className="hero-proof">
              <p className="eyebrow eyebrow-on-panel">
                <span className="eyebrow-dot"></span>Proof of work
              </p>
              <p className="hero-proof-id">Bounty #UP-001</p>
              <p className="hero-proof-stat">
                7 <span>days</span>
              </p>
              <p className="hero-proof-caption">From brief to a live sales CRM dashboard</p>
              <div className="hero-proof-rule"></div>
              <div className="hero-proof-row">
                <div>
                  <p className="hero-proof-mini-stat">15 hrs</p>
                  <p className="hero-proof-mini-label">Saved / week / agent</p>
                </div>
                <div>
                  <p className="hero-proof-mini-stat">200</p>
                  <p className="hero-proof-mini-label">Agents on the new workflow</p>
                </div>
              </div>
              <a
                href="#proof-section"
                className="hero-proof-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionId("proof-section");
                }}
              >
                Full case study &rarr;
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Proof of Work */}
      <section id="proof-section" className="proof-section">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span>
            {primaryStudy?.client
              ? `Proof of work — ${primaryStudy.client}`
              : "Proof of work — Bounty #UP-001"}
          </p>
          <h2 className="section-title">
            {primaryStudy?.title ? (
              primaryStudy.title
            ) : (
              <>
                A working sales CRM.
                <br />
                Built and verified in 7 days.
              </>
            )}
          </h2>
          <p className="proof-copy">
            {primaryStudy?.summary ||
              "A UniPact team was matched to a financial consulting agency that needed a sales CRM built from scratch. The brief was scoped, the milestones were set, and the work was delivered and verified against the original brief — escrow released on completion."}
          </p>

          <div className="stat-bar">
            {primaryStudy?.metrics && primaryStudy.metrics.length > 0 ? (
              primaryStudy.metrics.map((metric, idx) => (
                <div key={idx} className="stat">
                  <p className="stat-value">{metric.value}</p>
                  <p className="stat-label">{metric.label}</p>
                </div>
              ))
            ) : (
              <>
                <div className="stat">
                  <p className="stat-value">7</p>
                  <p className="stat-label">Days, brief to live dashboard</p>
                </div>
                <div className="stat">
                  <p className="stat-value">
                    15<span className="stat-unit">hrs</span>
                  </p>
                  <p className="stat-label">Saved per week, per agent</p>
                </div>
                <div className="stat">
                  <p className="stat-value">200</p>
                  <p className="stat-label">Agents on the new workflow</p>
                </div>
                <div className="stat">
                  <p className="stat-value">RM3,000</p>
                  <p className="stat-label">Saved per year on CRM licences</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Currently In The Pipeline */}
      <section className="pipeline">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span>Currently in the pipeline
          </p>
          <h2 className="section-title">Real projects, underway right now.</h2>
          <p className="pipeline-intro">
            Bounty #UP-001 is delivered and verified. These two are still in progress &mdash; no numbers yet,
            just work in motion.
          </p>

          <div className="pipeline-grid">
            <div className="pipeline-card">
              <span className="pipeline-tag">In development</span>
              <h3>Tuition centre operations</h3>
              <p>
                A traditional tuition centre is moving off pen-and-paper &mdash; scheduling, records, and
                day-to-day admin are being rebuilt as proper software.
              </p>
            </div>
            <div className="pipeline-card">
              <span className="pipeline-tag">In development</span>
              <h3>Interior visualization app</h3>
              <p>
                An app where you photograph a room, then drag and drop furniture into the photo &mdash; so
                clients can see how a space could look before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span>How it works
          </p>
          <h2 className="section-title">From job brief to verified delivery.</h2>

          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <div className="step-body">
                <h3>Company posts a job</h3>
                <p>Fixed scope, fixed payout, defined milestones. No vague briefs, no open-ended budgets.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <div className="step-body">
                <h3>UniPact matches the talent</h3>
                <p>
                  One best-fit, verified student is matched to the job &mdash; not a public applicant pool to
                  filter through.
                </p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <div className="step-body">
                <h3>Student executes</h3>
                <p>Work is delivered against the agreed milestones, tracked from kickoff to handover.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">04</span>
              <div className="step-body">
                <h3>Paid at each milestone</h3>
                <p>
                  Funds sit in escrow and release as each milestone is verified delivered. Both sides are
                  covered.
                </p>
              </div>
            </div>
          </div>

          <div className="outcomes">
            <div className="outcome">
              <p className="outcome-label">Company walks away with</p>
              <p className="outcome-value">A delivery report</p>
            </div>
            <div className="outcome-rule"></div>
            <div className="outcome">
              <p className="outcome-label">Student walks away with</p>
              <p className="outcome-value">A verified talent record</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section id="companies-section" className="company-section">
        <div className="container">
          <div className="company-grid">
            <div className="company-pitch">
              <p className="eyebrow">
                <span className="eyebrow-dot"></span>For companies
              </p>
              <h2>Post the job. We match the talent.</h2>
              <p>
                Skip the applicant pile. Tell us the scope and the payout &mdash; UniPact matches one verified
                student who fits, and escrow handles the rest.
              </p>

              <ul className="feature-list">
                <li>Post a fixed-scope job with a fixed payout</li>
                <li>Get matched with one verified, best-fit student</li>
                <li>Pay per milestone, held in escrow until work is verified</li>
                <li>Walk away with a delivery report</li>
              </ul>
            </div>

            <div className="company-form">
              <CompanyApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <div className="container">
          <div className="closing-cta-box">
            <h2>Ready to work with us?</h2>
            <div className="closing-cta-actions">
              <a className="btn btn-primary" href={`${APP_URL}/register/company`}>
                Post a project
              </a>
              <div className="student-links-bar">
                <span className="student-links-title">Student applications:</span>
                <div className="student-links-pills">
                  <a href={`${APP_URL}/register/student`} className="student-pill-link">
                    Software Developer &rarr;
                  </a>
                  <a href={`${APP_URL}/register/student`} className="student-pill-link">
                    Digital Marketing / Video &rarr;
                  </a>
                </div>
              </div>
              <a href="mailto:unipact.my@gmail.com" className="closing-cta-email">
                or email us at unipact.my@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
