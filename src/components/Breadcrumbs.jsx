import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on the homepage
  if (pathnames.length === 0) {
    return null;
  }

  // Helper to format segments
  const formatSegment = (segment) => {
    const acronyms = ['seo', 'faqs', 'ppc', 'cro', 'smm', 'aeo', 'geo'];
    
    return segment
      .split('-')
      .map((word) => {
        const lower = word.toLowerCase();
        if (acronyms.includes(lower)) {
          return lower === 'faqs' ? 'FAQs' : lower.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  return (
    <div className="container" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, paddingTop: '2rem', paddingBottom: '0', background: 'transparent', pointerEvents: 'none' }}>
      <nav aria-label="breadcrumb" style={{ background: 'transparent', pointerEvents: 'auto' }}>
        <ol style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'flex', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontSize: '0.875rem',
          color: 'var(--color-text-muted)'
        }}>
          <li>
            <Link to="/" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Home size={14} style={{ marginRight: '4px' }} />
              Home
            </Link>
          </li>
          
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <li key={to} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ChevronRight size={14} style={{ opacity: 0.5 }} />
                {last ? (
                  <span style={{ color: 'var(--color-text)', fontWeight: 500 }} aria-current="page">
                    {formatSegment(value)}
                  </span>
                ) : (
                  <Link to={to} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                    {formatSegment(value)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
