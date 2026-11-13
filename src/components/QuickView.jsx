import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { formatPrice } from '../data/products';

export default function QuickView({ product, onClose, onAdd }) {
  const [size, setSize] = useState('100ml');
  if (!product) return null;
  const price = size === '50ml' ? product.price50 : product.price100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-noir/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-ivory"
        >
          <button
            onClick={onClose}
            aria-label="Close quick view"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-noir text-ivory transition hover:bg-gold hover:text-noir"
          >
            ✕
          </button>
          <div className="grid md:grid-cols-2">
            <img src={product.image} alt={`${product.name} perfume bottle`} className="h-72 w-full object-cover md:h-full" />
            <div className="p-6 sm:p-10">
              <p className="text-[11px] tracking-[0.35em] uppercase text-gold-dark">
                {product.family} · {product.concentration}
              </p>
              <h3 className="mt-3 font-display text-4xl font-semibold">{product.name}</h3>
              <p className="mt-1 italic text-noir/60">{product.tagline}</p>
              <p className="mt-2 text-sm text-noir/60">
                ★ {product.rating} · {product.reviews} reviews
              </p>
              <p className="mt-5 leading-relaxed text-noir/75">{product.description}</p>

              <div className="mt-6 space-y-3 text-sm">
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-noir/45">Top notes</p>
                  <p className="mt-1">{product.notes.top.join(' · ')}</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-noir/45">Heart notes</p>
                  <p className="mt-1">{product.notes.heart.join(' · ')}</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-noir/45">Base notes</p>
                  <p className="mt-1">{product.notes.base.join(' · ')}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-6 text-sm text-noir/70">
                <span>Longevity: <strong className="text-noir">{product.longevity}</strong></span>
                <span>Sillage: <strong className="text-noir">{product.sillage}</strong></span>
              </div>

              <div className="mt-7">
                <p className="text-[11px] tracking-[0.25em] uppercase text-noir/45">Size</p>
                <div className="mt-2 flex gap-3">
                  {['50ml', '100ml'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`border px-5 py-2.5 text-sm transition ${
                        size === s ? 'border-noir bg-noir text-ivory' : 'border-noir/25 hover:border-noir'
                      }`}
                    >
                      {s} — {formatPrice(s === '50ml' ? product.price50 : product.price100)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onAdd(product, size);
                  onClose();
                }}
                className="mt-8 w-full bg-noir py-4 text-[12px] font-semibold tracking-[0.25em] uppercase text-ivory transition hover:bg-gold hover:text-noir"
              >
                Add to Bag — {formatPrice(price)}
              </button>
              <p className="mt-3 text-center text-xs text-noir/50">
                Free shipping over $150 · 30-day returns, even on opened bottles
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
