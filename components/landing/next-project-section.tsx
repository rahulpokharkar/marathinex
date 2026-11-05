import {
  ArrowRight,
  Clapperboard,
  CircleDollarSign,
  UsersRound,
  Video,
} from "lucide-react";
import Image from "next/image";
import { ProfessionalUseCaseCard } from "@/components/landing/professional-use-case-card";
import { SignatureHeadline } from "@/components/landing/signature-headline";

const professionalUseCases = [
  {
    category: "Actors",
    headline: "Make your work visible.",
    description:
      "Present your experience, showreel and professional profile.",
    icon: UsersRound,
  },
  {
    category: "Producers",
    headline: "Build your next team.",
    description:
      "Discover creative professionals, projects and collaborators.",
    icon: Clapperboard,
  },
  {
    category: "Financiers",
    headline: "Discover new projects.",
    description:
      "Explore relevant project introductions and industry connections.",
    icon: CircleDollarSign,
  },
  {
    category: "Crew & Technicians",
    headline: "Showcase your expertise.",
    description:
      "Highlight skills, credits and production availability.",
    icon: Video,
  },
];

function StoryDevelopmentImage() {
  return (
    <figure
      className="relative min-h-[20rem] overflow-hidden bg-[#16191E] sm:min-h-[25rem] lg:min-h-[32rem]"
    >
      <Image
        alt="A screenplay beside film storyboards, a clapperboard and a camera lens"
        className="absolute inset-0 size-full object-cover"
        fill
        sizes="(max-width: 1023px) 100vw, 45vw"
        src="/images/next-project-screenplay.png"
      />
    </figure>
  );
}

export function NextProjectSection() {
  return (
    <section
      aria-labelledby="next-project-title"
      className="bg-[#F5F6F8]"
      id="next-project"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28 2xl:px-[3.25rem]">
        <div className="[container-type:inline-size] max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.19em] text-[#DC1023] sm:text-sm">
            From connections to collaborations
          </p>
          <SignatureHeadline
            closing="Starts here."
            emphasis="Project"
            headingLevel="h2"
            id="next-project-title"
            lead="Your next"
            variant="editorial"
          />
          <p className="mt-5 max-w-3xl text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
            Whatever your role in the industry, MarathiNEX helps you connect
            with relevant professionals and explore possibilities for your next
            production.
          </p>
        </div>

        <article className="mt-10 grid overflow-hidden border border-[#E5E7EB] bg-white lg:mt-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#DC1023] sm:text-sm">
              For writers &amp; directors
            </p>
            <h3 className="mt-5 max-w-xl font-heading text-3xl font-semibold uppercase leading-[1.02] tracking-[0.01em] text-[#16191E] sm:text-4xl lg:text-5xl">
              Have a story worth telling?
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
              Build your profile, present your creative work and discover
              producers or collaborators relevant to your next project.
            </p>
            <div className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-[#DC1023] sm:text-base">
              <span className="inline-flex items-center gap-2">
                Explore Opportunities
                <ArrowRight aria-hidden="true" size={18} />
              </span>
              <span className="border border-[#DC1023]/30 px-2 py-1 text-[0.65rem] uppercase tracking-[0.1em]">
                Coming soon
              </span>
            </div>
          </div>
          <StoryDevelopmentImage />
        </article>

        <ul
          aria-label="How MarathiNEX supports film professionals"
          className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
        >
          {professionalUseCases.map((useCase) => (
            <li className="h-full" key={useCase.category}>
              <ProfessionalUseCaseCard {...useCase} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
