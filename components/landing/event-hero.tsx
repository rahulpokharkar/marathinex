import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignatureHeadline } from "@/components/landing/signature-headline";

export function EventHero() {
  return (
    <section
      aria-labelledby="event-page-title"
      className="overflow-hidden bg-[#111216] text-white"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-12 sm:px-8 sm:py-16 lg:px-0 lg:py-0 2xl:px-[3.25rem]">
        <div className="grid gap-8 lg:min-h-[min(760px,calc(100vh-88px))] lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col justify-center lg:px-8 lg:py-16 xl:px-14 2xl:px-16">
            <p className="text-xs font-medium uppercase tracking-[0.19em] text-[#FF7A84] sm:text-sm">
              The industry comes together
            </p>
            <div className="[container-type:inline-size] w-full max-w-[44rem]">
              <SignatureHeadline
                closing="Meets opportunity."
                emphasis="Marathi Film"
                headingLevel="h1"
                id="event-page-title"
                lead="Where"
                variant="editorial"
              />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              An industry gathering bringing together filmmakers, talent,
              production companies and professionals to connect, discover and
              collaborate.
            </p>

            <dl className="mt-7 grid max-w-xl grid-cols-1 divide-y divide-white/15 border-y border-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="flex items-start gap-3 py-4 sm:pr-5">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#FF7A84]"
                  size={19}
                  strokeWidth={1.7}
                />
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/55">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white sm:text-base">
                    Mumbai, India{" "}
                    <span className="font-normal text-white/65">(planned)</span>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 py-4 sm:pl-5">
                <CalendarDays
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#FF7A84]"
                  size={19}
                  strokeWidth={1.7}
                />
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/55">
                    Dates
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white sm:text-base">
                    To be announced
                  </dd>
                </div>
              </div>
            </dl>
            <p className="mt-3 text-xs leading-5 text-white/70">
              Review the interest form below. Submissions are not yet available;
              attendance and ticketing are not confirmed.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  className="inline-flex min-h-12 items-center gap-2 bg-[#DC1023] px-5 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#B80D1D] focus-visible:ring-2 focus-visible:ring-[#FF7A84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111216] motion-reduce:transition-none"
                  href="#event-interest"
                >
                  Register your interest
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#FF7A84]">
                  Preview only
                </span>
              </div>
              <Link
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/75 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#FF7A84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111216] motion-reduce:transition-none"
                href="#program"
              >
                Explore program
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden border border-white/10 bg-[#1B1D23] sm:min-h-[28rem] lg:min-h-[min(760px,calc(100vh-88px))] lg:border-y-0 lg:border-r-0">
            <Image
              alt="Illustrative concept of Indian film-industry professionals networking at a cinema event; not a past MarathiNEX event"
              className="absolute inset-0 size-full object-cover object-center"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              src="/images/marathinex-event-concept.png"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-3 bg-[#DC1023] [clip-path:polygon(0_0,100%_0,100%_25%,0_100%)] lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-8 lg:[clip-path:polygon(45%_0,100%_0,55%_100%,0_100%)]"
            />
            <p className="absolute inset-x-3 bottom-3 z-10 text-right text-[0.65rem] leading-5 text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)] sm:inset-x-5 sm:bottom-4 sm:text-xs">
              Illustrative event concept — not a past MarathiNEX event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
