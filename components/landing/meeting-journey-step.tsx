import type { LucideIcon } from "lucide-react";

type MeetingJourneyStepProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function MeetingJourneyStep({
  number,
  title,
  description,
  icon: Icon,
}: MeetingJourneyStepProps) {
  return (
    <li className="h-full">
      <article className="flex h-full min-h-[13.5rem] flex-col border border-white/10 bg-[#252830] p-5 sm:min-h-[14rem] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-medium tracking-[0.14em] text-[#FF7A84]">
            {number}
          </span>
          <Icon
            aria-hidden="true"
            className="shrink-0 text-white/85"
            size={24}
            strokeWidth={1.5}
          />
        </div>
        <div className="mt-auto pt-7">
          <h3 className="font-heading text-xl font-semibold uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            {description}
          </p>
        </div>
      </article>
    </li>
  );
}
