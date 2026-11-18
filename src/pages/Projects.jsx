import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SearchField from '../components/SearchField';
import FilterChips from '../components/FilterChips';
import EmptyState from '../components/EmptyState';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/site';

const categories = ['All', ...new Set(projects.flatMap((p) => p.categories))];

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = category === 'All' || p.categories.includes(category);
      const haystack = [p.name, p.summary, p.status, ...p.tags, ...p.categories].join(' ').toLowerCase();
      return inCategory && (!q || haystack.includes(q));
    });
  }, [query, category]);

  const reset = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <>
      <Seo title="Projects" description="Projects by MD Shamim: NOOR, STYLEZO and E-DISH. Laravel platforms and e-commerce applications." />
      <PageHeader title="Projects">
        A multi-restaurant platform and two e-commerce applications. Each opens into a case study.
      </PageHeader>

      <section aria-label="Project list" className="wrap pb-20 md:pb-28">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <FilterChips label="Filter by category" options={categories} value={category} onChange={setCategory} />
          <SearchField id="project-search" label="Search projects" value={query} onChange={setQuery} placeholder="Search by name or technology" />
        </div>

        <p className="mb-6 text-sm text-muted" aria-live="polite">
          Showing {results.length} of {projects.length} projects. Previews are illustrative layouts; screenshots arrive with the case studies.
        </p>

        {results.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (<ProjectCard key={p.slug} project={p} />))}
          </div>
        ) : (
          <EmptyState title="No projects match" actionLabel="Clear search and filters" onAction={reset}>
            Try a different word, or switch the category back to All.
          </EmptyState>
        )}
      </section>
    </>
  );
}
