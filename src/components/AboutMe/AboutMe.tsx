import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";

import TextLink from "@/components/TextLink";
import { pageAnchors, href } from "@/utils/pageAnchors";
import React from "react";
import Technologies from "../Technologies";

type SimpleTooltipProps = {
  children: React.ReactNode;
  tooltipText: string;
};

const ContentWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "about-me technologies";
  padding: 0 24px;
  gap: 16px;

  @media screen and (max-width: 50rem) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "about-me"
      "technologies";
    gap: 32px;
  }
`;

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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 1.5rem;
  max-width: 60ch;
`;

const Years = styled.strong`
  font-weight: 500;
`;

const SimpleTooltipContent = styled(Tooltip.Content)`
  border-radius: 4px;
  padding: 8px 16px;
  line-height: 1;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="delayed-open"] {
    animation-name: slideDownAndFade;
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function yearsSince(date: Date) {
  var diff = Date.now() - Number(date);
  var date = new Date(diff);
  return Math.abs(date.getUTCFullYear() - 1970);
}

function SimpleTooltip({ children, tooltipText }: SimpleTooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <SimpleTooltipContent align="start">{tooltipText}</SimpleTooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export default function AboutMe() {
  const devYears = yearsSince(new Date("2012-10-01"));
  const jobYears = yearsSince(new Date("2017-08-28"));

  return (
    <div>
      <Anchor id={pageAnchors.aboutMe}></Anchor>
      <Header>About Me</Header>
      <ContentWrapper>
        <Description>
          <Tooltip.Provider>
            <p>
              I&apos;m a software developer from{" "}
              <TextLink href="https://en.wikipedia.org/wiki/Lviv">
                Lviv, Ukraine
              </TextLink>
              . I&apos;ve started programming{" "}
              <SimpleTooltip tooltipText="Since October 2012">
                <Years tabIndex={0} suppressHydrationWarning>
                  {devYears}
                </Years>
              </SimpleTooltip>{" "}
              years ago, and since then it&apos;s been one of my favorite
              past-times. It&apos;s my job and my hobby, and I have multiple{" "}
              <TextLink href={href(pageAnchors.projects)} newTab={false}>
                projects
              </TextLink>{" "}
              I&apos;ve worked on (and still am) through the years.
            </p>
            <p>
              I&apos;ve been working as a Java back&#8209;end developer at{" "}
              <TextLink href="https://kindgeek.com">Kindgeek</TextLink> for the
              last{" "}
              <SimpleTooltip tooltipText="Since 28 August 2017">
                <Years tabIndex={0} suppressHydrationWarning>
                  {jobYears}
                </Years>
              </SimpleTooltip>{" "}
              years.
            </p>
          </Tooltip.Provider>
        </Description>
        <Technologies />
      </ContentWrapper>
    </div>
  );
}
