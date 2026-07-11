import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { business } from "../data/site";

export function SpanishPage() {
  return (
    <>
      <PageHeader
        eyebrow="Español"
        title="Filtración de Agua en Asheville, NC"
        subtitle="Distribuidor oficial de Honest Water Co. Sistemas de filtración y ablandamiento para toda la casa, instalados por un plomero con licencia de Carolina del Norte."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="font-body text-ink/70">
          Página en español — contenido completo próximamente. Para un reporte
          de agua gratuito, llámenos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={business.phoneHref}
            className="rounded-full bg-amber px-6 py-3 font-body text-sm font-semibold text-ink shadow-md transition hover:brightness-95"
          >
            Llamar {business.phone}
          </a>
          <Link
            to="/"
            className="rounded-full border-2 border-navy px-6 py-3 font-body text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            English site →
          </Link>
        </div>
        <p className="mx-auto mt-8 max-w-md rounded-lg bg-mist px-4 py-3 font-body text-xs text-ink/60">
          Placeholder Spanish landing page — full translation to be added.
        </p>
      </section>
    </>
  );
}
