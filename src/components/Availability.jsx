import { site } from '../data/site';

export default function Availability({ className = '' }) {
  const { open, label } = site.availability;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm ${className}`}
    >
      <span className="relative flex size-2" aria-hidden="true">
        {open && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
        )}
        <span className={`relative inline-flex size-2 rounded-full ${open ? 'bg-ok' : 'bg-muted'}`} />
      </span>
      {label}
    </span>
  );
}
