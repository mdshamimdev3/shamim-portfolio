import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudyHero({
  number,
  name,
  category,
  title,
  description,
  technologies = [],
  live,
  github,
}) {
  return (
    <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
      <Link
        to="/projects"
        className="mb-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-4" />
        Back to projects
      </Link>

      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {number} / {category}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
            {name}
            <span className="text-accent">.</span>
          </h1>

          <h2 className="mt-5 max-w-2xl text-xl font-medium leading-relaxed md:text-2xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-muted">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              >
                Visit live project <ArrowUpRight className="size-4" />
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                View source code <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-sm border border-line px-3 py-2 text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
