# Architecture

## Stack

- **Vite + React 18 + TypeScript** — SPA, no SSR.
- **React Router v6** — client-side routing.
- **Tailwind CSS v3** — design tokens in `src/index.css`, theme in `tailwind.config.ts`.
- **shadcn/ui** — primitives in `src/components/ui/`.
- **Vercel** — zero-config deploy via `vercel.json` (Vite preset + SPA rewrites).

## Folder layout

```
src/
├── assets/            # Static images & uploaded brand assets (lovable-assets pointers)
├── components/
│   ├── home/          # Landing page sections (one file per section, fully modular)
│   ├── ui/            # shadcn primitives
│   └── *.tsx          # Shared layout (SiteHeader, SiteFooter, PageHero, …)
├── content/           # Typed content modules — local source of truth
│   ├── types.ts       # Shared content types (mirror Notion schema)
│   ├── treatments.ts
│   ├── faq.ts
│   ├── specials.ts
│   └── sections.ts    # Editable copy blocks keyed by stable identifier
├── lib/
│   ├── cms/           # CMS provider abstraction
│   │   ├── provider.ts  # `cms.treatments()`, `cms.faq()`, … — import this from components
│   │   ├── local.ts     # Default provider, reads from src/content/
│   │   └── notion.ts    # Stub — activate when Notion connector is linked
│   └── utils.ts
├── pages/             # Route components
└── data/              # Legacy data (blogArticles.ts) — bridged via local provider
```

## Content & CMS strategy

All dynamic content flows through `src/lib/cms/provider.ts`:

```ts
import { cms } from "@/lib/cms/provider";
const treatments = await cms.treatments();
const faq = await cms.faq();
```

Components never import raw data files directly. This is the seam that lets us
swap the local provider for a Notion provider without touching components.

### Adding Notion later — checklist

1. Enable Lovable Cloud on the project.
2. Link the Notion connector (`standard_connectors--connect`).
3. Create one Notion database per content type (Treatments, FAQ, Specials,
   Articles, Sections). Use the property names documented in
   `src/content/types.ts`.
4. Deploy a Supabase Edge Function named `cms` that proxies queries to the
   Notion gateway (`https://connector-gateway.lovable.dev/notion/v1/...`).
   Keep the Notion API key server-side — never expose it to the browser.
5. Flip `getProvider()` in `src/lib/cms/provider.ts` to return `notionProvider`
   when `import.meta.env.VITE_CMS_PROVIDER === "notion"`.

No component or route needs to change.

## Deployment

- `vercel.json` declares the Vite framework preset and a SPA rewrite so deep
  links and refreshes resolve to `index.html`.
- No experimental Vite features, no Node-only APIs in client code, no edge
  runtime dependencies — fully Vercel-compatible out of the box.

## Conventions

- **Design tokens only** — never hardcode colors. Use `bg-background`,
  `text-foreground`, `text-accent`, etc. Tokens live in `src/index.css`.
- **Modular sections** — each landing-page section is its own component in
  `src/components/home/` and reads its content from `cms`.
- **No hardcoded copy in components** — long-form copy belongs in
  `src/content/sections.ts` (or its own typed module) so it can be edited via
  CMS later.
