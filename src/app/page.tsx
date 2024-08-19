"use client";

import { useRef } from "react";

import AboutMe from "@/components/AboutMe";
import Landing from "@/components/Landing";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Landing scrollRef={scrollRef} />
      <main ref={scrollRef}>
        <AboutMe />
      </main>
    </>
  );
}
