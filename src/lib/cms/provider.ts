/**
 * CMS provider abstraction.
 *
 * Every component that renders dynamic content should import from this file
 * — never from a concrete data source. This keeps the swap from local data
 * to Notion (or any future CMS) to a single line change in `getProvider()`.
 *
 * Today: `local` provider, fully static, zero network.
 * Tomorrow: enable `notion` provider once the Notion connector is linked
 * and an edge function is deployed (see src/lib/cms/notion.ts).
 */

import type {
  Article,
  EditableSection,
  FaqItem,
  Special,
  Treatment,
} from "@/content/types";

export interface CmsProvider {
  name: string;
  getTreatments: () => Promise<Treatment[]>;
  getTreatmentBySlug: (slug: string) => Promise<Treatment | null>;
  getFaq: (category?: string) => Promise<FaqItem[]>;
  getSpecials: () => Promise<Special[]>;
  getArticles: () => Promise<Article[]>;
  getArticleBySlug: (slug: string) => Promise<Article | null>;
  getSection: (key: string) => Promise<EditableSection | null>;
}

import { localProvider } from "./local";

let cached: CmsProvider | null = null;

export const getProvider = (): CmsProvider => {
  if (cached) return cached;

  // Future: switch to notionProvider when import.meta.env.VITE_CMS_PROVIDER === "notion"
  // and a Supabase Edge Function at /functions/v1/cms is deployed.
  cached = localProvider;
  return cached;
};

// Convenience re-exports for components
export const cms = {
  treatments: () => getProvider().getTreatments(),
  treatment: (slug: string) => getProvider().getTreatmentBySlug(slug),
  faq: (category?: string) => getProvider().getFaq(category),
  specials: () => getProvider().getSpecials(),
  articles: () => getProvider().getArticles(),
  article: (slug: string) => getProvider().getArticleBySlug(slug),
  section: (key: string) => getProvider().getSection(key),
};
