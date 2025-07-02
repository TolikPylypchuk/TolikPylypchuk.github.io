import React from "react";

import * as Tooltip from "@radix-ui/react-tooltip";

import Section from "@/components/Section";
import SimpleTooltip from "@/components/SimpleTooltip";
import Technologies from "@/components/Technologies";
import TextLink from "@/components/TextLink";
import { pageAnchors, href } from "@/utils/pageAnchors";

import styles from "./AboutMe.module.css";

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
      <div className={styles.contentWrapper}>
        <div className={styles.description}>
          <Tooltip.Provider>
            <p>
              I&apos;m a software developer from{" "}
              <TextLink href="https://en.wikipedia.org/wiki/Lviv">
                Lviv, Ukraine
              </TextLink>
              . I&apos;ve started programming{" "}
              <SimpleTooltip tooltipText="Since October 2012" align="start">
                <strong
                  className={styles.years}
                  tabIndex={0}
                  suppressHydrationWarning
                >
                  {devYears}
                </strong>
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
                <strong
                  className={styles.years}
                  tabIndex={0}
                  suppressHydrationWarning
                >
                  {jobYears}
                </strong>
              </SimpleTooltip>{" "}
              years.
            </p>
          </Tooltip.Provider>
        </div>
        <Technologies />
      </div>
    </Section>
  );
}
