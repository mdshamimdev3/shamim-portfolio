import { ArrowUpRight } from 'lucide-react';
import GithubIcon from '../../components/GithubIcon';
import SectionHeading from '../../components/SectionHeading';
import { projects, site } from '../../data/site';

export default function GithubAndFeedback() {
  const edish = projects.find((p) => p.slug === 'e-dish');
  return (
    <section aria-labelledby="elsewhere-title" className="border-t border-line">
      <div className="wrap py-20 md:py-28">
        <SectionHeading id="elsewhere-title" title="Open source and feedback" />
        <div className="grid gap-6 lg:grid-cols-2">
          {/* GitHub: static UI. No fabricated activity data. */}
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <GithubIcon className="size-6" />
              <h3 className="text-xl font-semibold">GitHub</h3>
            </div>
            <a href={site.github} target="_blank" rel="noreferrer" className="group mt-5 flex items-center justify-between rounded-md border border-line bg-bg px-4 py-3 hover:border-ink">
              <span>
                <span className="block font-medium">@{site.githubHandle}</span>
                <span className="block text-sm text-muted">Public profile</span>
              </span>
              <ArrowUpRight className="size-4 text-muted group-hover:text-accent" aria-hidden="true" />
            </a>
            <a href={edish.github} target="_blank" rel="noreferrer" className="group mt-3 flex items-center justify-between rounded-md border border-line bg-bg px-4 py-3 hover:border-ink">
              <span>
                <span className="block font-medium">DISH-Ecommerce</span>
                <span className="block text-sm text-muted">Laravel e-commerce application</span>
              </span>
              <ArrowUpRight className="size-4 text-muted group-hover:text-accent" aria-hidden="true" />
            </a>
            <p className="mt-5 text-sm text-muted">
              Live contribution data isn&rsquo;t connected yet. This panel is a static layout for now.
            </p>
          </div>

          {/* Testimonials: honest empty state, nothing invented. */}
          <div className="flex flex-col justify-center rounded-lg border border-dashed border-line p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Client feedback</h3>
            <p className="mt-3 max-w-prose text-muted">
              No testimonials are published yet. Real feedback will appear here once clients have
              agreed to share it.
            </p>
            <p className="mt-5 inline-flex w-fit rounded-full border border-line px-3 py-0.5 text-sm text-muted">
              Placeholder section
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
