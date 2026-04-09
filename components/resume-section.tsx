"use client";

import { useState } from "react";
import Image from "next/image";
import { Inbox, Compass, Shield, Rocket } from "lucide-react";

const tabs = [
  { id: "about", label: "About Me", icon: Inbox },
  { id: "experience", label: "Experience", icon: Compass },
  { id: "education", label: "Education", icon: Shield },
  { id: "skills", label: "Skills", icon: Rocket },
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
  "Angular 2+",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Object-Oriented Programming",
  "Python",
  "Git",
  "HTML5",
  "Bootstrap",
  "CSS3 / SCSS",
  "PrimeNG",
  "Material UI",
  "WordPress",
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

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm capitalize transition-all ${
                  activeTab === tab.id
                    ? "bg-[#1d1d1d] text-white"
                    : "bg-white text-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="tab-content">
          {activeTab === "about" && (
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h4 className="text-xl font-medium mb-4 text-[#1d1d1d]">Software Engineer - Web</h4>
                <p className="text-[#696969] text-[15px] leading-relaxed mb-8">
                  Software engineer specializing in web development with 3+ years of experience 
                  delivering enterprise-level and scalable web applications. Proven track record 
                  of successfully delivering 2 enterprise-scale projects and 10+ small-scale 
                  solutions through effective collaboration with cross-functional teams.
                </p>

                <ul className="space-y-3">
                  {personalInfo.map((info, index) => (
                    <li key={index} className="flex text-[15px]">
                      <span className="w-32 text-[#1d1d1d]">{info.label}</span>
                      <span className="mx-2">:</span>
                      <strong className="text-[#1d1d1d]">{info.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/2">
                <Image
                  src="/images/person-2.png"
                  alt="About Me"
                  width={500}
                  height={600}
                  className="mx-auto"
                />
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-8 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#ebb884] text-sm">{exp.year}</span>
                  </div>
                  <h4 className="text-xl font-medium mb-2 text-[#1d1d1d]">{exp.title}</h4>
                  <h6 className="text-[#ebb884] text-sm mb-4">{exp.company}</h6>
                  <p className="text-[#696969] text-[15px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#ebb884] text-sm">{edu.year}</span>
                  </div>
                  <h4 className="text-xl font-medium mb-2 text-[#1d1d1d]">{edu.title}</h4>
                  <h6 className="text-[#696969] text-sm">{edu.institution}</h6>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white rounded-full text-[#1d1d1d] text-sm hover:bg-[#1d1d1d] hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
