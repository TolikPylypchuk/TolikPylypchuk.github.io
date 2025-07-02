"use client";

import { useRef } from "react";

import AboutMe from "@/components/AboutMe";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavMenu from "@/components/NavMenu";
import Projects from "@/components/Projects";

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
          <Projects />
          <BlogPreview />
        </main>
        <Footer />
      </div>
    </>
  );
}
