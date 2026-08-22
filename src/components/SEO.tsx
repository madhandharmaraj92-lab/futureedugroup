import React, { useEffect } from 'react';
import { SEOProps } from '../types';
import { SITE_CONFIG } from '../data/siteData';

export const SEO: React.FC<SEOProps> = ({
  title = '',
  description = '',
  keywords = ['Future Edu Group', 'Tourism and Hospitality', 'Hotel Management', 'Cruise Careers', 'Degree Admissions', 'Working Professionals', 'IIT Foundation', 'AI English Language Lab', 'Education India'],
  canonicalPath = '/',
  ogType = 'website',
  ogImage = '/assets/images/templatemo-eduwell.png',
  schema
}) => {
  const safeTitle = title || SITE_CONFIG.name;
  const fullTitle = safeTitle.includes(SITE_CONFIG.name)
    ? safeTitle
    : `${safeTitle} | ${SITE_CONFIG.name}`;

  const canonicalUrl = `${SITE_CONFIG.siteUrl}${canonicalPath === '/' ? '' : (canonicalPath || '')}`;
  const safeOgImage = ogImage || '/assets/images/templatemo-eduwell.png';
  const fullImageUrl = safeOgImage.startsWith('http') ? safeOgImage : `${SITE_CONFIG.siteUrl}${safeOgImage}`;

  // Client-side DOM update when route changes without full refresh
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = fullTitle;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));

      // Update canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      // Update OG Tags
      const setMetaTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      setMetaTag('og:title', fullTitle);
      setMetaTag('og:description', description);
      setMetaTag('og:url', canonicalUrl);
      setMetaTag('og:type', ogType);
      setMetaTag('og:image', fullImageUrl);
      setMetaTag('og:site_name', SITE_CONFIG.name);

      // Update Twitter Card
      const setTwitterTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      setTwitterTag('twitter:card', 'summary_large_image');
      setTwitterTag('twitter:title', fullTitle);
      setTwitterTag('twitter:description', description);
      setTwitterTag('twitter:image', fullImageUrl);

      // Update or inject JSON-LD schema
      const existingSchema = document.getElementById('json-ld-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      if (schema) {
        const script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }
  }, [fullTitle, description, keywords, canonicalUrl, ogType, fullImageUrl, schema]);

  return null;
};

/**
 * Server-side helper to generate pre-rendered head tags for initial SSR response
 */
export function generateSSRHead(props: SEOProps): string {
  const safeTitle = props.title || SITE_CONFIG.name;
  const fullTitle = safeTitle.includes(SITE_CONFIG.name)
    ? safeTitle
    : `${safeTitle} | ${SITE_CONFIG.name}`;
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${props.canonicalPath === '/' ? '' : (props.canonicalPath || '')}`;
  const safeOgImage = props.ogImage || '/assets/images/templatemo-eduwell.png';
  const fullImageUrl = safeOgImage.startsWith('http')
    ? safeOgImage
    : `${SITE_CONFIG.siteUrl}${safeOgImage}`;
  const keywordsStr = (props.keywords || ['Future Edu Group', 'Education', 'Tourism and Hospitality', 'IIT Foundation', 'AI English Lab']).join(', ');
  const safeDescription = props.description || SITE_CONFIG.description;

  let schemaScript = '';
  if (props.schema) {
    schemaScript = `<script id="json-ld-schema" type="application/ld+json">${JSON.stringify(props.schema)}</script>`;
  }

  return `
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(safeDescription)}" />
    <meta name="keywords" content="${escapeHtml(keywordsStr)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${props.ogType || 'website'}" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(safeDescription)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${fullImageUrl}" />
    <meta property="og:site_name" content="${escapeHtml(SITE_CONFIG.name)}" />

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(safeDescription)}" />
    <meta name="twitter:image" content="${fullImageUrl}" />

    ${schemaScript}
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
