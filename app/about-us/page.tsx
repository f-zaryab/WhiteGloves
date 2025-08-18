import React from "react";
import AboutAuthor from "@/Components/Layouts/AboutAuthor";
import ContactUs from "@/Components/Layouts/ContactUs";
import HeroBanner from "@/Components/Layouts/HeroBanner";
import { AboutAuthorText, HeroBannerSimpleText, SiteDate } from "@/contants";

export const metadata = {
  title: "About us",
  description: SiteDate.about.description,
  alternates: {
    canonical: "https://www.whitegloves.cc/about-us",
  },
};

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center justify-items-center h-full min-h-screen pb-20 font-[family-name:var(--font-jost)]">
      {/* ------------------- Hero Banner ----------------- */}
      <HeroBanner {...HeroBannerSimpleText} />

      {/* ------------------- About Author ---------------- */}
      <AboutAuthor {...AboutAuthorText} />

      {/* ------------------- Conact form ---------------- */}
      <ContactUs />
    </main>
  );
};

export default AboutPage;
