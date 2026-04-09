"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const stats = [
  { value: 10, suffix: "+", label: "Projects\nCompleted" },
  { value: 3, suffix: "+", label: "Years of\nExperience" },
  { value: 2, suffix: "", label: "Enterprise\nProjects" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-white text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-[#1d1d1d]/90" />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-[#ebb884]/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#ebb884]/20 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#ebb884] rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#ebb884] rounded-full animate-pulse" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Muhammad Jameel - <span className="text-[#ebb884]">Software Engineer</span>
        </h2>
        <p className="text-white/70 text-lg mb-16">Based in United Kingdom</p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 text-sm mt-2 whitespace-pre-line group-hover:text-[#ebb884] transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/resume.pdf"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#ebb884] text-white rounded-full text-[15px] font-medium hover:bg-[#e9b077] transition-all hover:shadow-lg hover:shadow-[#ebb884]/30 group"
        >
          Download CV
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
