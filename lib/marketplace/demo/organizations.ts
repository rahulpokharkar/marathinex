import type { OrganizationProfile, RoleCode } from "../types";
import { createDemoProfileFields } from "./profile-fields";

function organization(
  id: string,
  displayName: string,
  roleCodes: RoleCode | readonly RoleCode[],
  organizationType: OrganizationProfile["organizationType"],
  markText: string,
  details: Omit<
    OrganizationProfile,
    | "id"
    | "kind"
    | "demo"
    | "verified"
    | "displayName"
    | "slug"
    | "headline"
    | "primaryRole"
    | "roles"
    | "portfolio"
    | "featured"
    | "organizationType"
    | "markText"
  > & { featured?: boolean },
): OrganizationProfile {
  const profileId = `demo-organization-${id}`;
  const { featured, ...profileDetails } = details;

  return {
    id: profileId,
    kind: "organization",
    displayName,
    ...createDemoProfileFields(profileId, displayName, roleCodes, featured),
    organizationType,
    markText,
    demo: true,
    verified: false,
    ...profileDetails,
  };
}

export const demoOrganizations: OrganizationProfile[] = [
  organization("production-house-01", "Copper Kite Pictures", "production_house", "company", "CK", {
    featured: true,
    location: { city: "Pune", region: "Maharashtra", country: "India" },
    languages: ["Marathi", "Hindi", "English"],
    biography: "Fictional production-house profile created only for this demo.",
    skills: ["Film development", "Production planning", "Creative collaboration"],
    professionalInterests: ["Independent features", "Short films"],
    availability: "open_to_opportunities",
    contactEmail: "demo+copper-kite@example.test",
    formats: ["feature_film", "short_film", "documentary"],
  }),
  organization("production-house-02", "Lantern Orchard Films", "production_house", "company", "LO", {
    location: { city: "Mumbai", region: "Maharashtra", country: "India" },
    languages: ["Marathi", "Hindi", "English"],
    biography: "Fictional production company; no projects or credits are real.",
    skills: ["Development", "Line production", "Production coordination"],
    professionalInterests: ["Feature films", "Web series"],
    availability: "limited",
    contactEmail: "demo+lantern-orchard@example.test",
    formats: ["feature_film", "web_series", "television"],
  }),
  organization("post-studio-01", "Mosslight Post Lab", "vfx_postproduction_studio", "studio", "MP", {
    featured: true,
    location: { city: "Nagpur", region: "Maharashtra", country: "India" },
    languages: ["Marathi", "Hindi", "English"],
    biography: "Fictional post-production studio profile for product testing.",
    skills: ["Offline editing", "Colour workflow", "Post-production coordination"],
    professionalInterests: ["Regional film", "Documentary"],
    availability: "open_to_opportunities",
    contactEmail: "demo+mosslight-post@example.test",
    formats: ["feature_film", "documentary", "short_film"],
  }),
  organization("post-studio-02", "Orbit Fable VFX", "vfx_postproduction_studio", "studio", "OF", {
    location: { city: "Hyderabad", region: "Telangana", country: "India" },
    languages: ["English", "Hindi", "Marathi"],
    biography: "Fictional visual-effects studio. Capabilities are illustrative, not verified.",
    skills: ["Compositing", "Motion graphics", "Visual development"],
    professionalInterests: ["Animation", "Episodic work"],
    availability: "limited",
    contactEmail: "demo+orbit-fable@example.test",
    formats: ["feature_film", "animation", "web_series"],
  }),
  organization("distributor-01", "Blue Banyan Releasing", "distributor_sales_company", "agency", "BB", {
    location: { city: "Mumbai", region: "Maharashtra", country: "India" },
    languages: ["Marathi", "Hindi", "English"],
    biography: "Fictional distribution profile; no sales or release commitments are implied.",
    skills: ["Release planning", "Audience research", "Sales materials"],
    professionalInterests: ["Independent cinema", "Regional distribution"],
    availability: "not_listed",
    contactEmail: "demo+blue-banyan@example.test",
    formats: ["feature_film", "documentary", "short_film"],
  }),
  organization("distributor-02", "Quiet Comet Sales", "distributor_sales_company", "agency", "QC", {
    location: { city: "Edinburgh", country: "United Kingdom" },
    languages: ["English", "Marathi"],
    biography: "Fictional international sales-company profile for demo use.",
    skills: ["Market research", "Catalog planning", "Festival strategy"],
    professionalInterests: ["International independent films", "Documentary"],
    availability: "not_listed",
    contactEmail: "demo+quiet-comet@example.test",
    formats: ["feature_film", "documentary", "animation"],
  }),
  organization("ott-01", "Juniper Window Media", "ott_content_acquisition", "company", "JW", {
    location: { city: "Pune", region: "Maharashtra", country: "India" },
    languages: ["Marathi", "Hindi", "English"],
    biography: "Fictional content-acquisition profile. No platform or deal is represented.",
    skills: ["Content research", "Programming concepts", "Audience analysis"],
    professionalInterests: ["Regional series", "Documentary"],
    availability: "not_listed",
    contactEmail: "demo+juniper-window@example.test",
    formats: ["web_series", "documentary", "television"],
  }),
  organization("ott-02", "Tidal Loom Content", "ott_content_acquisition", "company", "TL", {
    location: { city: "Dubai", country: "United Arab Emirates" },
    languages: ["English", "Hindi", "Marathi"],
    biography: "Fictional content research group for marketplace demonstrations.",
    skills: ["Content curation", "Research", "Programming analysis"],
    professionalInterests: ["South Asian stories", "Feature films"],
    availability: "not_listed",
    contactEmail: "demo+tidal-loom@example.test",
    formats: ["feature_film", "web_series", "microdrama"],
  }),
  organization("services-01", "Pebble Tram Production Services", "production_service_provider", "collective", "PT", {
    location: { city: "Satara", region: "Maharashtra", country: "India" },
    languages: ["Marathi", "Hindi", "English"],
    biography: "Fictional regional production-services collective for this demo.",
    skills: ["Location coordination", "Local crew planning", "Production logistics"],
    professionalInterests: ["Location shoots", "Independent productions"],
    availability: "open_to_opportunities",
    contactEmail: "demo+pebble-tram@example.test",
    formats: ["feature_film", "documentary", "television"],
  }),
  organization("services-02", "North Star Banyan Services", "production_service_provider", "company", "NB", {
    location: { city: "Auckland", country: "New Zealand" },
    languages: ["English", "Marathi"],
    biography: "Fictional international production-services company for testing.",
    skills: ["Remote coordination", "Location research", "Production logistics"],
    professionalInterests: ["Co-productions", "Traveling productions"],
    availability: "limited",
    contactEmail: "demo+north-star-banyan@example.test",
    formats: ["feature_film", "short_film", "documentary"],
  }),
];
