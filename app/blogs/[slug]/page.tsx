import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteLayout } from '../../../src/App';
import { JsonLd } from '../../../src/components/JsonLd';
import { getStaticBlog, getStaticBlogSlugs } from '../../../src/lib/blogStaticData';
import { BlogsPage } from '../../../src/views/BlogsPage';

// Next static export rejects an empty dynamic-route parameter list. This is a
// build sentinel only; the static-host configuration returns 404 for it.
const buildPlaceholderSlug = '__build-placeholder__';

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getStaticBlogSlugs();
  return slugs.length ? slugs : [{ slug: buildPlaceholderSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === buildPlaceholderSlug) {
    return { robots: { index: false, follow: false } };
  }
  const post = await getStaticBlog(slug);
  const title = post?.meta_title || post?.title || 'Education Article | Future Edu Group';
  const description = post?.meta_description || post?.excerpt || 'Read education insights from Future Edu Group.';
  const image = post?.thumbnail || '/assets/images/templatemo-eduwell.png';

  return {
    title,
    description,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `/blogs/${slug}`,
      siteName: 'Future Edu Group',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // `output: 'export'` requires a generated dynamic-route parameter even
  // when no posts are published. Nginx returns 404 for this build-only path.
  if (slug === buildPlaceholderSlug) return null;
  const post = await getStaticBlog(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt || undefined,
    image: post.thumbnail || undefined,
    datePublished: post.created_at,
    dateModified: post.updated_at,
    mainEntityOfPage: `https://futureedugroup.in/blogs/${post.slug}`,
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Future Edu Group',
      url: 'https://futureedugroup.in',
    },
  };

  return (
    <SiteLayout>
      <>
        <JsonLd id="article-schema" data={articleSchema} />
        <BlogsPage initialSlug={slug} initialPost={post} />
      </>
    </SiteLayout>
  );
}
