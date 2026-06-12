'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { portfolio } from '@/lib/content';

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

type Item = (typeof portfolio)[number];

function Card({ item, dup = false }: { item: Item; dup?: boolean }) {
  return (
    <article
      aria-hidden={dup || undefined}
      className="group relative aspect-[3/4] w-[68vw] max-w-[320px] shrink-0 overflow-hidden rounded-2xl border border-line shadow-[0_40px_80px_-40px_rgba(0,0,0,0.85)] sm:w-[320px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        style={{ background: item.surface }}
      />
      {/* Satin-Sweep beim Hovern */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-30%] translate-x-[-60%] bg-[linear-gradient(110deg,transparent_44%,rgba(255,255,255,0.16)_50%,transparent_58%)] transition-transform duration-1000 ease-out group-hover:translate-x-[60%]"
      />
      {/* Lesbarkeits-Verlauf */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-flex rounded-full border border-line bg-black/30 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-olive-bright backdrop-blur-sm">
          {item.category}
        </span>
        <h3 className="mt-3 font-playfair text-[1.3rem] leading-tight text-paper">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export function Portfolio() {
  const reduce = useReducedMotion();

  return (
    <section
      id="portfolio"
      aria-label="Portfolio — ausgewählte Arbeiten"
      className="relative overflow-hidden bg-noir py-[clamp(5rem,11vh,9rem)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(90,99,5,0.14),transparent_60%)]"
      />
      <div aria-hidden="true" className="hero-grain absolute inset-0" />

      <div className="relative">
        <div className="wrap">
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="eyebrow"
          >
            Portfolio
          </motion.p>
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="mt-4 max-w-2xl font-playfair text-[clamp(1.9rem,4vw,3rem)] font-medium text-paper"
          >
            Ausgewählte Arbeiten.
          </motion.h2>
        </div>

        {reduce ? (
          // Reduced Motion: statischer, horizontal scrollbarer Streifen
          <div className="mt-10 flex gap-5 overflow-x-auto px-[clamp(1.25rem,5vw,3.5rem)] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {portfolio.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          // Auto-Showreel: läuft endlos, pausiert beim Hovern
          <div className="group mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] sm:mt-12">
            <div
              className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: '52s' }}
            >
              {portfolio.map((item) => (
                <Card key={item.id} item={item} />
              ))}
              {portfolio.map((item) => (
                <Card key={`dup-${item.id}`} item={item} dup />
              ))}
            </div>
          </div>
        )}

        <div className="wrap mt-9">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-olive-bright transition-colors hover:text-olive-soft"
          >
            Dein Projekt anfragen <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
