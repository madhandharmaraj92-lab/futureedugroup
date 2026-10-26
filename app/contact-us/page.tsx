import { SiteLayout } from '../../src/App';
import { createPageMetadata } from '../../src/lib/metadata';
import { ContactUsPage } from '../../src/views/ContactUsPage';

export const metadata = createPageMetadata({ title: 'Contact Us | Future Edu Group', description: 'Contact Future Edu Group for admissions, education guidance, and school learning solutions.', path: '/contact-us' });

export default function ContactUsRoute() {
  return <SiteLayout><ContactUsPage /></SiteLayout>;
}
