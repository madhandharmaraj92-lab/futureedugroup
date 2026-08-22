import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { OurServicesPage } from '../../src/views/OurServicesPage';

export const metadata: Metadata = { title: 'Our Educational Services | Future Edu Group', description: 'Explore Future Edu Group services for hospitality training, degree admissions, and school learning solutions.' };

export default function OurServicesRoute() {
  return <SiteLayout><OurServicesPage /></SiteLayout>;
}
