// SAMPLE CONTENT ONLY. These are outlines of articles that could be written.
// Nothing here is published, and there are deliberately no dates or reading times.
// Replace with real posts when they exist.
export const blogCategories = ['Laravel', 'PHP', 'MySQL', 'Web development'];

export const posts = [
  {
    id: 'role-based-access',
    title: 'Role-based access in Laravel, step by step',
    category: 'Laravel',
    summary:
      'Outline: modelling roles, then using policies and middleware so each type of user only reaches what belongs to them.',
    featured: true,
  },
  {
    id: 'data-isolation',
    title: 'Keeping each restaurant’s data separate',
    category: 'Laravel',
    summary:
      'Outline: scoping queries by owner in a multi-vendor application so one vendor never sees another’s records.',
  },
  {
    id: 'eloquent-ecommerce',
    title: 'Modelling an e-commerce schema with Eloquent',
    category: 'MySQL',
    summary:
      'Outline: products, categories, orders and reviews, and the relationships that connect them.',
  },
  {
    id: 'form-requests',
    title: 'Validating input with Form Requests',
    category: 'PHP',
    summary:
      'Outline: moving validation out of controllers and returning clear error messages to the user.',
  },
  {
    id: 'admin-dashboard',
    title: 'What a good admin dashboard needs',
    category: 'Web development',
    summary:
      'Outline: readable tables, fast filters, safe delete actions and sensible permissions.',
  },
  {
    id: 'small-rest-api',
    title: 'Designing a small REST API in Laravel',
    category: 'PHP',
    summary:
      'Outline: resource routes, consistent JSON responses and testing endpoints with Postman.',
  },
];
