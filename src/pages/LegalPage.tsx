import { PageHeader } from "../components/PageHeader";

type LegalPageProps = {
  title: string;
  intro: string;
};

export function LegalPage({ title, intro }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} subtitle={intro} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="rounded-lg bg-mist px-4 py-3 font-body text-sm text-ink/60">
          Placeholder page — {title.toLowerCase()} content to be added.
        </p>
      </section>
    </>
  );
}
