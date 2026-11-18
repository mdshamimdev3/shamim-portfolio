export default function TechStack({ items = [] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent"
        >
          <h3 className="font-semibold">{item.name}</h3>

          <p className="mt-2 text-sm leading-7 text-muted">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}