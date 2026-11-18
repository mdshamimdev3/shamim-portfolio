import { Printer } from 'lucide-react';
import Seo from '../components/Seo';
import { resume } from '../data/resume';

function Block({ title, children }) {
  return (
    <section className="mt-8 border-t border-line pt-6 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8">
      <h3 className="mb-3 font-display text-lg font-semibold sm:mb-0">{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function Timeline({ items }) {
  return (
    <ul className="space-y-5">
      {items.map((it) => (
        <li key={`${it.title}-${it.org}`}>
          <p className="font-medium">{it.title}{it.org ? `, ${it.org}` : ''}</p>
          {it.period && <p className="text-sm text-muted">{it.period}</p>}
          {it.points?.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px]">
              {it.points.map((p) => (<li key={p}>{p}</li>))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Resume() {
  const r = resume;
  return (
    <>
      <Seo title="Resume" description="Resume of MD Shamim, PHP and Laravel web developer." />
      <div className="wrap print-reset pb-20 pt-32 md:pt-40">
        <div className="no-print mb-8 flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.03em]">Resume</h1>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-[15px] hover:border-ink"
          >
            <Printer className="size-4" aria-hidden="true" /> Print or save as PDF
          </button>
        </div>

        <article className="resume mx-auto max-w-3xl rounded-lg border border-line bg-surface p-6 sm:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">{r.name}</h2>
              <p className="mt-1 text-lg text-muted">{r.role}</p>
            </div>
            <ul className="space-y-1 text-[15px]">
              <li><a href={`mailto:${r.email}`} className="break-all hover:text-accent">{r.email}</a></li>
              <li><a href={r.github} className="hover:text-accent">{r.github.replace('https://', '')}</a></li>
            </ul>
          </div>

          <Block title="Summary"><p>{r.summary}</p></Block>

          <Block title="Skills">
            <dl className="space-y-3 text-[15px]">
              {r.skillGroups.map((g) => (
                <div key={g.title} className="sm:grid sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                  <dt className="font-medium">{g.title}</dt>
                  <dd className="text-muted">{g.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="Projects">
            <ul className="space-y-5">
              {r.projects.map((p) => (
                <li key={p.slug}>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-[15px] text-muted">{p.summary}</p>
                  {(p.live || p.github) && (
                    <p className="mt-1 break-all text-sm">
                      <a href={p.live || p.github} className="hover:text-accent">{(p.live || p.github).replace('https://', '')}</a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Block>

          {r.experience.length > 0 && <Block title="Experience"><Timeline items={r.experience} /></Block>}
          {r.education.length > 0 && <Block title="Education"><Timeline items={r.education} /></Block>}
          {r.certifications.length > 0 && <Block title="Certifications"><Timeline items={r.certifications} /></Block>}
        </article>
      </div>
    </>
  );
}
