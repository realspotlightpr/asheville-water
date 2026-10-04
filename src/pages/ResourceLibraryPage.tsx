import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { newRankingPages } from "../data/rankingPages";

export function ResourceLibraryPage() {
  const groups = new Map<string, typeof newRankingPages>();
  newRankingPages.forEach((page) => {
    const key = page.title.charAt(0).toUpperCase();
    groups.set(key, [...(groups.get(key) ?? []), page]);
  });

  return (
    <>
      <Seo title="All Water Treatment Guides | Asheville Water Specialists" description="Browse the complete Asheville Water Specialists library covering testing, filtration, softeners, reverse osmosis, private wells, installation, and maintenance." path="/resources/library" />
      <header className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="font-body text-xs text-white/55"><Link to="/">Home</Link> / <Link to="/resources">Resources</Link> / <span className="text-sky">All Guides</span></nav>
          <h1 className="mt-6 font-heading text-4xl font-extrabold sm:text-5xl">Complete Water Guide Library</h1>
          <p className="mt-5 max-w-3xl font-body text-lg text-white/75">Use the focused topic hubs for the best starting points, or browse every published homeowner guide below.</p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {[...groups.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([letter, pages]) => (
          <section key={letter} className="mb-14" aria-labelledby={`letter-${letter}`}>
            <h2 id={`letter-${letter}`} className="border-b border-mist pb-3 font-heading text-3xl font-bold text-navy">{letter}</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {pages.sort((a, b) => a.title.localeCompare(b.title)).map((page) => (
                <li key={page.slug}><Link to={page.slug} className="font-body text-sm leading-6 text-specialist hover:underline">{page.title}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
