import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { site } from '../../data/site';

export default function ContactCta() {
  return (
    <section aria-labelledby="cta-title" className="wrap pb-20 md:pb-28">
      <div className="rounded-lg bg-ink px-6 py-14 text-bg sm:px-12 md:py-20">
        <h2 id="cta-title" className="max-w-2xl text-3xl font-semibold md:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 max-w-lg text-lg opacity-75">
          Tell me what you&rsquo;re building and what it needs to do. I&rsquo;ll reply by email.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-bg px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-accent hover:text-on-accent"
          >
            Let&rsquo;s talk
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 break-all text-[15px] underline decoration-current/30 underline-offset-[6px] hover:decoration-current"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
