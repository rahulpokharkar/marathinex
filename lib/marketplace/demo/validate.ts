import { demoOrganizations } from "./organizations";
import { demoPeople } from "./people";
import { demoOpportunities, demoProjects } from "./records";
import { demoCredits, demoPortfolioItems } from "./assets";
import { formatOptions, professionalRoles } from "../roles";
import type { DemoRecord } from "../types";

const demoRecords: DemoRecord[] = [
  ...demoPeople,
  ...demoOrganizations,
  ...demoPeople.flatMap((profile) => profile.portfolio),
  ...demoOrganizations.flatMap((profile) => profile.portfolio),
  ...demoProjects,
  ...demoOpportunities,
];

export function validateDemoData(): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const slugs = new Set<string>();
  const roleCodes = new Set<string>();
  const formatCodes = new Set<string>();
  const primaryRoleCounts = new Map<string, number>();
  const profiles = [...demoPeople, ...demoOrganizations];

  for (const role of professionalRoles) {
    if (roleCodes.has(role.code)) {
      errors.push(`Duplicate role code: ${role.code}`);
    }
    roleCodes.add(role.code);
  }

  for (const format of formatOptions) {
    if (formatCodes.has(format.code)) {
      errors.push(`Duplicate format code: ${format.code}`);
    }
    formatCodes.add(format.code);
  }

  for (const record of demoRecords) {
    if (ids.has(record.id)) {
      errors.push(`Duplicate record ID: ${record.id}`);
    }
    ids.add(record.id);

    if (record.demo !== true || record.verified !== false) {
      errors.push(`Record must be demo and unverified: ${record.id}`);
    }

    if (!record.id.startsWith("demo-")) {
      errors.push(`Demo record ID must use demo- prefix: ${record.id}`);
    }
  }

  if (profiles.length !== 30) {
    errors.push("Expected exactly 30 demo profiles.");
  }
  if (demoPeople.length !== 20 || demoOrganizations.length !== 10) {
    errors.push("Expected 20 person profiles and 10 organization profiles.");
  }

  const actors = demoPeople.filter((profile) => profile.primaryRole === "actor");
  const maleActors = actors.filter((profile) => profile.gender === "male");
  const femaleActors = actors.filter((profile) => profile.gender === "female");
  if (maleActors.length !== 1 || femaleActors.length !== 1) {
    errors.push("Expected one male and one female demo actor.");
  }

  for (const profile of profiles) {
    if (!profile.slug.trim() || slugs.has(profile.slug)) {
      errors.push(`Missing or duplicate profile slug: ${profile.slug || profile.id}`);
    }
    slugs.add(profile.slug);

    if (
      !profile.displayName.trim() ||
      !profile.headline.trim() ||
      profile.roles.length === 0 ||
      !profile.location.city.trim() ||
      !profile.location.country.trim() ||
      profile.languages.length === 0 ||
      !profile.biography.trim() ||
      profile.skills.length === 0 ||
      profile.formats.length === 0 ||
      profile.portfolio.length === 0 ||
      profile.professionalInterests.length === 0
    ) {
      errors.push(`Profile is missing required fields: ${profile.id}`);
    }
    if (!roleCodes.has(profile.primaryRole)) {
      errors.push(`Unknown primary role on ${profile.id}: ${profile.primaryRole}`);
    }
    if (!profile.roles.some(({ code }) => code === profile.primaryRole)) {
      errors.push(`Primary role must be included in roles: ${profile.id}`);
    }
    primaryRoleCounts.set(
      profile.primaryRole,
      (primaryRoleCounts.get(profile.primaryRole) ?? 0) + 1,
    );

    if (profile.kind === "person" && profile.gender) {
      if (
        !["male", "female", "non_binary", "unspecified"].includes(profile.gender)
      ) {
        errors.push(`Invalid gender code: ${profile.id}`);
      }
    }
    for (const role of profile.roles) {
      if (!roleCodes.has(role.code)) {
        errors.push(`Unknown role code on ${profile.id}: ${role.code}`);
      }
    }
    for (const format of profile.formats) {
      if (!formatCodes.has(format)) {
        errors.push(`Unknown format code on ${profile.id}: ${format}`);
      }
    }
    if (profile.contactEmail && !profile.contactEmail.endsWith("@example.test")) {
      errors.push(`Demo contact must use example.test: ${profile.id}`);
    }
    for (const item of profile.portfolio) {
      if (
        item.profileId !== profile.id ||
        item.demoPlaceholder !== true ||
        item.demo !== true ||
        item.verified !== false
      ) {
        errors.push(`Profile portfolio item must be a demo placeholder: ${item.id}`);
      }
    }
    for (const credit of profile.credits ?? []) {
      if (!credit.fictional || credit.demo !== true || credit.verified !== false) {
        errors.push(`Profile credit must be fictional and unverified: ${credit.id}`);
      }
    }
  }

  for (const role of professionalRoles) {
    if (primaryRoleCounts.get(role.code) !== 2) {
      errors.push(`Expected exactly two profiles with primary role: ${role.code}`);
    }
  }
  if (profiles.filter((profile) => profile.featured).length !== 6) {
    errors.push("Expected exactly six featured demo profiles.");
  }

  for (const asset of [...demoCredits, ...demoPortfolioItems]) {
    if (ids.has(asset.id)) {
      errors.push(`Duplicate asset ID: ${asset.id}`);
    }
    ids.add(asset.id);

    if (asset.demo !== true || asset.verified !== false) {
      errors.push(`Asset must be demo and unverified: ${asset.id}`);
    }
    if (
      !profiles.some((profile) => profile.id === asset.profileId)
    ) {
      errors.push(`Unknown profile on demo asset: ${asset.id}`);
    }
  }

  for (const project of demoProjects) {
    if (!demoPeople.some((profile) => profile.id === project.creatorProfileId)) {
      errors.push(`Unknown creator on demo project: ${project.id}`);
    }
    if (!formatCodes.has(project.format)) {
      errors.push(`Unknown format on demo project: ${project.id}`);
    }
  }

  for (const opportunity of demoOpportunities) {
    if (!roleCodes.has(opportunity.roleCode)) {
      errors.push(`Unknown role on demo opportunity: ${opportunity.id}`);
    }
    if (
      opportunity.organizationProfileId &&
      !demoOrganizations.some(
        (profile) => profile.id === opportunity.organizationProfileId,
      )
    ) {
      errors.push(`Unknown organization on demo opportunity: ${opportunity.id}`);
    }
    if (
      opportunity.projectId &&
      !demoProjects.some((project) => project.id === opportunity.projectId)
    ) {
      errors.push(`Unknown project on demo opportunity: ${opportunity.id}`);
    }
  }

  return errors;
}

if (process.env.NODE_ENV !== "production") {
  const validationErrors = validateDemoData();
  if (validationErrors.length > 0) {
    throw new Error(`Invalid marketplace demo data:\n${validationErrors.join("\n")}`);
  }
}
