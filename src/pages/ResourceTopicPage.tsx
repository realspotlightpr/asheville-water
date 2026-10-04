import { Link, useParams } from "react-router-dom";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { resourceTopicBySlug, resourceTopics } from "../data/resourceTopics";
import { siteUrl } from "../data/seo";
import { NotFound } from "./NotFound";

export function ResourceTopicPage() {
  const { topic: topicSlug } = useParams();
  const topic = resourceTopicBySlug(topicSlug);
  if (!topic) return <NotFound />;

  const path = `/resources/topics/${topic.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: topic.title,
      description: topic.description,
      url: `${siteUrl}${path}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: topic.links.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: `${siteUrl}${item.path}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources/` },
        { "@type": "ListItem", position: 3, name: topic.shortTitle, item: `${siteUrl}${path}/` },
      ],
    },
  ];

  return (
    <>
      <Seo title={`${topic.shortTitle} Guides | Asheville Water Specialists`} description={topic.description} path={path} schema={schema} />
      <header className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 font-body text-xs text-white/55">
            <Link to="/">Home</Link><span>/</span><Link to="/resources">Resources</Link><span>/</span><span className="text-sky">{topic.shortTitle}</span>
          </nav>
          <p className="mt-8 font-body text-xs font-bold uppercase tracking-[0.2em] text-sky">Water Education Topic Hub</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl">{topic.title}</h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-8 text-white/75">{topic.intro}</p>
        </div>
      </header>
      <main className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topic.links.map((item) => (
              <Link key={item.path} to={item.path} className="rounded-2xl border border-mist p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-md">
                <h2 className="font-heading text-xl font-bold text-navy">{item.title}</h2>
                <p className="mt-3 font-body text-sm leading-7 text-ink/65">{item.description}</p>
                <span className="mt-5 block font-body text-sm font-semibold text-specialist">Read the guide →</span>
              </Link>
            ))}
          </div>
          <section className="mt-16 border-t border-mist pt-12">
            <h2 className="font-heading text-2xl font-bold text-navy">Explore another water topic</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {resourceTopics.filter((item) => item.slug !== topic.slug).map((item) => (
                <Link key={item.slug} to={`/resources/topics/${item.slug}`} className="rounded-full border border-sky/30 px-4 py-2 font-body text-sm font-semibold text-specialist hover:bg-specialist hover:text-white">{item.shortTitle}</Link>
              ))}
              <Link to="/resources/library" className="rounded-full bg-navy px-4 py-2 font-body text-sm font-semibold text-white">All guides</Link>
            </div>
          </section>
        </div>
      </main>
      <CtaBand heading="Need an Answer About Your Water?" sub="Start with your water source, concerns, and available test results. We will help you identify the most useful next step." />
    </>
  );
}
