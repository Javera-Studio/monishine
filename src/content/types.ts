/**
 * Shared content types — the single source of truth for any dynamic content
 * rendered on the site. These shapes are designed to map 1:1 to Notion
 * database properties so the local provider can be swapped for a Notion
 * provider without changing components.
 *
 * Notion mapping reference (see src/lib/cms/notion.ts):
 *   - `id`        ← Notion page id
 *   - `slug`      ← rich_text "Slug"
 *   - `title`     ← title "Name"
 *   - rich text fields ← rich_text
 *   - images      ← files & media (first file url)
 *   - tags        ← multi_select
 *   - order       ← number "Order"
 *   - published   ← checkbox "Published"
 */

export interface ContentMeta {
  id: string;
  slug: string;
  published?: boolean;
  order?: number;
  updatedAt?: string;
}

export interface Treatment extends ContentMeta {
  title: string;
  description: string;
  duration?: string;
  price?: string;
  image: string;
  href: string;
  category?: string;
  tags?: string[];
}

export interface FaqItem extends ContentMeta {
  question: string;
  answer: string;
  category?: string;
}

export interface Special extends ContentMeta {
  title: string;
  description: string;
  image?: string;
  validUntil?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface Article extends ContentMeta {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  body: { heading?: string; text: string }[];
  relatedHref?: string;
}

export interface EditableSection extends ContentMeta {
  /** Stable key used by components to look up the section (e.g. "hero", "about-intro") */
  key: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
}
