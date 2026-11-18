import Button from '../../components/Button';
import SectionHeading from '../../components/SectionHeading';

const roles = [
  { name: 'Customer', text: 'Browses restaurants, builds a cart and checks out.' },
  { name: 'Restaurant', text: 'Manages its own restaurant, with data kept separate from every other one.' },
  { name: 'Rider', text: 'Handled as its own role within the delivery flow.' },
];

export default function Spotlight() {
  return (
    <section aria-labelledby="spot-title" className="wrap py-20 md:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="spot-title" title="Featured case study: NOOR" />
          <p className="-mt-6 text-muted md:-mt-10">
            NOOR is a multi-restaurant food delivery and management platform. The interesting part
            is the structure: several kinds of users share one application, and each sees only
            what belongs to them.
          </p>
          <ul className="mt-6 space-y-2 text-[15px]">
            {['Multi-role architecture', 'Restaurant management', 'Customer ordering, cart and checkout', 'Rider management', 'Role-based access and restaurant data isolation'].map((f) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/projects/noor">Read the case study</Button>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-surface p-5 sm:p-7 lg:col-span-7">
          <p className="text-sm text-muted">Role-based access sits in front of every request</p>
          <ul className="mt-5 space-y-3">
            {roles.map((r) => (
              <li key={r.name} className="grid gap-1 rounded-md border border-line bg-bg p-4 sm:grid-cols-[7rem_1fr] sm:gap-5">
                <span className="font-display text-lg font-semibold">{r.name}</span>
                <span className="text-[15px] text-muted">{r.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-md bg-accent-soft px-4 py-3 text-[15px]">
            One Laravel application, separated by role and by restaurant.
          </p>
        </div>
      </div>
    </section>
  );
}
