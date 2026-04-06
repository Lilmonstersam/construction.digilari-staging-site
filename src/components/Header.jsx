import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          if (isOpen) setIsOpen(false); // Close mobile menu if scrolling down
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header style={{ 
      borderBottom: '1px solid var(--color-border)', 
      backgroundColor: 'var(--color-bg)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1002 }}>
          <img 
            src="https://digilari.com.au/wp-content/uploads/2020/09/dig-logo-c5.png" 
            alt="Digilari Construction" 
            style={{ height: '40px', objectFit: 'contain' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', height: '100%' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center', height: '100%' }}>
            
            {/* Services Mega Menu */}
            <li className="mega-menu-trigger">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>Services <ChevronDown size={14}/></span>
              <div className="mega-menu-content" style={{ left: '0', transform: 'translateX(0) translateY(10px)' }}>
                <div className="mega-item-col">
                  <h4>Core Strategy</h4>
                  <ul>
                    <li><Link to="/services/seo-agency">Construction SEO</Link></li>
                    <li><Link to="/services/ppc-agency">Google Ads Management</Link></li>
                    <li><Link to="/services/conversion-rate-optimisation">Conversion Optimisation</Link></li>
                    <li><Link to="/services/inbound-and-content-marketing">Technical Content Marketing</Link></li>
                    <li><Link to="/services/lead-generation">AI Lead Generation</Link></li>
                  </ul>
                </div>
                <div className="mega-item-col">
                  <h4>Advanced SEO & AI</h4>
                  <ul>
                    <li><Link to="/services/aeo">Answer Engine Optimisation</Link></li>
                    <li><Link to="/services/geo">Generative Engine Optimisation</Link></li>
                    <li><Link to="/services/seo-agency/seo-migration">Website SEO Migration</Link></li>
                    <li><Link to="/services/seo-agency/zero-click-search">Zero Click Search Marketing</Link></li>
                  </ul>
                </div>
                <div className="mega-item-col">
                  <h4>Social Media Hub</h4>
                  <ul>
                    <li><Link to="/services/smm/linkedin">LinkedIn</Link></li>
                    <li><Link to="/services/smm/facebook">Facebook</Link></li>
                    <li><Link to="/services/smm/instagram">Instagram</Link></li>
                    <li><Link to="/services/smm/tiktok">TikTok</Link></li>
                    <li><Link to="/services/smm/x">X (Twitter)</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Company Mega Menu */}
            <li className="mega-menu-trigger">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>Company <ChevronDown size={14}/></span>
              <div className="mega-menu-content" style={{ left: '0', transform: 'translateX(-20%) translateY(10px)' }}>
                <div className="mega-item-col">
                  <h4>About Digilari</h4>
                  <ul>
                    <li><Link to="/why-digilari">Why Choose Digilari?</Link></li>
                    <li><Link to="/our-process">Our Strategic Process</Link></li>
                    <li><Link to="/digital-marketing-partner-program">The Partner Program</Link></li>
                    <li><Link to="/digital-results-guarantee">Digital Results Guarantee</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Resources Menu */}
            <li className="mega-menu-trigger">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>Insights <ChevronDown size={14}/></span>
              <div className="mega-menu-content" style={{ left: 'auto', right: '0', transform: 'translateX(20%) translateY(10px)' }}>
                <div className="mega-item-col">
                  <h4>Resources & Proof</h4>
                  <ul>
                    <li><Link to="/case-studies">Client Case Studies</Link></li>
                    <li><Link to="/articles">Marketing Articles</Link></li>
                    <li><Link to="/faqs">Frequently Asked Questions</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            <li><Link to="/pricing" style={{ fontWeight: 600 }}>Pricing</Link></li>
          </ul>
        </nav>
        
        <div style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', borderRight: '1px solid var(--color-border)', paddingRight: '1.5rem' }}>
            <a href="https://linkedin.com/company/digilari-media" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>
              <LinkedinIcon size={18} />
            </a>
            <a href="https://facebook.com/digilarimedia" aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>
              <FacebookIcon size={18} />
            </a>
            <a href="https://instagram.com/digilari_media" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>
              <InstagramIcon size={18} />
            </a>
          </div>
          <a href="tel:1300859358" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
            1300 859 358
          </a>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>Strategy Session</Link>
        </div>

        {/* Mobile Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1002 }} className="mobile-actions">
          <a href="tel:1300859358" style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>
            1300 859 358
          </a>
          <button 
            style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} color="#FD9B28" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
          backgroundColor: 'var(--color-bg)', zIndex: 1001,
          padding: '80px 2rem 2rem 2rem', overflowY: 'auto',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'block'
        }}
        className="mobile-menu-container"
      >
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', paddingBottom: '4rem' }}>
          <li><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Strategy</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/seo-agency" onClick={() => setIsOpen(false)}>Construction SEO</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/ppc-agency" onClick={() => setIsOpen(false)}>Google Ads Management</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/conversion-rate-optimisation" onClick={() => setIsOpen(false)}>Conversion Optimisation</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/inbound-and-content-marketing" onClick={() => setIsOpen(false)}>Technical Content Marketing</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/lead-generation" onClick={() => setIsOpen(false)}>AI Lead Generation</Link></li>

          <li style={{ marginTop: '0.5rem' }}><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Advanced SEO & AI</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/aeo" onClick={() => setIsOpen(false)}>Answer Engine Optimisation</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/geo" onClick={() => setIsOpen(false)}>Generative Engine Optimisation</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/seo-agency/seo-migration" onClick={() => setIsOpen(false)}>Website SEO Migration</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/seo-agency/zero-click-search" onClick={() => setIsOpen(false)}>Zero Click Search Marketing</Link></li>

          <li style={{ marginTop: '0.5rem' }}><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Social Media Hub</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/smm/linkedin" onClick={() => setIsOpen(false)}>LinkedIn</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/smm/facebook" onClick={() => setIsOpen(false)}>Facebook</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/smm/instagram" onClick={() => setIsOpen(false)}>Instagram</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/smm/tiktok" onClick={() => setIsOpen(false)}>TikTok</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/smm/x" onClick={() => setIsOpen(false)}>X (Twitter)</Link></li>

          <li style={{ marginTop: '0.5rem' }}><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>About Digilari</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/why-digilari" onClick={() => setIsOpen(false)}>Why Choose Digilari?</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/our-process" onClick={() => setIsOpen(false)}>Our Strategic Process</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/digital-marketing-partner-program" onClick={() => setIsOpen(false)}>The Partner Program</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/digital-results-guarantee" onClick={() => setIsOpen(false)}>Digital Results Guarantee</Link></li>

          <li style={{ marginTop: '0.5rem' }}><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Resources & Proof</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/case-studies" onClick={() => setIsOpen(false)}>Client Case Studies</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/articles" onClick={() => setIsOpen(false)}>Marketing Articles</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/faqs" onClick={() => setIsOpen(false)}>Frequently Asked Questions</Link></li>
          
          <li style={{ marginTop: '0.5rem' }}><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>

          <li style={{ marginTop: '1.5rem' }}><Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>Book Strategy Session</Link></li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 1000px) {
          .desktop-nav { display: flex !important; }
          .mobile-actions { display: none !important; }
          .mobile-menu-container { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
