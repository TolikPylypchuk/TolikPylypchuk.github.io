import React from "react";

import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";

import Section from "@/components/Section";
import SimpleTooltip from "@/components/SimpleTooltip";
import Technologies from "@/components/Technologies";
import TextLink from "@/components/TextLink";
import { pageAnchors, href } from "@/utils/pageAnchors";

const ContentWrapper = styled.div`
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

function yearsSince(date: Date) {
  var diff = Date.now() - Number(date);
  var date = new Date(diff);
  return Math.abs(date.getUTCFullYear() - 1970);
}

export default function AboutMe() {
  const devYears = yearsSince(new Date("2012-10-01"));
  const jobYears = yearsSince(new Date("2017-08-28"));

  return (
    <Section id={pageAnchors.aboutMe} header="About Me">
      <ContentWrapper>
        <Description>
          <Tooltip.Provider>
            <p>
              I&apos;m a software developer from{" "}
              <TextLink href="https://en.wikipedia.org/wiki/Lviv">
                Lviv, Ukraine
              </TextLink>
              . I&apos;ve started programming{" "}
              <SimpleTooltip tooltipText="Since October 2012" align="start">
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
              <SimpleTooltip tooltipText="Since 28 August 2017" align="start">
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
    </Section>
  );
}
