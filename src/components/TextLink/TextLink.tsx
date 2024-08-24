import Link, { LinkProps } from "next/link";

import styles from "./TextLink.module.css";

type TextLinkProps = LinkProps & {
  children: React.ReactNode;
  newTab?: boolean;
};

export default function TextLink({
  href,
  children,
  newTab = true,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={styles.inlineLink}
      target={newTab ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}
