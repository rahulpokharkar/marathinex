import type { CSSProperties } from "react";
import { IndustryHighlightCard } from "@/components/landing/industry-highlight-card";

const highlights: {
  title: string;
  scene: string;
  artwork: CSSProperties;
}[] = [
  {
    title: "Industry Sessions",
    scene: "Cinematic placeholder for a panel discussion and audience.",
    artwork: {
      backgroundImage:
        "radial-gradient(ellipse 38% 70% at 52% 12%, rgba(224, 0, 0, .68), transparent 72%), linear-gradient(180deg, transparent 56%, rgba(5, 5, 7, .82) 100%), radial-gradient(ellipse 78% 42% at 50% 100%, #383033 0%, #171518 74%, transparent 76%), linear-gradient(110deg, #0d1014 12%, #321117 53%, #101014 90%)",
    },
  },
  {
    title: "Curated Meetings",
    scene: "Cinematic placeholder for a professional handshake.",
    artwork: {
      backgroundImage:
        "radial-gradient(ellipse 40% 72% at 58% 50%, rgba(151, 15, 25, .6), transparent 76%), linear-gradient(105deg, #130b0d 0%, #52151b 48%, #160b0e 100%), linear-gradient(180deg, transparent, #070709)",
    },
  },
  {
    title: "Project Market",
    scene: "Cinematic placeholder for a film studio spotlight.",
    artwork: {
      backgroundImage:
        "radial-gradient(ellipse 22% 30% at 54% 17%, rgba(255, 242, 216, .85), transparent 52%), conic-gradient(from 156deg at 54% 17%, transparent 0deg, rgba(255, 224, 192, .14) 18deg, transparent 40deg), linear-gradient(180deg, #1d2025 0%, #121317 60%, #090a0d 100%)",
    },
  },
  {
    title: "Talent Showcase",
    scene: "Cinematic placeholder for rows of red cinema seats.",
    artwork: {
      backgroundImage:
        "radial-gradient(ellipse 70% 48% at 50% 100%, rgba(154, 12, 24, .58), transparent 72%), repeating-linear-gradient(0deg, transparent 0 17px, rgba(193, 22, 38, .56) 18px 26px, rgba(34, 8, 12, .9) 27px 34px), repeating-linear-gradient(90deg, #190d10 0 22px, #3c1117 23px 42px, #100b0e 43px 54px), linear-gradient(180deg, #08090c, #251015)",
    },
  },
];

export function IndustryHighlights() {
  return (
    <section
      aria-label="Industry highlights"
      className="bg-white"
      id="industry-highlights"
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-3 px-5 py-5 sm:px-8 sm:py-6 md:grid-cols-2 xl:grid-cols-4 2xl:px-[3.25rem]">
        {highlights.map((highlight) => (
          <IndustryHighlightCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </section>
  );
}
