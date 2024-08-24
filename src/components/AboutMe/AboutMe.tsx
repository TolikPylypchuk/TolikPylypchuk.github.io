import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.wrapper}>
      <a id="about-me" className={styles.anchor}></a>
      <h2 className={styles.header}>About Me</h2>
      <p className={styles.more}>There&apos;s more to come</p>
    </section>
  );
}
