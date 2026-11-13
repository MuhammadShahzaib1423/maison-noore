import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LINKS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Our Story', href: '#story' },
  { label: 'Find Your Scent', href: '#finder' },
  { label: 'Bestseller', href: '#bestseller' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="bg-noir text-ivory/90">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[11px] tracking-[0.25em] uppercase">
          Complimentary shipping on orders over $150 &nbsp;·&nbsp; $45 discovery credit with every set
        </p>
      </div>
      <nav
        className={`transition-all duration-500 ${
          dark ? 'bg-ivory/95 text-noir shadow-[0_1px_0_rgba(23,19,15,0.08)] backdrop-blur' : 'bg-transparent text-ivory'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-display text-[26px] font-semibold tracking-[0.08em]">MAISON NOORÉ</span>
            <span className="mt-1 text-[9px] tracking-[0.42em] uppercase opacity-70">Paris · Est. 2019</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] font-medium tracking-[0.22em] uppercase opacity-80 transition hover:text-gold hover:opacity-100"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartOpen}
              aria-label="Open shopping bag"
              className="relative flex items-center gap-2 border border-current px-4 py-2 text-[12px] tracking-[0.22em] uppercase transition hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 7h12l1 13H5L6 7Z" />
                <path d="M9 10V6a3 3 0 0 1 6 0v4" />
              </svg>
              <span className="hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-semibold text-noir">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center border border-current lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-ivory text-noir lg:hidden"
            >
              <div className="flex flex-col px-6 pb-6 pt-2">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-noir/10 py-3 text-sm tracking-[0.22em] uppercase"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
