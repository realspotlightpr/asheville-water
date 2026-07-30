import { useState } from "react";
import { Link } from "react-router-dom";
import { business, featured } from "../data/site";

export function ProductSpotlight() {
  const [index, setIndex] = useState(0);
  const item = featured[index];
  const go = (direction: number) =>
    setIndex((current) => (current + direction + featured.length) % featured.length);

  return (
    <section className="bg-mist px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.18em] text-specialist">
            Clean water, made simple
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            A system designed around your home&apos;s water
          </h2>
          <p className="mt-4 font-body text-base leading-7 text-slate">
            Explore our most requested treatment systems. We test your water first, explain the
            options clearly, and recommend only what your home needs.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-navy shadow-2xl">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex min-h-[340px] items-center justify-center bg-white p-10 sm:p-14">
              <div className="absolute left-6 top-6 rounded-full bg-mist px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.14em] text-specialist">
                Featured system
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-contain drop-shadow-xl sm:h-72"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sky">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                {item.name}
              </h3>
              <p className="mt-4 font-body text-base leading-7 text-white/75">{item.spec}</p>
              <div className="mt-7 flex items-end gap-3 border-y border-white/15 py-5">
                <span className="pb-1 font-body text-sm text-white/60">Starting at</span>
                <span className="font-heading text-3xl font-extrabold text-amber">{item.price}</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={business.phoneHref}
                  className="rounded-full bg-amber px-6 py-3 font-body text-sm font-bold text-ink transition hover:brightness-95"
                >
                  Get a Free Consultation
                </a>
                <Link
                  to={`/products/${item.slug}`}
                  className="rounded-full border border-white/35 px-6 py-3 font-body text-sm font-bold text-white transition hover:bg-white hover:text-navy"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <button
            onClick={() => go(-1)}
            aria-label="Previous system"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg transition hover:bg-mist"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next system"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg transition hover:bg-mist"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {featured.map((product, productIndex) => (
            <button
              key={product.slug}
              onClick={() => setIndex(productIndex)}
              aria-label={`Show ${product.name}`}
              className={`h-2.5 rounded-full transition-all ${
                productIndex === index ? "w-8 bg-specialist" : "w-2.5 bg-specialist/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
