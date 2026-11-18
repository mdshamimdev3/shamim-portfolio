// Abstract layout sketches. These are illustrations, not screenshots.
const bar = 'rounded-sm bg-ink/15';

function Noor() {
  return (
    <div className="grid h-full grid-cols-3 gap-3 p-5">
      {['Customer', 'Restaurant', 'Rider'].map((r, i) => (
        <div key={r} className="flex flex-col gap-2 rounded-md border border-ink/15 bg-bg p-3">
          <span className="text-[11px] font-medium">{r}</span>
          <span className={`h-1.5 w-full ${bar}`} />
          <span className={`h-1.5 w-3/4 ${bar}`} />
          <span className={`mt-auto h-5 rounded-sm ${i === 1 ? 'bg-accent' : 'bg-ink/15'}`} />
        </div>
      ))}
    </div>
  );
}

function Stylezo() {
  return (
    <div className="grid h-full grid-cols-3 content-center gap-3 p-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-1.5">
          <div className={`aspect-[4/3] rounded-sm ${i === 1 ? 'bg-accent' : 'bg-ink/10'}`} />
          <div className={`h-1.5 w-4/5 ${bar}`} />
          <div className={`h-1.5 w-1/3 ${bar}`} />
        </div>
      ))}
    </div>
  );
}

function EDish() {
  return (
    <div className="flex h-full gap-3 p-5">
      <div className="w-1/4 space-y-2 rounded-md border border-ink/15 bg-bg p-3">
        <span className="block h-2 w-2/3 rounded-sm bg-accent" />
        {[0, 1, 2, 3].map((i) => (<span key={i} className={`block h-1.5 w-full ${bar}`} />))}
      </div>
      <div className="flex-1 space-y-2 rounded-md border border-ink/15 bg-bg p-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`h-1.5 flex-1 ${bar}`} />
            <span className={`h-1.5 w-8 ${bar}`} />
            <span className={`h-3 w-6 rounded-sm ${i === 0 ? 'bg-accent' : 'bg-ink/10'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

const map = { noor: Noor, stylezo: Stylezo, 'e-dish': EDish };

export default function ProjectVisual({ slug }) {
  const Visual = map[slug];
  return (
    <div className="aspect-[16/10] overflow-hidden border-b border-line bg-accent-soft" aria-hidden="true">
      {Visual && <Visual />}
    </div>
  );
}
