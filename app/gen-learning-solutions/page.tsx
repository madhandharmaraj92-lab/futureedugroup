import { SiteLayout } from '../../src/App';
import { createPageMetadata } from '../../src/lib/metadata';
import { GenLearningSolutionsPage } from '../../src/views/GenLearningSolutionsPage';

export const metadata = createPageMetadata({ title: 'Future Gen Learning Solutions | Future Edu Group', description: 'IIT Foundation curriculum, AI English language labs, and future-ready learning solutions for schools.', path: '/gen-learning-solutions' });

export default function GenLearningSolutionsRoute() {
  return <SiteLayout><GenLearningSolutionsPage /></SiteLayout>;
}
