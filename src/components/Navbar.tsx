import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DIVISIONS, SITE_CONFIG } from '../data/siteData';

interface NavbarProps {
  onOpenInquiry?: (division?: string) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsDropdownOpen, setIsDivisionsDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menus on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDivisionsDropdownOpen(false);
    setIsPagesDropdownOpen(false);
  }, [location.pathname]);

  const isDivisionActive = DIVISIONS.some((d) => d.path === location.pathname);

  return (
    <header className={`header-area ${isScrolled ? 'header-sticky' : ''}`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Logo */}
              <Link
                to="/"
                className="logo"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  fontSize: '22px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>FUTURE<span style={{ color: '#bae6fd' }}>EDU</span>GROUP</span>
              </Link>

              {/* Desktop & Tablet Menu */}
              <ul className={`nav ${isMobileMenuOpen ? 'show-mobile' : ''}`}>
                <li>
                  <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/our-services" className={location.pathname === '/our-services' ? 'active' : ''}>
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/tourism-hospitality" className={location.pathname === '/tourism-hospitality' ? 'active' : ''}>
                    Courses
                  </Link>
                </li>

                {/* Pages Dropdown matching existing design */}
                <li
                  className={`has-sub ${isPagesDropdownOpen || isDivisionActive ? 'active' : ''}`}
                  onMouseEnter={() => setIsPagesDropdownOpen(true)}
                  onMouseLeave={() => setIsPagesDropdownOpen(false)}
                >
                  <a
                    href="javascript:void(0)"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPagesDropdownOpen(!isPagesDropdownOpen);
                    }}
                    className={isDivisionActive || location.pathname === '/about-us' ? 'active' : ''}
                  >
                    Pages <i className="fa fa-angle-down" style={{ marginLeft: '4px' }}></i>
                  </a>
                  <ul className={`sub-menu ${isPagesDropdownOpen ? 'd-block' : ''}`}>
                    <li>
                      <Link to="/tourism-hospitality" className={location.pathname === '/tourism-hospitality' ? 'active' : ''}>
                        Tourism &amp; Hospitality Academy
                      </Link>
                    </li>
                    <li>
                      <Link to="/edu-solutions" className={location.pathname === '/edu-solutions' ? 'active' : ''}>
                        Higher Education Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/gen-learning-solutions" className={location.pathname === '/gen-learning-solutions' ? 'active' : ''}>
                        Future Gen Learning Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
                        About Us
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/#testimonials"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        const el = document.getElementById('testimonials');
                        if (el) {
                          e.preventDefault();
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={location.hash === '#testimonials' ? 'active' : ''}
                  >
                    Testimonials
                  </Link>
                </li>

                <li>
                  <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Mobile Hamburger Trigger */}
              <button
                type="button"
                className={`menu-trigger ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  outline: 'none'
                }}
                aria-label="Toggle Navigation Menu"
              >
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
