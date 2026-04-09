import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    image: "/images/blog-1.jpg",
    title: "Building Enterprise Angular Applications",
    link: "#",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    title: "Optimizing Frontend Performance for Better UX",
    link: "#",
  },
  {
    id: 3,
    image: "/images/blog-3.jpg",
    title: "Modern Web Development Best Practices",
    link: "#",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#f8f9f9]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-2 text-xs uppercase tracking-wider text-[#ebb884] border border-[#ebb884] rounded-full mb-5">
            Blog
          </span>
          <h2 className="text-4xl font-semibold capitalize text-[#1d1d1d]">Recent Blog</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              <div className="overflow-hidden rounded-lg mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h6 className="text-lg font-medium mb-4 leading-relaxed text-[#1d1d1d]">
                <a href={blog.link} className="hover:text-[#ebb884] transition-colors">
                  {blog.title}
                </a>
              </h6>
              <a
                href={blog.link}
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
