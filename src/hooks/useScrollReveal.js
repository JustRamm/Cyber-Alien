import { useEffect } from 'react';

/**
 * useScrollReveal — Lightweight IntersectionObserver Orchestration
 *
 * Orchestrates film-like mask reveals on headlines and staggered transitions
 * on bento cards without layout shifts or third-party animation libraries.
 *
 * @param {string} triggerKey - Re-runs observation when route or active filter changes
 */
export default function useScrollReveal(triggerKey) {
  useEffect(() => {
    // If reduced motion is preferred, immediately reveal all elements without transitions
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(
        '.reveal-headline, .reveal-card, .reveal-fade, .reveal-stagger, [data-reveal]'
      ).forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    // Delay slightly to ensure component has rendered to DOM
    const rafId = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.08
        }
      );

      const targets = document.querySelectorAll(
        '.reveal-headline, .reveal-card, .reveal-fade, .reveal-stagger, [data-reveal]'
      );

      const viewportHeight = window.innerHeight;

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Immediately reveal elements already inside or above the initial viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [triggerKey]);
}
