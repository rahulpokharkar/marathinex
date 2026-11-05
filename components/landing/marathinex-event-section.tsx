import {
  ArrowRight,
  CalendarDays,
  Clapperboard,
  Handshake,
  MapPin,
  MessagesSquare,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignatureHeadline } from "@/components/landing/signature-headline";

const eventActivities = [
  {
    title: "Industry conversations",
    description:
      "Discussions and insights across filmmaking, production and distribution.",
    icon: MessagesSquare,
  },
  {
    title: "Professional meetings",
    description:
      "Planned opportunities for relevant industry introductions and conversations.",
    icon: Handshake,
  },
  {
    title: "Project discovery",
    description:
      "A proposed platform for emerging and established film projects.",
    icon: Clapperboard,
  },
  {
    title: "Talent connections",
    description:
      "Opportunities for professionals to discover collaborators and showcase expertise.",
    icon: UsersRound,
  },
];

function EventConceptImage() {
  return (
    <div>
      <figure className="relative min-h-[21rem] overflow-hidden border border-white/10 bg-[#1B1D23] sm:min-h-[25rem] lg:min-h-[35rem]">
        <Image
          alt="Illustrative concept of film-industry professionals gathering in an auditorium with a cinema stage; not a past MarathiNEX event"
          className="absolute inset-0 size-full object-cover"
          fill
          sizes="(max-width: 1023px) 100vw, 45vw"
          src="/images/marathinex-event-concept.png"
        />
      </figure>
      <p className="mt-2 text-xs leading-5 text-white/60">
        Illustrative event concept — not a past MarathiNEX event.
      </p>
    </div>
  );
}

export function MarathiNEXEventSection() {
  return (
    <section
      aria-labelledby="marathinex-event-title"
      className="bg-[#111216] text-white"
      id="marathinex-film-2027"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28 2xl:px-[3.25rem]">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-start">
            <p className="text-xs font-medium uppercase tracking-[0.19em] text-[#FF7A84] sm:text-sm">
              The industry comes together
            </p>
            <div className="[container-type:inline-size] w-full max-w-[52rem]">
              <SignatureHeadline
                closing="Where connections begin."
                emphasis="Film 2027"
                headingLevel="h2"
                id="marathinex-event-title"
                lead="MarathiNEX"
                variant="editorial"
              />
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              A planned industry gathering designed to bring Marathi cinema
              professionals together for conversations, collaboration and new
              project opportunities.
            </p>

            <dl
              className="mt-8 grid w-full max-w-2xl grid-cols-1 divide-y divide-white/15 border-y border-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0"
              id="event-details"
            >
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

            <p className="mt-4 text-xs leading-5 text-white/70">
              <span className="font-medium uppercase tracking-[0.1em] text-white/85">
                Status:
              </span>{" "}
              Event planning.               The interest form is available to preview; submissions are not
              open. No attendance or ticket is confirmed.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  className="inline-flex min-h-12 items-center gap-2 bg-[#DC1023] px-5 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#B80D1D] focus-visible:ring-2 focus-visible:ring-[#FF7A84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111216] motion-reduce:transition-none"
                  href="/film/event#event-interest"
                >
                  Register your interest
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FF7A84]">
                  Preview only
                </span>
              </div>
              <Link
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111216] motion-reduce:transition-none"
                href="#event-details"
              >
                Explore event details
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>

          <EventConceptImage />
        </div>

        <ul
          aria-label="Planned MarathiNEX FILM event activities"
          className="mt-12 grid grid-cols-1 divide-y divide-white/15 border-y border-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:mt-16 xl:grid-cols-4"
        >
          {eventActivities.map(({ title, description, icon: Icon }) => (
            <li className="py-5 sm:px-5 sm:py-6 first:sm:pl-0 last:sm:pr-0" key={title}>
              <Icon
                aria-hidden="true"
                className="text-[#FF7A84]"
                size={23}
                strokeWidth={1.5}
              />
              <h3 className="mt-4 font-heading text-lg font-semibold uppercase leading-tight tracking-[0.02em] text-white sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
