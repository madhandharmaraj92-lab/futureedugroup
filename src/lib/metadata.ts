import type { Metadata } from "next";

const siteName = "Future Edu Group";
const defaultImage = "/assets/images/templatemo-eduwell.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/**
 * Keeps static route metadata consistent and available in the exported HTML.
 * Client-side metadata updates are not reliable for crawlers or link previews.
 */
export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
