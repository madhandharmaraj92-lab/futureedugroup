/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://futureedugroup.in',
  // Match Next's `output: 'export'` mode so the generator reads and writes
  // the deployable `out/` directory rather than stale files under `public/`.
  output: 'export',
  outDir: 'out',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/blogs/__build-placeholder__'],
  additionalPaths: async () => {
    const apiBase = (process.env.BLOG_BUILD_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || '').replace(/\/$/, '');
    const websiteId = process.env.NEXT_PUBLIC_BLOG_WEBSITE_ID || 'futureedugroup';
    const websiteSlug = process.env.NEXT_PUBLIC_BLOG_WEBSITE_SLUG || 'futureedugroup';
    if (!apiBase) {
      throw new Error('Sitemap generation requires BLOG_BUILD_API_URL or NEXT_PUBLIC_BLOG_API_URL.');
    }
    const paths = [];
    let page = 1;
    while (true) {
      const params = new URLSearchParams({ website_id: websiteId, website_slug: websiteSlug, page: String(page), per_page: '50' });
      let response;
      for (let attempt = 1; attempt <= 3; attempt += 1) {
        response = await fetch(`${apiBase}/api/v1/blogs?${params.toString()}`);
        if (response.ok || response.status < 500) break;
      }
      if (!response?.ok) throw new Error(`Blog sitemap fetch failed with HTTP ${response?.status || 'unavailable'}.`);
      const result = await response.json();
      for (const post of result.items || []) paths.push({ loc: `/blogs/${post.slug}`, lastmod: post.updated_at || post.created_at, changefreq: 'weekly', priority: 0.7 });
      if (page * result.per_page >= result.total) break;
      page += 1;
    }
    return paths;
  },
};

export default config;
