import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ivory-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-dark">Worn &amp; Loved</p>
          <div className="gold-rule mt-4" />
          <h2 className="mt-6 font-display text-4xl font-medium sm:text-5xl">What our customers say</h2>
          <p className="mt-4 text-noir/65">4.8 out of 5 — from more than 2,400 verified reviews.</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col bg-ivory p-8"
            >
              <p className="text-gold" aria-label="5 out of 5 stars">★★★★★</p>
              <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-noir/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-noir/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-noir font-display text-lg text-gold-light">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-medium">{t.name}</span>
                  <span className="block text-xs text-noir/55">{t.detail}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
