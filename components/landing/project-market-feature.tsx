import type { LucideIcon } from "lucide-react";

type ProjectMarketFeatureProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProjectMarketFeature({
  number,
  title,
  description,
  icon: Icon,
}: ProjectMarketFeatureProps) {
  return (
    <li className="h-full">
      <article className="flex h-full min-h-[12rem] flex-col border border-[#E5E5E5] bg-white p-5 sm:min-h-[13rem] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-medium tracking-[0.14em] text-[#DC1023]">
            {number}
          </span>
          <Icon
            aria-hidden="true"
            className="shrink-0 text-[#DC1023]"
            size={24}
            strokeWidth={1.6}
          />
        </div>
        <div className="mt-auto pt-7">
          <h3 className="font-heading text-xl font-semibold uppercase leading-[1.05] tracking-[0.02em] text-[#16191E] sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
            {description}
          </p>
        </div>
      </article>
    </li>
  );
}
