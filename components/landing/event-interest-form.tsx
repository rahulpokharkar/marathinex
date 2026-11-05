"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { professionalRoles } from "@/components/landing/professional-roles";

const eventInterests = [
  "Attend Event",
  "Project Market",
  "Industry Meetings",
  "Talent Showcase",
  "Industry Sessions",
];

type FieldName =
  | "fullName"
  | "email"
  | "country"
  | "primaryRole"
  | "privacyConsent";

type FieldErrors = Partial<Record<FieldName, string>>;

function validateForm(form: HTMLFormElement): FieldErrors {
  const formData = new FormData(form);
  const errors: FieldErrors = {};
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();

  if (!fullName) {
    errors.fullName = "Enter your full name.";
  }
  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!country) {
    errors.country = "Enter your country.";
  }
  if (!formData.get("primaryRole")) {
    errors.primaryRole = "Select your primary professional role.";
  }
  if (!formData.get("privacyConsent")) {
    errors.privacyConsent =
      "You must accept the Privacy Notice and Terms of Use.";
  }

  return errors;
}

const fieldClassName =
  "mt-2 min-h-12 w-full border border-[#D5D9DF] bg-white px-3.5 py-3 text-base text-[#16191E] outline-none placeholder:text-[#7A828D] focus-visible:border-[#DC1023] focus-visible:ring-2 focus-visible:ring-[#DC1023]/25";

const checkboxClassName =
  "mt-1 size-4 shrink-0 accent-[#DC1023] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC1023]";

export function EventInterestForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [selectedPrimaryRole, setSelectedPrimaryRole] = useState("");
  const [status, setStatus] = useState<"idle" | "unavailable">("idle");

  function handleChange(event: ChangeEvent<HTMLFormElement>) {
    if (
      event.target instanceof HTMLSelectElement &&
      event.target.name === "primaryRole"
    ) {
      setSelectedPrimaryRole(event.target.value);
    }
    if (status !== "idle") {
      setStatus("idle");
    }
    if (hasAttemptedSubmit) {
      setErrors(validateForm(event.currentTarget));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasAttemptedSubmit(true);

    const nextErrors = validateForm(event.currentTarget);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("unavailable");
  }

  return (
    <form
      className="border border-[#E1E4E8] bg-white p-5 shadow-[0_16px_50px_rgba(22,25,30,0.06)] sm:p-7 lg:p-9"
      id="event-interest-form"
      noValidate
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="border-b border-[#E5E7EB] pb-5 sm:pb-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#DC1023]">
          MarathiNEX FILM 2027
        </p>
        <h3 className="mt-2 font-heading text-3xl font-semibold uppercase leading-none tracking-[0.01em] text-[#16191E] sm:text-4xl">
          Register your interest
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#565F6C]">
          Share a little about yourself and the event experiences that interest
          you.
        </p>
      </div>

      <p className="mt-5 border-l-2 border-[#DC1023] bg-[#F5F6F8] px-4 py-3 text-sm leading-6 text-[#424A55]">
        This form is a preview. Submissions are not available yet; details you
        enter stay in this browser and are not sent or stored.
      </p>

      {Object.keys(errors).length > 0 && (
        <div
          aria-live="assertive"
          className="mt-5 border border-[#B42318]/30 bg-[#FEF3F2] p-4 text-sm text-[#912018]"
          role="alert"
        >
          <p className="font-medium">Please correct the following:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a className="underline underline-offset-2" href={`#${field}`}>
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "unavailable" && (
        <p
          aria-live="polite"
          className="mt-5 border border-[#DC1023]/25 bg-[#FFF5F5] p-4 text-sm leading-6 text-[#7D1520]"
          role="status"
        >
          This form has been checked locally, but submissions are unavailable.
          Your details have not been sent.
        </p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
        <div>
          <label
            className="text-sm font-medium text-[#16191E]"
            htmlFor="fullName"
          >
            Full name <span className="text-[#DC1023]">*</span>
            <span className="sr-only"> required</span>
          </label>
          <input
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            aria-invalid={Boolean(errors.fullName)}
            autoComplete="name"
            className={fieldClassName}
            id="fullName"
            name="fullName"
            placeholder="Your full name"
            required
          />
          {errors.fullName && (
            <p className="mt-1.5 text-sm text-[#B42318]" id="fullName-error">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-[#16191E]" htmlFor="email">
            Email address <span className="text-[#DC1023]">*</span>
            <span className="sr-only"> required</span>
          </label>
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={fieldClassName}
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-[#B42318]" id="email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            className="text-sm font-medium text-[#16191E]"
            htmlFor="country"
          >
            Country <span className="text-[#DC1023]">*</span>
            <span className="sr-only"> required</span>
          </label>
          <input
            aria-describedby={errors.country ? "country-error" : undefined}
            aria-invalid={Boolean(errors.country)}
            autoComplete="country-name"
            className={fieldClassName}
            id="country"
            name="country"
            placeholder="e.g. India"
            required
          />
          {errors.country && (
            <p className="mt-1.5 text-sm text-[#B42318]" id="country-error">
              {errors.country}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-[#16191E]" htmlFor="city">
            City <span className="text-[#565F6C]">(optional)</span>
          </label>
          <input
            autoComplete="address-level2"
            className={fieldClassName}
            id="city"
            name="city"
            placeholder="Your city"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            className="text-sm font-medium text-[#16191E]"
            htmlFor="primaryRole"
          >
            Primary professional role{" "}
            <span className="text-[#DC1023]">*</span>
            <span className="sr-only"> required</span>
          </label>
          <select
            aria-describedby={
              errors.primaryRole ? "primaryRole-error" : undefined
            }
            aria-invalid={Boolean(errors.primaryRole)}
            className={fieldClassName}
            defaultValue=""
            id="primaryRole"
            name="primaryRole"
            required
          >
            <option disabled value="">
              Select your primary role
            </option>
            {professionalRoles.map(({ title }) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
          {errors.primaryRole && (
            <p
              className="mt-1.5 text-sm text-[#B42318]"
              id="primaryRole-error"
            >
              {errors.primaryRole}
            </p>
          )}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-[#16191E]">
            Additional roles{" "}
            <span className="text-[#565F6C]">(optional, select all that apply)</span>
          </legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {professionalRoles.map(({ title }) => (
              <label
                className="flex min-h-11 items-start gap-3 text-sm leading-5 text-[#424A55]"
                key={title}
              >
                <input
                  className={checkboxClassName}
                  disabled={selectedPrimaryRole === title}
                  name="additionalRoles"
                  type="checkbox"
                  value={title}
                />
                <span>{title}</span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs leading-5 text-[#565F6C]">
            Your primary role is excluded from additional roles.
          </p>
        </fieldset>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-[#16191E]">
            Event interests{" "}
            <span className="text-[#565F6C]">(optional, select all that apply)</span>
          </legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {eventInterests.map((interest) => (
              <label
                className="flex min-h-11 items-start gap-3 text-sm leading-5 text-[#424A55]"
                key={interest}
              >
                <input
                  className={checkboxClassName}
                  name="eventInterests"
                  type="checkbox"
                  value={interest}
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label
            className="text-sm font-medium text-[#16191E]"
            htmlFor="organization"
          >
            Organization / company{" "}
            <span className="text-[#565F6C]">(optional)</span>
          </label>
          <input
            autoComplete="organization"
            className={fieldClassName}
            id="organization"
            name="organization"
            placeholder="Company or organization"
          />
        </div>
      </div>

      <fieldset className="mt-7 space-y-4 border-t border-[#E5E7EB] pt-6">
        <legend className="sr-only">Consents</legend>
        <div>
          <label
            className="flex items-start gap-3 text-sm leading-6 text-[#424A55]"
            htmlFor="privacyConsent"
          >
            <input
              aria-describedby={
                errors.privacyConsent ? "privacyConsent-error" : undefined
              }
              aria-invalid={Boolean(errors.privacyConsent)}
              className={checkboxClassName}
              id="privacyConsent"
              name="privacyConsent"
              required
              type="checkbox"
              value="accepted"
            />
            <span>
              I have read and agree to the Privacy Notice and Terms of Use{" "}
              <span className="text-[#DC1023]">*</span>
              <span className="sr-only"> required</span>
            </span>
          </label>
          {errors.privacyConsent && (
            <p
              className="ml-7 mt-1.5 text-sm text-[#B42318]"
              id="privacyConsent-error"
            >
              {errors.privacyConsent}
            </p>
          )}
          <p className="ml-7 mt-1.5 text-xs leading-5 text-[#565F6C]">
            The Privacy Notice and Terms of Use pages are not yet published.
          </p>
        </div>

        <label
          className="flex items-start gap-3 text-sm leading-6 text-[#424A55]"
          htmlFor="marketingConsent"
        >
          <input
            className={checkboxClassName}
            id="marketingConsent"
            name="marketingConsent"
            type="checkbox"
            value="accepted"
          />
          <span>
            I would like to receive optional MarathiNEX updates by email.
          </span>
        </label>
      </fieldset>

      <div className="mt-7">
        <button
          className="inline-flex min-h-12 w-full items-center justify-center bg-[#DC1023] px-6 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#B80D1D] focus-visible:ring-2 focus-visible:ring-[#16191E] focus-visible:ring-offset-2 sm:w-auto"
          type="submit"
        >
          Check form details
        </button>
        <p className="mt-3 text-xs leading-5 text-[#565F6C]">
          This checks required fields only. It will not submit your information.
        </p>
      </div>
    </form>
  );
}
