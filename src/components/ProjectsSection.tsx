"use client";
import { MouseEvent, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luna AI Framer LP",
    image: "/luna-project.png",
    bg: "/stars-bg.jpg",
    tags: ["Landing page", "Ux/Ui Design", "AI technology"],
    category: "AI/Tech",
    year: "2024",
    description:
      "A modern AI-powered landing page built with Framer, featuring interactive elements and cutting-edge design principles.",
    link: "https://luna-ai-demo.framer.website",
    githubLink: "https://github.com/yourusername/luna-ai-framer",
  },
  {
    id: 2,
    title: "How I Started Writing About Tech Before I Felt 'Qualified'",
    image: "/lumig-project.png",
    bg: "/lumig-bg.jpg",
    tags: ["Blog", "Technical Writing", "Career", "Personal Growth"],
    category: "Blog",
    year: "2025",
    description:
      "A personal reflection on starting a tech writing journey without waiting to feel fully 'qualified', and how sharing early experiences can inspire growth and confidence.",
    link: "https://yourblog.com/tech-writing-journey",
    githubLink: null,
  },
  {
    id: 3,
    title: "Luna AI Framer LP",
    image: "/luna-project.png",
    bg: "/stars-bg.jpg",
    tags: ["Landing page", "Ux/Ui Design", "AI technology"],
    category: "AI/Tech",
    year: "2023",
    description:
      "Advanced iteration of the Luna AI platform with enhanced user experience and machine learning integration.",
    link: "https://luna-ai-v2.framer.website",
    githubLink: "https://github.com/yourusername/luna-ai-v2",
  },
  {
    id: 4,
    title: "LUMIG Resin Art Website",
    image: "/lumig-project.png",
    bg: "/lumig-bg.jpg",
    tags: ["Website", "Template", "Ux/Ui Design", "Resin Art"],
    category: "E-commerce",
    year: "2023",
    description:
      "Comprehensive digital presence for artisan creators with integrated booking and portfolio management.",
    link: "https://lumig-resin-art.com",
    githubLink: "https://github.com/yourusername/lumig-resin-website",
  },
];

const categories = ["All", "AI/Tech", "Blog"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleProjectClick = (link: string | URL | undefined) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleExternalLinkClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    link: string | URL | undefined
  ) => {
    e.stopPropagation();
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    githubLink: string | URL | undefined
  ) => {
    e.stopPropagation(); // Prevent the main project click
    if (githubLink) {
      window.open(githubLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="work"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute top-10 right-2 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-2 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-pink-100/40 to-orange-100/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Projects
          </h2>
          <p className="text-sm sm:text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated selection of my latest work, showcasing innovative
            solutions and creative excellence across various domains.
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
                  activeCategory === category
                    ? "bg-gray-900 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 xl:gap-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(0)}
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50">
                <div
                  className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden flex items-center justify-center"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "linear-gradient(135deg, #18132b 0%, #2d1b3d 100%)"
                        : "linear-gradient(135deg, #f8f6f2 0%, #f1ede8 100%)",
                  }}
                >
                  <Image
                    src={project.bg}
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className={`z-0 transition-all duration-700 ${
                      hoveredProject === project.id
                        ? "scale-110 opacity-40"
                        : "opacity-60"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-5"></div>

                  <div
                    className={`relative z-10 w-11/12 sm:w-5/6 h-4/5 transition-all duration-500 ${
                      hoveredProject === project.id ? "scale-105" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-xl sm:rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm"
                      sizes="(max-width: 768px) 90vw, 40vw"
                    />
                  </div>

                  <div
                    className={`absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-end p-3 sm:p-6 transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="flex gap-2 sm:gap-3">
                      <button
                        onClick={(e) =>
                          handleExternalLinkClick(e, project.link)
                        }
                        className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        title="View Project"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                      {project.githubLink && (
                        <button
                          onClick={(e) =>
                            handleGithubClick(e, project.githubLink)
                          }
                          className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3 gap-2 sm:gap-0">
                    <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                    <ArrowUpRight
                      className={`inline-block w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 transition-transform duration-300 ${
                        hoveredProject === project.id
                          ? "translate-x-1 -translate-y-1"
                          : ""
                      }`}
                    />
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-2 sm:mb-4 line-clamp-2 text-xs sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tag}
                        className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 ${
                          tagIdx === 0
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200"
                            : tagIdx === 1
                            ? "bg-gradient-to-r from-green-50 to-teal-50 text-green-700 border-green-200"
                            : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-16">
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7391F1] to-[#5a72be] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:from-[#5a72be] hover:to-[#7391F1] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg hover:cursor-pointer">
            View All Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
