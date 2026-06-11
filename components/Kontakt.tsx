import { SectionHeader } from './SectionHeader';
import { ContactForm } from './ContactForm';
import { MapEmbed } from './MapEmbed';
import { ServiceDisclaimer } from './ServiceDisclaimer';
import { site } from '@/lib/site';

export function Kontakt() {
  return (
    <section id="kontakt" className="container-content section-gap">
      <SectionHeader
        eyebrow="Kontakt"
        title="Beratung anfragen"
        intro="Erzähl uns von deinem Fahrzeug — wir melden uns für eine kostenlose Begutachtung."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="reveal">
          <ContactForm />
        </div>

        <div className="reveal flex flex-col gap-8">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Adresse</dt>
              <dd className="mt-2 text-paper">
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Telefon</dt>
              <dd className="mt-2">
                <a
                  href={site.phoneHref}
                  className="text-paper transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">E-Mail</dt>
              <dd className="mt-2">
                {/* BEISPIEL – ersetzen: E-Mail bestätigen */}
                <a
                  href={`mailto:${site.email}`}
                  className="text-paper transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Instagram</dt>
              <dd className="mt-2">
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper transition-colors hover:text-gold"
                >
                  {site.instagram.handle}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">Öffnungszeiten</dt>
              <dd className="mt-2 text-paper">{site.openingHours}</dd>
            </div>
          </dl>

          <MapEmbed />
          <ServiceDisclaimer />
        </div>
      </div>
    </section>
  );
}
