export default function FilterChips({ label, options, value, onChange }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o)}
            className={`min-h-10 rounded-full border px-4 text-[14px] transition-colors ${
              active ? 'border-ink bg-ink text-bg' : 'border-line text-muted hover:border-ink hover:text-ink'
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
