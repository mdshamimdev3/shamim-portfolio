import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from '../../components/GithubIcon';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import { projects } from '../../data/site';

export default function SelectedWork() {
  return (
    <section aria-labelledby="work-title" className="wrap py-20 md:py-28">
      <SectionHeading id="work-title" title="Selected work" to="/projects" linkLabel="All projects">
        Three projects, each with its own case study.
      </SectionHeading>

      <div className="border-b border-line">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <article className="group relative grid gap-5 border-t border-line py-8 transition-colors hover:bg-surface md:-mx-4 md:grid-cols-12 md:gap-8 md:px-4">
              <h3 className="text-2xl font-semibold md:col-span-4 md:text-3xl">
                <Link
                  to={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-2 transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
                >
                  {p.name}
                  <ArrowUpRight className="size-5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </h3>
              <p className="text-muted md:col-span-5">{p.summary}</p>
              <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
                <span className="rounded-full border border-line px-3 py-0.5 text-sm">{p.status}</span>
                <div className="relative z-10 flex gap-4 text-sm">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-accent">
                      Live site <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-accent">
                      <GithubIcon className="size-3.5" /> Source
                    </a>
                  )}
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 md:col-span-12">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-sm bg-accent-soft px-2.5 py-1 text-[13px] text-ink">{t}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
