import { demoOrganizations } from "./organizations";
import { demoPeople } from "./people";

export { demoCredits, demoPortfolioItems } from "./assets";
export { demoOrganizations } from "./organizations";
export { demoPeople } from "./people";
export { demoOpportunities, demoProjects } from "./records";
export {
  filterProfiles,
  findProfileById,
  getAllProfiles,
  getFeaturedProfiles,
  getProfileBySlug,
  getProfilesByRole,
  searchProfiles,
} from "./selectors";
export type {
  MarketplaceProfile,
  ProfileFilters,
  ProfileKind,
  ProfileSearch,
} from "./selectors";
export { validateDemoData } from "./validate";

export const demoProfiles = [...demoPeople, ...demoOrganizations] as const;
export const DEMO_DATA_NOTICE =
  "All profiles, projects, credits, and opportunities in this catalog are fictional demo data.";
