import { site } from '@/lib/site';

/**
 * HERO — Layout A (Lower-Third), cinematic, video-forward.
 * Das Hero-Video läuft als Vollbild-Hintergrund und bleibt klar sichtbar;
 * Text sitzt im unteren Drittel mit lokalem Scrim für Lesbarkeit.
 *
 * TODO: Hero-Video von Ivan einsetzen. Der <video>-Slot ist vorbereitet
 * (object-fit: cover, gleiche Fläche). Solange zeigt die Studio-Szene (CSS)
 * als Platzhalter/Poster.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Einleitung"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* ---- Video-Slot + Studio-Szene-Platzhalter ---- */}
      <div className="absolute inset-0">
        {/*
          TODO: Hero-Video einsetzen:
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay muted loop playsInline
            poster="/hero-poster.jpg"
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        */}
        <div className="hero-scene" aria-hidden="true">
          <div className="hero-spot" />
          <div className="hero-haze" />
          <div className="hero-car">
            <div className="hero-cabin" />
            <div className="hero-glass" />
            <div className="hero-body" />
            <div className="hero-wheel" style={{ left: '12%' }} />
            <div className="hero-wheel" style={{ right: '12%' }} />
            <div className="hero-rim" />
          </div>
          <div className="hero-floor" />
          <div className="hero-grain" />
        </div>
      </div>

      {/* Lokale Scrims: oben für die Navbar, unten für den Text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/80 via-black/45 to-transparent"
      />

      {/* Video-Hinweis (entfällt, sobald das Video läuft) */}
      <span className="absolute left-1/2 top-[6.5rem] z-10 -translate-x-1/2 rounded-full border border-[var(--line)] bg-black/30 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-paper-dim sm:left-[var(--wrap-pad,3.5rem)] sm:translate-x-0">
        {/* TODO: Hero-Video von Ivan */}
        ▶ Hero-Video folgt
      </span>

      {/* ---- Lower-Third Content ---- */}
      <div className="wrap relative z-10 pb-16 sm:pb-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow fade-up" style={{ animationDelay: '0.15s' }}>
              {site.tagline}
            </p>
            <h1
              className="fade-up mt-5 font-playfair text-[clamp(2.6rem,6.2vw,5rem)] font-medium leading-[1.02] text-paper"
              style={{ animationDelay: '0.3s' }}
            >
              Vollendung in jedem Detail.
            </h1>
            <p
              className="fade-up mt-5 max-w-xl text-[1.0625rem] font-light leading-relaxed text-[var(--paper-dim)]"
              style={{ animationDelay: '0.45s' }}
            >
              Premium-Folierung für anspruchsvolle Fahrzeuge — präzise
              verarbeitet, werterhaltend, rückstandslos entfernbar.
            </p>
            <div
              className="fade-up mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-[var(--olive)] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#f2f0e6] transition-colors hover:bg-[#6c771b]"
              >
                Beratung anfragen
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:border-[var(--olive-bright)] hover:text-[var(--olive-bright)]"
              >
                Portfolio ansehen <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <p
            className="fade-up shrink-0 text-sm text-[var(--paper-dim)] sm:text-right"
            style={{ animationDelay: '0.75s' }}
          >
            <span className="block font-playfair text-3xl text-[var(--olive-bright)]">
              5,0 ★
            </span>
            Google · Münster
          </p>
        </div>
      </div>
    </section>
  );
}
