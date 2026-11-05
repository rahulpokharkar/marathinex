import { ProfessionalRoleCard } from "@/components/landing/professional-role-card";
import { professionalRoles } from "@/components/landing/professional-roles";
import { SignatureHeadline } from "@/components/landing/signature-headline";

export function WhoShouldJoin() {
  return (
    <section
      aria-labelledby="who-should-join-title"
      className="bg-white"
      id="who-should-join"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28 2xl:px-[3.25rem]">
        <div className="[container-type:inline-size]">
          <p className="eyebrow-label text-xs sm:text-sm">
            The industry. Connected.
          </p>
          <SignatureHeadline
            closing="Industry."
            emphasis="Marathi Film"
            headingLevel="h2"
            id="who-should-join-title"
            lead="Built for the"
            variant="editorial"
          />
          <p className="mt-5 max-w-xl text-base leading-7 text-[#4F5359] sm:text-lg sm:leading-8">
            Find your people. Build your network. Move your next project
            forward.
          </p>
        </div>

        <ul
          aria-label="Professionals who can join the MarathiNEX FILM network"
          className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {professionalRoles.map((role) => (
            <li className="h-full" key={role.number}>
              <ProfessionalRoleCard {...role} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
