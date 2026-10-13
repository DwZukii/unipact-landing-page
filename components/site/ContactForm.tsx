"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, ChevronDown, CircleCheck, LoaderCircle } from "lucide-react";
import { submitCompanyLead } from "@/lib/submitLead";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";
import ui from "./ui.module.css";
import styles from "./form.module.css";

const SCOPES = ["Software development", "Digital marketing and video", "Both", "Not sure yet"];

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    // Filled only by bots: the field is hidden from people.
    if (value("website")) {
      setSentTo(value("corp_email"));
      return;
    }

    const phone = value("phone");
    const details = value("details");

    setSending(true);
    setError(false);
    try {
      // The sheet stores four fields for a company lead, so the phone number and the
      // project details ride along inside the two it already has.
      await submitCompanyLead({
        company_name: value("company_name"),
        contact_person: phone ? `${value("contact_person")} (${phone})` : value("contact_person"),
        corp_email: value("corp_email"),
        scope_needed: details ? `${value("scope")}: ${details}` : value("scope"),
      });
      setSentTo(value("corp_email"));
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sentTo !== null) {
    return (
      <div className={`${ui.card} ${styles.done}`} role="status">
        <span className={styles.doneIcon}>
          <CircleCheck size={28} aria-hidden="true" />
        </span>
        <h3>Thanks, we have your enquiry</h3>
        <p>
          We will reply at <strong>{sentTo}</strong> to talk through what you need.
        </p>
        <a href={LINKS.postProject} className={`${ui.btn} ${ui.btnNavy}`}>
          Create a client account <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${ui.card} ${styles.form}`}>
      <h3 className={styles.formTitle}>Tell us what you need</h3>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="lead-company">Company name</label>
          <input id="lead-company" name="company_name" required autoComplete="organization" placeholder="Acme Sdn Bhd" />
        </div>
        <div className={styles.field}>
          <label htmlFor="lead-contact">Your name</label>
          <input id="lead-contact" name="contact_person" required autoComplete="name" placeholder="Aisyah Rahman" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="lead-email">Work email</label>
          <input id="lead-email" name="corp_email" type="email" required autoComplete="email" placeholder="aisyah@acme.com.my" />
        </div>
        <div className={styles.field}>
          <label htmlFor="lead-phone">
            Phone or WhatsApp <span className={styles.optional}>optional</span>
          </label>
          <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+60 12-345 6789" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="lead-scope">What do you need?</label>
        <div className={styles.select}>
          <select id="lead-scope" name="scope" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {SCOPES.map((scope) => (
              <option key={scope} value={scope}>
                {scope}
              </option>
            ))}
          </select>
          <ChevronDown size={16} aria-hidden="true" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="lead-details">
          About the project <span className={styles.optional}>optional</span>
        </label>
        <textarea
          id="lead-details"
          name="details"
          rows={3}
          maxLength={600}
          placeholder="e.g. We need a booking website for our clinic, live before December."
        />
      </div>

      <div className={styles.trap} aria-hidden="true">
        <label htmlFor="lead-website">Website</label>
        <input id="lead-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p className={styles.error} role="alert">
          We could not send your details. Please try again, or email {CONTACT_EMAIL}.
        </p>
      )}

      <button type="submit" disabled={sending} className={`${ui.btn} ${ui.btnNavy} ${ui.btnLg} ${ui.btnBlock}`}>
        {sending ? (
          <>
            <LoaderCircle size={17} className={styles.spin} aria-hidden="true" /> Sending
          </>
        ) : (
          <>
            Send enquiry <ArrowRight size={16} aria-hidden="true" />
          </>
        )}
      </button>
      <p className={styles.note}>
        Ready to post it yourself? <a href={LINKS.postProject}>Create a client account</a>.
      </p>
    </form>
  );
}
