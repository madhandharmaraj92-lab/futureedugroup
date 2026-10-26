import { SiteLayout } from '../../src/App';
import { createPageMetadata } from '../../src/lib/metadata';
import { StudentGalleryPage } from '../../src/views/StudentGalleryPage';

export const metadata = createPageMetadata({ title: 'Student Gallery | Future Edu Group', description: 'Explore learning, mentoring, and student-success moments from Future Edu Group.', path: '/student-gallery' });

export default function StudentGalleryRoute() {
  return <SiteLayout><StudentGalleryPage /></SiteLayout>;
}
