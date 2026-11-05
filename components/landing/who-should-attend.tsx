import {
  Clapperboard,
  ClipboardList,
  Coins,
  Drama,
  MonitorPlay,
  Pencil,
  UsersRound,
  Video,
} from "lucide-react";

const attendeeCategories = [
  { label: "Producers & Studios", icon: Clapperboard },
  { label: "Writers & Directors", icon: Pencil },
  { label: "Financiers & Investors", icon: Coins },
  { label: "Actors & Talent", icon: UsersRound },
  { label: "Casting Directors", icon: ClipboardList },
  { label: "Cinematographers & Crew", icon: Video },
  { label: "Distributors & OTT Platforms", icon: MonitorPlay },
  { label: "Theatre & Plays", icon: Drama },
];

export function WhoShouldAttend() {
  return (
    <section
      aria-labelledby="attend-title"
      className="border-y border-[#E5E5E5] bg-white"
      id="attend"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-8 sm:px-8 sm:py-10 xl:py-7 2xl:px-[3.25rem]">
        <div className="grid gap-6 xl:grid-cols-[1.25fr_repeat(8,minmax(0,1fr))] xl:items-center xl:gap-0">
          <h2
            className="font-heading text-2xl font-semibold uppercase leading-[0.95] tracking-[0.015em] text-brand-red sm:text-3xl xl:pr-5"
            id="attend-title"
          >
            <span className="block">Who should</span>
            <span className="block">attend</span>
          </h2>

          <ul
            aria-label="Professionals welcome at MarathiNEX FILM"
            className="col-span-full grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-8 xl:col-span-8 xl:grid-cols-8 xl:gap-y-0"
          >
            {attendeeCategories.map(({ label, icon: Icon }) => (
              <li
                aria-label={`${label}; directory coming soon`}
                className="group flex min-h-20 flex-col items-center justify-center gap-2 px-2 text-center text-brand-ink transition-colors duration-150 hover:text-brand-red sm:min-h-24 xl:min-h-16 xl:border-l xl:border-[#E5E5E5]"
                key={label}
              >
                <Icon
                  aria-hidden="true"
                  className="shrink-0 transition-colors duration-150 group-hover:text-brand-red"
                  size={30}
                  strokeWidth={1.6}
                />
                <span className="text-[0.82rem] font-semibold leading-[1.15] sm:text-sm">
                  {label}
                </span>
                <span className="sr-only">Directory coming soon</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
