import Image from "next/image";
import styles from "./brand.module.css";

// Same lockup as the platform: the shield mark beside the UNIPACT wordmark.
export default function BrandLogo() {
  return (
    <span className={styles.logo}>
      <Image src="/unipact-mark.png" alt="" width={421} height={416} className={styles.mark} loading="eager" />
      <span className={styles.word} translate="no">
        UNIPACT
      </span>
    </span>
  );
}
