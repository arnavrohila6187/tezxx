import { Navbar } from "@/components/Navbar";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Certifications } from "@/components/Certifications";
import { Leadership } from "@/components/Leadership";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlideshow />
        <Certifications />
        <Leadership />
      </main>
      <Footer />
    </>
  );
}
