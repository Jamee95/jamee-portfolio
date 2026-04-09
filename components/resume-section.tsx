"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "about", label: "About Me", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )},
  { id: "experience", label: "Experience", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )},
  { id: "education", label: "Education", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )},
  { id: "skills", label: "Skills", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )},
];

const personalInfo = [
  { label: "Name", value: "Muhammad Jameel" },
  { label: "Nationality", value: "Pakistani / UK Resident" },
  { label: "Phone", value: "+447311181625" },
  { label: "Email", value: "mjameel9628@gmail.com" },
  { label: "Experience", value: "3+ years" },
  { label: "Freelance", value: "Available" },
  { label: "Location", value: "Oxford, OX43DE, UK" },
  { label: "Language", value: "English, Urdu" },
];

const experiences = [
  {
    year: "04/2022 - 01/2025",
    title: "Software Engineer - Web",
    company: "elGrocer DMCC",
    description:
      "Developed and maintained enterprise-scale Angular applications serving 100k+ users across the UAE. Optimized frontend performance, reducing page load time by 45%.",
  },
  {
    year: "08/2021 - 01/2022",
    title: "Aspiring Web Engineer",
    company: "Gomal Theme",
    description:
      "Customized and extended WordPress child and starter themes, delivering responsive and SEO-optimized websites for 10+ clients.",
  },
];

const education = [
  {
    year: "02/2025 - 02/2026",
    title: "MSc in Computer Science and Technology",
    institution: "Ulster University, Birmingham, UK",
  },
  {
    year: "09/2016 - 10/2020",
    title: "Bachelor of Science in Information Technology",
    institution: "Government College University, Faisalabad, Pakistan",
  },
];

const skills = [
  { name: "Angular 2+", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "HTML5/CSS3", level: 92 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 75 },
  { name: "Git", level: 85 },
  { name: "Bootstrap/Tailwind", level: 90 },
];

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-24 bg-[#f8f9f9]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
            resume
          </span>
          <h2 className="text-4xl font-semibold capitalize text-[#1d1d1d]">My Resume</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#1d1d1d] text-white shadow-lg"
                  : "bg-white text-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white border border-gray-200"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="flex flex-col lg:flex-row items-start gap-12 animate-fadeIn">
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-2xl font-semibold mb-2 text-[#1d1d1d]">Software Engineer - Web</h4>
                  <p className="text-[#ebb884] mb-6">Building the web, one component at a time</p>
                  <p className="text-[#696969] text-[15px] leading-relaxed mb-8">
                    Software engineer specializing in web development with 3+ years of experience 
                    delivering enterprise-level and scalable web applications. Proven track record 
                    of successfully delivering 2 enterprise-scale projects and 10+ small-scale 
                    solutions through effective collaboration with cross-functional teams.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-[#f8f9f9] rounded-lg">
                        <span className="text-[#696969] text-sm min-w-[80px]">{info.label}:</span>
                        <span className="text-[#1d1d1d] font-medium text-sm">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#ebb884]/10 rounded-2xl" />
                  <Image
                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&h=600&fit=crop"
                    alt="About Me"
                    width={500}
                    height={600}
                    className="relative rounded-2xl w-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#ebb884]">
                  <div className="inline-block px-4 py-1 bg-[#ebb884]/10 text-[#ebb884] text-sm rounded-full mb-4">
                    {exp.year}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-[#1d1d1d]">{exp.title}</h4>
                  <h6 className="text-[#ebb884] font-medium mb-4">{exp.company}</h6>
                  <p className="text-[#696969] text-[15px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#ebb884]">
                  <div className="inline-block px-4 py-1 bg-[#ebb884]/10 text-[#ebb884] text-sm rounded-full mb-4">
                    {edu.year}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-[#1d1d1d]">{edu.title}</h4>
                  <h6 className="text-[#696969]">{edu.institution}</h6>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="max-w-3xl mx-auto animate-fadeIn">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#1d1d1d] font-medium">{skill.name}</span>
                        <span className="text-[#ebb884] font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#f8f9f9] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#ebb884] to-[#d4a574] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
