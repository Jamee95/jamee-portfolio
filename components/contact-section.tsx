"use client";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    value: "+447311181625",
    href: "tel:+447311181625",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "mjameel9628@gmail.com",
    href: "mailto:mjameel9628@gmail.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Address",
    value: "Oxford, OX43DE, United Kingdom",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#f8f9f9]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
              Contact
            </span>
            <h2 className="text-4xl font-semibold capitalize mb-6 text-[#1d1d1d]">
              Get in Touch
            </h2>
            <p className="text-[#696969] mb-10">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#ebb884] shadow-sm group-hover:bg-[#ebb884] group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-[#1d1d1d] font-semibold mb-1">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[#696969] hover:text-[#ebb884] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#696969]">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-[#1d1d1d]">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1d1d1d] text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9f9] focus:outline-none focus:border-[#ebb884] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1d1d1d] text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9f9] focus:outline-none focus:border-[#ebb884] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1d1d1d] text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Your Subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9f9] focus:outline-none focus:border-[#ebb884] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[#1d1d1d] text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9f9] focus:outline-none focus:border-[#ebb884] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-[#ebb884] text-white rounded-full font-medium hover:bg-[#e9b077] transition-all hover:shadow-lg hover:shadow-[#ebb884]/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
