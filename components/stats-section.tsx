"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10+", label: "Projects\nCompleted" },
  { value: "3+", label: "Years of\nExperience" },
  { value: "2", label: "Enterprise\nProjects" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 bg-[#1d1d1d] overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <Image
          src="/images/person-2.png"
          alt="Background"
          width={600}
          height={800}
          className="object-contain opacity-20"
        />
      </div>

      <div className="absolute inset-0 bg-[#1d1d1d]/90" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-2">
          Muhammad Jameel - Software Engineer
        </h2>
        <p className="text-white/80 text-lg mb-12">based in United Kingdom</p>

        <div className="flex flex-wrap justify-center gap-16 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-white text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/70 text-sm whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#ebb884] text-white rounded-full text-[15px] capitalize hover:bg-[#e9b077] transition-colors"
        >
          Download CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
