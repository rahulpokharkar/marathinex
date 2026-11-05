import { SignatureHeadline } from "@/components/landing/signature-headline";
import { EventInterestForm } from "@/components/landing/event-interest-form";

export function EventInterestSection() {
  return (
    <section
      aria-labelledby="event-interest-title"
      className="bg-[#F5F6F8] text-[#16191E]"
      id="event-interest"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 xl:gap-20">
          <div className="flex flex-col items-start lg:sticky lg:top-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DC1023] sm:text-sm">
              07 / Express your interest
            </p>
            <div className="[container-type:inline-size] mt-2 w-full max-w-[34rem]">
              <SignatureHeadline
                closing="2027."
                emphasis="Marathi Film"
                headingLevel="h2"
                id="event-interest-title"
                lead="Be part of"
                variant="editorial"
              />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
              Register your interest in MarathiNEX FILM 2027 and tell us how
              you would like to participate. We will share event updates as
              plans develop.
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-[#DC1023] pl-4 text-sm leading-6 text-[#424A55]">
              Expression of interest is not a ticket purchase or confirmation
              of event participation.
            </p>
          </div>

          <EventInterestForm />
        </div>
      </div>
    </section>
  );
}
