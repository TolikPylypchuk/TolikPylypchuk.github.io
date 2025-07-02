import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <hr className={styles.separator} />
      <p className={styles.copyrightText}>© 2024 Anatoliy Pylypchuk</p>
    </div>
  );
}
