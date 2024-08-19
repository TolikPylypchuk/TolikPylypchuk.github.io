import Link, { LinkProps } from "next/link";
import styles from "./InlineLink.module.css";

type InlineLinkProps = LinkProps & {
  children: React.ReactNode;
  newTab?: boolean;
};

export default function InlineLink({
  href,
  children,
  newTab = true,
}: InlineLinkProps) {
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
