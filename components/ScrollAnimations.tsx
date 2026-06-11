'use client';

import { useEffect } from 'react';

/**
 * Aktiviert die Signature-Animationen via IntersectionObserver:
 * - .gold-line  → zeichnet sich von 0 → 100 % Breite (scaleX)
 * - .reveal     → sanftes Fade-Up beim Eintreten in den Viewport
 *
 * Respektiert prefers-reduced-motion (CSS schaltet Bewegung ab; hier
 * setzen wir die Endzustände trotzdem, damit nichts unsichtbar bleibt).
 */
export function ScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.gold-line, .reveal',
    );

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => {
        el.classList.add('is-drawn', 'is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('is-drawn', 'is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
