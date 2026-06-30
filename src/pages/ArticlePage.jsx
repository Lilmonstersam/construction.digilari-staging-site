import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { articlesData } from '../data/articles';
import { ArrowRight, Calendar, Clock, ArrowUpRight } from 'lucide-react';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articlesData[slug];
  const [activeId, setActiveId] = useState('');

  // Build TOC from headings flagged with toc: true
  const tocItems = article
    ? article.body.filter((b) => b.type === 'heading' && b.toc).map((b) => ({ id: b.id, text: b.text }))
    : [];

  useEffect(() => {
    if (tocItems.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px -65% 0px', threshold: 0 }
    );
    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!article) return <Navigate to="/articles" replace />;

  const renderBlock = (block, idx) => {
    switch (block.type) {
      case 'heading': {
        const Tag = block.level === 3 ? 'h3' : 'h2';
        return (
          <Tag key={idx} id={block.id} data-toc={block.text} style={{ scrollMarginTop: '100px', fontSize: block.level === 3 ? '1.4rem' : '1.85rem', marginTop: '2.5rem', marginBottom: '1rem' }}>
            {block.text}
          </Tag>
        );
      }
      case 'paragraph':
        return <p key={idx} style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>{block.text}</p>;
      case 'list':
        return (
          <ul key={idx} style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {block.items.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                <span style={{ flexShrink: 0, width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '0.6rem' }}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={idx} style={{ borderLeft: '3px solid var(--color-primary)', padding: '0.5rem 0 0.5rem 1.5rem', margin: '0 0 1.5rem 0', fontStyle: 'italic', color: 'var(--color-text)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            {block.text}
            {block.cite && <footer style={{ marginTop: '0.75rem', fontStyle: 'normal', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>– {block.cite}</footer>}
          </blockquote>
        );
      case 'callout':
        return (
          <div key={idx} style={{ background: 'rgba(255,155,40,0.06)', border: '1px solid var(--color-primary)', borderRadius: '12px', padding: '1.5rem', margin: '0 0 1.5rem 0', color: 'var(--color-text)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 600 }}>
            {block.text}
          </div>
        );
      case 'table':
        return (
          <div key={idx} style={{ overflowX: 'auto', margin: '0 0 1.5rem 0', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'var(--color-surface)' }}>
                  {block.head.map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '0.9rem 1rem', color: 'var(--color-text)', fontWeight: 700, borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: ri !== block.rows.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '0.9rem 1rem', color: ci === 0 ? 'var(--color-text)' : 'var(--color-text-muted)', fontWeight: ci === 0 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'stat-row':
        return (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '0 0 1.5rem 0' }}>
            {block.stats.map((s, i) => (
              <div key={i} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text)', margin: '0.5rem 0' }}>{s.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{s.note}</div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${article.title}",
              "author": { "@type": "Person", "name": "${article.author.name}" },
              "publisher": { "@type": "Organization", "name": "Digilari Construction" }
            }
          `}
        </script>
      </Helmet>

      {/* Marker so the global floating TOC suppresses itself on article pages */}
      <span data-article-toc style={{ display: 'none' }} />

      {/* Hero */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <span style={{ color: 'var(--color-primary)' }}>{article.category}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)' }}><Calendar size={14} /> {article.publishedLabel}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)' }}><Clock size={14} /> {article.readTime}</span>
          </div>
          <h1 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>{article.title}</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{article.intro}</p>
        </div>
      </section>

      {/* Body + Sticky TOC */}
      <section className="section">
        <div className="container article-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start' }}>
          <article style={{ minWidth: 0 }}>
            {article.body.map(renderBlock)}

            {/* Author section */}
            <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--color-border)' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>About the Author</span>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <img src={`${import.meta.env.BASE_URL}images/team-members/${article.author.img}`} alt={article.author.name} style={{ width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{article.author.name}</h3>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>{article.author.role}</div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>{article.author.bio}</p>
                  {article.author.slug && (
                    <Link to={`/team/${article.author.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-secondary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      View full profile <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Sticky right TOC */}
          {tocItems.length > 0 && (
            <aside className="article-toc-sidebar">
              <div style={{ position: 'sticky', top: '100px' }}>
                <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: 800, paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>On this page</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                          style={{
                            display: 'block', padding: '0.4rem 0.75rem', borderRadius: '8px', borderLeft: '2px solid transparent', fontSize: '0.82rem', fontWeight: activeId === item.id ? 700 : 500,
                            color: activeId === item.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            background: activeId === item.id ? 'rgba(255, 94, 0, 0.08)' : 'transparent',
                            borderLeftColor: activeId === item.id ? 'var(--color-primary)' : 'transparent',
                            textDecoration: 'none', transition: 'all 0.2s', lineHeight: 1.4
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '1.5rem', background: 'linear-gradient(145deg, rgba(255,94,0,0.08) 0%, var(--color-surface) 100%)', border: '1px solid var(--color-primary)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', marginBottom: '1rem', fontWeight: 600 }}>Curious about your own marketing budget?</p>
                  <Link to="/pricing" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}>View Pricing</Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {article.related && article.related.length > 0 && (
        <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 data-toc="Related Articles" className="mb-8" style={{ textAlign: 'center' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {article.related.map((rel, i) => (
                <a key={i} href={rel.href} target="_blank" rel="noopener noreferrer" className="card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Article</span>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{rel.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', flexGrow: 1, lineHeight: 1.6 }}>{rel.excerpt}</p>
                  <div style={{ marginTop: '1.5rem', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    Read more <ArrowUpRight size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (min-width: 1000px) {
          .article-grid { grid-template-columns: minmax(0, 1fr) 280px !important; }
        }
        @media (max-width: 999px) {
          .article-toc-sidebar { display: none; }
        }
      `}</style>
    </>
  );
};

export default ArticlePage;
