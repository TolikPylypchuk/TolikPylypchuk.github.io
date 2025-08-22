import Link, { LinkProps } from "next/link";

import styles from "./TextLink.module.css";

type TextLinkProps<T> = LinkProps<T> & {
  children: React.ReactNode;
  newTab?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function TextLink<T extends string>({
  href,
  children,
  newTab = true,
  onClick,
}: TextLinkProps<T>) {
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
