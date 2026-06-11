import { site } from '@/lib/site';

export function Hero() {
  return (
    <section
      aria-label="Einleitung"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/*
        Hero-Hintergrund: Satin-Licht-Sweep (CSS), simuliert eine
        Satin-Lack-Oberfläche. Der Container ist so gebaut, dass später
        ein <video> 1:1 hineinpasst (object-fit: cover, gleicher Slot).
        TODO: Hero-Video von Ivan einsetzen.
      */}
      <div className="satin-base absolute inset-0">
        <div className="satin-sweep animate-satin-sweep" />
        {/* Vignette für Tiefe + Lesbarkeit */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
        {/*
          TODO: Hero-Video von Ivan einsetzen. Slot:
          <video autoPlay muted loop playsInline className="h-full w-full object-cover" />
        */}
      </div>

      <div className="container-content relative py-32">
        <div className="max-w-3xl">
          <p
            className="eyebrow animate-fade-up opacity-0"
            style={{ animationDelay: '0.15s' }}
          >
            {site.tagline.split(' ').slice(0, 2).join(' ')} · Münster
          </p>

          <h1
            className="mt-6 animate-fade-up text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.04] tracking-tight text-paper opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            Vollendung in
            <br />
            <span className="text-gold">jedem Detail.</span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-fade-up text-[1.0625rem] leading-relaxed text-paper-dim opacity-0"
            style={{ animationDelay: '0.45s' }}
          >
            Premium-Folierung für anspruchsvolle Fahrzeuge — präzise
            verarbeitet, werterhaltend, rückstandslos entfernbar.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-eyebrow text-noir transition-colors hover:bg-gold-soft"
            >
              Beratung anfragen
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-8 py-3.5 text-sm uppercase tracking-eyebrow text-paper transition-colors hover:border-gold hover:text-gold"
            >
              Portfolio ansehen <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p
            className="mt-12 flex animate-fade-up items-center gap-2 text-sm text-paper-dim opacity-0"
            style={{ animationDelay: '0.75s' }}
          >
            <span aria-hidden="true" className="text-gold">
              ★
            </span>
            <span>5,0 Google · Münster</span>
          </p>
        </div>
      </div>
    </section>
  );
}
