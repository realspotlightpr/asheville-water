import { useParams, Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { NotFound } from "./NotFound";
import { resourceArticles } from "../data/site";

export function ResourceArticlePage() {
  const { slug } = useParams();
  const article = resourceArticles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  return (
    <>
      <PageHeader eyebrow="Resources" title={article.title} subtitle={article.blurb} />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="font-body text-ink/70">
          <p>
            This is a starter article page. The full guide — with plain-language
            explanations, local Western North Carolina context, and honest
            recommendations — will live here.
          </p>
          <p className="mt-4 rounded-lg bg-mist px-4 py-3 font-body text-xs text-ink/60">
            Placeholder content — to be written.
          </p>
        </div>

        <div className="mt-10">
          <Link to="/resources" className="font-body text-sm font-semibold text-specialist hover:underline">
            ← All resources
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
