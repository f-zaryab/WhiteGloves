import Gallery from "@/components/Layouts/Gallery";
import HeroBanner from "@/components/Layouts/HeroBanner";
import MessageOneSection from "@/components/Layouts/MessageBoxOne";
import { GalleryItemsSection } from "@/contants";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center h-full min-h-screen pb-20 gap-16 font-[family-name:var(--font-jost)]">
      {/* ------------- HeroBanner -------------- */}
      <HeroBanner />
      {/* ------------ MessageBoxOne ------------ */}
      <MessageOneSection />
      {/* ------------ Gallery Section ------------ */}
      <Gallery card={GalleryItemsSection} />
    </main>
  );
}
