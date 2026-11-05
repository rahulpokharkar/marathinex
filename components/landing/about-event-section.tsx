import { Clapperboard, Handshake, UsersRound } from "lucide-react";

const objectives = [
  {
    number: "01",
    title: "Connect",
    description:
      "Meet professionals across filmmaking, production, talent and distribution.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Explore emerging projects, new voices and creative opportunities.",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "Start conversations that may develop into future professional partnerships.",
    icon: Handshake,
  },
];

export function AboutEventSection() {
  return (
    <section
      aria-labelledby="about-event-title"
      className="bg-white text-[#16191E]"
      id="about-event"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DC1023] sm:text-sm">
          01 / About the event
        </p>

        <div className="mt-7 grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-10 lg:mt-9 lg:gap-14">
          <h2
            className="font-heading text-[clamp(2.4rem,5.2vw,4.5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.025em] text-[#16191E]"
            id="about-event-title"
          >
            <span className="block">A new meeting point for</span>
            <span className="my-1 block text-[clamp(3.2rem,7.4vw,6.25rem)] leading-[0.88] text-[#DC1023]">
              Marathi Film
            </span>
            <span className="block">and entertainment.</span>
          </h2>

          <div className="max-w-xl pb-1 md:justify-self-end">
            <p className="text-base leading-7 text-[#565F6C] sm:text-lg sm:leading-8">
              MarathiNEX FILM is developing an industry gathering designed to
              bring creators, producers, talent, financiers, distributors and
              entertainment businesses into one professional environment.
            </p>
            <p className="mt-4 text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
              Beyond the event, MarathiNEX FILM is being developed as a
              year-round professional network where members can build profiles,
              discover projects and explore potential collaborations.
            </p>
          </div>
        </div>

        <ul
          aria-label="MarathiNEX FILM event objectives"
          className="mt-10 grid grid-cols-1 border-y border-[#E5E5E5] sm:grid-cols-3 lg:mt-14"
        >
          {objectives.map(({ number, title, description, icon: Icon }) => (
            <li
              className="border-b border-[#E5E5E5] py-6 last:border-b-0 sm:border-b-0 sm:px-5 sm:py-7 sm:first:pl-0 sm:last:pr-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-[#E5E5E5] lg:px-8 lg:py-8"
              key={number}
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-xs font-medium tracking-[0.14em] text-[#DC1023]">
                  {number}
                </span>
                <Icon
                  aria-hidden="true"
                  className="text-[#DC1023]"
                  size={25}
                  strokeWidth={1.6}
                />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold uppercase leading-none tracking-[0.02em] text-[#16191E] sm:text-3xl">
                {title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
