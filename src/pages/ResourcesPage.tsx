import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { WaterEducation } from "../components/WaterEducation";
import { FAQ } from "../components/FAQ";
import { CtaBand } from "../components/CtaBand";
import { resourceArticles } from "../data/site";

export function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Know What's In Your Water"
        subtitle="Straight answers about water quality in Western North Carolina — no scare tactics, just education."
      />
      <WaterEducation />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
            Guides &amp; Articles
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Learn Before You Buy
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/resources/${article.slug}`}
              className="flex flex-col rounded-2xl border border-mist bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-semibold text-navy">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 font-body text-sm text-ink/70">
                {article.blurb}
              </p>
              <span className="mt-4 font-body text-sm font-semibold text-specialist">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FAQ />
      <CtaBand />
    </>
  );
}
