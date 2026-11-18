import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { projects, skillGroups } from '../data/site';

const practice = {
  noor: 'Structuring several kinds of users, with separate access and separate data, inside one application.',
  stylezo: 'Building the shopping experience: a responsive storefront backed by product management.',
  'e-dish': 'Core application CRUD, order management, an admin dashboard, and customer features such as wishlists and reviews.',
};

const learning = [
  { title: 'Learn by building whole projects', text: 'A complete application exposes problems that exercises never do: roles, edge cases, data that changes shape.' },
  { title: 'Return to the fundamentals', text: 'Framework features come and go. Database design, HTTP and clean structure keep paying off.' },
  { title: 'Review and refine', text: 'The first version works. The second version is clearer. I go back and tidy what I wrote.' },
  { title: 'Keep the tools small', text: 'Reach for a new dependency only when it solves a real problem the project has.' },
];

const layers = ['Frontend', 'Backend', 'Database'];
const layerLabel = { Frontend: 'Interface', Backend: 'Application', Database: 'Data' };

export default function About() {
  const byTitle = Object.fromEntries(skillGroups.map((g) => [g.title, g]));
  return (
    <>
      <Seo title="About" description="About MD Shamim: a PHP and Laravel developer building multi-role platforms, e-commerce stores and admin dashboards." />
      <PageHeader title="I build web applications from the database up to the interface.">
        PHP and Laravel are my main tools, with React and Tailwind CSS for the front end.
      </PageHeader>

      <section aria-labelledby="intro-title" className="border-y border-line bg-surface">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <h2 id="intro-title" className="text-2xl font-semibold lg:col-span-4">Hello, I&rsquo;m MD Shamim</h2>
          <div className="space-y-5 text-lg lg:col-span-7 lg:col-start-6">
            <p>
              I&rsquo;m a web developer focused on PHP and Laravel. I like work where the structure
              matters: who the users are, what each of them can do, and how the data fits together.
            </p>
            <p className="text-muted">
              I work across the whole application, so a feature is designed once, from the table that
              stores it to the screen that shows it. I also keep the front end modern, using React and
              Tailwind CSS where an interface needs it.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="practice-title" className="wrap py-20 md:py-28">
        <SectionHeading id="practice-title" title="Where the practice comes from">
          Three projects, and the part of development each one trained. This is a list of work, not a dated timeline.
        </SectionHeading>
        <ul className="border-b border-line">
          {projects.map((p) => (
            <li key={p.slug} className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-8">
              <h3 className="text-2xl font-semibold md:col-span-3">{p.name}</h3>
              <p className="text-muted md:col-span-6">{practice[p.slug]}</p>
              <p className="text-sm md:col-span-3 md:text-right">{p.status}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="stack-title" className="border-y border-line bg-surface">
        <div className="wrap py-20 md:py-28">
          <SectionHeading id="stack-title" title="Skills and technologies">
            A request passes through the interface, the application and the data layer. These are the tools I use at each step.
          </SectionHeading>
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="space-y-3 lg:col-span-8">
              {layers.map((key, i) => (
                <div key={key}>
                  <div className="grid gap-4 rounded-lg border border-line bg-bg p-5 sm:grid-cols-[9rem_1fr] sm:items-center sm:p-6">
                    <div>
                      <p className="font-display text-xl font-semibold">{layerLabel[key]}</p>
                      <p className="text-sm text-muted">{key}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {byTitle[key].items.map((s) => (
                        <li key={s} className="rounded-sm bg-accent-soft px-3 py-1.5 text-[14px]">{s}</li>
                      ))}
                    </ul>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="mx-auto h-4 w-px bg-line" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-line bg-bg p-5 sm:p-6 lg:col-span-4">
              <p className="font-display text-xl font-semibold">Tools</p>
              <p className="text-sm text-muted">Around every layer</p>
              <ul className="mt-5 space-y-2.5">
                {byTitle.Tools.items.map((t) => (
                  <li key={t} className="border-b border-line pb-2.5 text-[15px] last:border-0">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="learning-title" className="wrap py-20 md:py-28">
        <SectionHeading id="learning-title" title="How I keep learning" />
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {learning.map((l) => (
            <div key={l.title} className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-semibold">{l.title}</h3>
              <p className="mt-2 text-muted">{l.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pb-20 md:pb-28" aria-label="Next steps">
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-line p-8 sm:flex-row sm:items-center sm:p-10">
          <p className="max-w-md font-display text-2xl font-semibold">See the projects, or tell me about yours.</p>
          <div className="flex flex-wrap gap-3">
            <Button to="/projects">View projects</Button>
            <Button to="/contact" variant="secondary">Let&rsquo;s talk</Button>
          </div>
        </div>
      </section>
    </>
  );
}
