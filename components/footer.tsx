import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mjameel95/" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="max-w-[1140px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h6 className="text-white font-semibold mb-5 text-lg">Address</h6>
            <p className="text-white/60 text-sm leading-relaxed">
              United Kingdom<br />
              Oxford, OX43DE
            </p>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-5 text-lg">Say Hello</h6>
            <p className="text-white/60 text-sm mb-3">
              <a
                href="mailto:mjameel9628@gmail.com"
                className="hover:text-[#ebb884] transition-colors"
              >
                mjameel9628@gmail.com
              </a>
            </p>
            <p className="text-white text-xl font-semibold">
              <a
                href="tel:+447311181625"
                className="hover:text-[#ebb884] transition-colors"
              >
                +44 731 118 1625
              </a>
            </p>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-5 text-lg">Social</h6>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-[#ebb884] transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1140px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="#home" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-white">
                <span className="text-[#ebb884]">J</span>ameel
              </span>
            </Link>

            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Muhammad Jameel. Built with{" "}
              <span className="text-red-500">&#9829;</span> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
