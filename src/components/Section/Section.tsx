import { PageAnchorValue } from "@/utils/pageAnchors";

import styles from "./Section.module.css";

type SectionProps = {
  id: PageAnchorValue;
  header: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ id, header, children }: SectionProps) {
  return (
    <section>
      <a id={id} className={styles.anchor}></a>
      <h2 className={styles.header}>{header}</h2>
      {children}
    </section>
  );
}
