"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

import Navbar from "@/components/Navbar";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans min-h-screen pb-10 relative">
      {showOverlay && (
        <div className="overlay-animate">
          <div className="overlay-row overlay-row-top">
            <div
              className="overlay-strip overlay-strip-top"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="overlay-strip overlay-strip-top"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="overlay-strip overlay-strip-top"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="overlay-strip overlay-strip-top"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <div className="overlay-row overlay-row-bottom">
            <div
              className="overlay-strip overlay-strip-bottom"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="overlay-strip overlay-strip-bottom"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="overlay-strip overlay-strip-bottom"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="overlay-strip overlay-strip-bottom"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      )}
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
      <ServicesSection />
      <div className="px-5">
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}
