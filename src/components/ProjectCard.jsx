import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project: p }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-ink">
      <ProjectVisual slug={p.slug} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-semibold">
            <Link
              to={`/projects/${p.slug}`}
              className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
            >
              {p.name}
              <span className="sr-only">, read the case study</span>
            </Link>
          </h2>
          <span className="shrink-0 rounded-full border border-line px-3 py-0.5 text-sm">{p.status}</span>
        </div>
        <p className="mt-3 text-muted">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-sm bg-accent-soft px-2.5 py-1 text-[13px]">{t}</li>
          ))}
        </ul>
        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
          <span className="inline-flex items-center gap-1 font-medium text-accent">
            Case study <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </span>
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
    </article>
  );
}
