type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="page-header relative isolate overflow-hidden border-b border-sky/10 bg-[linear-gradient(135deg,#f7fbff_0%,#eef6fd_50%,#f9fcff_100%)]">
      <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-sky/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-72 w-72 rounded-full bg-specialist/8 blur-3xl" aria-hidden="true" />
      <div className="page-header-enter relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-specialist">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-[18ch] text-balance font-heading text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-3xl text-pretty font-body text-base leading-7 text-ink/67 sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
