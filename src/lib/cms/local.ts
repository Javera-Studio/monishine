/**
 * Local CMS provider — sources content from typed modules in `src/content/`.
 *
 * Async signatures match the future Notion provider so components don't need
 * to change when we swap. Each call resolves synchronously today.
 */

import type { CmsProvider } from "./provider";
import { treatments } from "@/content/treatments";
import { faqItems } from "@/content/faq";
import { specials } from "@/content/specials";
import { sections } from "@/content/sections";

export const localProvider: CmsProvider = {
  name: "local",

  async getTreatments() {
    return treatments
      .filter((t) => t.published !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  },

  async getTreatmentBySlug(slug) {
    return treatments.find((t) => t.slug === slug) ?? null;
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
    // Bridge to existing blog data until the editorial schema is unified
    const { blogArticles } = await import("@/data/blogArticles");
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
