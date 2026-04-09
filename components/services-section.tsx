const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    category: "Frontend Development",
    title: "Angular Development",
    description:
      "Building enterprise-scale Angular applications with optimized performance and user experience.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    category: "Full Stack Development",
    title: "Web Development",
    description:
      "Creating scalable web applications with modern frameworks and best practices.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
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
              className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#ebb884]/20"
            >
              <div className="w-20 h-20 bg-[#f8f9f9] rounded-2xl flex items-center justify-center mb-6 text-[#ebb884] group-hover:bg-[#ebb884] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <span className="text-[#696969] text-sm">{service.category}</span>
              <h6 className="text-xl font-semibold mt-2 mb-4 text-[#1d1d1d]">{service.title}</h6>
              <p className="text-[#696969] text-[15px] leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#1d1d1d] text-sm font-medium uppercase hover:text-[#ebb884] transition-colors group/link"
              >
                Read More
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
