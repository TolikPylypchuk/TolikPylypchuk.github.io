import styled from "styled-components";

import Section from "@/components/Section";
import { pageAnchors } from "@/utils/pageAnchors";

const PlaceholderText = styled.p`
  font-size: 1.5rem;
  margin: 32px 80px;

  @media screen and (max-width: 50rem) {
    margin: 32px 40px;
  }
`;

export default function BlogPreview() {
  return (
    <Section id={pageAnchors.blog} header="Blog">
      <PlaceholderText>
        This section will contain the preview of my blog posts - once I actually
        have a blog, that is.
      </PlaceholderText>
    </Section>
  );
}
