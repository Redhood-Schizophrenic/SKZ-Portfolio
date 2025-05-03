'use client';

import About from "@/components/layout/About";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import RootSkeleton from "@/components/layout/RootSkeleton";
import { NavColorProvider } from "@/contexts/NavColorProvider";
import Services from "@/components/layout/Services";
import Works from "@/components/layout/Works";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <LoadingScreen>
      <NavColorProvider>
        <main id="root-layout" className="overflow-y-auto scroll-smooth">
          <Header />
          <Hero />
          <RootSkeleton />
          <About />
          <Services />
          <Works />
        </main>
      </NavColorProvider>
    </LoadingScreen>
  );
}
