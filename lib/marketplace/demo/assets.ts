import type { Credit, PortfolioItem } from "../types";

export const demoCredits: Credit[] = [
  {
    id: "demo-credit-writer-01",
    profileId: "demo-person-writer-01",
    title: "The Paper Monsoon",
    format: "feature_film",
    roleDescription: "Writer",
    description: "Invented feature-film credit for demo purposes.",
    fictional: true,
    demo: true,
    verified: false,
  },
];

export const demoPortfolioItems: PortfolioItem[] = [
  {
    id: "demo-portfolio-actor-01",
    profileId: "demo-person-actor-01",
    title: "Screen-test slate",
    kind: "image",
    description: "Neutral placeholder; no portrait or real person depicted.",
    demoPlaceholder: true,
    demo: true,
    verified: false,
  },
  {
    id: "demo-portfolio-organization-01",
    profileId: "demo-organization-production-house-01",
    title: "Copper Kite sample mark",
    kind: "image",
    description: "Text-only fictional wordmark placeholder.",
    demoPlaceholder: true,
    demo: true,
    verified: false,
  },
];
