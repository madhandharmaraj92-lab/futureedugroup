import React from 'react';
import { Link } from './Link';
import { DIVISIONS, SITE_CONFIG } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#1c1e27', color: '#a0a3b1', paddingTop: '70px', paddingBottom: '30px', position: 'relative' }}>
      <div className="container">
        <div className="row">
          {/* Brand & About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div style={{ marginBottom: '20px' }}>
              <Link
                to="/"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  fontSize: '22px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase'
                }}
              >
                <span>FUTURE<span style={{ color: '#0284c7' }}>EDU</span>GROUP</span>
              </Link>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#b5b8c7', marginBottom: '20px' }}>
              Future Edu Group is committed to enabling global career pathways, higher education access, and innovative K-12 STEM & AI learning solutions across India and beyond.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' }}
                aria-label="Facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' }}
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' }}
                aria-label="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' }}
                aria-label="YouTube"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>

          {/* Divisions */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '22px' }}>
              Our Divisions
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {DIVISIONS.map((d) => (
                <li key={d.id} style={{ marginBottom: '12px' }}>
                  <Link
                    to={d.path}
                    style={{ color: '#b5b8c7', textDecoration: 'none', fontSize: '14px', transition: 'all 0.2s', display: 'inline-block' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#b5b8c7')}
                  >
                    <i className="fa fa-angle-right" style={{ marginRight: '8px', color: '#38bdf8' }}></i>
                    {d.title}
                  </Link>
                </li>
              ))}
              <li style={{ marginBottom: '12px' }}>
                <Link
                  to="/our-services"
                  style={{ color: '#b5b8c7', textDecoration: 'none', fontSize: '14px', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#b5b8c7')}
                >
                  <i className="fa fa-angle-right" style={{ marginRight: '8px', color: '#38bdf8' }}></i>
                  All Academic Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Pages */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '22px' }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/" style={{ color: '#b5b8c7', textDecoration: 'none', fontSize: '14px' }}>
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/about-us" style={{ color: '#b5b8c7', textDecoration: 'none', fontSize: '14px' }}>
                  About Future Edu
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/our-services" style={{ color: '#b5b8c7', textDecoration: 'none', fontSize: '14px' }}>
                  Our Services
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/contact-us" style={{ color: '#b5b8c7', textDecoration: 'none', fontSize: '14px' }}>
                  Contact & Support
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" style={{ color: '#b5b8c7', textDecoration: 'none', fontSize: '14px' }}>
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '22px' }}>
              Contact Hub
            </h5>
            <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#b5b8c7' }}>
              <p style={{ marginBottom: '12px' }}>
                <i className="fa fa-map-marker" style={{ color: '#38bdf8', marginRight: '10px' }}></i>
                {SITE_CONFIG.register_office.street}, {SITE_CONFIG.register_office.city}, {SITE_CONFIG.register_office.state}
              </p>
              <p style={{ marginBottom: '12px' }}>
                <i className="fa fa-map-marker" style={{ color: '#38bdf8', marginRight: '10px' }}></i>
                {SITE_CONFIG.corporate_office.street}, {SITE_CONFIG.corporate_office.city}, {SITE_CONFIG.corporate_office.state}
              </p>
              <p style={{ marginBottom: '12px' }}>
                <i className="fa fa-phone" style={{ color: '#38bdf8', marginRight: '10px' }}></i>
                <a href={`tel:${SITE_CONFIG.phone}`} style={{ color: '#b5b8c7', textDecoration: 'none' }}>
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p style={{ marginBottom: '12px' }}>
                <i className="fa fa-envelope" style={{ color: '#38bdf8', marginRight: '10px' }}></i>
                <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: '#b5b8c7', textDecoration: 'none' }}>
                  {SITE_CONFIG.email}
                </a>
              </p>
              <div style={{ marginTop: '16px', display: 'inline-block', padding: '6px 14px', background: 'rgba(56, 189, 248, 0.15)', borderRadius: '20px', color: '#38bdf8', fontSize: '12px', fontWeight: 600 }}>
                Admissions Open 2026–2027
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '40px', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p style={{ margin: 0, fontSize: '13px', color: '#7a7d8c' }}>
              Copyright © 2026 Future Edu Group. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p style={{ margin: 0, fontSize: '13px', color: '#7a7d8c' }}>
              Empowering Education • Enabling Careers • Building Futures
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
