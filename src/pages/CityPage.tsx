import { useParams, Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { WaterSourceTabs } from "../components/WaterSourceTabs";
import { CtaBand } from "../components/CtaBand";
import { NotFound } from "./NotFound";
import { serviceCities } from "../data/site";

export function CityPage() {
  const { slug } = useParams();
  const city = serviceCities.find((c) => c.slug === slug);

  if (!city) return <NotFound />;

  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title={`Water Filtration in ${city.name}, NC`}
        subtitle={`Whole-home softening, filtration, and reverse osmosis for ${city.name} homes — on city water or a private well.`}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <p className="font-body text-ink/70">
          We install and service water treatment systems throughout {city.name}{" "}
          and the surrounding area. Every recommendation starts with a free,
          lab-backed water report — because {city.name}'s water isn't the same
          as the next town over, or even the next street.
        </p>
        <p className="mt-4 rounded-lg bg-mist px-4 py-3 font-body text-xs text-ink/60">
          Starter city page — local water notes, testimonials, and area details
          to be added.
        </p>
      </section>

      <WaterSourceTabs />

      <div className="pb-8 text-center">
        <Link to="/service-areas" className="font-body text-sm font-semibold text-specialist hover:underline">
          ← All service areas
        </Link>
      </div>

      <CtaBand
        heading={`Ready for Clean Water in ${city.name}?`}
        sub="Start with a free water report — no obligation, no high-pressure sales."
      />
    </>
  );
}
