import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { articlesData } from '../data/articles';

const ArticlesHub = () => {
  const articles = Object.entries(articlesData).map(([slug, data]) => ({ slug, ...data }));

  return (
    <>
      <Helmet>
        <title>Construction Marketing Insights | Digilari Construction</title>
        <meta name="description" content="Read the latest strategies in digital marketing for commercial construction: SEO, paid media, AI visibility, and agency pricing." />
      </Helmet>

      {/* Hero */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10rem', left: '-10rem', width: '400px', height: '400px', background: 'var(--color-primary)', opacity: '0.05', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
            KNOWLEDGE HUB
          </div>
          <h1 className="mb-4 text-gradient">Construction Marketing Insights</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Practical strategy on B2B marketing, SEO, paid media, and AI visibility for commercial construction suppliers and contractors.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {articles.map((article) => (
              <Link key={article.slug} to={`/articles/${article.slug}`} className="card fade-in" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', padding: 0, overflow: 'hidden' }}>
                {article.heroImage && (
                  <div style={{ height: '180px', overflow: 'hidden', background: '#0f1115', borderBottom: '1px solid var(--color-border)' }}>
                    <img src={article.heroImage} alt={article.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <span style={{ color: 'var(--color-primary)' }}>{article.category}</span>
                    {article.readTime && <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-text-muted)' }}><Clock size={12} /> {article.readTime}</span>}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{article.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                    {article.intro.length > 150 ? article.intro.substring(0, 150) + '…' : article.intro}
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {article.author && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <img src={`${import.meta.env.BASE_URL}images/team-members/${article.author.img}`} alt={article.author.name} style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{article.author.name}</span>
                      </div>
                    )}
                    <span style={{ color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(145deg, var(--color-surface) 0%, #0f1115 100%)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center', marginTop: '4rem' }}>
            <h2 className="mb-4">More insights on the way</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>We publish practical, no-fluff strategy for construction marketers. Book a session to talk through your own growth plan.</p>
            <Link to="/contact" className="btn btn-primary">Book a Strategy Session <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesHub;
