import HeroBannerMain from "../Components/Layouts/HeroBannerMain";
import OurServices from "../Components/Layouts/OurServices";
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
  OurServicesText,
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

      {/* ------------------- Our Services --------------- */}
      <OurServices {...OurServicesText} />

      {/* ------------------- WhyChooseUs ---------------- */}
      <WhyChooseUs {...WhyChooseText} />

      {/* ---------------- Process Section --------------- */}
      <Process {...ProcessText} />

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
