import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { processSteps, serviceDetails } from '../data/services';

export default function Services() {
  return (
    <>
      <Seo title="Services" description="Laravel development, backend systems, admin dashboards, e-commerce and API integration by MD Shamim." />
      <PageHeader title="Services">
        Laravel applications and the systems around them: back ends, dashboards, stores and APIs.
      </PageHeader>

      <section aria-label="What I offer" className="wrap pb-20 md:pb-28">
        <div className="border-b border-line">
          {serviceDetails.map((s) => (
            <article key={s.id} className="grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold md:text-3xl">{s.title}</h2>
                <p className="mt-3 max-w-md text-muted">{s.text}</p>
                <Link
                  to={`/contact?type=${s.id}`}
                  className="group mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium underline decoration-line underline-offset-[6px] hover:text-accent hover:decoration-accent"
                >
                  Ask about this
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <h3 className="text-sm text-muted">What you get</h3>
                <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px]">
                      <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-title" className="border-y border-line bg-surface">
        <div className="wrap py-20 md:py-28">
          <SectionHeading id="process-title" title="How a project runs">
            Five steps, in this order.
          </SectionHeading>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <li key={step.title} className="border-t border-ink pt-5">
                <span className="font-mono text-sm text-muted">Step {i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="inquiry-title" className="wrap py-20 md:py-28">
        <div className="rounded-lg bg-ink px-6 py-14 text-bg sm:px-12 md:py-16">
          <h2 id="inquiry-title" className="max-w-xl text-3xl font-semibold md:text-4xl">Send the details of your project.</h2>
          <p className="mt-4 max-w-lg opacity-75">
            Pricing depends on scope, so there are no fixed packages. Describe what you need and I&rsquo;ll reply by email with questions or an estimate.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-bg px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-accent hover:text-on-accent"
          >
            Start an inquiry
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
