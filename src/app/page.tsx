import styles from "./page.module.css";
import Image from "next/image";
import author from "../../public/me.jpg";

export default function Home() {
  return (
    <main className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.nameWrapper}>
          <h1 className={styles.name}>Hi, I&apos;m Tolik Pylypchuk</h1>
          <h2 className={styles.subtext}>A software developer</h2>
        </div>
        <div className={styles.photoWrapper}>
          <Image className={styles.photo} src={author} alt="Me" />
        </div>
      </header>
    </main>
  );
}
