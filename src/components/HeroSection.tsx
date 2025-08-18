"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLottie(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-[70vh] sm:h-screen py-10 sm:py-20 flex flex-col items-center justify-center relative overflow-hidden text-white mb-8 rounded-lg px-4">
      <div
        className="absolute inset-0 w-full h-full z-0 animate-gradientMove"
        style={{ pointerEvents: "none" }}
      />
      <div
        className={`absolute inset-0 w-full h-full z-1 transition-opacity duration-1000 ${
          showLottie ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: "none" }}
      >
        <DotLottieReact
          autoplay
          loop
          src="/Background looping animation.lottie"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center w-full">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-black">
          Hi, I&apos;m Jessica 👋
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">
          Front-End Developer & UI Enthusiast
        </h2>
        <p className="text-base sm:text-lg text-black max-w-xs sm:max-w-xl mx-auto mb-4 sm:mb-6">
          I craft beautiful, responsive web experiences with React, Next.js, and
          modern CSS. Passionate about design systems, accessibility, and
          bringing ideas to life with clean, maintainable code. Let&apos;s build
          something amazing together!
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#5a72be] text-white font-semibold px-5 sm:px-6 py-3 rounded-full shadow hover:bg-[#7391F1]/80 transition text-base sm:text-lg"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
