import type { LucideIcon } from "lucide-react";

type ProfessionalUseCaseCardProps = {
  category: string;
  headline: string;
  description: string;
  icon: LucideIcon;
};

export function ProfessionalUseCaseCard({
  category,
  headline,
  description,
  icon: Icon,
}: ProfessionalUseCaseCardProps) {
  return (
    <article className="h-full border border-[#E5E7EB] bg-white p-5 transition-colors duration-150 hover:border-[#DC1023] motion-reduce:transition-none sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#DC1023]">
          {category}
        </p>
        <Icon
          aria-hidden="true"
          className="shrink-0 text-[#16191E]"
          size={25}
          strokeWidth={1.6}
        />
      </div>
      <h3 className="mt-8 font-heading text-xl font-semibold uppercase leading-tight tracking-[0.02em] text-[#16191E] sm:text-2xl">
        {headline}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
        {description}
      </p>
    </article>
  );
}
