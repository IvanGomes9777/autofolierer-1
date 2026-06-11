import type { Metadata } from 'next';
import { Playfair_Display, Jost } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { site } from '@/lib/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Fahrzeugfolierung Münster | GV Werbetechnik',
    template: '%s | GV Werbetechnik',
  },
  description:
    'Premium-Fahrzeugfolierung in Münster. Vollfolierung, Lackschutzfolie (PPF), Chrome-Delete & Werbebeschriftung — präzise verarbeitet, werterhaltend, rückstandslos entfernbar.',
  keywords: [
    'Fahrzeugfolierung Münster',
    'Auto folieren Münster',
    'Vollfolierung',
    'Lackschutzfolie PPF Münster',
    'Carwrapping Münster',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: site.url,
    siteName: site.name,
    title: 'Fahrzeugfolierung Münster | GV Werbetechnik',
    description:
      'Premium-Folierung für anspruchsvolle Fahrzeuge — präzise verarbeitet, werterhaltend, rückstandslos entfernbar.',
    // TODO: OG-Image ergänzen (Platzhalter)
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoBodyShop',
    name: site.name,
    image: `${site.url}/og-image.jpg`,
    '@id': site.url,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    sameAs: [site.instagram.url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-noir"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
