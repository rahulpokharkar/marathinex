import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

type IndustryHighlight = {
  title: string;
  artwork: CSSProperties;
  scene: string;
};

export function IndustryHighlightCard({
  title,
  artwork,
  scene,
}: IndustryHighlight) {
  return (
    <article
      aria-label={title}
      className="group relative isolate aspect-[2.6/1] min-h-[7.5rem] overflow-hidden rounded-[0.7rem] bg-[#111] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-100 transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-110 motion-reduce:transition-none"
        style={artwork}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
        <h2 className="font-heading text-[1.375rem] font-semibold leading-none tracking-normal sm:text-2xl">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="flex size-[2.125rem] shrink-0 items-center justify-center rounded-full bg-[#DC1023] text-white shadow-[0_3px_12px_rgba(0,0,0,0.28)]"
        >
          <ArrowRight size={18} strokeWidth={2.2} />
        </span>
      </div>
      <span className="sr-only">{scene}</span>
    </article>
  );
}
