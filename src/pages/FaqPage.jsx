import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { pagesData } from '../data/pages';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          color: 'var(--color-text)',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '1.125rem',
          fontWeight: 600,
        }}
      >
        <span style={{ paddingRight: '2rem', lineHeight: '1.4' }}>{title}</span>
        <div style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          color: isOpen ? 'var(--color-primary)' : 'var(--color-text-muted)',
          display: 'flex'
        }}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isOpen ? 1 : 0,
      }}>
        <p style={{ paddingBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
          {content}
        </p>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const page = pagesData['faqs'];
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, qIndex) => {
    const key = `${categoryIndex}-${qIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Organize FAQs based on specific tocTitles to match user groups
  const groupsDefinition = [
    {
      title: "Pricing & Packages",
      matches: ['Marketing Costs', 'Hidden Fees']
    },
    {
      title: "Results & Performance",
      matches: ['Timeframe for Results', 'Guaranteed Results', 'If Numbers Drop', 'Proof of Success', 'Measuring Success']
    },
    {
      title: "Services & Strategy",
      matches: ['Customised Industry Solutions', 'SEO vs PPC', 'Leveraging AI', 'Supported Websites', 'CRM Integration']
    },
    {
      title: "Agency-Related",
      matches: ['Agency vs In-House', 'Comparing Digilari', 'Red Flags', 'Avoiding Pitfalls']
    }
  ];

  const groupedFaqs = groupsDefinition.map(group => {
    return {
      title: group.title,
      questions: page.sections.filter(s => group.matches.includes(s.tocTitle))
    };
  });

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
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
            KNOWLEDGE BASE
          </div>
          <h1 className="mb-4 text-gradient">{page.h1}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{page.intro}</p>
        </div>
      </section>

      {/* Accordion Categories */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {groupedFaqs.map((category, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: 'var(--color-primary)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>{category.title}</h2>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '0 2rem' }}>
                {category.questions.map((q, qIdx) => (
                  <AccordionItem 
                    key={qIdx}
                    title={q.title}
                    content={q.content}
                    isOpen={openItems[`${catIdx}-${qIdx}`]}
                    onClick={() => toggleItem(catIdx, qIdx)}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Fallback support contact block */}
          <div style={{ background: 'linear-gradient(145deg, var(--color-surface) 0%, #0f1115 100%)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center', marginTop: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1rem' }}><MessageCircle size={48} /></div>
            <h3 className="mb-4">Still have questions?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>We're here to help you navigate B2B construction marketing securely.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Book a Strategy Session</Link>
              <a href="tel:1300859358" className="btn btn-secondary" style={{ width: 'auto' }}>Call 1300 859 358</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
