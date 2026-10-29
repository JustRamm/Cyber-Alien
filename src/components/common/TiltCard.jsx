import React, { useRef, useEffect } from 'react';

/**
 * TiltCard — Subtle 3D Card Tilt & Dynamic Specular Sheen (Apple / Linear Physics)
 *
 * Features:
 * - Subtly tilts along X and Y axes: perspective(1000px) rotateX(...) rotateY(...)
 * - Radial specular highlight follows cursor coordinates across the surface
 * - 120fps direct DOM transforms via requestAnimationFrame (no React state re-renders)
 * - Calibrated return spring on mouse leave
 * - Respects prefers-reduced-motion and touch devices
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
  maxTilt = 5, // degrees (subtle, calibrated)
  perspective = 1000,
  scale = 1.012,
  glare = true,
  isDark = null,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const sheenRef = useRef(null);
  const rafId = useRef(null);
  const mouseCoords = useRef({ x: 0, y: 0, active: false });

  // Auto-detect dark mode if not explicitly passed
  const isDarkCard = isDark !== null
    ? isDark
    : (className.includes('monolith') || className.includes('dark'));

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Check if touch or reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (prefersReducedMotion || isTouch) return;

    function handleMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseCoords.current = {
        x,
        y,
        width: rect.width,
        height: rect.height,
        active: true
      };

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateTilt);
      }
    }

    function updateTilt() {
      rafId.current = null;
      if (!card || !mouseCoords.current.active) return;

      const { x, y, width, height } = mouseCoords.current;
      const xPct = (x / width - 0.5) * 2;
      const yPct = (y / height - 0.5) * 2;

      // Subtle tilt angles (Apple/Linear feel: tilts toward pointer)
      const rotX = (-yPct * maxTilt).toFixed(2);
      const rotY = (xPct * maxTilt).toFixed(2);

      card.style.transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, 1)`;
      card.style.transition = 'transform 0.08s ease-out';

      if (glare && sheenRef.current) {
        sheenRef.current.style.opacity = '1';
        sheenRef.current.style.transition = 'opacity 0.15s ease';
        sheenRef.current.style.background = isDarkCard
          ? `radial-gradient(circle 380px at ${x}px ${y}px, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 80%)`
          : `radial-gradient(circle 320px at ${x}px ${y}px, rgba(255, 255, 255, 0.55) 0%, rgba(244, 63, 94, 0.06) 40%, transparent 75%)`;
      }
    }

    function handleMouseEnter() {
      if (card) {
        card.style.transition = 'transform 0.08s ease-out';
      }
    }

    function handleMouseLeave() {
      mouseCoords.current.active = false;
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }

      if (card) {
        card.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }

      if (glare && sheenRef.current) {
        sheenRef.current.style.transition = 'opacity 0.4s ease';
        sheenRef.current.style.opacity = '0';
      }
    }

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [maxTilt, perspective, scale, glare, isDarkCard]);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onClick={onClick}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style
      }}
      {...props}
    >
      {/* Dynamic Specular Sheen Highlight */}
      {glare && (
        <div
          ref={sheenRef}
          className="tilt-sheen-overlay"
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  );
}

