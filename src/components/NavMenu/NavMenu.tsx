import Link from "next/link";
import { GitHub, Linkedin } from "react-feather";

import TextLink from "@/components/TextLink";

import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <ol className={styles.navLinks}>
        <li>
          <TextLink href="/#" newTab={false}>
            Home
          </TextLink>
        </li>
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
      </ol>
      <ol className={styles.navLinkIcons}>
        <li>
          <Link
            href="https://github.com/TolikPylypchuk"
            target="_blank"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <GitHub size={25} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/anatoliy-pylypchuk"
            target="_blank"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <Linkedin size={25} />
          </Link>
        </li>
      </ol>
    </nav>
  );
}
