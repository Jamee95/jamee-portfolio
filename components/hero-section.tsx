"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#1d1d1d] relative"
      style={{
        backgroundImage: "url('/images/bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-white text-xl font-normal mb-0 leading-relaxed">
              {"Hi, I'm Software Engineer"}
            </h1>
            <h2 className="text-white text-4xl md:text-5xl lg:text-[60px] font-semibold mt-4 leading-tight capitalize">
              A Best Digital Product Design
            </h2>
            <p className="text-white/80 text-[15px] font-light leading-relaxed mt-4 max-w-lg mx-auto lg:mx-0">
              Software engineer specializing in web development with 3+ years of experience 
              delivering enterprise-level and scalable web applications.
            </p>
            <Link
              href="#work"
              className="inline-block mt-8 px-8 py-3 bg-[#ebb884] text-white rounded-full text-[15px] capitalize hover:bg-[#e9b077] transition-colors"
            >
              view my works
            </Link>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute top-0 right-0 w-[150px] h-[150px]">
              <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="3" fill="white" />
                <circle cx="30" cy="10" r="3" fill="white" />
                <circle cx="50" cy="10" r="3" fill="white" />
                <circle cx="70" cy="10" r="3" fill="white" />
                <circle cx="90" cy="10" r="3" fill="white" />
                <circle cx="10" cy="30" r="3" fill="white" />
                <circle cx="30" cy="30" r="3" fill="white" />
                <circle cx="50" cy="30" r="3" fill="white" />
                <circle cx="70" cy="30" r="3" fill="white" />
                <circle cx="90" cy="30" r="3" fill="white" />
                <circle cx="10" cy="50" r="3" fill="white" />
                <circle cx="30" cy="50" r="3" fill="white" />
                <circle cx="50" cy="50" r="3" fill="white" />
                <circle cx="70" cy="50" r="3" fill="white" />
                <circle cx="90" cy="50" r="3" fill="white" />
                <circle cx="10" cy="70" r="3" fill="white" />
                <circle cx="30" cy="70" r="3" fill="white" />
                <circle cx="50" cy="70" r="3" fill="white" />
                <circle cx="70" cy="70" r="3" fill="white" />
                <circle cx="90" cy="70" r="3" fill="white" />
                <circle cx="10" cy="90" r="3" fill="white" />
                <circle cx="30" cy="90" r="3" fill="white" />
                <circle cx="50" cy="90" r="3" fill="white" />
                <circle cx="70" cy="90" r="3" fill="white" />
                <circle cx="90" cy="90" r="3" fill="white" />
              </svg>
            </div>

            <div className="absolute bottom-10 right-10">
              <svg width="150" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q 30 20, 50 50 T 90 50 T 130 50 T 170 50" stroke="#e2bb93" strokeWidth="3" fill="none" />
                <path d="M10 60 Q 30 30, 50 60 T 90 60 T 130 60 T 170 60" stroke="#e2bb93" strokeWidth="3" fill="none" />
                <path d="M10 70 Q 30 40, 50 70 T 90 70 T 130 70 T 170 70" stroke="#e2bb93" strokeWidth="3" fill="none" />
              </svg>
            </div>

            <div className="relative z-10">
              <Image
                src="/images/person.png"
                alt="Muhammad Jameel"
                width={500}
                height={600}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
