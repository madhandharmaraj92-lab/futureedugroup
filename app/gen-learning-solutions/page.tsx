import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { GenLearningSolutionsPage } from '../../src/views/GenLearningSolutionsPage';

export const metadata: Metadata = { title: 'Future Gen Learning Solutions | Future Edu Group', description: 'IIT Foundation curriculum, AI English language labs, and future-ready learning solutions for schools.' };

export default function GenLearningSolutionsRoute() {
  return <SiteLayout><GenLearningSolutionsPage /></SiteLayout>;
}
