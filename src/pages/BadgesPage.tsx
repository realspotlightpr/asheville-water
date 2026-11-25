import { Seo } from "../components/Seo";
import { PageHeader } from "../components/PageHeader";
import { DirectoryBadge } from "../components/DirectoryBadge";
import badges from "../data/directoryBadges.json";

export function BadgesPage() {
  return (
    <>
      <Seo path="/badges/" title="Business Badges & Directory Profiles | Asheville Water Specialists"
        description="Find Asheville Water Specialists on Best Rated Company, Great Local Pros and Houzz." />
      <PageHeader eyebrow="Asheville Water Specialists" title="Business badges & directory profiles"
        subtitle="Open a profile to see how each directory lists our business." />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3">
        {badges.map(badge => (
          <section key={badge.name} className="flex flex-col rounded-2xl border border-navy/10 bg-white p-7">
            <div className="flex min-h-20 items-center"><DirectoryBadge badge={badge} /></div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-navy">{badge.name}</h2>
            <p className="mb-6 mt-3 font-body leading-7 text-ink/75">{badge.description}</p>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-specialist underline underline-offset-4">
              <a href={badge.listing} rel="nofollow" aria-label={`Our listing on ${badge.name}`}>Our listing</a>
              <a href={badge.directory} aria-label={`Browse ${badge.name}`}>Browse directory</a>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
