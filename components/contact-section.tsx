"use client";

import { Phone, Send, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+447311181625",
    href: "tel:+447311181625",
  },
  {
    icon: Send,
    title: "Email",
    value: "mjameel9628@gmail.com",
    href: "mailto:mjameel9628@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Oxford, OX43DE,\nUnited Kingdom",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-5/12">
            <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
              Contact
            </span>
            <h2 className="text-4xl font-semibold capitalize mb-12 text-[#1d1d1d]">
              Get in Touch
            </h2>

            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-[#ebb884]">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#1d1d1d] font-medium mb-1">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#696969] hover:text-[#ebb884] transition-colors whitespace-pre-line"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#696969] whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-7/12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1d1d1d] text-sm mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#ebb884] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#1d1d1d] text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#ebb884] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1d1d1d] text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#ebb884] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#1d1d1d] text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#ebb884] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#ebb884] text-white rounded-full hover:bg-[#e9b077] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
