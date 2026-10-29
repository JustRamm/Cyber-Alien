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
    { num: '01', label: 'Services', path: '/', anchor: 'services', hint: 'Web, Brand, Video' },
    { num: '02', label: 'Work', path: '/work', anchor: null, hint: 'Selected Artifacts' },
    { num: '03', label: 'Impact', path: '/impact', anchor: null, hint: 'Mind Empowered Alliance' },
    { num: '04', label: 'Process', path: '/', anchor: 'process', hint: 'Direct Execution' },
    { num: '05', label: 'Insights', path: '/', anchor: 'insights', hint: 'Studio Perspectives' }
  ];

  const handleLinkClick = (path, anchor) => {
    navigate(path, anchor);
    setMobileDrawerOpen(false);
  };

  return (
    <div
      className={`mobile-menu-backdrop ${mobileDrawerOpen ? 'open' : ''}`}
      onClick={(e) => {
        // Tapping blurred backdrop outside panel closes the menu
        if (e.target === e.currentTarget) {
          setMobileDrawerOpen(false);
        }
      }}
    >
      <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
        {/* Top Telemetry Header */}
        <div className="mobile-menu-telemetry">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="beacon-dot animate-ping-radar" style={{ width: '6px', height: '6px' }} />
            <span className="font-label-caps" style={{ fontSize: '10px', color: 'var(--accent-coral)', letterSpacing: '0.14em', fontWeight: 700 }}>
              CYBER ALIENS // DIRECTORY
            </span>
          </div>
          <span className="font-label-caps" style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.45)', letterSpacing: '0.08em' }}>
            2026 EDITION
          </span>
        </div>

        {/* Architectural Navigation Rows */}
        <nav className="mobile-menu-nav">
          {links.map((link) => {
            const isActive = link.anchor
              ? currentPath === '/' && currentAnchor === link.anchor
              : currentPath === link.path && !currentAnchor;

            return (
              <div
                key={link.label}
                className={`mobile-menu-row ${isActive ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.path, link.anchor)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="mobile-menu-num font-label-caps">
                    {link.num}
                  </span>
                  <div>
                    <span className="mobile-menu-title font-headline-sm">
                      {link.label}
                    </span>
                    <span className="mobile-menu-hint font-body-sm">
                      {link.hint}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {isActive && (
                    <span className="beacon-dot" style={{ width: '6px', height: '6px' }} />
                  )}
                  <span className="material-symbols-outlined mobile-menu-arrow">
                    arrow_forward
                  </span>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Primary Action Button ("Book a Call") & Studio Charter Readout */}
        <div className="mobile-menu-footer">
          <button
            className="btn btn-primary"
            style={{
              width: '100%',
              height: '50px',
              borderRadius: 'var(--rounded-full)',
              fontSize: '14.5px',
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
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>
            <span>Book a Call</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>north_east</span>
          </button>

          <div className="mobile-menu-status">
            <span>THREE PARTNERS // ZERO AGENCY BLOAT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
