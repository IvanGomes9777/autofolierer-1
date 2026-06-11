import { SectionHeader } from './SectionHeader';

const trustPoints = [
  'Premium-Folien (3M, Avery Dennison, KPMF, Hexis)',
  'Saubere, fachgerechte Verarbeitung',
  'Werterhalt — Originallack bleibt geschützt',
  'Rückstandslos entfernbar',
  'Faire Preise, persönliche Beratung',
];

export function Studio() {
  return (
    <section id="studio" className="bg-anthracite">
      <div className="container-content section-gap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow="Studio" title="GV Werbetechnik" />
          <div className="reveal mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-paper-dim">
            <p>
              Wir veredeln Fahrzeuge mit Sorgfalt und Präzision — von dezentem
              Satin-Schwarz bis zur kompletten Designfolierung. Bei GV
              Werbetechnik bekommst du Folierung auf Studio-Niveau, ausgeführt
              mit Premium-Materialien und einem Auge fürs Detail.
            </p>
            <p>
              Dein Originallack bleibt dabei geschützt und die Folierung
              jederzeit rückstandslos entfernbar — Werterhalt inklusive.
            </p>
          </div>
        </div>

        <ul className="reveal flex flex-col justify-center gap-px self-center">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-4 border-b border-line py-4 text-paper"
            >
              <span
                aria-hidden="true"
                className="mt-1 text-gold"
                role="presentation"
              >
                ✓
              </span>
              <span className="text-[0.98rem] leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
