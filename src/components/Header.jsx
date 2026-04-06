import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', position: 'sticky', top: 0, zIndex: 1000 }}>
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
          <a href="tel:1300859358" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
            1300 859 358
          </a>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>Strategy Session</Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-toggle"
          style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', zIndex: 1002, position: 'relative' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} color="#FD9B28" /> : <Menu size={24} />}
        </button>
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
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none' }}>
          <li><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Services</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/seo-agency" onClick={() => setIsOpen(false)}>Construction SEO</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/ppc-agency" onClick={() => setIsOpen(false)}>Google Ads</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/services/lead-generation" onClick={() => setIsOpen(false)}>AI Lead Generation</Link></li>
          
          <li style={{ marginTop: '1rem' }}><span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</span></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/why-digilari" onClick={() => setIsOpen(false)}>Why Digilari</Link></li>
          <li style={{ paddingLeft: '1rem' }}><Link to="/pricing" onClick={() => setIsOpen(false)}>Our Pricing</Link></li>
          
          <li style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href="tel:1300859358" style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--color-primary)' }}>1300 859 358</a>
          </li>
          
          <li><Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>Book Strategy Session</Link></li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 1000px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .mobile-menu-container { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
