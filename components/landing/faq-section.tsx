"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const frequentlyAskedQuestions = [
  {
    question: "What is MarathiNEX FILM?",
    answer:
      "A year-round professional networking platform for Marathi entertainment, alongside a planned industry event.",
  },
  {
    question: "Who can join the network?",
    answer:
      "Actors, writers, directors, producers, financiers, casting professionals, crew, post-production, distributors, exhibitors and other entertainment industry participants.",
  },
  {
    question: "Is event registration open?",
    answer:
      "Event-interest registration is planned. Confirmed participation and ticketing will be announced separately.",
  },
  {
    question: "Can I register under multiple professional roles?",
    answer:
      "Yes. The membership system is designed to support multiple professional roles within one account.",
  },
  {
    question:
      "Does joining guarantee film projects, jobs, finance or industry meetings?",
    answer:
      "No. MarathiNEX FILM supports professional discovery and potential introductions but does not guarantee outcomes.",
  },
  {
    question: "Is MarathiNEX only for feature films?",
    answer:
      "No. The platform is designed for feature films, short films, documentaries, OTT and web series, television, microdrama, animation and theatre.",
  },
];

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[#F5F6F8]"
      id="faqs"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28 2xl:px-[3.25rem]">
        <p className="text-xs font-medium uppercase tracking-[0.19em] text-[#DC1023] sm:text-sm">
          Good to know
        </p>
        <h2
          className="mt-4 max-w-4xl font-heading text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-[#16191E] sm:text-5xl lg:text-6xl"
          id="faq-title"
        >
          Frequently asked questions
        </h2>

        <div className="mt-9 border-y border-[#E5E5E5] bg-white sm:mt-12">
          {frequentlyAskedQuestions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index + 1}`;
            const questionId = `faq-question-${index + 1}`;

            return (
              <article
                className="border-b border-[#E5E5E5] last:border-b-0"
                key={question}
              >
                <h3>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="flex min-h-16 w-full items-center justify-between gap-5 px-4 py-4 text-left font-heading text-lg font-semibold leading-tight text-[#16191E] outline-none transition-colors hover:text-[#DC1023] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#DC1023] motion-reduce:transition-none sm:px-6 sm:py-5 sm:text-xl"
                    id={questionId}
                    onClick={() =>
                      setOpenQuestion(isOpen ? null : index)
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
                  aria-labelledby={questionId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  id={answerId}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 pr-12 text-sm leading-6 text-[#565F6C] sm:px-6 sm:pb-6 sm:text-base sm:leading-7">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
