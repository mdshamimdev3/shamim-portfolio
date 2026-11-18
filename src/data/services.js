// Detailed service descriptions. `id` doubles as the contact form project type.
export const serviceDetails = [
  {
    id: 'laravel-app',
    title: 'Laravel web application development',
    text: 'Custom applications on Laravel, built from the data model up to the screens people use.',
    deliverables: [
      'Database schema and migrations',
      'Authentication and role-based access',
      'Validated forms and CRUD screens',
      'A readable, organised codebase',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce development',
    text: 'Online stores with a clear shopping flow for customers and simple management for you.',
    deliverables: [
      'Product and category management',
      'Cart and checkout flow',
      'Order management',
      'Wishlists and reviews where needed',
    ],
  },
  {
    id: 'admin-dashboard',
    title: 'Admin dashboard development',
    text: 'Back-office interfaces for the people who run the product every day.',
    deliverables: [
      'Tables with search and filters',
      'Create, edit and delete workflows',
      'Role-based permissions',
      'Order, product or content management',
    ],
  },
  {
    id: 'backend',
    title: 'Backend systems',
    text: 'The server side of an application: data, rules and access control that stay manageable as features grow.',
    deliverables: [
      'Database design',
      'Eloquent models and relationships',
      'Authentication and authorization',
      'Business logic in clear layers',
    ],
  },
  {
    id: 'api',
    title: 'API development and integration',
    text: 'REST APIs for web and mobile clients, and connections to the third-party services you already use.',
    deliverables: [
      'REST endpoints with consistent responses',
      'Request validation and error handling',
      'Authentication for API clients',
      'Postman collection for testing',
    ],
  },
  {
    id: 'maintenance',
    title: 'Website maintenance',
    text: 'Ongoing care for a site that already exists, from small fixes to planned improvements.',
    deliverables: [
      'Bug fixes',
      'Framework and dependency updates',
      'Small feature additions',
      'Code clean-up',
    ],
  },
];

export const projectTypes = [
  ...serviceDetails.map((s) => ({ id: s.id, label: s.title })),
  { id: 'other', label: 'Something else' },
];

export const processSteps = [
  { title: 'Discuss', text: 'We talk through what you need, who will use it and what a good result looks like.' },
  { title: 'Plan', text: 'I outline the data model, user roles and main screens before building anything.' },
  { title: 'Build', text: 'Work happens in stages, so you can see progress and give feedback early.' },
  { title: 'Review', text: 'We test the features together and fix what needs fixing.' },
  { title: 'Hand over', text: 'You receive the code, setup notes and a clear next step.' },
];
