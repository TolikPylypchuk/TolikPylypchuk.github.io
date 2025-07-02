import Section from "@/components/Section";
import { pageAnchors } from "@/utils/pageAnchors";

import styles from "./BlogPreview.module.css";

export default function BlogPreview() {
  return (
    <Section id={pageAnchors.blog} header="Blog">
      <p className={styles.placeholderText}>
        This section will contain the preview of my blog posts — once I actually
        have a blog, that is.
      </p>
    </Section>
  );
}
