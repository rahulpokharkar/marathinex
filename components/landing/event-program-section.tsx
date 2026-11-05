import { EventProgramCard } from "@/components/landing/event-program-card";

const programExperiences = [
  {
    number: "01",
    title: "Industry Sessions",
    description:
      "Conversations and insights from filmmaking and entertainment professionals.",
    illustration: "sessions" as const,
  },
  {
    number: "02",
    title: "Project Market",
    description:
      "A platform for exploring feature film, short film, documentary and series projects.",
    image: {
      src: "/images/next-project-screenplay.png",
      alt: "Illustrative screenplay notebook with film storyboards, a clapperboard and camera lens",
    },
  },
  {
    number: "03",
    title: "Curated Meetings",
    description:
      "Structured opportunities for relevant professional introductions.",
    illustration: "meetings" as const,
  },
  {
    number: "04",
    title: "Talent Showcase",
    description:
      "A spotlight on actors, filmmakers and creative professionals.",
    illustration: "showcase" as const,
  },
  {
    number: "05",
    title: "Industry Desks",
    description:
      "Explore potential connections across production, distribution, content acquisition and industry services.",
    illustration: "desks" as const,
  },
  {
    number: "06",
    title: "Networking Experiences",
    description:
      "An environment for professional conversations and new connections.",
    image: {
      src: "/images/marathinex-event-concept.png",
      alt: "Illustrative concept of film-industry professionals networking at an elegant event",
    },
  },
];

export function EventProgramSection() {
  return (
    <section
      aria-labelledby="event-program-title"
      className="bg-[#F5F6F8] text-[#16191E]"
      id="program"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DC1023] sm:text-sm">
          02 / The event experience
        </p>

        <h2
          className="mt-5 max-w-5xl font-heading text-[clamp(2.4rem,5.2vw,4.5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.025em] text-[#16191E]"
          id="event-program-title"
        >
          <span className="block">Explore the</span>
          <span className="block text-[clamp(3.2rem,7.4vw,6.25rem)] leading-[0.88] text-[#DC1023]">
            Marathi Film
          </span>
          <span className="block">industry program</span>
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
          A proposed program designed around meaningful industry conversations,
          project discovery, professional introductions and creative talent.
        </p>

        <ul
          aria-label="Proposed MarathiNEX FILM event program experiences"
          className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:mt-12 xl:grid-cols-3 xl:gap-6"
        >
          {programExperiences.map((experience) => (
            <li className="h-full" key={experience.number}>
              <EventProgramCard {...experience} />
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs leading-5 text-[#565F6C]">
          Program experiences are proposed and may be refined as event planning
          progresses. No sessions, participants or schedules are confirmed.
        </p>
      </div>
    </section>
  );
}
