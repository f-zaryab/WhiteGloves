import HeroBannerMain from "../Components/Layouts/HeroBannerMain";
import WhyChooseUs from "../Components/Layouts/WhyChoose";
import MessageOneSection from "../Components/Layouts/MessageBoxOne";
import Process from "../Components/Layouts/Process";
import Gallery from "../Components/Layouts/Gallery";
import FAQS from "../Components/Layouts/FAQs";
import Testimonials from "../Components/Layouts/Testimonials";
import ContactUs from "../Components/Layouts/ContactUs";
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
