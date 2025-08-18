import { FiChevronDown } from "react-icons/fi";

const services = [
  {
    title: "Landing page development",
    description:
      "I will build a modern, responsive landing page tailored for your business or product. The site will be a clean, one-page presentation and optimized for both desktop and mobile.",
  },
  {
    title: "Website/Web app development",
    description:
      "Modern and responsive website or web app development, suitable for business or product use. Clean, maintainable code with unlimited revisions, optimized for both desktop and mobile. Final delivery will be production-ready, including deployment setup and all source files.",
  },
];

import { useState } from "react";

export default function ServicesSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="w-full py-10 sm:py-16 flex flex-col items-start justify-center bg-white text-black mb-8 px-4"
    >
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6 sm:mb-10 ml-2 sm:ml-12">
        Services
      </h2>
      <div className="w-full sm:pl-14">
        {services.map((service, idx) => (
          <div key={service.title} className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between px-3 sm:px-8 py-4 sm:py-6 text-lg sm:text-3xl font-medium focus:outline-none"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              <span>{service.title}</span>
              <FiChevronDown
                size={24}
                className={`transition-transform duration-300 ${
                  openIdx === idx ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-3 sm:px-8 pb-4 sm:pb-6 text-base sm:text-lg text-gray-600 animate-fadeIn">
                {service.description}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s; }
      `}</style>
    </section>
  );
}
