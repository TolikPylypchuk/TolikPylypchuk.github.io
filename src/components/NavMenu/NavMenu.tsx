import { useState } from "react";

import { Route } from "next";

import * as Popover from "@radix-ui/react-popover";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import clsx from "clsx";

import IconLink from "@/components/IconLink";
import TextLink from "@/components/TextLink";
import ThemeToggle from "@/components/ThemeToggle";
import { href, pageAnchors, PageAnchorValue } from "@/utils/pageAnchors";

import styles from "./NavMenu.module.css";

type TextLinkData = {
  text: React.ReactNode;
  href: PageAnchorValue;
};

type IconLinkData = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  href: Route<string>;
};

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
    href: "https://github.com/TolikPylypchuk" as Route<string>,
  },
  {
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anatoliy-pylypchuk" as Route<string>,
  },
];

export default function NavMenu() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <ol className={clsx(styles.navLinks, styles.navLinksText)}>
        {textLinks.map((link) => (
          <li key={link.href}>
            <TextLink href={href(link.href)} newTab={false}>
              {link.text}
            </TextLink>
          </li>
        ))}
      </ol>

      <Popover.Root
        modal={false}
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <Popover.Trigger asChild>
          <button
            className={styles.navMoreButton}
            aria-label="Open navigation menu"
          >
            <HamburgerMenuIcon />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.navPopoverContent}>
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
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <ol className={clsx(styles.navLinks, styles.navLinksIcons)}>
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
      </ol>
    </nav>
  );
}
