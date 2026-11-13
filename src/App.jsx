import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Collection from './components/Collection.jsx';
import Finder from './components/Finder.jsx';
import Bestseller from './components/Bestseller.jsx';
import Testimonials from './components/Testimonials.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import QuickView from './components/QuickView.jsx';

const VALUES = ['Cruelty-free, always', 'Vegan musks', 'Numbered small batches', '26% parfum concentration', 'Macerated for six weeks', 'Free shipping over $150'];

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, setQuickView] = useState(null);
  const [toast, setToast] = useState(null);

  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart]);

  const showToast = useCallback((message) => {
    setToast(message);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const addToBag = useCallback(
    (product, size) => {
      const price = size === '50ml' ? product.price50 : product.price100;
      setCart((prev) => {
        const key = `${product.id}-${size}`;
        const existing = prev.find((i) => `${i.id}-${i.size}` === key);
        if (existing) {
          return prev.map((i) => (`${i.id}-${i.size}` === key ? { ...i, qty: i.qty + 1 } : i));
        }
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            size,
            price,
            image: product.image,
            concentration: product.concentration || 'Eau de Parfum',
            qty: 1,
          },
        ];
      });
      showToast(`${product.name} (${size}) added to your bag`);
    },
    [showToast],
  );

  const updateQty = useCallback((id, size, qty) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.id === id && i.size === size))
        : prev.map((i) => (i.id === id && i.size === size ? { ...i, qty } : i)),
    );
  }, []);

  const removeItem = useCallback((id, size) => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-noir">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />

        {/* Values strip */}
        <div className="overflow-hidden border-y border-noir/10 bg-ivory-deep py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-[11px] tracking-[0.28em] uppercase text-noir/60">
            {VALUES.map((v) => (
              <span key={v} className="flex items-center gap-2">
                <span className="text-gold">✦</span> {v}
              </span>
            ))}
          </div>
        </div>

        <Story />
        <Collection onAdd={addToBag} onQuickView={setQuickView} />
        <Finder onAdd={addToBag} onQuickView={setQuickView} />
        <Bestseller onAdd={addToBag} onQuickView={setQuickView} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={updateQty}
        onRemove={removeItem}
        onClear={() => setCart([])}
      />
      <QuickView product={quickView} onClose={() => setQuickView(null)} onAdd={addToBag} />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 whitespace-nowrap bg-noir px-6 py-3.5 text-sm tracking-wide text-ivory shadow-2xl"
          >
            <span className="mr-2 text-gold-light">✦</span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
