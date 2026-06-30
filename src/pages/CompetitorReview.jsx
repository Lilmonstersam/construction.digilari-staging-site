import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Upload, Info, Target, Globe, Lock, Calendar, CreditCard,
  Lightbulb, CheckCircle2, User, Building2, Mail, Phone, X
} from 'lucide-react';

// Theme-consistent port of the Digilari Competitor & Performance Review tool.
// Multi-step intake → gated example report with an unlock modal.

const fieldStyle = {
  width: '100%', padding: '0.9rem 1rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)',
  borderRadius: '12px', color: 'var(--color-text)', outline: 'none', fontSize: '1rem'
};
const labelStyle = { display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' };
const sectionScoreColor = (score) => score >= 80 ? '#10b981' : score >= 50 ? '#fd9b28' : '#ef4444';

const CompetitorReview = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [competitors, setCompetitors] = useState(['', '', '']);
  const [website, setWebsite] = useState('');
  const [platforms, setPlatforms] = useState([]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const togglePlatform = (p) => setPlatforms((cur) => cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p]);
  const setComp = (i, v) => setCompetitors((cur) => cur.map((c, idx) => idx === i ? v : c));

  const ProgressBar = () => (
    <div style={{ width: '100%', height: '6px', background: 'var(--color-border)', borderRadius: '100px', marginBottom: '3rem', display: 'flex', overflow: 'hidden' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <div key={s} style={{ width: '20%', height: '100%', background: step >= s ? 'var(--color-secondary)' : 'transparent', transition: 'background 0.5s' }} />
      ))}
    </div>
  );

  const GatedSection = ({ title, score, gated, children }) => (
    <section style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ height: '28px', width: '4px', background: 'var(--color-secondary)', borderRadius: '100px' }}></div>
          <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{title}</h3>
        </div>
        {score != null && (
          <div style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: sectionScoreColor(score), background: `${sectionScoreColor(score)}1a`, border: `1px solid ${sectionScoreColor(score)}55` }}>
            Section Score: {score}/100
          </div>
        )}
      </div>
      <div style={{ filter: !unlocked && gated ? 'blur(7px)' : 'none', opacity: !unlocked && gated ? 0.4 : 1, pointerEvents: !unlocked && gated ? 'none' : 'auto', userSelect: !unlocked && gated ? 'none' : 'auto', transition: 'filter 0.3s' }}>
        {children}
      </div>
    </section>
  );

  const Report = () => (
    <div style={{ marginTop: '4rem', borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ background: 'rgba(255,94,0,0.1)', color: 'var(--color-primary)', padding: '0.35rem 1rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Strategic Intelligence Preview</span>
        <h2 className="mt-4" style={{ fontSize: '2.25rem', marginTop: '1rem' }}>Your Custom Strategic Analysis</h2>
        {!unlocked && <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '1rem auto 0 auto', fontSize: '1.05rem' }}>Below is an initial overview. Complete your business profile to unlock the full technical audit and competitive roadmap.</p>}
      </div>

      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '24px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
        {/* Report header */}
        <div style={{ background: '#0a0a0a', padding: '2.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: '520px' }}>
              <div style={{ color: 'var(--color-primary)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Confidential Strategy Document</div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', lineHeight: 1.1, marginBottom: '1rem' }}>Digital Competitor & <span className="text-gradient-primary">Performance Review</span></h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Stop guessing where your revenue is going. This is a forensic audit of your digital market share, showing exactly how competitors intercept your ideal customers through Organic Search and Paid Media, and exposing the visibility gaps costing you leads.
              </p>
            </div>
            <div style={{ background: 'var(--color-surface)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', minWidth: '150px', borderBottom: `6px solid ${sectionScoreColor(58)}` }}>
              <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Overall Digital Score</div>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: sectionScoreColor(58), lineHeight: 1 }}>58</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>/100</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '2.5rem' }}>
          {/* Executive summary (visible) */}
          <GatedSection title="Executive Summary: The Visibility Gap" score={45} gated={false}>
            <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              "Your current search visibility is significantly fragmented. While you possess authority in niche segments, competitors are dominating high-volume transactional clusters."
            </p>
            <div style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Target size={16} color="var(--color-primary)" /> Shared Keyword Intelligence</h4>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)' }}>412</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Common keywords shared.</p>
                </div>
                <p style={{ flex: 1, minWidth: '240px', fontStyle: 'italic', color: 'var(--color-text-muted)', fontSize: '0.9rem', background: 'var(--color-surface)', padding: '1rem', borderRadius: '12px', lineHeight: 1.6 }}>
                  "The gap between Position 1 and Position 4 isn't just vanity, it's 10x the traffic. Competitors ranking in the top 3 spots capture over 60% of clicks for shared terms, leaving you with the scraps."
                </p>
              </div>
            </div>
          </GatedSection>

          {/* Unlock banner */}
          {!unlocked && (
            <div style={{ background: '#0a0a0a', border: '2px solid rgba(255,94,0,0.3)', borderRadius: '24px', padding: '2.5rem', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <Lock size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Unlock Full Competitive Intelligence</h3>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>Explore the exact gaps where your competitors are generating revenue and you aren't. Don't leave money on the table.</p>
              <button onClick={() => setShowModal(true)} className="btn btn-primary">Reveal My Revenue Gaps <ArrowRight size={16} /></button>
            </div>
          )}

          {/* Gated: missing opportunities */}
          <GatedSection title="Missing Opportunities" score={20} gated>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>High-volume keywords that your competitors rank for, but you have zero visibility for.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
              {[
                { k: 'Construction Marketing Agency', vol: '2.4k', c: 'Pos 4' },
                { k: 'Commercial Builder Leads', vol: '1.2k', c: 'Pos 5' },
                { k: 'Steel Fabrication SEO', vol: '880', c: 'Pos 2' },
                { k: 'Civil Contractor Marketing', vol: '1.9k', c: 'Pos 8' },
                { k: 'Tender Win Strategy', vol: '1.6k', c: 'Pos 3' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', minHeight: '2.4em', lineHeight: 1.3 }}>{item.k}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div><div style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 700 }}>Vol</div><div style={{ fontWeight: 700 }}>{item.vol}</div></div>
                    <div style={{ textAlign: 'right' }}><div style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: 700 }}>Competitor</div><div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.8rem' }}>{item.c}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </GatedSection>

          {/* Gated: paid media */}
          <GatedSection title="Paid Media Landscape" score={65} gated>
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ background: 'var(--color-bg)', padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--color-border)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Est. Monthly Ad Budget</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead><tr style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', textTransform: 'uppercase' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1.25rem' }}>Platform</th><th style={{ padding: '0.75rem' }}>You</th><th style={{ padding: '0.75rem' }}>Competitor A</th><th style={{ padding: '0.75rem' }}>Competitor B</th>
                </tr></thead>
                <tbody>
                  {[['Google Search', '$800', '$4,200', '$2,800'], ['Meta (FB/IG)', '$0', '$1,500', '$900'], ['LinkedIn Ads', '$200', '$2,000', '$1,100']].map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: 700 }}>{r[0]}</td>
                      <td style={{ padding: '0.9rem', textAlign: 'center' }}>{r[1]}</td>
                      <td style={{ padding: '0.9rem', textAlign: 'center', fontWeight: 700, color: 'var(--color-primary)' }}>{r[2]}</td>
                      <td style={{ padding: '0.9rem', textAlign: 'center' }}>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GatedSection>

          {/* Gated: technical audit */}
          <GatedSection title="Technical Infrastructure Audit" score={52} gated>
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '16px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead><tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <th style={{ textAlign: 'left', padding: '1rem 1.25rem' }}>Detected Vulnerability</th><th style={{ padding: '1rem', textAlign: 'center' }}>Affected URLs</th><th style={{ padding: '1rem', textAlign: 'right' }}>Priority</th>
                </tr></thead>
                <tbody>
                  {[
                    ['Orphan page (no incoming internal links)', 114, 'High'],
                    ['Missing alt text on primary imagery', 342, 'Medium'],
                    ['H1 tag missing or empty', 12, 'Critical'],
                    ['HTTPS page linking to HTTP', 88, 'High'],
                    ['3XX redirect in sitemap', 54, 'Medium']
                  ].map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>{r[0]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}><span style={{ background: 'rgba(255,94,0,0.08)', color: 'var(--color-primary)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: 800, fontSize: '0.75rem' }}>{r[1]}</span></td>
                      <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: r[2] === 'Critical' ? '#ef4444' : 'var(--color-primary)' }}>{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GatedSection>

          {/* Roadmap with always-visible CTAs */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ height: '28px', width: '4px', background: 'var(--color-secondary)', borderRadius: '100px' }}></div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>The 90-Day Roadmap</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 900 ? '2fr 1fr' : '1fr', gap: '2rem', alignItems: 'start' }}>
              <div style={{ filter: !unlocked ? 'blur(7px)' : 'none', opacity: !unlocked ? 0.4 : 1, pointerEvents: !unlocked ? 'none' : 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { p: 'Phase 1', t: 'Data Intelligence & Structural Integrity', d: 'An aggressive audit of your entire digital footprint, ensuring your infrastructure is aligned to be indexed by search engines and cited by AI agents. We identify every invisible page and broken link.' },
                  { p: 'Phase 2', t: 'Multi-Channel Authority & Market Capture', d: 'We build authority where competitors hold the advantage, deploying high-intent SEO content alongside targeted Performance Media to dominate your most profitable keywords.' },
                  { p: 'Phase 3', t: 'Omni-Channel Scale & ROI Optimisation', d: 'We integrate SEO, Paid Media, SMM, and EDM into a single, synchronised lead-generation machine, continuously optimising every channel based on real-time data.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--color-secondary)', color: 'white', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{item.p}</div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>{item.t}</h4>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
                <div style={{ background: 'rgba(255,155,40,0.06)', border: '1px solid var(--color-primary)', borderRadius: '16px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Lightbulb size={18} color="var(--color-primary)" /><h5 style={{ margin: 0, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Future-Proofing with Digilari</h5></div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>The digital landscape is shifting from 'Search' to 'Answer'. We structure your data and authority for AI models, so you aren't just found by Google, but cited by the AI agents your customers will use tomorrow.</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'var(--color-primary)', color: '#0f1115', borderRadius: '20px', padding: '2rem' }}>
                  <Calendar size={28} style={{ marginBottom: '1rem' }} />
                  <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0f1115' }}>Turn these insights into a plan</h5>
                  <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: '#0f1115', opacity: 0.8 }}>Receive your full custom roadmap and walk through the results with an expert.</p>
                  <Link to="/contact" className="btn" style={{ background: '#0f1115', color: 'white', width: '100%', justifyContent: 'center' }}>Book Your Discovery Meeting</Link>
                </div>
                <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem' }}>
                  <CreditCard size={28} color="var(--color-text)" style={{ marginBottom: '1rem' }} />
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Service Pricing</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Review our customisable SEO and Paid Media packages.</p>
                  <Link to="/pricing" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>View Packages</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Unlock modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '24px', width: '100%', maxWidth: '460px', padding: '2.5rem', position: 'relative' }}>
            <button onClick={() => setShowModal(false)} aria-label="Close" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><X size={24} /></button>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(255,94,0,0.1)', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}><CheckCircle2 color="var(--color-primary)" size={28} /></div>
              <h4 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Final Step to Unlock</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Enter your contact details to reveal the complete audit.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setUnlocked(true); setShowModal(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input required type="text" placeholder="Full Name" style={fieldStyle} />
              <input required type="text" placeholder="Company Name" style={fieldStyle} />
              <input required type="email" placeholder="Email Address" style={fieldStyle} />
              <input required type="tel" placeholder="Phone Number" style={fieldStyle} />
              <button className="btn btn-primary" style={{ width: '100%', padding: '1.1rem', marginTop: '0.5rem' }}>Access Full Intelligence</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Free Competitor & Performance Review | Digilari Construction</title>
        <meta name="description" content="Unlock the data your competitors are hiding. Get a forensic audit of your digital market share across organic search and paid media, with a 90-day roadmap." />
      </Helmet>

      <section className="section">
        <div className="container" style={{ maxWidth: submitted ? '1000px' : '760px', margin: '0 auto' }}>
          {!submitted ? (
            <>
              <div className="text-center" style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>Free Strategic Review</div>
                <h1 className="text-gradient" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Strategic <span className="text-gradient-primary">SEO &amp; Competitor Review</span></h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>Unlock the data your competitors are hiding. Let us build a roadmap to your digital dominance.</p>
              </div>

              <ProgressBar />

              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  {step === 1 && (
                    <div>
                      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Market Footprint</h2>
                      <label style={labelStyle}>Your Domain *</label>
                      <input required type="text" placeholder="acmeindustries.com.au" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ ...fieldStyle, marginBottom: '1.5rem' }} />
                      <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {competitors.map((url, i) => (
                          <input key={i} type="text" placeholder={`Competitor Domain ${i + 1}`} value={url} onChange={(e) => setComp(i, e.target.value)} style={fieldStyle} />
                        ))}
                      </div>
                      <button type="button" onClick={next} className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', justifyContent: 'center' }}>Continue <ArrowRight size={16} /></button>
                    </div>
                  )}
                  {step === 2 && (
                    <div>
                      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Organic Performance</h2>
                      <div style={{ border: '2px dashed var(--color-border)', borderRadius: '16px', padding: '3rem', textAlign: 'center', background: 'var(--color-bg)', marginBottom: '1.5rem' }}>
                        <Upload size={36} color="var(--color-primary)" style={{ marginBottom: '0.75rem' }} />
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Upload GA4 Screenshot</div>
                      </div>
                      <div style={{ background: 'rgba(255,94,0,0.05)', border: '1px solid rgba(255,94,0,0.15)', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '0.75rem' }}>
                        <Info size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>How to find your GA4 Traffic Report</h4>
                          <ol style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0 }}>
                            <li>Log in to your Google Analytics 4 account.</li>
                            <li>In the left menu, click Reports.</li>
                            <li>Select Acquisition, then Traffic acquisition.</li>
                            <li>Set the date range to Last 90 days.</li>
                            <li>Screenshot the table showing Organic Search performance.</li>
                          </ol>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="button" onClick={prev} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Previous</button>
                        <button type="button" onClick={next} className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }}>Growth Objectives</button>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div>
                      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Growth Objectives</h2>
                      <label style={labelStyle}>Topics &amp; Keywords</label>
                      <textarea rows={3} placeholder="e.g. structural steel, civil maintenance, commercial fit-out..." style={{ ...fieldStyle, marginBottom: '1.5rem', resize: 'vertical' }} />
                      <label style={labelStyle}>Priority Markets &amp; Audiences</label>
                      <textarea rows={3} placeholder="e.g. Brisbane, developers, site managers, QLD construction firms..." style={{ ...fieldStyle, resize: 'vertical' }} />
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="button" onClick={prev} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Previous</button>
                        <button type="button" onClick={next} className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }}>Paid Media</button>
                      </div>
                    </div>
                  )}
                  {step === 4 && (
                    <div>
                      <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Paid Ad Insights</h2>
                      <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Baseline your multi-channel visibility.</p>
                      <label style={{ ...labelStyle, textAlign: 'center' }}>Which platforms are you running ads on?</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {['Meta Ads', 'Google Search', 'Google Display', 'Shopping/PMax', 'LinkedIn Ads', 'YouTube Ads'].map((p) => (
                          <button key={p} type="button" onClick={() => togglePlatform(p)} style={{ padding: '0.9rem', borderRadius: '12px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', border: `1px solid ${platforms.includes(p) ? 'var(--color-primary)' : 'var(--color-border)'}`, background: platforms.includes(p) ? 'rgba(255,94,0,0.08)' : 'var(--color-bg)', color: platforms.includes(p) ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>{p}</button>
                        ))}
                      </div>
                      <label style={labelStyle}>Monthly Ad Budget Bracket</label>
                      <select style={fieldStyle} defaultValue="">
                        <option value="">Select Range</option>
                        <option>$100 - $499</option>
                        <option>$500 - $999</option>
                        <option>$1,000 - $1,999</option>
                        <option>$2,000 - $4,999</option>
                        <option>$5,000+</option>
                      </select>
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="button" onClick={prev} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Previous</button>
                        <button type="button" onClick={next} className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }}>Final Step</button>
                      </div>
                    </div>
                  )}
                  {step === 5 && (
                    <div>
                      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Commercial Intelligence</h2>
                      <label style={labelStyle}>What questions do your sales team hear most often?</label>
                      <textarea rows={5} placeholder="e.g. How much does it cost? How do you compare to others? Do you offer maintenance contracts?" style={{ ...fieldStyle, resize: 'vertical' }} />
                      <div style={{ background: '#0a0a0a', borderRadius: '16px', padding: '2rem', marginTop: '1.5rem', border: '1px solid var(--color-border)' }}>
                        <h4 style={{ color: 'var(--color-primary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>The Digilari Guarantee</h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Your data is analysed using Google Search Console and other SEO tools to architect a roadmap. We deliver a result-focused strategy.</p>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="button" onClick={prev} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Previous</button>
                        <button type="submit" className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }}>Generate Analysis</button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div style={{ width: '88px', height: '88px', background: 'rgba(16,185,129,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
                <CheckCircle2 size={44} color="#10b981" />
              </div>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', marginBottom: '1rem' }}>Intelligence Secured.</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                Our team will put together your 3-phase strategy within 3 business days. Unlock the full report below to see exactly where you gap against competitors.
              </p>
              <Link to="/contact" className="btn btn-primary"><Calendar size={18} /> Book Discovery Meeting</Link>
              <Report />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CompetitorReview;
