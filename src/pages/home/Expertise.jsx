import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import { skillGroups } from '../../data/site';

export default function Expertise() {
  return (
    <section aria-labelledby="skills-title" className="border-t border-line">
      <div className="wrap py-20 md:py-28">
        <SectionHeading id="skills-title" title="Technical expertise" to="/about" linkLabel="Skills in detail">
          The tools I use day to day, grouped by where they sit in the stack.
        </SectionHeading>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60} className="border-t border-ink pt-5">
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-[15px] text-muted">
                {g.items.map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
