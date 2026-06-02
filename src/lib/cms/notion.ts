/**
 * Notion CMS provider — STUB.
 *
 * To activate:
 *   1. Enable Lovable Cloud (Supabase) on the project.
 *   2. Link the Notion connector via standard_connectors--connect.
 *   3. Create databases in Notion for: Treatments, FAQ, Specials, Articles, Sections.
 *      Recommended properties per database — see src/content/types.ts.
 *   4. Deploy a Supabase Edge Function at `cms` that proxies queries to the
 *      Notion gateway (avoids exposing the API key client-side and handles
 *      OAuth token refresh automatically). Pattern:
 *
 *        POST https://connector-gateway.lovable.dev/notion/v1/databases/{db}/query
 *        Headers:
 *          Authorization: Bearer ${LOVABLE_API_KEY}
 *          X-Connection-Api-Key: ${NOTION_API_KEY}
 *
 *   5. Set the env var VITE_CMS_PROVIDER=notion and the database IDs in
 *      VITE_NOTION_DB_TREATMENTS, VITE_NOTION_DB_FAQ, etc.
 *   6. Replace the body of getProvider() in provider.ts to return notionProvider.
 *
 * Until activated, this file is intentionally inert.
 */

import type { CmsProvider } from "./provider";

const CMS_ENDPOINT = "/api/cms"; // proxied through Supabase Edge Function

async function fetchCollection<T>(collection: string, params?: Record<string, string>): Promise<T[]> {
  const qs = new URLSearchParams({ collection, ...(params ?? {}) }).toString();
  const res = await fetch(`${CMS_ENDPOINT}?${qs}`);
  if (!res.ok) throw new Error(`CMS ${collection} fetch failed: ${res.status}`);
  return res.json();
}

export const notionProvider: CmsProvider = {
  name: "notion",
  getCategories: () => fetchCollection("categories"),
  getCategoryBySlug: async (slug) => {
    const all = await fetchCollection<any>("categories", { slug });
    return all[0] ?? null;
  },
  getFaq: (category) =>
    fetchCollection("faq", category ? { category } : undefined),
  getSpecials: () => fetchCollection("specials"),
  getArticles: () => fetchCollection("articles"),
  getArticleBySlug: async (slug) => {
    const all = await fetchCollection<any>("articles", { slug });
    return all[0] ?? null;
  },
  getSection: async (key) => {
    const all = await fetchCollection<any>("sections", { key });
    return all[0] ?? null;
  },
};
