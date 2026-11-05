import type { LucideIcon } from "lucide-react";

type ProfessionalRoleCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProfessionalRoleCard({
  number,
  title,
  description,
  icon: Icon,
}: ProfessionalRoleCardProps) {
  return (
    <article className="group h-full border border-[#E5E5E5] bg-white p-5 transition-colors duration-150 hover:border-[#DC1023] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-medium tracking-[0.12em] text-[#DC1023]">
          {number}
        </span>
        <Icon
          aria-hidden="true"
          className="shrink-0 text-[#16191E]"
          size={26}
          strokeWidth={1.6}
        />
      </div>
      <h3 className="mt-7 font-heading text-xl font-semibold uppercase leading-tight tracking-[0.02em] text-[#16191E] transition-colors duration-150 group-hover:text-[#DC1023] sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#4F5359] sm:text-base sm:leading-7">
        {description}
      </p>
    </article>
  );
}
