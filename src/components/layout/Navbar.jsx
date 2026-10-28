import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from '../../router/RouterContext';

export default function Navbar() {
  const { currentPath, currentAnchor, navigate, setMobileDrawerOpen } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileModalOpen(false);
      }
    }
    if (profileModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileModalOpen]);

  const navItems = [
    { label: 'Services', path: '/', anchor: 'services' },
    { label: 'Work', path: '/work', anchor: null },
    { label: 'Impact', path: '/impact', anchor: null },
    { label: 'Process', path: '/', anchor: 'process' },
    { label: 'About', path: '/', anchor: 'about' },
    { label: 'Insights', path: '/', anchor: 'insights' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '10px 1.5rem' : '18px 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: scrolled ? 'rgba(250, 249, 245, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(17, 17, 17, 0.06)' : '1px solid transparent',
        transition: 'all var(--transition-normal)',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        {/* =========================================================
            1. LEFT (ON CREAM PAGE): BRAND LOGO + TEXT
            ========================================================= */}
        <div style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
          <div
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            aria-label="Cyber Aliens Home"
          >
            {/* Square CA Badge with Coral Accent */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '13px',
                letterSpacing: '-0.02em',
                position: 'relative',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-headline)' }}>CA</span>
              <span
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-coral)'
                }}
              />
            </div>

            {/* Brand Title */}
            <span
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)'
              }}
            >
              Cyber Aliens
            </span>
          </div>
        </div>

        {/* =========================================================
            2. CENTER (FLOATING BLACK PILL): MENU LINKS ONLY
            ========================================================= */}
        <div style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'auto' }}>
          <nav
            className="hide-mobile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(10, 10, 10, 0.94)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              height: '44px',
              padding: '0 10px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.22)',
              transition: 'transform var(--transition-normal)'
            }}
          >
            {navItems.map((item) => {
              const isActive = item.anchor
                ? currentPath === '/' && currentAnchor === item.anchor
                : currentPath === item.path && !currentAnchor;

              return (
                <span
                  key={item.label}
                  onClick={() => navigate(item.path, item.anchor)}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    fontFamily: 'var(--font-label)',
                    fontSize: '12.5px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#FFFFFF' : '#8E8E8E',
                    background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#8E8E8E';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-coral)',
                        boxShadow: '0 0 6px var(--accent-coral)'
                      }}
                    />
                  )}
                </span>
              );
            })}
          </nav>
        </div>

        {/* =========================================================
            3. RIGHT (ON CREAM PAGE): BOOK A CALL + AVATAR ICON
            ========================================================= */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '10px',
            pointerEvents: 'auto',
            position: 'relative'
          }}
          ref={profileRef}
        >
          {/* BOOK A CALL Button */}
          <button
            onClick={() => navigate('/proposal')}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(17, 17, 17, 0.15)',
              borderRadius: '9999px',
              height: '38px',
              padding: '0 18px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-label)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'all var(--transition-fast)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F0EFEA';
              e.currentTarget.style.borderColor = 'rgba(17, 17, 17, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = 'rgba(17, 17, 17, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Book a Call</span>
          </button>

          {/* User Profile / Client Portal Avatar Button (👤) */}
          <button
            onClick={() => setProfileModalOpen(!profileModalOpen)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#0A0A0A',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
              transition: 'all var(--transition-fast)',
              position: 'relative'
            }}
            aria-label="Client Portal Telemetry"
            title="Studio Client Telemetry"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1C1C1C';
              e.currentTarget.style.boxShadow = '0 0 14px rgba(244, 63, 94, 0.35)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0A0A0A';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* SVG Silhouette User Avatar */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>

            {/* Little Active Beacon Dot */}
            <span
              style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-coral)',
                boxShadow: '0 0 6px var(--accent-coral)'
              }}
            />
          </button>

          {/* Interactive Client Portal Dropdown / Popover */}
          {profileModalOpen && (
            <div
              style={{
                position: 'absolute',
                top: '50px',
                right: '0',
                width: '280px',
                background: '#0A0A0A',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '18px',
                color: '#FFFFFF',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                zIndex: 110,
                animation: 'fadeSlideUp 0.15s ease-out'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontSize: '10px', letterSpacing: '0.12em' }}>
                  // CLIENT TELEMETRY
                </span>
                <span
                  style={{
                    background: 'rgba(244, 63, 94, 0.15)',
                    color: 'var(--accent-coral)',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '9999px'
                  }}
                >
                  PRE-DISPATCH
                </span>
              </div>

              <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '15px', fontWeight: 700, margin: '0 0 6px 0', color: '#fff' }}>
                Studio Partner Portal
              </h4>

              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, margin: '0 0 14px 0' }}>
                Active partner sprint tracking, live CAD telemetry, and secure asset vaults.
              </p>

              <button
                onClick={() => {
                  setProfileModalOpen(false);
                  navigate('/proposal');
                }}
                className="btn btn-secondary btn-sm"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  height: '34px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em'
                }}
              >
                Request Partner Access
              </button>
            </div>
          )}

          {/* Mobile Hamburger Toggle for <768px */}
          <button
            className="mobile-nav-toggle show-mobile"
            aria-label="Toggle mobile navigation"
            onClick={() => setMobileDrawerOpen(true)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
