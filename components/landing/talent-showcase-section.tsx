import {
  Clapperboard,
  Drama,
  PenTool,
  Video,
} from "lucide-react";
import { TalentCategoryCard } from "@/components/landing/talent-category-card";
import { SignatureHeadline } from "@/components/landing/signature-headline";

const talentCategories = [
  {
    number: "01",
    title: "Actors & Performers",
    description: "Showreels, screen presence and professional portfolios.",
    icon: Drama,
  },
  {
    number: "02",
    title: "Directors & Filmmakers",
    description: "Creative vision, filmography and completed work.",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Writers & Storytellers",
    description: "Original voices, story concepts and writing credits.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Creative & Technical Talent",
    description:
      "Cinematography, editing, sound, VFX and other filmmaking crafts.",
    icon: Video,
  },
];

function ShowcaseVisual() {
  return (
    <figure className="relative aspect-video w-full overflow-hidden border border-[#E5E5E5] bg-[#17191F]">
      <div
        aria-label="Illustrative cinematic stage with a performance spotlight"
        className="absolute inset-0 overflow-hidden"
        role="img"
      >
        <div className="absolute inset-x-0 top-0 h-[68%] bg-[#20232A]" />
        <div
          aria-hidden="true"
          className="absolute inset-x-[26%] top-0 h-[83%] bg-[#DC1023]/20"
          style={{ clipPath: "polygon(43% 0, 57% 0, 100% 100%, 0 100%)" }}
        />
        <div className="absolute left-1/2 top-[12%] size-[10%] -translate-x-1/2 rounded-full border border-[#FF7A84]/60 bg-[#FF7A84]/10" />
        <div className="absolute inset-x-[15%] bottom-[21%] h-[31%] border-b-2 border-[#DC1023]/80">
          <div className="absolute bottom-0 left-[47%] h-[84%] w-[8%] rounded-t-full border border-white/30 bg-[#3A3D44]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[18%] border-t border-white/10 bg-[#111216]" />
        <div className="absolute bottom-[18%] left-[12%] right-[12%] h-[2px] bg-[#FF7A84]/35" />
      </div>
      <figcaption className="absolute inset-x-3 bottom-2 text-right text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/70 sm:inset-x-5 sm:bottom-3 sm:text-xs">
        Illustrative stage concept
      </figcaption>
    </figure>
  );
}

export function TalentShowcaseSection() {
  return (
    <section
      aria-labelledby="talent-showcase-title"
      className="bg-[#F5F6F8] text-[#16191E]"
      id="talent-showcase"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex flex-col items-start">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DC1023] sm:text-sm">
              06 / Talent showcase
            </p>
            <div className="[container-type:inline-size] w-full max-w-[46rem]">
              <SignatureHeadline
                closing="Of Marathi cinema."
                emphasis="Next generation"
                headingLevel="h2"
                id="talent-showcase-title"
                lead="Discover the"
                variant="editorial"
              />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
              A proposed platform celebrating creative voices, professional
              achievements and emerging talent across Marathi entertainment.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                aria-disabled="true"
                className="inline-flex min-h-12 cursor-not-allowed items-center gap-2 bg-[#DC1023] px-5 text-sm font-semibold text-white"
                disabled
                type="button"
              >
                Explore Talent Showcase
                <span aria-hidden="true">→</span>
              </button>
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#DC1023]">
                Coming soon
              </span>
            </div>
            <p className="mt-3 max-w-xl text-xs leading-5 text-[#565F6C]">
              Showcase details are forthcoming. Participation does not
              guarantee casting, employment or representation.
            </p>
          </div>

          <ShowcaseVisual />
        </div>

        <ul
          aria-label="Proposed Talent Showcase categories"
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:mt-10 xl:grid-cols-4"
        >
          {talentCategories.map((category) => (
            <TalentCategoryCard key={category.number} {...category} />
          ))}
        </ul>
        <p className="mt-5 text-xs leading-5 text-[#565F6C]">
          No artists, judges, speakers, celebrity appearances, selections or
          showcase schedules have been confirmed.
        </p>
      </div>
    </section>
  );
}
