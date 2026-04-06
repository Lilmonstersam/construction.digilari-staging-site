import { useParams, Navigate, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { pagesData } from '../data/pages';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

const StandardPage = ({ pageId }) => {
  const params = useParams();
  const id = pageId || params.pageId;
  const page = pagesData[id];
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #what-is-cro)
    if (location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10rem', left: '-10rem', width: '400px', height: '400px', background: 'var(--color-primary)', opacity: '0.05', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="mb-4 text-gradient">{page.h1}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{page.intro}</p>
          {page.intro2 && <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>{page.intro2}</p>}
        </div>
      </section>

      {/* Content Sections */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ minWidth: 0 }}>
            {page.sections?.map((section, idx) => {
              const sectionId = (section.tocTitle || section.title).toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div key={idx} id={sectionId} style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
                  {section.tocTitle && <span style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{section.tocTitle}</span>}
                  <h2 data-toc={section.tocTitle || section.title} style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>{section.title}</h2>
                  <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                    {section.content}
                  </p>
                  
                  {section.subsections && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                      {section.subsections.map((sub, subIdx) => (
                        <div key={subIdx} className="card" style={{ padding: '1.5rem' }}>
                          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <div style={{ flexShrink: 0, marginTop: '2px' }}>
                              <CheckCircle size={20} color="var(--color-primary)" />
                            </div>
                            <span>{sub.title}</span>
                          </h3>
                          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={{ background: 'linear-gradient(145deg, var(--color-surface) 0%, #0f1115 100%)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center', marginTop: '5rem' }}>
              <h2 className="mb-4">Ready to Partner With Us?</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>Stop chasing generic traffic and start building your digital engine.</p>
              <Link to="/contact" className="btn btn-primary">Book a Strategy Session <ArrowRight size={20} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StandardPage;
