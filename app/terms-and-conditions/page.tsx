import { SiteLayout } from "../../src/App";
import { LegalPage } from "../../src/components/LegalPage";
import { SITE_CONFIG } from "../../src/data/siteData";
import { createPageMetadata } from "../../src/lib/metadata";

export const metadata = createPageMetadata({ title: "Terms and Conditions | Future Edu Group", description: "Terms for using Future Edu Group websites, mobile applications and educational services.", path: "/terms-and-conditions" });

export default function TermsAndConditionsPage() {
  return <SiteLayout><LegalPage title="Terms and Conditions" path="/terms-and-conditions">
    <p>These terms apply to your use of Future Edu Group&apos;s website, Future Gen Learning mobile application and related services. By using the services, you agree to these terms. If you use a service through a school or institution, its agreement and policies may also apply.</p>

    <h2>Accounts and eligibility</h2>
    <p>Provide accurate information and keep your login credentials secure. You are responsible for activity under your account and should notify us promptly of unauthorized use. Parents, guardians and institutions are responsible for supervising children&apos;s use and providing any required permissions.</p>

    <h2>Acceptable use</h2>
    <p>Use the services lawfully and respectfully. Do not impersonate others, share unauthorized content, interfere with the service, attempt unauthorized access, or misuse assessments, learning materials or other users&apos; information.</p>

    <h2>Educational content and submissions</h2>
    <p>Learning materials and website content are protected by applicable intellectual property rights. You may use them for your authorized learning or institutional purposes, but may not copy, distribute or commercially exploit them without permission. You are responsible for the content you submit and must have permission to share it.</p>
    <p>Some learning features may use AI-generated content. Such content can contain errors and should be reviewed alongside course materials and guidance from educators.</p>

    <h2>Fees and availability</h2>
    <p>Some services may require payment or an active subscription. Applicable prices, payment terms and any refund conditions will be communicated when you obtain the service or through your institution&apos;s agreement. Review those details before paying. Where available, checkout may be handled by a third-party payment provider. Features and availability may change, and service may be interrupted for maintenance or reasons outside our control.</p>

    <h2>Third-party services</h2>
    <p>Our services may link to or use third-party services. Their own terms and privacy policies apply to your use of those services.</p>

    <h2>Suspension and termination</h2>
    <p>We may restrict or suspend access where necessary to protect users or the service, address misuse, or comply with legal or institutional requirements. You may contact us about your account or request its deletion as described in our <a href="/privacy-policy">Privacy Policy</a>.</p>

    <h2>Disclaimers and liability</h2>
    <p>We aim to provide reliable and useful educational services, but cannot guarantee uninterrupted access or specific educational or career outcomes. To the extent permitted by law, Future Edu Group is not responsible for losses arising from interruptions, third-party services or misuse of the services. Nothing in these terms limits rights that cannot lawfully be excluded.</p>

    <h2>Changes and contact</h2>
    <p>We may update these terms and will publish the current version on this page. For questions, contact <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
  </LegalPage></SiteLayout>;
}
