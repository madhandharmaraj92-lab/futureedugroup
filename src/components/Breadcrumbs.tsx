import React from 'react';
import { Link } from './Link';
import { FloatingEducationBackground } from './FloatingEducationBackground';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  title?: string;
  subtitle?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, title, subtitle }) => {
  return (
    <section
      className="main-banner"
      style={{
        padding: '160px 0 70px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff'
      }}
    >
      <FloatingEducationBackground density="medium" interactive={true} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            {subtitle && (
              <span
                style={{
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#38bdf8',
                  fontWeight: 700,
                  display: 'inline-block',
                  marginBottom: '10px'
                }}
              >
                {subtitle}
              </span>
            )}
            {title && (
              <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', marginBottom: '18px' }}>
                {title}
              </h1>
            )}

            {/* Breadcrumb Navigation Trail */}
            <nav aria-label="breadcrumb">
              <ol
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  listStyle: 'none',
                  padding: '8px 20px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '30px',
                  margin: 0,
                  fontSize: '14px'
                }}
              >
                <li>
                  <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                    Home
                  </Link>
                </li>
                {items.map((item, index) => {
                  const isLast = index === items.length - 1;
                  return (
                    <React.Fragment key={item.path}>
                      <li style={{ color: '#93c5fd' }}>
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li aria-current={isLast ? 'page' : undefined}>
                        {isLast ? (
                          <span style={{ color: '#bae6fd', fontWeight: 600 }}>{item.name}</span>
                        ) : (
                          <Link to={item.path} style={{ color: '#fff', textDecoration: 'none' }}>
                            {item.name}
                          </Link>
                        )}
                      </li>
                    </React.Fragment>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
