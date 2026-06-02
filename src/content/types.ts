/**
 * Shared content types — the single source of truth for any dynamic content
 * rendered on the site. These shapes are designed to map 1:1 to Notion
 * database properties so the local provider can be swapped for a Notion
 * provider without changing components.
 */

export interface ContentMeta {
  id: string;
  slug: string;
  published?: boolean;
  order?: number;
  updatedAt?: string;
}

export interface ServiceTreatment {
  name: string;
  description?: string;
  duration?: string;
  price?: string;
}

export interface ServiceCategory extends ContentMeta {
  title: string;
  tagline: string;
  description: string;
  image: string;
  treatments: ServiceTreatment[];
  /** Optional grouping label (e.g. "Brows & Lashes") */
  group?: string;
  /** Marks a signature/hero category for featured layout treatment */
  featured?: boolean;
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
  key: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
}
