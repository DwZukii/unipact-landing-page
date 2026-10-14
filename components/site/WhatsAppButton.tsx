import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";
import styles from "./whatsapp.module.css";

// Malaysian clients expect to reach a business on WhatsApp, so the button stays in
// view on every page. It only appears once a number is set in lib/site.ts.
export default function WhatsAppButton() {
  if (!WHATSAPP_LINK) return null;

  return (
    <a href={WHATSAPP_LINK} className={styles.button} target="_blank" rel="noopener noreferrer">
      <MessageCircle size={20} aria-hidden="true" className={styles.icon} />
      WhatsApp us
    </a>
  );
}
