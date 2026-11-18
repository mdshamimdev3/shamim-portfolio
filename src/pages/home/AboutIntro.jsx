import SectionHeading from '../../components/SectionHeading';

export default function AboutIntro() {
  return (
    <section aria-labelledby="about-title" className="border-y border-line bg-surface">
      <div className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="about-title" title="A developer who owns the whole build" to="/about" linkLabel="More about me" />
        </div>
        <div className="space-y-5 text-lg lg:col-span-6 lg:col-start-7">
          <p>
            I&rsquo;m MD Shamim, a PHP and Laravel developer. I work across the whole application:
            the database, the back end, and the interface people actually use.
          </p>
          <p className="text-muted">
            My work so far includes a multi-restaurant delivery platform, an e-commerce store, and a
            Laravel shop with an admin dashboard. Each one taught me something about structuring
            roles, orders and data so they stay manageable as the project grows.
          </p>
        </div>
      </div>
    </section>
  );
}
