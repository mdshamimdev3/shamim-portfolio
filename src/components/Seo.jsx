// React 19 hoists <title> and <meta> rendered anywhere into <head>.
const DEFAULT_DESC =
  'MD Shamim is a PHP and Laravel web developer building multi-role platforms, e-commerce stores and admin dashboards.';

export default function Seo({ title, description = DEFAULT_DESC }) {
  const full = title ? `${title} | MD Shamim` : 'MD Shamim | PHP / Laravel Web Developer';
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
    </>
  );
}
