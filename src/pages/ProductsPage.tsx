import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Products } from "../components/Products";
import { CtaBand } from "../components/CtaBand";
import { addOns } from "../data/site";

export function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products & Pricing"
        title="Systems Built for Your Home's Water"
        subtitle="Flat-rate, all-in pricing quoted up front. Every whole-home system is installed by a licensed North Carolina plumber."
      />
      <Products heading="Whole-Home & Point-of-Use Systems" />

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
              Add-Ons &amp; Ongoing Service
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Keep Your System Running Its Best
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-semibold text-navy">
                  {addOn.name}
                </h3>
                <p className="mt-2 font-heading text-xl font-bold text-specialist">
                  {addOn.price}
                </p>
                <p className="mt-3 font-body text-sm text-ink/70">{addOn.blurb}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center font-body text-sm text-ink/60">
            Not sure which system fits your home?{" "}
            <Link to="/contact" className="font-semibold text-specialist underline">
              Get a free water report
            </Link>{" "}
            and we'll recommend only what your water actually needs.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
