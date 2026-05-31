"use client";

import { useState } from "react";
import { projects } from "../../data/data";
import { FaArrowRight } from "react-icons/fa6";
import { playfair } from "../lib/fonts";

const tabs = [
  { label: "All", value: "all" },
  { label: "Web Design", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Branding", value: "branding" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="portfolio" className="py-12 md:py-16 lg:py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 border rounded-full text-xs md:text-sm font-medium text-[#f59e0b] border-orange-200">
            ✦ OUR WORK
          </span>

          <h2 className={`${playfair.className} mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
            Our Portfolio
          </h2>

          <p className="mt-3 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-500 px-2">
            Explore our latest projects and creative solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mt-6 md:mt-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 md:px-7 md:py-3 rounded-full border text-sm md:text-base transition-all duration-300
                ${activeTab === tab.value
                  ? "bg-[#f7a600] text-white border-[#f7a600] shadow-lg"
                  : "bg-white text-gray-600 border-gray-300 hover:border-[#f7a600]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl md:rounded-[30px] bg-white border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* TOP AREA */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-linear-to-b from-yellow-400 to-orange-500 transition-all duration-500">

           
                <div className="absolute top-4 right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={44} color="white" className="md:text-[52px]" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#171738] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-white px-4">
                  <h3 className="text-xl md:text-3xl font-bold text-center">
                    {project.title}
                  </h3>
                  <button className="mt-4 md:mt-6 border border-white rounded-full px-5 py-2 md:px-6 md:py-3 text-sm md:text-base">
                    View Project →
                  </button>
                </div>

              </div>

              {/* Content */}
              <div className="px-4 md:px-5 py-3 md:py-4">
                <span className="uppercase tracking-[2px] md:tracking-[3px] text-orange-500 text-xs md:text-sm font-semibold">
                  {project.category}
                </span>

                <h3 className="mt-2 md:mt-3 text-lg md:text-2xl font-bold text-[#0f172a]">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2 md:mt-3 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-3 md:mt-4 flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="w-2 h-2 rounded-full bg-orange-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  </div>

                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center bg-orange-500 text-white transition hover:bg-orange-600">
                    <FaArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
