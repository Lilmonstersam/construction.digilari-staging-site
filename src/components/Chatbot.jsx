import { MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      {isOpen && (
        <div className="card" style={{ 
          width: '300px', 
          height: '400px', 
          marginBottom: '1rem', 
          display: 'flex', 
          flexDirection: 'column',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0 }}>Digilari Support</h4>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>×</button>
          </div>
          <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#0a0a0a' }}>
            <div style={{ backgroundColor: 'var(--color-surface)', padding: '0.75rem', borderRadius: '8px', alignSelf: 'flex-start', maxWidth: '80%' }}>
              Hi there! How can we help you win more commercial contracts?
            </div>
          </div>
          <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)' }}>
            <input type="text" placeholder="Type a message..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }} />
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(255, 94, 0, 0.3)',
          float: 'right'
        }}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
