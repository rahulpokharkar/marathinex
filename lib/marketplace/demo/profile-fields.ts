import { roleByCode } from "../roles";
import type { PersonProfile, PortfolioItem, RoleCode } from "../types";

type SharedProfileFields = Pick<
  PersonProfile,
  "slug" | "headline" | "primaryRole" | "roles" | "portfolio" | "featured"
>;

const headlines: Record<RoleCode, string> = {
  actor: "Screen performer for character-led films and series",
  writer: "Screenwriter developing original film and episodic stories",
  director: "Director shaping visual stories for screen",
  independent_producer: "Independent producer focused on story-led productions",
  production_house: "Independent production house for original screen stories",
  financier_investor: "Film finance professional exploring creative ventures",
  casting_director: "Casting professional connecting stories with talent",
  cinematographer: "Cinematographer crafting visual language for screen",
  editor: "Picture editor shaping story through rhythm and image",
  vfx_postproduction_studio: "Post-production studio for finishing and visual effects",
  distributor_sales_company: "Film sales and distribution company profile",
  ott_content_acquisition: "Content acquisition and programming professional",
  sound_music_professional: "Sound and music professional for screen stories",
  art_director_production_designer: "Production designer building expressive screen worlds",
  production_service_provider: "Production services team supporting film crews",
};

function slugify(value: string): string {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  if (!slug) {
    throw new Error(`Cannot create a profile slug from: ${value}`);
  }

  return slug;
}

export function createDemoProfileFields(
  id: string,
  displayName: string,
  roleCodes: RoleCode | readonly RoleCode[],
  featured = false,
): SharedProfileFields {
  const codes = typeof roleCodes === "string" ? [roleCodes] : [...roleCodes];
  if (codes.length === 0) {
    throw new Error(`Demo profile must have a role: ${id}`);
  }

  const roles = codes.map((code) => {
    const role = roleByCode.get(code);
    if (!role) {
      throw new Error(`Unknown demo profile role: ${code}`);
    }
    return role;
  });
  const slug = slugify(displayName);
  const portfolio: PortfolioItem[] = [
    {
      id: `demo-portfolio-${slug}`,
      profileId: id,
      title: "Illustrative portfolio placeholder",
      kind: "document",
      description: "Placeholder only; no external work or real person is depicted.",
      demoPlaceholder: true,
      demo: true,
      verified: false,
    },
  ];

  return {
    slug,
    headline: headlines[codes[0]],
    primaryRole: codes[0],
    roles,
    portfolio,
    featured,
  };
}
