'use client';

import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';

const galleryItems = [
  { src: '/assets/images/courses-01.jpg', alt: 'Students learning together' },
  { src: '/assets/images/courses-02.jpg', alt: 'Learning and career preparation' },
  { src: '/assets/images/courses-03.jpg', alt: 'Education program experience' },
  { src: '/assets/images/courses-04.jpg', alt: 'Future-ready student learning' },
  { src: '/assets/images/team-member-01.jpg', alt: 'Student support and guidance' },
  { src: '/assets/images/team-member-02.jpg', alt: 'Career mentoring session' },
  { src: '/assets/images/team-member-03.jpg', alt: 'Education community' },
  { src: '/assets/images/team-member-04.jpg', alt: 'Student success journey' },
];

export const StudentGalleryPage: React.FC = () => (
  <main>
    <SEO title="Student Gallery | Future Edu Group" description="Explore learning, mentoring, and student-success moments from Future Edu Group." canonicalPath="/student-gallery" />
    <Breadcrumbs items={[{ name: 'Student Gallery', path: '/student-gallery' }]} subtitle="Learning Moments" title="Student Gallery" />
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div className="row"><div className="col-lg-8 offset-lg-2 text-center"><div className="section-heading"><h6>Our Community</h6><h4>Learning, Growth &amp; <em>Success</em></h4><p>A glimpse into the learning journeys and student-support experiences across Future Edu Group.</p></div></div></div>
        <div className="row">
          {galleryItems.map((item) => <div key={item.src} className="col-lg-3 col-md-6 mb-4"><div style={{ overflow: 'hidden', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: '0 8px 22px rgba(15, 23, 42, 0.06)' }}><img src={item.src} alt={item.alt} style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} /></div></div>)}
        </div>
      </div>
    </section>
  </main>
);
