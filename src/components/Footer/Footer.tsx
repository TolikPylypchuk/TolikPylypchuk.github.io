import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 64px;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--color-tertiary);
`;

const CopyrightText = styled.p`
  padding: 16px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Separator />
      <CopyrightText>© 2024 Anatoliy Pylypchuk</CopyrightText>
    </Wrapper>
  );
}
