"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center">
            <Image
              src="/images/logo-light.png"
              alt="Logo"
              width={100}
              height={30}
              className={isScrolled ? "invert" : ""}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] uppercase tracking-wide transition-colors ${
                  isScrolled
                    ? "text-[#1d1d1d] hover:text-[#ebb884]"
                    : "text-white/80 hover:text-[#ebb884]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-[#1d1d1d]" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-[#1d1d1d]" : "text-white"} size={24} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] uppercase tracking-wide transition-colors ${
                    isScrolled ? "text-[#1d1d1d]" : "text-white"
                  } hover:text-[#ebb884]`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
