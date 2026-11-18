import SectionHeading from '../../components/SectionHeading';
import { philosophy } from '../../data/site';

export default function Philosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="wrap py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="philosophy-title" title="How I approach development" />
        </div>
        <div className="space-y-10 lg:col-span-7 lg:col-start-6">
          {philosophy.map((p) => (
            <div key={p.title} className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 max-w-prose text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
