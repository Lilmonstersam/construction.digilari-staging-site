import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { teamData } from '../data/team';
import { ArrowRight, ArrowLeft, Mail, BookOpen } from 'lucide-react';

const Linkedin = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const Instagram = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TeamMemberPage = () => {
  const { memberId } = useParams();
  const member = teamData[memberId];

  if (!member) return <Navigate to="/why-digilari" replace />;

  // Other team members for the strip at the bottom
  const others = Object.entries(teamData)
    .filter(([id]) => id !== memberId)
    .map(([id, data]) => ({ id, ...data }));

  return (
    <>
      <Helmet>
        <title>{member.metaTitle}</title>
        <meta name="description" content={member.metaDescription} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "${member.name}",
              "jobTitle": "${member.role}",
              "worksFor": { "@type": "Organization", "name": "Digilari Construction" }
            }
          `}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link to="/why-digilari" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
            <ArrowLeft size={14} /> Back to the Team
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '320px' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-border)', aspectRatio: '1', background: '#0f1115' }}>
                <img src={`${import.meta.env.BASE_URL}images/team-members/${member.img}`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
            </div>
            <div>
              <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255, 94, 0, 0.1)', color: 'var(--color-primary)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
                {member.role}
              </span>
              <h1 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>{member.name}</h1>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {member.links.linkedin && (
                  <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={iconBtn}><Linkedin size={18} /></a>
                )}
                {member.links.twitter && (
                  <a href={member.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" style={iconBtn}><Twitter size={18} /></a>
                )}
                {member.links.instagram && (
                  <a href={member.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconBtn}><Instagram size={18} /></a>
                )}
                {member.links.email && (
                  <a href={`mailto:${member.links.email}`} aria-label="Email" style={iconBtn}><Mail size={18} /></a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio + Expertise */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 data-toc={`About ${member.name.split(' ')[0]}`} style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>About {member.name.split(' ')[0]}</h2>
            {member.bio.map((para, i) => (
              <p key={i} style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>{para}</p>
            ))}

            {member.guides && member.guides.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={20} color="var(--color-secondary)" /> Guides Created</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {member.guides.map((g, i) => (
                    <li key={i}>
                      <a href={g.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {g.title} <ArrowRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2rem', position: 'sticky', top: '100px' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-secondary)', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>Areas of Expertise</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {member.expertise.map((skill, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--color-text)' }}>{skill.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the rest of the team */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 data-toc="Meet the Team" className="mb-8" style={{ textAlign: 'center' }}>Meet the Rest of the Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {others.map((m) => (
              <Link key={m.id} to={`/team/${m.id}`} className="team-card" style={{ background: '#0a0a0a', borderRadius: '12px', border: '1px solid var(--color-border)', overflow: 'hidden', textDecoration: 'none', transition: 'transform 0.3s ease, border-color 0.3s ease', display: 'block' }}>
                <div style={{ height: '240px', overflow: 'hidden', background: '#0f1115' }}>
                  <img src={`${import.meta.env.BASE_URL}images/team-members/${m.img}`} alt={m.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(30%)' }} />
                </div>
                <div style={{ padding: '1.25rem 1rem' }}>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: 'var(--color-text)' }}>{m.name}</h4>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: '#0f1115', textAlign: 'center' }}>
        <div className="container">
          <h2 data-toc="Work With Us" style={{ color: '#0f1115' }} className="mb-4">Want to work with our specialists?</h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: '#0f1115' }}>
            Book a strategy session and speak directly with the team building construction marketing pipelines that perform.
          </p>
          <Link to="/contact" className="btn" style={{ backgroundColor: '#0f1115', color: 'white' }}>Book Your Free Consultation</Link>
        </div>
      </section>

      <style>{`
        .team-card:hover { transform: translateY(-5px); border-color: var(--color-primary) !important; }
        .team-card:hover img { filter: grayscale(0%); }
      `}</style>
    </>
  );
};

const iconBtn = {
  width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)', transition: 'all 0.2s'
};

export default TeamMemberPage;
