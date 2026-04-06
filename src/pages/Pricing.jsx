import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Zap, 
  ShieldCheck, 
  Database,
  ChevronRight,
  Send,
  Loader2,
  Sparkles,
  ArrowLeft,
  XCircle,
  MessageSquare,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiResponse, setAiResponse] = useState(null); 
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  
  const quickOptions = [
    { label: "I need to fix technical site errors", value: "I need to fix technical site errors and get found.", tier: 'basic' },
    { label: "I need more qualified B2B leads", value: "I need more qualified B2B leads and better conversion.", tier: 'professional' },
    { label: "I want to automate my entire sales funnel", value: "I want to automate my entire sales funnel with AI.", tier: 'elite' }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'The Digital Foundation',
      tier: 'Basic Tier',
      price: 'Starting at $2,500/mo',
      color: '#0f1115',
      accent: 'var(--color-text)',
      border: 'var(--color-border)',
      icon: <ShieldCheck size={32} />,
      pitch: "Secure Your Entity for AI Visibility",
      description: "Move from a list of links to a definitive answer in Google AI Overviews.",
      features: [
        "Google AI Overviews (AIO) Indexing",
        "Multi-Modal Alt Tag Optimisation",
        "Technical Advisory",
        "Monthly Static Reporting",
        "AI-Generated Visual Mockups"
      ],
      unavailable: [
        "Generative Engine Optimisation (GEO)",
        "Full-Stack Dev & Design Execution",
        "24/7 AI-Fused Live Dashboard",
        "Real-Time Anomaly Detection",
        "Custom AI Chatbot Agents",
        "Bespoke B2B Calculators"
      ]
    },
    {
      id: 'professional',
      name: 'Multi-Channel Lead Engine',
      tier: 'Professional Tier',
      price: 'Starting at $5,500/mo',
      color: 'var(--color-secondary)',
      accent: 'var(--color-secondary)',
      border: 'var(--color-secondary)',
      icon: <Zap size={32} />,
      pitch: "Win the Generative Summary",
      description: "Done-For-You growth engine with real-time AI anomaly detection.",
      features: [
        "Includes everything in Basic Tier",
        "Generative Engine Optimisation (GEO)",
        "Full-Stack Dev & Design Execution",
        "Active CRO (Layout & CTA Optimisation)",
        "24/7 AI-Fused Live Dashboard",
        "Real-Time Anomaly Detection Alerts"
      ],
      unavailable: [
        "Custom AI Chatbot Training",
        "Bespoke B2B Cost Calculators",
        "Predictive Growth Modelling",
        "Quarterly Strategic 'Pirate' Sessions"
      ]
    },
    {
      id: 'elite',
      name: 'The Autonomous Enterprise',
      tier: 'Elite Tier',
      price: 'Custom Enterprise Pricing',
      color: 'var(--color-primary)',
      accent: 'var(--color-primary)',
      border: 'var(--color-primary)',
      icon: <Database size={32} />,
      pitch: "Own the Industry Knowledge Graph",
      description: "Market dominance via custom AI agents and bespoke lead calculators.",
      features: [
        "Includes everything in Professional Tier",
        "Custom AI Chatbot Training & Integration",
        "Bespoke B2B Cost Calculators",
        "Knowledge Graph Authority Construction",
        "Predictive Growth Modelling",
        "Quarterly Strategic 'Pirate' Sessions"
      ],
      unavailable: []
    }
  ];

  const processAIRequest = (input, forcedTier = null) => {
    setIsTyping(true);
    setAiResponse(null);
    setSelectedPackageId(null);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let rec = 'professional';
      let reason = "Based on your focus for growth, the Professional tier offers the best balance of execution and intelligence.";

      if (forcedTier) {
          rec = forcedTier;
          if (rec === 'basic') reason = "Since you're looking to fix foundational errors, the Basic tier is the perfect starting point.";
          if (rec === 'elite') reason = "For full automation and sales funnel dominance, the Elite tier provides the necessary AI infrastructure.";
      } else {
          if (lowerInput.includes('start') || lowerInput.includes('small') || lowerInput.includes('budget') || lowerInput.includes('fix') || lowerInput.includes('error')) {
            rec = 'basic';
            reason = "Since you're looking to establish a solid foundation, the Basic tier will secure your entity visibility first.";
          } else if (lowerInput.includes('dominate') || lowerInput.includes('large') || lowerInput.includes('custom') || lowerInput.includes('chat') || lowerInput.includes('market leader')) {
            rec = 'elite';
            reason = "For total market dominance and custom AI tools, the Elite tier is the only choice for an autonomous enterprise.";
          }
      }

      setIsTyping(false);
      setAiResponse({ text: reason, recommendedId: rec });
      setTimeout(() => setSelectedPackageId(rec), 800);
    }, 1200);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    processAIRequest(userInput);
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Packages | Digilari Construction</title>
        <meta name="description" content="View our pricing tiers and packages for commercial construction marketing. Leverage our AI agent to find the perfect fit for your growth goals." />
      </Helmet>
      
      {/* AI Assistant Section */}
      <section className="section" style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden', paddingBottom: '8rem' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(150px)', opacity: '0.1', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(120px)', opacity: '0.05', pointerEvents: 'none' }}></div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', padding: '0.5rem 1rem', borderRadius: '100px', marginBottom: '2rem' }}>
            <Sparkles size={14} color="var(--color-primary)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>AI-Powered Recommendation Engine</span>
          </div>
          
          <h1 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Find Your <br/>
            <span className="text-gradient-primary">Growth Velocity</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            Not sure which tier fits? Tell our AI agent about your current challenges, team size, or market goals.
          </p>

          <div style={{ maxWidth: '700px', margin: '0 auto', background: 'var(--color-surface)', borderRadius: '16px', padding: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid var(--color-border)' }}>
            <form onSubmit={handleManualSubmit} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '0 1rem', color: 'var(--color-secondary)' }}>
                <Bot size={24} />
              </div>
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Describe your goals..."
                style={{ flex: 1, padding: '1rem', background: 'transparent', border: 'none', color: 'var(--color-text)', fontSize: '1rem', outline: 'none' }}
              />
              <button 
                type="submit" 
                disabled={isTyping || !userInput.trim()}
                style={{ background: 'var(--color-secondary)', color: 'white', padding: '1rem', borderRadius: '12px', border: 'none', cursor: (isTyping || !userInput.trim()) ? 'not-allowed' : 'pointer', opacity: (isTyping || !userInput.trim()) ? 0.5 : 1, transition: 'opacity 0.2s, background-color 0.2s' }}
              >
                {isTyping ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
              </button>
            </form>
          </div>

          {!aiResponse && !isTyping && (
             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem', maxWidth: '800px', margin: '1.5rem auto 0 auto' }}>
                {quickOptions.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => { setUserInput(opt.value); processAIRequest(opt.value, opt.tier); }}
                    style={{ fontSize: '0.8rem', fontWeight: 600, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '100px', padding: '0.5rem 1rem', color: 'var(--color-text-muted)', cursor: 'pointer', transition: 'background-color 0.2s, color 0.2s' }}
                    onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = 'var(--color-text)'; }}
                    onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.color = 'var(--color-text-muted)'; }}
                  >
                    {opt.label}
                  </button>
                ))}
             </div>
          )}

          {(aiResponse || isTyping) && (
            <div style={{ marginTop: '2.5rem', maxWidth: '700px', margin: '2.5rem auto 0 auto' }}>
               <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '1.5rem', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Bot size={20} color="#0f1115" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Digilari AI Agent</div>
                      {isTyping ? (
                         <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
                           <span style={{ width: '6px', height: '6px', background: 'var(--color-text)', borderRadius: '50%', animation: 'pulse 1s infinite' }}></span>
                           <span style={{ width: '6px', height: '6px', background: 'var(--color-text)', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></span>
                           <span style={{ width: '6px', height: '6px', background: 'var(--color-text)', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></span>
                         </div>
                      ) : (
                        <p style={{ color: 'var(--color-text)', fontWeight: 500, lineHeight: 1.6, margin: 0 }}>{aiResponse.text}</p>
                      )}
                    </div>
                  </div>
               </div>
            </div>
          )}
        </div>
      </section>

      {/* Packages Section */}
      <section className="section" style={{ position: 'relative', zIndex: 20, marginTop: '-6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="pricing-grid" style={{ 
            display: 'flex', 
            gap: '1.5rem',
            transition: 'all 0.5s ease'
          }}>
            {packages.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              const isFolded = selectedPackageId && !isSelected;
              const isRecommended = aiResponse?.recommendedId === pkg.id;

              return (
                <div 
                  className="pricing-card"
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transition: 'flex 0.5s, opacity 0.5s, min-height 0.5s, transform 0.5s, border-color 0.5s, box-shadow 0.5s',
                    cursor: 'pointer',
                    background: 'var(--color-surface)',
                    border: `1px solid ${isSelected ? pkg.color : 'var(--color-border)'}`,
                    flex: isSelected ? '3' : (!selectedPackageId ? '1' : '0.3'),
                    minHeight: isFolded ? '100px' : 'auto',
                    opacity: isFolded ? 0.7 : 1,
                    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isSelected ? `0 0 0 2px ${pkg.color}33` : '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                  onMouseOver={(e) => {
                    if (isFolded) e.currentTarget.style.opacity = '1';
                    if (!selectedPackageId) e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseOut={(e) => {
                    if (isFolded) e.currentTarget.style.opacity = '0.7';
                    if (!selectedPackageId) e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {isRecommended && !isFolded && (
                    <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--color-primary)', color: '#0f1115', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.5rem 1rem', borderBottomLeftRadius: '16px', zIndex: 20, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Sparkles size={12} /> AI Choice
                    </div>
                  )}

                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: isFolded ? '1rem' : '2.5rem' }}>
                    
                    {isFolded ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: '100%', height: '100%' }}>
                        <div style={{ color: pkg.color, transform: 'scale(0.8)' }}>{pkg.icon}</div>
                        <h3 style={{ fontSize: '1rem', color: 'var(--color-text-muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{pkg.tier}</h3>
                      </div>
                    ) : (
                      <>
                        <div style={{ marginBottom: '2rem' }}>
                          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: pkg.color, color: (pkg.id === 'basic' ? 'var(--color-text)' : '#0f1115'), display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                            {pkg.icon}
                          </div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{pkg.tier}</div>
                          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>{pkg.name}</h2>
                          <div style={{ fontWeight: 800, color: pkg.id === 'basic' ? 'var(--color-primary)' : pkg.color, fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.2 }}>{pkg.pitch}</div>
                          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{pkg.description}</p>
                          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)' }}>{pkg.price}</div>
                        </div>

                        {!isSelected ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginBottom: '2rem' }}>
                            {pkg.features.slice(0, 3).map((feat, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text)' }}>
                                <CheckCircle2 size={16} color={pkg.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>{feat}</span>
                              </div>
                            ))}
                            {pkg.features.length > 3 && <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700, paddingLeft: '2.25rem' }}>+ More features</div>}
                          </div>
                        ) : (
                          <div className="grid-2" style={{ gap: '3rem', animation: 'fadeIn 0.5s ease forwards' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Included Features</h4>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                {pkg.features.map((feat, i) => (
                                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                                    <CheckCircle2 size={18} color={pkg.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>{feat}</span>
                                  </div>
                                ))}
                              </div>
                              
                              {pkg.unavailable.length > 0 && (
                                <>
                                  <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>Not Included</h4>
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.6 }}>
                                    {pkg.unavailable.map((feat, i) => (
                                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>
                                        <XCircle size={18} color="var(--color-text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>{feat}</span>
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>

                            <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '16px', padding: '2rem', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                              <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                  <MessageSquare size={16} color="var(--color-primary)" />
                                  <span style={{ fontSize: '0.7rem', fontWeight: 800, uppercase: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)' }}>Strategy Session</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Enquire about {pkg.tier}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Speak to a strategist about {pkg.name}.</p>
                              </div>

                              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Work Email</label>
                                  <input type="email" placeholder="name@company.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', outline: 'none' }} />
                                </div>
                                <div>
                                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Company Website</label>
                                  <input type="text" placeholder="company.com.au" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', outline: 'none' }} />
                                </div>
                                <button className="btn" style={{ background: pkg.color, color: pkg.id==='basic'?'var(--color-surface)':'#0f1115', width: '100%', marginTop: '0.5rem', border: 'none' }}>
                                  Book Strategy Call <ArrowRight size={16} />
                                </button>
                                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
                                  <Lock size={12} /> No lock-in contracts. 90-day sprints.
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {!isSelected && (
                          <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                            <button className="btn" style={{ width: '100%', background: 'transparent', border: `1px solid ${pkg.color}`, color: pkg.color }}>
                              Select Package <ChevronRight size={16} />
                            </button>
                          </div>
                        )}

                        {isSelected && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedPackageId(null); }}
                            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                          >
                            <ArrowLeft size={14} /> Back to comparison
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section text-center" style={{ paddingTop: 0 }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>
          Not sure? <Link to="/contact" style={{ color: 'var(--color-secondary)', borderBottom: '2px solid var(--color-secondary)' }}>Request a Custom Proposal</Link>
        </p>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            flex-direction: row !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 2rem;
            -webkit-overflow-scrolling: touch;
          }
          .pricing-grid::-webkit-scrollbar {
            height: 6px;
          }
          .pricing-grid::-webkit-scrollbar-thumb {
            background: var(--color-border);
            border-radius: 6px;
          }
          .pricing-card {
            flex: 0 0 85vw !important;
            scroll-snap-align: center;
          }
        }
        @media (min-width: 1025px) {
          .pricing-grid {
            align-items: flex-start;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Pricing;
