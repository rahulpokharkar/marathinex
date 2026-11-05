import type {
  OrganizationProfile,
  PersonProfile,
  ProfileLocation,
  FormatCode,
  RoleCode,
} from "../types";
import { demoOrganizations } from "./organizations";
import { demoPeople } from "./people";

export type MarketplaceProfile = PersonProfile | OrganizationProfile;
export type ProfileKind = MarketplaceProfile["kind"];

export interface ProfileSearch {
  query?: string;
  name?: string;
  city?: string;
  role?: RoleCode;
  primaryRole?: RoleCode;
  roles?: readonly RoleCode[];
  format?: FormatCode;
  skills?: string | readonly string[];
  languages?: string | readonly string[];
  interests?: string | readonly string[];
  kind?: ProfileKind;
}

export type ProfileFilters = ProfileSearch;

const profileCatalog: MarketplaceProfile[] = [
  ...demoPeople,
  ...demoOrganizations,
];

function normalize(value: string): string {
  return value.trim().toLocaleLowerCase();
}

function includesTerm(value: string | undefined, term: string): boolean {
  return value !== undefined && normalize(value).includes(normalize(term));
}

function includesAll(
  candidates: readonly string[],
  terms: string | readonly string[] | undefined,
): boolean {
  const requiredTerms = typeof terms === "string" ? [terms] : terms ?? [];
  return requiredTerms.every((term) =>
    candidates.some((candidate) => includesTerm(candidate, term)),
  );
}

function locationOf(profile: MarketplaceProfile): ProfileLocation {
  return profile.location;
}

function isProfileArray(value: unknown): value is readonly MarketplaceProfile[] {
  return Array.isArray(value);
}

function matchesSearch(
  profile: MarketplaceProfile,
  search: ProfileSearch,
): boolean {
  const location = locationOf(profile);
  const roleLabels = profile.roles.map(({ label }) => label);
  const searchText = [
    profile.displayName,
    profile.slug,
    profile.headline,
    profile.biography,
    location.city,
    location.region,
    location.country,
    ...profile.languages,
    ...roleLabels,
    ...profile.skills,
    ...profile.formats,
    ...profile.professionalInterests,
    ...(profile.kind === "organization"
      ? [profile.organizationType, profile.markText]
      : []),
  ]
    .filter((value): value is string => value !== undefined)
    .join(" ");

  if (search.query && !includesTerm(searchText, search.query)) {
    return false;
  }
  if (search.name && !includesTerm(profile.displayName, search.name)) {
    return false;
  }
  if (search.city && !includesTerm(location.city, search.city)) {
    return false;
  }
  if (search.role && !profile.roles.some(({ code }) => code === search.role)) {
    return false;
  }
  if (search.primaryRole && profile.primaryRole !== search.primaryRole) {
    return false;
  }
  if (
    search.roles?.length &&
    !search.roles.some((code) => profile.roles.some((role) => role.code === code))
  ) {
    return false;
  }
  if (search.format && !profile.formats.includes(search.format)) {
    return false;
  }
  if (!includesAll(profile.skills, search.skills)) {
    return false;
  }
  if (!includesAll(profile.languages, search.languages)) {
    return false;
  }
  if (!includesAll(profile.professionalInterests, search.interests)) {
    return false;
  }
  if (search.kind && profile.kind !== search.kind) {
    return false;
  }

  return true;
}

export function getAllProfiles(): MarketplaceProfile[] {
  return [...profileCatalog];
}

export function getProfileBySlug(slug: string): MarketplaceProfile | undefined {
  return profileCatalog.find((profile) => profile.slug === slug);
}

export function getProfilesByRole(role: RoleCode): MarketplaceProfile[] {
  return profileCatalog.filter((profile) =>
    profile.roles.some(({ code }) => code === role),
  );
}

export function searchProfiles(
  query: string | ProfileSearch,
  profiles?: readonly MarketplaceProfile[],
): MarketplaceProfile[];
export function searchProfiles(
  profiles: readonly MarketplaceProfile[],
  search: ProfileSearch,
): MarketplaceProfile[];
export function searchProfiles(
  queryOrProfiles: string | ProfileSearch | readonly MarketplaceProfile[],
  profilesOrSearch?: readonly MarketplaceProfile[] | ProfileSearch,
): MarketplaceProfile[] {
  let profiles: readonly MarketplaceProfile[];
  let search: ProfileSearch;

  if (isProfileArray(queryOrProfiles)) {
    if (!profilesOrSearch || isProfileArray(profilesOrSearch)) {
      throw new Error("A profile search filter is required after the profile list.");
    }
    profiles = queryOrProfiles;
    search = profilesOrSearch;
  } else {
    profiles = isProfileArray(profilesOrSearch)
      ? profilesOrSearch
      : profileCatalog;
    search = typeof queryOrProfiles === "string"
      ? { query: queryOrProfiles }
      : queryOrProfiles;
  }

  return profiles.filter((profile) => matchesSearch(profile, search));
}

export function filterProfiles(
  filters: ProfileFilters,
  profiles?: readonly MarketplaceProfile[],
): MarketplaceProfile[] {
  return searchProfiles(filters, profiles);
}

export function getFeaturedProfiles(limit = 6): MarketplaceProfile[] {
  const count = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 6;
  return profileCatalog.filter((profile) => profile.featured).slice(0, count);
}

export function findProfileById<T extends MarketplaceProfile>(
  profiles: readonly T[],
  id: string,
): T | undefined {
  return profiles.find((profile) => profile.id === id);
}
