// Shared opening block for inner pages. Uses a div, not <header>, so print styles can target the navbar alone.
export default function PageHeader({ title, children, className = '' }) {
  return (
    <div className={`wrap pb-12 pt-32 md:pb-16 md:pt-40 ${className}`}>
      <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
        {title}
      </h1>
      {children && <p className="mt-5 max-w-xl text-lg text-muted">{children}</p>}
    </div>
  );
}
