'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis Smooth-Scroll — die Basis für den „butterweichen" Premium-Look.
 * Respektiert prefers-reduced-motion (dann nativer Scroll, kein Lerp).
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Anker-Links (#…) sanft ansteuern
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        // Sektionen stecken in <CoverPin> (sticky + Runway). Die innere
        // <section> liegt damit MITTEN in der gepinnten Übergangsphase — würde
        // man sie direkt ansteuern, landet man „auf dem Übergang". Stattdessen
        // den CoverPin-Container ansteuern: dessen Anfang ist genau die Position,
        // an der die Sektion fertig gepinnt und voll sichtbar ist.
        const pin = (el as HTMLElement).closest<HTMLElement>('[data-coverpin]');
        lenis.scrollTo(pin ?? (el as HTMLElement), { offset: -10 });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
