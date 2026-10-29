import React, { useEffect, useRef, useState } from 'react';

/**
 * Kinetic Custom Cursor & Magnetic Telemetry System
 * - Precision 5px Coral Laser Dot (immediate response)
 * - Lagging Kinetic Glass Ring (lerp physics, 120fps)
 * - Magnetic Pull on buttons & chips
 * - Contextual Morphing (Explore badge on project cards, Zoom aperture on images, Interactive glow on links/buttons)
 * - Touch-safe (deactivates automatically on touch/mobile devices)
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'hover' | 'explore' | 'zoom'
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references for high-speed 120fps animation loop without React state re-rendering
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const activeMagneticEl = useRef(null);
  const modeRef = useRef('default');
  const rafId = useRef(null);

  useEffect(() => {
    modeRef.current = cursorMode;
  }, [cursorMode]);

  useEffect(() => {
    // Check for touch device or coarse pointer
    const hasTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
                     ('ontouchstart' in window) ||
                     (navigator.maxTouchPoints > 0);
    if (hasTouch) {
      setIsTouchDevice(true);
      return;
    }

    function onMouseMove(e) {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (!target) return;

      // 1. Detect interactive / magnetic elements
      const magneticTarget = target.closest('.btn, .nav-avatar-btn, .magnetic-btn, .filter-chip');
      const closestInteractive = target.closest('button, a, .btn, input, textarea, select, [role="button"], .filter-chip, .nav-link, .nav-brand');

      // 2. Detect project card / explore targets
      const closestExplore = target.closest('[data-cursor="explore"], article, .project-card, .card-cream[onClick], .card-monolith[onClick]');

      // 3. Detect zoom targets
      const closestZoom = target.closest('[data-cursor="zoom"], .zoomable-image');

      if (closestInteractive) {
        if (modeRef.current !== 'hover') setCursorMode('hover');
      } else if (closestExplore) {
        if (modeRef.current !== 'explore') setCursorMode('explore');
      } else if (closestZoom) {
        if (modeRef.current !== 'zoom') setCursorMode('zoom');
      } else {
        if (modeRef.current !== 'default') setCursorMode('default');
      }

      // Magnetic snap physics
      if (magneticTarget) {
        activeMagneticEl.current = magneticTarget;
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Element moves slightly toward cursor (tactile give)
        const deltaX = (e.clientX - centerX) * 0.22;
        const deltaY = (e.clientY - centerY) * 0.22;
        magneticTarget.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;

        // Ring magnetically pulled toward button center
        targetPos.current.x = centerX + (e.clientX - centerX) * 0.35;
        targetPos.current.y = centerY + (e.clientY - centerY) * 0.35;
      } else {
        if (activeMagneticEl.current) {
          activeMagneticEl.current.style.transform = 'translate3d(0, 0, 0)';
          activeMagneticEl.current.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
          const el = activeMagneticEl.current;
          setTimeout(() => {
            if (el) el.style.transition = '';
          }, 350);
          activeMagneticEl.current = null;
        }
        targetPos.current.x = e.clientX;
        targetPos.current.y = e.clientY;
      }
    }

    function onMouseOut(e) {
      if (activeMagneticEl.current) {
        const related = e.relatedTarget;
        if (!related || !activeMagneticEl.current.contains(related)) {
          activeMagneticEl.current.style.transform = 'translate3d(0, 0, 0)';
          activeMagneticEl.current.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
          const el = activeMagneticEl.current;
          setTimeout(() => {
            if (el) el.style.transition = '';
          }, 350);
          activeMagneticEl.current = null;
        }
      }
    }

    function onMouseDown() {
      setIsMouseDown(true);
    }

    function onMouseUp() {
      setIsMouseDown(false);
    }

    function onMouseLeaveDoc() {
      setIsVisible(false);
    }

    function onMouseEnterDoc() {
      setIsVisible(true);
    }

    // High performance render loop via requestAnimationFrame with lerp interpolation
    function renderLoop() {
      // Lerp ring position toward target (0.16 factor for silky lag)
      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * 0.16;

      if (dotRef.current) {
        // Dot follows real mouse immediately
        dotRef.current.style.transform = `translate3d(${mousePos.current.x - 2.5}px, ${mousePos.current.y - 2.5}px, 0)`;
      }

      if (ringRef.current) {
        // Center ring on interpolated coordinates
        const halfWidth = ringRef.current.offsetWidth / 2;
        const halfHeight = ringRef.current.offsetHeight / 2;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - halfWidth}px, ${ringPos.current.y - halfHeight}px, 0)`;
      }

      rafId.current = requestAnimationFrame(renderLoop);
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseout', onMouseOut, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeaveDoc);
    document.addEventListener('mouseenter', onMouseEnterDoc);

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      document.removeEventListener('mouseenter', onMouseEnterDoc);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision Inner Laser Dot */}
      <div
        ref={dotRef}
        className={`cursor-dot ${!isVisible ? 'cursor-hidden' : ''} ${cursorMode === 'explore' ? 'cursor-hidden' : ''}`}
      />

      {/* Lagging Kinetic Glass Ring / Morphing Badge */}
      <div
        ref={ringRef}
        className={`cursor-ring cursor-${cursorMode} ${!isVisible ? 'cursor-hidden' : ''} ${isMouseDown ? 'cursor-down' : ''}`}
      >
        {cursorMode === 'explore' && (
          <span className="cursor-explore-text">
            EXPLORE
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>north_east</span>
          </span>
        )}

        {cursorMode === 'zoom' && (
          <span className="material-symbols-outlined cursor-zoom-icon">
            search
          </span>
        )}
      </div>
    </>
  );
}
