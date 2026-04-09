import { Navbar } from "@/components/navbar";
import { CVHero } from "@/components/cv-hero";
import { CVContent } from "@/components/cv-content";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CVHero />
      <CVContent />
      <Footer />
    </main>
  );
}
