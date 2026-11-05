import type { LucideIcon } from "lucide-react";

type IndustryDeskCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function IndustryDeskCard({
  number,
  title,
  description,
  icon: Icon,
}: IndustryDeskCardProps) {
  return (
    <article className="group flex min-h-[14rem] h-full flex-col border border-[#E5E5E5] bg-white p-5 transition-colors duration-150 hover:border-[#DC1023]/60 motion-reduce:transition-none sm:min-h-[14.5rem] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-medium tracking-[0.14em] text-[#DC1023]">
          {number}
        </span>
        <Icon
          aria-hidden="true"
          className="shrink-0 text-[#16191E]"
          size={25}
          strokeWidth={1.5}
        />
      </div>
      <div className="mt-auto pt-8">
        <h3 className="font-heading text-2xl font-semibold uppercase leading-[1.02] tracking-[0.015em] text-[#16191E] sm:text-[1.7rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </article>
  );
}
