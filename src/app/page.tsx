"use client";

import { useRef } from "react";
import styled from "styled-components";

import AboutMe from "@/components/AboutMe";
import Landing from "@/components/Landing";
import NavMenu from "@/components/NavMenu";
import Projects from "@/components/Projects";

const MainContentWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Landing scrollRef={scrollRef} />
      <MainContentWrapper ref={scrollRef}>
        <NavMenu />
        <MainContent>
          <AboutMe />
          <Projects />
        </MainContent>
      </MainContentWrapper>
    </>
  );
}
