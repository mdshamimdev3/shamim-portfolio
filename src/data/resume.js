import { projects, site, skillGroups } from './site';

// Only verified information is included.
// To add real history, fill these arrays. Empty sections are hidden automatically.
// Example entry:  { title: 'Role', org: 'Company', period: '2024 to 2025', points: ['...'] }
export const resume = {
  name: site.name,
  role: site.role,
  email: site.email,
  github: site.github,
  summary:
    'PHP and Laravel developer who builds web applications across the database, back end and interface. Projects include a multi-restaurant delivery platform, an e-commerce store and a Laravel shop with an admin dashboard.',
  skillGroups,
  projects,
  experience: [],
  education: [],
  certifications: [],
};
