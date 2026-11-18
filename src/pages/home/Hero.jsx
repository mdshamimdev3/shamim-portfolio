import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import Button from '../../components/Button';
import Availability from '../../components/Availability';
import { projects } from '../../data/site';

const headline = ['Laravel applications', 'with clear structure', 'and careful details.'];

function RoutePanel() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-[#0f1420] text-[#e8eaf0] shadow-[0_24px_60px_-30px_rgba(15,20,32,0.6)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
      </div>
      <div className="px-4 py-5 font-mono text-[13px] leading-6 sm:px-6">
        <p className="h-row text-[#9aa3b2]">
          <span className="text-[#8f88ff]">$</span> php artisan route:list --path=projects
        </p>
        <ul className="mt-4 space-y-1">
          {projects.map((p) => (
            <li key={p.slug} className="h-row">
              <Link
                to={`/projects/${p.slug}`}
                className="group -mx-3 block rounded-md px-3 py-2.5 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06]"
              >
                <span className="flex items-center gap-3">
                  <span className="w-8 shrink-0 text-[#52d19b]">GET</span>
                  <span className="min-w-0 flex-1 truncate">/projects/{p.slug}</span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-[#8f88ff] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-0.5 block pl-11 font-sans text-[13px] leading-5 text-[#9aa3b2]">
                  {p.name}: {p.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="h-row mt-4 text-[#9aa3b2]" aria-hidden="true">
          <span className="text-[#8f88ff]">$</span> <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-[#e8eaf0]" />
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const root = useRef(null);

  // The single orchestrated moment on the page: headline, copy, then the route list.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.h-line > span', { yPercent: 110, duration: 0.9, stagger: 0.1 })
          .from('.h-fade', { opacity: 0, y: 12, duration: 0.6, stagger: 0.08 }, '-=0.5')
          .from('.h-row', { opacity: 0, x: -10, duration: 0.5, stagger: 0.12 }, '-=0.7');
      },
      root,
    );
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} aria-labelledby="hero-title" className="wrap grid items-center gap-14 pb-20 pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-44">
      <div className="lg:col-span-7">
        <p className="h-fade mb-6 text-[15px] text-muted">MD Shamim, PHP / Laravel web developer</p>
        <h1 id="hero-title" className="text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
          {headline.map((line) => (
            <span key={line} className="h-line block overflow-hidden pb-[0.1em]">
              <span className="block">{line}</span>
            </span>
          ))}
        </h1>
        <p className="h-fade mt-7 max-w-xl text-lg text-muted">
          I&rsquo;m MD Shamim, a PHP and Laravel developer. I build multi-role platforms, e-commerce
          stores and admin dashboards, from the database to the interface.
        </p>
        <div className="h-fade mt-9 flex flex-wrap items-center gap-3">
          <Button to="/projects">Explore my work</Button>
          <Button to="/contact" variant="secondary">Let&rsquo;s talk</Button>
        </div>
        <div className="h-fade mt-8">
          <Availability />
        </div>
      </div>

      <div className="lg:col-span-5">
        <RoutePanel />
      </div>
    </section>
  );
}
