import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * A slim sticky CTA bar that slides up from the bottom once the user scrolls
 * past the hero. Mirrors a page's hero call-to-action. Used on the home and
 * service pages. `to` is a router path; `onClick` (optional) overrides with a
 * scroll/handler for in-page targets.
 */
export default function StickyCTA({ label, primaryText = 'Book Strategy Session', to = '/contact', onClick, secondaryText, secondaryTo }) {
  const [visible, setVisible] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight * 0.75;
      if (y > heroHeight) {
        // Show when scrolling up, hide when scrolling down (less intrusive)
        setVisible(y < lastY);
      } else {
        setVisible(false);
      }
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)', zIndex: 100, padding: '0.85rem 1rem',
      transform: visible ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.3s',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <span className="sticky-cta-label" style={{ color: 'var(--color-text)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {label}
        </span>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {secondaryText && secondaryTo && (
            <Link to={secondaryTo} className="btn btn-secondary sticky-cta-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
              {secondaryText}
            </Link>
          )}
          {onClick ? (
            <button onClick={onClick} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.55rem 1.1rem' }}>
              {primaryText} <ArrowRight size={14} />
            </button>
          ) : (
            <Link to={to} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.55rem 1.1rem' }}>
              {primaryText} <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .sticky-cta-label { display: none; }
          .sticky-cta-secondary { display: none; }
        }
      `}</style>
    </div>
  );
}
