import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-surface)', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <Link to="/" style={{ display: 'block', marginBottom: '1.5rem' }}>
              <img 
                src="https://digilari.com.au/wp-content/uploads/2020/09/dig-logo-c5.png" 
                alt="Digilari Construction" 
                style={{ height: '40px', width: 'auto' }} 
              />
            </Link>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              High-performance digital marketing built exclusively for commercial construction suppliers and contractors across Australasia.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <img src="/images/certifications/google-partner.webp" alt="Google Partner" style={{ height: '36px', width: 'auto', borderRadius: '4px' }} />
              <img src="/images/certifications/bing-ads-certified.png" alt="Bing Ads Certified" style={{ height: '36px', width: 'auto', borderRadius: '4px' }} />
              <img src="/images/certifications/meta-partner.jpeg" alt="Meta Business Partner" style={{ height: '36px', width: 'auto', borderRadius: '4px' }} />
            </div>
          </div>
          
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Contact & Enquiries</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={18} color="var(--color-primary)" /> Brisbane, AU & NZ</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={18} color="var(--color-primary)" /> <a href="tel:1300859358" style={{ color: 'var(--color-text)' }}>1300 859 358</a></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={18} color="var(--color-primary)" /> <a href="mailto:marketing@digilari.com.au" style={{ color: 'var(--color-text)' }}>marketing@digilari.com.au</a></li>
              
              <li style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1rem', width: '100%', textAlign: 'center' }}>Get a free strategy session</Link>
                <Link to="/pricing" className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1rem', width: '100%', textAlign: 'center' }}>View Pricing Packages</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/services/seo-agency" style={{ color: 'var(--color-text-muted)' }}>Construction SEO</Link></li>
              <li><Link to="/services/ppc-agency" style={{ color: 'var(--color-text-muted)' }}>Google Ads</Link></li>
              <li><Link to="/services/smm" style={{ color: 'var(--color-text-muted)' }}>LinkedIn & Social</Link></li>
              <li><Link to="/services/lead-generation" style={{ color: 'var(--color-text-muted)' }}>AI Lead Generation</Link></li>
              <li><Link to="/services/conversion-rate-optimisation" style={{ color: 'var(--color-text-muted)' }}>CRO</Link></li>
              <li><Link to="/services/inbound-and-content-marketing" style={{ color: 'var(--color-text-muted)' }}>Inbound Marketing</Link></li>
              <li><Link to="/services/aeo" style={{ color: 'var(--color-text-muted)' }}>AEO Services</Link></li>
              <li><Link to="/services/geo" style={{ color: 'var(--color-text-muted)' }}>GEO Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Company & Insights</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/why-digilari" style={{ color: 'var(--color-text-muted)' }}>Why Digilari</Link></li>
              <li><Link to="/our-process" style={{ color: 'var(--color-text-muted)' }}>Our Process</Link></li>
              <li><Link to="/digital-marketing-partner-program" style={{ color: 'var(--color-text-muted)' }}>Partner Program</Link></li>
              <li><Link to="/digital-results-guarantee" style={{ color: 'var(--color-text-muted)' }}>Results Guarantee</Link></li>
              <li><Link to="/faqs" style={{ color: 'var(--color-text-muted)' }}>FAQs</Link></li>
              <li style={{ marginTop: '0.5rem' }}><Link to="/case-studies" style={{ color: 'var(--color-text-muted)' }}>Case Studies</Link></li>
              <li><Link to="/marketing-terms" style={{ color: 'var(--color-text-muted)' }}>Marketing Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>Our Integration Stack</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', alignItems: 'center', opacity: 0.5 }}>
            {[
              { file: "Ahrefs.png", alt: "Ahrefs" },
              { file: "GA4.png", alt: "Google Analytics 4" },
              { file: "Google_Ads_logo.svg.png", alt: "Google Ads" },
              { file: "LinkedIn-Ads.jpeg", alt: "LinkedIn Ads" },
              { file: "Meta-Logo.png", alt: "Meta" },
              { file: "Antigravity.png", alt: "Antigravity" }
            ].map((logo, i) => (
              <img key={i} src={`/images/tools/${logo.file}`} width="100" height="30" loading="lazy" alt={logo.alt} style={{ maxHeight: '30px', maxWidth: '100px', objectFit: 'contain', filter: 'grayscale(100%) brightness(1.5)' }} />
            ))}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <p>&copy; {new Date().getFullYear()} Digilari Construction.</p>
            <div style={{ display: 'flex', gap: '1.5rem', fontWeight: '600' }}>
              <a href="https://www.facebook.com/pages/Digilari-Online-Marketing/822553694487339" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>Facebook</a>
              <a href="https://www.instagram.com/digilarimedia/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>Instagram</a>
              <a href="https://www.linkedin.com/company/digilari-online-marketing?reportsuccess=KJ_KkFGTDCfMt-A7wV3Fn9Yvgwr02Kd6AZHGx4bQCDiP6-2rfP2oxyVoEQiPrcAQ7Bf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>LinkedIn</a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
