import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { AboutUsPage } from '../../src/views/AboutUsPage';

export const metadata: Metadata = { title: 'About Us | Future Edu Group', description: 'Learn about Future Edu Group and our education, career, and school-learning initiatives.' };

export default function AboutUsRoute() {
  return <SiteLayout><AboutUsPage /></SiteLayout>;
}
