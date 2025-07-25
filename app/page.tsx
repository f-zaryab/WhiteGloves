import HeroBannerMain from "@/components/Layouts/HeroBannerMain";
import WhyChooseUs from "@/components/Layouts/WhyChoose";
import MessageOneSection from "@/components/Layouts/MessageBoxOne";
import Gallery from "@/components/Layouts/Gallery";
import FAQS from "@/components/Layouts/FAQs";
import Testimonials from "@/components/Layouts/Testimonials";
import {
  HeroBannerText,
  GalleryItemsSection,
  WhyChooseText,
  FAQText,
  TestimonialText,
  ProcessText,
} from "@/contants";
import ContactUs from "@/components/Layouts/ContactUs";
import Process from "@/components/Layouts/Process";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center h-full min-h-screen pb-20 font-[family-name:var(--font-jost)]">
      {/* -------------------- HeroBanner ---------------- */}
      <HeroBannerMain carouselItems={HeroBannerText} />

      {/* ------------------- WhyChooseUs ---------------- */}
      <WhyChooseUs {...WhyChooseText} />

      {/* ---------------- Process Section --------------- */}
      <Process variant="card-four" {...ProcessText} />

      {/* ------------------ Gallery Section ------------- */}
      <Gallery card={GalleryItemsSection} />

      {/* ------------------- MessageBoxOne -------------- */}
      <MessageOneSection />

      {/* -------------- Testimonials Section ------------ */}
      <Testimonials {...TestimonialText} />

      {/* ---------------------- FAQS -------------------- */}
      <FAQS {...FAQText} />

      {/* ------------------- Conact form ---------------- */}
      <ContactUs />
    </main>
  );
}
