type SignatureHeadlineProps = {
  id: string;
  lead: string;
  emphasis: string;
  closing: string;
  developmentPlaceholder?: boolean;
  headingLevel?: "h1" | "h2";
  variant?: "default" | "editorial";
  inverse?: boolean;
};

export function SignatureHeadline({
  id,
  lead,
  emphasis,
  closing,
  developmentPlaceholder = false,
  headingLevel = "h1",
  variant = "default",
  inverse = false,
}: SignatureHeadlineProps) {
  const showLead =
    !developmentPlaceholder || process.env.NODE_ENV === "development";
  const Heading = headingLevel;

  return (
    <Heading
      className={`display-headline${variant === "editorial" ? " display-headline--editorial" : ""}${inverse ? " display-headline--inverse" : ""}`}
      id={id}
    >
      {showLead && <span className="block">{lead}</span>}
      <span className="display-headline-emphasis">{emphasis}</span>
      <span className="display-headline-closing">{closing}</span>
    </Heading>
  );
}
