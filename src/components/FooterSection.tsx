import { FiHome, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="w-full px-4 py-8 sm:py-0 sm:pt-4 flex flex-col sm:flex-row items-center justify-center bg-white/80 backdrop-blur-lg gap-6 border-t border-gray-100">
      <div className="flex flex-row items-center justify-center gap-8 w-full mb-4 sm:mb-0">
        <a
          href="#"
          className="text-gray-400 hover:text-black text-2xl transition"
        >
          <FiHome width={20} className="sm:w-5 sm:h-5" />
        </a>
        <a
          href="#work"
          className="text-gray-400 hover:text-black text-base font-medium transition"
        >
          Work
        </a>
        <a
          href="#about"
          className="text-gray-400 hover:text-black text-base font-medium transition"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-400 hover:text-black text-base font-medium transition"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 w-full">
        <a
          href="https://www.linkedin.com/in/jessica-c-adiele-gmcpn-278136264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener"
          className="rounded-xl bg-white/60 backdrop-blur-lg p-3 text-gray-300 hover:text-[#0A66C2] shadow transition"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://github.com/jessydunlimiteddev"
          target="_blank"
          rel="noopener"
          className="rounded-xl bg-white/60 backdrop-blur-lg p-3 text-gray-300 hover:text-black shadow transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="mailto:jessicaadiele575@gmail.com"
          className="rounded-xl bg-white/60 backdrop-blur-lg p-3 text-gray-300 hover:text-[#7391F1] shadow transition"
        >
          <FiSend size={20} />
        </a>
        <a
          href="https://medium.com/@jessicaadiele575"
          className="rounded-xl bg-white/60 backdrop-blur-lg p-3 text-gray-300 hover:text-[#1B2B67] shadow transition"
        >
          <FaMedium size={20} />
        </a>
      </div>
    </footer>
  );
}
