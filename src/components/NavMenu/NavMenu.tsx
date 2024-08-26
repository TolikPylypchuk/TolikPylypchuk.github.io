import Link from "next/link";
import { GitHub, Linkedin } from "react-feather";
import styled from "styled-components";

import TextLink from "@/components/TextLink";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  height: var(--nav-menu-height);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background-color: white;
  font-size: 2rem;
  font-weight: 200;
`;

const NavLinksBase = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding: 0;
`;

const NavLinks = styled(NavLinksBase)`
  gap: 24px;
  text-wrap: nowrap;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const NavLinkIcons = styled(NavLinksBase)`
  gap: 12px;
`;

const IconLink = styled(Link)`
  --size: 48px;
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  padding: calc(var(--size) / 4);
  border-radius: calc(var(--size) / 2);
  color: var(--color-text-black);
  background-color: var(--color-button-highlight-inactive-secondary);
  transition: var(--transition-button-highligt);

  &:hover {
    background-color: var(--color-button-highlight-active-secondary);
  }
`;

export default function NavMenu() {
  return (
    <Nav>
      <NavLinks>
        <li>
          <TextLink href="/#" newTab={false}>
            Home
          </TextLink>
        </li>
        <li>
          <TextLink href="/#about-me" newTab={false}>
            About me
          </TextLink>
        </li>
        <li>
          <TextLink href="/#" newTab={false}>
            Projects
          </TextLink>
        </li>
        <li>
          <TextLink href="/#" newTab={false}>
            Blog
          </TextLink>
        </li>
      </NavLinks>
      <NavLinkIcons>
        <li>
          <IconLink
            href="https://github.com/TolikPylypchuk"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHub size={25} />
          </IconLink>
        </li>
        <li>
          <IconLink
            href="https://www.linkedin.com/in/anatoliy-pylypchuk"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin size={25} />
          </IconLink>
        </li>
      </NavLinkIcons>
    </Nav>
  );
}
