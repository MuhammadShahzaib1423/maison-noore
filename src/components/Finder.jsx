import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NOTE_IMAGES, PRODUCTS, formatPrice } from '../data/products';

const QUESTIONS = [
  {
    key: 'when',
    title: 'When will you wear it most?',
    options: [
      { value: 'day', label: 'Daytime', hint: 'Work, weekends, sunlight' },
      { value: 'evening', label: 'Evenings', hint: 'Dinners, dates, nights out' },
    ],
  },
  {
    key: 'feel',
    title: 'How should it feel?',
    options: [
      { value: 'fresh', label: 'Fresh & bright', hint: 'Clean, airy, effortless' },
      { value: 'warm', label: 'Warm & cosy', hint: 'Soft, enveloping, calm' },
      { value: 'sensual', label: 'Bold & sensual', hint: 'Rich, magnetic, memorable' },
    ],
  },
  {
    key: 'family',
    title: 'Which world draws you in?',
    options: [
      { value: 'Floral', label: 'Floral', hint: 'Rose, jasmine, iris' },
      { value: 'Woody', label: 'Woody', hint: 'Oud, cedar, vetiver' },
      { value: 'Amber', label: 'Amber', hint: 'Resin, incense, vanilla' },
      { value: 'Citrus', label: 'Citrus', hint: 'Lemon, neroli, fig' },
      { value: 'Gourmand', label: 'Gourmand', hint: 'Vanilla, tonka, rum' },
    ],
  },
];

export default function Finder({ onAdd, onQuickView }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const done = step >= QUESTIONS.length;

  const result = useMemo(() => {
    if (!done) return null;
    const scored = PRODUCTS.map((p) => {
      let score = 0;
      if (p.mood.includes(answers.when)) score += 2;
      if (p.mood.includes(answers.feel)) score += 2;
      if (p.family === answers.family) score += 3;
      return { p, score };
    }).sort((a, b) => b.score - a.score);
    return scored[0].p;
  }, [done, answers]);

  const pick = (value) => {
    setAnswers((a) => ({ ...a, [QUESTIONS[step].key]: value }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section id="finder" className="bg-noir py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-light">Fragrance Finder</p>
            <div className="gold-rule mx-0 mt-4" />
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Three questions. <em className="text-gold-light">Your scent.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-ivory/75">
              Choosing a perfume online should not feel like guessing. Answer three short questions
              and we will match you with the scent from our collection that fits your days — and
              your evenings — best.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { img: NOTE_IMAGES.Rose, label: 'Rose', note: 'Damask rose, peony' },
                { img: NOTE_IMAGES.Citrus, label: 'Citrus', note: 'Sicilian lemon, neroli' },
                { img: NOTE_IMAGES.Wood, label: 'Wood', note: 'Smoked oud, cedar' },
                { img: NOTE_IMAGES.Floral, label: 'Floral', note: 'Jasmine, tuberose' },
              ].map((n) => (
                <div key={n.label} className="group relative overflow-hidden">
                  <img src={n.img} alt={`${n.label} ingredients`} loading="lazy" className="aspect-square w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir to-transparent p-3 pt-8">
                    <p className="font-display text-lg font-semibold">{n.label}</p>
                    <p className="text-xs text-ivory/70">{n.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border border-ivory/15 bg-noir-soft p-6 sm:p-10">
              <AnimatePresence mode="wait">
                {!done ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-[11px] tracking-[0.35em] uppercase text-gold-light">
                      Question {step + 1} of {QUESTIONS.length}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-medium sm:text-4xl">{QUESTIONS[step].title}</h3>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {QUESTIONS[step].options.map((o) => (
                        <button
                          key={o.value}
                          onClick={() => pick(o.value)}
                          className="border border-ivory/20 px-5 py-5 text-left transition hover:border-gold hover:bg-ivory/5"
                        >
                          <span className="block font-display text-xl font-semibold">{o.label}</span>
                          <span className="mt-1 block text-sm text-ivory/60">{o.hint}</span>
                        </button>
                      ))}
                    </div>
                    {step > 0 && (
                      <button onClick={() => setStep((s) => s - 1)} className="mt-6 text-sm tracking-wide text-ivory/60 underline underline-offset-4 hover:text-gold-light">
                        ← Back
                      </button>
                    )}
                  </motion.div>
                ) : (
                  result && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-[11px] tracking-[0.35em] uppercase text-gold-light">Your match</p>
                      <div className="mt-6 grid gap-6 sm:grid-cols-[180px_1fr]">
                        <img src={result.image} alt={`${result.name} perfume bottle`} className="h-56 w-full object-cover sm:h-full" />
                        <div>
                          <h3 className="font-display text-4xl font-semibold">{result.name}</h3>
                          <p className="mt-1 italic text-ivory/65">{result.tagline}</p>
                          <p className="mt-4 leading-relaxed text-ivory/80">{result.description}</p>
                          <p className="mt-4 text-sm text-ivory/70">
                            {result.notes.top.join(' · ')} — {result.notes.heart.join(' · ')} — {result.notes.base.join(' · ')}
                          </p>
                          <p className="mt-3 font-display text-2xl font-semibold text-gold-light">
                            From {formatPrice(result.price50)} / 50ml
                          </p>
                          <div className="mt-6 flex flex-wrap gap-3">
                            <button
                              onClick={() => onAdd(result, '100ml')}
                              className="bg-gold px-6 py-3 text-[12px] font-semibold tracking-[0.22em] uppercase text-noir transition hover:bg-gold-light"
                            >
                              Add to Bag — {formatPrice(result.price100)}
                            </button>
                            <button
                              onClick={() => onQuickView(result)}
                              className="border border-ivory/50 px-6 py-3 text-[12px] tracking-[0.22em] uppercase transition hover:border-gold hover:text-gold-light"
                            >
                              View Details
                            </button>
                            <button onClick={restart} className="px-2 py-3 text-sm text-ivory/60 underline underline-offset-4 hover:text-gold-light">
                              Start again
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
            <p className="mt-4 text-sm text-ivory/50">
              Not sure? The $45 Discovery Set includes all eight scents — and the $45 comes off your full bottle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
