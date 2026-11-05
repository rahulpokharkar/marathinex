import Link from "next/link";
import { MarathiNEXLogo } from "@/components/landing/marathi-nex-logo";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "About MarathiNEX", href: "/#about" },
      { label: "Who Should Join", href: "/#who-should-join" },
      { label: "Film Formats", href: "/#film-formats" },
      { label: "Projects & Opportunities", href: "/#next-project" },
    ],
  },
  {
    title: "Event",
    links: [
      { label: "Film 2027", href: "/film/event" },
      { label: "Industry Sessions", href: "/#industry-highlights" },
      { label: "Project Market", href: "/#industry-highlights" },
      { label: "Talent Showcase", href: "/#industry-highlights" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: null },
      { label: "FAQs", href: "/#faqs" },
      { label: "Privacy Policy", href: null },
      { label: "Terms of Use", href: null },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-white text-[#16191E]">
      <div className="mx-auto max-w-[1800px] px-5 py-12 sm:px-8 sm:py-14 2xl:px-[3.25rem]">
        <div className="grid gap-10 border-b border-[#E5E5E5] pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <Link
              aria-label="MarathiNEX FILM home"
              className="inline-flex rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-4"
              href="/"
            >
              <MarathiNEXLogo />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#565F6C]">
              Marathi cinema &amp; entertainment market.
            </p>
          </div>

          {footerGroups.map(({ title, links }) => (
            <nav aria-label={`${title} footer links`} key={title}>
              <h2 className="font-heading text-base font-semibold uppercase tracking-[0.08em] text-[#16191E]">
                {title}
              </h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href ? (
                      <Link
                        className="text-sm leading-6 text-[#565F6C] outline-none transition-colors hover:text-[#DC1023] focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2 motion-reduce:transition-none"
                        href={href}
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="inline-flex flex-wrap items-center gap-x-2 text-sm leading-6 text-[#565F6C]">
                        {label}
                        <span className="text-[0.65rem] font-medium uppercase tracking-[0.08em] text-[#8A9099]">
                          Coming soon
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-5 text-xs leading-5 text-[#565F6C] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MarathiNEX FILM. All rights reserved.</p>
          <p>Marathi Cinema &amp; Entertainment Market</p>
        </div>
      </div>
    </footer>
  );
}
