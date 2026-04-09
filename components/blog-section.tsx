import Image from "next/image";

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    title: "Building Enterprise Angular Applications",
    date: "March 15, 2024",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    title: "Optimizing Frontend Performance for Better UX",
    date: "February 28, 2024",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    title: "Modern Web Development Best Practices",
    date: "January 10, 2024",
    link: "#",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#1d1d1d]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
            Blog
          </span>
          <h2 className="text-4xl font-semibold capitalize text-white">Recent Blog</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="group">
              <div className="overflow-hidden rounded-2xl mb-6 relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-[#ebb884] text-sm">{blog.date}</span>
              <h6 className="text-lg font-semibold mt-2 mb-4 leading-relaxed text-white group-hover:text-[#ebb884] transition-colors">
                <a href={blog.link}>
                  {blog.title}
                </a>
              </h6>
              <a
                href={blog.link}
                className="inline-flex items-center gap-2 text-white/70 text-sm uppercase hover:text-[#ebb884] transition-colors group/link"
              >
                Read More
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
