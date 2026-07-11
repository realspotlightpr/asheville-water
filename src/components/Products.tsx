import { Link } from "react-router-dom";
import { products } from "../data/site";

type ProductsProps = {
  limit?: number;
  showViewAll?: boolean;
  heading?: string;
};

export function Products({ limit, showViewAll, heading }: ProductsProps) {
  const shown = limit ? products.slice(0, limit) : products;

  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
          Whole-Home &amp; Point-of-Use Systems
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
          {heading ?? "Systems Built for Your Home's Water"}
        </h2>
        <p className="mt-4 font-body text-ink/70">
          Flat-rate pricing, quoted up front. We only recommend what your water
          actually needs — nothing more.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((product) => (
          <div
            key={product.name}
            className="relative flex flex-col rounded-2xl border border-mist bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {product.tag && (
              <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 font-body text-xs font-semibold text-ink">
                {product.tag}
              </span>
            )}
            <Link
              to={`/products/${product.slug}`}
              className="mb-5 flex h-52 items-center justify-center overflow-hidden rounded-xl bg-mist p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition duration-300 hover:scale-105"
                loading="lazy"
              />
            </Link>
            <h3 className="font-heading text-lg font-semibold text-navy">
              <Link to={`/products/${product.slug}`} className="hover:text-specialist">
                {product.name}
              </Link>
            </h3>
            <p className="mt-2 font-heading text-2xl font-bold text-specialist">
              {product.price}
            </p>
            <p className="mt-3 flex-1 font-body text-sm text-ink/70">
              {product.blurb}
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                to={`/products/${product.slug}`}
                className="flex-1 rounded-full border border-navy px-4 py-2 text-center font-body text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="flex-1 rounded-full bg-amber px-4 py-2 text-center font-body text-sm font-semibold text-ink transition hover:brightness-95"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showViewAll && (
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-block rounded-full bg-specialist px-7 py-3 font-body text-sm font-semibold text-white transition hover:brightness-110"
          >
            View All Systems &amp; Pricing
          </Link>
        </div>
      )}
    </section>
  );
}
