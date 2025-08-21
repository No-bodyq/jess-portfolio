import { FiArrowRight } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-20 flex flex-col items-center justify-center bg-[#f3f3f3] mb-8 rounded-3xl px-4"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center text-black">
        Let&apos;s get in touch!
      </h2>
      <p className="text-sm sm:text-md text-gray-500 text-center max-w-xl sm:max-w-2xl mx-auto mb-4 sm:mb-2">
        Transform your online presence with a custom-designed website that not
        only looks stunning but also drives results.
        <br />
        Get in touch today to start your project!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 w-full max-w-xs sm:max-w-none justify-center items-center">
        <a
          href="mailto:jess@example.com"
          className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-full text-base sm:text-lg font-medium shadow hover:opacity-60 transition w-full sm:w-auto"
        >
          Email me <FiArrowRight size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a
          href="#book-call"
          className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-full text-base sm:text-lg font-medium shadow hover:opacity-60 transition w-full sm:w-auto"
        >
          Book a Call <FiArrowRight size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>
    </section>
  );
}
