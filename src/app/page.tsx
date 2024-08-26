"use client";

import { useRef } from "react";
import styled from "styled-components";

import AboutMe from "@/components/AboutMe";
import Landing from "@/components/Landing";
import NavMenu from "@/components/NavMenu";

const MainContentWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Landing scrollRef={scrollRef} />
      <MainContentWrapper ref={scrollRef}>
        <NavMenu />
        <main>
          <AboutMe />
        </main>
      </MainContentWrapper>
    </>
  );
}
