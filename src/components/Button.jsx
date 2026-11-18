import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-medium transition-colors duration-200';
const variants = {
  primary: 'bg-ink text-bg hover:bg-accent hover:text-on-accent',
  secondary: 'border border-line bg-transparent text-ink hover:border-ink',
};

// Renders a router <Link> when `to` is given, otherwise a plain anchor.
export default function Button({ to, href, variant = 'primary', icon = true, children, ...rest }) {
  const cls = `${base} ${variants[variant]}`;
  const arrow = icon && (
    <ArrowUpRight
      className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      aria-hidden="true"
    />
  );
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
        {arrow}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
      {arrow}
    </a>
  );
}
