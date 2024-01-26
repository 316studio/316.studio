import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/316-logo.svg"
          alt="316 Studio"
          width={500}
          height={500}
          priority
        />
      </div>
      <a
        href="https://wa.me/message/TVUPZTIHGS7ZF1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/whatsapp-cta-fr.svg"
          alt="Discutez avec nous sur WhatsApp"
          width={250}
          height={77}
          priority
        />
      </a>
    </main>
  );
}
