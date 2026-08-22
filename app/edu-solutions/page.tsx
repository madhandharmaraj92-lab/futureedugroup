import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { EduSolutionsPage } from '../../src/views/EduSolutionsPage';

export const metadata: Metadata = { title: 'Higher Education Solutions | Future Edu Group', description: 'UG, PG, and working-professional degree admission guidance with end-to-end student support.' };

export default function EduSolutionsRoute() {
  return <SiteLayout><EduSolutionsPage /></SiteLayout>;
}
