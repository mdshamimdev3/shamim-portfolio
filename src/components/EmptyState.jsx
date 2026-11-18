export default function EmptyState({ title, children, actionLabel, onAction }) {
  return (
    <div className="rounded-lg border border-dashed border-line px-6 py-14 text-center">
      <p className="font-display text-xl font-semibold">{title}</p>
      <p className="mx-auto mt-2 max-w-sm text-muted">{children}</p>
      {onAction && (
        <button type="button" onClick={onAction} className="mt-6 rounded-md border border-line px-5 py-2.5 text-[15px] hover:border-ink">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
