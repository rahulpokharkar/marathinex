import {
  CalendarCheck2,
  ClipboardList,
  Search,
  UserRoundPlus,
} from "lucide-react";
import { MeetingJourneyStep } from "@/components/landing/meeting-journey-step";
import { SignatureHeadline } from "@/components/landing/signature-headline";

const meetingJourney = [
  {
    number: "01",
    title: "Create your profile",
    description: "Present your professional background and interests.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Discover matches",
    description: "Explore relevant industry participants and opportunities.",
    icon: Search,
  },
  {
    number: "03",
    title: "Request a meeting",
    description: "Submit a meeting request when applications open.",
    icon: UserRoundPlus,
  },
  {
    number: "04",
    title: "Connect in person",
    description: "Meet if the request is accepted and a slot is confirmed.",
    icon: CalendarCheck2,
  },
];

function MeetingVisual() {
  return (
    <figure className="relative flex aspect-video w-full items-center justify-center overflow-hidden border border-white/10 bg-[#202329]">
      <div
        aria-label="Illustrative graphic of professionals meeting in a conference setting"
        className="relative h-full w-full overflow-hidden"
        role="img"
      >
        <div className="absolute inset-x-0 top-0 h-[58%] bg-[#292C33]" />
        <div className="absolute inset-x-[12%] top-[10%] h-[2px] bg-[#FF7A84]/75" />
        <div className="absolute left-[22%] top-[18%] h-[32%] w-[56%] border border-white/15 bg-[#16191E]">
          <span className="absolute inset-x-[20%] top-[28%] h-px bg-white/25" />
          <span className="absolute inset-x-[29%] top-[43%] h-px bg-white/20" />
          <span className="absolute inset-x-[36%] top-[58%] h-px bg-[#FF7A84]/70" />
        </div>
        <div className="absolute inset-x-[12%] bottom-[23%] flex items-end justify-center gap-[5%]">
          <div className="relative h-[32%] w-[21%]">
            <span className="absolute left-1/2 top-0 size-[34%] -translate-x-1/2 rounded-full border border-white/25 bg-[#3A3D44]" />
            <span className="absolute inset-x-0 bottom-0 top-[35%] rounded-t-[45%] border border-white/15 bg-[#30333A]" />
          </div>
          <div className="relative h-[39%] w-[21%]">
            <span className="absolute left-1/2 top-0 size-[31%] -translate-x-1/2 rounded-full border border-[#FF7A84]/50 bg-[#44474F]" />
            <span className="absolute inset-x-0 bottom-0 top-[33%] rounded-t-[45%] border border-[#FF7A84]/25 bg-[#353840]" />
          </div>
          <div className="relative h-[32%] w-[21%]">
            <span className="absolute left-1/2 top-0 size-[34%] -translate-x-1/2 rounded-full border border-white/25 bg-[#3A3D44]" />
            <span className="absolute inset-x-0 bottom-0 top-[35%] rounded-t-[45%] border border-white/15 bg-[#30333A]" />
          </div>
        </div>
        <div className="absolute inset-x-[10%] bottom-[15%] h-[12%] border border-white/20 bg-[#16191E]" />
        <span className="absolute bottom-[13%] left-[12%] h-[10%] w-[16%] border border-white/15 bg-[#252830]" />
        <span className="absolute bottom-[13%] right-[12%] h-[10%] w-[16%] border border-white/15 bg-[#252830]" />
        <span className="absolute bottom-0 left-0 right-0 h-[10%] bg-[#111216]" />
      </div>
      <figcaption className="absolute inset-x-3 bottom-2 text-right text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/65 sm:inset-x-5 sm:bottom-3 sm:text-xs">
        Illustrative meeting concept
      </figcaption>
    </figure>
  );
}

export function CuratedMeetingsSection() {
  return (
    <section
      aria-labelledby="curated-meetings-title"
      className="bg-[#15171B] text-white"
      id="curated-meetings"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex flex-col items-start justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#FF7A84] sm:text-sm">
              05 / Curated meetings
            </p>
            <div className="[container-type:inline-size] w-full max-w-[46rem]">
              <SignatureHeadline
                closing="The next opportunity."
                emphasis="Connection."
                headingLevel="h2"
                id="curated-meetings-title"
                lead="The right"
                variant="editorial"
              />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              Meaningful industry conversations begin with shared interests.
              Explore a proposed meeting experience designed to connect
              professionals with relevant industry participants.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                aria-disabled="true"
                className="inline-flex min-h-12 cursor-not-allowed items-center gap-2 bg-[#DC1023] px-5 text-sm font-semibold text-white"
                disabled
                type="button"
              >
                Explore meeting opportunities
                <span aria-hidden="true">→</span>
              </button>
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#FF7A84]">
                Coming soon
              </span>
            </div>
          </div>

          <MeetingVisual />
        </div>

        <ol
          aria-label="Proposed curated meeting journey"
          className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:mt-12 xl:grid-cols-4"
        >
          {meetingJourney.map((step) => (
            <MeetingJourneyStep key={step.number} {...step} />
          ))}
        </ol>

        <p className="mt-5 max-w-4xl text-xs leading-5 text-white/70">
          Meeting requests and scheduling will be available only after the event
          program and participating desks are confirmed. A request, acceptance
          and confirmed booking are separate steps.
        </p>
      </div>
    </section>
  );
}
