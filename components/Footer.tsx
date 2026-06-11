'use client';

import { Monogram } from './Monogram';
import { site } from '@/lib/site';

const partners = ['3M', 'Avery Dennison', 'KPMF', 'Hexis'];

export function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <footer className="border-t border-line bg-noir">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Monogram />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-dim">
              Premium-Fahrzeugfolierung in Münster — präzise verarbeitet,
              werterhaltend, rückstandslos entfernbar.
            </p>
          </div>

          <div>
            <p className="eyebrow">Material-Partner</p>
            <ul className="mt-4 space-y-2 text-sm text-paper-dim">
              {partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Rechtliches</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="/impressum"
                  className="text-paper-dim transition-colors hover:text-gold"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-paper-dim transition-colors hover:text-gold"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="/agb"
                  className="text-paper-dim transition-colors hover:text-gold"
                >
                  AGB
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-paper-dim transition-colors hover:text-gold"
                >
                  Cookie-Einstellungen
                </button>
              </li>
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-dim transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 text-xs text-paper-dim sm:flex-row sm:items-center">
          <p>© 2026 {site.name} · Münster</p>
          <p>{site.openingHours}</p>
        </div>
      </div>
    </footer>
  );
}
