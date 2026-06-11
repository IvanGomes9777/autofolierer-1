import { SectionHeader } from './SectionHeader';

const services = [
  {
    icon: '🚗',
    title: 'Vollfolierung / Farbwechsel',
    desc: 'Komplette Designfolierung — neue Farbe, neuer Charakter, voller Werterhalt.',
    note: 'Hinweis: Farbänderung in Fahrzeugpapieren & Versicherung melden.',
  },
  {
    icon: '🎯',
    title: 'Teilfolierung & Akzente',
    desc: 'Dach, Spiegel, Motorhaube — gezielte Akzente, die das Gesamtbild schärfen.',
  },
  {
    icon: '🛡️',
    title: 'Lackschutzfolie (PPF)',
    desc: 'Unsichtbarer Steinschlagschutz, der den Originallack dauerhaft bewahrt.',
  },
  {
    icon: '✂️',
    title: 'Chrome-Delete',
    desc: 'Zierleisten in Schwarz oder Satin — ein cleaner, durchdachter Look.',
  },
  {
    icon: '🌑',
    title: 'Scheibentönung',
    desc: 'Nur hintere Seitenscheiben & Heckscheibe mit zugelassenen ABE-Folien.',
    note: 'Front- & vordere Seitenscheiben sind gesetzlich ausgeschlossen.',
  },
  {
    icon: '📣',
    title: 'Werbebeschriftung & Flotten',
    desc: 'Gewerbliche Fahrzeugwerbung — vom Einzelfahrzeug bis zur ganzen Flotte.',
  },
];

export function Leistungen() {
  return (
    <section id="leistungen" className="bg-anthracite">
      <div className="container-content section-gap">
        <SectionHeader
          eyebrow="Leistungen"
          title="Was wir für dich machen"
          intro="Privat oder gewerblich — von der dezenten Veredelung bis zur kompletten Flottenbeschriftung."
        />

        <ul className="reveal mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="group relative flex flex-col border border-line bg-noir p-8 transition-colors hover:bg-[#0d0c0a]"
            >
              <span aria-hidden="true" className="text-3xl">
                {s.icon}
              </span>
              <h3 className="mt-6 font-display text-xl tracking-wide text-paper">
                {s.title}
                {/* Gold-Linie zeichnet sich beim Hover unter den Titel */}
                <span
                  aria-hidden="true"
                  className="mt-2 block h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100"
                />
              </h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-paper-dim">
                {s.desc}
              </p>
              {s.note ? (
                <p className="mt-4 text-[0.8rem] leading-relaxed text-paper-dim/80">
                  <span className="text-gold">⚠</span> {s.note}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="reveal mt-10 text-center text-[0.95rem] text-paper-dim">
          Endpreis nach kostenloser Begutachtung — abhängig von Fahrzeug &
          Aufwand.
        </p>
      </div>
    </section>
  );
}
