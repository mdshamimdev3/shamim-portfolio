import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectNavigation({ previous, next }) {
  return (
    <section className="wrap border-t border-line py-12 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Link
            to={previous.to}
            className="group rounded-lg border border-line p-6 transition-colors hover:border-accent"
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
              <ArrowLeft className="size-3.5" />
              Previous project
            </span>
            <h3 className="mt-4 text-2xl font-semibold group-hover:text-accent">
              {previous.name}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            to={next.to}
            className="group rounded-lg border border-line p-6 text-left transition-colors hover:border-accent sm:text-right"
          >
            <span className="flex items-center justify-end gap-2 text-xs uppercase tracking-widest text-muted">
              Next project
              <ArrowRight className="size-3.5" />
            </span>
            <h3 className="mt-4 text-2xl font-semibold group-hover:text-accent">
              {next.name}
            </h3>
          </Link>
        )}
      </div>
    </section>
  );
}
