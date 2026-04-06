import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { 
  ArrowRight, CheckCircle2, Target, Users, Zap, TrendingUp, Search, Plus, Minus,
  ShieldCheck, BrainCircuit, Settings, BarChart, Globe, Shield, Mail, PlayCircle,
  Network, Gauge, MessageSquare, Calendar, Workflow
} from 'lucide-react';

const iconMap = {
  Target, Users, Zap, TrendingUp, Search, BrainCircuit, Settings, BarChart, Globe, Shield, Mail, ShieldCheck, CheckCircle2, ArrowRight,
  PlayCircle, Network, Gauge, MessageSquare, Calendar, Workflow
};

const IntegrationStack = () => (
  <div style={{ padding: '3rem 0', textAlign: 'center' }}>
    <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Our Integration Stack</span>
    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
      We connect best-in-class platforms to drive measurable performance across every channel.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center', opacity: 0.7, flexWrap: 'nowrap', overflowX: 'auto' }}>
      {[
        { file: "Ahrefs.png", alt: "Ahrefs" },
        { file: "GA4.png", alt: "Google Analytics 4" },
        { file: "Google_Ads_logo.svg.png", alt: "Google Ads" },
        { file: "LinkedIn-Ads.jpeg", alt: "LinkedIn Ads" },
        { file: "Meta-Logo.png", alt: "Meta" },
        { file: "Antigravity.png", alt: "Antigravity" }
      ].map((logo, i) => (
        <img key={i} src={`${import.meta.env.BASE_URL}images/tools/${logo.file}`} width="120" height="36" loading="lazy" alt={logo.alt} style={{ height: '36px', width: 'auto', maxWidth: '120px', objectFit: 'contain', flexShrink: 0 }} />
      ))}
    </div>
  </div>
);

// Case Studies Section component
const CaseStudies = ({ service }) => {
  const caseStudies = service.caseStudies || [
    { client: "Placeholder Client", industry: "Construction", stat: "—", metric: "Results Incoming", link: "#" },
    { client: "Placeholder Client", industry: "Manufacturing", stat: "—", metric: "Results Incoming", link: "#" },
    { client: "Placeholder Client", industry: "Suppliers", stat: "—", metric: "Results Incoming", link: "#" }
  ];

  return (
    <section id="results" className="section border-subtle bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Proven Results</span>
          <h2 data-toc="Case Studies" className="mb-8">Real Results from {service.title}</h2>
        </div>
        <div className="grid-3">
          {caseStudies.map((study, i) => (
            <a key={i} href={study.link} target={study.link !== '#' ? '_blank' : undefined} rel="noopener noreferrer" className="card" style={{ padding: 0, display: 'block', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ height: '120px', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', borderBottom: '1px solid var(--color-border)' }}>
                {study.image ? (
                  <img src={study.image} alt={study.client} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(100%) brightness(0.5)' }} />
                ) : (
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-border)' }}>{study.client}</span>
                )}
                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'var(--color-bg)', color: 'var(--color-text-muted)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid var(--color-border)' }}>{study.industry}</div>
              </div>
              <div style={{ padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-secondary)', lineHeight: 1, marginBottom: '0.25rem' }}>{study.stat}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{study.metric}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>{study.client}</h3>
                <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read Case Study <ArrowRight size={14} /></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// CRM Manager / Solution Showcase section (adapted from LeadGeneration)
const SolutionShowcase = ({ service }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = service.solutionTabs || [
    {
      title: "Data-Driven Strategy",
      icon: "BarChart",
      desc: `Our approach to ${service.title.toLowerCase()} is built on real-time data analysis and predictive modelling, ensuring every decision is backed by measurable outcomes.`,
      placeholderText: "Strategy Dashboard Preview"
    },
    {
      title: "Intelligent Automation",
      icon: "BrainCircuit",
      desc: `We leverage AI-powered tools to automate repetitive tasks, optimise campaigns in real-time, and surface the insights that matter most to your construction business.`,
      placeholderText: "Automation Workflow Preview"
    },
    {
      title: "Performance Reporting",
      icon: "TrendingUp",
      desc: `Transparent, jargon-free reporting tied directly to your commercial KPIs. Know exactly how your marketing investment translates into qualified leads and project wins.`,
      placeholderText: "Reporting Dashboard Preview"
    }
  ];

  return (
    <section className="section border-subtle">
      <div className="container">
        <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
          <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{service.solutionLabel || 'Our Platform'}</span>
          <h2 data-toc={service.solutionTocTitle || 'Our Solution'}>{service.solutionTitle || `How We Deliver ${service.title} Results`}</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>
            {service.solutionDesc || `A powerful, integrated approach to ${service.title.toLowerCase()} configured specifically for the commercial construction sector.`}
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 1024 ? '1fr 2fr' : '1fr', gap: '2rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {tabs.map((tab, i) => {
              const TabIcon = iconMap[tab.icon] || BarChart;
              return (
                <button 
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '1.25rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s', cursor: 'pointer', fontWeight: 700,
                    background: activeTab === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                    border: `1px solid ${activeTab === i ? 'var(--color-secondary)' : 'transparent'}`,
                    color: activeTab === i ? 'var(--color-secondary)' : 'var(--color-text-muted)',
                  }}
                >
                  <div style={{ color: activeTab === i ? 'var(--color-secondary)' : 'var(--color-text-muted)' }}>
                    <TabIcon size={20} />
                  </div>
                  {tab.title}
                </button>
              );
            })}
          </div>

          <div style={{ background: 'var(--color-surface)', borderRadius: '24px', padding: '1.5rem', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)', cursor: 'pointer', transition: 'all 0.3s' }}>
              <PlayCircle size={64} color="var(--color-text)" style={{ marginBottom: '1rem', opacity: 0.8 }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>{tabs[activeTab].placeholderText}</span>
            </div>
            <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
              {(() => { const TIcon = iconMap[tabs[activeTab].icon] || BarChart; return (
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                  <TIcon size={20} /> {tabs[activeTab].title}
                </h3>
              ); })()}
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{tabs[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Technology Stack Section (adapted from LeadGeneration)
const TechnologyStack = ({ service }) => {
  const tools = service.techTools || [
    { title: "Technical SEO Auditing", icon: "Search", desc: `Comprehensive site analysis identifying technical barriers to ${service.title.toLowerCase()} performance.` },
    { title: "Data Analytics & Reporting", icon: "BarChart", desc: "Real-time dashboards tracking the KPIs that matter to construction businesses." },
    { title: "Competitive Intelligence", icon: "Target", desc: "Deep-dive analysis of your competitors' digital strategies to find exploitable gaps." },
    { title: "Content Optimisation", icon: "BrainCircuit", desc: "AI-assisted content tools that ensure maximum relevance and topical authority." },
    { title: "Campaign Automation", icon: "Settings", desc: "Automated workflows that nurture leads and optimise campaigns without manual effort." },
    { title: "Performance Tracking", icon: "TrendingUp", desc: "End-to-end attribution showing exactly how each channel contributes to pipeline." }
  ];

  return (
    <section className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
          <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#0f1115', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.25rem 0.75rem', marginBottom: '1.5rem', borderRadius: '4px' }}>The Technology Stack</div>
          <h2 data-toc="Our Tools">{service.techTitle || `Tools & Technology Behind Your ${service.title}`}</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>
            {service.techDesc || `Industry-leading tools configured specifically for construction sector ${service.title.toLowerCase()}.`}
          </p>
        </div>
        <div className="grid-3">
          {tools.map((item, idx) => {
            const ToolIcon = iconMap[item.icon] || Target;
            return (
              <div key={idx} className="card" style={{ background: 'var(--color-bg)' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                  <ToolIcon size={24} color={idx % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-primary)'} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Rich layout pages (LeadGeneration-style)
const RICH_PAGES = ['seo-agency', 'ppc-agency', 'conversion-rate-optimisation', 'aeo', 'geo', 'zero-click-search'];

const ServicePage = () => {
  const { serviceId, categoryId } = useParams();
  const resolvedId = categoryId ? serviceId : serviceId;
  const service = servicesData[resolvedId];
  const [openFaq, setOpenFaq] = useState(0);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!RICH_PAGES.includes(resolvedId)) return;
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
  }, [lastScrollY, resolvedId]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  if (RICH_PAGES.includes(resolvedId)) {
    return <RichServiceLayout service={service} serviceId={resolvedId} openFaq={openFaq} setOpenFaq={setOpenFaq} isStickyVisible={isStickyVisible} />;
  }

  return <SimpleServiceLayout service={service} serviceId={resolvedId} />;
};

const SimpleServiceLayout = ({ service, serviceId }) => (
  <>
    <Helmet>
      <title>{service.metaTitle}</title>
      <meta name="description" content={service.metaDescription} />
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"ProfessionalService","name":"Digilari Construction","url":"https://digilari.com.au/services/${serviceId}"}`}
      </script>
    </Helmet>

    <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-10rem', left: '-10rem', width: '400px', height: '400px', background: 'var(--color-primary)', opacity: '0.05', filter: 'blur(100px)', borderRadius: '50%' }}></div>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h1 className="mb-4 text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>{service.h1}</h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{service.intro}</p>
        {service.intro2 && <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>{service.intro2}</p>}
        <Link to="/contact" className="btn btn-primary">{service.cta} <ArrowRight size={20} /></Link>
      </div>
    </section>

    <section className="section">
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {service.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '4rem' }}>
            {section.tocTitle && <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{section.tocTitle}</span>}
            <h2 data-toc={section.tocTitle || section.title} style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>{section.title}</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>{section.content}</p>
            {section.subsections && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {section.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ flexShrink: 0, marginTop: '2px' }}><CheckCircle2 size={20} color="var(--color-primary)" /></div>
                      <span>{sub.title}</span>
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{sub.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <IntegrationStack />

        <div style={{ background: 'linear-gradient(145deg, var(--color-surface) 0%, #0f1115 100%)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center', marginTop: '3rem' }}>
          <h2 className="mb-4">Ready to Build Your Pipeline?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>Stop chasing generic traffic and let us help you win commercial contracts.</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex' }}>
              {["CEO - Sean Brown.jpeg", "Account Manager - Bridie Conroy.jpeg", "AEO Strategist & AI Engineer - Hui-Sheng Yang.jpeg"].map((img, i) => (
                <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-bg)', marginLeft: i > 0 ? '-8px' : 0, position: 'relative', zIndex: 3 - i }}>
                  <img src={`${import.meta.env.BASE_URL}images/team-members/${img}`} alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Your dedicated team</span>
          </div>
          <Link to="/contact" className="btn btn-primary">{service.cta}</Link>
        </div>
      </div>
    </section>
  </>
);

const RichServiceLayout = ({ service, serviceId, openFaq, setOpenFaq, isStickyVisible }) => {
  const pillars = service.pillars || [];
  const process = service.process || [];
  const faqs = service.faqs || [];
  const differentiators = service.differentiators || [];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      {/* Smart Sticky Banner */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', zIndex: 100,
        transform: isStickyVisible ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.3s', padding: '1rem', paddingRight: '6rem',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--color-text)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{service.title}</span>
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
            Get Started
          </button>
        </div>
      </div>

      {/* Hero with gradient title */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(150px)', opacity: '0.1', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(120px)', opacity: '0.05', pointerEvents: 'none' }}></div>

        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', padding: '0.25rem 1rem', borderRadius: '100px', marginBottom: '2.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)', animation: 'pulse 2s infinite' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>{service.heroBadge || service.title}</span>
          </div>

          <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '2rem' }}>
            {service.h1.split(' ').map((word, i, arr) => {
              // Apply gradient to last 2 words
              if (i >= arr.length - 2) {
                return <span key={i} className="text-gradient-primary">{word}{i < arr.length - 1 ? ' ' : ''}</span>;
              }
              return word + ' ';
            })}
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '1rem', maxWidth: '800px', margin: '0 auto 1rem auto', lineHeight: 1.6 }}>
            {service.intro}
          </p>
          {service.intro2 && (
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
              {service.intro2}
            </p>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              {service.cta} <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Pillars / The Challenge Section */}
      {pillars.length > 0 && (
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{service.pillarsSectionLabel || 'Why This Matters'}</span>
              <h2 data-toc={service.pillarsSectionTitle || 'Why It Matters'}>{service.pillarsSectionTitle || `Why ${service.title} Matters`}</h2>
              {service.pillarsSectionDesc && <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>{service.pillarsSectionDesc}</p>}
            </div>
            <div className="grid-3">
              {pillars.map((pillar, i) => {
                const IconComp = iconMap[pillar.icon] || Target;
                return (
                  <div key={i} className="card" style={{ background: 'var(--color-bg)' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: pillar.color || 'var(--color-secondary)', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                      <IconComp size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{pillar.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Solution Showcase (CRM-Manager style tabbed section) */}
      <SolutionShowcase service={service} />

      {/* Content Sections from existing data */}
      {service.sections.length > 0 && (
        <section className="section border-subtle">
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {service.sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: '4rem' }}>
                {section.tocTitle && <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{section.tocTitle}</span>}
                <h2 data-toc={section.tocTitle || section.title} style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{section.title}</h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>{section.content}</p>
                {section.subsections && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx} className="card" style={{ padding: '1.5rem', background: 'var(--color-bg)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{ flexShrink: 0, marginTop: '2px' }}><CheckCircle2 size={20} color="var(--color-primary)" /></div>
                          <span>{sub.title}</span>
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{sub.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technology Stack */}
      <TechnologyStack service={service} />

      {/* Our Approach / Process Timeline */}
      {(process.length > 0 || differentiators.length > 0) && (
        <section className="section" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(ellipse at right, rgba(253, 155, 40, 0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem' }}>
              {differentiators.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                    <ShieldCheck size={20} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Digilari Difference</span>
                  </div>
                  <h2 data-toc="Our Approach" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    What Makes Our Approach Different?
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {differentiators.map((d, i) => {
                      const DIcon = iconMap[d.icon] || TrendingUp;
                      return (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '1.5rem' }}>
                          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: d.color || 'var(--color-primary)' }}>
                            <DIcon size={20} /> {d.title}
                          </h3>
                          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{d.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {process.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>Our Implementation Process</h3>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '27px', top: '1rem', bottom: '1rem', width: '2px', background: 'var(--color-border)' }}></div>
                    {process.map((item, idx) => {
                      const PIcon = iconMap[item.icon] || CheckCircle2;
                      return (
                        <div key={idx} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: idx !== process.length - 1 ? '2.5rem' : 0, position: 'relative' }}>
                          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 10, border: '4px solid var(--color-bg)' }}>
                            <PIcon size={20} />
                          </div>
                          <div style={{ paddingTop: '0.5rem' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Step {String(idx + 1).padStart(2, '0')}</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      <CaseStudies service={service} />

      {/* Integration Stack */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <IntegrationStack />
        </div>
      </section>

      {/* Contact & FAQ */}
      <section id="contact" className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {faqs.length > 0 && (
            <div>
              <div style={{ marginBottom: '3rem' }}>
                <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Common Questions</span>
                <h2 data-toc="FAQs">Frequently Asked Questions</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: '100%', padding: '1.5rem', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: 'transparent', border: 'none', color: 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', fontWeight: 700 }}>
                      <span style={{ color: openFaq === i ? 'var(--color-secondary)' : 'var(--color-text)', paddingRight: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
                      {openFaq === i ? <Minus size={20} color="var(--color-secondary)" style={{ flexShrink: 0 }} /> : <Plus size={20} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />}
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', animation: 'fadeIn 0.3s ease' }}>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', borderLeft: '2px solid var(--color-secondary)', paddingLeft: '1rem', margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(120px)', opacity: '0.1', pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Get Started?</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>Book your strategy call and discover how we can transform your {service.title.toLowerCase()} results.</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex' }}>
                  {["CEO - Sean Brown.jpeg", "Account Manager - Bridie Conroy.jpeg", "AEO Strategist & AI Engineer - Hui-Sheng Yang.jpeg"].map((img, i) => (
                    <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-surface)', marginLeft: i > 0 ? '-8px' : 0, position: 'relative', zIndex: 3 - i }}>
                      <img src={`${import.meta.env.BASE_URL}images/team-members/${img}`} alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Speak with our specialists</span>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>First Name *</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Last Name *</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text)', outline: 'none' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Your Email *</label>
                    <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Website URL (Optional)</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text)', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Country or State (Optional)</label>
                  <select style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text)', outline: 'none' }}>
                    <option value="">Select State...</option>
                    <option value="NSW">New South Wales</option>
                    <option value="VIC">Victoria</option>
                    <option value="QLD">Queensland</option>
                    <option value="WA">Western Australia</option>
                    <option value="SA">South Australia</option>
                    <option value="TAS">Tasmania</option>
                    <option value="ACT">Australian Capital Territory</option>
                    <option value="NT">Northern Territory</option>
                    <option value="NZ">New Zealand</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Message (Optional)</label>
                  <textarea rows="3" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button className="btn btn-secondary" style={{ width: '100%', padding: '1.25rem', marginTop: '1rem', border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)' }}>
                  {service.cta} <ArrowRight size={18} />
                </button>
                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Or contact us directly:</p>
                  <a href="tel:1300859358" style={{ color: 'var(--color-text)', fontWeight: 600, marginRight: '1rem' }}><span style={{ color: 'var(--color-primary)' }}>Phone:</span> 1300 859 358</a>
                  <a href="mailto:marketing@digilari.com.au" style={{ color: 'var(--color-text)', fontWeight: 600 }}><span style={{ color: 'var(--color-primary)' }}>Email:</span> marketing@digilari.com.au</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ServicePage;
