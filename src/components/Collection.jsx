import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FAMILIES, PRODUCTS, formatPrice } from '../data/products';

function Stars({ rating }) {
  return (
    <span className="text-gold" aria-label={`Rated ${rating} out of 5`}>
      {'★'.repeat(Math.round(rating))}
      <span className="text-noir/30">{'★'.repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

export default function Collection({ onAdd, onQuickView }) {
  const [family, setFamily] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => (family === 'All' ? true : p.family === family));
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((p) =>
        [p.name, p.tagline, p.family, ...p.notes.top, ...p.notes.heart, ...p.notes.base]
          .join(' ')
          .toLowerCase()
          .includes(q),
      );
    }
    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price100 - b.price100);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price100 - a.price100);
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [family, query, sort]);

  return (
    <section id="collection" className="bg-ivory-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-dark">The Collection</p>
          <div className="gold-rule mt-4" />
          <h2 className="mt-6 font-display text-4xl font-medium sm:text-5xl">Eight scents. One house.</h2>
          <p className="mx-auto mt-4 max-w-xl text-noir/70">
            Every fragrance is an eau de parfum at 26% concentration, macerated for six weeks and
            bottled in numbered small batches.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            {FAMILIES.map((f) => (
              <button
                key={f}
                onClick={() => setFamily(f)}
                className={`whitespace-nowrap border px-5 py-2 text-[12px] tracking-[0.2em] uppercase transition ${
                  family === f
                    ? 'border-noir bg-noir text-ivory'
                    : 'border-noir/25 bg-transparent text-noir/70 hover:border-noir hover:text-noir'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a scent or note — try “rose”"
              aria-label="Search fragrances"
              className="lux-input min-w-[220px] flex-1 lg:w-72"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort fragrances"
              className="border border-noir/20 bg-transparent px-3 py-3 text-sm outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-noir/60">
            No scent matches “{query}”. Try a note like rose, oud or vanilla.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group flex flex-col bg-ivory"
              >
                <div className="relative overflow-hidden">
                  <button onClick={() => onQuickView(p)} className="block w-full text-left" aria-label={`View ${p.name}`}>
                    <img
                      src={p.image}
                      alt={`${p.name} perfume bottle`}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </button>
                  {p.badge && (
                    <span className="absolute left-3 top-3 bg-noir px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-gold-light">
                      {p.badge}
                    </span>
                  )}
                  <button
                    onClick={() => onQuickView(p)}
                    className="absolute inset-x-3 bottom-3 bg-ivory/95 py-3 text-[11px] tracking-[0.25em] uppercase text-noir opacity-0 transition group-hover:opacity-100"
                  >
                    Quick View
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-noir/50">
                    <span>{p.family}</span>
                    <span>{p.concentration}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{p.name}</h3>
                  <p className="mt-1 text-sm italic text-noir/60">{p.tagline}</p>
                  <p className="mt-3 text-xs leading-relaxed text-noir/65">
                    {p.notes.top.join(' · ')} — {p.notes.heart.join(' · ')}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <Stars rating={p.rating} />
                    <span className="text-noir/50">
                      {p.rating} ({p.reviews})
                    </span>
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-noir/10 pt-4">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-noir/45">From</p>
                      <p className="font-display text-xl font-semibold">{formatPrice(p.price50)} <span className="text-sm font-normal text-noir/50">/ 50ml</span></p>
                    </div>
                    <button
                      onClick={() => onAdd(p, '100ml')}
                      className="bg-noir px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase text-ivory transition hover:bg-gold hover:text-noir"
                    >
                      Add — {formatPrice(p.price100)}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-sm text-noir/55">
          Every bottle ships with two complimentary 2ml samples of your choice at checkout.
        </p>
      </div>
    </section>
  );
}
