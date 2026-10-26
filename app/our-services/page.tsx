import { SiteLayout } from '../../src/App';
import { createPageMetadata } from '../../src/lib/metadata';
import { OurServicesPage } from '../../src/views/OurServicesPage';

export const metadata = createPageMetadata({ title: 'Our Educational Services | Future Edu Group', description: 'Explore Future Edu Group services for hospitality training, degree admissions, and school learning solutions.', path: '/our-services' });

export default function OurServicesRoute() {
  return <SiteLayout><OurServicesPage /></SiteLayout>;
}
