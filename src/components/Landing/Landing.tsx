import { ArrowDownIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import TextLink from "@/components/TextLink";
import { pageAnchors, href } from "@/utils/pageAnchors";

type LandingProps = {
  scrollRef: React.RefObject<HTMLElement | undefined>;
};

const MiddleWidth = "56rem";
const NarrowWidth = "33rem";

const Header = styled.header`
  --scroll-button-margin: 12px;
  --scroll-button-size: 48px;
  --scroll-button-full-height: calc(
    var(--scroll-button-margin) * 2 + var(--scroll-button-size)
  );

  min-height: 100svh;
  background-color: var(--color-background-dark);
  color: var(--color-text-dark);
  display: grid;
  grid-template-rows:
    calc(50% - var(--scroll-button-full-height) / 2)
    calc(50% - var(--scroll-button-full-height) / 2)
    var(--scroll-button-full-height);
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "photo name"
    "links description"
    "scroll scroll";
  column-gap: 32px;
  padding: 0 80px;
  background-image: url("/images/background.svg");
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: ${MiddleWidth}) {
    grid-template-rows: auto auto auto var(--scroll-button-full-height);
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "name name"
      "photo links"
      "description description"
      "scroll scroll";
    padding: 0 20px;
    column-gap: revert;
  }

  @media screen and (max-width: ${NarrowWidth}) {
    grid-template-rows: auto auto auto auto var(--scroll-button-full-height);
    grid-template-columns: 100%;
    grid-template-areas:
      "name"
      "photo"
      "links"
      "description"
      "scroll";
    padding: 12px 20px;
    column-gap: revert;
    row-gap: 32px;
  }
`;

const NameWrapper = styled.hgroup`
  grid-area: name;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  text-align: end;

  @media screen and (max-width: ${MiddleWidth}) {
    align-items: flex-start;
    text-align: revert;
  }

  @media screen and (max-width: ${NarrowWidth}) {
    align-items: flex-start;
    text-align: revert;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 200;

  @media screen and (max-width: ${NarrowWidth}) {
    font-size: 2.5rem;
  }
`;

const Name = styled.span`
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(
    0deg,
    var(--color-primary) 0%,
    var(--color-primary) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 90%;
`;

const Subtext = styled.p`
  font-size: 2rem;
  font-weight: 200;

  @media screen and (max-width: ${NarrowWidth}) {
    font-size: 1.75rem;
  }
`;

const PhotoWrapper = styled.div`
  grid-area: "photo";
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: ${NarrowWidth}) {
    justify-content: center;
  }
`;

const Photo = styled.img`
  height: 75%;
  max-height: 300px;
  width: auto;
  max-width: 300px;
  object-fit: contain;
  box-shadow: 16px 20px 0px 0px var(--color-secondary-shadow);
`;

const LinksWrapper = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: ${MiddleWidth}) {
    justify-content: flex-end;
    text-align: end;
  }

  @media screen and (max-width: ${NarrowWidth}) {
    justify-content: center;
    text-align: revert;
  }
`;

const Links = styled.ol`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 2rem;
  font-weight: 200;

  @media screen and (max-width: ${NarrowWidth}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

const DescriptionWrapper = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: end;

  @media screen and (max-width: ${MiddleWidth}) {
    align-items: flex-start;
    text-align: revert;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 50ch;

  @media screen and (max-width: ${MiddleWidth}) {
    max-width: revert;
  }

  @media screen and (max-width: ${NarrowWidth}) {
    font-size: 1.25rem;
  }
`;

const ScrollWrapper = styled.div`
  grid-area: scroll;
  display: grid;
  place-content: center;
`;

const ScrollButton = styled.button`
  margin: var(--scroll-button-margin);
  width: var(--scroll-button-size);
  height: var(--scroll-button-size);
  border: none;
  color: var(--color-text-dark);
  background-color: var(--color-button-highlight-inactive-primary);
  border-radius: calc(var(--scroll-button-size) / 2);
  cursor: pointer;
  display: grid;
  place-content: center;
  transition: var(--transition-button-highligt);

  &:hover {
    background-color: var(--color-button-highlight-active-primary);
  }
`;

export default function Landing({ scrollRef }: LandingProps) {
  return (
    <Header>
      <PhotoWrapper>
        <picture>
          <source type="image/webp" srcSet="/images/me.webp" />
          <source type="image/jpg" srcSet="/images/me.jpg" />
          <Photo alt="Me" src="/images/me.jpg" width={300} height={300} />
        </picture>
      </PhotoWrapper>

      <NameWrapper>
        <Title>
          Hi, I&apos;m <Name>Tolik Pylypchuk</Name>
        </Title>
        <Subtext>Welcome to my portfolio website</Subtext>
      </NameWrapper>

      <LinksWrapper>
        <Links>
          <li>
            <TextLink href={href(pageAnchors.aboutMe)} newTab={false}>
              About me
            </TextLink>
          </li>
          <li>
            <TextLink href={href(pageAnchors.projects)} newTab={false}>
              Projects
            </TextLink>
          </li>
          <li>
            <TextLink href={href(pageAnchors.blog)} newTab={false}>
              Blog
            </TextLink>
          </li>
          <li>
            <TextLink href="https://github.com/TolikPylypchuk">GitHub</TextLink>
          </li>
          <li>
            <TextLink href="https://www.linkedin.com/in/anatoliy-pylypchuk">
              LinkedIn
            </TextLink>
          </li>
        </Links>
      </LinksWrapper>

      <DescriptionWrapper>
        <Description>
          I&apos;m a software developer from{" "}
          <TextLink href="https://en.wikipedia.org/wiki/Lviv">
            Lviv, Ukraine
          </TextLink>
          . I work as a Java back&#8209;end developer at{" "}
          <TextLink href="https://kindgeek.com">Kindgeek</TextLink>, but also
          have several{" "}
          <TextLink href="https://github.com/TolikPylypchuk">
            open-source projects
          </TextLink>
          , mostly using .NET. I like creating stuff, hacking around, and
          learning new technologies regularly.
        </Description>
      </DescriptionWrapper>

      <ScrollWrapper>
        <ScrollButton
          onClick={() => {
            scrollRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDownIcon width={24} height={24} />
        </ScrollButton>
      </ScrollWrapper>
    </Header>
  );
}
