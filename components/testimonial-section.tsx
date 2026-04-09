"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "/images/client-1.jpg",
    quote:
      "I highly recommend hiring developers for your team. As a company that recently brought on several developers, I can attest to the incredible value they bring to our projects.",
    name: "Robert Beck",
    role: "Product Designer",
  },
  {
    id: 2,
    image: "/images/client-1.jpg",
    quote:
      "Working with skilled developers has transformed our business. The attention to detail and technical expertise delivered outstanding results that exceeded our expectations.",
    name: "William Appel",
    role: "Founder & CEO",
  },
  {
    id: 3,
    image: "/images/client-1.jpg",
    quote:
      "The development team consistently offered valuable guidance, suggesting effective strategies to enhance our setup, and ensuring clarity and quality in every aspect.",
    name: "Earlene Mart",
    role: "Digital Marketer",
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonial" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
            Testimonial
          </span>
          <h2 className="text-4xl font-semibold capitalize text-[#1d1d1d]">Clients Feedback</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#ebb884]">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-[#696969] text-lg italic leading-relaxed mb-8">
            {currentTestimonial.quote}
          </p>

          <h4 className="text-[#1d1d1d] font-semibold text-lg">
            {currentTestimonial.name}
          </h4>
          <p className="text-[#696969] text-sm">{currentTestimonial.role}</p>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#1d1d1d]/20 flex items-center justify-center hover:bg-[#1d1d1d] hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#1d1d1d]/20 flex items-center justify-center hover:bg-[#1d1d1d] hover:text-white transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
