import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | error | done

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setState('error');
      return;
    }
    setState('done');
  };

  return (
    <section className="bg-noir py-20 text-ivory lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-display text-5xl text-gold">✦</p>
        <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Join the Maison List</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ivory/75">
          New batches, limited editions and private previews — one letter a month, never more.
          New members receive 10% off their first order.
        </p>
        {state === 'done' ? (
          <p className="mx-auto mt-8 max-w-md border border-gold/50 bg-gold/10 px-6 py-4 text-gold-light">
            Welcome to the Maison List. Your 10% code is on its way to {email.trim()}.
          </p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setState('idle');
              }}
              placeholder="Your email address"
              className="flex-1 border border-ivory/30 bg-transparent px-4 py-3.5 text-sm tracking-wide outline-none placeholder:text-ivory/40 focus:border-gold"
            />
            <button
              type="submit"
              className="bg-gold px-7 py-3.5 text-[12px] font-semibold tracking-[0.25em] uppercase text-noir transition hover:bg-gold-light"
            >
              Subscribe
            </button>
          </form>
        )}
        {state === 'error' && (
          <p className="mt-3 text-sm text-rosewood-light">Please enter a valid email address.</p>
        )}
        <p className="mt-4 text-xs text-ivory/45">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
