import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const NotFoundPage: React.FC = () => {
  return (
    <main>
      <SEO
        title="404 - Page Not Found | Future Edu Group"
        description="The requested page could not be found. Explore Future Edu Group's divisions and programs."
        canonicalPath="/404"
      />

      <Breadcrumbs
        items={[{ name: '404 Error', path: '/404' }]}
        subtitle="Error"
        title="Page Not Found"
      />

      <section style={{ padding: '90px 0', textAlign: 'center', background: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <h1 style={{ fontSize: '72px', fontWeight: 800, color: '#2563eb', marginBottom: '10px' }}>404</h1>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '15px', color: '#0f172a' }}>Oops! Page Not Found</h3>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7, marginBottom: '30px' }}>
                The page you are looking for may have been moved or does not exist. Please navigate back to our homepage or explore our divisions below:
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/" className="main-gradient-button" style={{ display: 'inline-block', padding: '12px 28px', fontSize: '14px' }}>
                  Return to Home
                </Link>
                <Link to="/tourism-hospitality" style={{ padding: '12px 24px', borderRadius: '25px', border: '1px solid #cbd5e1', color: '#334155', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                  Hospitality Academy
                </Link>
                <Link to="/edu-solutions" style={{ padding: '12px 24px', borderRadius: '25px', border: '1px solid #cbd5e1', color: '#334155', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                  Degree Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
