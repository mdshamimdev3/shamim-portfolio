import Button from '../components/Button';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80svh] flex-col justify-center pb-16 pt-32">
      <Seo title="Page not found" description="This page doesn't exist." />
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold md:text-6xl">
        That page doesn&rsquo;t exist.
      </h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        The link may be broken or the page may have moved. Head back to the home page or browse the projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/">Go home</Button>
        <Button to="/projects" variant="secondary">See projects</Button>
      </div>
    </section>
  );
}
