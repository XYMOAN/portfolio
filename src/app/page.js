"use client"
import React from "react";
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

export default function Home() {
  return (
    <div className="relative min-h-screen dark"> 
    <BackgroundRippleEffect />
      
      {/* The BackgroundRippleEffect is 'absolute inset-0 h-full w-full',
        so it now stretches to the full scrollable height of this parent div.
      */}
      <Navbar /> 

      {/* Content Layer starts here */}
      
      {/* Add a Z-index to the content wrapper to ensure it's visible over the background */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        // FIX: Added 'z-10' to ensure content is above the background
        className="relative z-10 flex flex-col gap-4 items-center justify-center px-4"
      >
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        
        {/* Your Sections */}
        <div id="home">
          <Header />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}