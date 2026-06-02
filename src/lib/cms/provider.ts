/**
 * CMS provider abstraction. Components should import `cms` from here only.
 * Today: local provider (static modules). Tomorrow: notion provider via
 * a Supabase Edge Function — without changing any consumer.
 */

import type {
  Article,
  EditableSection,
  FaqItem,
  ServiceCategory,
  Special,
} from "@/content/types";

export interface CmsProvider {
  name: string;
  getCategories: () => Promise<ServiceCategory[]>;
  getCategoryBySlug: (slug: string) => Promise<ServiceCategory | null>;
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
  cached = localProvider;
  return cached;
};

export const cms = {
  categories: () => getProvider().getCategories(),
  category: (slug: string) => getProvider().getCategoryBySlug(slug),
  faq: (category?: string) => getProvider().getFaq(category),
  specials: () => getProvider().getSpecials(),
  articles: () => getProvider().getArticles(),
  article: (slug: string) => getProvider().getArticleBySlug(slug),
  section: (key: string) => getProvider().getSection(key),
};
