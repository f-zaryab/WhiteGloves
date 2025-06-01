import HeroBanner from "@/components/Layouts/HeroBanner";
import MessageOneSection from "@/components/Layouts/MessageBoxOne";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center h-full min-h-screen pb-20 gap-16 font-[family-name:var(--font-jost)]">
      {/* ------------- HeroBanner -------------- */}
      <HeroBanner />
      {/* ------------ MessageBoxOne ------------ */}
      <MessageOneSection />
    </main>
  );
}
