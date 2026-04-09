"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const typewriterTexts = [
  "Software Engineer",
  "Frontend Developer", 
  "Angular Specialist",
  "Web Developer"
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typewriterTexts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#1d1d1d] relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-[200px] h-[200px] opacity-30">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[...Array(7)].map((_, row) => 
            [...Array(7)].map((_, col) => (
              <circle key={`${row}-${col}`} cx={15 + col * 25} cy={15 + row * 25} r="3" fill="white" />
            ))
          )}
        </svg>
      </div>

      <div className="absolute bottom-20 right-40">
        <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M10 ${25 + i * 8} Q 40 ${15 + i * 8}, 70 ${25 + i * 8} T 130 ${25 + i * 8} T 170 ${25 + i * 8}`}
              stroke="#e2bb93"
              strokeWidth="2.5"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-white/80 text-lg mb-2">Hi, I&apos;m a</p>
            <h1 className="text-[#ebb884] text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 h-[60px] lg:h-[70px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
            <h2 className="text-white text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight">
              A Best Digital<br />Product Design
            </h2>
            <p className="text-white/70 text-[16px] font-light leading-relaxed mt-6 max-w-lg mx-auto lg:mx-0">
              Software engineer specializing in web development with 3+ years of experience 
              delivering enterprise-level and scalable web applications.
            </p>
            <Link
              href="#work"
              className="inline-block mt-8 px-8 py-4 bg-[#ebb884] text-white rounded-full text-[15px] font-medium capitalize hover:bg-[#e9b077] transition-all hover:shadow-lg hover:shadow-[#ebb884]/30"
            >
              View My Works
            </Link>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-b from-[#ebb884]/20 to-transparent rounded-full blur-2xl" />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Muhammad Jameel"
                  width={400}
                  height={500}
                  className="relative rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
