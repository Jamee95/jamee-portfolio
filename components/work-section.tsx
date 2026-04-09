"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["All", "Angular", "Web Development", "WordPress"];

const projects = [
  {
    id: 1,
    title: "elGrocer DMCC Platform",
    category: "Angular",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "Enterprise-scale grocery delivery platform",
  },
  {
    id: 2,
    title: "Retailer Portal",
    category: "Angular",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Retailer management portal for 500+ retailers",
  },
  {
    id: 3,
    title: "WordPress E-commerce",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
    description: "Custom WordPress solutions",
  },
  {
    id: 4,
    title: "Book Exchange Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    description: "Final Year Project - PHP based platform",
  },
  {
    id: 5,
    title: "Responsive UI Layouts",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    description: "Responsive and SEO-optimized websites",
  },
  {
    id: 6,
    title: "Notes Sharing System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=600&fit=crop",
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
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#1d1d1d] text-white"
                  : "bg-[#f8f9f9] text-[#696969] hover:bg-[#1d1d1d] hover:text-white"
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
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-[#1d1d1d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#ebb884] text-sm mb-2">{project.category}</span>
                <h5 className="text-white text-xl font-semibold mb-2">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ebb884] text-white rounded-full text-[15px] font-medium hover:bg-[#e9b077] transition-all hover:shadow-lg hover:shadow-[#ebb884]/30"
          >
            See More on LinkedIn
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
