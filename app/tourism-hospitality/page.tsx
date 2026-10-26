import { SiteLayout } from '../../src/App';
import { createPageMetadata } from '../../src/lib/metadata';
import { TourismHospitalityPage } from '../../src/views/TourismHospitalityPage';

export const metadata = createPageMetadata({ title: 'Tourism & Hospitality Academy | Future Edu Group', description: 'Career-focused tourism, hotel management, cruise, and aviation hospitality training with placement support.', path: '/tourism-hospitality' });

export default function TourismHospitalityRoute() {
  return <SiteLayout><TourismHospitalityPage /></SiteLayout>;
}
