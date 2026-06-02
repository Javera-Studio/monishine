## Goal
Replace the old service IA with Monishine's 8 premium service categories. Homepage shows category cards; each category gets its own subpage with treatments + pricing. Old service pages/routes are removed. Content driven through the existing CMS layer so Notion can take over later.

## New content model (in `src/content/`)

Extend `src/content/types.ts`:
- `ServiceCategory { id, slug, order, title, tagline, description, image, treatments: ServiceTreatment[] }`
- `ServiceTreatment { name, description?, duration?, price? }`

New `src/content/serviceCategories.ts` — single source of truth for all 8 categories and their treatments:
1. `augenbrauen-wimpern` — Augenbrauen & Wimpernbehandlungen (Brow Lifting, Lash Lifting, Brow Styling, Browshine, Tinting, Glow Combo)
2. `wimpernverlaengerung` — Wimpernverlängerung (Classic, Volume, Wispy, Refill)
3. `permanent-make-up` — Permanent Make-up & PMU (Powder Brows, Lip Blush, PMU, Refresh, Corrections)
4. `pmu-removal` — PMU Removal (Removal, Correction/Removal)
5. `gesichtsbehandlungen` — Gesichtsbehandlungen (Aquafacial, BB Glow, Microneedling, Tiefenreinigung, Glow, Skin)
6. `haarentfernung` — Dauerhafte Haarentfernung (ICE Diodenlaser, Ladies, Gentleman, Packages, Body Area)
7. `koerperbehandlungen` — Körperbehandlungen (Body, Body Glow)
8. `zahnaufhellung` — Zahnaufhellung (Teeth Whitening)
9. `fineline-tattoo` — Fineline Tattoo

(That's 9 — matches the list above; "PMU Remover" is its own category as written.)

Extend `CmsProvider` + `localProvider` with `getCategories()` and `getCategoryBySlug(slug)`. Re-export via `cms.categories()` / `cms.category(slug)`.

## Homepage

Rewrite `src/components/home/Treatments.tsx` → renders the 9 categories from `cms.categories()` as elegant editorial cards (image + title + tagline + "Entdecken" link). Keep the existing alternating editorial rhythm and the "Individuelle Treatments für Ladies & Gentlemen" line above the grid.

Remove `Concerns`, `SkinAnalysis`, `Hautcoaching` from `pages/Index.tsx` only if they reference removed routes — actually keep `Hero`, `Treatments` (new), `About`, `Testimonials`, `Booking`. Drop `Concerns`, `SkinAnalysis`, `Hautcoaching` sections from homepage (they all link into removed old service tree).

## New routing

`src/pages/Leistungen.tsx` — replace contents with category index (same cards as homepage, full grid).

New `src/pages/LeistungenCategory.tsx` — dynamic page using `useParams().slug`, calls `cms.category(slug)`, renders:
- PageHero with category title + tagline + image
- "Ladies & Gentlemen" eyebrow line
- Treatment list with name / description / duration / price
- Booking CTA

Add route `/leistungen/:slug` in `App.tsx`. Remove all old service routes and their page files:
- `Akne`, `Microneedling`, `Fruchtsaeure`, `AntiAging`, `Problemhaut`, `Microblading`, `Gesichtsbehandlung`, `Wimpernkranzverdichtung`, `Hautanalyse`, `Hautcoaching` + 3 subpages, `Produkte` + 9 subpages, `Preise`.

## Header / footer cleanup

`SiteHeader` links → `Leistungen`, `Über uns`, `Journal`, `Kontakt` only. Mobile menu same.
`SiteFooter` — update service column to the 9 new categories (or top 6 + "Alle Leistungen").

## Treatment images

Reuse existing assets where they fit (treatment-skin, antiaging, microneedling, fruchtsaeure, pmu, gesichtsbehandlung, studio). For categories without a fitting asset (lashes, hair removal, body, teeth, fineline), generate placeholder editorial images via imagegen (cream/beige/taupe tones).

## Cleanup

Delete `src/content/treatments.ts` (replaced by serviceCategories). Update `localProvider.getTreatments` to flatten categories or remove from interface. Remove `blogArticles` references that point to removed routes only if they break — otherwise leave Journal intact.

## Out of scope
- No Notion wiring (structure is ready)
- No backend changes
- Blog/Journal stays as-is
- Über mich, Kontakt, Impressum, Datenschutz stay