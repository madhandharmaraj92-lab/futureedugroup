import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from './Link';
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
  const pathname = usePathname();

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
  }, [pathname]);

  const isPageActive = pathname === '/about-us' || pathname === '/student-gallery';
  const headerLogo = pathname === '/tourism-hospitality'
    ? '/assets/images/logos/logo_1.jpg'
    : pathname === '/edu-solutions'
      ? '/assets/images/logos/logo_2.png'
      : pathname === '/gen-learning-solutions'
        ? '/assets/images/logos/logo_3.jpg'
        : '/assets/images/logos/logo.jpg';
  const headerLogoAlt = pathname === '/tourism-hospitality'
    ? 'Future Academy of Tourism and Hospitality Management'
    : pathname === '/edu-solutions'
      ? 'Future Edu Solutions'
      : pathname === '/gen-learning-solutions'
        ? 'Future Gen Learning Solutions'
        : 'Future Edu Group';

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
                <img
                  className="header-brand-logo"
                  src={headerLogo}
                  alt={headerLogoAlt}
                  style={{
                    width: '168px',
                    height: '102px',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    background: 'transparent',
                    borderRadius: 0,
                    padding: 0
                  }}
                />
              </Link>

              {/* Desktop & Tablet Menu */}
              <ul className={`nav ${isMobileMenuOpen ? 'show-mobile' : ''}`}>
                <li>
                  <Link to="/" className={pathname === '/' ? 'active' : ''}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/our-services" className={pathname === '/our-services' ? 'active' : ''}>
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/tourism-hospitality" className={pathname === '/tourism-hospitality' ? 'active' : ''}>
                    Courses
                  </Link>
                </li>

                {/* Pages Dropdown matching existing design */}
                <li
                  className={`has-sub ${isPagesDropdownOpen ? 'active' : ''}`}
                  onMouseEnter={() => setIsPagesDropdownOpen(true)}
                  onMouseLeave={() => setIsPagesDropdownOpen(false)}
                >
                  <a
                    href="javascript:void(0)"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPagesDropdownOpen(!isPagesDropdownOpen);
                    }}
                    className={isPageActive ? 'active' : ''}
                  >
                    Pages <i className="fa fa-angle-down" style={{ marginLeft: '4px' }}></i>
                  </a>
                  <ul className={`sub-menu ${isPagesDropdownOpen ? 'd-block' : ''}`}>
                    <li>
                      <Link to="/tourism-hospitality" className={pathname === '/tourism-hospitality' ? 'active' : ''}>
                        <img className="page-menu-image" src="/assets/images/courses-02.jpg" alt="" /><span>Tourism &amp; Hospitality Academy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/edu-solutions" className={pathname === '/edu-solutions' ? 'active' : ''}>
                        <img className="page-menu-image" src="/assets/images/team-member-02.jpg" alt="" /><span>Higher Education Solutions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/gen-learning-solutions" className={pathname === '/gen-learning-solutions' ? 'active' : ''}>
                        <img className="page-menu-image" src="/assets/images/courses-04.jpg" alt="" /><span>Future Gen Learning Solutions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className={pathname === '/about-us' ? 'active' : ''}>
                        <img className="page-menu-image" src="/assets/images/team-member-04.jpg" alt="" /><span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/student-gallery" className={pathname === '/student-gallery' ? 'active' : ''}>
                        <img className="page-menu-image" src="/assets/images/courses-01.jpg" alt="" /><span>Student Gallery</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/#testimonials"
                    onClick={(e) => {
                      if (pathname === '/') {
                        const el = document.getElementById('testimonials');
                        if (el) {
                          e.preventDefault();
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className=""
                  >
                    Testimonials
                  </Link>
                </li>

                <li>
                  <Link to="/blogs" className={pathname === '/blogs' ? 'active' : ''}>
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link to="/contact-us" className={pathname === '/contact-us' ? 'active' : ''}>
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
