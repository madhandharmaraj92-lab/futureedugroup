import { preload } from 'react-dom';
import { SiteLayout } from '../src/App';
import { createPageMetadata } from '../src/lib/metadata';
import { HomePage } from '../src/views/HomePage';

export const metadata = createPageMetadata({
  title: 'Future Edu Group | Learn. Experience. Explore. Build a Global Career.',
  description: 'Future Edu Group powers tourism and hospitality education, higher education degree admissions, and K-12 STEM and AI learning solutions.',
  path: '/',
});

export default function Home() {
  preload('/assets/images/team-member-01.webp', {
    as: 'image',
    type: 'image/webp',
    fetchPriority: 'high',
  });

  return <SiteLayout><HomePage /></SiteLayout>;
}
