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
            <img
              src={product.image}
              alt={product.name}
              className="h-72 w-full object-contain drop-shadow-lg"
            />
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
                Call <span className="notranslate" translate="no">{business.phone}</span>
              </a>
            </div>
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
