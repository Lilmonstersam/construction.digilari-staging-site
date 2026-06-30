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
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="case-study-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
            {caseStudies.map((study) => {
              // Short, punchy preview: the first sentence of the company description only.
              const preview = study.previewText || (study.intro.split('. ')[0].replace(/\.$/, '') + '.');
              return (
              <div key={study.id} className="card fade-in" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      <TrendingUp size={14} /> {study.industry || 'Growth'}
                    </div>
                    {study.categories && study.categories.length > 0 && (
                      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                        {study.categories.slice(0, 3).map((cat, idx) => (
                          <span key={idx} style={{ fontSize: '0.55rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '100px', padding: '0.15rem 0.5rem' }}>{cat}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', lineHeight: '1.25' }}>{study.title.replace(' Case Study', '')}</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.55', fontSize: '0.9rem', flexGrow: 1 }}>{preview}</p>

                  {study.results && study.results.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', padding: '1rem', background: 'var(--color-bg)', borderRadius: '8px', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx}>
                          <div style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.1rem' }}>{result.metric}</div>
                          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.3 }}>{result.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to={`/case-studies/${study.id}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                    Read Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              );
            })}
          </div>

          <style>{`
            @media (max-width: 1000px) { .case-study-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 640px) { .case-study-grid { grid-template-columns: 1fr !important; } }
          `}</style>

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
