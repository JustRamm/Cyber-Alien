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
        <div className="nav-brand" onClick={() => navigate('/')}>
          <img
            alt="Cyber Aliens Logo"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Uzc_PuUuHRL0E06yPz28AN_2499UyahXr3euOafzaZ4b-YbTuC_c1ZO1hXEi__tCgpVqt5AWylYqw6Lwks8hnhOiVqSlc4GjRl_dc8tNDtggA-u8AQ5rBhychwzJPn2vWXQjwLi2DZ5uR0gv1a9iRS1Jj4Z_OVid3m3rDoEJDajy7bmUqA3yTBTONdDhT5tfrzay_fh8lCydYDjt1vFFOMjO7abhpTQgeGu_ZwFYsx"
            style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
          />
          <span className="nav-logo-text">Cyber Aliens</span>
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
            className="btn btn-primary btn-sm"
            onClick={() => navigate('/proposal')}
            style={{ borderRadius: 'var(--rounded-full)', height: '36px', padding: '0 1rem' }}
          >
            <span>Book a Call</span>
          </button>

          <button
            className="mobile-nav-toggle"
            aria-label="Toggle mobile navigation"
            onClick={() => setMobileDrawerOpen(true)}
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

