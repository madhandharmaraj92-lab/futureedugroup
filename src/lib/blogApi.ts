const API_BASE = (process.env.NEXT_PUBLIC_BLOG_API_URL || "").replace(
  /\/$/,
  "",
);
const BLOGS_URL = `${API_BASE}/api/v1/blogs`;
export const WEBSITE_ID =
  process.env.NEXT_PUBLIC_BLOG_WEBSITE_ID || "futureedugroup";
export const WEBSITE_SLUG =
  process.env.NEXT_PUBLIC_BLOG_WEBSITE_SLUG || "futureedugroup";

export interface BlogSummary {
  title: string;
  slug: string;
  category: string;
  creator: string;
  excerpt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string[];
  thumbnail: string | null;
  published: boolean;
  created_at: string;
}

export interface BlogDetail extends BlogSummary {
  content: string[];
  updated_at: string;
}

export interface BlogListResponse {
  items: BlogSummary[];
  total: number;
  page: number;
  per_page: number;
}

export interface ContactPayload {
  name: string;
  email: string;
  mobile?: string;
  message?: string;
}

export class BlogApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
  }
}

const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(`${BLOGS_URL}${path}`, {
    ...init,
    cache: init?.method && init.method !== "GET" ? init.cache : "no-store",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    let message = "Unable to complete the request. Please try again.";
    try {
      const body = await response.json();
      if (typeof body.detail === "string") message = body.detail;
    } catch {
      /* keep safe public message */
    }
    throw new BlogApiError(message, response.status);
  }
  return response.json() as Promise<T>;
};

const scope = () => {
  const params = new URLSearchParams({
    website_id: WEBSITE_ID,
    website_slug: WEBSITE_SLUG,
  });
  return params;
};

export const blogApi = {
  list: (page = 1, perPage = 9) => {
    const params = scope();
    params.set("page", String(page));
    params.set("per_page", String(perPage));
    return request<BlogListResponse>(`?${params.toString()}`);
  },
  get: (slug: string) =>
    request<BlogDetail>(`/${encodeURIComponent(slug)}?${scope().toString()}`),
  contact: (payload: ContactPayload) =>
    request<{ detail: string }>("/contact", {
      method: "POST",
      body: JSON.stringify({
        website_id: WEBSITE_ID,
        slug: WEBSITE_SLUG,
        ...payload,
      }),
    }),
};
