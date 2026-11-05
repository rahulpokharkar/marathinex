import { ArrowRight, CalendarDays, Clapperboard, Network } from "lucide-react";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Connect",
    description:
      "Build professional relationships across the Marathi entertainment industry.",
    icon: Network,
  },
  {
    number: "02",
    title: "Collaborate",
    description:
      "Discover relevant projects, creative talent and potential industry partners.",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Meet",
    description:
      "Express interest in upcoming industry events and networking opportunities.",
    icon: CalendarDays,
  },
];

export function AboutMarathiNEX() {
  return (
    <section
      aria-labelledby="about-marathinex-title"
      className="bg-white"
      id="about-marathinex"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28 2xl:px-[3.25rem]">
        <p className="eyebrow-label text-xs sm:text-sm">
          01 / About MarathiNEX FILM
        </p>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-16">
          <div>
            <h2
              className="section-headline max-w-[12ch]"
              id="about-marathinex-title"
            >
              <span className="block">More than</span>
              <span className="block">an event.</span>
              <span className="block">A year-round</span>
              <span className="block">industry network.</span>
            </h2>
            <span
              aria-hidden="true"
              className="mt-6 block h-1 w-14 bg-[#DC1023]"
            />
          </div>

          <div className="max-w-[35rem] self-center md:justify-self-end">
            <p className="text-base leading-7 text-[#34373C] sm:text-lg sm:leading-8">
              MarathiNEX FILM brings together the people who create, finance,
              produce, distribute and showcase Marathi entertainment.
            </p>
            <p className="mt-5 text-base leading-7 text-[#5C6067] sm:text-lg sm:leading-8">
              A professional platform for meaningful connections, project
              discovery and collaboration — supported by a planned annual
              industry gathering.
            </p>
            <Link
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#DC1023] underline decoration-transparent underline-offset-4 transition-[text-decoration-color] hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-4 motion-reduce:transition-none"
              href="#attend"
            >
              Explore the Network
              <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-12 border-t border-[#D9DADD] sm:mt-16"
        />

        <ol className="mt-7 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-12">
          {values.map(({ number, title, description, icon: Icon }) => (
            <li className="max-w-sm" key={number}>
              <div className="flex items-center gap-3">
                <Icon
                  aria-hidden="true"
                  className="shrink-0 text-[#DC1023]"
                  size={25}
                  strokeWidth={1.6}
                />
                <span className="text-xs font-medium tracking-[0.12em] text-[#DC1023]">
                  {number}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold capitalize leading-tight tracking-normal text-[#16191E] sm:text-2xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5C6067] sm:text-base sm:leading-7">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
