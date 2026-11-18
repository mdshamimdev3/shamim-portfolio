import Button from '../components/Button';
import Seo from '../components/Seo';

// Temporary page for routes that are built in a later phase.
export default function Placeholder({ title, phase }) {
  return (
    <section className="wrap flex min-h-[80svh] flex-col justify-center pb-16 pt-32">
      <Seo title={title} />
      <h1 className="text-4xl font-semibold md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        This page is built in phase {phase} of the portfolio. The route and navigation already work.
      </p>
      <div className="mt-8">
        <Button to="/">Back to home</Button>
      </div>
    </section>
  );
}
