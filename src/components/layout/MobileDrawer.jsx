import React, { useEffect } from 'react';
import { useRouter } from '../../router/RouterContext';

export default function MobileDrawer() {
  const { mobileDrawerOpen, setMobileDrawerOpen, navigate, currentPath, currentAnchor } = useRouter();

  // Lock body scroll and listen for Escape key when drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileDrawerOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileDrawerOpen, setMobileDrawerOpen]);

  if (!mobileDrawerOpen) return null;

  const links = [
    { label: 'Services', path: '/', anchor: 'services' },
    { label: 'Work', path: '/work', anchor: null },
    { label: 'Impact', path: '/impact', anchor: null },
    { label: 'Process', path: '/', anchor: 'process' },
    { label: 'Insights', path: '/', anchor: 'insights' }
  ];

  const handleLinkClick = (path, anchor) => {
    navigate(path, anchor);
    setMobileDrawerOpen(false);
  };

  return (
    <div
      className={`mobile-drawer ${mobileDrawerOpen ? 'open' : ''}`}
      onClick={(e) => {
        // Close if tapping backdrop directly
        if (e.target === e.currentTarget) {
          setMobileDrawerOpen(false);
        }
      }}
    >
      {/* Top Header with Brand and Close Button */}
      <div className="mobile-drawer-header">
        <div
          onClick={() => handleLinkClick('/', null)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <img
            alt="Cyber Aliens"
            src="/brand/logo.png"
            style={{ height: '17px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>

        <button
          className="mobile-drawer-close"
          aria-label="Close navigation menu"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav style={{ width: '100%', margin: 'auto 0', display: 'flex', justifyContent: 'center' }}>
        <ul className="mobile-drawer-links">
          {links.map((link) => {
            const isActive = link.anchor
              ? currentPath === '/' && currentAnchor === link.anchor
              : currentPath === link.path && !currentAnchor;

            return (
              <li key={link.label}>
                <span
                  className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.path, link.anchor)}
                >
                  {link.label}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Drawer Action: Book A Call Button */}
      <div className="mobile-drawer-cta">
        <button
          className="btn btn-primary"
          style={{
            width: '100%',
            height: '52px',
            borderRadius: 'var(--rounded-full)',
            fontSize: '15px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(244, 63, 94, 0.4)'
          }}
          onClick={() => {
            navigate('/proposal');
            setMobileDrawerOpen(false);
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>calendar_month</span>
          <span>Book a Call</span>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
