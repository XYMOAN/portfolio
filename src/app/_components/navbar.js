"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
export function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    {
      name: "Home",
      link: "#home",
      onClick: () => scrollToSection("home"),
    },
    {
      name: "About",
      link: "#about",
      onClick: () => scrollToSection("about"),
    },
    {
      name: "Projects",
      link: "#projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      name: "Contact",
      link: "#contact",
      onClick: () => scrollToSection("contact"),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}