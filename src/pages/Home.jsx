import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Users, Search, Zap, BarChart, Mail, BrainCircuit, Globe, ChevronLeft, ChevronRight, Star, Shield, Award } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const methodologyTiles = [
  { title: "Construction SEO", desc: "Dominate semantic search with future-proof SEO strategies built for the construction sector.", icon: Search, link: "/services/seo-agency", color: "var(--color-primary)" },
  { title: "Google Ads Management", desc: "Hyper-targeted paid media that maximises ROAS and eliminates B2C wastage.", icon: Target, link: "/services/ppc-agency", color: "var(--color-secondary)" },
  { title: "Conversion Optimisation", desc: "Turn existing traffic into high-value project leads through data-driven testing.", icon: TrendingUp, link: "/services/conversion-rate-optimisation", color: "#10b981" },
  { title: "Technical Content Marketing", desc: "Inbound marketing engineered for the construction procurement cycle.", icon: BarChart, link: "/services/inbound-and-content-marketing", color: "var(--color-primary)" },
  { title: "AI Lead Management", desc: "Intelligent CRM setup with AI tools that automate engagement and conversion.", icon: Zap, link: "/services/lead-generation", color: "var(--color-secondary)" },
  { title: "Answer Engine Optimisation", desc: "Optimise for AI-driven search answers across ChatGPT, Perplexity, and Google.", icon: BrainCircuit, link: "/services/aeo", color: "#10b981" },
  { title: "Generative Engine Optimisation", desc: "Build topical authority so AI engines cite your brand as the definitive source.", icon: Globe, link: "/services/geo", color: "var(--color-primary)" },
  { title: "SEO Migration Support", desc: "Protect your rankings during a website redesign with expert migration management.", icon: Shield, link: "/services/seo-migration", color: "var(--color-secondary)" },
  { title: "Zero Click Search", desc: "Win the search results before the click with featured snippets and knowledge panels.", icon: Award, link: "/services/zero-click-search", color: "#10b981" },
  { title: "Social Media Marketing", desc: "Build industry authority across LinkedIn, Facebook, Instagram, TikTok, and X.", icon: Users, link: "/services/smm", color: "var(--color-primary)" },
  { title: "ROI Marketing Services", desc: "Marketing tied to your bottom line with our Digital Results Guarantee.", icon: TrendingUp, link: "/services/roi-marketing-services", color: "var(--color-secondary)" },
  { title: "Email Marketing", desc: "Automated lead nurturing sequences built for long B2B construction sales cycles.", icon: Mail, link: "/services/email-marketing", color: "#10b981" },
];

const Home = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Commercial Construction & Contractors | Digilari Construction</title>
        <meta name="description" content="Discover Digilari Construction's specialist digital marketing for commercial construction suppliers. We understand your sales cycles and how to win work digitally." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Digilari Construction",
              "description": "Digital marketing for commercial construction suppliers and specialist contractors across Australia and New Zealand.",
              "url": "https://digilari.com.au"
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at top right, rgba(255, 94, 0, 0.15), transparent 50%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-200px', left: '-100px', width: '500px', height: '500px', background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(200px)', opacity: '0.06', pointerEvents: 'none' }}></div>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
              SPECIALIST CONSTRUCTION MARKETING
            </div>
            <h1 className="mb-4 text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>The Construction <span className="text-gradient-primary">Marketing Agency</span> for B2B Growth</h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Are you struggling to capture high-value commercial construction projects in a crowded digital landscape? We know that winning commercial tenders requires building technical authority before the RFP is even issued.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Digilari Construction is the definitive construction marketing partner for specialist contractors and commercial suppliers. Through advanced SEO, GEO, and intent-driven paid media, we turn the procurement research phase into your competitive advantage.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/contact" className="btn btn-primary">
                Book Strategy Session <ArrowRight size={20} />
              </Link>
              <Link to="/case-studies/duracube" className="btn btn-secondary">
                View Our Results
              </Link>
            </div>
            {/* Mini team trust strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex' }}>
                {["CEO - Sean Brown.jpeg", "Account Manager - Bridie Conroy.jpeg", "AEO Strategist & AI Engineer - Hui-Sheng Yang.jpeg", "Paid Media Specialist - Marcela Vildoza.jpeg"].map((img, i) => (
                  <div key={i} style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-bg)', marginLeft: i > 0 ? '-10px' : 0, position: 'relative', zIndex: 4 - i }}>
                    <img src={`${import.meta.env.BASE_URL}images/team-members/${img}`} alt="Team member" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Trusted by <strong style={{ color: 'var(--color-text)' }}>100+ construction clients</strong></span>
            </div>
          </div>

          {/* Trust Signals Panel */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(145deg, var(--color-surface) 0%, #0f1115 100%)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(253, 155, 40, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                <Shield size={20} color="var(--color-primary)" />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Trusted & Certified</span>
              </div>

              {/* Certification Badges Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <img src={`${import.meta.env.BASE_URL}images/certifications/google-partner.webp`} alt="Google Partner" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
                <img src={`${import.meta.env.BASE_URL}images/certifications/bing-ads-certified.png`} alt="Bing Ads Certified" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
                <img src={`${import.meta.env.BASE_URL}images/certifications/meta-partner.jpeg`} alt="Meta Business Partner" style={{ height: '60px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }} />
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--color-primary)" color="var(--color-primary)" />)}
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>5★ Google Business Rating</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Award size={16} color="var(--color-secondary)" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>10+ Years Serving Australia & NZ</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Users size={16} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>100+ Clients Nationally</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ padding: '3rem 1.5rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          {[
            { metric: "5★", label: "Google Rating", color: "var(--color-primary)" },
            { metric: "10+", label: "Years in Service", color: "var(--color-secondary)" },
            { metric: "100+", label: "Clients Nationally", color: "var(--color-primary)" },
            { metric: "70,000+", label: "Total Hours of Work", color: "var(--color-secondary)" },
            { metric: "100,000+", label: "Tasks Delivered", color: "var(--color-primary)" }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', minWidth: '150px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: stat.color, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{stat.metric}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginTop: '0.5rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Methodology Section - Horizontal Carousel */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center mb-8" style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Our Methodology</span>
            <h2 data-toc="Our Methodology">Disruptive Digital Marketing That Drives Construction Leads</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
              Standard marketing playbooks typically fail in the commercial construction space. We implement advanced methodologies to ensure your business dominates visibility when project specifiers are asking critical questions.
            </p>
          </div>

          {/* Carousel Container */}
          <div style={{ position: 'relative' }}>
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                style={{
                  position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                  width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                  color: 'var(--color-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)', transition: 'background 0.2s, border-color 0.2s'
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                style={{
                  position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                  width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                  color: 'var(--color-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)', transition: 'background 0.2s, border-color 0.2s'
                }}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Scrollable Track */}
            <div
              ref={carouselRef}
              className="methodology-carousel"
              style={{
                display: 'flex',
                gap: '1.5rem',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                paddingBottom: '1rem',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {methodologyTiles.map((tile, i) => (
                <Link
                  key={i}
                  to={tile.link}
                  className="methodology-tile"
                  style={{
                    flex: '0 0 280px',
                    scrollSnapAlign: 'start',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '2rem 1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '220px',
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${tile.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: tile.color }}>
                    <tile.icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0', color: 'var(--color-text)' }}>{tile.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0, flex: 1 }}>{tile.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: tile.color, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Packages Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(200px)', opacity: '0.05', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Our Packages</span>
          <h2 data-toc="Our Packages" className="mb-4">Performance-Driven <span className="text-gradient-primary">Marketing Packages</span></h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            Transparent, results-focused packages designed for commercial construction businesses. Every plan includes our Digital Results Guarantee.
          </p>

          <div className="mobile-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto 3rem auto' }}>
            {[
              { name: 'Growth', price: 'From $2,500/mo', desc: 'Foundation-level SEO and content marketing for construction suppliers looking to build organic visibility.', features: ['Technical SEO Audit & Fixes', 'Content Strategy & Creation', 'Monthly Performance Reporting', 'Dedicated Account Manager'], color: 'var(--color-secondary)' },
              { name: 'Accelerate', price: 'From $5,000/mo', desc: 'Multi-channel growth combining SEO, paid media, and CRO for construction businesses ready to scale.', features: ['Everything in Growth', 'Google Ads Management', 'Conversion Rate Optimisation', 'Digital Results Guarantee'], color: 'var(--color-primary)', featured: true },
              { name: 'Dominate', price: 'Custom', desc: 'Full-service digital marketing command for enterprise construction suppliers and national contractors.', features: ['Everything in Accelerate', 'AEO & GEO Optimisation', 'AI Lead Management & CRM', 'Priority Support & Strategy'], color: '#10b981' }
            ].map((pkg, i) => (
              <div key={i} style={{ background: pkg.featured ? 'linear-gradient(145deg, rgba(255,94,0,0.08) 0%, var(--color-surface) 100%)' : 'var(--color-surface)', border: `1px solid ${pkg.featured ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: '16px', padding: '2.5rem 2rem', textAlign: 'left', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s, border-color 0.3s' }} className="pkg-card">
                {pkg.featured && <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-primary)', color: '#0f1115', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.6rem', borderRadius: '100px' }}>Most Popular</div>}
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: pkg.color, marginBottom: '0.5rem' }}>{pkg.name}</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.75rem' }}>{pkg.price}</div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>{pkg.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {pkg.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 size={16} color={pkg.color} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link to="/pricing" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            View All Packages & Pricing <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* DRG Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-surface)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>DRG Programme</span>
            <h2 data-toc="DRG Programme" className="mb-4">Guaranteed Performance With The <span className="text-gradient-primary">Digital Results Guarantee</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
              Accountability is rare in digital marketing. We deliver it as standard for our construction partners.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
              Our exclusive Digital Results Guarantee (DRG) directly ties your investment to performance. We focus on agreed-upon KPIs, such as qualified lead volume and pipeline value, rather than just tracking hours spent. In most cases, if we do not hit the targets, our management fees pause until we do.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', marginBottom: '2.5rem' }}>
              {["No vanity metrics, only pipeline value", "Transparent pricing for construction suppliers", "Value-based partnership model"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--color-primary)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/digital-results-guarantee" className="btn btn-secondary">Learn About Our DRG Programme</Link>
          </div>
          
          <div style={{ 
            background: 'var(--color-bg)', 
            padding: '3rem', 
            borderRadius: '12px', 
            border: '1px solid var(--color-border)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--color-primary)', opacity: '0.1', filter: 'blur(50px)' }}></div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />)}
              </div>
              <blockquote style={{ fontSize: '1.1rem', color: 'var(--color-text)', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                "PPG have seen 40% growth in revenue over the past 2 years implementing Digilari Media's SEO strategy and marketing guidance. We can't thank Digilari Media enough for helping us grow our business and achieve our goals. We look forward to working with Digilari in the future to continue our growth and to keep ahead in the digital technology world!"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={`${import.meta.env.BASE_URL}images/client-pfp/mark-webster-ppg.jpeg`} alt="Mark Webster" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)' }} />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem' }}>Mark Webster</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.2' }}>Owner at Premium Pools and Gardens Pty Ltd & Centenary Poolmart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container text-center">
          <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Our Network</span>
          <h2 data-toc="Trusted Partners" className="mb-8">Trusted by Construction Leaders</h2>
          
          <div style={{ marginBottom: '4rem', opacity: 0.8, overflow: 'hidden', padding: '1rem 0' }}>
            <div style={{ display: 'flex', width: 'max-content', animation: 'marqueeScroll 40s linear infinite' }} className="marquee-track">
              {[
                "aline-pumps-logo.jpeg", "all-rare-herbs-logo.webp", "armoury-stainless-logo.svg",
                "armoury-wheels-logo.svg", "bison-constructions-logo.jpeg", "bison-filters-logo.png",
                "cv-sheds-logo.webp", "duracube-logo.jpeg", "dynamic-warehouse-logo.webp",
                "form-direct-logo.svg", "namoli-logo.webp", "pma-global-logo.jpeg", "streamline-carports-logo.svg"
              ].concat([
                "aline-pumps-logo.jpeg", "all-rare-herbs-logo.webp", "armoury-stainless-logo.svg",
                "armoury-wheels-logo.svg", "bison-constructions-logo.jpeg", "bison-filters-logo.png",
                "cv-sheds-logo.webp", "duracube-logo.jpeg", "dynamic-warehouse-logo.webp",
                "form-direct-logo.svg", "namoli-logo.webp", "pma-global-logo.jpeg", "streamline-carports-logo.svg"
              ]).map((logo, i) => (
                <div key={i} style={{ padding: '0 2rem', display: 'flex', alignItems: 'center' }}>
                  <img src={`${import.meta.env.BASE_URL}images/partner-logos/${logo}`} width="160" height="50" loading="lazy" alt="Partner Logo" style={{ maxHeight: '50px', maxWidth: '160px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div style={{ padding: '3rem', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'inline-block', maxWidth: '100%' }}>
            <h3 style={{ marginBottom: '2rem' }}>Accreditations & Certifications</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
              <img src={`${import.meta.env.BASE_URL}images/certifications/google-partner.webp`} alt="Google Partner Badge" width="160" height="80" loading="lazy" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
              <img src={`${import.meta.env.BASE_URL}images/certifications/bing-ads-certified.png`} alt="Bing Ads Certified" width="160" height="80" loading="lazy" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
              <img src={`${import.meta.env.BASE_URL}images/certifications/meta-partner.jpeg`} alt="Meta Business Partner" width="160" height="80" loading="lazy" style={{ height: '70px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Header */}
      <section style={{ padding: '4rem 0 0 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Our Team</span>
          <h2 data-toc="Our Team" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>Meet the Construction <span className="text-gradient-primary">Marketing Experts</span></h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>Specialist B2B performance marketers dedicated to scaling your commercial pipeline.</p>
        </div>
      </section>

      {/* Meet the Experts Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="mobile-carousel" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2.5rem', 
            alignItems: 'start' 
          }}>
            {[
              { name: "Sean Brown", role: "Managing Director", img: "CEO - Sean Brown.jpeg" },
              { name: "Bridie Conroy", role: "Account Manager", img: "Account Manager - Bridie Conroy.jpeg" },
              { name: "Hui-Sheng Yang", role: "AEO Strategist & AI Engineer", img: "AEO Strategist & AI Engineer - Hui-Sheng Yang.jpeg" },
              { name: "Marcela Vildoza", role: "Paid Media Specialist", img: "Paid Media Specialist - Marcela Vildoza.jpeg" },
              { name: "Celine Rose Merto", role: "Lead Graphic Designer", img: "Lead Graphic Designer & Social Media Specialist - Celine Rose Merto.jpeg" },
              { name: "Aizel Quirante", role: "Social Media Specialist", img: "Social Media Specialist - Aizel Quirante.jpeg" },
              { name: "Dorisa Ramos", role: "Social Media Specialist", img: "Social Media Specialist - Dorisa Ramos.jpeg" },
              { name: "Roger Duran", role: "Lead Web Developer", img: "Web Developer - Roger Duran.jpeg" }
            ].map((member, i) => (
              <div key={i} style={{ 
                background: '#0a0a0a', 
                borderRadius: '12px', 
                border: '1px solid var(--color-border)', 
                overflow: 'hidden',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer'
              }} className="team-card">
                <div style={{ height: '280px', overflow: 'hidden', background: '#0f1115' }}>
                  <img 
                    src={`${import.meta.env.BASE_URL}images/team-members/${member.img}`} 
                    alt={member.name}
                    loading="lazy"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      filter: 'grayscale(30%)',
                      transition: 'filter 0.3s ease, transform 0.5s ease'
                    }} 
                    className="team-img"
                  />
                </div>
                <div style={{ padding: '1.5rem 1rem' }}>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--color-text)' }}>{member.name}</h4>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>
          
          <style>{`
            .team-card:hover { transform: translateY(-5px); border-color: var(--color-primary) !important; }
            .team-card:hover .team-img { filter: grayscale(0%); transform: scale(1.05); }
            .methodology-carousel::-webkit-scrollbar { display: none; }
            .methodology-tile:hover { transform: translateY(-5px); border-color: var(--color-primary) !important; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            @media (max-width: 768px) {
              .methodology-tile { flex: 0 0 260px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA Section with Team Trust */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: '#0f1115', textAlign: 'center' }}>
        <div className="container">
          <span style={{ display: 'block', color: 'rgba(15, 17, 21, 0.7)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Book Session</span>
          <h2 data-toc="Book Session" style={{ color: '#0f1115' }} className="mb-4">Your Strategy Session Awaits</h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 1.5rem auto', color: '#0f1115' }}>
            Are you ready to stop losing ground to competitors and start dominating the commercial construction landscape?
          </p>
          {/* Team faces near CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex' }}>
              {["CEO - Sean Brown.jpeg", "Account Manager - Bridie Conroy.jpeg", "AEO Strategist & AI Engineer - Hui-Sheng Yang.jpeg"].map((img, i) => (
                <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-primary)', marginLeft: i > 0 ? '-12px' : 0, position: 'relative', zIndex: 3 - i }}>
                  <img src={`${import.meta.env.BASE_URL}images/team-members/${img}`} alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f1115' }}>Speak with our specialists</span>
          </div>
          <Link to="/contact" className="btn" style={{ backgroundColor: '#0f1115', color: 'white' }}>
            Book Your Free Consultation Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
