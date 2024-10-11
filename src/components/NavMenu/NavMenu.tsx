import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import styled from "styled-components";

import IconLink from "@/components/IconLink";
import TextLink from "@/components/TextLink";
import { href, pageAnchors, PageAnchorValue } from "@/utils/pageAnchors";

type TextLinkData = {
  text: React.ReactNode;
  href: PageAnchorValue;
};

type IconLinkData = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
  label: string;
};

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

const textLinks: TextLinkData[] = [
  {
    text: "Home",
    href: pageAnchors.home,
  },
  {
    text: "About me",
    href: pageAnchors.aboutMe,
  },
  {
    text: "Projects",
    href: pageAnchors.projects,
  },
  {
    text: "Blog",
    href: pageAnchors.blog,
  },
];

const iconLinks: IconLinkData[] = [
  {
    icon: GitHubLogoIcon,
    label: "GitHub",
    href: "https://github.com/TolikPylypchuk",
  },
  {
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anatoliy-pylypchuk",
  },
];

export default function NavMenu() {
  return (
    <Nav>
      <NavLinks>
        {textLinks.map((link) => (
          <li key={link.href}>
            <TextLink href={href(link.href)} newTab={false}>
              {link.text}
            </TextLink>
          </li>
        ))}
      </NavLinks>
      <NavLinkIcons>
        {iconLinks.map((link) => (
          <li key={link.href}>
            <IconLink
              href={link.href}
              target="_blank"
              size="48px"
              label={link.label}
            >
              <link.icon width={24} height={24} />
            </IconLink>
          </li>
        ))}
      </NavLinkIcons>
    </Nav>
  );
}
