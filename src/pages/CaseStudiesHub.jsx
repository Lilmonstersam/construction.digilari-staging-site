import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';

const CaseStudiesHub = () => {
  const caseStudies = Object.entries(caseStudiesData).map(([id, data]) => ({
    id,
    ...data
  }));

  return (
    <>
      <Helmet>
        <title>Case Studies | Digilari Construction</title>
        <meta name="description" content="Read our success stories and see how we help commercial construction companies scale their digital pipelines." />
      </Helmet>

      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10rem', left: '-10rem', width: '400px', height: '400px', background: 'var(--color-primary)', opacity: '0.05', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
            PROVEN RESULTS
          </div>
          <h1 className="mb-4 text-gradient">Construction Case Studies</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            See exactly how we've helped B2B construction suppliers and contractors dominate their local markets, secure huge tenders, and scale their organic pipelines.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {caseStudies.map((study) => (
              <div key={study.id} className="card fade-in" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <TrendingUp size={16} /> Growth Case Study
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>{study.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6', flexGrow: 1 }}>{study.intro}</p>
                  
                  {study.results && study.results.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1.5rem', background: 'var(--color-bg)', borderRadius: '8px', border: '1px solid var(--color-border)', marginBottom: '2rem' }}>
                      {study.results.map((result, idx) => (
                        <div key={idx}>
                          <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{result.metric}</div>
                          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{result.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to={`/case-studies/${study.id}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    Read Full Case Study <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(145deg, var(--color-surface) 0%, #0f1115 100%)', padding: '3.5rem', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center', marginTop: '5rem' }}>
            <h2 className="mb-4">Want these same results?</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>We only partner with construction businesses we know we can scale. Let's see if you're a fit.</p>
            <Link to="/contact" className="btn btn-primary">Get Your Free Strategy Session <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHub;
