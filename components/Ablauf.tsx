import { SectionHeader } from './SectionHeader';

const steps = [
  {
    no: '01',
    title: 'Anfrage & Wunsch',
    desc: 'Du schilderst dein Vorhaben über das Formular — gern mit Fotos deines Fahrzeugs.',
  },
  {
    no: '02',
    title: 'Beratung & Angebot',
    desc: 'Wir besprechen Material, Finish und Preis und finden die passende Lösung.',
  },
  {
    no: '03',
    title: 'Termin & Folierung',
    desc: 'Saubere, fachgerechte Verarbeitung auf Studio-Niveau zum vereinbarten Termin.',
  },
  {
    no: '04',
    title: 'Abnahme & Pflege',
    desc: 'Gemeinsame Abnahme und konkrete Pflegehinweise für ein langes Folien-Leben.',
  },
  {
    no: '05',
    title: 'Papiere & Versicherung',
    desc: 'Bei Farbwechsel: Hinweis zur Aktualisierung von Fahrzeugpapieren & Versicherung.',
  },
];

export function Ablauf() {
  return (
    <section id="ablauf" className="container-content section-gap">
      <SectionHeader
        eyebrow="Ablauf"
        title="Von der Idee zur Folierung"
        intro="Ein klarer, transparenter Weg — Schritt für Schritt."
      />

      <ol className="reveal mt-12 grid gap-px md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <li
            key={s.no}
            className="flex flex-col border-t border-line pt-6 lg:pr-5"
          >
            <span className="font-display text-3xl text-gold">{s.no}</span>
            <h3 className="mt-4 font-display text-lg tracking-wide text-paper">
              {s.title}
            </h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-paper-dim">
              {s.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
