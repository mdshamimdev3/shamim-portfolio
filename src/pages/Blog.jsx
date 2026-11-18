import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SearchField from '../components/SearchField';
import FilterChips from '../components/FilterChips';
import EmptyState from '../components/EmptyState';
import { blogCategories, posts } from '../data/blog';

const categories = ['All', ...blogCategories];

function SampleBadge() {
  return <span className="rounded-full border border-line px-3 py-0.5 text-sm text-muted">Sample draft</span>;
}

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCat = category === 'All' || p.category === category;
      return inCat && (!q || `${p.title} ${p.summary} ${p.category}`.toLowerCase().includes(q));
    });
  }, [query, category]);

  const filtering = query.trim() !== '' || category !== 'All';
  const featured = !filtering ? results.find((p) => p.featured) : null;
  const rest = featured ? results.filter((p) => p.id !== featured.id) : results;
  const reset = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <>
      <Seo title="Blog" description="Notes on Laravel, PHP, MySQL and web development by MD Shamim. Sample outlines for now." />
      <PageHeader title="Blog">
        Notes on Laravel, PHP, MySQL and building for the web.
      </PageHeader>

      <section aria-label="Articles" className="wrap pb-20 md:pb-28">
        <p className="mb-8 rounded-md border border-dashed border-line px-4 py-3 text-[15px] text-muted">
          <strong className="font-medium text-ink">Sample content.</strong> No articles are published yet. The cards below are outlines of topics I plan to cover, with no dates.
        </p>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <FilterChips label="Filter by category" options={categories} value={category} onChange={setCategory} />
          <SearchField id="blog-search" label="Search articles" value={query} onChange={setQuery} placeholder="Search articles" />
        </div>

        <p className="sr-only" aria-live="polite">{results.length} articles shown</p>

        {results.length === 0 ? (
          <EmptyState title="No articles match" actionLabel="Clear search and filters" onAction={reset}>
            Try a different word or choose another category.
          </EmptyState>
        ) : (
          <>
            {featured && (
              <article className="mb-10 grid gap-8 rounded-lg border border-line bg-surface p-6 sm:p-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-sm bg-accent-soft px-2.5 py-1 text-[13px]">{featured.category}</span>
                    <SampleBadge />
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold md:text-4xl">{featured.title}</h2>
                  <p className="mt-4 max-w-prose text-lg text-muted">{featured.summary}</p>
                  <p className="mt-6 text-sm text-muted">Outline only. Not published.</p>
                </div>
                <div className="hidden rounded-md border border-line bg-bg p-6 lg:col-span-5 lg:block" aria-hidden="true">
                  <div className="space-y-3 font-mono text-[13px] text-muted">
                    <p><span className="text-accent">class</span> Policy</p>
                    <p className="pl-4">view()</p>
                    <p className="pl-4">update()</p>
                    <p className="pl-4">delete()</p>
                  </div>
                </div>
              </article>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <article key={p.id} className="flex flex-col rounded-lg border border-line p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-sm bg-accent-soft px-2.5 py-1 text-[13px]">{p.category}</span>
                    <SampleBadge />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
                  <p className="mt-3 text-[15px] text-muted">{p.summary}</p>
                  <p className="mt-auto pt-5 text-sm text-muted">Outline only. Not published.</p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
