import type { Metadata } from 'next';
import { SiteLayout } from '../../src/App';
import { ContactUsPage } from '../../src/views/ContactUsPage';

export const metadata: Metadata = { title: 'Contact Us | Future Edu Group', description: 'Contact Future Edu Group for admissions, education guidance, and school learning solutions.' };

export default function ContactUsRoute() {
  return <SiteLayout><ContactUsPage /></SiteLayout>;
}
