import type { Metadata } from "next";
import { AboutEventSection } from "@/components/landing/about-event-section";
import { EventHero } from "@/components/landing/event-hero";
import { EventProgramSection } from "@/components/landing/event-program-section";
import { IndustryDesksSection } from "@/components/landing/industry-desks-section";
import { ProjectMarketSection } from "@/components/landing/project-market-section";
import { CuratedMeetingsSection } from "@/components/landing/curated-meetings-section";
import { TalentShowcaseSection } from "@/components/landing/talent-showcase-section";
import { EventInterestSection } from "@/components/landing/event-interest-section";
import { EventFAQSection } from "@/components/landing/event-faq-section";
import { EventFinalCTA } from "@/components/landing/event-final-cta";
import { LandingHeader } from "@/components/landing/landing-header";
import { SiteFooter } from "@/components/landing/site-footer";

export const metadata: Metadata = {
  title: "MarathiNEX FILM 2027 Event",
  description:
    "A planned MarathiNEX FILM industry gathering in Mumbai for filmmakers and entertainment professionals.",
};

export default function FilmEventPage() {
  return (
    <div className="min-h-screen bg-[#111216]">
      <LandingHeader />
      <main>
        <EventHero />
        <AboutEventSection />
        <EventProgramSection />
        <IndustryDesksSection />
        <ProjectMarketSection />
        <CuratedMeetingsSection />
        <TalentShowcaseSection />
        <EventInterestSection />
        <EventFAQSection />
        <EventFinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
