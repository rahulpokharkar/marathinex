"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { SignatureHeadline } from "@/components/landing/signature-headline";

const eventFAQs = [
  {
    question: "When and where will MarathiNEX FILM 2027 take place?",
    answer:
      "The event is being planned for Mumbai, India. Exact dates and venue details have not yet been announced.",
  },
  {
    question: "Is registration for the event open?",
    answer:
      "Visitors may express interest when the event-interest form is operational. This is separate from confirmed participation or ticket purchase.",
  },
  {
    question: "Can I submit my film or series project?",
    answer:
      "A Project Market is being explored as part of the event. Submission procedures and eligibility criteria will be announced if the program is confirmed.",
  },
  {
    question: "Will I be able to meet producers, financiers or distributors?",
    answer:
      "Curated industry meetings are proposed. Participation will depend on confirmed desks, eligibility, available capacity and accepted meeting requests.",
  },
  {
    question: "Do I need to become a MarathiNEX member to attend?",
    answer:
      "Membership requirements for event participation have not yet been finalized. Joining the interest list is not a paid membership.",
  },
  {
    question: "Will there be opportunities for actors and creative talent?",
    answer:
      "Talent Showcase activities are being considered. Participation details will be announced once the program is confirmed.",
  },
];

export function EventFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="event-faq-title"
      className="bg-[#F5F6F8] text-[#16191E]"
      id="event-faqs"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-[3.25rem]">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DC1023] sm:text-sm">
            08 / Plan your participation
          </p>
          <div className="[container-type:inline-size] max-w-3xl">
            <SignatureHeadline
              closing=""
              emphasis="Answered."
              headingLevel="h2"
              id="event-faq-title"
              lead="Your questions."
              variant="editorial"
            />
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
            Everything you need to know about the proposed MarathiNEX FILM 2027
            gathering.
          </p>

          <div className="mt-9 bg-white px-5 sm:mt-12 sm:px-8">
            <ul aria-label="MarathiNEX FILM 2027 event FAQs">
              {eventFAQs.map(({ question, answer }, index) => {
                const isOpen = openIndex === index;
                const triggerId = `event-faq-question-${index + 1}`;
                const answerId = `event-faq-answer-${index + 1}`;

                return (
                  <li
                    className="border-b border-[#E5E7EB] last:border-b-0"
                    key={question}
                  >
                    <h3>
                      <button
                        aria-controls={answerId}
                        aria-expanded={isOpen}
                        className="flex min-h-[4.5rem] w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold leading-6 text-[#16191E] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#DC1023] sm:min-h-20 sm:text-lg sm:leading-7"
                        id={triggerId}
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        type="button"
                      >
                        <span>{question}</span>
                        {isOpen ? (
                          <Minus
                            aria-hidden="true"
                            className="shrink-0 text-[#DC1023]"
                            size={20}
                            strokeWidth={1.8}
                          />
                        ) : (
                          <Plus
                            aria-hidden="true"
                            className="shrink-0 text-[#DC1023]"
                            size={20}
                            strokeWidth={1.8}
                          />
                        )}
                      </button>
                    </h3>
                    <div
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                      id={answerId}
                      role="region"
                      aria-labelledby={triggerId}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-6 pr-8 text-sm leading-6 text-[#565F6C] sm:pb-7 sm:text-base sm:leading-7">
                          {answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
