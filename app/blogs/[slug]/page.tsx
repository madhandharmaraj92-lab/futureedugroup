import type { Metadata } from 'next';
import { SiteLayout } from '../../../src/App';
import { BlogsPage } from '../../../src/views/BlogsPage';

type BlogItem = { slug: string; title: string; meta_title: string | null; excerpt: string | null; meta_description: string | null };
const apiBase = (process.env.BLOG_BUILD_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || '').replace(/\/$/, '');
const websiteId = process.env.NEXT_PUBLIC_BLOG_WEBSITE_ID || 'futureedugroup';
const websiteSlug = process.env.NEXT_PUBLIC_BLOG_WEBSITE_SLUG || 'futureedugroup';

const listBlogs = async (page: number) => {
  const params = new URLSearchParams({ website_id: websiteId, website_slug: websiteSlug, page: String(page), per_page: '50' });
  const response = await fetch(`${apiBase}/api/v1/blogs?${params.toString()}`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

const getBlog = async (slug: string): Promise<BlogItem | null> => {
  if (!apiBase) return null;
  const scope = new URLSearchParams({ website_id: websiteId, website_slug: websiteSlug });
  const response = await fetch(`${apiBase}/api/v1/blogs/${encodeURIComponent(slug)}?${scope.toString()}`, { cache: 'no-store' });
  return response.ok ? response.json() : null;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  if (!apiBase) return [];
  try {
    const slugs: { slug: string }[] = [];
    let page = 1;
    while (true) {
      const result = await listBlogs(page);
      for (const post of result.items || []) slugs.push({ slug: post.slug });
      if (page * result.per_page >= result.total) break;
      page += 1;
    }
    return slugs;
  } catch (error) {
    console.warn(`[blogs] Blog API unavailable while generating static routes. ${error instanceof Error ? error.message : ''}`);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug).catch(() => null);
  return { title: post?.meta_title || post?.title || 'Education Article | Future Edu Group', description: post?.meta_description || post?.excerpt || undefined, alternates: { canonical: `/blogs/${slug}` } };
}

export default async function BlogDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SiteLayout><BlogsPage initialSlug={slug} /></SiteLayout>;
}
