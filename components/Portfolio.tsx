'use client';

import { useEffect, useState } from 'react';
import { SectionHeader } from './SectionHeader';

/*
  BEISPIELFOTO – durch echte GV-Aufnahmen ersetzen.
  Platzhalter sind rechtssichere CSS-Kompositionen im Verhältnis 16:10.
  TODO: Echte Studio-Fotos einsetzen (next/image, WebP/AVIF, sizes).
  TODO: Kennzeichen auf echten Fotos unkenntlich machen (DSGVO).
  Hinweis: Reine Beispiel-/Referenzbilder dürfen nicht ohne Nutzungsrecht
  live gehen — werden durch GV-eigene Fotos ersetzt.
*/

type Filter = 'Alle' | 'Matt' | 'Satin' | 'Color-Shift' | 'Custom';

type Work = {
  id: number;
  finish: Exclude<Filter, 'Alle'>;
  material: string;
  vehicle: string;
  gradient: string;
};

const works: Work[] = [
  {
    id: 1,
    finish: 'Matt',
    material: 'Satin-Schwarz Vollfolierung',
    vehicle: 'Sportlimousine',
    gradient: 'linear-gradient(135deg, #1c1c1c 0%, #0a0a0a 60%, #202020 100%)',
  },
  {
    id: 2,
    finish: 'Satin',
    material: 'Satin-Tiefgrau',
    vehicle: 'SUV',
    gradient: 'linear-gradient(135deg, #34302a 0%, #14120f 65%, #3a352d 100%)',
  },
  {
    id: 3,
    finish: 'Color-Shift',
    material: 'Color-Shift Purple/Gold',
    vehicle: 'Coupé',
    gradient: 'linear-gradient(135deg, #2a1f3d 0%, #141018 50%, #3d2e1a 100%)',
  },
  {
    id: 4,
    finish: 'Custom',
    material: 'Custom-Designfolierung',
    vehicle: 'Kompaktwagen',
    gradient: 'linear-gradient(135deg, #1a2733 0%, #0a0f14 60%, #2e2417 100%)',
  },
  {
    id: 5,
    finish: 'Matt',
    material: 'Mattgrau + Chrome-Delete',
    vehicle: 'Kombi',
    gradient: 'linear-gradient(135deg, #232323 0%, #0c0c0c 60%, #1a1a1a 100%)',
  },
  {
    id: 6,
    finish: 'Satin',
    material: 'Satin-Champagner',
    vehicle: 'Roadster',
    gradient: 'linear-gradient(135deg, #3a3024 0%, #16120c 60%, #4a3c28 100%)',
  },
];

const filters: Filter[] = ['Alle', 'Matt', 'Satin', 'Color-Shift', 'Custom'];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('Alle');
  const [lightbox, setLightbox] = useState<Work | null>(null);

  const visible =
    filter === 'Alle' ? works : works.filter((w) => w.finish === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="portfolio" className="container-content section-gap">
      <SectionHeader
        eyebrow="Portfolio"
        title="Ausgewählte Arbeiten"
        intro="Ein ruhiger Auszug aus unserem Studio. Beispiel-Darstellungen — echte GV-Aufnahmen folgen."
      />

      <div className="reveal mt-8 flex flex-wrap gap-2" role="group" aria-label="Portfolio filtern">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 text-sm tracking-wide transition-colors ${
              filter === f
                ? 'border-gold bg-gold text-noir'
                : 'border-line text-paper-dim hover:border-gold hover:text-paper'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="reveal mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((w) => (
          <li key={w.id}>
            <button
              type="button"
              onClick={() => setLightbox(w)}
              className="group block w-full overflow-hidden rounded-sm border border-line text-left"
              aria-label={`${w.material}, ${w.vehicle} — vergrößern`}
            >
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{ background: w.gradient }}
              >
                {/* Satin-Reflex über dem Platzhalter */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(229,228,226,0.10)_50%,transparent_60%)] transition-transform duration-700 group-hover:translate-x-4" />
                <span className="absolute left-3 top-3 rounded-sm bg-noir/60 px-2 py-1 text-[0.65rem] uppercase tracking-eyebrow text-paper-dim">
                  Beispiel
                </span>
                <span className="absolute bottom-3 left-3 font-display text-sm text-paper">
                  {w.finish}
                </span>
              </div>
            </button>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <p className="text-sm text-paper">{w.material}</p>
              <p className="text-xs text-paper-dim">{w.vehicle}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-noir/90 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.material}, ${lightbox.vehicle}`}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-sm uppercase tracking-eyebrow text-paper-dim transition-colors hover:text-gold"
            >
              Schließen ✕
            </button>
            <div
              className="aspect-[16/10] w-full rounded-sm border border-line"
              style={{ background: lightbox.gradient }}
            />
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">{lightbox.finish}</p>
                <p className="mt-2 font-display text-xl text-paper">
                  {lightbox.material}
                </p>
                <p className="text-sm text-paper-dim">{lightbox.vehicle}</p>
              </div>
              <a
                href="#kontakt"
                onClick={() => setLightbox(null)}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm uppercase tracking-eyebrow text-gold transition-colors hover:bg-gold hover:text-noir"
              >
                Ähnliche Folierung anfragen
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
