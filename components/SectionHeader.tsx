/** Wiederkehrender Section-Kopf: Eyebrow + Titel im Editorial-Stil. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
}) {
  return (
    <header
      className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-paper">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-paper-dim">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
