import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List, X, ChevronRight } from 'lucide-react';

export default function StickyTOC() {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const location = useLocation();

  // Reset open state on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const timer = setTimeout(() => {
      const h2s = Array.from(document.querySelectorAll('h2'));
      const items = h2s.map((h, i) => {
        if (!h.id) h.id = `heading-${i}`;
        return { id: h.id, text: h.dataset.toc || h.innerText };
      });
      setHeadings(items);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length <= 2) return null;

  return (
    <div style={{ 
      opacity: isScrolled ? 1 : 0, 
      pointerEvents: isScrolled ? 'auto' : 'none', 
      transition: 'opacity 0.4s ease-in-out' 
    }}>
      {/* Toggle Button — visible on ALL screen sizes */}
      <button 
        className="toc-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          zIndex: 999,
          backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-surface)',
          color: isOpen ? '#0f1115' : 'var(--color-primary)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        aria-label="Toggle Table of Contents"
      >
        {isOpen ? <X size={18} /> : <List size={18} />}
      </button>

      {/* TOC Container */}
      <aside className={`toc-container ${isOpen ? 'open' : ''}`}>
        <div className="toc-inner">
          <h4 className="toc-title">On this page</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {headings.map((h) => (
              <li key={h.id}>
                <a 
                  href={`#${h.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id).scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className={`toc-link ${activeId === h.id ? 'toc-link-active' : ''}`}
                >
                  {h.text.length > 28 ? h.text.substring(0, 28) + '…' : h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <style>{`
        /* ---- Desktop: collapsible right sidebar ---- */
        @media (min-width: 1701px) {
          .toc-toggle-btn {
            bottom: auto;
            top: 50%;
            right: 2rem;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }
          .toc-container {
            position: fixed;
            top: 50%;
            right: 2rem;
            transform: translateY(-50%) translateX(110%);
            width: 220px;
            z-index: 998;
            background: rgba(15, 17, 21, 0.92);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.4);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
            opacity: 0;
            pointer-events: none;
          }
          .toc-container.open {
            transform: translateY(-50%) translateX(0);
            opacity: 1;
            pointer-events: auto;
          }
          /* Shift toggle button left when open */
          .toc-container.open ~ .toc-toggle-btn,
          .toc-toggle-btn {
            transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1), all 0.2s;
          }
        }

        /* ---- Mobile / medium screens: bottom-right panel ---- */
        @media (max-width: 1700px) {
          .toc-toggle-btn {
            bottom: 6.5rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .toc-container {
            position: fixed;
            right: 2rem;
            bottom: 11rem;
            width: 280px;
            z-index: 998;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.6);
            transform: translateX(120%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .toc-container.open {
            transform: translateX(0);
          }
        }

        /* ---- Shared styles ---- */
        .toc-inner {
          padding: 1.25rem 1rem;
        }
        .toc-title {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-primary);
          margin-bottom: 0.75rem;
          font-weight: 800;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--color-border);
        }
        .toc-link {
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          display: block;
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          border-left: 2px solid transparent;
          transition: all 0.2s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .toc-link:hover {
          color: var(--color-text);
          background: rgba(255,255,255,0.05);
        }
        .toc-link-active {
          color: var(--color-primary) !important;
          border-left-color: var(--color-primary);
          background: rgba(255, 94, 0, 0.08);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
