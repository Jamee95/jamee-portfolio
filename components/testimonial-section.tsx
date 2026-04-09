"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote:
      "I highly recommend hiring developers for your team. As a company that recently brought on several developers, I can attest to the incredible value they bring to our projects.",
    name: "Robert Beck",
    role: "Product Designer",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote:
      "Working with skilled developers has transformed our business. The attention to detail and technical expertise delivered outstanding results that exceeded our expectations.",
    name: "William Appel",
    role: "Founder & CEO",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote:
      "The development team consistently offered valuable guidance, suggesting effective strategies to enhance our setup, and ensuring clarity and quality in every aspect.",
    name: "Earlene Mart",
    role: "Digital Marketer",
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      id="testimonial" 
      className="py-24 bg-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
            Testimonial
          </span>
          <h2 className="text-4xl font-semibold capitalize text-[#1d1d1d]">Clients Feedback</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#ebb884]/20">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial Content with smooth transition */}
          <div className="relative overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              key={currentIndex}
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#ebb884] shadow-lg">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#ebb884] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-[#696969] text-lg md:text-xl italic leading-relaxed mb-8 px-4">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>

              <h4 className="text-[#1d1d1d] font-semibold text-xl">
                {currentTestimonial.name}
              </h4>
              <p className="text-[#ebb884] text-sm font-medium">{currentTestimonial.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-[#1d1d1d]/20 flex items-center justify-center hover:bg-[#1d1d1d] hover:text-white hover:border-[#1d1d1d] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#ebb884] w-8" : "bg-[#1d1d1d]/20 hover:bg-[#1d1d1d]/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-[#1d1d1d]/20 flex items-center justify-center hover:bg-[#1d1d1d] hover:text-white hover:border-[#1d1d1d] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
