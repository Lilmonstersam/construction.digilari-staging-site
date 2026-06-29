import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { caseStudiesData } from '../data/caseStudies';
import { ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';

const CaseStudyPage = () => {
  const { studyId } = useParams();
  const study = caseStudiesData[studyId];

  if (!study) {
    return <Navigate to="/" replace />;
  }

  // Up to three other case studies for the "Other Case Studies" section
  const otherStudies = Object.entries(caseStudiesData)
    .filter(([id]) => id !== studyId)
    .slice(0, 3)
    .map(([id, data]) => ({ id, ...data }));

  return (
    <>
      <Helmet>
        <title>{study.metaTitle}</title>
        <meta name="description" content={study.metaDescription} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${study.h1}",
              "publisher": {
                "@type": "Organization",
                "name": "Digilari Construction"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
            CASE STUDY{study.industry ? ` · ${study.industry.toUpperCase()}` : ''}
          </div>
          <h1 className="mb-4 text-gradient">{study.h1}</h1>
          {study.subhead && (
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text)', fontWeight: 600, marginBottom: '1rem' }}>{study.subhead}</p>
          )}
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{study.intro}</p>
          {study.categories && study.categories.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {study.categories.map((cat, idx) => (
                <span key={idx} style={{ padding: '0.25rem 0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>{cat}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results Highlight */}
      <section style={{ transform: 'translateY(-50%)', marginBottom: '-5rem' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden' }}>
            {study.results.map((res, idx) => (
              <div key={idx} style={{ background: '#171717', padding: '2rem', textAlign: 'center' }}>
                <TrendingUp size={32} color="var(--color-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{res.metric}</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{res.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* The Challenge */}
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Challenge</span>
            <h2 data-toc="The Challenge" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Market Hurdles to Overcome</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: study.challengeList ? '1.5rem' : 0 }}>
              {study.challenge}
            </p>
            {study.challengeList && (
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', padding: 0 }}>
                {study.challengeList.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '1.25rem' }}>
                    <span style={{ flexShrink: 0, width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)', marginTop: '0.5rem' }}></span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* The Solution */}
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Solution</span>
            <h2 data-toc="The Solution" style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '2rem' }}>The Digilari Solution</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {study.solution.map((sol, idx) => (
                <div key={idx} style={{ paddingLeft: '2rem', borderLeft: '4px solid var(--color-border)', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-12px', top: '0', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-bg)', border: '4px solid var(--color-primary)' }}></div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{sol.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>{sol.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Results */}
          {(study.resultsNarrative || study.keyAchievements) && (
            <div style={{ marginBottom: '4rem' }}>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Results</span>
              <h2 data-toc="The Results" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Measurable Performance</h2>
              {study.resultsNarrative && (
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: study.keyAchievements ? '2rem' : 0 }}>
                  {study.resultsNarrative}
                </p>
              )}
              {study.keyAchievements && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
                  {study.keyAchievements.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '1.25rem' }}>
                      <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* The Final Word */}
          <div style={{ background: 'rgba(255,155,40,0.05)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--color-primary)' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Final Word</span>
            <h2 data-toc="The Final Word" className="mb-4">The Final Word</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text)' }}>{study.conclusion}</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem', padding: '3rem 0', borderTop: '1px solid var(--color-border)' }}>
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Book Strategy</span>
            <h2 data-toc="Book Strategy" className="mb-4">Want Similar Results for Your Business?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary">Book A Strategy Session</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      {otherStudies.length > 0 && (
        <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 data-toc="Other Case Studies" className="mb-8" style={{ textAlign: 'center' }}>Other Case Studies</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {otherStudies.map((s) => (
                <Link key={s.id} to={`/case-studies/${s.id}`} className="card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {(s.categories || []).map((cat, idx) => (
                      <span key={idx} style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)' }}>{cat}</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{s.title.replace(' Case Study', '')}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', flexGrow: 1, lineHeight: 1.6 }}>{s.intro.length > 140 ? s.intro.substring(0, 140) + '…' : s.intro}</p>
                  <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Read Case Study <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CaseStudyPage;
