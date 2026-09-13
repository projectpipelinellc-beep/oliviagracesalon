import About from "@/components/About";
import BookingCTA from "@/components/BookingCTA";
import ColorExperience from "@/components/ColorExperience";
import Contact from "@/components/Contact";
import GalleryPreview from "@/components/GalleryPreview";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ColorExperience />
      <GalleryPreview />
      <BookingCTA />
      <Contact />
    </>
  );
}
