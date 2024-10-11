import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type TextLinkProps = LinkProps & {
  children: React.ReactNode;
  newTab?: boolean;
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(
    0deg,
    var(--color-link-highlight) 0%,
    var(--color-link-highlight) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 90%;
  transition: background-size 0.25s ease-in;

  &:hover {
    background-size: 100% 90%;
  }
`;

export default function TextLink({
  href,
  children,
  newTab = true,
}: TextLinkProps) {
  return (
    <StyledLink href={href} target={newTab ? "_blank" : undefined}>
      {children}
    </StyledLink>
  );
}
