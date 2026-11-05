"use client";

import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { MarathiNEXLogo } from "@/components/landing/marathi-nex-logo";

const dropdownItems = ["About", "Program", "Attend", "Industry Desks"];
const directItems = ["Partners", "Media", "Contact"];

function NavigationDisclosure({
  label,
  mobile = false,
  onNavigate,
}: {
  label: string;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <details
      className={`group relative ${mobile ? "w-full" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.stopPropagation();
        }
      }}
    >
      <summary
        className={`flex min-h-10 cursor-pointer list-none items-center gap-1.5 rounded px-1 text-[0.8rem] font-semibold text-[#16191E] outline-none transition-colors hover:text-[#DC1023] focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden ${
          mobile ? "w-full justify-between px-3 text-sm" : "whitespace-nowrap"
        }`}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className="shrink-0 transition-transform group-open:rotate-180"
          size={14}
          strokeWidth={2.2}
        />
      </summary>
      <div
        className={`z-50 rounded-lg border border-black/10 bg-white p-3 text-sm shadow-lg ${
          mobile
            ? "relative mt-1 w-full"
            : "absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2"
        } hidden group-open:block`}
      >
        {label === "About" ? (
          <Link
            className="block rounded-md px-3 py-2 font-semibold text-[#16191E] outline-none hover:bg-[#F5F6F8] focus-visible:ring-2 focus-visible:ring-[#DC1023]"
            href="/#about"
            onClick={onNavigate}
          >
            About MarathiNEX
          </Link>
        ) : label === "Program" ? (
          <Link
            className="block rounded-md px-3 py-2 font-semibold text-[#16191E] outline-none hover:bg-[#F5F6F8] focus-visible:ring-2 focus-visible:ring-[#DC1023]"
            href="/film/event"
            onClick={onNavigate}
          >
            Film 2027 event
          </Link>
        ) : (
          <p className="px-3 py-2 leading-5 text-[#5C6067]">
            {label} details are coming soon.
          </p>
        )}
      </div>
    </details>
  );
}

function NavigationItems({
  mobile = false,
  onUnavailable,
  onNavigate,
}: {
  mobile?: boolean;
  onUnavailable: (label: string) => void;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Main navigation"}>
      <div
        className={
          mobile
            ? "flex flex-col items-stretch gap-1"
            : "flex items-center justify-center gap-3 2xl:gap-5"
        }
      >
        {dropdownItems.map((label) => (
          <NavigationDisclosure
            key={label}
            label={label}
            mobile={mobile}
            onNavigate={onNavigate}
          />
        ))}
        {directItems.map((label) => (
          <button
            className={`min-h-10 rounded px-1 text-[0.8rem] font-semibold text-[#16191E] outline-none transition-colors hover:text-[#DC1023] focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2 ${
              mobile ? "w-full px-3 text-left text-sm" : "whitespace-nowrap"
            }`}
            key={label}
            onClick={() => {
              onUnavailable(`${label} information is coming soon.`);
              onNavigate?.();
            }}
            type="button"
          >
            {label}
          </button>
        ))}
        <button
          aria-label="Search, coming soon"
          className={`flex min-h-10 items-center rounded px-1 text-[#16191E] outline-none transition-colors hover:text-[#DC1023] focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2 ${
            mobile ? "w-full gap-2 px-3 text-sm font-semibold" : ""
          }`}
          onClick={() => {
            onUnavailable("Search is coming soon.");
            onNavigate?.();
          }}
          type="button"
        >
          <Search aria-hidden="true" size={18} strokeWidth={2} />
          {mobile && <span>Search</span>}
        </button>
      </div>
    </nav>
  );
}

function RegistrationButton({
  mobile = false,
  onRegister,
}: {
  mobile?: boolean;
  onRegister: () => void;
}) {
  return (
    <button
      aria-label="Register Now, coming soon"
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#DC1023] font-semibold text-white outline-none transition-colors hover:bg-[#B80D1D] focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2 ${
        mobile ? "px-3 text-xs sm:px-4 sm:text-sm" : "px-4 text-sm"
      }`}
      onClick={onRegister}
      type="button"
    >
      {mobile ? (
        <>
          <span className="min-[420px]:hidden">Register</span>
          <span className="hidden min-[420px]:inline">Register Now</span>
        </>
      ) : (
        "Register Now"
      )}
      <ArrowRight
        aria-hidden="true"
        className={mobile ? "max-[380px]:hidden" : undefined}
        size={16}
        strokeWidth={2.4}
      />
    </button>
  );
}

export function LandingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function announceUnavailable(message: string) {
    setAnnouncement(message);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && isMobileMenuOpen) {
      closeMobileMenu();
      mobileMenuButtonRef.current?.focus();
    }
  }

  return (
    <header
      className="relative z-40 border-b border-black/10 bg-white"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-7">
        <div className="flex h-[76px] items-center justify-between gap-2 min-[1200px]:hidden">
          <Link
            aria-label="MarathiNEX FILM home"
            className="min-w-0 shrink"
            href="/"
            onClick={closeMobileMenu}
          >
            <MarathiNEXLogo />
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <RegistrationButton
              mobile
              onRegister={() =>
                announceUnavailable("Registration is not available yet.")
              }
            />
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-md text-[#16191E] outline-none transition-colors hover:bg-[#F5F6F8] focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              ref={mobileMenuButtonRef}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X aria-hidden="true" size={21} />
              ) : (
                <Menu aria-hidden="true" size={21} />
              )}
            </button>
          </div>
        </div>

        <div className="hidden h-[88px] grid-cols-[250px_minmax(0,1fr)_auto] items-center gap-4 min-[1200px]:grid">
          <Link
            aria-label="MarathiNEX FILM home"
            className="justify-self-start"
            href="/"
          >
            <MarathiNEXLogo />
          </Link>

          <NavigationItems onUnavailable={announceUnavailable} />

          <div className="flex items-center justify-self-end gap-2.5">
            <Link
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#16191E] bg-white px-4 text-sm font-semibold text-[#16191E] outline-none transition-colors hover:bg-[#F5F6F8] focus-visible:ring-2 focus-visible:ring-[#DC1023] focus-visible:ring-offset-2"
              href="/auth/login"
            >
              Login
            </Link>
            <RegistrationButton
              onRegister={() =>
                announceUnavailable("Registration is not available yet.")
              }
            />
          </div>
        </div>

        <div
          className="border-t border-black/10 pb-4 min-[1200px]:hidden"
          hidden={!isMobileMenuOpen}
          id="mobile-navigation"
        >
          <NavigationItems
            mobile
            onNavigate={closeMobileMenu}
            onUnavailable={announceUnavailable}
          />
          <Link
            className="mt-2 flex min-h-10 items-center rounded px-3 text-sm font-semibold text-[#16191E] outline-none hover:bg-[#F5F6F8] focus-visible:ring-2 focus-visible:ring-[#DC1023]"
            href="/auth/login"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        </div>
      </div>
      <p aria-live="polite" className="sr-only" role="status">
        {announcement}
      </p>
    </header>
  );
}
