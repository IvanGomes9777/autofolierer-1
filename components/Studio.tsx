'use client';

import { motion, type Variants } from 'framer-motion';
import { TiltCard } from './motion/TiltCard';
import { materialPartners } from '@/lib/content';

/** Folien-Swatches (Finish-Teaser). Echte Finish-Farben für den Color-Pop. */
const swatches = [
  {
    name: 'Matt',
    bg: 'linear-gradient(150deg,#232323,#0d0d0d)',
    fan: 'left-[1%] top-[22%] rotate-[-9deg] z-[2]',
  },
  {
    name: 'Satin',
    bg: 'linear-gradient(150deg,#454952,#1c1e23)',
    fan: 'left-[24%] top-[5%] rotate-[-2deg] z-[3]',
  },
  {
    name: 'Color-Shift',
    bg: 'linear-gradient(150deg,#00c2cc,#7a5cff 45%,#ff3fa0 80%)',
    fan: 'left-[48%] top-[15%] rotate-[6deg] z-[4]',
  },
  {
    name: 'Satin-Chrome',
    bg: 'repeating-linear-gradient(125deg,#9a9d9f 0 2px,#cdd0d2 2px 4px,#7f8284 4px 7px)',
    fan: 'left-[39%] top-[44%] rotate-[12deg] z-[5]',
  },
];

const trust = [
  'Premium-Folien',
  'Fachgerechte Verarbeitung',
  'Werterhalt',
  'Rückstandslos entfernbar',
];

const stageVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};
const textVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const lineVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Swatch({ name, bg }: { name: string; bg: string }) {
  return (
    <TiltCard
      max={12}
      className="h-full w-full overflow-hidden rounded-2xl shadow-[0_40px_70px_-24px_rgba(0,0,0,0.8),inset_0_2px_0_rgba(188,200,87,0.45)]"
    >
      <div className="absolute inset-0" style={{ background: bg }} />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.18)_50%,transparent_60%)]"
      />
      <span className="absolute bottom-3.5 left-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
        {name}
      </span>
    </TiltCard>
  );
}

export function Studio() {
  return (
    <section
      id="studio"
      aria-label="Studio — über GV Werbetechnik"
      className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_78%_20%,#1b1d18,#0b0c0e_62%)]"
    >
      <div className="wrap grid items-center gap-12 py-[clamp(5rem,11vh,9rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        {/* ---- Text ---- */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={lineVariants} className="eyebrow">
            Studio · Münster
          </motion.p>
          <motion.h2
            variants={lineVariants}
            className="mt-5 font-playfair text-[clamp(2.2rem,4.5vw,3.25rem)] font-medium leading-[1.06] text-paper"
          >
            Jede Oberfläche
            <br />
            ein <em className="text-olive-bright">Unikat.</em>
          </motion.h2>
          <motion.p
            variants={lineVariants}
            className="mt-6 max-w-md text-[1.0625rem] font-light leading-relaxed text-paper-dim"
          >
            Von dezentem Satin-Schwarz bis zum schillernden Color-Shift — wir
            veredeln dein Fahrzeug mit Premium-Folien und einem Auge fürs Detail.
            Originallack geschützt, jederzeit rückstandslos entfernbar.
          </motion.p>
          <motion.ul variants={lineVariants} className="mt-7 flex flex-wrap gap-2.5">
            {trust.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-[0.85rem] text-paper"
              >
                <span aria-hidden="true" className="text-olive-bright">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---- Swatch-Stage ---- */}
        <motion.div
          variants={stageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Desktop: gefächert */}
          <div className="relative hidden h-[clamp(24rem,34vw,32rem)] lg:block">
            {swatches.map((s) => (
              <motion.div
                key={s.name}
                variants={cardVariants}
                className={`absolute aspect-[3/4] w-[clamp(11rem,15vw,13.25rem)] ${s.fan}`}
              >
                <Swatch name={s.name} bg={s.bg} />
              </motion.div>
            ))}
            {/* 5,0-Badge */}
            <motion.div
              variants={cardVariants}
              className="absolute right-2 top-0 z-[9] flex h-24 w-24 flex-col items-center justify-center rounded-full border border-line bg-[#0c0d10] shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
            >
              <span className="font-playfair text-2xl text-olive-bright">5,0★</span>
              <span className="mt-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-paper-dim">
                Google
              </span>
            </motion.div>
          </div>

          {/* Mobile/Tablet: 2×2-Grid */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {swatches.map((s) => (
              <motion.div
                key={s.name}
                variants={cardVariants}
                className="aspect-[3/4] w-full"
              >
                <Swatch name={s.name} bg={s.bg} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---- Material-Partner ---- */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6 lg:col-span-2"
        >
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-paper-dim">
            Material-Partner
          </span>
          {materialPartners.map((p) => (
            <span key={p} className="font-playfair text-lg text-[#d7d4ca]">
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
