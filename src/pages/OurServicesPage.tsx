import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DIVISIONS } from '../data/siteData';
import { getBreadcrumbSchema, getOrganizationSchema } from '../utils/schemaGenerator';

export const OurServicesPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Our Services', path: '/our-services' }];

  const pageSchema = [
    getBreadcrumbSchema(breadcrumbs),
    getOrganizationSchema()
  ];

  const SERVICES = [
    {
      icon: 'fa-hotel',
      title: 'Vocational Hospitality & Cruise Training',
      description: 'Front Office simulation, Food & Beverage service protocols, luxury housekeeping, and personality grooming for star hotels and cruise lines.',
      link: '/tourism-hospitality'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'University Degree Admissions (UG & PG)',
      description: 'End-to-end admission counselling for BBA, BCA, B.Com, MBA, MCA and M.Com programs from UGC-DEB approved state and central universities.',
      link: '/edu-solutions'
    },
    {
      icon: 'fa-briefcase',
      title: 'Working Professional Degree Fast-Tracks',
      description: 'Flexible, work-integrated degree formats with digital study portals and weekend assistance tailored for working corporate executives.',
      link: '/edu-solutions'
    },
    {
      icon: 'fa-book',
      title: 'K-12 IIT Foundation Curriculum & Books',
      description: 'Rigorous Math, Physics, Chemistry, and Biology curriculum books with graded practice sheets for CBSE and ICSE school students (Grades 6–10).',
      link: '/gen-learning-solutions'
    },
    {
      icon: 'fa-microphone',
      title: 'AI-Based Interactive English Language Lab',
      description: 'Speech recognition software, real-time pronunciation scoring, listening modules, and teacher control consoles for partner schools.',
      link: '/gen-learning-solutions'
    },
    {
      icon: 'fa-users',
      title: 'Campus Recruitment & Placement Drives',
      description: 'Dedicated recruitment tie-ups, resume writing bootcamps, and mock interviews ensuring high placement conversion rates.',
      link: '/tourism-hospitality'
    }
  ];

  return (
    <main>
      <SEO
        title="Our Educational Services & Solutions | Future Edu Group"
        description="Explore the full spectrum of educational services provided by Future Edu Group: Hospitality training, University admissions, Working executive degrees, IIT Foundation books, and AI Language Labs."
        canonicalPath="/our-services"
        keywords={[
          'Future Edu Group Services',
          'Education Services Hyderabad',
          'Hospitality Training Services',
          'University Admission Services',
          'Language Lab Setup India'
        ]}
        schema={pageSchema}
      />

      <Breadcrumbs
        items={breadcrumbs}
        subtitle="Comprehensive Offerings"
        title="Our Educational Services"
      />

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-heading">
                <h6>What We Deliver</h6>
                <h4>Comprehensive <em>Academic Solutions</em></h4>
                <p>Designed to serve individual learners, working professionals, and progressive educational institutions.</p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row">
                {SERVICES.map((s, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 mb-4">
                    <div
                      style={{
                        background: '#fcfcfe',
                        border: '1px solid #edf0f8',
                        borderRadius: '16px',
                        padding: '35px 28px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'transform 0.2s'
                      }}
                    >
                      <div>
                        <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '22px', marginBottom: '20px' }}>
                          <i className={`fa ${s.icon}`}></i>
                        </div>
                        <h4 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '12px', color: '#0f172a' }}>
                          {s.title}
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#475569', marginBottom: '20px' }}>
                          {s.description}
                        </p>
                      </div>
                      <div>
                        <Link
                          to={s.link}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#2563eb',
                            fontSize: '14px',
                            fontWeight: 700,
                            textDecoration: 'none'
                          }}
                        >
                          <span>Explore Details</span>
                          <i className="fa fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
