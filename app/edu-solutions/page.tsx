import { SiteLayout } from '../../src/App';
import { createPageMetadata } from '../../src/lib/metadata';
import { EduSolutionsPage } from '../../src/views/EduSolutionsPage';

export const metadata = createPageMetadata({ title: 'Higher Education Solutions | Future Edu Group', description: 'UG, PG, and working-professional degree admission guidance with end-to-end student support.', path: '/edu-solutions' });

export default function EduSolutionsRoute() {
  return <SiteLayout><EduSolutionsPage /></SiteLayout>;
}
