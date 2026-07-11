import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { business, serviceCities } from "../data/site";
import { Seo } from "../components/Seo";

export function ServiceAreasPage() {
  return (
    <>
      <Seo
        title="Water Filtration Service Areas in Western NC | Asheville Water Specialists"
        description="Explore water filtration, softening, reverse osmosis, and private-well treatment service areas across Asheville and Western North Carolina."
        path="/service-areas"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Asheville Water Specialists service areas",
          itemListElement: serviceCities.map((city, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `${city.name}, NC`,
            url: `https://asheville-water-specialists-432.netlify.app/service-areas/${city.slug}`,
          })),
        }}
      />
      <PageHeader
        eyebrow="Service Areas"
        title="Proudly Serving Western North Carolina"
        subtitle={`We install city and well-water systems within a ${business.serviceRadius}.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCities.map((city) => (
            <Link
              key={city.slug}
              to={`/service-areas/${city.slug}`}
              className="flex items-center gap-3 rounded-xl border border-mist bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky/15 text-specialist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" strokeLinejoin="round" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </span>
              <div>
                <p className="font-heading text-base font-semibold text-navy">
                  {city.name}, NC
                </p>
                <p className="font-body text-xs text-ink/60">
                  City &amp; well water service
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-mist p-8 text-center sm:p-12">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            Your Neighbor's Water Isn't Your Water
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-ink/70">
            Two homes on the same street can have completely different water
            quality. That's why we never recommend a system until we understand
            your home's water first — whether you're on municipal supply or a
            private well.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Not Sure If We Cover Your Area?"
        sub="Give us a call — if you're near Asheville, there's a good chance we can help."
      />
    </>
  );
}
