import Reveal from '../Reveal';

export default function CaseStudySection({
  eyebrow,
  title,
  description,
  children,
  className = '',
}) {
  return (
    <section className={`wrap py-12 md:py-16 ${className}`}>
      <Reveal>
        <div className="mb-8 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 max-w-2xl leading-8 text-muted">
              {description}
            </p>
          )}
        </div>

        {children}
      </Reveal>
    </section>
  );
}