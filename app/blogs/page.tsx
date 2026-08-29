import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { BlogsPage } from '../../src/views/BlogsPage';

export const metadata: Metadata = {
  title: 'Education Insights & Articles | Future Edu Group',
  description: 'Read Future Edu Group articles covering education, hospitality careers, higher education, STEM, and AI-enabled learning.',
};

export default function BlogsRoute() {
  return <SiteLayout><BlogsPage /></SiteLayout>;
}
