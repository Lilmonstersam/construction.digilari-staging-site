import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Mail,
  Users,
  PenTool,
  BarChart,
  Repeat,
  Heart,
  TrendingUp,
  DollarSign,
  Send,
  Plus,
  Minus,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailMarketing = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      if (currentScrollY > heroHeight) {
        setIsStickyVisible(currentScrollY < lastScrollY);
      } else {
        setIsStickyVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const expertise = [
    { title: 'Email Campaign Development & Management', icon: <Mail size={24} color="var(--color-secondary)" />, desc: 'A personalised email strategy built around your goals and audience: identifying target segments, choosing the right campaign types, setting measurable KPIs, and scheduling and sending.' },
    { title: 'Customer List Management', icon: <Users size={24} color="var(--color-primary)" />, desc: 'We automate your campaigns and make sure the right message reaches the right customer at the right time, with list segmentation, list cleaning, and steady list growth.' },
    { title: 'Design & Copywriting', icon: <PenTool size={24} color="var(--color-secondary)" />, desc: 'Visually engaging, effective campaigns with custom templates, well-designed layouts, and compelling copy that holds your audience’s attention.' },
    { title: 'Reporting & Analytics', icon: <BarChart size={24} color="var(--color-primary)" />, desc: 'Track campaign performance in real time, monitor and report on results, and make data-driven decisions to keep improving.' }
  ];

  const benefits = [
    { title: 'Extending Customer Lifetime Value', icon: <Repeat size={28} />, desc: 'We build stronger relationships through targeted campaigns that keep customers engaged and coming back, lifting lifetime value.', color: 'var(--color-secondary)' },
    { title: 'Boosting Customer Loyalty', icon: <Heart size={28} />, desc: 'Consistent, relevant communication builds a loyal base and encourages repeat business.', color: 'var(--color-primary)' },
    { title: 'Generating More Revenue', icon: <TrendingUp size={28} />, desc: 'Promote your products and services to existing customers with campaigns built to drive more sales.', color: '#10b981' },
    { title: 'Less Cost, Higher Return', icon: <DollarSign size={28} />, desc: 'Email is one of the most cost-effective channels available, delivering a high return on investment.', color: 'var(--color-secondary)' }
  ];

  const faqs = [
    { q: 'What types of email marketing services do you offer?', a: 'Campaign strategy, email design and copywriting, campaign management, list management, automation, reporting and analytics, and deliverability.' },
    { q: 'How do you determine the best strategy for my business?', a: 'We work closely with you to understand your business goals, target audience, and industry, then build a customised strategy tailored to your needs.' },
    { q: 'How do you track the success of my campaigns?', a: 'We use open rates, click-through rates, conversion rates, and revenue generated, with regular reports so you can measure success and make data-driven decisions.' },
    { q: 'How do you ensure my emails land in the inbox?', a: 'We follow deliverability best practices: list segmentation, cleaning and growth, monitoring sending and IP reputation, adhering to email regulations, and working with ISPs and ESPs.' },
    { q: 'How much does your service cost?', a: 'Pricing depends on the services and package you choose. We build a package that fits your budget and meets your specific needs.' },
    { q: 'How long does it take to see results?', a: 'It varies by campaign and goals, but we set measurable KPIs up front and work to deliver results as quickly as possible.' }
  ];

  return (
    <>
      <Helmet>
        <title>Email Marketing (EDM) for Construction | Digilari Construction</title>
        <meta name="description" content="Drive conversions with Digilari's email marketing service: expert strategy, personalised campaigns, list management, and advanced reporting for B2B construction." />
      </Helmet>

      {/* Sticky CTA banner */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', zIndex: 100,
        transform: isStickyVisible ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.3s', padding: '1rem',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--color-text)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Marketing (EDM)</span>
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
            Request Package
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(150px)', opacity: '0.1', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', padding: '0.25rem 1rem', borderRadius: '100px', marginBottom: '2.5rem' }}>
            <Mail size={14} color="var(--color-secondary)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>Email Marketing (EDM)</span>
          </div>
          <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem' }}>
            Connect With Your Audience, <br /><span className="text-gradient-primary">Drive Sales With EDM</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '760px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
            Our email marketing service helps you reach the right audience and drive conversions, from regular newsletters and drip campaigns to promotions, event invitations, and surveys, built for long B2B construction sales cycles.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Request Your Package <ArrowRight size={16} /></button>
            <Link to="/pricing" className="btn btn-secondary">Check Our Pricing</Link>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Our Email Marketing Expertise</span>
            <h2 data-toc="Our Expertise">A Complete EDM Service, Done For You</h2>
          </div>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {expertise.map((item, i) => (
              <div key={i} className="card" style={{ background: 'var(--color-bg)' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Why EDM Works</span>
            <h2 data-toc="Why EDM Works">The Benefits of Email Marketing</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>
              A strong customer database makes all the difference. Email lets you personalise, segment, and measure, building stronger relationships and increasing customer loyalty.
            </p>
          </div>
          <div className="grid-4">
            {benefits.map((b, i) => (
              <div key={i} className="card" style={{ background: 'var(--color-surface)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: b.color, marginBottom: '1.25rem', border: '1px solid var(--color-border)' }}>{b.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success story */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Success Story</span>
              <h2 data-toc="Success Story" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Three Springs Farm</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                To stay top of mind and encourage repurchases, we built an email programme in Three Springs Farm’s own voice, supporting customers’ knowledge of the product, farm, and process. Each newsletter went to past clients with a seasonal promotion, increasing website purchases, subscriptions, and revenue.
              </p>
              <Link to="/case-studies/three-springs-farm" className="btn btn-secondary">Read the Case Study <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {[
                { stat: '2x', label: 'Average open rate vs industry average' },
                { stat: '>2%', label: 'Average click-through rate (above the 2.01% industry average)' },
                { stat: '↑', label: 'Increase in online revenue from email' }
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', minWidth: '56px' }}>{s.stat}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact + FAQ */}
      <section id="contact" className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 1024 ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Have Questions?</span>
              <h2 data-toc="FAQs">Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: '100%', padding: '1.5rem', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: 'transparent', border: 'none', color: 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', fontWeight: 700 }}>
                    <span style={{ color: openFaq === i ? 'var(--color-secondary)' : 'var(--color-text)' }}>{faq.q}</span>
                    {openFaq === i ? <Minus size={20} color="var(--color-secondary)" style={{ flexShrink: 0 }} /> : <Plus size={20} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />}
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', borderLeft: '2px solid var(--color-secondary)', paddingLeft: '1rem', margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(120px)', opacity: '0.1', pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Request Our Email Marketing Package</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>Claim your free 30-minute consultation with a strategist and a free website audit.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Full Name *</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Work Email *</label>
                  <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none' }} />
                </div>
                <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', marginTop: '0.5rem' }}>
                  Book Free Consultation <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailMarketing;
