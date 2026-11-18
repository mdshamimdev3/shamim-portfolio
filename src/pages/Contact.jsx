import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Availability from '../components/Availability';
import GithubIcon from '../components/GithubIcon';
import { projectTypes } from '../data/services';
import { site } from '../data/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const empty = { name: '', email: '', type: '', budget: '', deadline: '', details: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name.';
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email address, like name@example.com.';
  if (!v.type) e.type = 'Choose the closest project type.';
  if (v.deadline) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(v.deadline) < today) e.deadline = 'Pick today or a later date.';
  }
  if (v.details.trim().length < 20) e.details = 'Describe the project in at least 20 characters.';
  return e;
}

function buildMailto(v) {
  const label = projectTypes.find((t) => t.id === v.type)?.label ?? 'Project inquiry';
  const lines = [
    `Name: ${v.name.trim()}`,
    `Email: ${v.email.trim()}`,
    `Project type: ${label}`,
    `Budget: ${v.budget.trim() || 'Not given'}`,
    `Deadline: ${v.deadline || 'Not given'}`,
    '',
    v.details.trim(),
  ];
  return `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry: ${label}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

const inputCls = (err) =>
  `w-full rounded-md border bg-bg px-4 py-3 text-base placeholder:text-muted focus:border-ink focus:outline-none ${err ? 'border-danger' : 'border-line'}`;

function Field({ id, label, optional, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] font-medium">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const preset = params.get('type');
  const [values, setValues] = useState({
    ...empty,
    type: projectTypes.some((t) => t.id === preset) ? preset : '',
  });
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const aria = (name, hint) => ({
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : hint ? `${name}-hint` : undefined,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      e.currentTarget.elements.namedItem(first)?.focus();
      return;
    }
    setReady(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the address is visible and selectable */
    }
  };

  return (
    <>
      <Seo title="Contact" description="Contact MD Shamim about a Laravel, e-commerce or backend project." />
      <PageHeader title="Let’s talk about your project">
        Email is the most direct way to reach me. You can also use the form to put your details in order first.
      </PageHeader>

      <section aria-label="Contact" className="wrap grid gap-12 pb-20 md:pb-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {ready ? (
            <div role="status" className="rounded-lg border border-line bg-surface p-6 sm:p-10">
              <h2 className="text-2xl font-semibold">Your message is ready, but not sent</h2>
              <p className="mt-3 max-w-prose text-muted">
                This website has no email service connected, so nothing has been delivered. Open the
                message in your email app to send it to {site.email}.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={buildMailto(values)}
                  className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-[15px] font-medium text-bg transition-colors hover:bg-accent hover:text-on-accent"
                >
                  <Mail className="size-4" aria-hidden="true" /> Open in email app
                </a>
                <button type="button" onClick={() => setReady(false)} className="rounded-md border border-line px-5 py-3 text-[15px] hover:border-ink">
                  Edit message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={set('name')} className={inputCls(errors.name)} {...aria('name')} />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} className={inputCls(errors.email)} {...aria('email')} />
                </Field>
              </div>

              <Field id="type" label="Project type" error={errors.type}>
                <select id="type" name="type" value={values.type} onChange={set('type')} className={inputCls(errors.type)} {...aria('type')}>
                  <option value="">Choose one</option>
                  {projectTypes.map((t) => (<option key={t.id} value={t.id}>{t.label}</option>))}
                </select>
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="budget" label="Budget" optional hint="A figure or range, in your own currency.">
                  <input id="budget" name="budget" type="text" value={values.budget} onChange={set('budget')} className={inputCls()} {...aria('budget', true)} />
                </Field>
                <Field id="deadline" label="Deadline" optional error={errors.deadline}>
                  <input id="deadline" name="deadline" type="date" value={values.deadline} onChange={set('deadline')} className={inputCls(errors.deadline)} {...aria('deadline')} />
                </Field>
              </div>

              <Field id="details" label="Project details" error={errors.details} hint="What are you building, who will use it, and what must it do?">
                <textarea id="details" name="details" rows={6} value={values.details} onChange={set('details')} className={inputCls(errors.details)} {...aria('details', true)} />
              </Field>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-[15px] font-medium text-bg transition-colors hover:bg-accent hover:text-on-accent">
                  Prepare message
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
                <p className="text-sm text-muted">Nothing is sent from this page. You&rsquo;ll review it in your email app first.</p>
              </div>
            </form>
          )}
        </div>

        <aside aria-label="Contact details" className="lg:col-span-4 lg:col-start-9">
          <h2 className="text-xl font-semibold">Email directly</h2>
          <a href={`mailto:${site.email}`} className="mt-3 block break-all text-lg underline decoration-line underline-offset-[6px] hover:text-accent hover:decoration-accent">
            {site.email}
          </a>
          <button type="button" onClick={copyEmail} className="mt-3 inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
            {copied ? <Check className="size-4 text-ok" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy address'}
          </button>

          <h2 className="mt-10 text-xl font-semibold">Elsewhere</h2>
          <a href={site.github} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 hover:text-accent">
            <GithubIcon className="size-5" /> github.com/{site.githubHandle}
          </a>

          <h2 className="mt-10 text-xl font-semibold">Availability</h2>
          <div className="mt-3"><Availability /></div>
        </aside>
      </section>
    </>
  );
}
