// Single source of truth for real profile data.
// Only information supplied by MD Shamim lives here. Edit freely.

export const site = {
  name: 'MD Shamim',
  wordmark: 'MD SHAMIM',
  role: 'PHP / Laravel Web Developer',
  email: 'mdshamimdev3@gmail.com',
  github: 'https://github.com/mdshamimdev3',
  githubHandle: 'mdshamimdev3',
  // Change `open` / `label` when your availability changes.
  availability: { open: true, label: 'Open to new projects' },
};

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Resume' },
];

export const projects = [
  {
    slug: 'noor',
    name: 'NOOR',
    summary: 'A multi-restaurant food delivery and management platform built with Laravel.',
    status: 'Case study',
    categories: ['Laravel', 'Platform'],
    tags: ['Laravel', 'Multi-role architecture', 'Role-based access', 'Cart and checkout'],
    live: 'https://e-noor.ethiodeploy.app/',
    github: null,
  },
  {
    slug: 'stylezo',
    name: 'STYLEZO',
    summary: 'An e-commerce platform with a responsive storefront and product management.',
    status: 'Live',
    categories: ['E-commerce'],
    tags: ['E-commerce', 'Product management', 'Responsive interface'],
    live: 'https://stylezofashion.com/',
    github: null,
  },
  {
    slug: 'e-dish',
    name: 'E-DISH',
    summary:
      'A Laravel e-commerce application with an admin dashboard, order management, wishlists and reviews.',
    status: 'On GitHub',
    categories: ['Laravel', 'E-commerce'],
    tags: ['Laravel', 'Product CRUD', 'Admin dashboard', 'Wishlist and reviews'],
    live: 'https://e-noor.ethiodeploy.app/',
    github: 'https://github.com/mdshamimdev3/DISH-Ecommerce',
  },
];

export const skillGroups = [
  { title: 'Backend', items: ['PHP', 'Laravel', 'REST API', 'Authentication', 'Authorization'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'Database', items: ['MySQL', 'Database design', 'Eloquent ORM'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Composer', 'Postman'] },
];

export const services = [
  { title: 'Laravel web application development', text: 'Custom applications on Laravel, from the data model to the interface.' },
  { title: 'E-commerce development', text: 'Product catalogues, carts, checkout and order management.' },
  { title: 'Admin dashboard development', text: 'Back-office tools for managing products, orders, content and users.' },
  { title: 'Backend development', text: 'Clean PHP and Laravel back ends with authentication and authorization.' },
  { title: 'REST API development', text: 'Well-structured APIs for web and mobile clients.' },
  { title: 'Website maintenance', text: 'Fixes, updates and improvements for sites that already exist.' },
];

export const philosophy = [
  {
    title: 'Start with the data model',
    text: 'Tables, relationships and ownership come first. A clear schema keeps every later feature simpler to build and to change.',
  },
  {
    title: 'Make access rules explicit',
    text: 'Who can see and change what belongs in the code, not in the interface alone. Role checks and data isolation are part of the design from the first migration.',
  },
  {
    title: 'Build the back office properly',
    text: 'Admin dashboards get used every day. They deserve the same care as the public site: readable tables, honest validation and fast actions.',
  },
];
