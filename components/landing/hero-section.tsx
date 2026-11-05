"use client";

import {
  ArrowRight,
  Building2,
  CalendarDays,
  CircleDollarSign,
  Clapperboard,
  ClipboardList,
  MapPin,
  Play,
  Presentation,
  UserRoundSearch,
  UsersRound,
} from "lucide-react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SignatureHeadline } from "@/components/landing/signature-headline";
import heroDesktop from "../../public/images/Hero_desktop.png";
import heroMobile from "../../public/images/Hero_mobile.png";
import heroTablet from "../../public/images/Hero_tab.png";

const eventFeatures = [
  { label: "Network", icon: UsersRound },
  { label: "Pitch Projects", icon: Presentation },
  { label: "Find Talent", icon: UserRoundSearch },
  { label: "Raise Finance", icon: CircleDollarSign },
  { label: "Explore Distribution", icon: Clapperboard },
];

const eventDetails = [
  { label: "Dates To Be Announced", icon: CalendarDays },
  { label: "Mumbai, India", icon: MapPin },
  { label: "Industry Market", icon: Building2 },
  { label: "Registration Interest Open", icon: ClipboardList },
];

const mobileHeroImage = getImageProps({
  alt: "",
  src: heroMobile,
  sizes: "100vw",
}).props;
const tabletHeroImage = getImageProps({
  alt: "",
  src: heroTablet,
  sizes: "100vw",
}).props;

function EventInformation() {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_14px_48px_rgba(0,0,0,0.12)] sm:grid-cols-4">
      {eventDetails.map(({ label, icon: Icon }, index) => (
        <div
          className={`flex min-h-[86px] items-center gap-2.5 px-3 py-3 sm:min-h-[98px] sm:justify-center sm:px-2 ${
            index % 2 === 1 ? "border-l border-black/8" : ""
          } ${
            index > 1 ? "border-t border-black/8 sm:border-t-0" : ""
          } ${
            index > 0 ? "sm:border-l sm:border-black/8" : ""
          }`}
          key={label}
        >
          <Icon
            aria-hidden="true"
            className="shrink-0 text-brand-red"
            size={18}
            strokeWidth={1.8}
          />
          <span className="text-[0.68rem] font-semibold leading-[1.25] text-[#16191E] sm:text-[0.72rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  const [announcement, setAnnouncement] = useState("");

  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden bg-white"
    >
      <div       className="mx-auto grid max-w-[1800px] xl:grid-cols-[52%_48%]">
        <div className="flex items-center px-5 py-12 sm:px-8 sm:py-16 xl:py-12 2xl:px-[3.25rem]">
          <div className="[container-type:inline-size] mx-auto w-full max-w-[900px]">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand-red sm:text-sm sm:tracking-[0.2em]">
              MarathiNEX FILM 2027
            </p>
            <span
              aria-hidden="true"
              className="mt-3 block h-[3px] w-12 bg-brand-red"
            />
            <SignatureHeadline
              closing="Networking Event"
              emphasis="Marathi Film"
              id="hero-title"
              lead="The Biggest"
            />
            <p className="mt-5 max-w-[39rem] text-sm leading-6 text-[#4f5155] sm:mt-6 sm:text-base sm:leading-7">
              The global industry platform to connect creators, producers,
              financiers, talent and partners for Marathi cinema and beyond.
            </p>

            <ul
              aria-label="Event opportunities"
              className="mt-7 grid grid-cols-2 gap-y-4 sm:grid-cols-3 xl:grid-cols-5"
            >
              {eventFeatures.map(({ label, icon: Icon }, index) => (
                <li
                  className={`flex min-h-12 items-center gap-2.5 ${
                    index > 0
                      ? "sm:border-l sm:border-black/15 sm:pl-3 xl:pl-2 2xl:pl-3"
                      : ""
                  }`}
                  key={label}
                >
                  <Icon
                    aria-hidden="true"
                    className="shrink-0 text-brand-red"
                    size={19}
                    strokeWidth={1.8}
                  />
                  <span className="text-[0.7rem] font-semibold leading-tight text-[#16191E] sm:text-[0.68rem] 2xl:text-xs">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#DC1023] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#B80D1D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2 motion-reduce:transition-none"
                href="/film/event#event-interest"
              >
                Register Your Interest
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2.2} />
              </Link>
              <button
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#16191E]/35 bg-white px-5 text-sm font-semibold text-[#16191E] transition-colors hover:bg-brand-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2 motion-reduce:transition-none"
                onClick={() =>
                  setAnnouncement(
                    "Event preview coming soon. No video is available yet.",
                  )
                }
                type="button"
              >
                <Play aria-hidden="true" fill="currentColor" size={15} />
                Watch Event Preview
                <span className="sr-only">, coming soon</span>
              </button>
            </div>
            <p aria-live="polite" className="sr-only" role="status">
              {announcement}
            </p>
          </div>
        </div>

        <figure
          className="relative isolate min-h-[520px] overflow-hidden bg-white sm:min-h-[500px] xl:min-h-[590px]"
        >
          <picture className="absolute inset-0">
            <source
              media="(max-width: 767px)"
              sizes={mobileHeroImage.sizes}
              srcSet={mobileHeroImage.srcSet}
            />
            <source
              media="(max-width: 1199px)"
              sizes={tabletHeroImage.sizes}
              srcSet={tabletHeroImage.srcSet}
            />
            <Image
              alt="MarathiNEX FILM studio scene with a vintage cinema camera, film lighting, and red cinema seats"
              className="size-full object-cover object-right"
              fill
              priority
              sizes="(max-width: 1199px) 100vw, 48vw"
              src={heroDesktop}
            />
          </picture>

          <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-6 sm:bottom-6 xl:inset-x-8">
            <EventInformation />
          </div>
        </figure>
      </div>
    </section>
  );
}
