"use client";

import { useState, useEffect, useRef } from "react";

const experiences = [
  {
    year: "04/2022 - 01/2025",
    title: "Software Engineer - Web",
    company: "elGrocer DMCC",
    location: "Lahore, Pakistan",
    points: [
      "Developed and maintained enterprise-scale Angular applications serving 100k+ users across the UAE",
      "Optimized frontend performance, reducing page load time by 45% and improving user experience",
      "Led sprint planning sessions and collaborated with cross-functional Agile teams, improving delivery speed by 30%",
      "Provided technical support to 500+ users, resolving 95% of issues within SLA targets",
      "Mentored junior developers, improving code quality and reducing bugs",
    ],
  },
  {
    year: "08/2021 - 01/2022",
    title: "Aspiring Web Engineer",
    company: "Gomal Theme",
    location: "Faisalabad, Pakistan",
    points: [
      "Customized and extended WordPress child and starter themes, delivering responsive and SEO-optimized websites for 10+ clients",
      "Configured and deployed custom WordPress solutions ensuring high performance and reliability",
      "Designed fully responsive UI layouts, resulting in a 100% increase in mobile engagement among users",
    ],
  },
];

const education = [
  {
    year: "02/2025 - 02/2026",
    title: "MSc in Computer Science and Technology",
    institution: "Ulster University",
    location: "Birmingham, UK",
  },
  {
    year: "09/2016 - 10/2020",
    title: "Bachelor of Science in Information Technology",
    institution: "Government College University",
    location: "Faisalabad, Pakistan",
  },
];

const skills = {
  frontend: [
    { name: "Angular 2+", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "HTML5/CSS3/SCSS", level: 92 },
    { name: "Bootstrap/Tailwind", level: 90 },
    { name: "PrimeNG/Material UI", level: 85 },
  ],
  backend: [
    { name: "Python", level: 70 },
    { name: "SQL", level: 75 },
    { name: "WordPress", level: 80 },
  ],
  tools: [
    { name: "Git/Source Tree", level: 85 },
    { name: "Visual Studio Code", level: 90 },
    { name: "Postman", level: 85 },
    { name: "DevOps", level: 70 },
  ],
};

const projects = [
  {
    title: "elGrocer DMCC by Etisalat E&",
    tech: "Angular, Visual Studio, PrimeNG, Git, Postman, TypeScript, Source Tree",
    points: [
      "Architected and delivered enterprise-scale grocery delivery platform supporting 100k+ active users and retailers across the UAE",
      "Optimized checkout and order processing pipelines, reducing transaction latency by 35% and failed orders by 30%",
      "Implemented scalable frontend architecture and API integrations, improving platform stability and peak-time performance",
    ],
  },
  {
    title: "Retailer Portal DMCC by Etisalat E&",
    tech: "Angular, Material UI, Apache Superset, Visual Studio, SQL Server, Git, DevOps, TypeScript",
    points: [
      "Designed and developed a retailer management portal enabling 500+ retailers to manage products, store timings, and financial operations",
      "Implemented real-time inventory tracking and pricing updates, reducing stock discrepancies by 40%",
      "Integrated analytics dashboards and financial reporting, improving operational efficiency by 30%",
    ],
  },
];

const awards = [
  {
    title: "Higher Education Commission Scholarship",
    description: "University fee waived through HEC scholarship (2016-2020)",
  },
  {
    title: "Prime Minister Laptop Scheme - HEC",
    description: "Awarded on 08/05/2018",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function CVContent() {
  const [activeSkillTab, setActiveSkillTab] = useState<"frontend" | "backend" | "tools">("frontend");

  return (
    <div className="bg-[#f8f9f9]">
      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#ebb884] mb-2">
                <AnimatedCounter target={3} suffix="+" />
              </div>
              <p className="text-[#696969]">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ebb884] mb-2">
                <AnimatedCounter target={100} suffix="k+" />
              </div>
              <p className="text-[#696969]">Users Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ebb884] mb-2">
                <AnimatedCounter target={12} suffix="+" />
              </div>
              <p className="text-[#696969]">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ebb884] mb-2">
                <AnimatedCounter target={45} suffix="%" />
              </div>
              <p className="text-[#696969]">Performance Boost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1d1d1d] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-[#ebb884]/10 rounded-lg">
                <svg className="w-5 h-5 text-[#ebb884]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Professional Summary
            </h2>
            <p className="text-[#696969] leading-relaxed text-lg">
              Software engineer specializing in web development with 3+ years of experience delivering enterprise-level 
              and scalable web applications. Proven track record of successfully delivering 2 enterprise-scale projects 
              and 10+ small-scale solutions through effective collaboration with cross-functional teams, while consistently 
              meeting tight deadlines and quality standards. Demonstrates strong adaptability and a commitment to continuous 
              learning, leveraging modern frameworks, tools, and best practices to optimize performance and enhance project outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-4">
              Experience
            </span>
            <h2 className="text-3xl font-semibold text-[#1d1d1d]">Work History</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-48 shrink-0">
                    <span className="inline-block px-4 py-2 bg-[#ebb884]/10 text-[#ebb884] text-sm font-medium rounded-full">
                      {exp.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#1d1d1d] mb-1">{exp.title}</h3>
                    <p className="text-[#ebb884] font-medium mb-1">{exp.company}</p>
                    <p className="text-[#696969] text-sm mb-4">{exp.location}</p>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#696969]">
                          <svg className="w-5 h-5 text-[#ebb884] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-4">
              Skills
            </span>
            <h2 className="text-3xl font-semibold text-[#1d1d1d]">Technical Expertise</h2>
          </div>

          {/* Skill Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            {(["frontend", "backend", "tools"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium capitalize transition-all ${
                  activeSkillTab === tab
                    ? "bg-[#1d1d1d] text-white"
                    : "bg-[#f8f9f9] text-[#696969] hover:bg-[#1d1d1d] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="max-w-2xl mx-auto space-y-6">
            {skills[activeSkillTab].map((skill, index) => (
              <div key={index} className="animate-fadeIn">
                <div className="flex justify-between mb-2">
                  <span className="text-[#1d1d1d] font-medium">{skill.name}</span>
                  <span className="text-[#ebb884] font-medium">{skill.level}%</span>
                </div>
                <div className="h-3 bg-[#f8f9f9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ebb884] to-[#d4a574] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-4">
              Education
            </span>
            <h2 className="text-3xl font-semibold text-[#1d1d1d]">Academic Background</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#ebb884]">
                <span className="inline-block px-4 py-1 bg-[#ebb884]/10 text-[#ebb884] text-sm font-medium rounded-full mb-4">
                  {edu.year}
                </span>
                <h3 className="text-xl font-semibold text-[#1d1d1d] mb-2">{edu.title}</h3>
                <p className="text-[#ebb884] font-medium">{edu.institution}</p>
                <p className="text-[#696969] text-sm">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-4">
              Projects
            </span>
            <h2 className="text-3xl font-semibold text-[#1d1d1d]">Key Projects</h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#f8f9f9] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#1d1d1d] mb-2">{project.title}</h3>
                <p className="text-[#ebb884] text-sm mb-4">
                  <span className="font-medium">Technologies:</span> {project.tech}
                </p>
                <ul className="space-y-3">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#696969]">
                      <svg className="w-5 h-5 text-[#ebb884] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-4">
              Honors
            </span>
            <h2 className="text-3xl font-semibold text-[#1d1d1d]">Awards & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ebb884]/10 rounded-full shrink-0">
                  <svg className="w-6 h-6 text-[#ebb884]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1d] mb-1">{award.title}</h3>
                  <p className="text-[#696969]">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#1d1d1d]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-4">
              Contact
            </span>
            <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:mjameel9628@gmail.com" className="bg-white/5 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ebb884]/10 rounded-full mx-auto mb-4 group-hover:bg-[#ebb884]/20 transition-colors">
                <svg className="w-7 h-7 text-[#ebb884]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">mjameel9628@gmail.com</p>
            </a>

            <a href="tel:+447311181625" className="bg-white/5 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ebb884]/10 rounded-full mx-auto mb-4 group-hover:bg-[#ebb884]/20 transition-colors">
                <svg className="w-7 h-7 text-[#ebb884]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+44 7311 181625</p>
            </a>

            <div className="bg-white/5 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ebb884]/10 rounded-full mx-auto mb-4">
                <svg className="w-7 h-7 text-[#ebb884]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Oxford, OX43DE, UK</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.linkedin.com/in/mjameel95/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ebb884] text-[#1d1d1d] rounded-full font-medium hover:bg-[#d4a574] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
