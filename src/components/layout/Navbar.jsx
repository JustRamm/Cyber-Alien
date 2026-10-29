import React, { useEffect, useState } from 'react';
import { useRouter } from '../../router/RouterContext';

export default function Navbar() {
  const { currentPath, currentAnchor, navigate, mobileDrawerOpen, setMobileDrawerOpen } = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Services', path: '/', anchor: 'services' },
    { label: 'Work', path: '/work', anchor: null },
    { label: 'Impact', path: '/impact', anchor: null },
    { label: 'Process', path: '/', anchor: 'process' },
    { label: 'Insights', path: '/', anchor: 'insights' }
  ];

  return (
    <header className="nav-pill-wrapper">
      <div
        className="nav-pill"
        style={{
          transform: scrolled ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: scrolled ? '0 16px 40px -10px rgba(0,0,0,0.55)' : 'var(--shadow-nav)'
        }}
      >
        {/* Brand / Logo */}
        <div className="nav-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img
            alt="Cyber Aliens"
            src="/brand/logo.png"
            style={{ height: '17px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Desktop Links */}
        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = item.anchor
              ? currentPath === '/' && currentAnchor === item.anchor
              : currentPath === item.path && !currentAnchor;

            return (
              <span
                key={item.label}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => navigate(item.path, item.anchor)}
              >
                {item.label}
              </span>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="nav-actions">
          <button
            className="btn btn-primary btn-sm nav-desktop-cta"
            onClick={() => navigate('/proposal')}
            style={{ borderRadius: 'var(--rounded-full)', height: '36px', padding: '0 1rem' }}
          >
            <span>Book a Call</span>
          </button>

          <button
            className={`mobile-nav-toggle ${mobileDrawerOpen ? 'is-active' : ''}`}
            aria-label={mobileDrawerOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMobileDrawerOpen((prev) => !prev)}
            style={{
              transition: 'background 0.2s ease, border-color 0.2s ease',
              background: mobileDrawerOpen ? 'rgba(244, 63, 94, 0.16)' : 'rgba(255, 255, 255, 0.1)',
              border: mobileDrawerOpen ? '1px solid var(--accent-coral)' : '1px solid transparent'
            }}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease',
                transform: mobileDrawerOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                color: mobileDrawerOpen ? 'var(--accent-coral)' : 'var(--text-inverse)'
              }}
            >
              {mobileDrawerOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

