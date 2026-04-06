import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, MapPin, Target, TrendingUp, ShieldCheck } from 'lucide-react';

// Make pretty text from URL slugs
const formatService = (service) => {
  const overrides = {
    'seo': 'SEO',
    'ppc': 'PPC',
    'smm': 'SMM',
    'geo': 'GEO',
    'aeo': 'AEO'
  };
  return overrides[service.toLowerCase()] || service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, ' ');
};

const formatCity = (city) => {
  return city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ');
};

const LocalServicePage = () => {
  const { city, service } = useParams();

  const serviceName = formatService(service || 'service');
  const cityName = formatCity(city || 'city');

  return (
    <>
      <Helmet>
        <title>{serviceName} Agency {cityName} | Expert {serviceName} Services | Digilari Construction</title>
        <meta name="description" content={`Looking for a top-rated ${serviceName} agency in ${cityName}? Digilari Construction delivers guaranteed results for the commercial construction sector. Book a free consult.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Digilari Construction ${cityName}",
              "areaServed": {
                "@type": "City",
                "name": "${cityName}"
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "${serviceName} Services for Construction"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '400px', height: '400px', background: 'var(--color-primary)', opacity: '0.05', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(253, 155, 40, 0.1)', color: 'var(--color-primary)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem' }}>
            <MapPin size={16} /> Serving {cityName} Construction Businesses
          </div>
          <h1 className="mb-4 text-gradient">Driving Guaranteed Growth: Your Trusted {serviceName} Agency in {cityName}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Are you struggling to capture high-intent leads in the competitive {cityName} market?
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            Traditional {serviceName} tactics are no longer enough to dominate local search or outmaneuver aggressive competitors. At Digilari Construction, we bring our disruptive, results-driven {serviceName} strategies to {cityName} businesses that are serious about rapid, accountable growth.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Book Your {cityName} Strategy Session <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.25rem', color: 'var(--color-text)', marginBottom: '1.5rem' }}>Why {cityName} Businesses Choose Our {serviceName} Expertise</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>We don't offer generic, cookie-cutter solutions. We engineer advanced, AI-ready {serviceName} campaigns tailored specifically to the unique market dynamics of {cityName}.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Feature 1 */}
            <div className="card" style={{ padding: '2.5rem', background: 'linear-gradient(to bottom right, var(--color-surface), rgba(15, 17, 21, 0.5))' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(253, 155, 40, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Digital Results Guarantee</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We put our money where our mouth is. For our value-based clients in {cityName}, we offer the <strong>Digital Results Guarantee</strong>. We agree on strict KPIs—whether that is lead volume, {serviceName} ROI, or traffic growth. If we don't hit targets, our fees pause.</p>
            </div>

            {/* Feature 2 */}
            <div className="card" style={{ padding: '2.5rem', background: 'linear-gradient(to bottom right, var(--color-surface), rgba(15, 17, 21, 0.5))' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(228, 27, 111, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                <TrendingUp size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Future-Proofing With AI</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>The digital landscape is shifting. Our {serviceName} strategies ensure your {cityName} construction business isn't just visible on Google, but is actively cited and recommended by AI models like ChatGPT and Google's AI Overviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ backgroundColor: '#0f1115', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', color: 'var(--color-text)', marginBottom: '1.5rem' }}>Our Comprehensive {serviceName} Process for {cityName} Clients</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ display: 'flex', gap: '2rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-surface)', border: '2px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>1</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Advanced Market & Competitor Analysis</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We analyse exactly who is winning in the {cityName} market for your specific industry. We find the gaps in their {serviceName} strategy and build a roadmap to exploit them.</p>
              </div>
            </div>

            <div className="card" style={{ display: 'flex', gap: '2rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-surface)', border: '2px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>2</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Intent-Driven Architecture</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Whether you are B2B or B2C, we optimise your digital presence to capture high-intent buyers in {cityName} right when they are ready to transact.</p>
              </div>
            </div>

            <div className="card" style={{ display: 'flex', gap: '2rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-surface)', border: '2px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>3</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Continuous Optimisation & Transparency</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>No hidden fees, no confusing reports. You get complete transparency into how your {serviceName} campaign is performing, with our team constantly adjusting tactics to maximize your ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(145deg, var(--color-surface) 0%, rgba(253, 155, 40, 0.05) 100%)', padding: '4rem', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Partner With Disruptors</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Stop paying for hourly retainers that penalize efficiency. Invest in value-based {serviceName} that guarantees outcomes for your {cityName} construction business.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
              Get Your Free {serviceName} Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalServicePage;
