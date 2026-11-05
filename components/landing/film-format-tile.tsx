import type { LucideIcon } from "lucide-react";

type FilmFormatTileProps = {
  number: string;
  title: string;
  icon: LucideIcon;
};

export function FilmFormatTile({
  number,
  title,
  icon: Icon,
}: FilmFormatTileProps) {
  return (
    <li className="h-full">
      <article className="group flex min-h-[10rem] h-full flex-col justify-between border border-white/10 bg-[#262A30] p-4 transition-colors hover:border-[#FF6572]/70 focus-within:border-[#FF6572]/70 motion-reduce:transition-none sm:min-h-[10.5rem] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="font-heading text-xs font-semibold tracking-[0.12em] text-[#FF6572]">
            {number}
          </span>
          <Icon
            aria-hidden="true"
            className="shrink-0 text-[#FF6572] transition-colors group-hover:text-white motion-reduce:transition-none"
            size={24}
            strokeWidth={1.6}
          />
        </div>
        <h3 className="font-hero text-base font-semibold leading-[1.05] tracking-normal text-white sm:text-lg">
          {title}
        </h3>
      </article>
    </li>
  );
}
