import HeroBannerMain from "../components/layouts/HeroBannerMain";
import WhyChooseUs from "../components/layouts/WhyChoose";
import MessageOneSection from "../components/layouts/MessageBoxOne";
import Process from "../components/layouts/Process";
import Gallery from "../components/layouts/Gallery";
import FAQS from "../components/layouts/FAQs";
import Testimonials from "../components/layouts/Testimonials";
import ContactUs from "../components/layouts/ContactUs";
import {
  HeroBannerText,
  GalleryItemsSection,
  WhyChooseText,
  FAQText,
  TestimonialText,
  ProcessText,
  SiteDate,
} from "@/contants";

export const metadata = {
  title: SiteDate.homepage.page,
  description: SiteDate.homepage.description,
};

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
