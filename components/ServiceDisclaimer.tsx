/**
 * Folierer-spezifische Pflichthinweise, im Content kommuniziert.
 * (Farbwechsel, Scheibentönung, Custom-Designs)
 */
const notes = [
  {
    title: 'Farbwechsel-Folierung',
    text: 'Eine geänderte Fahrzeugfarbe muss in den Fahrzeugpapieren und bei der Versicherung aktualisiert werden. Wir weisen dich darauf hin.',
  },
  {
    title: 'Scheibentönung',
    text: 'Nur ABE-/bauartgenehmigte Folien. Front- und vordere Seitenscheiben dürfen nicht getönt werden — nur hintere Seitenscheiben & Heckscheibe. ABE/Gutachten erhältst du von uns.',
  },
  {
    title: 'Custom-Designs',
    text: 'Wir folieren keine fremden Marken- oder urheberrechtlich geschützten Motive ohne entsprechende Lizenz.',
  },
];

export function ServiceDisclaimer() {
  return (
    <aside
      aria-label="Wichtige Hinweise"
      className="reveal rounded-sm border border-line bg-anthracite p-6 sm:p-8"
    >
      <p className="eyebrow">Gut zu wissen</p>
      <ul className="mt-5 space-y-5">
        {notes.map((n) => (
          <li key={n.title} className="border-l border-gold/40 pl-4">
            <p className="font-display text-base text-paper">{n.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
              {n.text}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
