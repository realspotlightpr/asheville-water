type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-specialist">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-navy sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-ink/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
