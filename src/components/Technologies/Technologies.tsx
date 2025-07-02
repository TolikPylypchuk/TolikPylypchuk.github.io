import * as Tabs from "@radix-ui/react-tabs";

import TextLink from "@/components/TextLink";

import styles from "./Technologies.module.css";

type Technology = { name: string; description: React.ReactNode };
type EmphasisProps = { children: React.ReactNode };

function Emphasis({ children }: EmphasisProps) {
  return <strong className={styles.emphasis}>{children}</strong>;
}

const technologies: Technology[] = [
  {
    name: "C#",
    description: (
      <>
        <Emphasis>C#</Emphasis> is my language of choice for almost all my
        personal projects. This is the first language that I&apos;ve learned
        when I was still in school and I continue using it regularly to this
        day. I&apos;ve developed projects with a wide variety of frameworks
        inluding WPF, Avalonia, ASP.NET Core, Blazor, Entity Framework, etc.
        I&apos;ve tried creating this website using Blazor, but it just
        doesn&apos;t work well at all for semi-static websites like portfolios.
      </>
    ),
  },
  {
    name: "Java",
    description: (
      <>
        <Emphasis>Java</Emphasis> is the language I use at work and as such
        it&apos;s currently the one I spend the most time with. I&apos;ve
        learned it in the university. I prefer using C# though, so I almost
        never use Java for personal projects. At work I develop mostly with the
        Spring stack, and Hibernate, although at one point I worked with Vaadin
        a little.
      </>
    ),
  },
  {
    name: "F#",
    description: (
      <>
        I&apos;ve dabbled a little with <Emphasis>F#</Emphasis> and some other
        functional languages in the past, but currently don&apos;t do much with
        it anymore, though I like it a lot and think it&apos;s great. I&apos;ve
        completed{" "}
        <TextLink href="https://adventofcode.com">Advent of Code</TextLink>{" "}
        <TextLink href="https://github.com/TolikPylypchuk/aoc-2019">
          2019
        </TextLink>{" "}
        and{" "}
        <TextLink href="https://github.com/TolikPylypchuk/aoc-2020">
          2020
        </TextLink>{" "}
        using F#.
      </>
    ),
  },
  {
    name: "C & C++",
    description: (
      <>
        <Emphasis>C++</Emphasis> is one of the first languages I&apos;ve
        learned, along with C#. I&apos;s also the language I&apos;ve used in the
        university for several semesters. I&apos;ve never explicitly learned{" "}
        <Emphasis>C</Emphasis>, but I have contributed to{" "}
        <TextLink href="https://github.com/kwhat/libuiohook">
          libuiohook
        </TextLink>
        , a C library for global event hooks. I don&apos;t use either C++ or C
        much these days.
      </>
    ),
  },
  {
    name: "JS & TS",
    description: (
      <>
        I&apos;ve learned <Emphasis>JavaScript</Emphasis> and{" "}
        <Emphasis>TypeScript</Emphasis> a long time ago, but I&apos;ve never
        actually used vanilla JS, and I cannot really say that I know the actual
        language all that well. The same can be said about TypeScript — I just
        know the basics of it.
      </>
    ),
  },
  {
    name: "CSS",
    description: (
      <>
        <Emphasis>CSS</Emphasis> used to be the bane of my existence, like many
        other developers, but since taking the{" "}
        <TextLink href="https://courses.joshwcomeau.com/css-for-js">
          CSS for JS Devs
        </TextLink>{" "}
        course I can say that I can navigate my way through CSS much more
        freely, even though I cannot say that I&apos;m even close to proficient.
        But it was possible to build this very website with my knowledge of CSS,
        so I think I know enough.
      </>
    ),
  },
  {
    name: "React",
    description: (
      <>
        This very website was built using <Emphasis>React</Emphasis> and{" "}
        <Emphasis>Next.js</Emphasis>, so I can say that I know a thing or two,
        thanks to the{" "}
        <TextLink href="https://courses.joshwcomeau.com/joy-of-react">
          Joy of React
        </TextLink>{" "}
        course. Apart from that, I don&apos;t really have much experience with
        React, so I&apos;d say I&apos;m still a beginner here.
      </>
    ),
  },
  {
    name: "Angular",
    description: (
      <>
        I&apos;ve learned <Emphasis>Angular</Emphasis> in the university along
        with Java. I also used to work as a web developer with Angular for a
        couple months at work, though that was a long time ago. I&apos;s been
        ages since I&apos;ve done anything in Angular, so I don&apos;t consider
        myself as someone who knows it anymore.
      </>
    ),
  },
  {
    name: "FP",
    description: (
      <>
        F# is not the only functional programming language I&apos;ve stumbled
        upon. I also used <Emphasis>Scala</Emphasis> at work for a couple
        months, but I&apos;ve since all but forgotten it. I&apos;ve also learned{" "}
        <Emphasis>Haskell</Emphasis> just for the brain-twisting fun of it.
        Since then I haven&apos;t really used it at all, so it&apos;s basically
        forgotten as well.
      </>
    ),
  },
  {
    name: "Other",
    description: (
      <>
        I&apos;ve studied other technologies over the years, but I can&apos;t
        really say that I know them even a little now. I&apos;ve studied{" "}
        <Emphasis>Python</Emphasis> in the university a little, and have written
        some simple data-manipulation scripts with it. I&apos;ve also studied{" "}
        <Emphasis>Android</Emphasis> development in the university, but it was
        even before the Kotiln days. I&apos;ve also studied some DevOps things,
        like <Emphasis>Docker</Emphasis> and <Emphasis>Kubernetes</Emphasis>,
        but I didn&apos;t go much further than understanding the basics.
      </>
    ),
  },
];

export default function Technologies() {
  return (
    <Tabs.Root defaultValue={technologies[0].name} className={styles.wrapper}>
      <Tabs.List className={styles.technologyList} aria-label="Technologies">
        {technologies.map(({ name }) => (
          <Tabs.Trigger
            key={name}
            value={name}
            className={styles.technologyChip}
          >
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {technologies.map(({ name, description }) => (
        <Tabs.Content
          key={name}
          value={name}
          className={styles.technologyDescription}
        >
          <p>{description}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
