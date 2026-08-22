'use client';

import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { InquiryForm } from '../components/InquiryForm';
import { SITE_CONFIG } from '../data/siteData';
import { getBreadcrumbSchema, getOrganizationSchema } from '../utils/schemaGenerator';

export const ContactUsPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Contact Us', path: '/contact-us' }];

  const pageSchema = [
    getBreadcrumbSchema(breadcrumbs),
    getOrganizationSchema()
  ];

  return (
    <main>
      <SEO
        title="Contact Future Edu Group | Admissions & Partner Support"
        description="Contact Future Edu Group for admissions inquiries, academic counselling, school partnerships, and program details. Reach our Hyderabad knowledge hub via phone, email, or direct message."
        canonicalPath="/contact-us"
        keywords={[
          'Contact Future Edu Group',
          'Future Edu Group Phone Number',
          'Future Edu Group Email Address',
          'Admission Enquiry Hyderabad'
        ]}
        schema={pageSchema}
      />

      <Breadcrumbs
        items={breadcrumbs}
        subtitle="Get in Touch"
        title="Contact Future Edu Group"
      />

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="section-heading" style={{ textAlign: 'left' }}>
                <h6>We are here to assist</h6>
                <h4>Reach Out to Our <em>Academic Advisors</em></h4>
                <p style={{ marginTop: '15px', color: '#666', lineHeight: 1.8 }}>
                  Whether you are inquiring about hospitality admissions, undergraduate/postgraduate degrees, or K-12 school labs, our dedicated team is available to assist you.
                </p>
              </div>

              <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '20px' }}>
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Corporate & Admissions Hub</h5>
                    <p style={{ fontSize: '13px', color: '#475569', margin: '4px 0 0 0' }}>
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.postalCode}
                    </p>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '20px' }}>
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Phone & WhatsApp Hotline</h5>
                    <a href={`tel:${SITE_CONFIG.phone}`} style={{ fontSize: '14px', color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '20px' }}>
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Admissions & Support Email</h5>
                    <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontSize: '14px', color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <InquiryForm
                title="Send Us a Direct Message"
                subtitle="Inquiry Form"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
