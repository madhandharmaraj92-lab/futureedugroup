import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getBreadcrumbSchema, getOrganizationSchema } from '../utils/schemaGenerator';

export const AboutUsPage: React.FC = () => {
  const breadcrumbs = [{ name: 'About Us', path: '/about-us' }];

  const pageSchema = [
    getBreadcrumbSchema(breadcrumbs),
    getOrganizationSchema()
  ];

  return (
    <main>
      <SEO
        title="About Future Edu Group | Vision, Mission & Leadership"
        description="Learn about Future Edu Group's journey, mission, academic council, and our commitment to empowering education, enabling careers, and building futures across India."
        canonicalPath="/about-us"
        keywords={[
          'About Future Edu Group',
          'Education Leadership India',
          'Future Edu Group Vision and Mission',
          'Hospitality and Higher Education Partners'
        ]}
        schema={pageSchema}
      />

      <Breadcrumbs
        items={breadcrumbs}
        subtitle="Our Story & Vision"
        title="About Future Edu Group"
      />

      {/* Vision & Mission */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span style={{ fontSize: '13px', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Our Core Philosophy
              </span>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', marginTop: '8px', marginBottom: '20px', lineHeight: 1.3 }}>
                Bridging Knowledge, Skill & Global Industry Opportunities
              </h2>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                Future Edu Group was founded with a singular purpose: to create accessible, industry-aligned, and technologically advanced educational pathways for students, professionals, and schools.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '25px' }}>
                We believe that education must lead to real outcomes: meaningful employment, higher analytical capability, and lifelong career growth.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '14px', borderLeft: '4px solid #2563eb' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Our Mission</h4>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    To empower every learner with practical skills, recognized qualifications, and global career opportunities.
                  </p>
                </div>
                <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '14px', borderLeft: '4px solid #2563eb' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Our Vision</h4>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    To be India's most trusted integrated educational group across vocational hospitality, higher education, and K-12 STEM.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/assets/images/about-left-image.png"
                alt="Future Edu Group Campus & Team"
                style={{ width: '100%', borderRadius: '18px', boxShadow: '0 12px 35px rgba(15, 23, 42, 0.08)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-heading">
                <h6>Guiding Principles</h6>
                <h4>Our Core <em>Values</em></h4>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '20px', marginBottom: '16px' }}>
                      <i className="fa fa-handshake-o"></i>
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#0f172a' }}>Integrity & Transparency</h4>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                      Honest guidance regarding university recognitions, actual course outcomes, and direct recruitment placement procedures.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '20px', marginBottom: '16px' }}>
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#0f172a' }}>Student-Centric Excellence</h4>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                      Putting the learner's ambition at the heart of our curriculum design, personalized mentoring, and career placement drives.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '20px', marginBottom: '16px' }}>
                      <i className="fa fa-laptop"></i>
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#0f172a' }}>Technological Innovation</h4>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                      Integrating artificial intelligence into spoken English training, diagnostic spot testing in STEM, and digital learning platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
