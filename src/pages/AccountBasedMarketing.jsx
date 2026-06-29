import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  Search,
  Plus,
  Minus,
  ShieldCheck,
  Crosshair,
  Award,
  Network,
  Gauge,
  Workflow,
  BrainCircuit,
  BarChart,
  Layers,
  Repeat,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountBasedMarketing = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeStageTab, setActiveStageTab] = useState(0);

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

  // The ABM engine stages (Identify, Attract, Convert, Measure)
  const stageTabs = [
    {
      title: 'Identify & Target',
      icon: <Crosshair size={20} />,
      tools: ['Market Intelligence', 'Competitor Audit', 'Keyword Research'],
      desc: 'We run a discovery and strategy session to understand your ideal customers and lead management gaps, audit core elements for ABM success, analyse competitors to find market opportunities, and research the target market to pinpoint decision-makers.',
      bgColor: 'var(--color-surface)'
    },
    {
      title: 'Attract & Engage',
      icon: <Network size={20} />,
      tools: ['Technical SEO', 'Content SEO', 'GEO', 'PPC'],
      desc: 'We develop personalised content assets and launch targeted LinkedIn and Search campaigns, combining technical and content SEO with Generative Engine Optimisation so decision-makers encounter your brand at every research touchpoint.',
      bgColor: 'rgba(228, 27, 111, 0.1)'
    },
    {
      title: 'Convert & Close',
      icon: <Gauge size={20} />,
      tools: ['CRO', 'Landing Pages', 'Retargeting'],
      desc: 'We set up lead management and automation, nurturing accounts via CRM workflows. Conversion-optimised landing pages and retargeting keep buying committees engaged until they are ready for a scope of works.',
      bgColor: 'rgba(253, 155, 40, 0.1)'
    },
    {
      title: 'Measure & Optimise',
      icon: <BarChart size={20} />,
      tools: ['HubSpot', 'GA4', 'Data Studio'],
      desc: 'Bi-weekly evaluation meetings keep performance on track, while custom AI agents automate workflow and project progress reporting so optimisation is continuous rather than reactive.',
      bgColor: 'var(--color-surface)'
    }
  ];

  const benefits = [
    { title: 'Sales & Marketing Alignment', icon: <Users size={24} color="var(--color-secondary)" />, desc: 'A unified strategy where both teams target the same accounts with coordinated efforts, replacing top-of-funnel broadness with targeted focus.' },
    { title: 'Higher ROI & Revenue', icon: <TrendingUp size={24} color="var(--color-primary)" />, desc: 'Concentrating effort on accounts most likely to convert dramatically reduces wasted effort on poor-fit prospects, yielding better returns and revenue growth.' },
    { title: 'Personalisation at Scale', icon: <Layers size={24} color="var(--color-secondary)" />, desc: 'Treats accounts as “markets of one”, delivering highly relevant, bespoke content designed for specific stakeholders so they feel understood.' },
    { title: 'Shorter Sales Cycles', icon: <Gauge size={24} color="var(--color-primary)" />, desc: 'Personalised outreach and early, multi-channel engagement with all stakeholders accelerate pipeline velocity and the overall buying process.' },
    { title: 'Efficient Resource Allocation', icon: <Target size={24} color="var(--color-secondary)" />, desc: 'Focuses marketing and sales efforts exclusively on best-fit accounts, reducing wasted ad spend on unqualified leads.' },
    { title: 'Deeper Customer Relationships', icon: <Repeat size={24} color="var(--color-primary)" />, desc: 'Fosters loyalty and positions your company as a trusted partner through ongoing engagement, with the ultimate goal to “Land and Expand”.' }
  ];

  const faqs = [
    {
      q: "What if the numbers drop or we're not happy?",
      a: "We don't believe in hostage-taking. Our engagement is month-to-month after the first 90 days. If targets slip, we activate a recovery plan within the same sprint to get the numbers back online, at no added cost to you."
    },
    {
      q: 'When can we expect real revenue?',
      a: 'Quick wins from CRO and Paid Search can deliver an uplift within 30 days. Sustainable channels like SEO and LinkedIn ABM typically gain momentum at the 90-day mark.'
    },
    {
      q: 'Do you offer a Digital Results Guarantee?',
      a: 'Yes. For our Value-Based Account Management clients, we align our performance directly with agreed KPIs linked to your revenue targets.'
    },
    {
      q: 'We already use HubSpot or Zoho. Can you slot in?',
      a: 'Absolutely. We are platform-agnostic and integrate with HubSpot, GHL, Zoho, and Pipedrive to ensure seamless data flow.'
    }
  ];

  const results = [
    { sector: 'Mining', client: 'Tyre Doctor', stat: '+210%', metric: 'Organic Growth', link: '/case-studies/tyredoctor' },
    { sector: 'Manufacturing', client: 'OzHitch', stat: '14.5x', metric: 'ROAS', link: '/case-studies/ozhitch' },
    { sector: 'Construction', client: 'Duracube', stat: '$4.2M', metric: 'Pipeline', link: '/case-studies/duracube' }
  ];

  return (
    <>
      <Helmet>
        <title>Account-Based Marketing Agency | Digilari Construction</title>
        <meta name="description" content="Australia's premier Account-Based Marketing agency. We combine ABM, AEO, and custom AI workflows to accelerate sales cycles for high-value decision-makers in Mining, Construction, and Logistics." />
      </Helmet>

      {/* Smart Sticky Banner */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', zIndex: 100,
        transform: isStickyVisible ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.3s', padding: '1rem',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--color-text)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Account-Based Marketing</span>
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
            Start Your Campaign
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(150px)', opacity: '0.1', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(120px)', opacity: '0.05', pointerEvents: 'none' }}></div>

        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', padding: '0.25rem 1rem', borderRadius: '100px', marginBottom: '2.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)', animation: 'pulse 2s infinite' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>ABM Management</span>
          </div>

          <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '2rem' }}>
            AUSTRALIA'S PREMIER <br />
            <span className="text-gradient-primary">ACCOUNT-BASED</span> <br />
            MARKETING AGENCY
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '820px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
            We combine advanced Account-Based Marketing, Answer Engine Optimisation (AEO), and custom AI workflows to capture the attention and accelerate the sales cycles of high-value decision-makers in the Mining, Construction, and Logistics sectors.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Start Your Campaign <ArrowRight size={16} />
            </button>
            <Link to="/pricing" className="btn btn-secondary">Estimate Costs</Link>
          </div>
        </div>
      </section>

      {/* The Framework — three pillars */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Framework</span>
            <h2 data-toc="The Framework">Precision B2B Growth</h2>
          </div>

          <div className="grid-3">
            {[
              { icon: <ShieldCheck size={32} />, title: 'Brand Authority', desc: 'Establish undisputed technical leadership. We use E-E-A-T principles to ensure decision-makers trust your specifications over the competition.', color: 'var(--color-secondary)' },
              { icon: <Target size={32} />, title: 'High-Intent Leads', desc: 'Move beyond vanity metrics. We target specific job titles and transactional queries, delivering enquiries ready for a scope of works.', color: 'var(--color-primary)' },
              { icon: <TrendingUp size={32} />, title: 'Pipeline Velocity', desc: 'A lead isn’t a sale. We integrate CRM automation to nurture long-cycle deals, accelerating the journey from enquiry to signed contract.', color: '#10b981' }
            ].map((pillar, i) => (
              <div key={i} className="card" style={{ background: 'var(--color-bg)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: pillar.color, marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision over Volume */}
      <section className="section border-subtle">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Precision Over Volume</span>
          <h2 data-toc="Precision Over Volume" style={{ marginBottom: '1.5rem' }}>Engineers need proof. Not marketing fluff.</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Traditional marketing is like fishing with a net, hoping to catch a qualified lead. In the Backbone Industries, where a single contract is worth millions, you need a spear.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Account-Based Marketing (ABM) treats high-value accounts as “markets of one.” We replace broad, top-of-funnel fluff with bespoke, multi-channel engagement targeted at specific buying committees.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            By leveraging advanced Answer Engine Optimisation (AEO) and integrating custom AI Agents to automate workflows, we don’t just capture attention, we accelerate your entire sales cycle.
          </p>
          <button onClick={() => scrollToSection('results')} className="btn btn-secondary">See Our Results <ArrowRight size={16} /></button>
        </div>
      </section>

      {/* The ABM Engine — tabbed stages */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#0f1115', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.25rem 0.75rem', marginBottom: '1.5rem', borderRadius: '4px' }}>The ABM Engine</div>
            <h2 data-toc="The ABM Engine">A Full-Funnel System to Penetrate High-Value Accounts</h2>
          </div>

          <div className="grid-4" style={{ gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 1024 ? '1fr 2fr' : '1fr', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {stageTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStageTab(i)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '1.25rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'background-color 0.3s, color 0.3s, border-color 0.3s', cursor: 'pointer', fontWeight: 700,
                    background: activeStageTab === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                    border: `1px solid ${activeStageTab === i ? 'var(--color-secondary)' : 'transparent'}`,
                    color: activeStageTab === i ? 'var(--color-secondary)' : 'var(--color-text-muted)'
                  }}
                >
                  <div style={{ color: activeStageTab === i ? 'var(--color-secondary)' : 'var(--color-text-muted)' }}>{tab.icon}</div>
                  {tab.title}
                </button>
              ))}
            </div>

            <div style={{ background: 'var(--color-bg)', borderRadius: '24px', padding: '2.5rem', border: '1px solid var(--color-border)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                {stageTabs[activeStageTab].icon} {stageTabs[activeStageTab].title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {stageTabs[activeStageTab].tools.map((tool, i) => (
                  <span key={i} style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', background: 'rgba(255,94,0,0.08)', border: '1px solid rgba(255,94,0,0.2)', borderRadius: '100px', padding: '0.3rem 0.8rem' }}>{tool}</span>
                ))}
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{stageTabs[activeStageTab].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in ABM — benefits grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Strategic Value</span>
            <h2 data-toc="Why Invest in ABM">Why Invest in ABM?</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>
              Instead of broad outreach, ABM focuses resources on a defined list of high-value prospects. Combined with AI-powered chatbots and strategic sales alignment, we turn your digital presence into an efficient, high-ROI revenue engine.
            </p>
          </div>

          <div className="grid-3">
            {benefits.map((item, idx) => (
              <div key={idx} className="card" style={{ background: 'var(--color-surface)' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/pricing" className="btn btn-secondary">Service Cost Calculator <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="section border-subtle" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-16" style={{ marginBottom: '3rem' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Results. Not Promises.</span>
            <h2 data-toc="Results">Account-Level Outcomes Across the Backbone Industries</h2>
          </div>

          <div className="grid-3">
            {results.map((study, i) => (
              <Link key={i} to={study.link} className="card" style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{study.sector}</div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-secondary)', lineHeight: 1, marginBottom: '0.5rem' }}>{study.stat}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>{study.metric}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{study.client}</h3>
                <div style={{ color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read Case Study <ArrowRight size={14} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & FAQ */}
      <section id="contact" className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 1024 ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Market Intelligence & Hard Truths</span>
              <h2 data-toc="FAQs">Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: '100%', padding: '1.5rem', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: 'transparent', border: 'none', color: 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', fontWeight: 700 }}>
                    <span style={{ color: openFaq === i ? 'var(--color-secondary)' : 'var(--color-text)', transition: 'color 0.2s' }}>{faq.q}</span>
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

          <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(120px)', opacity: '0.1', pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Start Your Campaign</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>You don’t need more traffic. You need the right traffic. Tell us about your target accounts and we’ll build the engine.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>First Name *</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Last Name *</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Work Email *</label>
                  <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Tell us about your target accounts</label>
                  <textarea rows="3" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none', resize: 'vertical' }} />
                </div>
                <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', marginTop: '0.5rem' }}>
                  Request Proposal <ArrowRight size={18} />
                </button>
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
      `}</style>
    </>
  );
};

export default AccountBasedMarketing;
