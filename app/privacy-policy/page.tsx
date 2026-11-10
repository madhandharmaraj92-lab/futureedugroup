import { SiteLayout } from "../../src/App";
import { LegalPage } from "../../src/components/LegalPage";
import { SITE_CONFIG } from "../../src/data/siteData";
import { createPageMetadata } from "../../src/lib/metadata";

export const metadata = createPageMetadata({ title: "Privacy Policy | Future Edu Group", description: "Learn how Future Edu Group handles information across its website and Android and iOS mobile applications.", path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return <SiteLayout><LegalPage title="Privacy Policy" path="/privacy-policy">
    <p>This policy describes how Future Edu Group handles information when you use our website, the Future Gen Learning mobile application on Android or iOS, and related education services. The information involved depends on the service and features you use.</p>

    <h2>Information we collect</h2>
    <ul>
      <li>Contact and account details you, your parent or guardian, or your institution provide, such as your name, email address, phone number, login and profile information, and guardian details.</li>
      <li>Education and account information, such as institution or class details, enrolment, learning activity, assessments, responses, results and progress.</li>
      <li>Content you submit, such as inquiries, messages, documents, images and other learning materials.</li>
      <li>Technical and usage information, such as device and browser information, IP address, logs, interactions with our services and, if you enable Android push notifications, a device registration token. Our website uses Google Analytics to understand website usage.</li>
      <li>Transaction and subscription information associated with services you obtain, where applicable.</li>
    </ul>

    <h2>How we use information</h2>
    <p>We use information to provide and administer accounts and educational services, deliver learning content and assessments, record progress, respond to inquiries, communicate service updates, support users, maintain security and improve our services. Where relevant, we also use it to administer subscriptions and meet legal obligations.</p>

    <h2>Mobile applications and device access</h2>
    <p>The Android and iOS applications use an internet connection to provide their features. When you choose to upload a file or image, the app receives the content you select. On Android, if you enable push notifications, the app registers a device token with our service so that learning updates, such as new books, videos and tests, can be delivered using Firebase Cloud Messaging. You can manage notification permission in your device settings. Device permissions, when requested for a feature, are controlled through your device settings; disabling access may limit that feature. Your device or app store may also process information under its own privacy policy.</p>

    <h2>Sharing information</h2>
    <p>We may share information with your school or institution where it administers your account, and with service providers that help operate our services. Depending on the features used, these include Amazon Web Services for hosting and file storage, Google Analytics for website analytics, Firebase Cloud Messaging for Android notifications, and Cashfree for payment checkout when available. For checkout, relevant order and customer information, including a parent or guardian phone number, is sent to Cashfree. Payment details entered into its checkout are handled by Cashfree under its own policies.</p>
    <p>Learning features may use an AI service to generate questions or explanations from learning materials and questions. The information sent depends on the feature used. We may also disclose information when required by law or to protect users and our services. Service providers receive information relevant to their role.</p>

    <h2>Children and students</h2>
    <p>Our learning services may be used by children through a parent, guardian or educational institution. Parents, guardians and institutions should supervise use and provide any permissions required for a child&apos;s participation. A parent or guardian can contact us to ask about access to, correction or deletion of their child&apos;s information.</p>

    <h2>Retention and security</h2>
    <p>We retain information for as long as needed to provide the services, administer accounts, resolve disputes and meet applicable legal or institutional obligations. Retention depends on the type of information and its purpose; transaction, security or other records may need to be retained after an account is closed. We use safeguards such as access controls and protected connections to help protect information, but no method of storage or transmission is completely secure.</p>

    <h2 id="account-deletion">Your choices and deletion requests</h2>
    <p>To request deletion of your Future Gen Learning account and associated personal data, email <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> with the subject &ldquo;Future Gen Learning account deletion&rdquo;. Include the account name or login ID and, if applicable, your institution so we can identify the account; do not send your password. You may also use this address to request access to or correction of your information, or to withdraw consent where applicable.</p>
    <p>We may need to verify your identity and coordinate with your institution. Some information may need to be retained for legal, security or administrative reasons; we will explain applicable limitations when responding. Removing the app from your device does not itself delete your account.</p>

    <h2>Changes and contact</h2>
    <p>We may update this policy as our services or practices change. The current version will be available on this page. For privacy questions or requests, contact Future Edu Group at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>. See also our <a href="/terms-and-conditions">Terms and Conditions</a>.</p>
  </LegalPage></SiteLayout>;
}
