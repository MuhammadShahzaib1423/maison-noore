export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-noir pb-10 pt-16 text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-semibold tracking-[0.06em]">MAISON NOORÉ</p>
            <p className="mt-1 text-[10px] tracking-[0.42em] uppercase text-ivory/60">Paris · Est. 2019</p>
            <p className="mt-5 max-w-sm leading-relaxed text-ivory/70">
              An independent perfume house. Eight original eaux de parfum, hand-composed in small
              batches from rare naturals. Light, bottled.
            </p>
            <p className="mt-5 text-sm text-ivory/55">Free shipping over $150 · 30-day returns, even on opened bottles</p>
          </div>
          <div>
            <h3 className="text-[11px] tracking-[0.35em] uppercase text-gold-light">Shop</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              <li><a href="#collection" className="transition hover:text-gold-light">The Collection</a></li>
              <li><a href="#bestseller" className="transition hover:text-gold-light">Bestseller — Noor d&rsquo;Or</a></li>
              <li><a href="#finder" className="transition hover:text-gold-light">Find Your Scent</a></li>
              <li><a href="#bestseller" className="transition hover:text-gold-light">The Discovery Set</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] tracking-[0.35em] uppercase text-gold-light">The House</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              <li><a href="#story" className="transition hover:text-gold-light">Our Story</a></li>
              <li><a href="#reviews" className="transition hover:text-gold-light">Reviews</a></li>
              <li><a href="#top" className="transition hover:text-gold-light">Shipping &amp; Returns</a></li>
              <li><a href="#top" className="transition hover:text-gold-light">Contact the Atelier</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/45 sm:flex-row">
          <p>© 2026 Maison Nooré. All rights reserved.</p>
          <p>An original concept brand. All fragrances, names and copy are original creations.</p>
        </div>
      </div>
    </footer>
  );
}
