"use client";
import { FiHome, FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-center z-40"
      style={{ pointerEvents: "auto" }}
    >
      <div className="flex items-center justify-between border-1 border-gray-400 rounded-full px-3 sm:px-6 py-2 shadow-sm backdrop-blur bg-white/10 w-full max-w-full sm:max-w-[700px] mt-4 sm:mt-5 mx-2 sm:mx-0 relative">
        <a
          href="#"
          className="flex items-center text-black hover:bg-[#7391F1] hover:text-white rounded-2xl px-2 sm:px-3 py-1 text-base sm:text-lg"
        >
          <FiHome size={20} className="sm:w-5 sm:h-5" />
        </a>
        <div className="flex items-center">
          <div className="hidden sm:flex items-center">
            <a
              href="#work"
              className="mx-2 text-black hover:bg-[#7391F1] hover:text-white font-medium rounded-2xl px-3 py-1 text-lg"
            >
              Work
            </a>
            <a
              href="#about"
              className="mx-2 text-black hover:bg-[#7391F1] hover:text-white font-medium rounded-2xl px-3 py-1 text-lg"
            >
              About
            </a>
            <a
              href="#services"
              className="mx-2 text-black hover:bg-[#7391F1] hover:text-white font-medium rounded-2xl px-3 py-1 text-lg"
            >
              Services
            </a>
            <a
              href="#contact"
              className="mx-2 text-black hover:bg-[#7391F1] hover:text-white font-medium rounded-2xl px-3 py-1 text-lg"
            >
              Email me
            </a>
            <a
              href="#book"
              className="ml-4 bg-[#5a72be] text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow hover:bg-[#7391F1]/80 transition text-lg"
            >
              Book a Call <span className="text-xl">→</span>
            </a>
          </div>
          <div className="sm:hidden relative">
            <button
              className="flex items-center justify-center ml-2 p-2 rounded-full hover:bg-gray-100 transition"
              onClick={handleMenuToggle}
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
            {menuOpen && (
              <div className="absolute text-center -right-2 mt-2 w-90 rounded-2xl shadow-xl bg-white/30 py-2 z-50 animate-fade-in backdrop-blur-lg">
                <a
                  href="#work"
                  onClick={handleLinkClick}
                  className="block px-5 py-3 text-gray-800 hover:bg-[#7391F1] hover:text-white rounded-xl font-bold"
                >
                  Work
                </a>
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="block px-5 py-3 text-gray-800 hover:bg-[#7391F1] hover:text-white rounded-xl font-bold"
                >
                  About
                </a>
                <a
                  href="#services"
                  onClick={handleLinkClick}
                  className="block px-5 py-3 text-gray-800 hover:bg-[#7391F1] hover:text-white rounded-xl font-bold"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block px-5 py-3 text-gray-800 hover:bg-[#7391F1] hover:text-white rounded-xl font-bold"
                >
                  Email me
                </a>
                <a
                  href="#book"
                  onClick={handleLinkClick}
                  className="block px-5 py-3 text-white bg-[#5a72be] rounded-xl font-semibold mt-2 hover:bg-[#7391F1]/80 transition"
                >
                  Book a Call <span className="text-xl">→</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
