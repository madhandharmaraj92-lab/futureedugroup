import { SiteLayout } from '../../src/App';
import { createPageMetadata } from '../../src/lib/metadata';
import { AboutUsPage } from '../../src/views/AboutUsPage';

export const metadata = createPageMetadata({ title: 'About Us | Future Edu Group', description: 'Learn about Future Edu Group and our education, career, and school-learning initiatives.', path: '/about-us' });

export default function AboutUsRoute() {
  return <SiteLayout><AboutUsPage /></SiteLayout>;
}
