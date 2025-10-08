"use client"
import React, { useEffect} from "react";
import { Navbar } from "./_components/navbar";
import Header from "./_components/Header";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LampContainer } from '@/components/ui/lamp';
import Experience from "./_components/Experience";

export default function Home() {
    useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-screen dark"> 
    <BackgroundRippleEffect />
      <Navbar /> 
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col gap-4 items-center justify-center px-4"
      >
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        
        {/* Sections */}
        <div id="home">
          <Header />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}