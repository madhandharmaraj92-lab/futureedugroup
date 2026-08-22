import type { MetadataRoute } from 'next';

const siteUrl = 'https://futureedugroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/about-us', '/contact-us', '/edu-solutions', '/gen-learning-solutions', '/our-services', '/student-gallery', '/tourism-hospitality'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
