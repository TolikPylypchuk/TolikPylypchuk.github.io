import { useState } from "react";

import * as Popover from "@radix-ui/react-popover";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import styled from "styled-components";

import IconLink from "@/components/IconLink";
import TextLink from "@/components/TextLink";
import ThemeToggle from "@/components/ThemeToggle";
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
  background-color: var(--color-background);
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

  @media screen and (max-width: 45rem) {
    display: none;
  }
`;

const NavLinkIcons = styled(NavLinksBase)`
  gap: 12px;
`;

const NavMoreButton = styled.button`
  --size: 48px;

  border: none;
  cursor: pointer;

  display: none;

  @media screen and (max-width: 45rem) {
    display: grid;
  }

  place-content: center;
  width: var(--size);
  height: var(--size);
  padding: calc(var(--size) / 4);
  border-radius: calc(var(--size) / 2);

  color: var(--color-text);
  background-color: var(--color-button-highlight-inactive-secondary);
  transition: var(--transition-button-highligt);

  &:hover {
    background-color: var(--color-button-highlight-active-secondary);
  }
`;

const NavPopoverContent = styled(Popover.Content)`
  width: 100vw;
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 1.5rem;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  box-shadow: 0px 10px 38px -10px hsl(206 22% 7% / 35%),
    0px 10px 20px -15px hsl(206 22% 7% / 35%);
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
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

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

      <Popover.Root
        modal={false}
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <Popover.Trigger asChild>
          <NavMoreButton aria-label="Open navigation menu">
            <HamburgerMenuIcon />
          </NavMoreButton>
        </Popover.Trigger>
        <Popover.Portal>
          <NavPopoverContent>
            {textLinks.map((link) => (
              <TextLink
                key={link.href}
                href={href(link.href)}
                newTab={false}
                onClick={() => setIsPopoverOpen(false)}
              >
                {link.text}
              </TextLink>
            ))}
          </NavPopoverContent>
        </Popover.Portal>
      </Popover.Root>

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
        <ThemeToggle size={48} />
      </NavLinkIcons>
    </Nav>
  );
}
