"use client";

import { useRef } from "react";

import AboutMe from "@/components/AboutMe";
import Landing from "@/components/Landing";
import NavMenu from "@/components/NavMenu";

import styles from "./page.module.css";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Landing scrollRef={scrollRef} />
      <div ref={scrollRef} className={styles.mainContentWrapper}>
        <NavMenu />
        <main className={styles.mainContent}>
          <AboutMe />
        </main>
      </div>
    </>
  );
}
