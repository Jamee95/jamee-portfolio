import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ResumeSection } from "@/components/resume-section";
import { StatsSection } from "@/components/stats-section";
import { WorkSection } from "@/components/work-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ResumeSection />
      <StatsSection />
      <WorkSection />
      <ServicesSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
