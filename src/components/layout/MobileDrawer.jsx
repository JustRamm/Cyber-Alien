import React from 'react';
import { useRouter } from '../../router/RouterContext';

export default function MobileDrawer() {
  const { mobileDrawerOpen, setMobileDrawerOpen, navigate, currentPath, currentAnchor } = useRouter();

  if (!mobileDrawerOpen) return null;

  const links = [
    { label: 'Home', path: '/', anchor: null },
    { label: 'Services', path: '/', anchor: 'services' },
    { label: 'Work', path: '/work', anchor: null },
    { label: 'Case Study', path: '/case-study', anchor: null },
    { label: 'Impact', path: '/impact', anchor: null },
    { label: 'Process', path: '/', anchor: 'process' },
    { label: 'About', path: '/', anchor: 'about' },
    { label: 'Insights', path: '/', anchor: 'insights' },
    { label: 'Get a Proposal', path: '/proposal', anchor: null }
  ];

  return (
    <div className={`mobile-drawer ${mobileDrawerOpen ? 'open' : ''}`}>
      <button
        className="mobile-drawer-close"
        aria-label="Close navigation"
        onClick={() => setMobileDrawerOpen(false)}
      >
        <span className="material-symbols-outlined text-[24px]">close</span>
      </button>

      <ul className="mobile-drawer-links">
        {links.map((link) => {
          const isActive = link.anchor
            ? currentPath === '/' && currentAnchor === link.anchor
            : currentPath === link.path && !currentAnchor;

          return (
            <li key={link.label}>
              <span
                className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                onClick={() => navigate(link.path, link.anchor)}
              >
                {link.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

