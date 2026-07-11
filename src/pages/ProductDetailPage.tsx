import { useParams, Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { NotFound } from "./NotFound";
import { products, business } from "../data/site";

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <NotFound />;

  return (
    <>
      <PageHeader eyebrow={product.category} title={product.name} />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex items-center justify-center rounded-3xl bg-mist p-10">
            <svg viewBox="0 0 200 200" className="h-56 w-56" aria-hidden="true">
              <rect x="66" y="40" width="68" height="120" rx="14" fill="#ffffff" stroke="#0F4B91" strokeWidth="2" opacity="0.9" />
              <path d="M78 100 C 88 90, 98 90, 108 98 C 116 104, 124 104, 128 98" fill="none" stroke="#3897D2" strokeWidth="4" strokeLinecap="round" />
              <path d="M78 114 C 88 104, 98 104, 108 112 C 116 118, 124 118, 128 112" fill="none" stroke="#0F4B91" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="font-heading text-3xl font-extrabold text-specialist">
              {product.price}
            </p>
            <p className="mt-1 font-body text-sm text-ink/50">Flat-rate, installed</p>
            <p className="mt-5 font-body text-ink/70">{product.blurb}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-amber px-6 py-3 font-body text-sm font-semibold text-ink shadow-md transition hover:brightness-95"
              >
                Get My Free Water Report
              </Link>
              <a
                href={business.phoneHref}
                className="rounded-full border-2 border-navy px-6 py-3 font-body text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Call {business.phone}
              </a>
            </div>

            <p className="mt-6 rounded-lg bg-mist px-4 py-3 font-body text-xs text-ink/60">
              Starter product page — full specs, photos, and details to be added.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="font-body text-sm font-semibold text-specialist hover:underline">
            ← Back to all products
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
