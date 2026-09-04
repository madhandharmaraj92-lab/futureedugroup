/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://futureedugroup.in',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outputDir: 'out',
  exclude: ['/blogs/__build-placeholder__'],
  additionalPaths: async () => {
    const apiBase = (process.env.BLOG_BUILD_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || '').replace(/\/$/, '');
    const websiteId = process.env.NEXT_PUBLIC_BLOG_WEBSITE_ID || 'futureedugroup';
    const websiteSlug = process.env.NEXT_PUBLIC_BLOG_WEBSITE_SLUG || 'futureedugroup';
    if (!apiBase) return [];
    try {
      const paths = [];
      let page = 1;
      while (true) {
        const params = new URLSearchParams({ website_id: websiteId, website_slug: websiteSlug, page: String(page), per_page: '50' });
        let response;
        for (let attempt = 1; attempt <= 3; attempt += 1) {
          response = await fetch(`${apiBase}/api/v1/blogs?${params.toString()}`);
          if (response.ok || response.status < 500) break;
        }
        if (!response?.ok) throw new Error(`HTTP ${response?.status || 'unavailable'}`);
        const result = await response.json();
        for (const post of result.items || []) paths.push({ loc: `/blogs/${post.slug}`, lastmod: post.created_at, changefreq: 'weekly', priority: 0.7 });
        if (page * result.per_page >= result.total) break;
        page += 1;
      }
      return paths;
    } catch (error) {
      console.warn(`[next-sitemap] Blog API unavailable; generated the static sitemap without blog detail URLs. ${error instanceof Error ? error.message : ''}`);
      return [];
    }
  },
};

export default config;
