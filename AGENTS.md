# MarathiNEX Project Guidelines

## Architecture

- Use the Next.js App Router in `app/` for routes and layouts.
- Keep route files focused on page composition. Put reusable, domain-specific presentation in `components/landing/`; keep shared accessible primitives in `components/ui/`.
- Keep Supabase browser, server, and session-proxy integrations in `lib/supabase/`. Prefer Server Components and use Client Components only for browser interactions.
- Keep shared, framework-independent helpers in `lib/`.

## Product Scope

- Preserve the existing Supabase starter routes, authentication helpers, session proxy, environment settings, and GitHub connection.
- Do not add database schemas or queries, payments, product registration, or identity verification unless explicitly requested.
- Do not deploy or change deployment or repository settings without explicit approval.
- Keep sample presentation content clearly illustrative; do not imply that unbuilt features persist or are live.

## Design and Code

- Build mobile-first with TypeScript, Tailwind CSS, and the existing component patterns.
- Use the design tokens in `app/globals.css` and `tailwind.config.ts`: white `#FFFFFF`, ink `#16191E`, red `#DC1023`, and canvas `#F5F6F8`.
- Favor a minimal, cinematic visual language, semantic HTML, accessible controls, and responsive layouts.
- Preserve strict TypeScript and avoid introducing dependencies for functionality already covered by the existing stack.

## Validation

- Run `npm run lint` and `npm run build` for application changes.
- Run `npm run dev` for local development.
