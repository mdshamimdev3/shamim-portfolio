import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import Availability from './Availability';
import GithubIcon from './GithubIcon';
import { navLinks, projects, site } from '../data/site';

const linkCls = 'text-[15px] text-muted transition-colors hover:text-ink';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-12 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="inline-flex items-center gap-2.5 font-display text-[17px] font-bold tracking-[0.14em]">
            <span className="size-2 rounded-sm bg-accent" aria-hidden="true" />
            {site.wordmark}
          </p>
          <p className="mt-4 max-w-sm text-[15px] text-muted">
            PHP and Laravel developer building multi-role platforms, e-commerce stores and admin
            dashboards.
          </p>
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium underline decoration-line underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
          >
            Let&rsquo;s talk about your project
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="font-display text-base font-semibold">Pages</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkCls}>{l.label}</Link>
              </li>
            ))}
            <li><Link to="/contact" className={linkCls}>Contact</Link></li>
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="font-display text-base font-semibold">Work</h2>
          <ul className="mt-4 space-y-2.5">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`} className={linkCls}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-base font-semibold">Elsewhere</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={site.github} target="_blank" rel="noreferrer" className={`${linkCls} inline-flex items-center gap-2`}>
                <GithubIcon className="size-4" /> GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`${linkCls} inline-flex items-center gap-2 break-all`}>
                <Mail className="size-4 shrink-0" aria-hidden="true" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Availability />
        </div>
      </div>
    </footer>
  );
}
