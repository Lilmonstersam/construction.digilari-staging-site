import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Network, 
  MessageSquare, 
  Calendar, 
  BarChart, 
  Settings, 
  Zap, 
  Users, 
  TrendingUp, 
  Search,
  Plus,
  Minus,
  ShieldCheck,
  PlayCircle,
  BrainCircuit,
  Workflow,
  Gauge,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadGeneration = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeVideoTab, setActiveVideoTab] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; 

      if (currentScrollY > heroHeight) {
        if (currentScrollY < lastScrollY) {
          setIsStickyVisible(true);
        } else {
          setIsStickyVisible(false);
        }
      } else {
        setIsStickyVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const videoTabs = [
    {
      title: "Intelligent Lead Capture & Routing",
      icon: <Network size={20} />,
      desc: "No more lost leads or messy lists. Every lead is captured accurately, categorised by intent and behaviour, and routed to the right workflow in real time for faster response and fewer missed opportunities.",
      placeholderText: "Lead Routing Automation Preview",
      bgColor: 'var(--color-surface)'
    },
    {
      title: "Automated Lead Qualification",
      icon: <Gauge size={20} />,
      desc: "Forget manual segmentation. Our AI automatically scores leads based on behaviour and conversion likelihood, surfacing ready-to-buy prospects to sales teams while identifying leads requiring further nurture.",
      placeholderText: "Predictive Lead Scoring Preview",
      bgColor: 'rgba(228, 27, 111, 0.1)'
    },
    {
      title: "AI Conversational Engagement",
      icon: <MessageSquare size={20} />,
      desc: "Use intuitive AI tools to start conversations, nurture responses, and schedule appointments 24/7 without human intervention. Intelligent messaging across email, SMS, and webchat builds conversion momentum.",
      placeholderText: "AI Appointment Setter Preview",
      bgColor: 'rgba(253, 155, 40, 0.1)'
    }
  ];

  const faqs = [
    {
      q: "What exactly is AI-Driven Lead Management?",
      a: "It uses artificial intelligence to automatically capture, score, prioritise, and nurture leads based on their behaviour and likelihood to convert. This reduces manual effort and helps sales teams focus on high-potential opportunities."
    },
    {
      q: "Do we have to change our current CRM?",
      a: "Not at all. We can either optimise your existing CRM or migrate you into the Digilari CRM Manager, whichever offers the most value and scalability for your needs."
    },
    {
      q: "How soon will we see results?",
      a: "Providing you already have a steady lead flow, most clients see improvements in lead engagement and conversion within 30–60 days. ROI increases typically follow shortly after as campaigns and automations begin to scale."
    },
    {
      q: "What is the difference between traditional automation and AI marketing automation?",
      a: "Traditional automation follows static rules. AI marketing automation learns from user interactions, adapts in real-time, and delivers personalised experiences that improve continuously."
    },
    {
      q: "Will this replace my sales team?",
      a: "No. AI enhances your sales team's efficiency; it handles repetitive tasks like follow-ups and data entry so your team can focus on human-to-human selling and closing deals."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Lead Management & Automation | Digilari Construction</title>
        <meta name="description" content="Transform your commercial construction leads into revenue with intelligent CRM setups and AI automation tools." />
      </Helmet>
      
      {/* Smart Sticky Banner */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', zIndex: 100,
        transform: isStickyVisible ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.3s', padding: '1rem',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--color-text)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>AI Lead Management</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
              Request Demo
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(150px)', opacity: '0.1', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(120px)', opacity: '0.05', pointerEvents: 'none' }}></div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', padding: '0.25rem 1rem', borderRadius: '100px', marginBottom: '2.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)', animation: 'pulse 2s infinite' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>Digilari CRM Manager</span>
          </div>
          
          <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '2rem' }}>
            AI-DRIVEN <br/>
            <span className="text-gradient-primary">
              LEAD MANAGEMENT
            </span> <br/>
            & AUTOMATION
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
            Transform your leads into revenue for your commercial construction business with an intelligent CRM set-up. As a specialist construction marketing agency, we integrate intuitive AI tools that automate engagement, qualification, and conversion.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Book Strategy Call <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Modern Sales Challenge</span>
            <h2 data-toc="The Sales Challenge">Why AI-Driven Lead Management Matters Today</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>
              People are overwhelmed with manual follow-ups, cold contacts fall through the cracks, and sales teams waste time on low-intent leads. AI-driven lead management changes everything.
            </p>
          </div>
          
          <div className="grid-3">
            {[
              { icon: <Target size={32} />, title: "Qualify & Prioritise", desc: "Automatically qualify and prioritise leads based on behaviour and intent. Stop wasting time on unqualified prospects and focus entirely on high-value accounts.", color: 'var(--color-secondary)' },
              { icon: <Users size={32} />, title: "Personalise at Scale", desc: "Deliver highly personalised experiences to thousands of prospects simultaneously. Make every lead feel like they are your only focus, without the manual effort.", color: 'var(--color-primary)' },
              { icon: <Zap size={32} />, title: "Instant Response", desc: "Reduce response times from hours to seconds. Engage leads instantly when their intent is highest, helping you close more revenue with significantly less manual work.", color: '#10b981' }
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

      {/* Solution Showcase */}
      <section className="section border-subtle">
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Introducing Digilari CRM Manager</span>
            <h2 data-toc="Our AI Solution">How Our AI Lead Management System Solves Your Problems</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>
              Change the way you manage customer relationships with a system that is built to think for you. A powerful Go High Level CRM set-up configured by Digilari to bring your data to life.
            </p>
          </div>
          
          <div className="grid-4" style={{ gridTemplateColumns: window.innerWidth > 1024 ? '1fr 2fr' : '1fr', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {videoTabs.map((tab, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveVideoTab(i)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '1.25rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'background-color 0.3s, color 0.3s, border-color 0.3s', cursor: 'pointer', fontWeight: 700,
                    background: activeVideoTab === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                    border: `1px solid ${activeVideoTab === i ? 'var(--color-secondary)' : 'transparent'}`,
                    color: activeVideoTab === i ? 'var(--color-secondary)' : 'var(--color-text-muted)',
                  }}
                >
                  <div style={{ color: activeVideoTab === i ? 'var(--color-secondary)' : 'var(--color-text-muted)' }}>
                    {tab.icon}
                  </div>
                  {tab.title}
                </button>
              ))}
            </div>

            <div style={{ background: 'var(--color-surface)', borderRadius: '24px', padding: '1.5rem', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', background: videoTabs[activeVideoTab].bgColor, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', border: '1px solid var(--color-border)', cursor: 'pointer', transition: 'border-color 0.3s, opacity 0.3s, background-color 0.3s' }}>
                <PlayCircle size={64} color="var(--color-text)" style={{ marginBottom: '1rem', opacity: 0.8 }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>{videoTabs[activeVideoTab].placeholderText}</span>
              </div>
              <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                  {videoTabs[activeVideoTab].icon} {videoTabs[activeVideoTab].title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{videoTabs[activeVideoTab].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 4rem auto' }}>
            <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#0f1115', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.25rem 0.75rem', marginBottom: '1.5rem', borderRadius: '4px' }}>The Technology Stack</div>
            <h2 data-toc="AI Tools Included">Result-Focused AI Tools You Will Get</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '1.5rem' }}>
              Whether you are using your existing CRM or transitioning into a more advanced lead management system, we integrate intuitive AI tools to deliver clear ROI from day one.
            </p>
          </div>
          
          <div className="grid-3">
            {[
              { title: "Smart Lead Scoring Engines", icon: <Target size={24} color="var(--color-secondary)"/>, desc: "Predictive lead scoring algorithms that evaluate prospect behaviour to identify your most qualified, sales-ready opportunities automatically." },
              { title: "AI Conversational Workflows", icon: <MessageSquare size={24} color="var(--color-primary)"/>, desc: "Intelligent, multi-channel response workflows that engage leads organically across SMS, email, and webchat without human delay." },
              { title: "Automated Follow-Up Campaigns", icon: <Workflow size={24} color="var(--color-secondary)"/>, desc: "Robust, automated lead nurturing sequences designed to keep cold prospects engaged until they are ready to purchase." },
              { title: "Lead Prioritisation Dashboards", icon: <BarChart size={24} color="var(--color-primary)"/>, desc: "Clear, intuitive interfaces for your sales team, highlighting exactly who they need to contact each day based on AI-driven lead prioritisation." },
              { title: "AI-Enabled Calendar Scheduling", icon: <Calendar size={24} color="var(--color-secondary)"/>, desc: "AI appointment setters that handle the back-and-forth of booking meetings, dropping qualified prospects directly into your sales schedule." },
              { title: "Real-Time CRM Analytics", icon: <TrendingUp size={24} color="var(--color-primary)"/>, desc: "Deep insights and performance metrics tracking every interaction, ensuring your AI marketing automation is always driving tangible revenue." }
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ background: 'var(--color-bg)' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(ellipse at right, rgba(253, 155, 40, 0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? '5fr 7fr' : '1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                <ShieldCheck size={20} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Digilari Difference</span>
             </div>
             <h2 data-toc="Our Approach" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
               What Makes Our Approach Different?
             </h2>
             <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
               Clear steps that get you launched fast, without the chaos. We are not just setting up systems; we are engineering outcomes that matter.
             </p>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '1.5rem' }}>
                 <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary)' }}>
                    <TrendingUp size={20}/> Revenue-Driven Outcomes
                 </h3>
                 <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                   Expect more conversions, better lead engagement, faster sales cycles, and clear ROI from day one of your CRM set-up.
                 </p>
               </div>
               
               <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '1.5rem' }}>
                 <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-secondary)' }}>
                    <Bot size={20}/> Continuous Optimisation
                 </h3>
                 <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                   Never set-and-forget. Adaptive AI systems and automations update automatically based on performance metrics, meaning your system gets smarter over time.
                 </p>
               </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>Our CRM Set-Up & Implementation Process</h3>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '27px', top: '1rem', bottom: '1rem', width: '2px', background: 'var(--color-border)' }}></div>
              
              {[
                { step: "01", title: "Strategy & CRM Audit", desc: "We evaluate your current systems, data flow, and workflows to identify key optimisation areas.", icon: <Search size={20}/> },
                { step: "02", title: "CRM Set-Up & Customisation", desc: "We configure your CRM for lead capture, advanced segmentation, AI-powered automation, and reporting dashboards.", icon: <Settings size={20}/> },
                { step: "03", title: "Intuitive AI Tools Integration", desc: "Our team connects tools that empower your CRM to score leads automatically and trigger personalised follow-ups.", icon: <BrainCircuit size={20}/> },
                { step: "04", title: "Training & Enablement", desc: "We onboard your team so they fully understand how to use the system for daily productivity and ongoing growth.", icon: <CheckCircle2 size={20}/> }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: idx !== 3 ? '2.5rem' : 0, position: 'relative' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 10, border: '4px solid var(--color-bg)' }}>
                    {item.icon}
                  </div>
                  <div style={{ paddingTop: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Step {item.step}</div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Summary */}
      <section id="results" className="section border-subtle bg-surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 data-toc="Real Results" className="mb-8">Real Results from AI-Driven Lead Management</h2>
          </div>
          
          <div className="grid-3">
            {[
              { client: "Tyre Doctor", industry: "Mining", image: "https://tyredoctor.com.au/wp-content/uploads/2021/07/logo_without_group.png", stat: "38%", metric: "Qualified Lead Increase", link: "https://digilari.com.au/case-studies/tyredoctor/" },
              { client: "OzHitch", industry: "Manufacturing", image: "https://ozhitch.com/wp-content/uploads/2024/04/OZHITCH-LOGO-2048x438.png", stat: "2x", metric: "Reply Rate Growth", link: "https://digilari.com.au/case-studies/ozhitch/" },
              { client: "Duracube", industry: "Construction", image: "https://duracube.com.au/wp-content/uploads/2022/04/identity-768x138.png", stat: "90 Days", metric: "To Clear ROI", link: "https://digilari.com.au/case-studies/duracube/" }
            ].map((study, i) => (
              <a key={i} href={study.link} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: 0, display: 'block', overflow: 'hidden' }}>
                <div style={{ height: '180px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', borderBottom: '1px solid var(--color-border)' }}>
                  <img src={study.image} alt={study.client} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(100%) brightness(0.5)' }} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-bg)', color: 'var(--color-text-muted)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid var(--color-border)' }}>{study.industry}</div>
                </div>
                <div style={{ padding: '2.5rem 2rem' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-secondary)', lineHeight: 1, marginBottom: '0.5rem' }}>{study.stat}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>{study.metric}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{study.client}</h3>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read Case Study <ArrowRight size={14} /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Stack */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ padding: '3rem 0', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>Our Integration Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center', opacity: 0.7 }}>
              {[
                { file: "Ahrefs.png", alt: "Ahrefs" },
                { file: "GA4.png", alt: "Google Analytics 4" },
                { file: "Google_Ads_logo.svg.png", alt: "Google Ads" },
                { file: "LinkedIn-Ads.jpeg", alt: "LinkedIn Ads" },
                { file: "Meta-Logo.png", alt: "Meta" },
                { file: "Antigravity.png", alt: "Antigravity" }
              ].map((logo, i) => (
                <img key={i} src={`/images/tools/${logo.file}`} width="140" height="40" loading="lazy" alt={logo.alt} style={{ maxHeight: '40px', maxWidth: '140px', objectFit: 'contain', filter: 'grayscale(100%) brightness(1.2)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & FAQ */}
      <section id="contact" className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'start' }}>
          
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Common Questions</span>
              <h2 data-toc="FAQs">Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: '100%', padding: '1.5rem', textAlign: 'left', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: 'transparent', border: 'none', color: 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', fontWeight: 700 }}>
                    <span style={{ color: openFaq === i ? 'var(--color-secondary)' : 'var(--color-text)', pr: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
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
               <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Transform Your Lead Management?</h3>
               <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>Book your strategy call or request a demo of Digilari CRM Manager with intuitive AI tools in action.</p>
               
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
                   <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Your Email *</label>
                   <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none' }} />
                 </div>
                 
                 <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>What are you interested in? *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--color-bg)', border: '1px solid var(--color-secondary)', borderRadius: '12px', cursor: 'pointer' }}>
                        <input type="radio" name="requestType" defaultChecked style={{ accentColor: 'var(--color-secondary)' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Request a Demo</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', cursor: 'pointer' }}>
                        <input type="radio" name="requestType" style={{ accentColor: 'var(--color-secondary)' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Strategy Call</span>
                      </label>
                    </div>
                 </div>

                 <button className="btn btn-secondary" style={{ width: '100%', padding: '1.25rem', marginTop: '1rem', border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)' }}>
                    Submit Request <ArrowRight size={18} />
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

export default LeadGeneration;
