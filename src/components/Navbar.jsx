import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navLinks, site } from '../data/site';
import { getLenis } from '../lib/lenis';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll while the mobile menu is open; Escape and desktop resize close it.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add('menu-open');
    getLenis()?.stop();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      root.classList.remove('menu-open');
      getLenis()?.start();
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const desktopLink = ({ isActive }) =>
    `relative py-1 text-[15px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
      isActive
        ? 'text-ink after:scale-x-100'
        : 'text-muted hover:text-ink after:scale-x-0 hover:after:scale-x-100'
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled && !open
            ? 'border-line bg-bg/80 backdrop-blur-md'
            : 'border-transparent'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between lg:h-[72px]">
          <Link
            to="/"
            onClick={close}
            aria-label={`${site.name}, home`}
            className="inline-flex items-center gap-2.5 font-display text-[17px] font-bold tracking-[0.14em]"
          >
            <span className="size-2 rounded-sm bg-accent" aria-hidden="true" />
            {site.wordmark}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={desktopLink}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              to="/contact"
              className="group hidden items-center gap-1.5 rounded-md bg-ink px-4 py-2.5 text-[15px] font-medium text-bg transition-colors hover:bg-accent hover:text-on-accent lg:inline-flex"
            >
              Let&rsquo;s talk
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative inline-flex size-10 items-center justify-center rounded-md border border-line lg:hidden"
            >
              <span className="relative block h-[10px] w-5" aria-hidden="true">
                <span
                  className="absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300"
                  style={{ top: open ? '50%' : 0, transform: open ? 'translateY(-50%) rotate(45deg)' : 'none' }}
                />
                <span
                  className="absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300"
                  style={{ top: open ? '50%' : 'calc(100% - 1.5px)', transform: open ? 'translateY(-50%) rotate(-45deg)' : 'none' }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-bg transition-[clip-path] duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] lg:hidden ${
          open ? '[clip-path:inset(0)]' : '[clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col justify-between gap-10 pb-10 pt-28">
          <ul className="flex flex-col">
            {navLinks.map((l, i) => (
              <li
                key={l.to}
                className={`border-b border-line transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: open ? `${150 + i * 55}ms` : '0ms' }}
              >
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `flex min-h-14 items-center justify-between py-3 font-display text-3xl font-semibold ${isActive ? 'text-accent' : 'text-ink'}`
                  }
                >
                  {l.label}
                  <ArrowUpRight className="size-5 text-muted" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            className={`flex flex-col gap-4 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: open ? '520ms' : '0ms' }}
          >
            <Link
              to="/contact"
              onClick={close}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-5 text-base font-medium text-bg"
            >
              Let&rsquo;s talk
            </Link>
            <a href={`mailto:${site.email}`} className="break-all text-center text-sm text-muted hover:text-ink">
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
