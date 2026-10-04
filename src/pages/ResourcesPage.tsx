import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { WaterEducation } from "../components/WaterEducation";
import { FAQ } from "../components/FAQ";
import { CtaBand } from "../components/CtaBand";
import { resourceArticles } from "../data/site";
import { articleGuides } from "../data/articles";
import { Seo } from "../components/Seo";
import { resourceTopics } from "../data/resourceTopics";

const popularGuides = resourceTopics
  .flatMap((topic) => topic.links)
  .filter((guide, index, guides) => guides.findIndex((candidate) => candidate.path === guide.path) === index)
  .slice(0, 12);

export function ResourcesPage() {
  return (
    <>
      <Seo title="Water Testing & Filtration Guides | Asheville, NC" description="Get clear answers about Asheville water testing, filtration, softeners, PFAS, reverse osmosis, private wells, system costs, and maintenance." path="/resources" />
      <PageHeader
        eyebrow="Resources"
        title="Asheville Water Testing & Filtration Guides"
        subtitle="Straight answers about city water, private wells, filtration, softeners, and reverse osmosis in Western North Carolina—no scare tactics, just education."
      />
      <WaterEducation />

      <section className="border-b border-mist bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">Explore by topic</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">Start With the Water Question You Need Answered</h2>
            <p className="mt-4 font-body leading-7 text-ink/65">Each topic hub connects testing, treatment, troubleshooting, and service guidance so you can move from a symptom to an evidence-based next step.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceTopics.map((topic) => (
              <Link key={topic.slug} to={`/resources/topics/${topic.slug}`} className="rounded-2xl border border-mist bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-md">
                <h3 className="font-heading text-xl font-bold text-navy">{topic.shortTitle}</h3>
                <p className="mt-3 font-body text-sm leading-7 text-ink/65">{topic.description}</p>
                <span className="mt-5 block font-body text-sm font-semibold text-specialist">Explore topic →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                {articleGuides.find((guide) => guide.slug === article.slug)?.readTime ?? "Read guide"} · Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-mist bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">More homeowner resources</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Popular Water Treatment Questions</h2>
          <p className="mt-3 max-w-3xl font-body text-sm leading-7 text-ink/65">These frequently searched guides connect practical homeowner questions with testing-first next steps.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popularGuides.map((guide) => <Link key={guide.path} to={guide.path} className="rounded-xl border border-mist bg-white p-4 font-heading text-sm font-semibold text-navy transition hover:border-sky/40 hover:shadow-sm">{guide.title}<span className="mt-2 block font-body text-xs font-semibold text-specialist">Read guide →</span></Link>)}
          </div>
          <Link to="/resources/library" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-specialist">Browse the complete guide library →</Link>
        </div>
      </section>

      <FAQ />
      <CtaBand />
    </>
  );
}
