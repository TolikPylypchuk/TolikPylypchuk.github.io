import styled from "styled-components";

import { PageAnchorValue } from "@/utils/pageAnchors";

type SectionProps = {
  id: PageAnchorValue;
  header: React.ReactNode;
  children: React.ReactNode;
};

const Anchor = styled.a`
  position: relative;
  top: calc(var(--nav-menu-height) * -1);
  visibility: hidden;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 200;
  margin: 24px;
`;

export default function Section({ id, header, children }: SectionProps) {
  return (
    <section>
      <Anchor id={id}></Anchor>
      <Header>{header}</Header>
      {children}
    </section>
  );
}
