import type { Metadata } from 'next';
import { SiteLayout } from '../src/App';
import { HomePage } from '../src/views/HomePage';

export const metadata: Metadata = {
  title: 'Future Edu Group | Learn. Experience. Explore. Build a Global Career.',
  description: 'Future Edu Group powers tourism and hospitality education, higher education degree admissions, and K-12 STEM and AI learning solutions.',
};

export default function Home() {
  return <SiteLayout><HomePage /></SiteLayout>;
}
