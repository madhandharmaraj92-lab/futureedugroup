import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { StudentGalleryPage } from '../../src/views/StudentGalleryPage';

export const metadata: Metadata = { title: 'Student Gallery | Future Edu Group', description: 'Explore learning, mentoring, and student-success moments from Future Edu Group.' };

export default function StudentGalleryRoute() {
  return <SiteLayout><StudentGalleryPage /></SiteLayout>;
}
