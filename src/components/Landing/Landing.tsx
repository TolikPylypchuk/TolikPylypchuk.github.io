import { ArrowDownIcon } from "@radix-ui/react-icons";

import TextLink from "@/components/TextLink";
import { pageAnchors, href } from "@/utils/pageAnchors";

import styles from "./Landing.module.css";

type LandingProps = {
  scrollRef: React.RefObject<HTMLElement | undefined | null>;
};

export default function Landing({ scrollRef }: LandingProps) {
  return (
    <header className={styles.header}>
      <div className={styles.photoWrapper}>
        <picture>
          <source type="image/webp" srcSet="/images/me.webp" />
          <source type="image/jpg" srcSet="/images/me.jpg" />
          <img
            alt="Me"
            src="/images/me.jpg"
            width={300}
            height={300}
            className={styles.photo}
          />
        </picture>
      </div>

      <hgroup className={styles.nameWrapper}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>Tolik Pylypchuk</span>
        </h1>
        <p className={styles.subtext}>Welcome to my portfolio website</p>
      </hgroup>

      <div className={styles.linksWrapper}>
        <ol className={styles.links}>
          <li>
            <TextLink href={href(pageAnchors.aboutMe)} newTab={false}>
              About me
            </TextLink>
          </li>
          <li>
            <TextLink href={href(pageAnchors.projects)} newTab={false}>
              Projects
            </TextLink>
          </li>
          <li>
            <TextLink href={href(pageAnchors.blog)} newTab={false}>
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
          <ArrowDownIcon width={24} height={24} />
        </button>
      </div>
    </header>
  );
}
