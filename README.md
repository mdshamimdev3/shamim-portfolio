# MD Shamim — Developer Platform

A polished, responsive multi-page portfolio prototype built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home
- `about.html` — About and technical toolkit
- `projects.html` — Selected work
- `noor.html`, `stylezo.html`, `edish.html` — Project case studies
- `services.html` — Services
- `blog.html` — Journal landing page
- `contact.html` — Contact and visitor review forms
- `dashboard.html` — Local review moderation demo

## Run locally (no Python required)
Open PowerShell in this folder and run:
```powershell
& "C:\php85\php.exe" -S localhost:8000
```
Then open `http://localhost:8000`.
Alternatively, if Node.js is installed, run `npm install` then `npm run dev` only if you place these files in a Vite project; this package itself is static HTML.

## Current prototype behaviour
- Responsive navigation, reveal animations and light/dark theme.
- Theme preference and reviews are stored in browser `localStorage`.
- Contact form opens the visitor's default email application using a `mailto:` link.
- Reviews can be approved/deleted in `dashboard.html` in the same browser.

## Important production notes
This is a frontend portfolio prototype, not a production backend:
- Dashboard has no authentication or server-side authorization. Do not publish it as a secure admin panel.
- Reviews and moderation are local to one browser; they do not sync across devices.
- Contact form does not send email directly from a server.
- Blog content is currently a planned editorial landing page.
- For production, implement Laravel authentication, authorization policies/middleware, CSRF protection, validation, database-backed projects/blogs/reviews/messages, email delivery and audit logs.
- Do not claim unverified project metrics or client results. Expand case studies only with verified implementation details.
