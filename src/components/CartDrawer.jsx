import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { formatPrice } from '../data/products';

const FREE_SHIPPING_AT = 150;

export default function CartDrawer({ open, items, onClose, onUpdateQty, onRemove, onClear }) {
  const [placed, setPlaced] = useState(false);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_AT) * 100);

  const placeOrder = () => {
    setPlaced(true);
    onClear();
  };

  const close = () => {
    setPlaced(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-noir/60 backdrop-blur-sm"
            onClick={close}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-noir/10 px-6 py-5">
              <h2 className="font-display text-2xl font-semibold">Your Bag</h2>
              <button onClick={close} aria-label="Close bag" className="flex h-9 w-9 items-center justify-center border border-noir/20 transition hover:border-gold hover:text-gold-dark">
                ✕
              </button>
            </div>

            {placed ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="font-display text-5xl text-gold">✦</p>
                <h3 className="mt-4 font-display text-3xl font-semibold">Thank you.</h3>
                <p className="mt-3 leading-relaxed text-noir/70">
                  Your order is confirmed. A confirmation email is on its way, and your bottles will
                  be wrapped in our signature noir-and-gold box before they leave the atelier.
                </p>
                <button
                  onClick={close}
                  className="mt-8 bg-noir px-8 py-3.5 text-[12px] tracking-[0.25em] uppercase text-ivory transition hover:bg-gold hover:text-noir"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="font-display text-5xl text-noir/25">✦</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">Your bag is empty.</h3>
                <p className="mt-2 text-sm leading-relaxed text-noir/60">
                  Start with the Discovery Set — all eight scents for $45, redeemable against your
                  full bottle.
                </p>
                <button
                  onClick={close}
                  className="mt-8 bg-noir px-8 py-3.5 text-[12px] tracking-[0.25em] uppercase text-ivory transition hover:bg-gold hover:text-noir"
                >
                  Explore the Collection
                </button>
              </div>
            ) : (
              <>
                <div className="border-b border-noir/10 px-6 py-4">
                  <p className="text-xs tracking-wide text-noir/65">
                    {subtotal >= FREE_SHIPPING_AT
                      ? 'You have unlocked complimentary shipping.'
                      : `Add ${formatPrice(FREE_SHIPPING_AT - subtotal)} more for complimentary shipping.`}
                  </p>
                  <div className="mt-2 h-1 w-full bg-noir/10">
                    <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-noir/10 py-4">
                      <img src={item.image} alt={item.name} className="h-24 w-20 object-cover" />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-display text-lg font-semibold leading-tight">{item.name}</h3>
                            <p className="mt-0.5 text-xs text-noir/55">
                              {item.size} · {item.concentration}
                            </p>
                          </div>
                          <button
                            onClick={() => onRemove(item.id, item.size)}
                            aria-label={`Remove ${item.name}`}
                            className="text-noir/40 transition hover:text-rosewood"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-noir/20">
                            <button
                              onClick={() => onUpdateQty(item.id, item.size, item.qty - 1)}
                              aria-label="Decrease quantity"
                              className="px-3 py-1.5 text-sm hover:text-gold-dark"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-sm">{item.qty}</span>
                            <button
                              onClick={() => onUpdateQty(item.id, item.size, item.qty + 1)}
                              aria-label="Increase quantity"
                              className="px-3 py-1.5 text-sm hover:text-gold-dark"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-display text-lg font-semibold">{formatPrice(item.price * item.qty)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-noir/10 px-6 py-5">
                  <div className="flex justify-between text-sm text-noir/70">
                    <span>Shipping</span>
                    <span>{subtotal >= FREE_SHIPPING_AT ? 'Complimentary' : 'Calculated at checkout'}</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="font-display text-xl font-semibold">Subtotal</span>
                    <span className="font-display text-xl font-semibold">{formatPrice(subtotal)}</span>
                  </div>
                  <button
                    onClick={placeOrder}
                    className="mt-5 w-full bg-noir py-4 text-[12px] font-semibold tracking-[0.25em] uppercase text-ivory transition hover:bg-gold hover:text-noir"
                  >
                    Checkout — {formatPrice(subtotal)}
                  </button>
                  <p className="mt-3 text-center text-xs text-noir/50">
                    Secure checkout · 30-day returns, even on opened bottles
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
