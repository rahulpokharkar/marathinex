export type DemoRecord = {
  id: string;
  demo: true;
  verified: false;
};

export type RoleCode =
  | "actor"
  | "writer"
  | "director"
  | "independent_producer"
  | "production_house"
  | "financier_investor"
  | "casting_director"
  | "cinematographer"
  | "editor"
  | "vfx_postproduction_studio"
  | "distributor_sales_company"
  | "ott_content_acquisition"
  | "sound_music_professional"
  | "art_director_production_designer"
  | "production_service_provider";

export type FormatCode =
  | "feature_film"
  | "short_film"
  | "documentary"
  | "web_series"
  | "television"
  | "microdrama"
  | "animation"
  | "theatre";

export interface ProfessionalRole {
  code: RoleCode;
  label: string;
}

export interface ProfileLocation {
  city: string;
  region?: string;
  country: string;
}

export interface Credit extends DemoRecord {
  profileId: string;
  title: string;
  format: FormatCode;
  roleDescription: string;
  description: string;
  fictional: true;
}

export interface PortfolioItem extends DemoRecord {
  profileId: string;
  title: string;
  kind: "image" | "video" | "audio" | "document" | "link";
  description: string;
  demoPlaceholder: true;
  href?: string;
}

export interface PersonProfile extends DemoRecord {
  kind: "person";
  slug: string;
  displayName: string;
  headline: string;
  gender?: "male" | "female" | "non_binary" | "unspecified";
  primaryRole: RoleCode;
  roles: ProfessionalRole[];
  location: ProfileLocation;
  languages: string[];
  biography: string;
  skills: string[];
  credits?: Credit[];
  portfolio: PortfolioItem[];
  professionalInterests: string[];
  availability: "open_to_opportunities" | "limited" | "not_listed";
  contactEmail?: string;
  formats: FormatCode[];
  featured: boolean;
}

export interface OrganizationProfile extends DemoRecord {
  kind: "organization";
  slug: string;
  displayName: string;
  headline: string;
  primaryRole: RoleCode;
  roles: ProfessionalRole[];
  location: ProfileLocation;
  languages: string[];
  biography: string;
  skills: string[];
  credits?: Credit[];
  portfolio: PortfolioItem[];
  professionalInterests: string[];
  availability: "open_to_opportunities" | "limited" | "not_listed";
  contactEmail?: string;
  formats: FormatCode[];
  featured: boolean;
  organizationType: "company" | "studio" | "collective" | "agency";
  markText: string;
}

export interface Project extends DemoRecord {
  title: string;
  format: FormatCode;
  logline: string;
  description: string;
  creatorProfileId: string;
  status: "in_development" | "seeking_collaborators";
  skills?: string[];
  location?: ProfileLocation;
}

export interface Opportunity extends DemoRecord {
  title: string;
  description: string;
  roleCode: RoleCode;
  format?: FormatCode;
  organizationProfileId?: string;
  projectId?: string;
  location?: ProfileLocation;
  status: "illustrative" | "not_accepting_applications";
}
