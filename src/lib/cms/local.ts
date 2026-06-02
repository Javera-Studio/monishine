/**
 * Local CMS provider — sources content from typed modules in `src/content/`.
 * Async signatures mirror the future Notion provider.
 */

import type { CmsProvider } from "./provider";
import { serviceCategories } from "@/content/serviceCategories";
import { faqItems } from "@/content/faq";
import { specials } from "@/content/specials";
import { sections } from "@/content/sections";

export const localProvider: CmsProvider = {
  name: "local",

  async getCategories() {
    return serviceCategories
      .filter((c) => c.published !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  },

  async getCategoryBySlug(slug) {
    return serviceCategories.find((c) => c.slug === slug) ?? null;
  },

  async getFaq(category) {
    return faqItems.filter(
      (f) => f.published !== false && (!category || f.category === category),
    );
  },

  async getSpecials() {
    return specials.filter((s) => s.published !== false);
  },

  async getArticles() {
    const mod = await import("@/data/blogArticles");
    const blogArticles = mod.default;
    return blogArticles.map((a) => ({
      id: a.slug,
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      category: a.category,
      image: a.image,
      body: a.content.map((c) => ({ heading: c.heading, text: c.text })),
      relatedHref: a.relatedTo,
    }));
  },

  async getArticleBySlug(slug) {
    const all = await this.getArticles();
    return all.find((a) => a.slug === slug) ?? null;
  },

  async getSection(key) {
    return sections.find((s) => s.key === key) ?? null;
  },
};
