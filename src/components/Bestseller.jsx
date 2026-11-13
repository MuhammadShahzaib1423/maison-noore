import { motion } from 'framer-motion';
import { BESTSELLER_IMAGE, DISCOVERY_SET, formatPrice } from '../data/products';

export default function Bestseller({ onAdd, onQuickView }) {
  return (
    <section id="bestseller" className="overflow-hidden bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-dark">Bestseller · Batch No. 47</p>
            <div className="gold-rule mx-0 mt-4" />
            <h2 className="mt-6 font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
              Noor d&rsquo;Or
            </h2>
            <p className="mt-2 font-display text-xl italic text-noir/60">Golden light, worn close.</p>
            <p className="mt-6 leading-relaxed text-noir/75">
              The scent that built the house. Saffron and Calabrian bergamot open bright; Turkish
              rose follows; golden amber stays until morning. It is the bottle our customers
              repurchase most — and the one they gift most.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-noir/10 py-6 text-center">
              <div>
                <p className="font-display text-3xl font-semibold">4.9★</p>
                <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-noir/55">412 reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">10–12h</p>
                <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-noir/55">Longevity</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">26%</p>
                <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-noir/55">Concentration</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => onAdd({ ...{ id: 'noor-dor', name: 'Noor d\u2019Or', family: 'Floral', concentration: 'Eau de Parfum', price50: 120, price100: 185, image: BESTSELLER_IMAGE } }, '100ml')}
                className="bg-noir px-8 py-4 text-[12px] font-semibold tracking-[0.25em] uppercase text-ivory transition hover:bg-gold hover:text-noir"
              >
                Add 100ml — {formatPrice(185)}
              </button>
              <button
                onClick={() => onQuickView({ id: 'noor-dor', name: 'Noor d\u2019Or', tagline: 'Golden light, worn close', family: 'Floral', concentration: 'Eau de Parfum', price50: 120, price100: 185, rating: 4.9, reviews: 412, image: BESTSELLER_IMAGE, notes: { top: ['Bergamot', 'Saffron'], heart: ['Turkish Rose', 'Orange Blossom'], base: ['Golden Amber', 'Sandalwood'] }, description: 'Our signature scent. Saffron opens bright against Calabrian bergamot, then settles into a heart of Turkish rose warmed by golden amber. The one people ask about.', longevity: '10–12 hours', sillage: 'Moderate' })}
                className="border border-noir/30 px-8 py-4 text-[12px] tracking-[0.25em] uppercase transition hover:border-gold hover:text-gold-dark"
              >
                Full Details
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 border border-gold/50" aria-hidden="true" />
            <img src={BESTSELLER_IMAGE} alt="Noor d'Or — the bestselling Maison Nooré perfume" className="relative aspect-[4/5] w-full object-cover" />
            <div className="absolute bottom-6 left-6 bg-noir px-5 py-3 text-ivory">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold-light">Batch No. 47</p>
              <p className="mt-1 text-sm">500 bottles · numbered by hand</p>
            </div>
          </motion.div>
        </div>

        {/* Discovery set banner */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-24 grid items-center gap-8 bg-noir p-8 text-ivory sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-16"
        >
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-light">Can&rsquo;t decide?</p>
            <h3 className="mt-3 font-display text-3xl font-medium sm:text-4xl">The Discovery Set — all eight scents, $45.</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-ivory/75">
              Eight 2ml vials in a keepsake box, with a $45 credit toward your full bottle. The
              surest way to find your scent — and the set our customers gift most.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <p className="font-display text-4xl font-semibold text-gold-light">{formatPrice(45)}</p>
            <button
              onClick={() => onAdd(DISCOVERY_SET, '50ml')}
              className="bg-gold px-8 py-4 text-[12px] font-semibold tracking-[0.25em] uppercase text-noir transition hover:bg-gold-light"
            >
              Add the Discovery Set
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
