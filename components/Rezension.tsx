import { reviews, site } from '@/lib/site';

export function Rezension() {
  const review = reviews[0];

  return (
    <section
      aria-label="Kundenbewertung"
      className="bg-anthracite"
    >
      <div className="container-content section-gap">
        <figure className="reveal mx-auto max-w-3xl text-center">
          <div
            className="flex items-center justify-center gap-1 text-gold"
            aria-hidden="true"
          >
            {'★★★★★'}
          </div>
          <p className="sr-only">
            {review.rating} von 5 Sternen, {site.rating.source}
          </p>
          <p className="mt-2 text-sm uppercase tracking-eyebrow text-paper-dim">
            5,0 · {site.rating.source}
          </p>

          <blockquote className="mt-8">
            <p className="font-display text-[clamp(1.5rem,3.2vw,2.4rem)] leading-snug text-paper">
              „{review.text}“
            </p>
          </blockquote>
          <figcaption className="mt-8 text-sm uppercase tracking-eyebrow text-gold">
            — {review.author}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
