import React, { useState } from 'react';
import { useRouter } from '../../router/RouterContext';

export default function Footer() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  }

  return (
    <footer
      style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--on-primary)',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-2xl)',
        paddingLeft: 'clamp(1.25rem, 3.5vw, 3rem)',
        paddingRight: 'clamp(1.25rem, 3.5vw, 3rem)',
        marginTop: 'var(--space-3xl)'
      }}
    >
      <div className="container-max">
        <div
          className="grid-12"
          style={{
            paddingBottom: 'var(--space-2xl)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {/* Brand & Availability Status */}
          <div className="col-span-12" style={{ gridColumn: 'span 5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
              <img
                alt="Cyber Aliens Logo"
                src="/brand/logo.png"
                style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p className="font-body-md" style={{ color: 'var(--on-primary-container)', maxWidth: '380px', marginBottom: 'var(--space-lg)' }}>
              High-performance design and technology studio constructing transformative digital systems, experimental brand worlds, and cinematic interfaces.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <span className="beacon-dot animate-ping-radar" style={{ width: '8px', height: '8px' }}></span>
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)', letterSpacing: '0.08em' }}>
                Available for Q3/Q4 Studio Partnerships
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px' }}>
              <img
                alt="Mind Empowered Logo"
                src="/brand/mind-empowered.png"
                style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'contain', background: '#FFFFFF', padding: '1px' }}
              />
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)', fontSize: '11px' }}>
                In Partnership with <a href="https://mind-empowered.org" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Mind Empowered NGO</a>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
            <span className="font-label-caps" style={{ color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 'var(--space-md)' }}>
              Navigation
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <li>
                <span className="font-body-sm" style={{ color: 'var(--on-primary-container)', cursor: 'pointer' }} onClick={() => navigate('/', 'services')}>
                  Services & Architecture
                </span>
              </li>
              <li>
                <span className="font-body-sm" style={{ color: 'var(--on-primary-container)', cursor: 'pointer' }} onClick={() => navigate('/work')}>
                  Selected Works
                </span>
              </li>
              <li>
                <span className="font-body-sm" style={{ color: 'var(--on-primary-container)', cursor: 'pointer' }} onClick={() => navigate('/case-study')}>
                  Case Study: Obsidian
                </span>
              </li>
              <li>
                <span className="font-body-sm" style={{ color: 'var(--on-primary-container)', cursor: 'pointer' }} onClick={() => navigate('/impact')}>
                  Impact & Mind Empowered
                </span>
              </li>
              <li>
                <span className="font-body-sm" style={{ color: 'var(--on-primary-container)', cursor: 'pointer' }} onClick={() => navigate('/', 'process')}>
                  Methodology & Process
                </span>
              </li>
              <li>
                <span className="font-body-sm" style={{ color: 'var(--on-primary-container)', cursor: 'pointer' }} onClick={() => navigate('/', 'insights')}>
                  Studio Insights
                </span>
              </li>
            </ul>
          </div>

          {/* Transmission Dispatch Newsletter */}
          <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
            <span className="font-label-caps" style={{ color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 'var(--space-md)' }}>
              Transmission Dispatch
            </span>
            <p className="font-body-sm" style={{ color: 'var(--on-primary-container)', marginBottom: 'var(--space-md)' }}>
              Bi-weekly telemetry on creative precision, software craftsmanship, and spatial interaction design.
            </p>
            {subscribed ? (
              <div style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--rounded-md)', color: 'var(--accent-coral)' }}>
                ✓ Terminal transmission registered.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--primary-container)',
                  borderRadius: 'var(--rounded-full)',
                  padding: '6px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your terminal address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'transparent',
                    padding: '8px 16px',
                    fontSize: '14px',
                    color: 'var(--on-primary)',
                    width: '100%'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-secondary btn-sm"
                  style={{ borderRadius: 'var(--rounded-full)', height: '36px', padding: '0 18px', shrink: 0 }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Coordinates & Legal */}
        <div
          style={{
            paddingTop: 'var(--space-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-md)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <a href="https://in.linkedin.com/company/cyberalienss" target="_blank" rel="noopener noreferrer" className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>LinkedIn</a>
            <a href="https://www.instagram.com/cyberaliens.in/" target="_blank" rel="noopener noreferrer" className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Instagram</a>
            <a href="https://in.pinterest.com/cyberalienss/" target="_blank" rel="noopener noreferrer" className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Pinterest</a>
            <a href="https://clutch.co/profile/cyber-aliens" target="_blank" rel="noopener noreferrer" className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Clutch (Verified)</a>
            <a href="mailto:hello@cyberaliens.in" className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>hello@cyberaliens.in</a>
          </div>
          <div className="font-label-caps" style={{ color: 'var(--on-primary-container)', letterSpacing: '0.06em', fontSize: '11px' }}>
            © 2026 Cyber Aliens • Subsidiary of 42Souls Enterprises Pvt. Ltd. • Kerala, India
          </div>
        </div>
      </div>
    </footer>
  );
}

