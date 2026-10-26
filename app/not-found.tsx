import type { Metadata } from 'next';
import { SiteLayout } from '../src/App';
import { NotFoundPage } from '../src/views/NotFoundPage';

export const metadata: Metadata = {
  title: 'Page Not Found | Future Edu Group',
  description: 'The requested Future Edu Group page could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <SiteLayout><NotFoundPage /></SiteLayout>;
}
