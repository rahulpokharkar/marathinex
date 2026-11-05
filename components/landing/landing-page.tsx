import {
  ArrowRight,
  Clapperboard,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutMarathiNEX } from "@/components/landing/about-marathinex";
import { IndustryHighlights } from "@/components/landing/industry-highlights";
import { WhoShouldAttend } from "@/components/landing/who-should-attend";
import { WhoShouldJoin } from "@/components/landing/who-should-join";
import { FilmFormats } from "@/components/landing/film-formats";
import { NextProjectSection } from "@/components/landing/next-project-section";
import { MarathiNEXEventSection } from "@/components/landing/marathinex-event-section";
import { FAQSection } from "@/components/landing/faq-section";
import { FinalRegistrationCTA } from "@/components/landing/final-registration-cta";

const focusAreas = [
  {
    number: "01",
    title: "Every craft has a place",
    description:
      "From the first draft to the final frame, Marathi cinema is made by people across many disciplines.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Good work brings us closer",
    description:
      "A shared home for the voices, experience, and creative energy that move our industry forward.",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "The conversation continues",
    description:
      "Rooted in our language and culture, open to every new story waiting to be told.",
    icon: MessageCircle,
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />

      <main>
        <HeroSection />
        <WhoShouldAttend />
        <IndustryHighlights />
        <AboutMarathiNEX />
        <WhoShouldJoin />
        <FilmFormats />
        <NextProjectSection />
        <MarathiNEXEventSection />

        <section
          aria-labelledby="community-title"
          className="border-y border-brand-ink/5 bg-white"
          id="community"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_0.72fr] md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  A shared screen
                </p>
                <h2
                  className="font-heading max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.015em] text-brand-ink sm:text-4xl"
                  id="community-title"
                >
                  Marathi cinema is more than what we see on screen.
                </h2>
              </div>
              <p
                className="max-w-md text-sm leading-6 text-muted-foreground md:justify-self-end"
                id="about"
              >
                It is the talent, teamwork, and culture behind every story.
                MarathiNEX begins with a simple idea: bring that creative
                community into focus.
              </p>
            </div>

            <div
              className="grid gap-3 md:grid-cols-3"
              id="crafts"
              role="list"
            >
              {focusAreas.map(({ number, title, description, icon: Icon }) => (
                <article
                  className="rounded-2xl border border-brand-ink/10 bg-brand-canvas/65 p-6 sm:p-7"
                  key={number}
                  role="listitem"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white text-brand-red shadow-sm">
                      <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                    </span>
                    <span className="text-xs font-medium tracking-[0.12em] text-muted-foreground/65">
                      {number}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-normal text-brand-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-brand-ink/10 pt-6">
              <p className="text-sm text-muted-foreground">
                A new chapter for Marathi cinema starts with its people.
              </p>
              <Link
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-ink transition-colors hover:text-brand-red"
                href="/auth/login"
              >
                Studio sign in
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
        </section>

        <FAQSection />
        <FinalRegistrationCTA />
      </main>

      <SiteFooter />
    </div>
  );
}
