"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["All", "Angular", "Web Development", "WordPress"];

const projects = [
  {
    id: 1,
    title: "elGrocer DMCC Platform",
    category: "Angular",
    image: "/images/portfolio-1.jpg",
    description: "Enterprise-scale grocery delivery platform",
  },
  {
    id: 2,
    title: "Retailer Portal",
    category: "Angular",
    image: "/images/portfolio-2.jpg",
    description: "Retailer management portal for 500+ retailers",
  },
  {
    id: 3,
    title: "WordPress E-commerce",
    category: "WordPress",
    image: "/images/portfolio-3.jpg",
    description: "Custom WordPress solutions",
  },
  {
    id: 4,
    title: "Book Exchange Platform",
    category: "Web Development",
    image: "/images/portfolio-4.jpg",
    description: "Final Year Project - PHP based platform",
  },
  {
    id: 5,
    title: "Responsive UI Layouts",
    category: "Web Development",
    image: "/images/portfolio-5.jpg",
    description: "Responsive and SEO-optimized websites",
  },
  {
    id: 6,
    title: "Notes Sharing System",
    category: "Web Development",
    image: "/images/portfolio-6.jpg",
    description: "Knowledge sharing platform for students",
  },
];

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
            Portfolio
          </span>
          <h2 className="text-4xl font-semibold capitalize text-[#1d1d1d]">My Work</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? "text-[#ebb884]"
                  : "text-[#696969] hover:text-[#ebb884]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1d1d1d]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h5 className="text-white text-lg font-medium mb-2">
                  {project.title}
                </h5>
                <p className="text-white/70 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/mjameel95/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#ebb884] text-white rounded-full text-[15px] hover:bg-[#e9b077] transition-colors"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
