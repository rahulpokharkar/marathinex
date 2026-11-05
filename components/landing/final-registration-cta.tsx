import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignatureHeadline } from "@/components/landing/signature-headline";

export function FinalRegistrationCTA() {
  return (
    <section
      aria-labelledby="final-registration-title"
      className="bg-[#16191E] text-white"
      id="final-registration"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28 2xl:px-[3.25rem]">
        <div className="[container-type:inline-size] max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.19em] text-[#FF7A84] sm:text-sm">
            Be part of what&apos;s next
          </p>
          <SignatureHeadline
            closing="Starts here."
            emphasis="Connection"
            headingLevel="h2"
            id="final-registration-title"
            lead="Your next"
            variant="editorial"
          />
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Review the MarathiNEX FILM 2027 interest form. Submissions are not
            yet available and this is separate from membership or ticketing.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex min-h-12 items-center gap-2 bg-[#DC1023] px-5 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#B80D1D] focus-visible:ring-2 focus-visible:ring-[#FF7A84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16191E] motion-reduce:transition-none"
              href="/film/event#event-interest"
            >
              Register your interest
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#FF7A84]">
              Preview only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
