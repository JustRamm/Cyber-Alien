import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileDrawer from './components/layout/MobileDrawer';
import CustomCursor from './components/common/CustomCursor';

import HomeScreen from './screens/HomeScreen';
import WorkScreen from './screens/WorkScreen';
import CaseStudyScreen from './screens/CaseStudyScreen';
import ImpactScreen from './screens/ImpactScreen';
import ProposalScreen from './screens/ProposalScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function ScreenRenderer() {
  const { currentPath } = useRouter();

  switch (currentPath) {
    case '/':
    case '/home':
      return <HomeScreen />;
    case '/work':
      return <WorkScreen />;
    case '/case-study':
      return <CaseStudyScreen />;
    case '/impact':
      return <ImpactScreen />;
    case '/proposal':
      return <ProposalScreen />;
    case '/confirmed':
      return <ConfirmationScreen />;
    default:
      return <NotFoundScreen />;
  }
}

function MainLayout() {
  const { currentPath } = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setShowScrollTop(window.scrollY > 400);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)' }}>
      {/* Precision Kinetic Laser Cursor & Magnetic Telemetry */}
      <CustomCursor />

      {/* Film Grain & Editorial Texture (Tactile Luxury) */}
      <div className="film-grain-overlay" aria-hidden="true" />

      {/* Laser-Thin Scroll Progress Scroller */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          zIndex: 1000,
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            backgroundColor: 'var(--accent-coral)',
            boxShadow: '0 0 10px rgba(244, 63, 94, 0.8)',
            transition: 'width 80ms ease-out'
          }}
        />
      </div>

      <Navbar />
      <MobileDrawer />
      <div key={currentPath} className="view-transition-in" style={{ flex: 1 }}>
        <ScreenRenderer />
      </div>
      <Footer />

      {/* Kinetic Floating Scroll-To-Top Pill */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="badge-pill-dark hide-mobile"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 90,
            padding: '10px 16px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          aria-label="Scroll back to top"
        >
          <span className="beacon-dot" style={{ backgroundColor: 'var(--accent-coral)' }}></span>
          <span className="font-label-caps" style={{ color: '#fff', fontSize: '11px', letterSpacing: '0.12em' }}>
            {Math.round(scrollProgress)}%
          </span>
          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#fff' }}>
            arrow_upward
          </span>
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}

