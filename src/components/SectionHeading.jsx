import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function SectionHeading({ id, title, children, to, linkLabel }) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 id={id} className="font-display text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        {children && <p className="mt-3 max-w-prose text-muted">{children}</p>}
      </div>
      {to && (
        <Link
          to={to}
          className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
        >
          {linkLabel}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
