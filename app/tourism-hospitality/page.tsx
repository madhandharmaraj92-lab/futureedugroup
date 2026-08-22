import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { TourismHospitalityPage } from '../../src/views/TourismHospitalityPage';

export const metadata: Metadata = { title: 'Tourism & Hospitality Academy | Future Edu Group', description: 'Career-focused tourism, hotel management, cruise, and aviation hospitality training with placement support.' };

export default function TourismHospitalityRoute() {
  return <SiteLayout><TourismHospitalityPage /></SiteLayout>;
}
