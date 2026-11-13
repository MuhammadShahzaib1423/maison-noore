import { motion } from 'framer-motion';
import { STORY_IMAGE, ATELIER_IMAGE } from '../data/products';

const STEPS = [
  { n: '01', title: 'Harvest', text: 'Roses picked at dawn, citrus pressed within hours, oud aged for years before it earns its place.' },
  { n: '02', title: 'Distil', text: 'Every oil is distilled in our own atelier — never bought pre-blended, never rushed.' },
  { n: '03', title: 'Macerate', text: 'Each blend rests for six weeks, so the notes settle into one another instead of shouting over each other.' },
  { n: '04', title: 'Bottle', text: 'Filled, sealed and numbered by hand. A batch is never larger than 500 bottles.' },
];

export default function Story() {
  return (
    <section id="story" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={STORY_IMAGE}
              alt="Inside the Maison Nooré atelier"
              className="aspect-[4/5] w-full object-cover"
            />
            <img
              src={ATELIER_IMAGE}
              alt="Raw perfume ingredients — spices and resins"
              className="absolute -bottom-8 -right-4 hidden w-56 border-8 border-ivory object-cover shadow-2xl sm:block lg:-right-8"
            />
            <div className="absolute -left-4 top-8 bg-noir px-5 py-4 text-ivory lg:-left-8">
              <p className="font-display text-3xl font-semibold text-gold-light">Est. 2019</p>
              <p className="mt-1 text-[11px] tracking-[0.3em] uppercase text-ivory/70">Grasse · Paris</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-dark">The House</p>
            <div className="gold-rule mx-0 mt-4" />
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Perfume, made the slow way — <em className="text-gold-dark">on purpose.</em>
            </h2>
            <p className="mt-6 leading-relaxed text-noir/75">
              Maison Nooré began in a two-room atelier above a flower market, with one copper still
              and a stubborn idea: that a perfume should be composed like music — a top note that
              arrives, a heart that stays, and a base that lingers long after you have left the room.
            </p>
            <p className="mt-4 leading-relaxed text-noir/75">
              We work with a small circle of growers, buy whole harvests rather than lots, and refuse
              to release a scent until it has survived six weeks of maceration and a hundred wear-tests.
              Nothing here is designed to shout. Everything here is designed to be remembered.
            </p>

            <div className="mt-10 space-y-6">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-5 border-b border-noir/10 pb-5">
                  <span className="font-display text-2xl font-semibold text-gold">{s.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-noir/70">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
