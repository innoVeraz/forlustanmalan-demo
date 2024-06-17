import { Hero } from "@/features/hero/components/Hero";
import { HowItWorks } from "@/features/how-it-works/components/HowItWorks";
import { ReportLoss } from "@/features/report-loss/components/ReportLoss";
import ScrollToTopButton from "@/features/scroll-to-top-button/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Hero />
      <ReportLoss />
      <HowItWorks />
    </>
  );
}
