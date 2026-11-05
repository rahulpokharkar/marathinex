import type { FormatCode, ProfessionalRole, RoleCode } from "./types";

export const professionalRoles: readonly ProfessionalRole[] = [
  { code: "actor", label: "Actors" },
  { code: "writer", label: "Writers" },
  { code: "director", label: "Directors" },
  { code: "independent_producer", label: "Independent Producers" },
  { code: "production_house", label: "Production Houses" },
  { code: "financier_investor", label: "Financiers / Investors" },
  { code: "casting_director", label: "Casting Directors" },
  { code: "cinematographer", label: "Cinematographers" },
  { code: "editor", label: "Editors" },
  { code: "vfx_postproduction_studio", label: "VFX / Post-production Studios" },
  { code: "distributor_sales_company", label: "Distributors / Sales Companies" },
  { code: "ott_content_acquisition", label: "OTT / Content Acquisition" },
  { code: "sound_music_professional", label: "Sound / Music Professionals" },
  {
    code: "art_director_production_designer",
    label: "Art Directors / Production Designers",
  },
  {
    code: "production_service_provider",
    label: "Production Service Providers",
  },
] as const;

export const formatOptions: readonly {
  code: FormatCode;
  label: string;
}[] = [
  { code: "feature_film", label: "Feature film" },
  { code: "short_film", label: "Short film" },
  { code: "documentary", label: "Documentary" },
  { code: "web_series", label: "Web series" },
  { code: "television", label: "Television" },
  { code: "microdrama", label: "Microdrama" },
  { code: "animation", label: "Animation" },
  { code: "theatre", label: "Theatre" },
];

export const roleByCode: ReadonlyMap<RoleCode, ProfessionalRole> = new Map(
  professionalRoles.map((role) => [role.code, role]),
);
