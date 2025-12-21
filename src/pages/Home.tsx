import React from "react";
import Navbar from "../components/ui/shadcn-io/icon-button/nav";
import Footer from "../components/Footer";

import ThreadsBackground from "../components/home/ThreadsBackground";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TechStackSection from "../components/home/TechStackSection";
import ApproachSection from "../components/home/ApproachSection";
import AboutSection from "../components/home/AboutSection";

import { useThreadsVisibility } from "../components/home/useThreadsVisibility";
import { HIDE_AFTER, FADE_MS } from "../components/home/homeData";

const Home: React.FC = () => {
  const { showThreads, renderThreads } = useThreadsVisibility(HIDE_AFTER, FADE_MS);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Threads background */}
      <ThreadsBackground renderThreads={renderThreads} showThreads={showThreads} />

      {/* Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        <Navbar active="Home" />

        <main>
          <HeroSection />
          <ServicesSection />
          <TechStackSection />
          <ApproachSection />
          <AboutSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
