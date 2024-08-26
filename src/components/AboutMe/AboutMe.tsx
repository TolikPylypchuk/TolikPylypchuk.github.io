import TextLink from "@/components/TextLink";
import { pageAnchors, href } from "@/utils/pageAnchors";
import styled from "styled-components";

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

function yearsSince(date: Date) {
  var diff = Date.now() - Number(date);
  var date = new Date(diff);
  return Math.abs(date.getUTCFullYear() - 1970);
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
          <p>
            I&apos;m a software developer from{" "}
            <TextLink href="https://en.wikipedia.org/wiki/Lviv">
              Lviv, Ukraine
            </TextLink>
            . I&apos;ve started programming <Years>{devYears}</Years> years ago,
            and since then it&apos;s been one of my favorite past-times.
            It&apos;s my job and my hobby, and I have multiple{" "}
            <TextLink href={href(pageAnchors.projects)} newTab={false}>
              projects
            </TextLink>{" "}
            I&apos;ve worked on (and still am) through the years.
          </p>
          <p>
            I&apos;ve been working as a Java back&#8209;end developer at{" "}
            <TextLink href="https://kindgeek.com">Kindgeek</TextLink> for the
            last <Years>{jobYears}</Years> years.
          </p>
        </Description>
      </ContentWrapper>
    </div>
  );
}
