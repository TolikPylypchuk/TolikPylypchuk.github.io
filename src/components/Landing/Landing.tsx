import InlineLink from "@/components/InlineLink";

import styles from "./Landing.module.css";

function Landing() {
  return (
    <header className={styles.header}>
      <div className={styles.photoWrapper}>
        <ProfilePicture />
      </div>
      <div className={styles.nameWrapper}>
        <Name />
      </div>
      <div className={styles.linksWrapper}>
        <Links />
      </div>
      <div className={styles.descriptionWrapper}>
        <Description />
      </div>
    </header>
  );
}

function Name() {
  return (
    <>
      <h1 className={styles.name}>
        Hi, I&apos;m <span className={styles.underlined}>Tolik Pylypchuk</span>
      </h1>
      <p className={styles.subtext}>Welcome to my portfolio website</p>
    </>
  );
}

function ProfilePicture() {
  return (
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
  );
}

function Links() {
  return (
    <ol className={styles.links}>
      <li>
        <InlineLink href="#" newTab={false}>
          About me
        </InlineLink>
      </li>
      <li>
        <InlineLink href="#" newTab={false}>
          My projects
        </InlineLink>
      </li>
      <li>
        <InlineLink href="https://github.com/TolikPylypchuk">GitHub</InlineLink>
      </li>
      <li>
        <InlineLink href="https://www.linkedin.com/in/anatoliy-pylypchuk">
          LinkedIn
        </InlineLink>
      </li>
    </ol>
  );
}

function Description() {
  return (
    <p className={styles.description}>
      I&apos;m a software developer from{" "}
      <InlineLink href="https://en.wikipedia.org/wiki/Lviv">
        Lviv, Ukraine
      </InlineLink>
      . I work as a Java back&#8209;end developer at{" "}
      <InlineLink href="https://kindgeek.com">Kindgeek</InlineLink>, but also
      have several{" "}
      <InlineLink href="https://github.com/TolikPylypchuk">
        open-source projects
      </InlineLink>
      , mostly using .NET. I like creating stuff, hacking around, and learning
      new technologies regularly.
    </p>
  );
}

export default Landing;
