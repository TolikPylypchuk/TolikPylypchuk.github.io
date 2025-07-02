import Link, { LinkProps } from "next/link";

import styles from "./TextLink.module.css";

type TextLinkProps = LinkProps & {
  children: React.ReactNode;
  newTab?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function TextLink({
  href,
  children,
  newTab = true,
  onClick,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      onClick={onClick}
      className={styles.link}
    >
      {children}
    </Link>
  );
}
