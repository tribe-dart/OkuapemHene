import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import HistorySection from "@/components/HistorySection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <StatsSection />
      <HistorySection />
      <NewsSection />
      <CTASection />
    </>
  );
}
