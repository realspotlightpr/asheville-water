import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-heading text-6xl font-extrabold text-specialist">404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-navy">
        Page Not Found
      </h1>
      <p className="mt-3 font-body text-ink/70">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-amber px-7 py-3.5 font-body text-base font-semibold text-ink shadow-md transition hover:brightness-95"
      >
        Back to Home
      </Link>
    </section>
  );
}
