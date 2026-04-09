import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: "/images/service-1.svg",
    category: "Frontend Development",
    title: "Angular Development",
    description:
      "Building enterprise-scale Angular applications with optimized performance and user experience.",
  },
  {
    icon: "/images/service-2.svg",
    category: "Full Stack Development",
    title: "Web Development",
    description:
      "Creating scalable web applications with modern frameworks and best practices.",
  },
  {
    icon: "/images/service-3.svg",
    category: "Custom Solutions",
    title: "API Integration",
    description:
      "Implementing seamless API integrations and improving platform stability.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#f8f9f9]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
            Services
          </span>
          <h2 className="text-4xl font-semibold capitalize text-[#1d1d1d]">My Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                />
              </div>
              <span className="text-[#696969] text-sm">{service.category}</span>
              <h6 className="text-lg font-medium mt-2 mb-4 text-[#1d1d1d]">{service.title}</h6>
              <p className="text-[#696969] text-[15px] leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#1d1d1d] text-sm uppercase hover:text-[#ebb884] transition-colors"
              >
                Read More
                <ArrowUpRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
