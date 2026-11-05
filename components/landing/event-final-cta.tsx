"use client";

import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SignatureHeadline } from "@/components/landing/signature-headline";

function scrollToInterest(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const interestSection = document.getElementById("event-interest");
  if (!interestSection) {
    return;
  }

  event.preventDefault();
  window.history.pushState(null, "", "#event-interest");
  interestSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function EventFinalCTA() {
  return (
    <section
      aria-labelledby="event-final-cta-title"
      className="bg-[#16191E] text-white"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <div className="[container-type:inline-size] mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.19em] text-[#FF7A84] sm:text-sm">
            Be part of the conversation
          </p>
          <SignatureHeadline
            closing="Starts with connections."
            emphasis="Marathi Film"
            headingLevel="h2"
            id="event-final-cta-title"
            inverse
            lead="The future of"
            variant="editorial"
          />
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Express your interest in MarathiNEX FILM 2027 and stay informed as
            event plans and participation opportunities develop.
          </p>
          <div className="mt-7">
            <a
              className="inline-flex min-h-12 items-center gap-2 bg-[#DC1023] px-5 text-sm font-semibold uppercase text-white outline-none transition-colors hover:bg-[#B80D1D] focus-visible:ring-2 focus-visible:ring-[#FF7A84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16191E] motion-reduce:transition-none"
              href="#event-interest"
              onClick={scrollToInterest}
            >
              Register your interest
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-white/65 sm:text-sm">
            Expression of interest does not confirm attendance or reserve a
            ticket.
          </p>
        </div>
      </div>
    </section>
  );
}
