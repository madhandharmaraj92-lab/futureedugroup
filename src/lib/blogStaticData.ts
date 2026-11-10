import { randomUUID } from "node:crypto";
import type { BlogDetail, BlogListResponse } from "./blogApi";

const apiBase = (
  process.env.BLOG_BUILD_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || ""
).replace(/\/$/, "");
const websiteId = process.env.NEXT_PUBLIC_BLOG_WEBSITE_ID || "futureedugroup";
const websiteSlug = process.env.NEXT_PUBLIC_BLOG_WEBSITE_SLUG || "futureedugroup";

// Next's static export requires cached fetches. A per-process key prevents
// the persistent fetch cache from reusing responses from an earlier build.
const buildFetchOptions: RequestInit = {
  cache: "force-cache",
  headers: { "x-futureedu-build": randomUUID(), "cache-control": "no-cache" },
};

const scopeParams = (page?: number, perPage?: number) => {
  const params = new URLSearchParams({
    website_id: websiteId,
    website_slug: websiteSlug,
  });
  if (page) params.set("page", String(page));
  if (perPage) params.set("per_page", String(perPage));
  return params;
};

/** Data used while exporting the static site; never called from the browser. */
export async function getStaticBlogList(page = 1, perPage = 9) {
  if (!apiBase) {
    throw new Error(
      "Blog static generation requires BLOG_BUILD_API_URL or NEXT_PUBLIC_BLOG_API_URL.",
    );
  }
  const response = await fetch(
    `${apiBase}/api/v1/blogs?${scopeParams(page, perPage).toString()}`,
    buildFetchOptions,
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json() as Promise<BlogListResponse>;
}

export async function getStaticBlog(slug: string) {
  if (!apiBase) {
    throw new Error(
      "Blog static generation requires BLOG_BUILD_API_URL or NEXT_PUBLIC_BLOG_API_URL.",
    );
  }
  const response = await fetch(
    `${apiBase}/api/v1/blogs/${encodeURIComponent(slug)}?${scopeParams().toString()}`,
    buildFetchOptions,
  );
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json() as Promise<BlogDetail>;
}

export async function getStaticBlogSlugs() {
  const slugs: { slug: string }[] = [];
  let page = 1;
  while (true) {
    const result = await getStaticBlogList(page, 50);
    slugs.push(...result.items.map(({ slug }) => ({ slug })));
    if (page * result.per_page >= result.total) return slugs;
    page += 1;
  }
}
