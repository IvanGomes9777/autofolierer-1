import Link from 'next/link';

/**
 * GV-Monogramm als Logo-Fallback (Gold, Playfair Display).
 * Mit Gold-Unterstreichung, die sich beim Laden zeichnet (Signature-Element).
 * TODO: Durch echtes GV-Logo ersetzen, falls vorhanden.
 */
export function Monogram({
  underline = false,
  className = '',
}: {
  underline?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="GV Werbetechnik — Startseite"
      className={`group inline-flex items-baseline gap-[0.15em] ${className}`}
    >
      <span
        className={`font-display text-2xl leading-none tracking-[0.12em] text-gold transition-colors group-hover:text-gold-soft ${
          underline ? 'monogram-underline' : ''
        }`}
      >
        GV
      </span>
      <span className="hidden font-body text-[0.62rem] uppercase tracking-[0.28em] text-paper-dim sm:inline">
        Werbetechnik
      </span>
    </Link>
  );
}
