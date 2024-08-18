import Image from "next/image";

import InlineLink from "@/components/InlineLink";

import styles from "./page.module.css";
import author from "@/../public/images/me.jpg";

export default function Home() {
  return (
    <header className={styles.header}>
      <div className={styles.photoWrapper}>
        <Image className={styles.photo} src={author} alt="Me" />
      </div>
      <div className={styles.nameWrapper}>
        <h1 className={styles.name}>
          Hi, I&apos;m{" "}
          <span className={styles.underlined}>Tolik Pylypchuk</span>
        </h1>
        <p className={styles.subtext}>Welcome to my portfolio website</p>
      </div>
      <div className={styles.linksWrapper}></div>
      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>
          I&apos;m a software developer from{" "}
          <InlineLink href="https://en.wikipedia.org/wiki/Lviv">
            Lviv, Ukraine
          </InlineLink>
          . I work as a Java back&#8209;end developer at{" "}
          <InlineLink href="https://kindgeek.com">Kindgeek</InlineLink>, but
          also have several{" "}
          <InlineLink href="https://github.com/TolikPylypchuk">
            open-source projects
          </InlineLink>
          , mostly using .NET. I like creating stuff, hacking around, and
          learning new technologies regularly.
        </p>
      </div>
    </header>
  );
}
