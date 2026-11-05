import {
  Clapperboard,
  Handshake,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { ProjectMarketFeature } from "@/components/landing/project-market-feature";
import { SignatureHeadline } from "@/components/landing/signature-headline";

const projectMarketFeatures = [
  {
    number: "01",
    title: "Present your project",
    description:
      "Introduce a film or series concept at an appropriate stage of development.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Explore partnerships",
    description:
      "Connect with potential producers, collaborators and industry professionals.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Multiple formats",
    description:
      "Feature films, short films, documentaries, series and emerging formats.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Control your materials",
    description:
      "Choose what information you share and with whom.",
    icon: ShieldCheck,
  },
];

export function ProjectMarketSection() {
  return (
    <section
      aria-labelledby="project-market-title"
      className="bg-[#F5F6F8] text-[#16191E]"
      id="project-market"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex flex-col items-start justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DC1023] sm:text-sm">
              04 / Project market
            </p>
            <div className="[container-type:inline-size] w-full max-w-[46rem]">
              <SignatureHeadline
                closing="Great stories."
                emphasis="Start with"
                headingLevel="h2"
                id="project-market-title"
                lead="Great films"
                variant="editorial"
              />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
              A proposed industry platform where filmmakers can introduce
              projects, explore potential production partnerships and make
              meaningful professional connections.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                aria-disabled="true"
                className="inline-flex min-h-12 cursor-not-allowed items-center gap-2 bg-[#DC1023] px-5 text-sm font-semibold text-white"
                disabled
                type="button"
              >
                Explore Project Market
                <span aria-hidden="true">→</span>
              </button>
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#DC1023]">
                Coming soon
              </span>
            </div>
            <p className="mt-3 max-w-xl text-xs leading-5 text-[#565F6C]">
              Project submissions are not open. Any future materials will be
              private by default and shared only at your direction.
            </p>
          </div>

          <figure
            className="relative aspect-[16/10] w-full overflow-hidden border border-[#E5E5E5] bg-[#16191E] lg:aspect-auto lg:min-h-[30rem]"
            style={{ aspectRatio: "16 / 10" }}
          >
            <Image
              alt="A screenplay notebook with storyboards, clapperboard and camera lens on a production table"
              className="absolute inset-0 size-full object-cover"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              src="/images/next-project-screenplay.png"
            />
          </figure>
        </div>

        <ul
          aria-label="Proposed Project Market features"
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:mt-10 xl:grid-cols-4"
        >
          {projectMarketFeatures.map((feature) => (
            <ProjectMarketFeature key={feature.number} {...feature} />
          ))}
        </ul>

        <p className="mt-5 max-w-4xl text-xs leading-5 text-[#565F6C]">
          The Project Market is proposed programming. It does not guarantee
          financing, project selection, distribution or meetings. Sharing
          materials does not transfer intellectual property rights.
        </p>
      </div>
    </section>
  );
}
