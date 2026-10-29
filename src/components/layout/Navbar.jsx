import React, { useEffect, useState } from 'react';
import { useRouter } from '../../router/RouterContext';

export default function Navbar() {
  const { currentPath, currentAnchor, navigate, setMobileDrawerOpen } = useRouter();
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
            className="mobile-nav-toggle"
            aria-label="Toggle mobile navigation"
            onClick={() => setMobileDrawerOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

