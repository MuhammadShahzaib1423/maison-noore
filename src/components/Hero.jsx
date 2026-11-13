import { motion } from 'framer-motion';
import { HERO_IMAGE } from '../data/products';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-noir text-ivory">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="A bottle of Maison Nooré perfume in warm evening light"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/35 to-noir/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/60 via-transparent to-transparent" />
      </div>

      {/* Giant background word — typography as scenery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 select-none overflow-hidden text-center font-display text-[26vw] font-semibold leading-none tracking-tight text-ivory/[0.07] lg:top-16 lg:text-[19vw]"
      >
        NOORÉ
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[11px] tracking-[0.4em] uppercase text-gold-light"
        >
          Maison Nooré — Independent Perfume House
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-7xl lg:text-[86px]"
        >
          Light, <em className="text-gold-light">bottled.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/85 sm:text-lg"
        >
          Eight original eaux de parfum, hand-composed in small batches from rare naturals —
          saffron, Damask rose, smoked oud and golden amber. No noise. No excess. Just scent,
          made properly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#collection"
            className="bg-gold px-8 py-4 text-[12px] font-semibold tracking-[0.25em] uppercase text-noir transition hover:bg-gold-light"
          >
            Shop the Collection
          </a>
          <a
            href="#finder"
            className="border border-ivory/60 px-8 py-4 text-[12px] font-medium tracking-[0.25em] uppercase text-ivory transition hover:border-gold hover:text-gold-light"
          >
            Find Your Scent
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-ivory/15 pt-6 text-sm text-ivory/75"
        >
          <span>
            <strong className="font-display text-2xl font-semibold text-ivory">8</strong>
            <span className="ml-2 tracking-wide">original scents</span>
          </span>
          <span>
            <strong className="font-display text-2xl font-semibold text-ivory">26%</strong>
            <span className="ml-2 tracking-wide">parfum concentration</span>
          </span>
          <span>
            <strong className="font-display text-2xl font-semibold text-ivory">4.8★</strong>
            <span className="ml-2 tracking-wide">from 2,400+ reviews</span>
          </span>
          <span>
            <strong className="font-display text-2xl font-semibold text-ivory">Small</strong>
            <span className="ml-2 tracking-wide">batches, numbered</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
