'use client';

import { useState } from 'react';
import { SectionHeader } from './SectionHeader';

const finishes = [
  {
    id: 'matt',
    label: 'Matt',
    icon: '🖤',
    desc: 'Understated und edel. Eine matte Oberfläche nimmt Reflexionen das Glänzende und lässt Linien und Formen des Fahrzeugs in den Vordergrund treten.',
  },
  {
    id: 'satin',
    label: 'Satin',
    icon: '✨',
    desc: 'Seidiger, tiefer Glanz zwischen Matt und Hochglanz. Satin wirkt warm und hochwertig — der zurückhaltende Auftritt mit Charakter.',
  },
  {
    id: 'metall',
    label: 'Gebürstetes Metall / Satin-Chrome',
    icon: '🪞',
    desc: 'Premium und auffällig. Die metallische Struktur fängt das Licht in feinen Linien — ein Finish, das bewusst Blicke zieht.',
  },
  {
    id: 'colorshift',
    label: 'Color-Shift',
    icon: '🌈',
    desc: 'Farbwechsel je nach Lichtwinkel. Aus jeder Perspektive ein anderer Ton — lebendig, individuell und unverwechselbar.',
  },
  {
    id: 'carbon',
    label: 'Carbon-Optik',
    icon: '🏁',
    desc: 'Sportliche Akzente in feiner Carbon-Struktur. Ideal für Dach, Spiegel oder Details, die Dynamik betonen sollen.',
  },
  {
    id: 'custom',
    label: 'Custom-Design',
    icon: '🎨',
    desc: 'Individuell und alles möglich. Vom Teildesign bis zur durchkomponierten Gestaltung — gemeinsam entwickeln wir dein Unikat.',
  },
];

export function Finishes() {
  const [active, setActive] = useState(finishes[0].id);
  const current = finishes.find((f) => f.id === active) ?? finishes[0];

  return (
    <section id="finishes" className="container-content section-gap">
      <SectionHeader
        eyebrow="Finishes"
        title="Wähle dein Finish"
        intro="Jede Oberfläche erzählt eine andere Geschichte. Tippe oder fahre über ein Finish, um mehr zu erfahren."
      />

      <div className="reveal mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <ul
          className="flex flex-col"
          role="tablist"
          aria-label="Verfügbare Finishes"
        >
          {finishes.map((f) => {
            const isActive = f.id === active;
            return (
              <li key={f.id}>
                <button
                  type="button"
                  role="tab"
                  id={`tab-${f.id}`}
                  aria-selected={isActive}
                  aria-controls="finish-panel"
                  onMouseEnter={() => setActive(f.id)}
                  onFocus={() => setActive(f.id)}
                  onClick={() => setActive(f.id)}
                  className={`group flex w-full items-center gap-4 border-b border-line py-4 text-left transition-colors ${
                    isActive ? 'text-gold' : 'text-paper-dim hover:text-paper'
                  }`}
                >
                  <span aria-hidden="true" className="text-lg">
                    {f.icon}
                  </span>
                  <span className="font-display text-lg tracking-wide">
                    {f.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto h-px flex-1 max-w-[3rem] bg-gold transition-transform duration-500 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    } origin-right`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div
          id="finish-panel"
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="flex flex-col justify-center rounded-sm border border-line bg-anthracite p-8 sm:p-12"
        >
          <span aria-hidden="true" className="text-4xl">
            {current.icon}
          </span>
          <h3 className="mt-6 font-display text-[clamp(1.6rem,3vw,2.4rem)] text-paper">
            {current.label}
          </h3>
          <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-paper-dim">
            {current.desc}
          </p>
          <a
            href="#kontakt"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm uppercase tracking-eyebrow text-gold transition-colors hover:text-gold-soft"
          >
            Dieses Finish anfragen <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
