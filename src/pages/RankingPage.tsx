import { Link, useParams } from "react-router-dom";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { newRankingPages } from "../data/rankingPages";
import { siteUrl } from "../data/seo";
import { NotFound } from "./NotFound";

export function RankingPage() {
  const { slug } = useParams(),
    page = newRankingPages.find((candidate) => candidate.slug === `/${slug}/`);
  if (!page) return <NotFound />;
  const related = newRankingPages
    .filter(
      (candidate) =>
        candidate.slug !== page.slug &&
        Math.abs(candidate.number - page.number) <= 3,
    )
    .slice(0, 3);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.description,
      datePublished: page.number >= 491 ? "2026-08-17" : "2026-08-04",
      dateModified: page.number >= 491 ? "2026-08-17" : "2026-08-04",
      author: {
        "@type": "Organization",
        name: "Asheville Water Specialists",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Asheville Water Specialists",
        url: siteUrl,
      },
      mainEntityOfPage: `${siteUrl}${page.slug}`,
      about: page.primaryQuery,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: `${siteUrl}/resources`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.title,
          item: `${siteUrl}${page.slug}`,
        },
      ],
    },
  ];
  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.description}
        path={page.slug}
        schema={schema}
      />
      <header className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-sky/25 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 font-body text-xs text-white/50"
          >
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/resources">Resources</Link>
            <span>/</span>
            <span className="text-sky">Guide</span>
          </nav>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Western North Carolina Water Guide
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-white/75">
            {page.intro}
          </p>
          <p className="mt-7 font-body text-xs text-white/55">
            Reviewed August 2026 · Testing-first guidance · Licensed NC plumber
            installation
          </p>
        </div>
      </header>
      <main className="bg-white py-16 sm:py-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <section className="rounded-3xl border border-sky/20 bg-mist p-7 sm:p-9">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-specialist">
              What to know first
            </p>
            <p className="mt-3 font-heading text-xl font-semibold leading-relaxed text-navy sm:text-2xl">
              {page.intro}
            </p>
          </section>
          <div className="mt-14 space-y-14">
            {page.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`}>
                {section.heading && (
                  <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                    {section.heading}
                  </h2>
                )}
                <div className="mt-5 space-y-5">
                  {section.paragraphs
                    .filter((paragraph) => index > 0 || paragraph !== page.intro)
                    .map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-body text-base leading-8 text-ink/75"
                    >
                      {paragraph}
                    </p>
                    ))}
                </div>
              </section>
            ))}
          </div>
          <section className="mt-14 rounded-2xl border border-mist bg-slate-50 p-7">
            <h2 className="font-heading text-2xl font-bold text-navy">
              A recommendation based on your water
            </h2>
            <p className="mt-3 font-body text-base leading-8 text-ink/70">
              Treatment should follow the water source, available testing,
              household demand, plumbing conditions, and the performance claims
              of the selected equipment. Asheville Water Specialists provides a
              complimentary personalized water quality report and installation
              by a licensed North Carolina plumber.
            </p>
          </section>
          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="font-heading text-2xl font-bold text-navy">
                Related guides
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.slug}
                    className="rounded-2xl border border-mist p-5 transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-md"
                  >
                    <span className="font-heading text-sm font-semibold text-navy">
                      {item.title}
                    </span>
                    <span className="mt-3 block font-body text-xs font-semibold text-specialist">
                      Read guide →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
          <div className="mt-12">
            <Link
              to="/resources"
              className="font-body text-sm font-semibold text-specialist hover:underline"
            >
              ← All resources
            </Link>
          </div>
        </article>
      </main>
      <CtaBand
        heading="Get a Water Plan Built for Your Home"
        sub="Request your complimentary personalized water quality report—no in-home visit required to get started."
      />
    </>
  );
}
