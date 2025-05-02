'use client';

import About from "@/components/layout/About";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import RootSkeleton from "@/components/layout/RootSkeleton";
import { NavColorProvider } from "@/contexts/NavColorProvider";
import Services from "@/components/layout/Services";

export default function Home() {
  return (
    <LoadingScreen>
      <NavColorProvider>
        <main className="overflow-y-auto overflow-x-hidden scroll-smooth">
          <Header />
          <Hero />
          <RootSkeleton />
          <About />
          <Services />
        </main>
      </NavColorProvider>
    </LoadingScreen>
  );
}
