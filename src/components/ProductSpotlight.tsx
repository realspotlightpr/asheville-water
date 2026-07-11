import { useState } from "react";
import { Link } from "react-router-dom";
import { business, featured } from "../data/site";

export function ProductSpotlight() {
  const [index, setIndex] = useState(0);
  const item = featured[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + featured.length) % featured.length);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
      {/* arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous system"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy shadow transition hover:bg-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next system"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy shadow transition hover:bg-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="flex h-52 items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain drop-shadow-xl"
        />
      </div>

      <div className="mt-4 border-t border-white/15 pt-5">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sky">
          {item.eyebrow}
        </p>
        <h3 className="mt-1 font-heading text-2xl font-bold text-white">
          {item.name}
        </h3>
        <p className="mt-2 font-body text-sm text-white/70">{item.spec}</p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <span className="font-body text-xs text-white/60">Starting at</span>
            <p className="font-heading text-2xl font-extrabold text-amber">
              {item.price}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="font-body text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Get a Quote
            </a>
            <Link
              to={`/products/${item.slug}`}
              className="rounded-full bg-white px-4 py-2 font-body text-sm font-semibold text-navy transition hover:bg-mist"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="mt-6 flex justify-center gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show system ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
