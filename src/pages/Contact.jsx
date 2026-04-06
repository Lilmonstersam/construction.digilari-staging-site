import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyUrl: '',
    enquiryType: '',
    contactTime: '',
    package: '',
    services: [],
    source: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (step === 1 && formData.firstName && formData.email) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Simulate submission
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Let's Build Your Commercial Pipeline | Digilari Construction</title>
        <meta name="description" content="Ready to transform your construction marketing? Contact Digilari Construction today for a free B2B strategy session and audit." />
      </Helmet>

      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
              LET'S TALK
            </div>
            <h1 className="mb-4 text-gradient">Secure Your Commercial Pipeline</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
              We partner exclusively with forward-thinking construction suppliers and contractors. Book a free, no-obligation strategy session to discover how we can guarantee your growth.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Email</div>
                  <div style={{ color: 'var(--color-text-muted)' }}>
                    <a href="mailto:marketing@digilari.com.au" style={{ color: 'inherit' }}>marketing@digilari.com.au</a>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Phone</div>
                  <div style={{ color: 'var(--color-text-muted)' }}>
                    <a href="tel:1300859358" style={{ color: 'inherit' }}>1300 859 358</a>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Head Office</div>
                  <div style={{ color: 'var(--color-text-muted)' }}>Brisbane, Queensland<br/>Servicing all of AU & NZ</div>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Accreditations</div>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <img src={`${import.meta.env.BASE_URL}images/certifications/imgi_23_PartnerBadgeClickable.jpeg`} alt="Google Partner" style={{ height: '48px', width: 'auto', borderRadius: '4px' }} />
                  <img src={`${import.meta.env.BASE_URL}images/certifications/imgi_24_bingads_accredited_badge.jpeg`} alt="Bing Ads Accredited" style={{ height: '48px', width: 'auto', borderRadius: '4px' }} />
                  <img src={`${import.meta.env.BASE_URL}images/certifications/images.jpeg`} alt="Meta Business Partner" style={{ height: '48px', width: 'auto', borderRadius: '4px' }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              {/* Progress Bar */}
              {step < 3 && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--color-border)' }}>
                  <div style={{ height: '100%', background: 'var(--color-primary)', width: step === 1 ? '50%' : '100%', transition: 'width 0.4s ease' }}></div>
                </div>
              )}

              {step === 1 && (
                <div className="form-step fade-in">
                  <h3 className="mb-4">Book Your Free Session</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Tell us a bit about you so we can prepare.</p>
                  
                  <form onSubmit={nextStep} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>First Name *</label>
                        <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} placeholder="John" style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Work Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@constructioncompany.com.au" style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Company URL</label>
                      <input type="url" name="companyUrl" value={formData.companyUrl} onChange={handleInputChange} placeholder="https://..." style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none' }} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                      Continue <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="form-step fade-in">
                  <button onClick={prevStep} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '1.5rem', padding: 0, fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <h3 className="mb-4">Project Details</h3>
                  
                  <form onSubmit={submitForm} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Preferred Contact Time(s)</label>
                        <input type="text" name="contactTime" value={formData.contactTime} onChange={handleInputChange} placeholder="e.g. Next Tuesday morning, or Any day after 2pm" style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none' }} />
                      </div>
                      
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Preferred Package</label>
                        <select name="package" value={formData.package} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none' }}>
                          <option value="">Select an option...</option>
                          <option value="basic">Basic Tier: The Digital Foundation</option>
                          <option value="professional">Professional Tier: Multi-Channel Lead Engine</option>
                          <option value="elite">Elite Tier: The Autonomous Enterprise</option>
                          <option value="unsure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Where did you hear about us?</label>
                      <select name="source" value={formData.source} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none' }}>
                        <option value="">Select an option...</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media (LinkedIn/Facebook)</option>
                        <option value="referral">Client Referral / Word of Mouth</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>Services You're Interested In</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {['SEO / GEO', 'Google Ads', 'Social Media', 'Lead Generation', 'Conversion Optimisation', 'Web Development'].map(service => (
                          <label key={service} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                            <input type="checkbox" name="services" value={service} checked={formData.services.includes(service)} onChange={handleInputChange} style={{ accentColor: 'var(--color-primary)' }} />
                            {service}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Message & Additional Info</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="Tell us about your pipeline challenges..." style={{ width: '100%', padding: '0.75rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text)', outline: 'none', resize: 'vertical' }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                      Confirm Strategy Session <CheckCircle size={18} />
                    </button>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>We'll reach out within 1 business day.</p>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div className="form-step fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(56, 161, 105, 0.1)', color: '#38a169', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="mb-2">Session Requested!</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                    Thanks for reaching out, {formData.firstName || 'there'}. We've received your details and our growth team will contact you shortly to confirm your session.
                  </p>
                  <Link to="/" className="btn btn-secondary">Return to Homepage</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
