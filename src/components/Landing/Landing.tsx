import { ArrowDown } from "react-feather";

import TextLink from "@/components/TextLink";

import styles from "./Landing.module.css";

type LandingProps = {
  scrollRef: React.RefObject<HTMLElement | undefined>;
};

export default function Landing({ scrollRef }: LandingProps) {
  return (
    <header className={styles.header}>
      <div className={styles.photoWrapper}>
        <picture>
          <source type="image/webp" srcSet="/images/me.webp" />
          <source type="image/jpg" srcSet="/images/me.jpg" />
          <img
            className={styles.photo}
            alt="Me"
            src="/images/me.jpg"
            width={300}
            height={300}
          />
        </picture>
      </div>

      <div className={styles.nameWrapper}>
        <h1 className={styles.name}>
          Hi, I&apos;m{" "}
          <span className={styles.underlined}>Tolik Pylypchuk</span>
        </h1>
        <p className={styles.subtext}>Welcome to my portfolio website</p>
      </div>

      <div className={styles.linksWrapper}>
        <ol className={styles.links}>
          <li>
            <TextLink href="/#about-me" newTab={false}>
              About me
            </TextLink>
          </li>
          <li>
            <TextLink href="/#" newTab={false}>
              Projects
            </TextLink>
          </li>
          <li>
            <TextLink href="/#" newTab={false}>
              Blog
            </TextLink>
          </li>
          <li>
            <TextLink href="https://github.com/TolikPylypchuk">GitHub</TextLink>
          </li>
          <li>
            <TextLink href="https://www.linkedin.com/in/anatoliy-pylypchuk">
              LinkedIn
            </TextLink>
          </li>
        </ol>
      </div>

      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>
          I&apos;m a software developer from{" "}
          <TextLink href="https://en.wikipedia.org/wiki/Lviv">
            Lviv, Ukraine
          </TextLink>
          . I work as a Java back&#8209;end developer at{" "}
          <TextLink href="https://kindgeek.com">Kindgeek</TextLink>, but also
          have several{" "}
          <TextLink href="https://github.com/TolikPylypchuk">
            open-source projects
          </TextLink>
          , mostly using .NET. I like creating stuff, hacking around, and
          learning new technologies regularly.
        </p>
      </div>

      <div className={styles.scrollWrapper}>
        <button
          className={styles.scrollButton}
          onClick={() => {
            scrollRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </header>
  );
}
