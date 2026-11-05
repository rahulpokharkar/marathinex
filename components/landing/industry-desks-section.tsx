import {
  Camera,
  Clapperboard,
  Globe2,
  Landmark,
  MonitorPlay,
  UsersRound,
} from "lucide-react";
import { IndustryDeskCard } from "@/components/landing/industry-desk-card";
import { SignatureHeadline } from "@/components/landing/signature-headline";

const industryDesks = [
  {
    number: "01",
    title: "Producers & Studios",
    description:
      "Development, production and co-production partnerships.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Finance & Investment",
    description:
      "Project financing conversations and potential funding partners.",
    icon: Landmark,
  },
  {
    number: "03",
    title: "Distribution & Sales",
    description:
      "Theatrical distribution, international sales and market pathways.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "OTT & Broadcast",
    description:
      "Streaming platforms, digital content and television opportunities.",
    icon: MonitorPlay,
  },
  {
    number: "05",
    title: "Talent & Casting",
    description:
      "Actors, casting professionals and creative talent discovery.",
    icon: UsersRound,
  },
  {
    number: "06",
    title: "Production Services",
    description:
      "Cinematography, sound, visual effects, post-production and technical services.",
    icon: Camera,
  },
];

export function IndustryDesksSection() {
  return (
    <section
      aria-labelledby="industry-desks-title"
      className="bg-white text-[#16191E]"
      id="industry-desks"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DC1023] sm:text-sm">
          03 / Industry connections
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-8">
          <div className="[container-type:inline-size] max-w-4xl">
            <SignatureHeadline
              closing="Business of film."
              emphasis="Behind the"
              headingLevel="h2"
              id="industry-desks-title"
              lead="Meet the people"
              variant="editorial"
            />
          </div>
          <p className="max-w-2xl pb-1 text-sm leading-6 text-[#565F6C] md:justify-self-end sm:text-base sm:leading-7">
            Explore proposed industry desks designed to connect projects and
            professionals with relevant decision-makers, expertise and
            services.
          </p>
        </div>

        <ul
          aria-label="Proposed MarathiNEX FILM industry desk categories"
          className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:mt-12 xl:grid-cols-3"
        >
          {industryDesks.map((desk) => (
            <li className="h-full" key={desk.number}>
              <IndustryDeskCard {...desk} />
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-3xl text-xs leading-5 text-[#565F6C]">
          These are proposed programming categories, not confirmed buyer desks
          or guaranteed appointments, funding, participants or commitments.
        </p>
      </div>
    </section>
  );
}
