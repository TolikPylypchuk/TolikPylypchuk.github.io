import Image from "next/image";
import {
  CheckCircledIcon,
  ExternalLinkIcon,
  MinusCircledIcon,
} from "@radix-ui/react-icons";

import IconLink from "@/components/IconLink";
import Section from "@/components/Section";
import { pageAnchors } from "@/utils/pageAnchors";

import styles from "./Projects.module.css";

type Project = {
  name: string;
  isActive: boolean;
  description: React.ReactNode;
  url: string;
  imageUrl?: string;
};

const projects: Project[] = [
  {
    name: "Keyboard Switch",
    isActive: true,
    description:
      "Keyboard Switch is an application which switches typed text as if it were typed with another keyboard layout",
    url: "https://keyboardswitch.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/KeyboardSwitch/main/src/KeyboardSwitch.Settings/Assets/icon.ico",
  },
  {
    name: "SharpHook",
    isActive: true,
    description:
      "SharpHook provides a cross-platform global keyboard and mouse hook, event simulation, and text entry simulation for .NET",
    url: "https://sharphook.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/SharpHook/main/icon.png",
  },
  {
    name: "Portfolio Website",
    isActive: true,
    description: "This very website serves as my portfolio and my blog",
    url: "https://www.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/TolikPylypchuk.github.io/main/public/images/favicons/favicon.svg",
  },
  {
    name: "Cineaste",
    isActive: true,
    description:
      "An app which keeps track of the movies and TV series you have watched or would like to watch",
    url: "https://cineaste.tolik.io",
  },
  {
    name: "Darkness",
    isActive: false,
    description: "A maze game where you don't actually see the entire maze",
    url: "https://darkness.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/Darkness/main/Darkness/wwwroot/favicon-192x192.png",
  },
  {
    name: "Matchmaker",
    isActive: false,
    description: "A library which enables more powerful pattern matching in C#",
    url: "https://matchmaker.tolik.io",
    imageUrl:
      "https://raw.githubusercontent.com/TolikPylypchuk/Matchmaker/master/logo.png",
  },
];

export default function Projects() {
  return (
    <Section id={pageAnchors.projects} header="Projects">
      <p className={styles.intro}>
        I&apos;ve developed a multitude of projects throughout the years. Some
        of them are still active, but most aren&apos;t. Here&apos;s the list of
        the projects I&apos;m most proud of.
      </p>
      <div className={styles.wrapper}>
        {projects.map((project) => (
          <article key={project.name} className={styles.projectCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardImageAndTitle}>
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    height={32}
                    width={32}
                    alt={project.name}
                  />
                )}
                <p className={styles.cardTitle}>{project.name}</p>
              </div>
              <IconLink
                href={project.url}
                target="_blank"
                label={`Go to ${project.name}`}
                size="48px"
              >
                <ExternalLinkIcon width={32} height={32} />
              </IconLink>
            </div>
            <div className={styles.cardStatus}>
              {project.isActive ? (
                <>
                  Status: <CheckCircledIcon width={16} height={16} /> Active
                </>
              ) : (
                <>
                  Status: <MinusCircledIcon width={16} height={16} /> Inactive
                </>
              )}
            </div>
            <div className={styles.cardBody}>{project.description}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
