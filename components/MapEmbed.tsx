'use client';

import { useEffect, useState } from 'react';
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
  DEFAULT_CONSENT,
  type Consent,
} from '@/lib/consent';
import { site } from '@/lib/site';

/** Consent-gated Google-Maps-Einbettung (Privacy by default). */
export function MapEmbed() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(readConsent()?.maps ?? false);
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<Consent>).detail;
      setAllowed(detail?.maps ?? false);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  const enableMaps = () => {
    const current = readConsent() ?? DEFAULT_CONSENT;
    writeConsent({ ...current, maps: true });
  };

  const query = encodeURIComponent(
    `${site.address.street}, ${site.address.zip} ${site.address.city}`,
  );

  if (!allowed) {
    return (
      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-sm border border-line bg-anthracite p-8 text-center">
        <p className="text-sm leading-relaxed text-paper-dim">
          Google Maps wird erst nach deiner Zustimmung geladen. Dabei werden
          Daten an Google übertragen.
        </p>
        <button
          type="button"
          onClick={enableMaps}
          className="rounded-full border border-gold px-5 py-2.5 text-sm uppercase tracking-eyebrow text-gold transition-colors hover:bg-gold hover:text-noir"
        >
          Karte laden
        </button>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-paper-dim underline"
        >
          Stattdessen in Google Maps öffnen
        </a>
      </div>
    );
  }

  return (
    <iframe
      title={`Standort ${site.name} auf Google Maps`}
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="aspect-[16/10] w-full rounded-sm border border-line"
    />
  );
}
