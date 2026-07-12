import { Link, useParams } from "react-router-dom";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { articleGuides } from "../data/articles";
import { NotFound } from "./NotFound";

const siteUrl = "https://asheville-water-specialists-432.netlify.app";

export function ResourceArticlePage() {
  const { slug } = useParams();
  const article = articleGuides.find((guide) => guide.slug === slug);

  if (!article) return <NotFound />;

  const path = `/resources/${article.slug}`;
  const related = article.related.map((relatedSlug) => articleGuides.find((guide) => guide.slug === relatedSlug)).filter(Boolean);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
      author: { "@type": "Organization", name: "Asheville Water Specialists", url: siteUrl },
      publisher: { "@type": "Organization", name: "Asheville Water Specialists", logo: { "@type": "ImageObject", url: `${siteUrl}/assets/asheville-water-logo.png` } },
      mainEntityOfPage: `${siteUrl}${path}`,
      about: ["Water filtration", "Water treatment", "Western North Carolina"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
        { "@type": "ListItem", position: 3, name: article.title, item: `${siteUrl}${path}` },
      ],
    },
  ];

  return (
    <>
      <Seo title={`${article.title} | Asheville Water Specialists`} description={article.description} path={path} schema={schema} />

      <header className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-sky/25 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 font-body text-xs text-white/50">
            <Link to="/" className="hover:text-white">Home</Link><span>/</span><Link to="/resources" className="hover:text-white">Resources</Link><span>/</span><span className="text-sky">Guide</span>
          </nav>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sky">Water Education · {article.readTime}</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-white/70">{article.description}</p>
          <div className="mt-7 flex flex-wrap gap-3 font-body text-xs text-white/55">
            <span>Reviewed July 2026</span><span aria-hidden="true">•</span><span>Western North Carolina homeowner guide</span>
          </div>
        </div>
      </header>

      <main className="bg-white py-16 sm:py-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <section className="rounded-3xl border border-sky/20 bg-mist p-7 sm:p-9" aria-labelledby="short-answer">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-specialist">Short Answer</p>
            <h2 id="short-answer" className="sr-only">Short answer</h2>
            <p className="mt-3 font-heading text-xl font-semibold leading-relaxed text-navy sm:text-2xl">{article.answer}</p>
          </section>

          <section className="mt-10 rounded-2xl border border-mist p-6 sm:p-8" aria-labelledby="key-takeaways">
            <h2 id="key-takeaways" className="font-heading text-2xl font-bold text-navy">Key Takeaways</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {article.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3 font-body text-sm leading-7 text-ink/70">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg></span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 space-y-14">
            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-specialist font-heading text-sm font-bold text-white">{index + 1}</span>
                  <h2 className="pt-1 font-heading text-2xl font-bold text-navy sm:text-3xl">{section.heading}</h2>
                </div>
                <div className="mt-5 space-y-4 pl-0 sm:pl-13">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="font-body text-base leading-8 text-ink/72">{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="mt-5 space-y-3 rounded-2xl bg-mist/70 p-6">
                      {section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 font-body text-sm leading-7 text-ink/70"><span className="text-specialist" aria-hidden="true">→</span>{bullet}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 border-t border-mist pt-14" aria-labelledby="article-faqs">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-specialist">Common Questions</p>
            <h2 id="article-faqs" className="mt-3 font-heading text-3xl font-bold text-navy">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-4">
              {article.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-mist p-6 open:border-sky/30 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading font-semibold text-navy">{faq.question}<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-specialist transition group-open:rotate-45">+</span></summary>
                  <p className="mt-4 font-body text-sm leading-7 text-ink/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-slate-50 p-7" aria-labelledby="sources">
            <h2 id="sources" className="font-heading text-xl font-bold text-navy">Authoritative Sources</h2>
            <p className="mt-2 font-body text-xs leading-relaxed text-ink/50">Information was reviewed against the following government and public-health resources. Product selection should still be based on current test results and certified performance claims.</p>
            <ul className="mt-5 space-y-3">
              {article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="font-body text-sm font-semibold text-specialist underline-offset-4 hover:underline">{source.label} ↗</a></li>)}
            </ul>
          </section>

          <section className="mt-14" aria-labelledby="related-guides">
            <h2 id="related-guides" className="font-heading text-2xl font-bold text-navy">Related Water Guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((guide) => guide && <Link key={guide.slug} to={`/resources/${guide.slug}`} className="rounded-2xl border border-mist p-5 transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-md"><span className="font-heading text-sm font-semibold text-navy">{guide.title}</span><span className="mt-3 block font-body text-xs font-semibold text-specialist">Read guide →</span></Link>)}
            </div>
          </section>

          <div className="mt-12"><Link to="/resources" className="font-body text-sm font-semibold text-specialist hover:underline">← All resources</Link></div>
        </article>
      </main>

      <CtaBand heading="Want Answers About Your Own Water?" sub="Start with a personalized water report and a recommendation tied to your home—not a generic online checklist." />
    </>
  );
}
