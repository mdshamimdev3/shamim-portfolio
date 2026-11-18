import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';
import { services } from '../../data/site';

export default function ServicesOverview() {
  return (
    <section aria-labelledby="services-title" className="border-y border-line bg-surface">
      <div className="wrap py-20 md:py-28">
        <SectionHeading id="services-title" title="What I can build for you" to="/services" linkLabel="Services and process">
          Web applications and the systems behind them.
        </SectionHeading>
        <ul className="grid gap-x-12 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.title} className="border-t border-line">
              <Link to="/services" className="group flex items-start justify-between gap-6 py-6">
                <span>
                  <span className="block font-display text-xl font-semibold transition-colors group-hover:text-accent">{s.title}</span>
                  <span className="mt-1 block text-[15px] text-muted">{s.text}</span>
                </span>
                <ArrowUpRight className="mt-1.5 size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
