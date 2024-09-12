import Image from "next/image";
import styled from "styled-components";
import {
  CheckCircledIcon,
  ExternalLinkIcon,
  MinusCircledIcon,
} from "@radix-ui/react-icons";

import IconLink from "@/components/IconLink";
import Section from "@/components/Section";
import { pageAnchors } from "@/utils/pageAnchors";

type Project = {
  name: string;
  status: "active" | "inactive";
  description: React.ReactNode;
  url: string;
  imageUrl?: string;
};

const Intro = styled.p`
  font-size: 1.5rem;
  margin: 32px 80px;

  @media screen and (max-width: 50rem) {
    margin: 32px 40px;
  }
`;

const Wrapper = styled.div`
  margin: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 32px;
  margin-bottom: 64px;
`;

const ProjectCard = styled.article`
  border: var(--color-tertiary) 1px solid;
  box-shadow: 8px 12px 0px 0px var(--color-secondary-shadow);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
`;

const CardImageAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

const CardStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const CardBody = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
`;

const projects: Project[] = [
  {
    name: "Keyboard Switch",
    status: "active",
    description:
      "Keyboard Switch is an application which switches typed text as if it were typed with another keyboard layout",
    url: "https://keyboardswitch.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/KeyboardSwitch/main/src/KeyboardSwitch.Settings/Assets/icon.ico",
  },
  {
    name: "SharpHook",
    status: "active",
    description:
      "SharpHook provides a cross-platform global keyboard and mouse hook, event simulation, and text entry simulation for .NET",
    url: "https://sharphook.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/SharpHook/main/icon.png",
  },
  {
    name: "Portfolio Website",
    status: "active",
    description: "This very website serves as my portfolio and my blog",
    url: "https://www.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/TolikPylypchuk.github.io/main/public/images/favicons/favicon.svg",
  },
  {
    name: "Cineaste",
    status: "inactive",
    description:
      "An app which keeps track of the movies and TV series you have watched or would like to watch",
    url: "https://cineaste.tolik.io",
  },
  {
    name: "Darkness",
    status: "inactive",
    description: "A maze game where you don't actually see the entire maze",
    url: "https://darkness.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/Darkness/main/Darkness/wwwroot/favicon-192x192.png",
  },
  {
    name: "Matchmaker",
    status: "inactive",
    description: "A library which enables more powerful pattern matching in C#",
    url: "https://matchmaker.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/Matchmaker/master/logo.png",
  },
];

export default function Projects() {
  return (
    <Section id={pageAnchors.projects} header="Projects">
      <Intro>
        I&apos;ve developed a multitude of projects throughout the years. Some
        of them are still active, but most aren&apos;t. Here&apos;s the list of
        the projects I&apos;m most proud of.
      </Intro>
      <Wrapper>
        {projects.map((project) => (
          <ProjectCard key={project.name}>
            <CardHeader>
              <CardImageAndTitle>
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    height={32}
                    width={32}
                    alt={project.name}
                  />
                )}
                <CardTitle>{project.name}</CardTitle>
              </CardImageAndTitle>
              <IconLink
                href={project.url}
                target="_blank"
                aria-label={project.name}
                size="48px"
              >
                <ExternalLinkIcon width={32} height={32} />
              </IconLink>
            </CardHeader>
            {project.status === "active" ? (
              <CardStatus>
                Status: <CheckCircledIcon width={16} height={16} /> Active
              </CardStatus>
            ) : (
              <CardStatus>
                Status: <MinusCircledIcon width={16} height={16} /> Inactive
              </CardStatus>
            )}
            <CardBody>{project.description}</CardBody>
          </ProjectCard>
        ))}
      </Wrapper>
    </Section>
  );
}
