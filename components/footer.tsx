import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mjameel95/" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white">
      <div className="max-w-[1140px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="text-white font-medium mb-5">Address</h6>
            <p className="text-white/70 text-sm leading-relaxed">
              United Kingdom — Oxford, OX43DE
            </p>
          </div>

          <div>
            <h6 className="text-white font-medium mb-5">Say Hello</h6>
            <p className="text-white/70 text-sm mb-2">
              <a
                href="mailto:mjameel9628@gmail.com"
                className="hover:text-[#ebb884] transition-colors"
              >
                mjameel9628@gmail.com
              </a>
            </p>
            <p className="text-white text-lg font-medium">
              <a
                href="tel:+447311181625"
                className="hover:text-[#ebb884] transition-colors"
              >
                +44 731 118 1625
              </a>
            </p>
          </div>

          <div>
            <h6 className="text-white font-medium mb-5">Social</h6>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-[#ebb884] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-medium mb-5">Newsletter</h6>
            <form className="relative">
              <input
                type="email"
                placeholder="Type Your Email"
                className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#ebb884] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#ebb884] rounded flex items-center justify-center hover:bg-[#e9b077] transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1140px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="#home">
              <Image
                src="/images/logo-light.png"
                alt="Logo"
                width={100}
                height={30}
              />
            </Link>

            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Muhammad Jameel. Built with{" "}
              <Heart size={14} className="inline text-red-500 fill-red-500" /> using
              Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
